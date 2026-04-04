import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function sb() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get('username')
  const role = req.nextUrl.searchParams.get('role')
  const limit = parseInt(req.nextUrl.searchParams.get('limit') || '20')

  let query = sb().from('sales_leads').select('*').order('created_at', { ascending: false }).limit(limit)
  if (role === 'sales' && username) {
    query = query.ilike('salesperson', username)
  }

  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ sales: data || [] })
}
