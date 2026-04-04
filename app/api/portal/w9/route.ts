/*
  create table if not exists w9_submissions (
    id uuid default gen_random_uuid() primary key,
    username text not null,
    legal_name text not null,
    business_name text,
    tax_classification text not null,
    exempt_payee_code text,
    address_street text,
    address_city text,
    address_state text,
    address_zip text,
    ssn_last4 text,
    ein text,
    electronic_signature text not null,
    submitted_at timestamp default now(),
    updated_at timestamp default now()
  );
*/
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function sb() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get('username')
  if (!username) return NextResponse.json({ error: 'username required' }, { status: 400 })
  const { data } = await sb().from('w9_submissions').select('*').eq('username', username).order('submitted_at', { ascending: false }).limit(1).single()
  return NextResponse.json({ w9: data || null })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { username, ssn_full, ...fields } = body

  if (!username) return NextResponse.json({ error: 'username required' }, { status: 400 })

  // Only store last 4 of SSN
  if (ssn_full) {
    fields.ssn_last4 = ssn_full.replace(/\D/g, '').slice(-4)
  }

  fields.username = username
  fields.submitted_at = new Date().toISOString()
  fields.updated_at = new Date().toISOString()

  // Upsert: delete old and insert new
  await sb().from('w9_submissions').delete().eq('username', username)
  const { error } = await sb().from('w9_submissions').insert(fields)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Mark w9_submitted in rep_profiles
  const { data: existing } = await sb().from('rep_profiles').select('id').eq('username', username).single()
  if (existing) {
    await sb().from('rep_profiles').update({ w9_submitted: true, updated_at: new Date().toISOString() }).eq('username', username)
  } else {
    await sb().from('rep_profiles').insert({ username, w9_submitted: true })
  }

  // Send notification via GHL webhook if available
  const webhookUrl = process.env.GHL_WEBHOOK_URL
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fields.legal_name,
          email: 'listings@funeralhomedirectories.com',
          message: `W-9 Submitted by ${username}\n\nName: ${fields.legal_name}\nClassification: ${fields.tax_classification}\nAddress: ${fields.address_street}, ${fields.address_city}, ${fields.address_state} ${fields.address_zip}\nSSN last 4: ***-**-${fields.ssn_last4 || 'N/A'}\nEIN: ${fields.ein || 'N/A'}\nSubmitted: ${new Date().toLocaleDateString()}`,
          source: 'Portal W-9 Submission',
        }),
      })
    } catch (e) {
      console.error('W-9 webhook notification failed:', e)
    }
  } else {
    console.log(`W-9 submitted by ${username}: ${fields.legal_name}, ${fields.tax_classification}`)
  }

  return NextResponse.json({ ok: true })
}
