import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { getCityPricing, formatCurrency, formatRange } from '@/lib/server/state-pricing-real';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Direct Cremation Cost in Chicago, Illinois (2026)',
  description: 'Compare direct cremation costs in Chicago, Illinois. Real pricing from local providers. Find the most affordable cremation option near you.',
  keywords: 'direct cremation cost chicago, cremation cost chicago il, affordable cremation chicago, direct cremation chicago',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/direct-cremation-cost-chicago' },
  openGraph: { title: 'Direct Cremation Cost in Chicago, Illinois (2026)', url: 'https://funeralhomedirectories.com/blog/direct-cremation-cost-chicago', type: 'article' },
};

export default async function Page() {
  const pricing = await getCityPricing('Chicago', 'IL');
  const cremRange = pricing ? formatRange(pricing.cremationLow, pricing.cremationHigh) : '$1,500 to $3,500';
  const listingCount = pricing?.listingCount || 0;
  const dataNote = pricing?.dataSource === 'city_supabase'
    ? `Based on real pricing from ${listingCount} funeral homes in Chicago listed on Evermore Directory.`
    : `Based on state-level Illinois averages where city-specific pricing was not available.`;
  const cremMemRange = pricing ? formatRange(Math.round(pricing.cremationHigh * 1.5), Math.round(pricing.cremationHigh * 2.2)) : '$4,500 to $7,500';

  const faqs = [
    { q: 'How much does direct cremation cost in Chicago?', a: `Direct cremation in Chicago ranges from ${cremRange}. ${dataNote} The national average for direct cremation is $1,500 to $3,500.` },
    { q: 'What is the cheapest cremation option in Chicago?', a: `Direct cremation is the most affordable cremation option in Chicago, starting around ${pricing ? formatCurrency(pricing.cremationLow) : '$1,500'}. It includes transportation, cremation, and return of remains without a formal service.` },
    { q: 'What is included in direct cremation in Chicago?', a: 'Direct cremation in Chicago typically includes transportation of the deceased, a basic cremation container, the cremation process, required permits, and return of cremated remains. It does not include embalming, a viewing, a casket, or a ceremony.' },
    { q: 'How do I find affordable cremation in Chicago?', a: 'Compare direct cremation providers in Chicago on Evermore Directory. Request the General Price List from at least three providers. Under the FTC Funeral Rule, every provider must give you one on request. Online cremation providers often have lower prices than traditional funeral homes.' },
    { q: 'Can I have a memorial after direct cremation in Chicago?', a: 'Yes. Many families in Chicago choose direct cremation and then hold a separate celebration of life or memorial service weeks or months later. This gives time to plan a meaningful gathering without the pressure of immediate arrangements.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Direct Cremation Cost in Chicago, Illinois (2026)","author":{"@type":"Person","name":"Terry Feely","url":"https://funeralhomedirectories.com/about"},"publisher":{"@type":"Organization","name":"Evermore Directory","url":"https://funeralhomedirectories.com"},"datePublished":"2026-05-12","dateModified":"2026-05-12","url":"https://funeralhomedirectories.com/blog/direct-cremation-cost-chicago"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://funeralhomedirectories.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://funeralhomedirectories.com/blog"},{"@type":"ListItem","position":3,"name":"Direct Cremation Cost in Chicago, Illinois"}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Direct Cremation Cost in Chicago, Illinois (2026)</h1>
              <p className="text-sm text-gray-500 mb-3">By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026</p>
              <p className="text-xl text-gray-600">Real direct cremation pricing for Chicago, Illinois.</p>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Direct cremation in Chicago, Illinois costs between {cremRange}, based on {pricing?.dataSource === 'city_supabase' ? `real pricing from ${listingCount} funeral homes in Chicago` : `state-level Illinois averages`} listed on Evermore Directory. The national average for direct cremation is $1,500 to $3,500.
              </p>
              <p className="text-gray-600 mb-4">
                Direct cremation is the most affordable cremation option because it eliminates the costs of embalming, a casket, a viewing, and a formal ceremony. The provider handles transportation, the cremation process, permits, and return of ashes. Many Chicago families choose direct cremation and then plan a memorial or celebration of life on their own schedule.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Direct Cremation Pricing in Chicago (2026)</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse">
                  <thead><tr className="bg-gray-50 border-b border-gray-200"><th className="text-left px-4 py-3 font-semibold text-gray-700">Service Type</th><th className="text-left px-4 py-3 font-semibold text-gray-700">{pricing?.dataSource === 'city_supabase' ? 'Chicago' : 'Illinois State'} Average</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Direct Cremation</td><td className="px-4 py-3 text-gray-700 font-mono">{cremRange}</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Cremation with Memorial Service</td><td className="px-4 py-3 text-gray-700 font-mono">{cremMemRange}</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic">{dataNote} Always request a General Price List from each provider.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Direct Cremation Costs Vary in Chicago</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Direct cremation costs in Chicago depend on several factors. The primary driver is provider overhead: facility costs, staff wages, and regulatory compliance. Urban markets like Chicago tend to have higher facility costs than rural areas. National chains typically price at or above the local average, while independent providers and online cremation specialists often offer more competitive pricing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Transportation distance also affects cost. If the crematory is far from the pickup location, mileage fees may be added. Some providers include transportation within a certain radius (typically 25 to 50 miles) while others charge per mile beyond a base distance. The number of death certificates requested can also affect the total, as most states charge $5 to $25 per certified copy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Competition among providers is the biggest factor working in your favor. Chicago has multiple cremation providers, which gives families options. Requesting the General Price List from at least three providers before making a decision is the single most effective way to ensure you are getting a fair price. Under the FTC Funeral Rule, every provider must give you this document on request.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Direct Cremation Includes in Chicago</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A standard direct cremation package in Chicago includes transportation of the deceased from the place of death (hospital, home, or care facility) to the crematory, a basic cremation container (cardboard or pressed wood, not a casket), the cremation process itself, filing of the death certificate and cremation permit, and return of the cremated remains in a temporary container.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Direct cremation does not include embalming, a viewing or visitation, a funeral ceremony, a casket, flowers, or printed programs. Most providers include 1 to 2 certified death certificates in the package price, though additional copies are available for a per-copy fee. A decorative urn is not included; the ashes are returned in a basic plastic or cardboard container.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Find Affordable Direct Cremation in Chicago</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">1.</span><span>Compare at least 3 providers. Use the <Link href="/direct-cremation/il/chicago" className="text-slate-600 hover:text-slate-800 font-medium">Evermore Directory</Link> to see all direct cremation providers in Chicago.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">2.</span><span>Request the General Price List from each provider. Every funeral home must give you one under federal law.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">3.</span><span>Ask what is included in the quoted price. Some providers bundle everything. Others charge separately for transportation, permits, and death certificates.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">4.</span><span>Consider online cremation providers. Companies like Tulip Cremation and Smart Cremation coordinate with local crematories but operate with lower overhead.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">5.</span><span>Ask about cremation society membership. Organizations like the Neptune Society offer pre-paid plans that can lock in lower prices.</span></li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/direct-cremation/il/chicago" className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-lg transition-colors text-center">Browse Cremation Providers in Chicago</Link>
                <Link href="/funeral-costs/illinois" className="inline-block border border-slate-300 text-slate-700 font-bold px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors text-center">Illinois State Cost Overview</Link>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Compare All Funeral Costs in Chicago</h2>
              <p className="text-gray-600 mb-4">For a broader comparison including traditional burial and full funeral costs in Chicago, see our complete cost guide:</p>
              <Link href="/blog/funeral-home-costs-chicago" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Home Costs in Chicago, Illinois (2026)</Link>
            </section>
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Direct Cremation?</h3><p className="text-sm text-gray-600">Complete guide to the direct cremation process.</p></Link>
                <Link href="/blog/direct-cremation-cost-by-state" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Cost by State</h3><p className="text-sm text-gray-600">Compare cremation costs across all 50 states.</p></Link>
                <Link href="/blog/how-to-choose-direct-cremation-provider" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">How to Choose a Cremation Provider</h3><p className="text-sm text-gray-600">7 point checklist for finding a trustworthy provider.</p></Link>
                <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation by State</h3><p className="text-sm text-gray-600">Browse providers and pricing in your state.</p></Link>
              </div>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find cremation providers in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 5,100+ funeral homes and cremation providers across all 50 states. No popups. No pressure. Built for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
