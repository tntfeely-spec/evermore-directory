import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Direct Cremation vs Traditional Funeral: How to Choose | Evermore Directory',
  description: 'Compare direct cremation and traditional funeral options. Learn costs, timelines, and how to decide which is right for your family.',
};

export default function DirectCremationVsTraditionalFuneral() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Direct Cremation vs Traditional Funeral: How to Choose the Right Option for Your Family
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            When a loved one passes, one of the first decisions families face is choosing between direct cremation and a traditional funeral. Both options honor the deceased, but they differ significantly in cost, timeline, and ceremony. This guide breaks down everything you need to know to make the right choice for your family.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Direct Cremation?</h2>
            <p className="text-gray-600 mb-4">
              Direct cremation is the simplest and most affordable option. The body is cremated shortly after death, without embalming, viewing, or a formal funeral service beforehand.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">What&apos;s included:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Transportation of the deceased</li>
                <li>Basic cremation container</li>
                <li>Cremation process</li>
                <li>Return of ashes to family</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">What&apos;s NOT included:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Embalming</li>
                <li>Viewing or visitation</li>
                <li>Funeral ceremony</li>
                <li>Casket</li>
              </ul>
            </div>
            <p className="text-lg font-semibold text-green-700">Typical cost: $1,000 – $3,000</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is a Traditional Funeral?</h2>
            <p className="text-gray-600 mb-4">
              A traditional funeral is a full-service option that typically includes embalming, a viewing or visitation period, a formal funeral ceremony, and burial or cremation.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">What&apos;s included:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Transportation of the deceased</li>
                <li>Embalming and preparation</li>
                <li>Use of funeral home facilities</li>
                <li>Viewing/visitation</li>
                <li>Funeral ceremony</li>
                <li>Hearse and procession</li>
                <li>Burial or cremation</li>
              </ul>
            </div>
            <p className="text-lg font-semibold text-green-700">Typical cost: $7,000 – $15,000+</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Direct Cremation</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Traditional Funeral</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Cost</td>
                    <td className="border border-gray-300 px-4 py-2">$1,000 – $3,000</td>
                    <td className="border border-gray-300 px-4 py-2">$7,000 – $15,000+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Timeline</td>
                    <td className="border border-gray-300 px-4 py-2">24-72 hours</td>
                    <td className="border border-gray-300 px-4 py-2">5-7 days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Viewing</td>
                    <td className="border border-gray-300 px-4 py-2">No</td>
                    <td className="border border-gray-300 px-4 py-2">Yes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Embalming</td>
                    <td className="border border-gray-300 px-4 py-2">No</td>
                    <td className="border border-gray-300 px-4 py-2">Yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Ceremony</td>
                    <td className="border border-gray-300 px-4 py-2">Optional (later)</td>
                    <td className="border border-gray-300 px-4 py-2">Included</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Flexibility</td>
                    <td className="border border-gray-300 px-4 py-2">High</td>
                    <td className="border border-gray-300 px-4 py-2">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">When to Choose Direct Cremation</h2>
            <p className="text-gray-600 mb-4">Direct cremation may be the right choice if:</p>
            <ul className="space-y-3 text-gray-600">
              <li><strong>Budget is a concern.</strong> At $1,000-$3,000, direct cremation costs a fraction of a traditional funeral.</li>
              <li><strong>The deceased requested simplicity.</strong> Many people express wishes for a simple, no-fuss arrangement.</li>
              <li><strong>Family is geographically scattered.</strong> Direct cremation allows time to plan a memorial when everyone can attend.</li>
              <li><strong>You prefer a personalized memorial.</strong> Hold your own celebration of life at a meaningful location.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">When to Choose a Traditional Funeral</h2>
            <p className="text-gray-600 mb-4">A traditional funeral may be the right choice if:</p>
            <ul className="space-y-3 text-gray-600">
              <li><strong>Viewing is important to the family.</strong> Seeing the deceased one final time helps many people find closure.</li>
              <li><strong>Religious or cultural traditions require it.</strong> Many faiths have specific funeral rites.</li>
              <li><strong>The community wants to pay respects.</strong> A traditional funeral allows friends and neighbors to gather.</li>
              <li><strong>The family wants full support.</strong> Funeral directors handle all logistics during a difficult time.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions to Ask Yourself</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>What did the deceased want?</li>
              <li>What can we realistically afford?</li>
              <li>How important is a viewing?</li>
              <li>Do we want to handle the memorial ourselves?</li>
              <li>What would bring our family the most comfort?</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find the Right Funeral Home</h2>
            <p className="text-gray-600 mb-4">
              Use the Evermore Directory to compare funeral homes and cremation services in your area:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/funeral-homes/tn/nashville" className="text-blue-600 hover:underline">Nashville, TN</Link>
              <Link href="/funeral-homes/tx/dallas" className="text-blue-600 hover:underline">Dallas, TX</Link>
              <Link href="/funeral-homes/il/chicago" className="text-blue-600 hover:underline">Chicago, IL</Link>
              <Link href="/funeral-homes/fl/tampa" className="text-blue-600 hover:underline">Tampa, FL</Link>
            </div>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Bottom Line</h2>
            <p className="text-gray-600 mb-4">
              Direct cremation and traditional funerals both honor the deceased—they simply do so in different ways. The best decision is the one that aligns with your loved one&apos;s wishes, your family&apos;s needs, and your budget.
            </p>
            <p className="text-gray-600">
              For more guidance, visit our <Link href="/resources" className="text-blue-600 hover:underline">Funeral Planning Resources</Link> page.
            </p>
          </section>

          {/* Related Articles */}
          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/cremation-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-blue-600 mb-1">How Much Does Cremation Cost in 2026?</h3>
                <p className="text-sm text-gray-600">State-by-state cremation price guide with average costs and money-saving tips.</p>
              </Link>
              <Link href="/blog/cremation-near-me" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-blue-600 mb-1">How to Find Affordable Cremation Near You</h3>
                <p className="text-sm text-gray-600">Compare cremation services, understand pricing, and choose the right provider.</p>
              </Link>
              <Link href="/blog/cremation-cost-san-jose" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-blue-600 mb-1">Cremation Cost in San Jose: 2026 Price Guide</h3>
                <p className="text-sm text-gray-600">Compare actual cremation prices from San Jose funeral homes.</p>
              </Link>
              <Link href="/blog/funeral-homes-los-angeles" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-blue-600 mb-1">Funeral Homes in Los Angeles: Prices &amp; Services</h3>
                <p className="text-sm text-gray-600">Compare funeral home prices in LA with tips for choosing the right provider.</p>
              </Link>
            </div>
          </section>


          {/* Browse by State CTA */}
          <section className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Find Funeral Homes Near You</h2>
            <p className="text-gray-600 mb-4">Compare funeral homes and cremation services across all 50 states.</p>
            <Link href="/states" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Browse by State
            </Link>
          </section>
          <p className="text-sm text-gray-400 mt-8">Last updated: January 2026</p>
        </article>
      </div>
    </main>
  );
}
