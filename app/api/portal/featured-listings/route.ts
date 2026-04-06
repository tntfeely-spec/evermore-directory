import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function sb() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export async function GET() {
  const { data, error } = await sb()
    .from('funeral_homes')
    .select('id, business_name, city, state, listing_tier, featured_until')
    .eq('is_featured', true)
    .order('state')
    .order('city')

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ listings: data || [] })
}

export async function POST(req: NextRequest) {
  const { id, action } = await req.json()
  if (!id || action !== 'deactivate') {
    return NextResponse.json({ error: 'id and action=deactivate required' }, { status: 400 })
  }
  const { error } = await sb()
    .from('funeral_homes')
    .update({ is_featured: false, listing_tier: 'free', featured_until: null })
    .eq('id', id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
