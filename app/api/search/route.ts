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
  return /^\d{3,5}$/.test(q.trim());
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

// Build a display result for an individual funeral home
function buildHomeResult(home: { business_name: string; city: string; state: string }) {
  return {
    city: home.city,
    state: home.state,
    stateSlug: home.state.toLowerCase(),
    citySlug: slugify(home.city),
    url: `/funeral-homes/${home.state.toLowerCase()}/${slugify(home.city)}/${slugify(home.business_name)}`,
    label: home.business_name,
    sublabel: `${home.city}, ${home.state}`,
    funeralHomeCount: 1,
  };
}

// Search by lat/lng bounding box, return individual home results
async function searchByCoords(lat: number, lng: number, inputLabel: string): Promise<ReturnType<typeof buildHomeResult>[]> {
  const { data, error } = await supabase.rpc('search_nearby', {
    center_lat: lat,
    center_lng: lng,
    radius_deg: RADIUS_DEG,
  });

  if (error || !data || data.length === 0) return [];

  // Deduplicate by business_name+city+state
  const seen = new Set<string>();
  const unique: { business_name: string; city: string; state: string }[] = [];
  for (const row of data) {
    if (!row.business_name) continue;
    const key = `${row.business_name.toLowerCase()}-${row.city}-${row.state}`;
    if (!seen.has(key)) { seen.add(key); unique.push(row); }
  }

  return unique.slice(0, 8).map(buildHomeResult);
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
    if (query.length < 5) {
      const { data: partial } = await supabase
        .from('funeral_homes')
        .select('business_name, city, state')
        .like('zip', `${query}%`)
        .order('is_featured', { ascending: false })
        .order('business_name')
        .limit(8);
      if (partial && partial.length > 0) return NextResponse.json({ results: partial.map(buildHomeResult) });
      return NextResponse.json({ results: [] });
    }

    const info = zipcodes.lookup(query);

    if (info?.latitude && info?.longitude) {
      const results = await searchByCoords(info.latitude, info.longitude, `ZIP ${query}`);
      if (results.length > 0) return NextResponse.json({ results });
    }

    // ZIP not in zipcodes dataset -- try prefix fallback in our DB
    const { data: fallback } = await supabase
      .from('funeral_homes')
      .select('city, state, latitude, longitude')
      .like('zip', `${query.slice(0, 3)}%`)
      .not('latitude', 'is', null)
      .limit(1);

    if (fallback?.[0]?.latitude && fallback[0].longitude) {
      const results = await searchByCoords(fallback[0].latitude, fallback[0].longitude, `ZIP ${query}`);
      if (results.length > 0) return NextResponse.json({ results });
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

    const results = await searchByCoords(avgLat, avgLng, cityQuery);
    if (results.length > 0) {
      return NextResponse.json({ results });
    }
    // No funeral homes within radius -- fall through to city name match
  }

  // ----------------------------------------------------------------
  // PATH 3: BUSINESS NAME + CITY NAME MATCH IN DB
  // ----------------------------------------------------------------

  const [{ data: byName }, { data: byCity }] = await Promise.all([
    supabase
      .from('funeral_homes')
      .select('business_name, city, state')
      .ilike('business_name', `${cityQuery}%`)
      .order('is_featured', { ascending: false })
      .order('business_name')
      .limit(5),
    supabase
      .from('funeral_homes')
      .select('business_name, city, state')
      .ilike('city', `${cityQuery}%`)
      .order('is_featured', { ascending: false })
      .order('business_name')
      .limit(5),
  ]);

  // Merge and deduplicate
  const merged = [...(byName ?? []), ...(byCity ?? [])];
  const seen = new Set<string>();
  const unique: { business_name: string; city: string; state: string }[] = [];
  for (const row of merged) {
    const key = `${row.business_name.toLowerCase()}-${row.city.toLowerCase()}-${row.state}`;
    if (!seen.has(key)) { seen.add(key); unique.push(row); }
  }

  if (unique.length === 0) return NextResponse.json({ results: [] });

  const results = unique.slice(0, 8).map(buildHomeResult);
  return NextResponse.json({ results });
}
