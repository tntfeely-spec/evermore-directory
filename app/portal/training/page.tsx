'use client'

import PortalLayout from '@/components/PortalLayout'
import Link from 'next/link'
import { useState } from 'react'

const SECTIONS = [
  { title: 'The Product', id: 0 },
  { title: 'The Pitch', id: 1 },
  { title: 'Objection Handling', id: 2 },
  { title: 'Mindset', id: 3 },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function SectionProduct() {
  return (
    <div className="space-y-5 text-gray-700 text-sm leading-relaxed">
      <p>
        Evermore Directory is a nationwide funeral home directory at{' '}
        <span className="font-semibold text-gray-900">funeralhomedirectories.com</span> listing
        4,800+ funeral homes across all 50 states. It is free for families. Revenue comes from
        funeral homes paying for featured listings.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Tier</th>
              <th className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Monthly</th>
              <th className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Annual</th>
              <th className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">What&apos;s Included</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 font-medium text-gray-900">Free Standard</td>
              <td className="px-4 py-3">Free</td>
              <td className="px-4 py-3">Free</td>
              <td className="px-4 py-3">City page listing</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <td className="px-4 py-3 font-medium text-gray-900">Essential</td>
              <td className="px-4 py-3">$79/mo</td>
              <td className="px-4 py-3">$749/yr</td>
              <td className="px-4 py-3">Featured badge, top of city page, basic report</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 font-medium text-gray-900">Premier</td>
              <td className="px-4 py-3">$149/mo</td>
              <td className="px-4 py-3">$1,399/yr</td>
              <td className="px-4 py-3">
                Everything in Essential plus statewide visibility, enhanced listing, photos,
                priority support, analytics
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-900">Exclusive</td>
              <td className="px-4 py-3">$449/mo</td>
              <td className="px-4 py-3">$4,699/yr</td>
              <td className="px-4 py-3">
                Everything in Premier plus individual listing page, GPL Verified badge, exclusive
                city placement (1 per small city, up to 5 per major metro), dedicated account manager
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="font-semibold text-gray-900 mb-1">How to find a prospect&apos;s live listing:</p>
        <p>
          Go to{' '}
          <span className="font-medium">funeralhomedirectories.com</span> and search their city.
          Their listing is already live. You can also go directly to{' '}
          <code className="bg-blue-100 px-1.5 py-0.5 rounded text-xs font-mono">
            funeralhomedirectories.com/funeral-homes/[state-abbreviation]/[city-slug]
          </code>.
        </p>
      </div>
    </div>
  )
}

function SectionPitch() {
  return (
    <div className="space-y-5 text-gray-700 text-sm leading-relaxed">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="font-semibold text-gray-900 mb-1">Opening Line</p>
        <p className="italic">
          &ldquo;Your funeral home is already listed at funeralhomedirectories.com. Families in
          [city] are finding it right now on Google.&rdquo;
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="font-semibold text-gray-900 mb-1">The ROI Sentence</p>
        <p>
          One family referral covers the annual cost many times over. The average family spends
          $9,000 with a funeral home. Your Essential annual listing is $749.
        </p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="font-semibold text-gray-900 mb-1">Scarcity Close (Exclusive only)</p>
        <p className="italic">
          &ldquo;There is one Exclusive slot per city. Once a competitor claims it, it&apos;s gone.&rdquo;
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-2">The Pitch in Plain English</h4>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 italic">
          &ldquo;Your funeral home is already listed at funeralhomedirectories.com. Families in
          [city] are finding it right now on Google. A featured listing puts you at the top with
          your photos, services, and contact info front and center. It is $749 for the year for
          Essential. One family covers that cost many times over. I can generate the payment link
          right now and have you featured by end of day.&rdquo;
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-2">How to Close</h4>
        <ol className="list-decimal list-inside space-y-2">
          <li>Find their listing on funeralhomedirectories.com before reaching out</li>
          <li>Lead with their business name to establish credibility</li>
          <li>Explain what they already have for free</li>
          <li>Pitch the upgrade with ROI framing, Exclusive first</li>
          <li>Go to the portal, open Log a Sale, and generate the Stripe payment link for the chosen tier</li>
          <li>
            Send the payment link directly to the prospect. Once they pay, the close is logged and
            your commission is calculated automatically.
          </li>
        </ol>
      </div>
    </div>
  )
}

function SectionObjections() {
  const objections = [
    {
      q: 'We already have a website.',
      a: 'Their site and Evermore work independently. Families searching Google may find Evermore before they ever find the funeral home\'s own website. This is additional reach, not a replacement.',
    },
    {
      q: 'We don\'t need more listings.',
      a: 'This is not a listing service. It is a family-facing directory that appears in Google searches at the exact moment a family needs help. You are already listed for free. The upgrade makes you the first thing they see.',
    },
    {
      q: 'What\'s the cost?',
      a: 'Lead with annual. Essential is $749 for the year, which is $62 a month. One family referral covers it. Would you like to start with monthly while you see how it performs?',
    },
    {
      q: 'I need to think about it.',
      a: 'Completely understand. When would be a good time to follow up? Then call back exactly when you said you would. Most closes happen on the second or third contact. Calling back when you say you will separates you from 90% of salespeople.',
    },
    {
      q: 'Send me some information.',
      a: 'Pull up your listing right now while I have you. Go to funeralhomedirectories.com and search [their city]. You will see your listing in the results. That is what families see when they search for a funeral home in your area. The upgrade puts you at the top of that page.',
    },
    {
      q: 'We tried something like this before and it didn\'t work.',
      a: 'What were you using? (Listen.) The difference with Evermore is that your listing is already live and already indexed on Google. Families are finding it now. You are not paying to be added, you are paying to be featured at the top.',
    },
  ]

  return (
    <div className="space-y-4 text-sm leading-relaxed">
      {objections.map((obj, i) => (
        <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="font-bold text-gray-900 mb-2">&ldquo;{obj.q}&rdquo;</p>
          <p className="text-gray-700">{obj.a}</p>
        </div>
      ))}
    </div>
  )
}

function SectionMindset() {
  return (
    <div className="space-y-5 text-gray-700 text-sm leading-relaxed">
      <p className="font-medium text-gray-900">
        You will hear no many times before you hear yes. That is not failure. That is the job.
      </p>

      <p>
        A rep making 20 outreach contacts a day will hear no 19 times and yes once. That one yes is
        worth $187 to $1,410 depending on tier. The math works if you keep your volume up.
      </p>

      <div>
        <h4 className="font-semibold text-gray-900 mb-3">
          The three things that separate top reps from average ones:
        </h4>
        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold">
              1
            </span>
            <p>
              <span className="font-semibold text-gray-900">They look up the listing before every call.</span>{' '}
              Showing up prepared is the difference between a cold call and a warm conversation.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold">
              2
            </span>
            <p>
              <span className="font-semibold text-gray-900">They call back exactly when they say they will.</span>{' '}
              Most reps do not. This alone closes deals.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold">
              3
            </span>
            <p>
              <span className="font-semibold text-gray-900">They ask for the Exclusive first, every time.</span>{' '}
              You can always come down. You cannot go up.
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}

const SECTION_CONTENT = [
  <SectionProduct key="product" />,
  <SectionPitch key="pitch" />,
  <SectionObjections key="objections" />,
  <SectionMindset key="mindset" />,
]

export default function TrainingPage() {
  const [open, setOpen] = useState<number | null>(0)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <PortalLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Training Hub</h1>
        <p className="text-gray-500 text-sm mt-1">
          Everything you need to know to sell featured listings effectively.
        </p>
      </div>

      <Link href="/portal/training/manual"
        className="block bg-slate-800 text-white rounded-lg p-5 mb-6 hover:bg-slate-900 transition-colors">
        <div className="font-semibold text-lg">Read the Full Training Manual</div>
        <p className="text-slate-300 text-sm mt-1">Complete Sales Training Manual v3 with scripts, objection handling, and commission tables.</p>
      </Link>

      <div className="space-y-3">
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggle(section.id)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900 text-base">{section.title}</span>
              <ChevronIcon open={open === section.id} />
            </button>
            {open === section.id && (
              <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                {SECTION_CONTENT[section.id]}
              </div>
            )}
          </div>
        ))}
      </div>
    </PortalLayout>
  )
}
