'use client'

import PortalLayout, { usePortalUser } from '@/components/PortalLayout'
import { useState, useEffect, useCallback } from 'react'

type Sale = { id: string; business_name: string; city: string; state: string; plan: string; billing_term: string; price: number; salesperson: string; created_at: string; custom_price: number | null }
type Profile = { w9_submitted: boolean; agreement_signed: boolean; training_completed: boolean; full_legal_name: string }
type Announcement = { id: string; title: string; body: string; created_at: string; created_by: string }
type CallLog = { id: string; business_name: string; city_state: string; call_date: string; result: string; follow_up_date: string }

const COMMISSION_RATES: Record<string, number> = {
  'Essential_monthly': 0.20, 'Essential_annual': 0.25,
  'Premier_monthly': 0.20, 'Premier_annual': 0.25,
  'Exclusive_monthly': 0.25, 'Exclusive_annual': 0.30,
  'Custom_custom': 0.25,
}

function calcCommission(sale: Sale, exclusiveAnnualCount: number): number {
  const key = `${sale.plan}_${sale.billing_term}`
  let rate = COMMISSION_RATES[key] || 0.25
  if (sale.plan === 'Exclusive' && sale.billing_term === 'annual') {
    if (exclusiveAnnualCount > 20) rate = 0.35
    else if (exclusiveAnnualCount > 10) rate = 0.33
  }
  const price = sale.custom_price || sale.price || 0
  return Number(price) * rate
}

