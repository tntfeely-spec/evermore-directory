/*
  Requires this Supabase function (already created):

  CREATE OR REPLACE FUNCTION check_city_exclusive(p_city text, p_state text, p_exclude_id uuid DEFAULT NULL)
  RETURNS boolean AS $$
  BEGIN
    RETURN NOT EXISTS (
      SELECT 1 FROM funeral_homes
      WHERE city = p_city
      AND state = p_state
      AND is_featured = true
      AND (p_exclude_id IS NULL OR id != p_exclude_id)
    );
  END;
  $$ LANGUAGE plpgsql;
*/
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function sb() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export async function POST(req: NextRequest) {
  const { city, state } = await req.json()
  if (!city || !state) {
    return NextResponse.json({ available: false, message: 'City and state required' }, { status: 400 })
  }

  const { data, error } = await sb().rpc('check_city_exclusive', {
    p_city: city.trim(),
    p_state: state.trim().toUpperCase(),
  })

  if (error) {
    return NextResponse.json({ available: false, message: error.message }, { status: 500 })
  }

  return NextResponse.json({
    available: data === true,
    message: data === true
      ? `Exclusive slot open in ${city}. Good to close.`
      : `Exclusive slot taken in ${city}. Offer Premier instead.`,
  })
}
