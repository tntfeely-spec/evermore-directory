/*
  create table if not exists portal_users (
    id uuid default gen_random_uuid() primary key,
    username text not null unique,
    password text not null,
    role text not null default 'sales',
    active boolean default true,
    created_at timestamp default now(),
    updated_at timestamp default now()
  );

  insert into portal_users (username, password, role) values
    ('terry', 'evermore2026admin', 'admin'),
    ('andrew', 'andrew2026', 'sales'),
    ('jovon', 'jovon2026', 'sales'),
    ('claude', 'claude2026test', 'sales');
*/
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function sb() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

type SalesUser = { username: string; password: string; role: 'admin' | 'sales' }

function getEnvUsers(): SalesUser[] {
  const raw = process.env.SALES_USERS || ''
  if (!raw) return []
  try { return JSON.parse(raw) } catch { return [] }
}

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()
  const u = (username || '').trim().toLowerCase()
  const p = (password || '').trim()
  if (!u || !p) return NextResponse.json({ success: false }, { status: 401 })

  // Check portal_users table first
  const { data: dbUser } = await sb()
    .from('portal_users')
    .select('username, password, role, active')
    .ilike('username', u)
    .single()

  if (dbUser) {
    if (!dbUser.active) return NextResponse.json({ success: false, error: 'Account deactivated' }, { status: 401 })
    if (dbUser.password.trim() === p) {
      return NextResponse.json({ success: true, user: { username: dbUser.username, role: dbUser.role } })
    }
    return NextResponse.json({ success: false }, { status: 401 })
  }

  // Fallback to SALES_USERS env var
  const envUsers = getEnvUsers()
  const match = envUsers.find(
    (user) => user.username.trim().toLowerCase() === u && user.password.trim() === p
  )

  if (!match) return NextResponse.json({ success: false }, { status: 401 })
  return NextResponse.json({ success: true, user: { username: match.username, role: match.role } })
}
