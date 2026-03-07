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
    .select('id, zip')
    .is('latitude', null)
    .not('zip', 'is', null)
    .limit(500);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!homes || homes.length === 0) {
    return NextResponse.json({ status: 'complete', message: 'All done!' });
  }

  let updated = 0, skipped = 0, failed = 0;

  for (const home of homes) {
    const zip = (home.zip || '').trim().replace(/[^0-9]/g, '').slice(0, 5).padStart(5, '0');
    if (zip.length < 5) { skipped++; continue; }
    const info = zipcodes.lookup(zip);
    if (!info?.latitude) { failed++; continue; }
    const { error: e } = await supabase
      .from('funeral_homes')
      .update({ latitude: info.latitude, longitude: info.longitude })
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
