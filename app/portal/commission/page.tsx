'use client'

import PortalLayout from '@/components/PortalLayout'
import { useState } from 'react'

const COMMISSION_TABLE = [
  { scenario: 'Essential Monthly', rate: '20%', earn: '$15.80/mo recurring' },
  { scenario: 'Essential Annual', rate: '25%', earn: '$187.25 per close' },
  { scenario: 'Premier Monthly', rate: '20%', earn: '$29.80/mo recurring' },
  { scenario: 'Premier Annual', rate: '25%', earn: '$349.75 per close' },
  { scenario: 'Exclusive Monthly', rate: '25%', earn: '$112.25/mo recurring' },
  { scenario: 'Exclusive Annual', rate: '30%', earn: '$1,409.70 per close' },
  { scenario: 'Exclusive Annual after 10 closes', rate: '33%', earn: '$1,550.67 per close' },
  { scenario: 'Exclusive Annual after 20 closes', rate: '35%', earn: '$1,644.65 per close' },
]

const EARNINGS = {
  essentialMonthly: 15.80,
  essentialAnnual: 187.25,
  premierMonthly: 29.80,
  premierAnnual: 349.75,
  exclusiveMonthly: 112.25,
  exclusiveAnnualBase: 1409.70,
  exclusiveAnnual33: 1550.67,
  exclusiveAnnual35: 1644.65,
}

type KickerLevel = 'none' | '33' | '35'

export default function CommissionPage() {
  const [essentialMonthly, setEssentialMonthly] = useState(0)
  const [essentialAnnual, setEssentialAnnual] = useState(0)
  const [premierMonthly, setPremierMonthly] = useState(0)
  const [premierAnnual, setPremierAnnual] = useState(0)
  const [exclusiveMonthly, setExclusiveMonthly] = useState(0)
  const [exclusiveAnnual, setExclusiveAnnual] = useState(0)
  const [kicker, setKicker] = useState<KickerLevel>('none')

  const exclusiveAnnualRate =
    kicker === '35' ? EARNINGS.exclusiveAnnual35
    : kicker === '33' ? EARNINGS.exclusiveAnnual33
    : EARNINGS.exclusiveAnnualBase

  const breakdown = [
    { label: 'Essential Monthly', closes: essentialMonthly, perClose: EARNINGS.essentialMonthly, total: essentialMonthly * EARNINGS.essentialMonthly },
    { label: 'Essential Annual', closes: essentialAnnual, perClose: EARNINGS.essentialAnnual, total: essentialAnnual * EARNINGS.essentialAnnual },
    { label: 'Premier Monthly', closes: premierMonthly, perClose: EARNINGS.premierMonthly, total: premierMonthly * EARNINGS.premierMonthly },
    { label: 'Premier Annual', closes: premierAnnual, perClose: EARNINGS.premierAnnual, total: premierAnnual * EARNINGS.premierAnnual },
    { label: 'Exclusive Monthly', closes: exclusiveMonthly, perClose: EARNINGS.exclusiveMonthly, total: exclusiveMonthly * EARNINGS.exclusiveMonthly },
    { label: 'Exclusive Annual', closes: exclusiveAnnual, perClose: exclusiveAnnualRate, total: exclusiveAnnual * exclusiveAnnualRate },
  ]

  const monthlyTotal = breakdown.reduce((sum, row) => sum + row.total, 0)
  const annualTotal = monthlyTotal * 12

  function handleNum(setter: (v: number) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseInt(e.target.value, 10)
      setter(isNaN(val) || val < 0 ? 0 : val)
    }
  }

  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })

  return (
    <PortalLayout>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Commission</h1>

      {/* SECTION 1: Commission Reference Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Commission Reference</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 font-medium text-gray-600">Scenario</th>
                <th className="px-6 py-3 font-medium text-gray-600">Rate</th>
                <th className="px-6 py-3 font-medium text-gray-600">What you earn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {COMMISSION_TABLE.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 text-gray-900 font-medium">{row.scenario}</td>
                  <td className="px-6 py-3 text-gray-700">{row.rate}</td>
                  <td className="px-6 py-3 text-gray-700">{row.earn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 2: Performance Kicker */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-amber-900 mb-2">Performance Kicker</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          After 10 Exclusive annual closes your rate increases to 33% on all future Exclusive annual closes permanently.
          After 20 Exclusive annual closes in any 12-month period, your rate increases to 35% permanently.
          Standard tiers remain at their base rate regardless of kicker. No clawbacks.
          Commission paid within 5 business days of confirmed payment.
        </p>
      </div>

      {/* SECTION 3: Earnings Calculator */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Earnings Calculator</h2>
          <p className="text-sm text-gray-500 mt-1">Enter your expected closes per month to see projected earnings.</p>
        </div>

        <div className="p-6">
          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {([
              ['Essential monthly closes/mo', essentialMonthly, setEssentialMonthly],
              ['Essential annual closes/mo', essentialAnnual, setEssentialAnnual],
              ['Premier monthly closes/mo', premierMonthly, setPremierMonthly],
              ['Premier annual closes/mo', premierAnnual, setPremierAnnual],
              ['Exclusive monthly closes/mo', exclusiveMonthly, setExclusiveMonthly],
              ['Exclusive annual closes/mo', exclusiveAnnual, setExclusiveAnnual],
            ] as [string, number, (v: number) => void][]).map(([label, value, setter]) => (
              <div key={label}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <input
                  type="number"
                  min={0}
                  value={value || ''}
                  onChange={handleNum(setter)}
                  placeholder="0"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none"
                />
              </div>
            ))}
          </div>

          {/* Kicker Toggle */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-700 mb-2">Kicker unlocked?</p>
            <div className="flex gap-4">
              {([
                ['none', 'No'],
                ['33', '33% (10+ closes)'],
                ['35', '35% (20+ closes)'],
              ] as [KickerLevel, string][]).map(([val, label]) => (
                <label key={val} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="kicker"
                    checked={kicker === val}
                    onChange={() => setKicker(val)}
                    className="text-slate-600 focus:ring-slate-500"
                  />
                  <span className="text-sm text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Monthly Commission</p>
                <p className="text-3xl font-bold text-gray-900">{fmt(monthlyTotal)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Annual Projection</p>
                <p className="text-3xl font-bold text-green-700">{fmt(annualTotal)}</p>
              </div>
            </div>

            {/* Tier Breakdown */}
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Breakdown by tier</h3>
            <div className="space-y-2">
              {breakdown.filter(row => row.closes > 0).map((row) => (
                <div key={row.label} className="flex items-center justify-between text-sm bg-white rounded-md px-4 py-2.5 border border-gray-100">
                  <span className="text-gray-700">
                    {row.label}: {row.closes} close{row.closes !== 1 ? 's' : ''} x {fmt(row.perClose)}
                  </span>
                  <span className="font-semibold text-gray-900">{fmt(row.total)}</span>
                </div>
              ))}
              {breakdown.every(row => row.closes === 0) && (
                <p className="text-sm text-gray-400 italic">Enter closes above to see your breakdown.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
