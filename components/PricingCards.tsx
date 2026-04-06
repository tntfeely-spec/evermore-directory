'use client'

import { useState } from 'react'
import Link from 'next/link'

const PLACEHOLDER_LINK = 'https://link.fastpaydirect.com/payment-link/6945a3de2024d451ed29cee0'

const PLANS = [
  {
    name: 'Free Standard',
    monthly: 0,
    annual: 0,
    priceLabel: { monthly: 'Free', annual: 'Free' },
    savings: '',
    features: [
      'City page listing',
      'Contact information',
      'Basic services display',
    ],
    cta: { label: 'Claim Free Listing', href: '/' },
    badge: '',
    style: 'border border-gray-200 bg-gray-50',
    titleColor: 'text-gray-700',
    isExternal: false,
  },
  {
    name: 'Essential',
    monthly: 79,
    annual: 749,
    priceLabel: { monthly: '$79/mo', annual: '$749/yr' },
    savings: 'Save $199',
    features: [
      'Everything in Free',
      'Featured badge',
      'Top of city page',
      'Statewide visibility',
      'Basic monthly report',
    ],
    cta: { label: 'Get Started', monthlyEnv: 'NEXT_PUBLIC_STRIPE_ESSENTIAL_MONTHLY', annualEnv: 'NEXT_PUBLIC_STRIPE_ESSENTIAL_ANNUAL' },
    badge: '',
    style: 'border-2 border-slate-300 bg-white',
    titleColor: 'text-slate-700',
    isExternal: true,
  },
  {
    name: 'Premier',
    monthly: 149,
    annual: 1399,
    priceLabel: { monthly: '$149/mo', annual: '$1,399/yr' },
    savings: 'Save $389',
    features: [
      'Everything in Essential',
      'Enhanced listing + photos',
      'Priority support',
      'Detailed analytics',
    ],
    cta: { label: 'Get Started', monthlyEnv: 'NEXT_PUBLIC_STRIPE_PREMIER_MONTHLY', annualEnv: 'NEXT_PUBLIC_STRIPE_PREMIER_ANNUAL' },
    badge: 'Most Popular',
    style: 'border-2 border-slate-700 bg-white shadow-xl scale-[1.02]',
    titleColor: 'text-slate-900',
    isExternal: true,
  },
  {
    name: 'Exclusive',
    monthly: 449,
    annual: 4699,
    priceLabel: { monthly: '$449/mo', annual: '$4,699/yr' },
    savings: 'Save $689',
    features: [
      'Everything in Premier',
      'Individual listing page',
      'GPL Verified badge',
      'Exclusive city placement (1 per city)',
      'Dedicated account manager',
    ],
    cta: { label: 'Claim Exclusive Slot', monthlyEnv: 'NEXT_PUBLIC_STRIPE_EXCLUSIVE_MONTHLY', annualEnv: 'NEXT_PUBLIC_STRIPE_EXCLUSIVE_ANNUAL' },
    badge: 'Limited — 1 Per City',
    style: 'border-2 border-amber-500 bg-gradient-to-br from-amber-50 to-white',
    titleColor: 'text-amber-900',
    isExternal: true,
  },
]

function getEnvLink(envName: string): string {
  if (typeof window === 'undefined') return PLACEHOLDER_LINK
  // NEXT_PUBLIC_ vars are inlined at build time, look them up via process.env
  const map: Record<string, string | undefined> = {
    NEXT_PUBLIC_STRIPE_ESSENTIAL_MONTHLY: process.env.NEXT_PUBLIC_STRIPE_ESSENTIAL_MONTHLY,
    NEXT_PUBLIC_STRIPE_ESSENTIAL_ANNUAL: process.env.NEXT_PUBLIC_STRIPE_ESSENTIAL_ANNUAL,
    NEXT_PUBLIC_STRIPE_PREMIER_MONTHLY: process.env.NEXT_PUBLIC_STRIPE_PREMIER_MONTHLY,
    NEXT_PUBLIC_STRIPE_PREMIER_ANNUAL: process.env.NEXT_PUBLIC_STRIPE_PREMIER_ANNUAL,
    NEXT_PUBLIC_STRIPE_EXCLUSIVE_MONTHLY: process.env.NEXT_PUBLIC_STRIPE_EXCLUSIVE_MONTHLY,
    NEXT_PUBLIC_STRIPE_EXCLUSIVE_ANNUAL: process.env.NEXT_PUBLIC_STRIPE_EXCLUSIVE_ANNUAL,
  }
  return map[envName] || PLACEHOLDER_LINK
}

export default function PricingCards({ showHeading = true }: { showHeading?: boolean }) {
  const [billingTerm, setBillingTerm] = useState<'monthly' | 'annual'>('annual')

  return (
    <div className="my-10">
      {showHeading && (
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">No setup fees. No long-term contracts. Cancel anytime.</p>
        </div>
      )}

      {/* Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center bg-gray-100 rounded-full p-1 relative">
          <button
            onClick={() => setBillingTerm('monthly')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              billingTerm === 'monthly' ? 'bg-white text-gray-900 shadow' : 'text-gray-600'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingTerm('annual')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all relative ${
              billingTerm === 'annual' ? 'bg-white text-gray-900 shadow' : 'text-gray-600'
            }`}
          >
            Annual
            <span className="ml-2 text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">
              Save ~20%
            </span>
          </button>
        </div>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PLANS.map((plan) => {
          const isFree = plan.name === 'Free Standard'
          const ctaHref = isFree
            ? plan.cta.href!
            : getEnvLink(billingTerm === 'monthly' ? plan.cta.monthlyEnv! : plan.cta.annualEnv!)

          return (
            <div key={plan.name} className={`relative rounded-2xl p-6 flex flex-col ${plan.style}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    plan.badge === 'Most Popular' ? 'bg-slate-700 text-white' : 'bg-amber-500 text-white'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-4 mt-2">
                <h3 className={`text-xl font-bold ${plan.titleColor}`}>{plan.name}</h3>
              </div>

              <div className="text-center mb-1">
                <div className="text-3xl font-bold text-gray-900">
                  {plan.priceLabel[billingTerm]}
                </div>
              </div>

              {plan.savings && billingTerm === 'annual' && (
                <div className="text-center mb-4">
                  <span className="text-xs text-green-700 font-semibold">{plan.savings}</span>
                </div>
              )}

              {!plan.savings && <div className="mb-4" />}

              <ul className="space-y-2 mb-6 flex-grow text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {isFree ? (
                <Link href={ctaHref}
                  className="block w-full py-2.5 px-4 rounded-lg text-center font-semibold text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors">
                  {plan.cta.label}
                </Link>
              ) : (
                <a href={ctaHref} target="_blank" rel="noopener noreferrer"
                  className={`block w-full py-2.5 px-4 rounded-lg text-center font-semibold text-sm transition-colors ${
                    plan.name === 'Exclusive'
                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
                      : plan.name === 'Premier'
                      ? 'bg-slate-800 hover:bg-slate-900 text-white'
                      : 'bg-slate-700 hover:bg-slate-800 text-white'
                  }`}>
                  {plan.cta.label}
                </a>
              )}
            </div>
          )
        })}
      </div>

      {/* Scarcity line */}
      <p className="text-center text-sm text-amber-700 italic mt-6">
        Exclusive slots are limited to one funeral home per city. Once claimed, competitors cannot take your spot.
      </p>
    </div>
  )
}
