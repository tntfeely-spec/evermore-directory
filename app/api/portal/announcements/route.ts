import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function sb() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export async function GET() {
  const { data } = await sb().from('portal_announcements').select('*').order('created_at', { ascending: false }).limit(3)
  return NextResponse.json({ announcements: data || [] })
}

export async function POST(req: NextRequest) {
  const { title, body, created_by } = await req.json()
  if (!title || !body) return NextResponse.json({ error: 'Title and body required' }, { status: 400 })
  const { error } = await sb().from('portal_announcements').insert({ title, body, created_by })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
