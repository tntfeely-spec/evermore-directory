import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Upgrade Your Evermore Listing',
  description: 'Featured listing pricing for funeral homes on Evermore Directory.',
  robots: { index: false, follow: false },
}

export default function UpgradePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Wordmark */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Evermore Directory</h2>
          <p className="text-sm text-gray-500 mt-1">funeralhomedirectories.com</p>
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upgrade Your Evermore Listing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your funeral home is already listed on funeralhomedirectories.com. Families in your city are finding you right now. A featured listing puts you at the top.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-4 text-left font-semibold text-gray-700 border-b border-gray-200"></th>
                <th className="px-4 py-4 text-center font-semibold text-gray-700 border-b border-gray-200">Free</th>
                <th className="px-4 py-4 text-center font-semibold text-gray-700 border-b border-gray-200">Essential</th>
                <th className="px-4 py-4 text-center font-semibold text-gray-700 border-b border-gray-200">Premier</th>
                <th className="px-4 py-4 text-center font-semibold text-gray-900 border-b border-gray-200 bg-amber-50">Exclusive</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium text-gray-700">Monthly</td>
                <td className="px-4 py-3 text-center text-gray-600">Free</td>
                <td className="px-4 py-3 text-center text-gray-800 font-semibold">$79/mo</td>
                <td className="px-4 py-3 text-center text-gray-800 font-semibold">$149/mo</td>
                <td className="px-4 py-3 text-center text-gray-900 font-semibold bg-amber-50">$449/mo</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium text-gray-700">Annual</td>
                <td className="px-4 py-3 text-center text-gray-600">Free</td>
                <td className="px-4 py-3 text-center text-gray-800 font-semibold">$749/yr</td>
                <td className="px-4 py-3 text-center text-gray-800 font-semibold">$1,399/yr</td>
                <td className="px-4 py-3 text-center text-gray-900 font-semibold bg-amber-50">$4,699/yr</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium text-gray-700">Annual savings</td>
                <td className="px-4 py-3 text-center text-gray-400">—</td>
                <td className="px-4 py-3 text-center text-green-700 font-medium">Save $199</td>
                <td className="px-4 py-3 text-center text-green-700 font-medium">Save $389</td>
                <td className="px-4 py-3 text-center text-green-700 font-medium bg-amber-50">Save $689</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 text-gray-700">City page listing</td>
                <td className="px-4 py-3 text-center text-green-600">✓</td>
                <td className="px-4 py-3 text-center text-green-600">✓</td>
                <td className="px-4 py-3 text-center text-green-600">✓</td>
                <td className="px-4 py-3 text-center text-green-600 bg-amber-50">✓</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 text-gray-700">Featured badge + top of city page</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-green-600">✓</td>
                <td className="px-4 py-3 text-center text-green-600">✓</td>
                <td className="px-4 py-3 text-center text-green-600 bg-amber-50">✓</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 text-gray-700">Enhanced listing + photos</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-green-600">✓</td>
                <td className="px-4 py-3 text-center text-green-600 bg-amber-50">✓</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 text-gray-700">Individual listing page</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-green-600 bg-amber-50">✓</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 text-gray-700">GPL Verified badge</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-green-600 bg-amber-50">✓</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Exclusive city placement</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-gray-300">—</td>
                <td className="px-4 py-3 text-center text-gray-900 font-semibold bg-amber-50">1 per city</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scarcity callout */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-md p-5 mb-6">
          <p className="text-gray-800">
            <strong>Exclusive listings are limited to one per city in smaller markets.</strong> Once a competitor claims the slot, it is gone.
          </p>
        </div>

        {/* ROI callout */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-md p-5 mb-10">
          <p className="text-gray-800">
            The average funeral service generates <strong>$7,000 to $12,000 in revenue</strong>. Essential at $749/year pays for itself with a single family referral.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link
            href="/featured-listing"
            className="px-8 py-3 bg-slate-700 hover:bg-slate-800 text-white font-semibold rounded-lg text-center transition-colors"
          >
            Get Started — Essential
          </Link>
          <Link
            href="/featured-listing"
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg text-center transition-colors"
          >
            Claim Exclusive Slot
          </Link>
        </div>

        {/* Small print */}
        <p className="text-xs text-gray-500 text-center">
          No long-term contract. Monthly plans cancel anytime. Annual plans have no auto-renewal obligation after year one.
        </p>
      </div>
    </main>
  )
}
