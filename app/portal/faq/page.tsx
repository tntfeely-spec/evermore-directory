'use client'

import PortalLayout, { usePortalUser } from '@/components/PortalLayout'
import { useState } from 'react'

type FAQItem = {
  question: string
  answer: string
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'How many paying customers does Evermore currently have?',
    answer: 'We are in active sales launch. The product is fully live, indexed on Google, and functional end to end. You are joining at the ground floor, which means unclaimed cities in every state and no competitor reps working the same list.',
  },
  {
    question: 'Has the pricing been tested?',
    answer: 'The pricing was benchmarked against Google Ads for funeral home keywords ($5-7 per click, $1,500-3,000 per month for a modest campaign) and Yelp advertising rates. Essential at $749 per year is a fraction of what Google Ads costs for comparable exposure, and the listing compounds over time instead of disappearing when spend stops.',
  },
  {
    question: 'What if a prospect asks why they should trust a new directory?',
    answer: 'Their listing is already live and already appearing in Google search results. That is not a promise. They can verify it in 30 seconds by searching their own business name. The listing exists, it is indexed, and families are already finding it. You are not asking them to bet on a future product. It is already working.',
  },
  {
    question: 'What if they say Parting.com already lists them for free?',
    answer: 'Parting.com has not updated their directory since 2022 and their blog has not been touched in three years. Evermore is actively maintained and updated. The Exclusive tier also gives them something Parting cannot: a dedicated individual listing page at a permanent URL they can share and own.',
  },
  {
    question: 'What do I do if they want a discount?',
    answer: 'Do not discount the price. Offer the monthly plan instead of annual as a lower-risk entry point. If they push hard on price, offer a one-month trial on Essential ($79) with no annual commitment. Never drop below the published pricing.',
  },
  {
    question: 'How do I handle it if someone is rude or dismissive?',
    answer: 'Stay warm and exit cleanly. "No problem at all, I appreciate your time." Do not argue, do not push. Log it as NI and move to the next call. Funeral home owners talk to each other. How you handle a no matters.',
  },
  {
    question: 'What if two reps are working the same territory?',
    answer: 'Until a rep directory and territory assignment system is live, contact the admin if you believe there is overlap. Work your assigned lead list and log every contact so there is a record.',
  },
  {
    question: 'When do I get paid?',
    answer: 'Within 5 business days of confirmed payment from the funeral home. You can track your commission in the portal dashboard. If a payment is confirmed but commission is not reflected within 5 business days, contact terry.feely@me.com.',
  },
  {
    question: 'What if a customer cancels?',
    answer: 'No clawbacks after year one. If a customer cancels within the first year on an annual plan, commission handling is case by case. Monthly commissions stop when the account cancels.',
  },
  {
    question: 'Do I need any special tools or software?',
    answer: 'No. Everything you need is in the portal. Your own phone for outreach, the portal for logging calls and generating payment links, and funeralhomedirectories.com to look up listings before you call. That is it.',
  },
]

export default function FAQPage() {
  const user = usePortalUser()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!user) return null

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <PortalLayout>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>

      <div className="space-y-3">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-900 pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed pt-4">{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </PortalLayout>
  )
}
