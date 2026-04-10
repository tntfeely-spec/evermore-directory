import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  console.log('Outrank webhook headers:', Object.fromEntries(request.headers.entries()))

  try {
    const payload = await request.json()
    console.log('Outrank webhook body:', JSON.stringify(payload).slice(0, 500))

    await supabase
      .from('outrank_articles')
      .insert({ payload })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: true }, { status: 200 })
  }
}
