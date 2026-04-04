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
    </PortalLayout>
  )
}
