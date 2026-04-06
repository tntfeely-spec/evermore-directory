import type { Metadata } from 'next'
import PricingCards from '@/components/PricingCards'

export const metadata: Metadata = {
  title: 'Upgrade Your Evermore Listing',
  description: 'Featured listing pricing for funeral homes on Evermore Directory.',
  robots: { index: false, follow: false },
}

export default function UpgradePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Wordmark */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Evermore Directory</h2>
          <p className="text-sm text-gray-500 mt-1">funeralhomedirectories.com</p>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upgrade Your Evermore Listing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your funeral home is already listed on funeralhomedirectories.com. Families in your city are finding you right now. A featured listing puts you at the top.
          </p>
        </div>

        {/* Pricing cards (shared component) */}
        <PricingCards showHeading={false} />

        {/* ROI callout */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-md p-5 mt-8 mb-6 max-w-3xl mx-auto">
          <p className="text-gray-800">
            The average funeral service generates <strong>$7,000 to $12,000 in revenue</strong>. Essential at $749/year pays for itself with a single family referral.
          </p>
        </div>

        {/* Small print */}
        <p className="text-xs text-gray-500 text-center mt-6">
          No long-term contract. Monthly plans cancel anytime. Annual plans have no auto-renewal obligation after year one.
        </p>

        {/* Direct link */}
        <p className="text-center text-xs text-gray-400 mt-12">
          Direct link to this page: funeralhomedirectories.com/upgrade
        </p>
      </div>
    </main>
  )
}
