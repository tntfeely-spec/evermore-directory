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

type SalesUser = { username: string; password: string; role: 'admin' | 'sales' }

function getSalesUsers(): SalesUser[] {
  const raw = process.env.SALES_USERS || ''
  if (!raw) return []
  try {
    return JSON.parse(raw)
  } catch {
    return []
  }
}

function authenticateUser(req: NextRequest): SalesUser | null {
  const username = (req.headers.get('x-sales-username') || '').trim().toLowerCase()
  const password = (req.headers.get('x-sales-password') || '').trim()
  if (!username) return null
  const users = getSalesUsers()
  // If password provided, do full auth; otherwise just verify username exists (portal mode)
  if (password) {
    return users.find(
      (u) => u.username.trim().toLowerCase() === username && u.password.trim() === password
    ) || null
  }
  return users.find((u) => u.username.trim().toLowerCase() === username) || null
}

// GET — verify login or fetch recent sales
export async function GET(req: NextRequest) {
  const action = req.nextUrl.searchParams.get('action')

  if (action === 'verify') {
    const user = authenticateUser(req)
    if (!user) {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 })
    }
    return NextResponse.json({ ok: true, username: user.username, role: user.role })
  }

  if (action === 'recent') {
    const user = authenticateUser(req)
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const sb = getSupabase()
    let query = sb
      .from('sales_leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20)

    // Sales users only see their own entries
    if (user.role === 'sales') {
      query = query.ilike('salesperson', user.username)
    }

    const { data, error } = await query

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ sales: data })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}

// POST — create Stripe payment link and save to Supabase
export async function POST(req: NextRequest) {
  const user = authenticateUser(req)
  if (!user) {
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

    const isRecurring = !custom_term
    const intervalLabel = billing_term === 'annual' ? 'year' : 'month'

    const description = custom_term
      ? `${business_name} — ${custom_term}`
      : `${business_name} — ${plan} (${billing_term})`

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

    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{ price: stripePrice.id, quantity: 1 }],
      metadata: {
        business_name,
        salesperson,
        plan: plan || 'Custom',
      },
      ...(contact_email ? { after_completion: { type: 'redirect', redirect: { url: 'https://funeralhomedirectories.com/featured-listing?success=true' } } } : {}),
    })

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
