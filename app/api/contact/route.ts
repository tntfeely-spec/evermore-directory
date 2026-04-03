export async function POST(request: Request) {
  try {
    const body = await request.json()
    const webhookUrl = process.env.GHL_WEBHOOK_URL
    if (!webhookUrl) return Response.json({ error: 'Webhook not configured' }, { status: 500 })

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: body.name,
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
        source: 'Evermore Contact Form'
      })
    })

    return Response.json({ success: true })
  } catch (err) {
    return Response.json({ error: 'Failed to send' }, { status: 500 })
  }
}
