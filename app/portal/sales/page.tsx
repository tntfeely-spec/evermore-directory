'use client'

import PortalLayout, { usePortalUser } from '@/components/PortalLayout'
import { useState, useEffect, useCallback } from 'react'

const PLANS = [
  { name: 'Essential', monthly: 79, annual: 749 },
  { name: 'Premier', monthly: 149, annual: 1399 },
  { name: 'Exclusive', monthly: 449, annual: 4699 },
]
const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']

type Sale = { id: string; business_name: string; city: string; state: string; plan: string; price: number; salesperson: string; stripe_link: string; created_at: string }

export default function PortalSalesPage() {
  const user = usePortalUser()
  const [step, setStep] = useState<'form' | 'confirm' | 'done'>('form')
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
  const [salesperson, setSalesperson] = useState('')
  const [notes, setNotes] = useState('')
  const [stripeLink, setStripeLink] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [recentSales, setRecentSales] = useState<Sale[]>([])
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => { if (user && !salesperson) setSalesperson(user.username) }, [user])

  const loadSales = useCallback(async () => {
    if (!user) return
    const res = await fetch(`/api/portal/sales?username=${user.username}&role=${user.role}`)
    const data = await res.json()
    if (data.sales) setRecentSales(data.sales)
  }, [user])

  useEffect(() => { loadSales() }, [loadSales])

  if (!user) return null

  function getPrice(): number {
    if (customPrice) return parseFloat(customPrice)
    const p = PLANS.find((p) => p.name === plan)!
    return billingTerm === 'annual' ? p.annual : p.monthly
  }

  function getPriceLabel(): string {
    if (customPrice && customTerm) return `$${parseFloat(customPrice).toLocaleString()} — ${customTerm}`
    if (customPrice) return `$${parseFloat(customPrice).toLocaleString()}`
    const p = PLANS.find((p) => p.name === plan)!
    return billingTerm === 'annual' ? `$${p.annual.toLocaleString()}/yr` : `$${p.monthly}/mo`
  }

  async function handleConfirm() {
    setSubmitting(true); setError('')
    try {
      const res = await fetch('/api/sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-sales-username': user!.username, 'x-sales-password': '' },
        body: JSON.stringify({
          business_name: businessName, contact_name: contactName, contact_email: contactEmail, phone, city, state,
          plan: customPrice ? 'Custom' : plan, billing_term: customPrice ? 'custom' : billingTerm,
          price: getPrice(), custom_price: customPrice ? parseFloat(customPrice) : null,
          custom_term: customTerm || null, salesperson, notes,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      setStripeLink(data.stripe_link); setStep('done'); loadSales()
    } catch (err: any) { setError(err.message) }
    setSubmitting(false)
  }

  function reset() {
    setStep('form'); setBusinessName(''); setContactName(''); setContactEmail(''); setPhone('')
    setCity(''); setState(''); setPlan('Essential'); setBillingTerm('monthly')
    setCustomPrice(''); setCustomTerm(''); setSalesperson(user!.username); setNotes('')
    setStripeLink(''); setError(''); setCopied(false)
  }

  if (step === 'done') {
    return (
      <PortalLayout>
        <div className="max-w-xl mx-auto text-center py-8">
          <div className="text-4xl mb-4">&#10003;</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Link Created</h1>
          <p className="text-gray-500 mb-6">Send this link to {contactName} at {businessName}.</p>
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <input readOnly value={stripeLink} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm text-gray-800 mb-3 font-mono" />
            <button onClick={() => { navigator.clipboard.writeText(stripeLink); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
              className="w-full bg-slate-800 text-white py-2.5 rounded-md font-semibold hover:bg-slate-900">
              {copied ? 'Copied!' : 'Copy Payment Link'}
            </button>
          </div>
          <button onClick={reset} className="text-slate-600 hover:text-slate-800 text-sm font-medium">Enter Another Sale</button>
        </div>
      </PortalLayout>
    )
  }

  if (step === 'confirm') {
    return (
      <PortalLayout>
        <div className="max-w-xl mx-auto py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Confirm Sale</h1>
          <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-3 text-sm">
            <div className="flex justify-between py-1"><span className="text-gray-500">Business</span><span className="text-gray-800">{businessName}</span></div>
            <div className="flex justify-between py-1"><span className="text-gray-500">Contact</span><span className="text-gray-800">{contactName} — {contactEmail}</span></div>
            <div className="flex justify-between py-1"><span className="text-gray-500">Location</span><span className="text-gray-800">{city}, {state}</span></div>
            <div className="flex justify-between py-1"><span className="text-gray-500">Plan</span><span className="text-gray-800">{customPrice ? 'Custom' : plan}</span></div>
            <div className="flex justify-between py-1"><span className="text-gray-500">Price</span><span className="font-bold text-gray-900">{getPriceLabel()}</span></div>
            <div className="flex justify-between py-1"><span className="text-gray-500">Salesperson</span><span className="text-gray-800">{salesperson}</span></div>
          </div>
          {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep('form')} className="px-6 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">Back</button>
            <button onClick={handleConfirm} disabled={submitting} className="flex-1 bg-slate-800 text-white py-2.5 rounded-md font-semibold hover:bg-slate-900 disabled:opacity-50">
              {submitting ? 'Creating...' : 'Confirm and Generate Stripe Link'}
            </button>
          </div>
        </div>
      </PortalLayout>
    )
  }

  return (
    <PortalLayout>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Log a Sale</h1>
      <form onSubmit={(e) => { e.preventDefault(); setStep('confirm') }} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Funeral Home</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label><input required value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label><input required value={contactName} onChange={(e) => setContactName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label><input required type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" /></div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">City *</label><input required value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">State *</label><select required value={state} onChange={(e) => setState(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"><option value="">--</option>{US_STATES.map((s) => <option key={s}>{s}</option>)}</select></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Plan &amp; Pricing</h2>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {PLANS.map((p) => (
              <button key={p.name} type="button" onClick={() => { setPlan(p.name); setCustomPrice(''); setCustomTerm('') }}
                className={`border rounded-lg p-4 text-center transition-all ${plan === p.name && !customPrice ? 'border-slate-800 bg-slate-50 ring-2 ring-slate-800' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="font-semibold text-gray-900">{p.name}</div>
                <div className="text-sm text-gray-500 mt-1">${p.monthly}/mo</div>
                <div className="text-xs text-gray-400">${p.annual.toLocaleString()}/yr</div>
              </button>
            ))}
          </div>
          <div className="flex gap-4 mb-4">
            {(['monthly', 'annual'] as const).map((t) => (
              <label key={t} className={`flex items-center gap-2 px-4 py-2 rounded-md border cursor-pointer text-sm ${billingTerm === t ? 'border-slate-800 bg-slate-50' : 'border-gray-200'}`}>
                <input type="radio" name="term" checked={billingTerm === t} onChange={() => setBillingTerm(t)} className="accent-slate-800" />
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </label>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-4 mt-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Custom Override</p>
            <div className="grid grid-cols-2 gap-3">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Custom Price ($)</label><input type="number" step="0.01" min="0" value={customPrice} onChange={(e) => setCustomPrice(e.target.value)} placeholder="e.g. 200" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Custom Term</label><input value={customTerm} onChange={(e) => setCustomTerm(e.target.value)} placeholder="e.g. 6-month pilot at $200/mo" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" /></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Salesperson *</label><input required value={salesperson} onChange={(e) => setSalesperson(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Notes</label><textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm resize-vertical" /></div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-gray-900">Total: {getPriceLabel()}</div>
          <button type="submit" className="bg-slate-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-900">Review &amp; Generate Link</button>
        </div>
      </form>

      {/* Recent sales log */}
      {recentSales.length > 0 && (
        <div className="mt-12">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Recent Sales</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Date</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Business</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Location</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Plan</th>
                <th className="text-right px-4 py-3 text-gray-500 font-medium">Price</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Link</th>
              </tr></thead>
              <tbody>{recentSales.map((s) => (
                <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-2.5 text-gray-500 whitespace-nowrap">{new Date(s.created_at).toLocaleDateString()}</td>
                  <td className="px-4 py-2.5 font-medium text-gray-800">{s.business_name}</td>
                  <td className="px-4 py-2.5 text-gray-600">{s.city}, {s.state}</td>
                  <td className="px-4 py-2.5 text-gray-600">{s.plan}</td>
                  <td className="px-4 py-2.5 text-right font-medium text-gray-800">${Number(s.price).toLocaleString()}</td>
                  <td className="px-4 py-2.5">{s.stripe_link && <button onClick={() => { navigator.clipboard.writeText(s.stripe_link); setCopiedId(s.id); setTimeout(() => setCopiedId(null), 2000) }} className="text-xs text-slate-600 hover:text-slate-800 font-medium">{copiedId === s.id ? 'Copied!' : 'Copy'}</button>}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      )}
    </PortalLayout>
  )
}
