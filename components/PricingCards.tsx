'use client'

import Link from 'next/link'

const TIERS = [
  {
    name: 'Essential',
    monthly: '$79/mo',
    annual: '$749/yr',
    savings: 'Save $199',
    monthlyHref: process.env.NEXT_PUBLIC_STRIPE_ESSENTIAL_MONTHLY || '/contact?plan=essential-monthly',
    annualHref: process.env.NEXT_PUBLIC_STRIPE_ESSENTIAL_ANNUAL || '/contact?plan=essential-annual',
    badge: 'Most Affordable',
    headerClass: 'bg-slate-50 border-slate-300',
    titleColor: 'text-slate-700',
    btnClass: 'bg-slate-700 hover:bg-slate-800 text-white',
  },
  {
    name: 'Premier',
    monthly: '$149/mo',
    annual: '$1,399/yr',
    savings: 'Save $389',
    monthlyHref: process.env.NEXT_PUBLIC_STRIPE_PREMIER_MONTHLY || '/contact?plan=premier-monthly',
    annualHref: process.env.NEXT_PUBLIC_STRIPE_PREMIER_ANNUAL || '/contact?plan=premier-annual',
    badge: 'Most Popular',
    headerClass: 'bg-slate-100 border-slate-700 ring-2 ring-slate-700',
    titleColor: 'text-slate-900',
    btnClass: 'bg-slate-800 hover:bg-slate-900 text-white',
  },
  {
    name: 'Exclusive',
    monthly: '$449/mo',
    annual: '$4,699/yr',
    savings: 'Save $689',
    monthlyHref: process.env.NEXT_PUBLIC_STRIPE_EXCLUSIVE_MONTHLY || '/contact?plan=exclusive-monthly',
    annualHref: process.env.NEXT_PUBLIC_STRIPE_EXCLUSIVE_ANNUAL || '/contact?plan=exclusive-annual',
    badge: 'Limited — 1 Per City',
    headerClass: 'bg-amber-50 border-amber-500',
    titleColor: 'text-amber-900',
    btnClass: 'bg-amber-600 hover:bg-amber-700 text-white',
  },
]

const FEATURES: { label: string; values: (string | boolean)[] }[] = [
  { label: 'City page listing', values: [true, true, true] },
  { label: 'Featured badge + top of city page', values: [true, true, true] },
  { label: 'Statewide visibility', values: [true, true, true] },
  { label: 'Basic monthly report', values: [true, true, true] },
  { label: 'Enhanced listing + photos', values: [false, true, true] },
  { label: 'Priority support', values: [false, true, true] },
  { label: 'Detailed analytics', values: [false, true, true] },
  { label: 'Individual listing page', values: [false, false, true] },
  { label: 'GPL Verified badge', values: [false, false, true] },
  { label: 'Exclusive city placement', values: [false, false, '1 per city'] },
  { label: 'Dedicated account manager', values: [false, false, true] },
]

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <span className="text-green-600 text-xl">✓</span>
  if (value === false) return <span className="text-gray-300">—</span>
  return <span className="text-sm font-semibold text-gray-800">{value}</span>
}

