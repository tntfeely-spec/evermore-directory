import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function sb() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export async function GET() {
  const { data, error } = await sb()
    .from('portal_users')
    .select('id, username, role, active, created_at')
    .order('created_at', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ users: data || [] })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { action } = body

  if (action === 'add') {
    const { username, password, role } = body
    if (!username || !password) return NextResponse.json({ error: 'Username and password required' }, { status: 400 })
    const { error } = await sb().from('portal_users').insert({
      username: username.trim().toLowerCase(),
      password: password.trim(),
      role: role || 'sales',
    })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ ok: true })
  }

  if (action === 'reset_password') {
    const { id, password } = body
    if (!id || !password) return NextResponse.json({ error: 'ID and password required' }, { status: 400 })
    const { error } = await sb().from('portal_users').update({ password: password.trim(), updated_at: new Date().toISOString() }).eq('id', id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ ok: true })
  }

  if (action === 'toggle_active') {
    const { id, active } = body
    const { error } = await sb().from('portal_users').update({ active, updated_at: new Date().toISOString() }).eq('id', id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
