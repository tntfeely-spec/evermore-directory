'use client'

import PortalLayout, { usePortalUser } from '@/components/PortalLayout'
import { useState, useEffect } from 'react'

const FIELDS = [
  'full_legal_name', 'preferred_name', 'address_street', 'address_city',
  'address_state', 'address_zip', 'phone', 'email', 'tax_id_type',
  'tax_id_last4', 'payment_preference', 'payment_handle',
]

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
  'VA','WA','WV','WI','WY','DC',
]

export default function ProfilePage() {
  const user = usePortalUser()
  const [form, setForm] = useState<Record<string, any>>({})
  const [taxIdFull, setTaxIdFull] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!user) return
    fetch(`/api/portal/profile?username=${user.username}`)
      .then((r) => r.json())
      .then((d) => { if (d.profile) setForm(d.profile) })
  }, [user])

  if (!user) return null

  const filledCount = FIELDS.filter((f) => form[f]).length
  const totalFields = FIELDS.length
  const pct = Math.round((filledCount / totalFields) * 100)

  function set(key: string, value: any) {
    setForm({ ...form, [key]: value })
    setSaved(false)
  }

  async function handleSave() {
    setSaving(true)
    const payload: Record<string, any> = { username: user!.username, ...form }
    if (taxIdFull) payload.tax_id_full = taxIdFull
    await fetch('/api/portal/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    setSaving(false)
    setSaved(true)
    setTaxIdFull('')
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <PortalLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <div className="text-sm text-gray-500">
          <span className="font-semibold text-gray-800">{pct}%</span> complete
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
        <div className="bg-green-500 h-2 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>

      <div className="space-y-6">
        {/* Personal info */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Legal Name</label>
              <input value={form.full_legal_name || ''} onChange={(e) => set('full_legal_name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Display Name</label>
              <input value={form.preferred_name || ''} onChange={(e) => set('preferred_name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input value={form.phone || ''} onChange={(e) => set('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" value={form.email || ''} onChange={(e) => set('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Mailing Address</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Street</label>
              <input value={form.address_street || ''} onChange={(e) => set('address_street', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input value={form.address_city || ''} onChange={(e) => set('address_city', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <select value={form.address_state || ''} onChange={(e) => set('address_state', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white">
                  <option value="">--</option>
                  {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP</label>
                <input value={form.address_zip || ''} onChange={(e) => set('address_zip', e.target.value)}
                  maxLength={5} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Tax info */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Tax &amp; Payment</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID Type</label>
              <select value={form.tax_id_type || ''} onChange={(e) => set('tax_id_type', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white">
                <option value="">Select...</option>
                <option value="SSN">SSN</option>
                <option value="EIN">EIN</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID</label>
              {form.tax_id_last4 ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 font-mono">***-**-{form.tax_id_last4}</span>
                  <button onClick={() => { set('tax_id_last4', ''); setTaxIdFull('') }}
                    className="text-xs text-slate-600 hover:text-slate-800">Update</button>
                </div>
              ) : (
                <input type="password" value={taxIdFull} onChange={(e) => setTaxIdFull(e.target.value)}
                  placeholder="Full SSN or EIN (only last 4 stored)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Preference</label>
              <select value={form.payment_preference || ''} onChange={(e) => set('payment_preference', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white">
                <option value="">Select...</option>
                <option value="Venmo">Venmo</option>
                <option value="PayPal">PayPal</option>
                <option value="Zelle">Zelle</option>
                <option value="Check">Check</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Handle</label>
              <input value={form.payment_handle || ''} onChange={(e) => set('payment_handle', e.target.value)}
                placeholder="Venmo username, PayPal email, etc."
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
            </div>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Status</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={!!form.w9_submitted} onChange={(e) => set('w9_submitted', e.target.checked)}
                className="accent-slate-800" />
              W-9 submitted
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={!!form.agreement_signed} onChange={(e) => set('agreement_signed', e.target.checked)}
                className="accent-slate-800" />
              Consultant agreement signed
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={!!form.training_completed} onChange={(e) => set('training_completed', e.target.checked)}
                className="accent-slate-800" />
              Training completed
            </label>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <textarea value={form.notes || ''} onChange={(e) => set('notes', e.target.value)} rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm resize-vertical" />
        </div>

        <button onClick={handleSave} disabled={saving}
          className="bg-slate-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-900 disabled:opacity-50">
          {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Profile'}
        </button>
      </div>

      {/* W-9 Submission */}
      <div id="w9" className="mt-10 scroll-mt-8">
        <W9Form username={user!.username} defaultLegalName={form.full_legal_name || ''} defaultAddress={{ street: form.address_street, city: form.address_city, state: form.address_state, zip: form.address_zip }} />
      </div>
    </PortalLayout>
  )
}

const TAX_CLASSIFICATIONS = [
  'Individual / Sole Proprietor',
  'Single-member LLC',
  'C Corporation',
  'S Corporation',
  'Partnership',
  'Trust / Estate',
  'LLC (C corp)',
  'LLC (S corp)',
  'LLC (Partnership)',
  'Other',
]

function W9Form({ username, defaultLegalName, defaultAddress }: {
  username: string
  defaultLegalName: string
  defaultAddress: { street?: string; city?: string; state?: string; zip?: string }
}) {
  const [legalName, setLegalName] = useState(defaultLegalName)
  const [businessName, setBusinessName] = useState('')
  const [taxClass, setTaxClass] = useState('')
  const [exemptCode, setExemptCode] = useState('')
  const [street, setStreet] = useState(defaultAddress.street || '')
  const [city, setCity] = useState(defaultAddress.city || '')
  const [addrState, setAddrState] = useState(defaultAddress.state || '')
  const [zip, setZip] = useState(defaultAddress.zip || '')
  const [ssnFull, setSsnFull] = useState('')
  const [ein, setEin] = useState('')
  const [signature, setSignature] = useState('')
  const [certified, setCertified] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [existingW9, setExistingW9] = useState<any>(null)

  useEffect(() => {
    fetch(`/api/portal/w9?username=${username}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.w9) {
          setExistingW9(d.w9)
          setLegalName(d.w9.legal_name || defaultLegalName)
          setBusinessName(d.w9.business_name || '')
          setTaxClass(d.w9.tax_classification || '')
          setExemptCode(d.w9.exempt_payee_code || '')
          setStreet(d.w9.address_street || defaultAddress.street || '')
          setCity(d.w9.address_city || defaultAddress.city || '')
          setAddrState(d.w9.address_state || defaultAddress.state || '')
          setZip(d.w9.address_zip || defaultAddress.zip || '')
          setEin(d.w9.ein || '')
        }
      })
  }, [username])

  useEffect(() => {
    if (!legalName && defaultLegalName) setLegalName(defaultLegalName)
    if (!street && defaultAddress.street) setStreet(defaultAddress.street)
    if (!city && defaultAddress.city) setCity(defaultAddress.city)
    if (!addrState && defaultAddress.state) setAddrState(defaultAddress.state)
    if (!zip && defaultAddress.zip) setZip(defaultAddress.zip)
  }, [defaultLegalName, defaultAddress])

  async function handleSubmit() {
    if (!legalName || !taxClass || !street || !city || !addrState || !zip || !signature || !certified) return
    if (!ssnFull && !ein) return
    setSubmitting(true)
    await fetch('/api/portal/w9', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        legal_name: legalName,
        business_name: businessName || null,
        tax_classification: taxClass,
        exempt_payee_code: exemptCode || null,
        address_street: street,
        address_city: city,
        address_state: addrState,
        address_zip: zip,
        ssn_full: ssnFull || null,
        ein: ein || null,
        electronic_signature: signature,
      }),
    })
    setSubmitting(false)
    setSubmitted(true)
    setSsnFull('')
  }

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-2xl mb-2">&#10003;</div>
        <h3 className="text-lg font-bold text-green-800 mb-2">W-9 Submitted</h3>
        <p className="text-sm text-green-700">Your W-9 has been submitted. You can update this information at any time by resubmitting.</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-slate-600 hover:text-slate-800 font-medium">Update W-9</button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-1">W-9 Submission</h2>
      <p className="text-sm text-gray-500 mb-6">Complete your W-9 information below. This is required before your first commission payment is processed. Your information is stored securely and used only for IRS reporting.</p>

      {existingW9 && (
        <div className="bg-green-50 border border-green-200 rounded-md px-4 py-3 mb-6 text-sm text-green-700">
          W-9 on file. Submitted {new Date(existingW9.submitted_at).toLocaleDateString()}. You may resubmit to update.
        </div>
      )}

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Legal Name *</label>
            <input required value={legalName} onChange={(e) => setLegalName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name (if different)</label>
            <input value={businessName} onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Federal Tax Classification *</label>
            <select required value={taxClass} onChange={(e) => setTaxClass(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white">
              <option value="">Select...</option>
              {TAX_CLASSIFICATIONS.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Exempt Payee Code</label>
            <input value={exemptCode} onChange={(e) => setExemptCode(e.target.value)} placeholder="Leave blank if unsure"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
          <input required value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-2" />
          <div className="grid grid-cols-3 gap-2">
            <input required value={city} onChange={(e) => setCity(e.target.value)} placeholder="City"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
            <select required value={addrState} onChange={(e) => setAddrState(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white">
              <option value="">State</option>
              {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <input required value={zip} onChange={(e) => setZip(e.target.value)} placeholder="ZIP" maxLength={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Social Security Number *</label>
            {existingW9?.ssn_last4 && !ssnFull ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 font-mono">***-**-{existingW9.ssn_last4}</span>
                <button onClick={() => setSsnFull('')} type="button" className="text-xs text-slate-600 hover:text-slate-800">Update</button>
              </div>
            ) : (
              <input type="password" value={ssnFull} onChange={(e) => setSsnFull(e.target.value)} placeholder="Only last 4 digits stored"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">EIN (if applicable)</label>
            <input value={ein} onChange={(e) => setEin(e.target.value)} placeholder="XX-XXXXXXX"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mt-4">
          <label className="flex items-start gap-2 cursor-pointer mb-4">
            <input type="checkbox" checked={certified} onChange={(e) => setCertified(e.target.checked)}
              className="accent-slate-800 mt-0.5" />
            <span className="text-sm text-gray-700">Under penalties of perjury, I certify that the information provided is accurate and complete.</span>
          </label>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Electronic Signature *</label>
              <input required value={signature} onChange={(e) => setSignature(e.target.value)} placeholder="Type your full legal name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm italic" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input readOnly value={today} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-500" />
            </div>
          </div>
        </div>

        <button onClick={handleSubmit} disabled={submitting || !certified || !signature || !legalName || !taxClass || (!ssnFull && !ein && !existingW9?.ssn_last4)}
          className="bg-slate-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-900 disabled:opacity-50">
          {submitting ? 'Submitting...' : existingW9 ? 'Resubmit W-9' : 'Submit W-9'}
        </button>
      </div>
    </div>
  )
}