export default function PricingCards({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <div className="my-10">
      {showHeading && (
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">No setup fees. No long-term contracts. Cancel anytime.</p>
        </div>
      )}

      {/* Mobile: stacked cards */}
      <div className="lg:hidden space-y-6">
        {TIERS.map((tier, i) => (
          <div key={tier.name} className={`rounded-2xl border-2 p-6 ${tier.headerClass}`}>
            {tier.badge && (
              <div className="text-center mb-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${tier.name === 'Exclusive' ? 'bg-amber-500 text-white' : tier.name === 'Essential' ? 'bg-green-600 text-white' : 'bg-slate-700 text-white'}`}>
                  {tier.badge}
                </span>
              </div>
            )}
            <h3 className={`text-2xl font-bold text-center ${tier.titleColor}`}>{tier.name}</h3>
            <div className="text-center my-4">
              <div className="text-3xl font-bold text-gray-900">{tier.annual}</div>
              <div className="text-sm text-green-700 font-semibold">{tier.savings}</div>
              <div className="text-sm text-gray-500 mt-1">or {tier.monthly}</div>
            </div>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              {FEATURES.filter(f => f.values[i]).map(f => (
                <li key={f.label} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>{f.label}{typeof f.values[i] === 'string' ? ` — ${f.values[i]}` : ''}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <a href={tier.annualHref} target="_blank" rel="noopener noreferrer"
                className={`block w-full py-2.5 px-4 rounded-lg text-center font-semibold text-sm ${tier.btnClass}`}>
                Start Annual
              </a>
              <a href={tier.monthlyHref} target="_blank" rel="noopener noreferrer"
                className="block w-full py-2.5 px-4 rounded-lg text-center font-semibold text-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
                Start Monthly
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: comparison table */}
      <div className="hidden lg:block">
        <div className="pt-6 overflow-visible">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr>
                <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-200 w-1/4"></th>
                {TIERS.map((tier) => (
                  <th key={tier.name} className={`p-4 text-center border-2 ${tier.headerClass} relative align-top overflow-visible`}>
                    {tier.badge && (
                      <div className="absolute -top-3 left-0 right-0 flex justify-center">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${tier.name === 'Exclusive' ? 'bg-amber-500 text-white' : tier.name === 'Essential' ? 'bg-green-600 text-white' : 'bg-slate-700 text-white'}`}>
                          {tier.badge}
                        </span>
                      </div>
                    )}
                    <div className={`text-2xl font-bold mt-2 ${tier.titleColor}`}>{tier.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="p-4 font-semibold text-gray-700 border-b border-gray-200">Monthly</td>
                {TIERS.map((tier) => (
                  <td key={tier.name} className="p-4 text-center text-lg font-bold text-gray-900 border-b border-gray-200">{tier.monthly}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-gray-700 border-b border-gray-200">Annual</td>
                {TIERS.map((tier) => (
                  <td key={tier.name} className="p-4 text-center text-lg font-bold text-gray-900 border-b border-gray-200">{tier.annual}</td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 font-semibold text-gray-700 border-b border-gray-200">Annual savings</td>
                {TIERS.map((tier) => (
                  <td key={tier.name} className="p-4 text-center text-sm text-green-700 font-semibold border-b border-gray-200">{tier.savings}</td>
                ))}
              </tr>
              {FEATURES.map((feature, fi) => (
                <tr key={feature.label} className={fi % 2 === 0 ? '' : 'bg-gray-50'}>
                  <td className="p-4 text-gray-700 text-sm border-b border-gray-200">{feature.label}</td>
                  {feature.values.map((value, i) => (
                    <td key={i} className="p-4 text-center border-b border-gray-200">
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-4"></td>
                {TIERS.map((tier) => (
                  <td key={tier.name} className="p-4 text-center align-top">
                    <div className="space-y-2">
                      <a href={tier.annualHref} target="_blank" rel="noopener noreferrer"
                        className={`block w-full py-2.5 px-4 rounded-lg text-center font-semibold text-sm ${tier.btnClass}`}>
                        Start Annual
                      </a>
                      <a href={tier.monthlyHref} target="_blank" rel="noopener noreferrer"
                        className="block w-full py-2.5 px-4 rounded-lg text-center font-semibold text-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
                        Start Monthly
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Note */}
      <p className="text-center text-sm text-gray-600 mt-6 max-w-2xl mx-auto">
        Annual plans and Premier/Exclusive tiers are invoiced directly. Click to start the process and we will send your payment link within one business day.
      </p>

      {/* Scarcity */}
      <p className="text-center text-sm text-amber-700 italic mt-3">
        Exclusive slots are limited to one funeral home per city. Once claimed, competitors cannot take your spot.
      </p>
    </div>
  )
}
