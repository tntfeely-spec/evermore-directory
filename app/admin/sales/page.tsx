'use client'

import { useState, useEffect, useCallback } from 'react'

/* ── Plan pricing ─────────────────────────────────────────────────────────── */
const PLANS = [
  { name: 'Essential', monthly: 79, annual: 749 },
  { name: 'Premier', monthly: 149, annual: 1399 },
  { name: 'Exclusive', monthly: 449, annual: 4699 },
]

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
  'VA','WA','WV','WI','WY','DC',
]

type Sale = {
  id: string
  business_name: string
  city: string
  state: string
  plan: string
  billing_term: string
  price: number
  salesperson: string
  stripe_link: string
  created_at: string
}

/* ── Main component ───────────────────────────────────────────────────────── */
export default function SalesAdminPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [authError, setAuthError] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [userRole, setUserRole] = useState<'admin' | 'sales'>('sales')
  const [displayName, setDisplayName] = useState('')

  async function handleLogin() {
    setVerifying(true)
    setAuthError('')
    try {
      const res = await fetch('/api/sales?action=verify', {
        headers: {
          'x-sales-username': username,
          'x-sales-password': password,
        },
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setAuthenticated(true)
        setUserRole(data.role || 'sales')
        setDisplayName(data.username || username)
      } else {
        setAuthError(data.error || 'Invalid username or password')
      }
    } catch {
      setAuthError('Connection error')
    }
    setVerifying(false)
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
          <h1 className="text-xl font-bold text-gray-900 mb-1">Evermore Sales</h1>
          <p className="text-sm text-gray-500 mb-6">Sign in to continue</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Username"
            autoComplete="username"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <div className="relative mb-3">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              placeholder="Password"
              autoComplete="current-password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm pr-16 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 font-medium select-none"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          </div>
          {authError && <p className="text-red-600 text-sm mb-3">{authError}</p>}
          <button
            onClick={handleLogin}
            disabled={verifying || !username || !password}
            className="w-full bg-slate-800 text-white py-2.5 rounded-md text-sm font-semibold hover:bg-slate-900 disabled:opacity-50"
          >
            {verifying ? 'Checking...' : 'Sign In'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <SalesDashboard
      username={displayName}
      password={password}
      role={userRole}
    />
  )
}

/* ── Dashboard (after auth) ───────────────────────────────────────────────── */
function SalesDashboard({ username, password, role }: { username: string; password: string; role: 'admin' | 'sales' }) {
  const [step, setStep] = useState<'form' | 'confirm' | 'done'>('form')

  // Form fields
  const [businessName, setBusinessName] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [plan, setPlan] = useState('Essential')
  const [billingTerm, setBillingTerm] = useState<'monthly' | 'annual'>('monthly')
  const [customPrice, setCustomPrice] = useState('')
  const [customTerm, setCustomTerm] = useState('')
  const [salesperson, setSalesperson] = useState(username)
  const [notes, setNotes] = useState('')

  // Result
  const [stripeLink, setStripeLink] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  // Recent sales
  const [recentSales, setRecentSales] = useState<Sale[]>([])

  const headers: Record<string, string> = {
    'x-sales-username': username,
    'x-sales-password': password,
  }

  const loadSales = useCallback(async () => {
    try {
      const res = await fetch('/api/sales?action=recent', { headers })
      const data = await res.json()
      if (data.sales) setRecentSales(data.sales)
    } catch {}
  }, [username, password])

  useEffect(() => { loadSales() }, [loadSales])

  function getPrice(): number {
    if (customPrice) return parseFloat(customPrice)
    const p = PLANS.find((p) => p.name === plan)!
    return billingTerm === 'annual' ? p.annual : p.monthly
  }

  function getPriceLabel(): string {
    if (customPrice && customTerm) return `$${parseFloat(customPrice).toLocaleString()} — ${customTerm}`
    if (customPrice) return `$${parseFloat(customPrice).toLocaleString()}`
    const p = PLANS.find((p) => p.name === plan)!
    return billingTerm === 'annual'
      ? `$${p.annual.toLocaleString()}/yr`
      : `$${p.monthly}/mo`
  }

  function handleReview(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setStep('confirm')
  }

  async function handleConfirm() {
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/sales', {
        method: 'POST',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_name: businessName,
          contact_name: contactName,
          contact_email: contactEmail,
          phone,
          city,
          state,
          plan: customPrice ? 'Custom' : plan,
          billing_term: customPrice ? 'custom' : billingTerm,
          price: getPrice(),
          custom_price: customPrice ? parseFloat(customPrice) : null,
          custom_term: customTerm || null,
          salesperson,
          notes,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to create payment link')
      setStripeLink(data.stripe_link)
      setStep('done')
      loadSales()
    } catch (err: any) {
      setError(err.message)
    }
    setSubmitting(false)
  }

  function handleReset() {
    setStep('form')
    setBusinessName('')
    setContactName('')
    setContactEmail('')
    setPhone('')
    setCity('')
    setState('')
    setPlan('Essential')
    setBillingTerm('monthly')
    setCustomPrice('')
    setCustomTerm('')
    setSalesperson(username)
    setNotes('')
    setStripeLink('')
    setError('')
    setCopied(false)
  }

  function copyLink() {
    navigator.clipboard.writeText(stripeLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  /* ── FORM ─────────────────────────────────────────────────────── */
  if (step === 'form') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">New Sale</h1>
              <p className="text-sm text-gray-500">Enter funeral home details and generate a Stripe payment link.</p>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Signed in as </span>
              <span className="text-sm font-semibold text-gray-800">{username}</span>
              <span className="ml-2 text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{role}</span>
            </div>
          </div>

          <form onSubmit={handleReview} className="space-y-6">
            {/* Funeral home details */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Funeral Home</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                  <input required value={businessName} onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                  <input required value={contactName} onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label>
                  <input required type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-500" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <input required value={city} onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                    <select required value={state} onChange={(e) => setState(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 bg-white">
                      <option value="">--</option>
                      {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan selection */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Plan &amp; Pricing</h2>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {PLANS.map((p) => (
                  <button key={p.name} type="button" onClick={() => { setPlan(p.name); setCustomPrice(''); setCustomTerm('') }}
                    className={`border rounded-lg p-4 text-center transition-all ${
                      plan === p.name && !customPrice
                        ? 'border-slate-800 bg-slate-50 ring-2 ring-slate-800'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                    <div className="font-semibold text-gray-900">{p.name}</div>
                    <div className="text-sm text-gray-500 mt-1">${p.monthly}/mo</div>
                    <div className="text-xs text-gray-400">${p.annual.toLocaleString()}/yr</div>
                  </button>
                ))}
              </div>

              <div className="flex gap-4 mb-4">
                <label className={`flex items-center gap-2 px-4 py-2 rounded-md border cursor-pointer text-sm ${
                  billingTerm === 'monthly' ? 'border-slate-800 bg-slate-50' : 'border-gray-200'
                }`}>
                  <input type="radio" name="term" checked={billingTerm === 'monthly'}
                    onChange={() => setBillingTerm('monthly')} className="accent-slate-800" />
                  Monthly
                </label>
                <label className={`flex items-center gap-2 px-4 py-2 rounded-md border cursor-pointer text-sm ${
                  billingTerm === 'annual' ? 'border-slate-800 bg-slate-50' : 'border-gray-200'
                }`}>
                  <input type="radio" name="term" checked={billingTerm === 'annual'}
                    onChange={() => setBillingTerm('annual')} className="accent-slate-800" />
                  Annual
                </label>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Custom Pricing Override</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Custom Price ($)</label>
                    <input type="number" step="0.01" min="0" value={customPrice}
                      onChange={(e) => setCustomPrice(e.target.value)}
                      placeholder="e.g. 200"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Custom Term Description</label>
                    <input value={customTerm} onChange={(e) => setCustomTerm(e.target.value)}
                      placeholder="e.g. 6-month pilot at $200/mo"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Salesperson */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Salesperson *</label>
                  <input required value={salesperson} onChange={(e) => setSalesperson(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 resize-vertical" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-lg font-bold text-gray-900">
                Total: {getPriceLabel()}
              </div>
              <button type="submit"
                className="bg-slate-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-900 transition-colors">
                Review &amp; Generate Link
              </button>
            </div>
          </form>

          {/* Recent sales log */}
          <SalesLog sales={recentSales} />
        </div>
      </div>
    )
  }

  /* ── CONFIRM ──────────────────────────────────────────────────── */
  if (step === 'confirm') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Confirm Sale</h1>

          <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-3">
            <Row label="Business" value={businessName} />
            <Row label="Contact" value={`${contactName} — ${contactEmail}`} />
            {phone && <Row label="Phone" value={phone} />}
            <Row label="Location" value={`${city}, ${state}`} />
            <Row label="Plan" value={customPrice ? 'Custom' : plan} />
            <Row label="Billing" value={customTerm || billingTerm} />
            <Row label="Price" value={getPriceLabel()} highlight />
            <Row label="Salesperson" value={salesperson} />
            {notes && <Row label="Notes" value={notes} />}
          </div>

          {error && <p className="text-red-600 text-sm mt-4">{error}</p>}

          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep('form')}
              className="px-6 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Go Back
            </button>
            <button onClick={handleConfirm} disabled={submitting}
              className="flex-1 bg-slate-800 text-white py-2.5 rounded-md font-semibold hover:bg-slate-900 disabled:opacity-50">
              {submitting ? 'Creating Payment Link...' : 'Confirm and Generate Stripe Link'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  /* ── DONE ─────────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-xl mx-auto px-4 py-12 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Link Created</h1>
        <p className="text-gray-500 mb-6">Send this link to {contactName} at {businessName}.</p>

        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <input readOnly value={stripeLink}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm text-gray-800 mb-3 font-mono" />
          <button onClick={copyLink}
            className="w-full bg-slate-800 text-white py-2.5 rounded-md font-semibold hover:bg-slate-900">
            {copied ? 'Copied!' : 'Copy Payment Link'}
          </button>
        </div>

        <p className="text-xs text-gray-400 mb-6">
          {businessName} &middot; {customPrice ? 'Custom' : plan} &middot; {getPriceLabel()} &middot; {salesperson}
        </p>

        <button onClick={handleReset}
          className="text-slate-600 hover:text-slate-800 text-sm font-medium">
          Enter Another Sale
        </button>
      </div>
    </div>
  )
}

/* ── Helper components ────────────────────────────────────────────────────── */
function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-start py-2 border-b border-gray-50">
      <span className="text-sm text-gray-500">{label}</span>
      <span className={`text-sm text-right ${highlight ? 'font-bold text-gray-900' : 'text-gray-800'}`}>{value}</span>
    </div>
  )
}

function SalesLog({ sales }: { sales: Sale[] }) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  function copyLink(id: string, link: string) {
    navigator.clipboard.writeText(link)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  if (sales.length === 0) return null

  return (
    <div className="mt-12">
      <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Recent Sales</h2>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-medium text-gray-500">Date</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Business</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Location</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Plan</th>
                <th className="text-right px-4 py-3 font-medium text-gray-500">Price</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Sales</th>
                <th className="text-left px-4 py-3 font-medium text-gray-500">Link</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((s) => (
                <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-gray-500 whitespace-nowrap">
                    {new Date(s.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2.5 font-medium text-gray-800">{s.business_name}</td>
                  <td className="px-4 py-2.5 text-gray-600">{s.city}, {s.state}</td>
                  <td className="px-4 py-2.5 text-gray-600">{s.plan}</td>
                  <td className="px-4 py-2.5 text-right font-medium text-gray-800">${Number(s.price).toLocaleString()}</td>
                  <td className="px-4 py-2.5 text-gray-600">{s.salesperson}</td>
                  <td className="px-4 py-2.5">
                    {s.stripe_link && (
                      <button onClick={() => copyLink(s.id, s.stripe_link)}
                        className="text-xs text-slate-600 hover:text-slate-800 font-medium">
                        {copiedId === s.id ? 'Copied!' : 'Copy'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
