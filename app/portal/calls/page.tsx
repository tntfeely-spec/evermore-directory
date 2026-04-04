'use client'

import PortalLayout, { usePortalUser } from '@/components/PortalLayout'
import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'

type CallLog = {
  id?: string
  date: string
  business_name: string
  city_state: string
  result: string
  email_captured: boolean
  follow_up_date: string
  notes: string
  username?: string
}

const RESULT_OPTIONS = ['VM', 'NI', 'CB', 'INFO', 'CLOSED']

const RESULT_COLORS: Record<string, string> = {
  CLOSED: 'bg-green-100 text-green-800',
  CB: 'bg-yellow-100 text-yellow-800',
  INFO: 'bg-blue-100 text-blue-800',
  VM: 'bg-gray-100 text-gray-700',
  NI: 'bg-red-100 text-red-800',
}

function todayString() {
  return new Date().toISOString().split('T')[0]
}

export default function CallsPage() {
  const user = usePortalUser()
  const searchParams = useSearchParams()

  const [businessName, setBusinessName] = useState('')
  const [cityState, setCityState] = useState('')
  const [date, setDate] = useState(todayString())
  const [result, setResult] = useState('VM')
  const [emailCaptured, setEmailCaptured] = useState(false)
  const [followUpDate, setFollowUpDate] = useState('')
  const [notes, setNotes] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const [calls, setCalls] = useState<CallLog[]>([])
  const [loading, setLoading] = useState(true)

  // Pre-fill from URL search params
  useEffect(() => {
    const prefillBusiness = searchParams.get('business')
    const prefillCity = searchParams.get('city')
    if (prefillBusiness) setBusinessName(decodeURIComponent(prefillBusiness))
    if (prefillCity) setCityState(decodeURIComponent(prefillCity))
  }, [searchParams])

  const loadCalls = useCallback(async () => {
    if (!user) return
    try {
      const res = await fetch(`/api/portal/calls?username=${user.username}&role=${user.role}`)
      const data = await res.json()
      setCalls(data.calls || [])
    } catch {
      // silently fail
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    loadCalls()
  }, [loadCalls])

  if (!user) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!businessName.trim() || !cityState.trim()) return
    setSubmitting(true)
    try {
      await fetch('/api/portal/calls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user!.username,
          business_name: businessName.trim(),
          city_state: cityState.trim(),
          date,
          result,
          email_captured: emailCaptured,
          follow_up_date: (result === 'VM' || result === 'CB') ? followUpDate : '',
          notes: notes.trim(),
        }),
      })
      // Reset form
      setBusinessName('')
      setCityState('')
      setDate(todayString())
      setResult('VM')
      setEmailCaptured(false)
      setFollowUpDate('')
      setNotes('')
      loadCalls()
    } catch {
      // silently fail
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PortalLayout>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Call Tracker</h1>

      {/* Call Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Log a Call</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none"
                placeholder="ABC Funeral Home"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City, State *</label>
              <input
                type="text"
                required
                value={cityState}
                onChange={(e) => setCityState(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none"
                placeholder="Nashville, TN"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Result</label>
              <select
                value={result}
                onChange={(e) => setResult(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none"
              >
                {RESULT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailCaptured}
                  onChange={(e) => setEmailCaptured(e.target.checked)}
                  className="w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                />
                <span className="text-sm font-medium text-gray-700">Email Captured</span>
              </label>
            </div>
          </div>

          {(result === 'VM' || result === 'CB') && (
            <div className="max-w-xs">
              <label className="block text-sm font-medium text-gray-700 mb-1">Follow-up Date</label>
              <input
                type="date"
                value={followUpDate}
                onChange={(e) => setFollowUpDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none resize-none"
              placeholder="Optional notes..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="bg-slate-800 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-slate-700 disabled:opacity-50 transition-colors"
          >
            {submitting ? 'Saving...' : 'Log Call'}
          </button>
        </form>
      </div>

      {/* Call Log Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Call Log</h2>
        </div>
        {loading ? (
          <div className="px-6 py-8 text-center text-gray-400 text-sm">Loading calls...</div>
        ) : calls.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-400 text-sm">No calls logged yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-600">
                  <th className="px-4 py-3 font-medium">Date</th>
                  {user.role === 'admin' && <th className="px-4 py-3 font-medium">Rep</th>}
                  <th className="px-4 py-3 font-medium">Business</th>
                  <th className="px-4 py-3 font-medium">City/State</th>
                  <th className="px-4 py-3 font-medium">Result</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Follow-up</th>
                  <th className="px-4 py-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {calls.map((call, i) => (
                  <tr key={call.id || i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap text-gray-700">{call.date}</td>
                    {user.role === 'admin' && <td className="px-4 py-3 whitespace-nowrap text-gray-700">{call.username}</td>}
                    <td className="px-4 py-3 text-gray-900 font-medium">{call.business_name}</td>
                    <td className="px-4 py-3 text-gray-700">{call.city_state}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${RESULT_COLORS[call.result] || 'bg-gray-100 text-gray-700'}`}>
                        {call.result}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">{call.email_captured ? '✓' : '—'}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-700">{call.follow_up_date || '—'}</td>
                    <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{call.notes || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PortalLayout>
  )
}
