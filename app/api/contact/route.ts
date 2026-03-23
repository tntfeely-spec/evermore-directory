import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, message, preference, funeralHomeName, city, state } = body

    if (!name || !funeralHomeName || !city || !state) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Evermore Directory <noreply@funeralhomedirectories.com>',
      to: 'listings@funeralhomedirectories.com',
      subject: `Family inquiry: ${funeralHomeName} - ${city}, ${state}`,
      text: [
        `Name: ${name}`,
        phone ? `Phone: ${phone}` : null,
        email ? `Email: ${email}` : null,
        `Preferred contact: ${preference || 'not specified'}`,
        message ? `Message: ${message}` : null,
        '',
        `Funeral Home: ${funeralHomeName}`,
        `Location: ${city}, ${state}`,
      ].filter(Boolean).join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
