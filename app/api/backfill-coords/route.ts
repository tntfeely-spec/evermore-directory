// app/api/backfill-coords/route.ts
// ONE-TIME USE: DELETE THIS FILE after running successfully
// Visit: https://funeralhomedirectories.com/api/backfill-coords?token=evermore2026
// Refresh until status is "complete", then delete this file from GitHub

import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
// @ts-ignore
import zipcodes from 'zipcodes';

const SECRET_TOKEN = 'evermore2026';
export const maxDuration = 60;

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');
  if (token !== SECRET_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    return NextResponse.json({ error: 'SUPABASE_SERVICE_ROLE_KEY not set in Vercel' }, { status: 500 });
  }

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey);

  const { data: homes, error } = await supabase
    .from('funeral_homes')
    .select('id, zip, city, state')
    .is('latitude', null)
    .limit(500);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!homes || homes.length === 0) {
    return NextResponse.json({ status: 'complete', message: 'All done!' });
  }

  let updated = 0, skipped = 0, failed = 0;

  for (const home of homes) {
    let lat: number | null = null;
    let lng: number | null = null;

    // Try 1: ZIP lookup
    if (home.zip) {
      const zip = (home.zip || '').trim().replace(/[^0-9]/g, '').slice(0, 5).padStart(5, '0');
      if (zip.length === 5) {
        const info = zipcodes.lookup(zip);
        if (info?.latitude) {
          lat = info.latitude;
          lng = info.longitude;
        }
      }
    }

    // Try 2: city + state lookup
    if (!lat && home.city && home.state) {
      const results = zipcodes.lookupByName(home.city, home.state);
      if (results && results.length > 0 && results[0].latitude) {
        lat = results[0].latitude;
        lng = results[0].longitude;
      }
    }

    // Try 3: state centroid fallback
    if (!lat && home.state) {
      const centroids: Record<string, [number, number]> = {
        AL:[32.806671,-86.791130], AK:[61.370716,-152.404419], AZ:[33.729759,-111.431221],
        AR:[34.969704,-92.373123], CA:[36.116203,-119.681564], CO:[39.059811,-105.311104],
        CT:[41.597782,-72.755371], DE:[39.318523,-75.507141], FL:[27.766279,-81.686783],
        GA:[33.040619,-83.643074], HI:[21.094318,-157.498337], ID:[44.240459,-114.478828],
        IL:[40.349457,-88.986137], IN:[39.849426,-86.258278], IA:[42.011539,-93.210526],
        KS:[38.526600,-96.726486], KY:[37.668140,-84.670067], LA:[31.169960,-91.867805],
        ME:[44.693947,-69.381927], MD:[39.063946,-76.802101], MA:[42.230171,-71.530106],
        MI:[43.326618,-84.536095], MN:[45.694454,-93.900192], MS:[32.741646,-89.678696],
        MO:[38.456085,-92.288368], MT:[46.921925,-110.454353], NE:[41.125370,-98.268082],
        NV:[38.313515,-117.055374], NH:[43.452492,-71.563896], NJ:[40.298904,-74.521011],
        NM:[34.840515,-106.248482], NY:[42.165726,-74.948051], NC:[35.630066,-79.806419],
        ND:[47.528912,-99.784012], OH:[40.388783,-82.764915], OK:[35.565342,-96.928917],
        OR:[44.572021,-122.070938], PA:[40.590752,-77.209755], RI:[41.680893,-71.511780],
        SC:[33.856892,-80.945007], SD:[44.299782,-99.438828], TN:[35.747845,-86.692345],
        TX:[31.054487,-97.563461], UT:[40.150032,-111.862434], VT:[44.045876,-72.710686],
        VA:[37.769337,-78.169968], WA:[47.400902,-121.490494], WV:[38.491226,-80.954453],
        WI:[44.268543,-89.616508], WY:[42.755966,-107.302490], DC:[38.897438,-77.026817]
      };
      const c = centroids[home.state.toUpperCase()];
      if (c) { lat = c[0]; lng = c[1]; }
    }

    if (!lat) {
      skipped++;
      continue;
    }

    const { error: e } = await supabase
      .from('funeral_homes')
      .update({ latitude: lat, longitude: lng })
      .eq('id', home.id);

    if (e) { failed++; } else { updated++; }
  }

  const { count: remaining } = await supabase
    .from('funeral_homes')
    .select('*', { count: 'exact', head: true })
    .is('latitude', null);

  return NextResponse.json({
    status: remaining === 0 ? 'complete' : 'batch_done',
    batch_updated: updated,
    batch_skipped: skipped,
    batch_failed: failed,
    still_remaining: remaining,
    next_step: remaining && remaining > 0 ? 'Refresh to process next batch' : 'Done! Delete this file from GitHub'
  });
}
