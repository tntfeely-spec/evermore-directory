/*
  Supabase table — run once in the SQL editor:

  create table sales_leads (
    id uuid default gen_random_uuid() primary key,
    business_name text not null,
    contact_name text,
    contact_email text,
    phone text,
    city text,
    state text,
    plan text,
    billing_term text,
    price numeric,
    custom_price numeric,
    custom_term text,
    salesperson text,
    notes text,
    stripe_link text,
    created_at timestamp default now()
  );
*/

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!)
}

function checkPassword(req: NextRequest): boolean {
  const pw = req.headers.get('x-sales-password') || ''
  const salesPw = process.env.SALES_ADMIN_PASSWORD || ''
  return pw === salesPw && salesPw !== ''
}

// GET — verify password or fetch recent sales
export async function GET(req: NextRequest) {
  const action = req.nextUrl.searchParams.get('action')

  if (action === 'verify') {
    if (!checkPassword(req)) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }
    return NextResponse.json({ ok: true })
  }

  if (action === 'recent') {
    if (!checkPassword(req)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const { data, error } = await getSupabase()
      .from('sales_leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ sales: data })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}

// POST — create Stripe payment link and save to Supabase
export async function POST(req: NextRequest) {
  if (!checkPassword(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()

    const {
      business_name, contact_name, contact_email, phone,
      city, state, plan, billing_term, price,
      custom_price, custom_term, salesperson, notes,
    } = body

    const chargeAmount = custom_price || price
    if (!chargeAmount || chargeAmount <= 0) {
      return NextResponse.json({ error: 'Invalid price' }, { status: 400 })
    }

    const isRecurring = !custom_term // standard plans are recurring; custom term is one-time
    const intervalLabel = billing_term === 'annual' ? 'year' : 'month'

    const description = custom_term
      ? `${business_name} — ${custom_term}`
      : `${business_name} — ${plan} (${billing_term})`

    // Create a Stripe product + price on the fly
    const stripe = getStripe()
    const product = await stripe.products.create({
      name: `Evermore Featured Listing — ${plan || 'Custom'}`,
      description,
    })

    let stripePrice
    if (isRecurring) {
      stripePrice = await stripe.prices.create({
        product: product.id,
        unit_amount: Math.round(chargeAmount * 100),
        currency: 'usd',
        recurring: { interval: intervalLabel as 'month' | 'year' },
      })
    } else {
      stripePrice = await stripe.prices.create({
        product: product.id,
        unit_amount: Math.round(chargeAmount * 100),
        currency: 'usd',
      })
    }

    // Create a payment link
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{ price: stripePrice.id, quantity: 1 }],
      metadata: {
        business_name,
        salesperson,
        plan: plan || 'Custom',
      },
      ...(contact_email ? { after_completion: { type: 'redirect', redirect: { url: 'https://funeralhomedirectories.com/featured-listing?success=true' } } } : {}),
    })

    // Save to Supabase
    const { error: dbError } = await getSupabase().from('sales_leads').insert({
      business_name,
      contact_name,
      contact_email,
      phone,
      city,
      state,
      plan,
      billing_term,
      price: chargeAmount,
      custom_price: custom_price || null,
      custom_term: custom_term || null,
      salesperson,
      notes,
      stripe_link: paymentLink.url,
    })

    if (dbError) {
      console.error('Supabase insert error:', dbError)
      // Still return the link even if DB fails
    }

    return NextResponse.json({
      ok: true,
      stripe_link: paymentLink.url,
      stripe_link_id: paymentLink.id,
    })

  } catch (err: any) {
    console.error('Sales API error:', err)
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 })
  }
}
