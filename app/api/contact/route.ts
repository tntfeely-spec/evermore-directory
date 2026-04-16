export async function GET() {
  return new Response(null, { status: 405, headers: { 'Allow': 'POST' } })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const webhookUrl = process.env.GHL_WEBHOOK_URL
    if (!webhookUrl) return Response.json({ error: 'Webhook not configured' }, { status: 500 })

    // Resolve ZIP to city page URL for GHL auto-reply
    let cityPageUrl = ''
    if (body.zip && body.zip.trim().length === 5) {
      try {
        const zipRes = await fetch(`https://api.zippopotam.us/us/${body.zip.trim()}`, { signal: AbortSignal.timeout(5000) })
        if (zipRes.ok) {
          const zipData = await zipRes.json()
          const place = zipData?.places?.[0]
          const cityName: string | undefined = place?.['place name']
          const stateAbbr: string | undefined = place?.['state abbreviation']
          if (cityName && stateAbbr) {
            const citySlug = cityName.toLowerCase().replace(/\s+/g, '-')
            const stateSlug = stateAbbr.toLowerCase()
            cityPageUrl = `https://funeralhomedirectories.com/funeral-homes/${stateSlug}/${citySlug}`
          }
        }
      } catch {
        // ZIP lookup failed, continue without city page URL
      }
    }

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: body.firstName || body.name,
        lastName: body.lastName || '',
        phone: body.phone,
        email: body.email,
        message: body.message,
        preference: body.preference,
        timeline: body.timeline,
        budget: body.budget,
        zip: body.zip,
        funeralHome: body.funeralHomeName,
        city: body.city,
        state: body.state,
        source: body.source || 'Evermore Contact Form',
        tags: body.tags || [],
        serviceType: body.serviceType,
        city_page_url: cityPageUrl,
      })
    })

    return Response.json({ success: true })
  } catch (err) {
    return Response.json({ error: 'Failed to send' }, { status: 500 })
  }
}