export default function DashboardPage() {
  const user = usePortalUser()
  const [sales, setSales] = useState<Sale[]>([])
  const [profile, setProfile] = useState<Profile | null>(null)
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [followups, setFollowups] = useState<CallLog[]>([])
  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('')
  const [showAnnForm, setShowAnnForm] = useState(false)

  const load = useCallback(async () => {
    if (!user) return
    const [salesRes, profileRes, annRes, fuRes] = await Promise.all([
      fetch(`/api/portal/sales?username=${user.username}&role=${user.role}&limit=999`),
      fetch(`/api/portal/profile?username=${user.username}`),
      fetch('/api/portal/announcements'),
      fetch(`/api/portal/calls?username=${user.username}&role=${user.role}&followups=true`),
    ])
    const salesData = await salesRes.json()
    const profileData = await profileRes.json()
    const annData = await annRes.json()
    const fuData = await fuRes.json()
    setSales(salesData.sales || [])
    setProfile(profileData.profile)
    setAnnouncements(annData.announcements || [])
    setFollowups(fuData.calls || [])
  }, [user])

  useEffect(() => { load() }, [load])

  if (!user) return null

  const now = new Date()
  const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
  const monthSales = sales.filter((s) => s.created_at?.startsWith(thisMonth))
  const exclusiveAnnualCount = sales.filter((s) => s.plan === 'Exclusive' && s.billing_term === 'annual').length

  const totalCommission = sales.reduce((sum, s) => sum + calcCommission(s, exclusiveAnnualCount), 0)
  const monthCommission = monthSales.reduce((sum, s) => sum + calcCommission(s, exclusiveAnnualCount), 0)

  // Kicker progress
  let kickerLabel = ''
  let kickerProgress = 0
  let kickerMax = 10
  if (exclusiveAnnualCount >= 20) {
    kickerLabel = 'Maximum kicker achieved. 35% on all Exclusive annual closes.'
    kickerProgress = 100; kickerMax = 20
  } else if (exclusiveAnnualCount >= 10) {
    kickerLabel = `${exclusiveAnnualCount} of 20 toward 35% permanent rate`
    kickerProgress = ((exclusiveAnnualCount - 10) / 10) * 100; kickerMax = 20
  } else {
    kickerLabel = `${exclusiveAnnualCount} of 10 Exclusive annual closes toward 33% kicker`
    kickerProgress = (exclusiveAnnualCount / 10) * 100; kickerMax = 10
  }

  // Onboarding
  const hasClose = sales.length > 0
  const checks = [
    { label: 'Profile completed', done: !!profile?.full_legal_name },
    { label: 'W-9 submitted', done: !!profile?.w9_submitted },
    { label: 'Agreement signed', done: !!profile?.agreement_signed },
    { label: 'Training completed', done: !!profile?.training_completed },
    { label: 'First close logged', done: hasClose },
  ]
  const allDone = checks.every((c) => c.done)

  async function postAnnouncement() {
    if (!newTitle || !newBody) return
    await fetch('/api/portal/announcements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle, body: newBody, created_by: user!.username }),
    })
    setNewTitle(''); setNewBody(''); setShowAnnForm(false); load()
  }

  const last5 = sales.slice(0, 5)

  return (
    <PortalLayout>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Welcome back, {user.username}.</h1>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Closes" value={String(sales.length)} />
        <StatCard label="Commission Earned" value={`$${totalCommission.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
        <StatCard label="Closes This Month" value={String(monthSales.length)} />
        <StatCard label="Commission This Month" value={`$${monthCommission.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
      </div>

      {/* Kicker progress */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">Performance Kicker</span>
          <span className="text-xs text-gray-500">{kickerLabel}</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div className="bg-slate-700 h-3 rounded-full transition-all" style={{ width: `${Math.min(kickerProgress, 100)}%` }} />
        </div>
      </div>

      {/* Onboarding */}
      {!allDone && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
          <h2 className="text-sm font-bold text-amber-800 mb-3">Getting Started</h2>
          <div className="space-y-2">
            {checks.map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <span className={`text-sm ${c.done ? 'text-green-600' : 'text-gray-400'}`}>{c.done ? '\u2713' : '\u25CB'}</span>
                <span className={`text-sm ${c.done ? 'text-gray-600 line-through' : 'text-gray-800'}`}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Announcements */}
      {announcements.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Announcements</h2>
            {user.role === 'admin' && (
              <button onClick={() => setShowAnnForm(!showAnnForm)} className="text-xs text-slate-600 hover:text-slate-800 font-medium">
                {showAnnForm ? 'Cancel' : 'Post Announcement'}
              </button>
            )}
          </div>
          {showAnnForm && (
            <div className="mb-4 space-y-2">
              <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
              <textarea value={newBody} onChange={(e) => setNewBody(e.target.value)} placeholder="Body" rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
              <button onClick={postAnnouncement}
                className="bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-semibold">Post</button>
            </div>
          )}
          {announcements.map((a) => (
            <div key={a.id} className="border-b border-gray-100 py-3 last:border-0">
              <div className="flex justify-between">
                <h3 className="text-sm font-semibold text-gray-800">{a.title}</h3>
                <span className="text-xs text-gray-400">{new Date(a.created_at).toLocaleDateString()}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{a.body}</p>
            </div>
          ))}
        </div>
      )}
      {announcements.length === 0 && user.role === 'admin' && (
        <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Announcements</h2>
            <button onClick={() => setShowAnnForm(!showAnnForm)} className="text-xs text-slate-600 hover:text-slate-800 font-medium">
              {showAnnForm ? 'Cancel' : 'Post Announcement'}
            </button>
          </div>
          {showAnnForm && (
            <div className="space-y-2">
              <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
              <textarea value={newBody} onChange={(e) => setNewBody(e.target.value)} placeholder="Body" rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
              <button onClick={postAnnouncement}
                className="bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-semibold">Post</button>
            </div>
          )}
          {!showAnnForm && <p className="text-sm text-gray-400">No announcements yet.</p>}
        </div>
      )}

      {/* Follow-ups due */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Follow-Ups Due</h2>
        {followups.length === 0 ? (
          <p className="text-sm text-gray-400">No follow-ups due today.</p>
        ) : (
          <div className="space-y-2">
            {followups.map((f) => (
              <div key={f.id} className="flex items-center justify-between bg-amber-50 border border-amber-200 rounded-md px-4 py-2">
                <div>
                  <span className="text-sm font-medium text-gray-800">{f.business_name}</span>
                  <span className="text-xs text-gray-500 ml-2">{f.city_state}</span>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${f.result === 'CB' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>{f.result}</span>
                  <span className="text-xs text-gray-400 ml-2">called {f.call_date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Last 5 closes */}
      {last5.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Recent Closes</h2>
          </div>
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50">
              <th className="text-left px-4 py-2 text-gray-500 font-medium">Date</th>
              <th className="text-left px-4 py-2 text-gray-500 font-medium">Business</th>
              <th className="text-left px-4 py-2 text-gray-500 font-medium">Location</th>
              <th className="text-left px-4 py-2 text-gray-500 font-medium">Plan</th>
              <th className="text-right px-4 py-2 text-gray-500 font-medium">Commission</th>
            </tr></thead>
            <tbody>
              {last5.map((s) => (
                <tr key={s.id} className="border-b border-gray-50">
                  <td className="px-4 py-2.5 text-gray-500">{new Date(s.created_at).toLocaleDateString()}</td>
                  <td className="px-4 py-2.5 font-medium text-gray-800">{s.business_name}</td>
                  <td className="px-4 py-2.5 text-gray-600">{s.city}, {s.state}</td>
                  <td className="px-4 py-2.5 text-gray-600">{s.plan} ({s.billing_term})</td>
                  <td className="px-4 py-2.5 text-right font-semibold text-green-700">${calcCommission(s, exclusiveAnnualCount).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </PortalLayout>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5">
      <div className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">{label}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  )
}
