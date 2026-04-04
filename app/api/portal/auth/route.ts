import { NextRequest, NextResponse } from 'next/server'

type SalesUser = { username: string; password: string; role: 'admin' | 'sales' }

function getSalesUsers(): SalesUser[] {
  const raw = process.env.SALES_USERS || ''
  if (!raw) return []
  try { return JSON.parse(raw) } catch { return [] }
}

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()
  const u = (username || '').trim().toLowerCase()
  const p = (password || '').trim()
  if (!u || !p) return NextResponse.json({ success: false }, { status: 401 })

  const users = getSalesUsers()
  const match = users.find(
    (user) => user.username.trim().toLowerCase() === u && user.password.trim() === p
  )

  if (!match) return NextResponse.json({ success: false }, { status: 401 })

  return NextResponse.json({
    success: true,
    user: { username: match.username, role: match.role },
  })
}
