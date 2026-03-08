// app/api/search/route.ts
// Drop into: app/api/search/route.ts
// Replaces any existing search route
//
// WHAT THIS DOES:
//   "Brentwood"  -> zipcodes.lookupByName finds Brentwood TN -> lat/lng -> nearby funeral homes
//   "37027"      -> zipcodes.lookup finds coords -> nearby funeral homes
//   "Nashville"  -> city name match in DB (existing behavior) + coords for radius
//   Any suburb   -> resolved to coords without adding it to the database

import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
// @ts-ignore
import zipcodes from 'zipcodes';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ~25 mile radius in degrees (rough approximation, works for CONUS)
const RADIUS_DEG = 0.45;

function isZipCode(q: string): boolean {
  return /^\d{5}$/.test(q.trim());
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

// Build a display result for a city
function buildCityResult(city: string, state: string, count: number, label?: string) {
  return {
    city,
    state,
    stateSlug: state.toLowerCase(),
    citySlug: slugify(city),
    url: `/funeral-homes/${state.toLowerCase()}/${slugify(city)}`,
    label: label ?? `${city}, ${state}`,
    sublabel: `${count} funeral home${count !== 1 ? 's' : ''}`,
    funeralHomeCount: count,
  };
}

// Search by lat/lng bounding box, group results by city
async function searchByCoords(lat: number, lng: number, inputLabel: string) {
  const { data, error } = await supabase.rpc('search_nearby', {
    center_lat: lat,
    center_lng: lng,
    radius_deg: RADIUS_DEG,
  });

  if (error || !data || data.length === 0) return NextResponse.json({ results: [] });

  // Group by city+state and count
  const cityMap = new Map<string, { city: string; state: string; count: number }>();
  for (const row of data) {
    const key = `${row.city}-${row.state}`;
    if (cityMap.has(key)) {
      cityMap.get(key)!.count++;
    } else {
      cityMap.set(key, { city: row.city, state: row.state, count: 1 });
    }
  }

  const results = Array.from(cityMap.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, 8)
    .map(({ city, state, count }) =>
      buildCityResult(city, state, count, `${city}, ${state} — near ${inputLabel}`)
    );

  return NextResponse.json({ results });
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')?.trim() ?? '';

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  // ----------------------------------------------------------------
  // PATH 1: ZIP CODE
  // ----------------------------------------------------------------
  if (isZipCode(query)) {
    const info = zipcodes.lookup(query);

    if (info?.latitude && info?.longitude) {
      return searchByCoords(info.latitude, info.longitude, `ZIP ${query}`);
    }

    // ZIP not in zipcodes dataset -- try prefix fallback in our DB
    const { data: fallback } = await supabase
      .from('funeral_homes')
      .select('city, state, latitude, longitude')
      .like('zip', `${query.slice(0, 3)}%`)
      .not('latitude', 'is', null)
      .limit(1);

    if (fallback?.[0]?.latitude && fallback[0].longitude) {
      return searchByCoords(fallback[0].latitude, fallback[0].longitude, `ZIP ${query}`);
    }

    return NextResponse.json({ results: [] });
  }

  // ----------------------------------------------------------------
  // PATH 2: CITY/SUBURB NAME -- resolve via zipcodes package
  // Handles suburbs like "Brentwood" that are not stored in our DB
  // ----------------------------------------------------------------

  // Check if user typed state abbreviation: "Brentwood TN" or "Brentwood, TN"
  const stateMatch = query.match(/[,\s]+([A-Z]{2})\s*$/i);
  const stateSuffix = stateMatch ? stateMatch[1].toUpperCase() : undefined;
  const cityQuery = stateSuffix
    ? query.replace(/[,\s]+[A-Z]{2}\s*$/i, '').trim()
    : query;

  // zipcodes.lookupByName(city, state?) returns array of ZIP objects with lat/lng
  interface ZipInfo { latitude: number; longitude: number; city: string; state: string }
  let zipEntries: ZipInfo[] = [];

  if (stateSuffix) {
    zipEntries = zipcodes.lookupByName(cityQuery, stateSuffix) || [];
  } else {
    zipEntries = zipcodes.lookupByName(cityQuery) || [];
  }

  if (zipEntries.length > 0) {
    // Average coordinates across all ZIPs for this city name
    const avgLat = zipEntries.reduce((s, e) => s + e.latitude, 0) / zipEntries.length;
    const avgLng = zipEntries.reduce((s, e) => s + e.longitude, 0) / zipEntries.length;

    const coordResult = await searchByCoords(avgLat, avgLng, cityQuery);
    const payload = await coordResult.json();
    if (payload.results?.length > 0) {
      return NextResponse.json(payload);
    }
    // No funeral homes within radius -- fall through to city name match
  }

  // ----------------------------------------------------------------
  // PATH 3: CITY NAME MATCH IN DB (original behavior, enhanced)
  // ----------------------------------------------------------------

  const { data: startsWith } = await supabase
    .from('funeral_homes')
    .select('city, state')
    .ilike('city', `${cityQuery}%`)
    .order('city')
    .limit(100);

  const candidates = (startsWith && startsWith.length > 0)
    ? startsWith
    : ((await supabase
        .from('funeral_homes')
        .select('city, state')
        .ilike('city', `%${cityQuery}%`)
        .order('city')
        .limit(100)
      ).data ?? []);

  if (candidates.length === 0) return NextResponse.json({ results: [] });

  // Deduplicate by city+state
  const seen = new Set<string>();
  const unique: { city: string; state: string }[] = [];
  for (const row of candidates) {
    const key = `${row.city.toLowerCase()}-${row.state}`;
    if (!seen.has(key)) { seen.add(key); unique.push(row); }
  }

  const results = await Promise.all(
    unique.slice(0, 8).map(async ({ city, state }) => {
      const { count } = await supabase
        .from('funeral_homes')
        .select('*', { count: 'exact', head: true })
        .eq('city', city)
        .eq('state', state);
      return buildCityResult(city, state, count ?? 0);
    })
  );

  return NextResponse.json({ results });
}
