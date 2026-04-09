import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const state = (searchParams.get('state') || '').trim().toLowerCase()
  const citySlug = (searchParams.get('city') || '').trim().toLowerCase()

  if (!state || !citySlug) {
    return new Response(JSON.stringify({ error: 'Missing params' }), { status: 400 })
  }

  const cityName = citySlug.replace(/-/g, ' ')

  const { data, error } = await supabase
    .from('funeral_homes')
    .select('id')
    .ilike('state', state)
    .ilike('city', cityName)
    .limit(1)

  if (error || !data || data.length === 0) {
    return new Response(JSON.stringify({ found: false }), { status: 404 })
  }
  return Response.json({ found: true })
}
