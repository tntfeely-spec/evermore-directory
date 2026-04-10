import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    await supabase
      .from('outrank_articles')
      .insert({ payload })

    return Response.json({ success: true })
  } catch {
    return Response.json({ success: true }, { status: 200 })
  }
}
