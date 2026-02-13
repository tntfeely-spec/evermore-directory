import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Cremation Cost in 2026? State-by-State Price Guide | Evermore Directory',
  description: 'Cremation costs in 2026 range from $500 to $7,000+ depending on location and services. See average cremation prices by state and learn how to save money.',
  keywords: 'cremation cost, how much does cremation cost, cremation prices 2026, average cremation cost, direct cremation cost, cremation cost by state',
};

export default function CremationCosts2026Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article>
          <header className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How Much Does Cremation Cost in 2026? Complete Price Guide
            </h1>
            <p className="text-xl text-gray-600">
              Average cremation costs by state, what&apos;s included, and how to find affordable cremation services near you.
            </p>
          </header>

          <section className="mb-10">
            <p className="text-gray-600 mb-4">
              Cremation has become the most popular choice for end-of-life arrangements in the United States, with over 60% of Americans now choosing cremation over traditional burial. One of the biggest reasons? Cost. Cremation is significantly less expensive than burial—but prices vary widely depending on where you live and what services you choose.
            </p>
            <p className="text-gray-600">
              This guide breaks down what cremation actually costs in 2026, why prices vary so much, and how to find affordable options in your area.
            </p>
          </section>

          <section className="mb-10 bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Answer: Cremation Costs in 2026</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Direct Cremation (No Services)</p>
                <p className="text-3xl font-bold text-green-600">$500 - $3,500</p>
                <p className="text-sm text-gray-500">National average: ~$1,500</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Cremation with Services</p>
                <p className="text-3xl font-bold text-blue-600">$2,000 - $7,000+</p>
                <p className="text-sm text-gray-500">National average: ~$4,000</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              For comparison, the average traditional burial with funeral service costs $7,000 - $15,000+ (not including cemetery plot).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cremation Costs by State (2026)</h2>
            <p className="text-gray-600 mb-4">
              Cremation prices vary significantly by location. Here are average direct cremation costs in major states, based on data from the Evermore Directory:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">State</th>
                    <th className="border p-3 text-left">Direct Cremation</th>
                    <th className="border p-3 text-left">Cremation + Service</th>
                    <th className="border p-3 text-left">Directory</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">California</td>
                    <td className="border p-3">$995 - $3,500</td>
                    <td className="border p-3">$2,500 - $7,000</td>
                    <td className="border p-3"><Link href="/funeral-homes/ca" className="text-blue-600 hover:underline">View CA</Link></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Texas</td>
                    <td className="border p-3">$795 - $2,800</td>
                    <td className="border p-3">$2,000 - $5,500</td>
                    <td className="border p-3"><Link href="/funeral-homes/tx" className="text-blue-600 hover:underline">View TX</Link></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Florida</td>
                    <td className="border p-3">$595 - $2,500</td>
                    <td className="border p-3">$1,800 - $5,000</td>
                    <td className="border p-3"><Link href="/funeral-homes/fl" className="text-blue-600 hover:underline">View FL</Link></td>
                  </tr>
                  <tr>
                    <td className="border p-3">New York</td>
                    <td className="border p-3">$1,200 - $4,000</td>
                    <td className="border p-3">$3,000 - $8,000</td>
                    <td className="border p-3"><Link href="/funeral-homes/ny" className="text-blue-600 hover:underline">View NY</Link></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Illinois</td>
                    <td className="border p-3">$895 - $3,000</td>
                    <td className="border p-3">$2,200 - $6,000</td>
                    <td className="border p-3"><Link href="/funeral-homes/il" className="text-blue-600 hover:underline">View IL</Link></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Tennessee</td>
                    <td className="border p-3">$695 - $2,400</td>
                    <td className="border p-3">$1,800 - $5,000</td>
                    <td className="border p-3"><Link href="/funeral-homes/tn" className="text-blue-600 hover:underline">View TN</Link></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Georgia</td>
                    <td className="border p-3">$695 - $2,600</td>
                    <td className="border p-3">$2,000 - $5,500</td>
                    <td className="border p-3"><Link href="/funeral-homes/ga" className="text-blue-600 hover:underline">View GA</Link></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Arizona</td>
                    <td className="border p-3">$595 - $2,200</td>
                    <td className="border p-3">$1,800 - $4,500</td>
                    <td className="border p-3"><Link href="/funeral-homes/az" className="text-blue-600 hover:underline">View AZ</Link></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Pennsylvania</td>
                    <td className="border p-3">$995 - $3,200</td>
                    <td className="border p-3">$2,500 - $6,500</td>
                    <td className="border p-3"><Link href="/funeral-homes/pa" className="text-blue-600 hover:underline">View PA</Link></td>
                  </tr>
                  <tr>
                    <td className="border p-3">Ohio</td>
                    <td className="border p-3">$795 - $2,800</td>
                    <td className="border p-3">$2,000 - $5,500</td>
                    <td className="border p-3"><Link href="/funeral-homes/oh" className="text-blue-600 hover:underline">View OH</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <Link href="/states" className="text-blue-600 hover:underline font-semibold">
                View all 50 states →
              </Link>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Cremation Services & Costs</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Direct Cremation: $500 - $3,500</h3>
                <p className="text-gray-600 mb-3">
                  The most affordable option. The body is cremated shortly after death with no viewing, visitation, or funeral service. This is the &quot;base&quot; cremation cost.
                </p>
                <p className="text-sm text-gray-500"><strong>Includes:</strong> Transportation, basic services, refrigeration, cremation process, temporary container for ashes</p>
                <p className="text-sm text-gray-500"><strong>Does NOT include:</strong> Viewing, embalming, funeral service, urn, death certificates</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cremation with Memorial Service: $2,000 - $5,000</h3>
                <p className="text-gray-600 mb-3">
                  Cremation takes place first, then a memorial service is held with the urn present. No embalming required since there&apos;s no viewing of the body.
                </p>
                <p className="text-sm text-gray-500"><strong>Includes:</strong> Direct cremation + use of funeral home for service, staff assistance</p>
                <p className="text-sm text-gray-500"><strong>Optional add-ons:</strong> Flowers, programs, reception, upgraded urn</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cremation with Viewing: $4,000 - $7,000+</h3>
                <p className="text-gray-600 mb-3">
                  Includes embalming and a traditional viewing or visitation before cremation. Essentially a traditional funeral but with cremation instead of burial.
                </p>
                <p className="text-sm text-gray-500"><strong>Includes:</strong> Embalming, preparation, viewing, service, cremation</p>
                <p className="text-sm text-gray-500"><strong>Note:</strong> Requires rental casket or purchased casket for viewing</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Cremation Prices Vary So Much</h2>
            <p className="text-gray-600 mb-4">
              You might see direct cremation advertised for $595 in one city and $2,500 in another. Here&apos;s why prices vary:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">Location, Location, Location</h3>
                <p className="text-gray-600">
                  Cremation costs more in high cost-of-living areas. New York City prices are typically 50-100% higher than rural areas. Florida and Arizona tend to have lower prices due to competition and high cremation rates.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">Competition</h3>
                <p className="text-gray-600">
                  Areas with more cremation providers tend to have lower prices. This is why comparing multiple funeral homes is so important—prices can vary by $1,000+ within the same city.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">On-Site vs. Outsourced Cremation</h3>
                <p className="text-gray-600">
                  Funeral homes with their own crematory can often offer lower prices than those that outsource cremation to a third party.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">Corporate vs. Independent</h3>
                <p className="text-gray-600">
                  Large corporate funeral home chains (like SCI/Dignity Memorial) often charge more than independent, family-owned providers. The service level may be similar, but pricing can differ significantly.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">What&apos;s Actually Included</h3>
                <p className="text-gray-600">
                  A &quot;$595 cremation&quot; might not include transportation, death certificates, or the container for ashes. Always ask for an itemized price list that shows the total out-the-door cost.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Cremation Costs to Budget For</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Item</th>
                    <th className="border p-3 text-left">Typical Cost</th>
                    <th className="border p-3 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Death Certificates</td>
                    <td className="border p-3">$10 - $50 each</td>
                    <td className="border p-3">Most families need 5-10 copies</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Urn</td>
                    <td className="border p-3">$50 - $500+</td>
                    <td className="border p-3">Buy your own online to save money</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Obituary</td>
                    <td className="border p-3">$100 - $500+</td>
                    <td className="border p-3">Newspaper obituaries can be expensive</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Flowers</td>
                    <td className="border p-3">$100 - $500</td>
                    <td className="border p-3">Optional for memorial service</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Memorial Service (venue)</td>
                    <td className="border p-3">$0 - $2,000</td>
                    <td className="border p-3">Free if held at home, church, or park</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Scattering at Sea</td>
                    <td className="border p-3">$300 - $1,500</td>
                    <td className="border p-3">If using a charter service</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Columbarium Niche</td>
                    <td className="border p-3">$500 - $5,000</td>
                    <td className="border p-3">For permanent placement of urn</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Find Affordable Cremation</h2>
            <p className="text-gray-600 mb-4">
              Here are proven ways to reduce cremation costs without sacrificing dignity:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Compare at least 3 funeral homes</strong> — Use the Evermore Directory to see prices before calling</li>
              <li><strong>Choose direct cremation</strong> — Hold a memorial service separately (at home, church, or park) to save thousands</li>
              <li><strong>Consider cremation societies</strong> — Non-profit organizations often offer the lowest prices</li>
              <li><strong>Buy your own urn</strong> — Online retailers sell urns for $30-$100 vs. $300+ at funeral homes</li>
              <li><strong>Ask about package pricing</strong> — Bundled services may cost less than itemized</li>
              <li><strong>Check for veteran benefits</strong> — VA provides burial allowance and free cremation/burial at national cemeteries</li>
              <li><strong>Look into state assistance</strong> — Some states offer help for low-income families</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compare Cremation Prices in Your City</h2>
            <p className="text-gray-600 mb-4">
              The Evermore Directory shows actual cremation and burial price ranges for funeral homes across all 50 states. Find providers in your area:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/funeral-homes/ca/los-angeles" className="text-blue-600 hover:underline">Los Angeles</Link>
              <Link href="/funeral-homes/ny/new-york" className="text-blue-600 hover:underline">New York City</Link>
              <Link href="/funeral-homes/il/chicago" className="text-blue-600 hover:underline">Chicago</Link>
              <Link href="/funeral-homes/tx/houston" className="text-blue-600 hover:underline">Houston</Link>
              <Link href="/funeral-homes/az/phoenix" className="text-blue-600 hover:underline">Phoenix</Link>
              <Link href="/funeral-homes/fl/miami" className="text-blue-600 hover:underline">Miami</Link>
              <Link href="/funeral-homes/tx/dallas" className="text-blue-600 hover:underline">Dallas</Link>
              <Link href="/funeral-homes/ga/atlanta" className="text-blue-600 hover:underline">Atlanta</Link>
              <Link href="/funeral-homes/ca/san-diego" className="text-blue-600 hover:underline">San Diego</Link>
              <Link href="/funeral-homes/ca/san-jose" className="text-blue-600 hover:underline">San Jose</Link>
              <Link href="/funeral-homes/tn/nashville" className="text-blue-600 hover:underline">Nashville</Link>
              <Link href="/funeral-homes/fl/tampa" className="text-blue-600 hover:underline">Tampa</Link>
            </div>
            <p className="mt-4">
              <Link href="/states" className="text-blue-600 hover:underline font-semibold">
                Browse all 50 states →
              </Link>
            </p>
          </section>

          <section className="bg-blue-50 rounded-lg p-6 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Planning Ahead?</h2>
            <p className="text-gray-600 mb-4">
              Pre-planning cremation can lock in today&apos;s prices and spare your family from making difficult decisions during grief. It also ensures your wishes are documented and followed.
            </p>
            <p className="text-gray-600">
              Download our free <strong>My Final Wishes Workbook</strong> to document your preferences for cremation, memorial services, and more.
            </p>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Bottom Line</h2>
            <p className="text-gray-600 mb-4">
              Cremation in 2026 costs anywhere from $500 to $7,000+ depending on your location and the services you choose. Direct cremation is the most affordable option, while cremation with a full funeral service approaches traditional burial costs.
            </p>
            <p className="text-gray-600 mb-4">
              The single biggest way to save money is to <strong>compare prices from multiple funeral homes</strong>. Costs can vary by $1,000 or more for the exact same service within the same city.
            </p>
            <p className="text-gray-600">
              Use the Evermore Directory to see actual cremation prices from funeral homes in your area—before you make a single phone call.
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-8">Last updated: February 2026</p>
        </article>
      </div>
    </main>
  );
}
