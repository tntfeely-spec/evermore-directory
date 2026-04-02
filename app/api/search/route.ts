// app/api/search/route.ts
//
// Three search paths:
//   1. Business name  → individual listing pages  /funeral-homes/[state]/[city]/[slug]
//   2. City name      → city pages                /funeral-homes/[state]/[city]
//   3. ZIP / partial  → Nominatim geocode → nearby funeral homes via searchByCoords RPC

import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ~25 mile radius in degrees (rough approximation, works for CONUS)
const RADIUS_DEG = 0.45;

function isZipCode(q: string): boolean {
  return /^\d{3,5}$/.test(q.trim());
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Build a display result for a city (routes to city page)
function buildCityResult(city: string, state: string, count: number) {
  return {
    type: 'city' as const,
    city,
    state,
    url: `/funeral-homes/${state.toLowerCase()}/${slugify(city)}`,
    label: `${city}, ${state}`,
    sublabel: `${count} funeral home${count !== 1 ? 's' : ''}`,
  };
}

// Build a display result for an individual funeral home (routes to listing page)
function buildHomeResult(home: { business_name: string; city: string; state: string }) {
  return {
    type: 'home' as const,
    city: home.city,
    state: home.state,
    url: `/funeral-homes/${home.state.toLowerCase()}/${slugify(home.city)}/${slugify(home.business_name)}`,
    label: home.business_name,
    sublabel: `${home.city}, ${home.state}`,
  };
}

// Geocode a ZIP code or place name via Nominatim (free, no API key)
async function geocodeWithNominatim(query: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const isZip = /^\d{3,5}$/.test(query.trim());
    const params = new URLSearchParams({
      format: 'json',
      limit: '1',
      countrycodes: 'us',
    });
    if (isZip) {
      params.set('postalcode', query.trim());
    } else {
      params.set('q', query.trim());
    }
    const res = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
      headers: { 'User-Agent': 'Evermore Directory funeralhomedirectories.com' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || data.length === 0) return null;
    return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  } catch {
    return null;
  }
}

// Search by lat/lng using the existing RPC function, return individual home results
async function searchByCoords(lat: number, lng: number) {
  const { data, error } = await supabase.rpc('search_nearby', {
    center_lat: lat,
    center_lng: lng,
    radius_deg: RADIUS_DEG,
  });

  if (error || !data || data.length === 0) return [];

  return (data as any[])
    .filter((row) => row.business_name)
    .slice(0, 8)
    .map((row) => buildHomeResult({ business_name: row.business_name, city: row.city, state: row.state }));
}

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams.get('q')?.trim() ?? '';

    if (!query || query.length < 2) {
      return NextResponse.json({ results: [] });
    }

    // ── PATH 1: ZIP CODE ──────────────────────────────────────────────
    if (isZipCode(query)) {
      // Partial ZIP (3-4 digits): search DB by zip prefix for individual homes
      if (query.length < 5) {
        const { data: partial } = await supabase
          .from('funeral_homes')
          .select('business_name, city, state')
          .ilike('zip', `${query}%`)
          .order('business_name')
          .limit(8);
        if (partial && partial.length > 0) {
          return NextResponse.json({ results: partial.map(buildHomeResult) });
        }
        return NextResponse.json({ results: [] });
      }

      // Full 5-digit ZIP: geocode with Nominatim then find nearby homes
      const coords = await geocodeWithNominatim(query);
      if (coords) {
        const results = await searchByCoords(coords.lat, coords.lng);
        if (results.length > 0) {
          return NextResponse.json({ results });
        }
      }

      // Fallback: try prefix match in our DB
      const { data: fallback } = await supabase
        .from('funeral_homes')
        .select('business_name, city, state, latitude, longitude')
        .like('zip', `${query.slice(0, 3)}%`)
        .not('latitude', 'is', null)
        .limit(1);

      if (fallback?.[0]?.latitude && fallback[0].longitude) {
        const results = await searchByCoords(
          parseFloat(fallback[0].latitude),
          parseFloat(fallback[0].longitude)
        );
        if (results.length > 0) {
          return NextResponse.json({ results });
        }
      }

      return NextResponse.json({ results: [] });
    }

    // ── PATH 2 & 3: BUSINESS NAME + CITY NAME ────────────────────────
    // Strip optional state suffix like "Brentwood TN" or "Brentwood, TN"
    const stateMatch = query.match(/[,\s]+([A-Z]{2})\s*$/i);
    const stateSuffix = stateMatch ? stateMatch[1].toUpperCase() : undefined;
    const nameQuery = stateSuffix
      ? query.replace(/[,\s]+[A-Z]{2}\s*$/i, '').trim()
      : query;

    // Run business name search and city name search in parallel
    const stateFilter = stateSuffix
      ? (qb: any) => qb.ilike('state', stateSuffix)
      : (qb: any) => qb;

    const [nameResult, cityResult] = await Promise.all([
      // Business name matches
      stateFilter(
        supabase
          .from('funeral_homes')
          .select('business_name, city, state')
          .ilike('business_name', `%${nameQuery}%`)
          .order('business_name')
      ).limit(5),
      // City matches — get distinct cities with counts
      stateFilter(
        supabase
          .from('funeral_homes')
          .select('city, state')
          .ilike('city', `${nameQuery}%`)
      ).limit(50),
    ]);

    const results: ReturnType<typeof buildHomeResult | typeof buildCityResult>[] = [];

    // Add business name matches (individual listing pages)
    if (nameResult.data && nameResult.data.length > 0) {
      const seen = new Set<string>();
      for (const row of nameResult.data) {
        const key = `${row.business_name.toLowerCase()}-${row.city.toLowerCase()}-${row.state}`;
        if (!seen.has(key)) {
          seen.add(key);
          results.push(buildHomeResult(row));
        }
      }
    }

    // Add city matches (city pages), aggregated with counts
    if (cityResult.data && cityResult.data.length > 0) {
      const cityCounts = new Map<string, { city: string; state: string; count: number }>();
      for (const row of cityResult.data) {
        const key = `${row.city.toLowerCase()}-${row.state.toLowerCase()}`;
        const existing = cityCounts.get(key);
        if (existing) {
          existing.count++;
        } else {
          cityCounts.set(key, { city: row.city, state: row.state, count: 1 });
        }
      }
      for (const { city, state, count } of cityCounts.values()) {
        results.push(buildCityResult(city, state, count));
      }
    }

    if (results.length > 0) {
      return NextResponse.json({ results: results.slice(0, 10) });
    }

    // ── FALLBACK: Nominatim geocode for suburbs/places not in our DB ─
    const coords = await geocodeWithNominatim(stateSuffix ? `${nameQuery}, ${stateSuffix}` : nameQuery);
    if (coords) {
      const nearbyResults = await searchByCoords(coords.lat, coords.lng);
      if (nearbyResults.length > 0) {
        return NextResponse.json({ results: nearbyResults });
      }
    }

    return NextResponse.json({ results: [] });

  } catch (err) {
    console.error('Search error:', err);
    return NextResponse.json({ results: [] });
  }
}
