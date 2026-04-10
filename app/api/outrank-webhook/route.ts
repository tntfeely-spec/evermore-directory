import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  const token = request.headers.get('x-outrank-token') || request.nextUrl.searchParams.get('token')
  if (token !== process.env.OUTRANK_WEBHOOK_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await request.json()

    await supabase
      .from('outrank_articles')
      .insert({ payload })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: true }, { status: 200 })
  }
}
