/*
  Requires listing_tier column on funeral_homes:

  ALTER TABLE funeral_homes
  ADD COLUMN IF NOT EXISTS listing_tier text DEFAULT 'free'
  CHECK (listing_tier IN ('free', 'essential', 'premier', 'exclusive'));

  CREATE INDEX IF NOT EXISTS idx_funeral_homes_listing_tier ON funeral_homes(listing_tier);
*/
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function sb() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export async function POST(req: NextRequest) {
  const { business_name, city, state, tier, plan_type } = await req.json()

  if (!business_name || !city || !state || !tier) {
    return NextResponse.json({ ok: false, error: 'business_name, city, state, and tier required' }, { status: 400 })
  }

  const tierLower = tier.toLowerCase()
  if (!['essential', 'premier', 'exclusive'].includes(tierLower)) {
    return NextResponse.json({ ok: false, error: 'Invalid tier' }, { status: 400 })
  }

  // Find matching funeral home
  const { data: matches, error: searchError } = await sb()
    .from('funeral_homes')
    .select('id, business_name, city, state')
    .ilike('business_name', business_name.trim())
    .ilike('city', city.trim())
    .eq('state', state.trim().toUpperCase())

  if (searchError) {
    return NextResponse.json({ ok: false, error: searchError.message }, { status: 500 })
  }

  if (!matches || matches.length === 0) {
    return NextResponse.json({
      ok: false,
      not_found: true,
      error: `Funeral home "${business_name}" not found in ${city}, ${state}. Contact Terry to add manually.`,
    })
  }

  const target = matches[0]

  // For Exclusive, double-check city availability before activating
  if (tierLower === 'exclusive') {
    const { data: available } = await sb().rpc('check_city_exclusive', {
      p_city: city.trim(),
      p_state: state.trim().toUpperCase(),
      p_exclude_id: target.id,
    })
    if (available !== true) {
      return NextResponse.json({
        ok: false,
        error: `Cannot activate Exclusive: another Exclusive listing already exists in ${city}.`,
      })
    }
  }

  // Calculate featured_until: 1 year from today for annual, null for monthly
  let featuredUntil: string | null = null
  if (plan_type === 'annual') {
    const oneYear = new Date()
    oneYear.setFullYear(oneYear.getFullYear() + 1)
    featuredUntil = oneYear.toISOString().slice(0, 10)
  }

  const { error: updateError } = await sb()
    .from('funeral_homes')
    .update({
      is_featured: true,
      listing_tier: tierLower,
      featured_until: featuredUntil,
    })
    .eq('id', target.id)

  if (updateError) {
    return NextResponse.json({ ok: false, error: updateError.message }, { status: 500 })
  }

  return NextResponse.json({
    ok: true,
    message: `Listing activated for ${target.business_name} in ${target.city}, ${target.state}. They are now featured.`,
    listing: target,
  })
}
