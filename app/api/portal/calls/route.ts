/*
  create table if not exists rep_call_log (
    id uuid default gen_random_uuid() primary key,
    username text not null,
    business_name text not null,
    city_state text,
    call_date date,
    result text,
    email_captured boolean default false,
    follow_up_date date,
    notes text,
    created_at timestamp default now()
  );
*/
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function sb() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get('username')
  const role = req.nextUrl.searchParams.get('role')
  const followups = req.nextUrl.searchParams.get('followups')

  let query = sb().from('rep_call_log').select('*').order('call_date', { ascending: false })

  if (followups === 'true') {
    const today = new Date().toISOString().slice(0, 10)
    query = query.lte('follow_up_date', today).in('result', ['VM', 'CB'])
  }

  if (role === 'sales' && username) {
    query = query.eq('username', username)
  }

  const { data, error } = await query.limit(100)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ calls: data || [] })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { error } = await sb().from('rep_call_log').insert(body)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
