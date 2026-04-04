/*
  create table if not exists rep_profiles (
    id uuid default gen_random_uuid() primary key,
    username text not null unique,
    full_legal_name text, preferred_name text,
    address_street text, address_city text, address_state text, address_zip text,
    phone text, email text, tax_id_type text, tax_id_last4 text,
    payment_preference text, payment_handle text,
    w9_submitted boolean default false, agreement_signed boolean default false,
    training_completed boolean default false, notes text,
    updated_at timestamp default now()
  );
*/
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function sb() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get('username')
  if (!username) return NextResponse.json({ error: 'username required' }, { status: 400 })
  const { data } = await sb().from('rep_profiles').select('*').eq('username', username).single()
  return NextResponse.json({ profile: data || null })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { username, ...fields } = body
  if (!username) return NextResponse.json({ error: 'username required' }, { status: 400 })

  // If tax_id is provided in full, only store last 4
  if (fields.tax_id_full) {
    fields.tax_id_last4 = fields.tax_id_full.replace(/\D/g, '').slice(-4)
    delete fields.tax_id_full
  }

  fields.updated_at = new Date().toISOString()

  const { data: existing } = await sb().from('rep_profiles').select('id').eq('username', username).single()

  if (existing) {
    const { error } = await sb().from('rep_profiles').update(fields).eq('username', username)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  } else {
    const { error } = await sb().from('rep_profiles').insert({ username, ...fields })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
