import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Funeral Homes in Los Angeles: Prices, Services & How to Choose | Evermore Directory',
  description: 'Compare funeral home prices in Los Angeles. See actual cremation and burial costs from LA funeral homes, plus tips for choosing the right provider for your family.',
  keywords: 'funeral homes los angeles, los angeles funeral homes, cremation los angeles, funeral services LA, los angeles cremation cost',
};

export default function FuneralHomesLosAngelesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article>
          <header className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Funeral Homes in Los Angeles: Prices, Services & How to Choose
            </h1>
            <p className="text-xl text-gray-600">
              Compare actual funeral home prices in Los Angeles and find the right provider for your family&apos;s needs and budget.
            </p>
          </header>

          <section className="mb-10">
            <p className="text-gray-600 mb-4">
              Los Angeles has over 300 funeral homes serving one of the most diverse populations in the country. With so many options, finding the right funeral home—at a fair price—can feel overwhelming, especially during an already difficult time.
            </p>
            <p className="text-gray-600">
              This guide breaks down what funeral services actually cost in Los Angeles, what to look for in a provider, and how to avoid overpaying.
            </p>
          </section>

          <section className="mb-10 bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Do Funeral Services Cost in Los Angeles?</h2>
            <p className="text-gray-600 mb-4">
              Funeral costs in Los Angeles vary dramatically—sometimes by <strong>200-300%</strong> for the same service. Here&apos;s what you can expect to pay:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Service Type</th>
                    <th className="border p-3 text-left">Los Angeles Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-3">Direct Cremation</td><td className="border p-3">$995 - $3,500</td></tr>
                  <tr><td className="border p-3">Cremation with Memorial Service</td><td className="border p-3">$2,500 - $6,000</td></tr>
                  <tr><td className="border p-3">Traditional Burial</td><td className="border p-3">$7,000 - $15,000+</td></tr>
                  <tr><td className="border p-3">Full Funeral with Viewing</td><td className="border p-3">$8,000 - $20,000+</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Prices based on Los Angeles funeral home data from the Evermore Directory. Cemetery plots, vaults, and headstones are additional costs not included above.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cremation vs. Burial Prices in Los Angeles</h2>
            <p className="text-gray-600 mb-4">
              Cremation has become the most popular choice in Los Angeles, with over 60% of families now choosing cremation over traditional burial. The primary reason? Cost.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Direct Cremation in LA</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">$995 - $3,500</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• No viewing or service required</li>
                  <li>• Body cremated within 24-48 hours</li>
                  <li>• Ashes returned in basic container</li>
                  <li>• Memorial can be held separately</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Traditional Burial in LA</h3>
                <p className="text-3xl font-bold text-gray-600 mb-2">$7,000 - $15,000+</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Embalming and preparation</li>
                  <li>• Viewing and funeral service</li>
                  <li>• Casket (often $2,000-$10,000 alone)</li>
                  <li>• Cemetery plot additional</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Los Angeles Funeral Homes by Neighborhood</h2>
            <p className="text-gray-600 mb-4">
              Los Angeles is massive, and you&apos;ll likely want a funeral home reasonably close to where family members live or where services will be held. Here are some areas we cover:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-gray-50 p-3 rounded">Downtown LA</div>
              <div className="bg-gray-50 p-3 rounded">Hollywood</div>
              <div className="bg-gray-50 p-3 rounded">East Los Angeles</div>
              <div className="bg-gray-50 p-3 rounded">South Los Angeles</div>
              <div className="bg-gray-50 p-3 rounded">San Fernando Valley</div>
              <div className="bg-gray-50 p-3 rounded">Westside</div>
              <div className="bg-gray-50 p-3 rounded">Boyle Heights</div>
              <div className="bg-gray-50 p-3 rounded">Koreatown</div>
              <div className="bg-gray-50 p-3 rounded">Inglewood</div>
            </div>
            <p className="mt-4">
              <Link href="/funeral-homes/ca/los-angeles" className="text-blue-600 hover:underline font-semibold">
                View all Los Angeles funeral homes with prices →
              </Link>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Look for in a Los Angeles Funeral Home</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">Transparent Pricing</h3>
                <p className="text-gray-600">
                  By law, funeral homes must provide a General Price List (GPL). If a funeral home is evasive about costs or won&apos;t give you prices over the phone, that&apos;s a red flag. The Evermore Directory shows price ranges upfront so you can compare before calling.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">Cultural & Religious Experience</h3>
                <p className="text-gray-600">
                  LA&apos;s diversity means you may need a funeral home experienced with specific traditions—Catholic, Jewish, Buddhist, Hindu, Muslim, or secular celebrations of life. Ask about their experience with your family&apos;s customs.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">On-Site Crematory</h3>
                <p className="text-gray-600">
                  Some LA funeral homes have their own crematory, which can reduce costs and provide peace of mind that your loved one never leaves their care. Others outsource cremation to third parties.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">Family-Owned vs. Corporate</h3>
                <p className="text-gray-600">
                  Many funeral homes are now owned by large corporations (like Service Corporation International). Family-owned funeral homes often provide more personalized service and competitive pricing, though this isn&apos;t always the case.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions to Ask Los Angeles Funeral Homes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>What is your total cost for direct cremation / traditional burial?</li>
              <li>Are there any additional fees not on your price list?</li>
              <li>Do you have an on-site crematory, or do you use a third party?</li>
              <li>What experience do you have with [our religious/cultural traditions]?</li>
              <li>Can we bring our own casket or urn?</li>
              <li>Do you offer payment plans?</li>
              <li>How long have you been serving Los Angeles families?</li>
              <li>Can we see your facilities before making a decision?</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Save Money on Funeral Services in LA</h2>
            <p className="text-gray-600 mb-4">
              Funeral costs add up quickly, but there are legitimate ways to reduce expenses:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Compare prices from at least 3 funeral homes</strong> — prices vary significantly, even in the same neighborhood</li>
              <li><strong>Consider direct cremation</strong> — you can still hold a meaningful memorial service separately</li>
              <li><strong>Skip the casket for cremation</strong> — a simple container is all that&apos;s required by law</li>
              <li><strong>Provide your own urn</strong> — funeral home urns are often marked up significantly</li>
              <li><strong>Ask about package pricing</strong> — bundled services may cost less than à la carte</li>
              <li><strong>Check for veteran benefits</strong> — eligible veterans may qualify for burial allowances and cemetery benefits</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compare Los Angeles Funeral Homes</h2>
            <p className="text-gray-600 mb-4">
              The Evermore Directory lists funeral homes throughout Los Angeles County with actual price ranges, services offered, and contact information. Compare providers before you call:
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <Link href="/funeral-homes/ca/los-angeles" className="text-blue-600 hover:underline text-xl font-semibold">
                View All Los Angeles Funeral Homes →
              </Link>
              <p className="text-gray-600 mt-2">
                See cremation and burial prices, services, and contact info for funeral homes across LA County.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nearby Cities</h2>
            <p className="text-gray-600 mb-4">
              Looking for funeral homes outside Los Angeles city limits? Browse nearby areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/funeral-homes/ca/long-beach" className="text-blue-600 hover:underline">Long Beach</Link>
              <Link href="/funeral-homes/ca/glendale" className="text-blue-600 hover:underline">Glendale</Link>
              <Link href="/funeral-homes/ca/pasadena" className="text-blue-600 hover:underline">Pasadena</Link>
              <Link href="/funeral-homes/ca/burbank" className="text-blue-600 hover:underline">Burbank</Link>
              <Link href="/funeral-homes/ca/santa-monica" className="text-blue-600 hover:underline">Santa Monica</Link>
              <Link href="/funeral-homes/ca/torrance" className="text-blue-600 hover:underline">Torrance</Link>
              <Link href="/funeral-homes/ca/pomona" className="text-blue-600 hover:underline">Pomona</Link>
              <Link href="/funeral-homes/ca/san-diego" className="text-blue-600 hover:underline">San Diego</Link>
            </div>
          </section>

          <section className="bg-blue-50 rounded-lg p-6 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Planning Ahead in Los Angeles?</h2>
            <p className="text-gray-600 mb-4">
              Pre-planning funeral arrangements can lock in today&apos;s prices and spare your family from making difficult decisions during grief. Many Los Angeles funeral homes offer pre-need arrangements.
            </p>
            <p className="text-gray-600">
              Download our free <strong>My Final Wishes Workbook</strong> to document your preferences and make things easier for your loved ones.
            </p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Bottom Line</h2>
            <p className="text-gray-600 mb-4">
              Los Angeles has hundreds of funeral homes with prices ranging from under $1,000 for direct cremation to $20,000+ for full funeral services. The key is knowing your options and comparing prices before making a decision.
            </p>
            <p className="text-gray-600">
              Use the Evermore Directory to compare funeral home prices across Los Angeles, and don&apos;t hesitate to ask questions. Reputable funeral directors will be transparent about costs and never pressure you into services you don&apos;t need.
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-8">Last updated: February 2026</p>
        </article>
      </div>
    </main>
  );
}
