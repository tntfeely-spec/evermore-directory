import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { getCityPricing, formatCurrency, formatRange } from '@/lib/server/state-pricing-real';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Funeral Home Costs in Jacksonville, Florida (2026)',
  description: 'Compare funeral home costs in Jacksonville, Florida. Real cremation and burial price ranges from local providers. Updated 2026.',
  keywords: 'funeral home costs jacksonville, funeral costs jacksonville fl, cremation cost jacksonville, burial cost jacksonville',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/funeral-home-costs-jacksonville' },
  openGraph: { title: 'Funeral Home Costs in Jacksonville, Florida (2026)', url: 'https://funeralhomedirectories.com/blog/funeral-home-costs-jacksonville', type: 'article' },
};

export default async function Page() {
  const pricing = await getCityPricing('Jacksonville', 'FL');
  const cremRange = pricing ? formatRange(pricing.cremationLow, pricing.cremationHigh) : '$1,500 to $3,500';
  const burialRange = pricing ? formatRange(pricing.burialLow, pricing.burialHigh) : '$7,000 to $12,000';
  const listingCount = pricing?.listingCount || 0;
  const dataNote = pricing?.dataSource === 'city_supabase'
    ? `Based on real pricing from ${listingCount} funeral homes in Jacksonville listed on Evermore Directory.`
    : `Based on state-level Florida averages where city-specific pricing was not available.`;
  const cremMemRange = pricing ? formatRange(Math.round(pricing.cremationHigh * 1.5), Math.round(pricing.cremationHigh * 2.2)) : '$5,000 to $7,500';
  const fullRange = pricing ? formatRange(Math.round(pricing.burialHigh * 1.1), Math.round(pricing.burialHigh * 1.4)) : '$9,000 to $15,000';

  const faqs = [
    { q: 'How much does a funeral cost in Jacksonville?', a: `In Jacksonville, direct cremation ranges from ${cremRange} and traditional burial costs ${burialRange}. ${dataNote}` },
    { q: 'What is the cheapest funeral option in Jacksonville?', a: `Direct cremation is the most affordable option in Jacksonville, starting around ${pricing ? formatCurrency(pricing.cremationLow) : '$1,500'}. It includes transportation, cremation, and return of remains without a formal service.` },
    { q: 'How do I compare funeral prices in Jacksonville?', a: 'Browse the Evermore Directory to see all funeral homes in Jacksonville with contact information and services. Request a General Price List from each provider you are considering. Under the FTC Funeral Rule, every funeral home must provide one on request.' },
    { q: 'What payment options do Jacksonville funeral homes offer?', a: 'Many funeral homes in Jacksonville accept credit cards, offer payment plans, and work with insurance assignments. Some providers also accept VA burial benefits and Medicaid. Ask each provider about their specific payment options when requesting the General Price List.' },
    { q: 'What are my rights under the FTC Funeral Rule?', a: 'The FTC Funeral Rule requires every funeral home to provide an itemized General Price List, allow you to choose only the services you want, and not require a casket for cremation. These rights apply in every state including Florida.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Funeral Home Costs in Jacksonville, Florida (2026)","author":{"@type":"Person","name":"Terry Feely","url":"https://funeralhomedirectories.com/about"},"publisher":{"@type":"Organization","name":"Evermore Directory","url":"https://funeralhomedirectories.com"},"datePublished":"2026-05-12","dateModified":"2026-05-12","url":"https://funeralhomedirectories.com/blog/funeral-home-costs-jacksonville"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://funeralhomedirectories.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://funeralhomedirectories.com/blog"},{"@type":"ListItem","position":3,"name":"Funeral Home Costs in Jacksonville, Florida"}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(f => ({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Home Costs in Jacksonville, Florida (2026)</h1>
              <p className="text-sm text-gray-500 mb-3">By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026</p>
              <p className="text-xl text-gray-600">Real funeral and cremation cost ranges for Jacksonville, Florida.</p>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Funeral home costs in Jacksonville, Florida range from {cremRange} for direct cremation and from {burialRange} for a traditional funeral with burial. {dataNote}
              </p>
              <p className="text-gray-600 mb-4">
                As a former firefighter and paramedic, I saw families in Jacksonville face these costs during the worst moments of their lives. The price ranges below are here so you can plan with real numbers, not guesses.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Average Funeral Costs in Jacksonville (2026)</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse">
                  <thead><tr className="bg-gray-50 border-b border-gray-200"><th className="text-left px-4 py-3 font-semibold text-gray-700">Service Type</th><th className="text-left px-4 py-3 font-semibold text-gray-700">Jacksonville Average</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Direct Cremation</td><td className="px-4 py-3 text-gray-700 font-mono">{cremRange}</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Cremation with Memorial Service</td><td className="px-4 py-3 text-gray-700 font-mono">{cremMemRange}</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Traditional Burial</td><td className="px-4 py-3 text-gray-700 font-mono">{burialRange}</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Full Funeral with Viewing</td><td className="px-4 py-3 text-gray-700 font-mono">{fullRange}</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic">{dataNote} Always request a General Price List from each funeral home for exact pricing.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Funeral Costs Vary in Jacksonville</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Funeral costs in Jacksonville are influenced by several factors. Urban markets like Jacksonville tend to have higher facility costs, which are passed on to families. The mix of providers matters too. National chains like SCI (Dignity Memorial) and StoneMor typically price at or above the market average, while independent family owned funeral homes and direct cremation specialists often offer more competitive pricing. Cost of living in the Jacksonville metro area directly affects staff wages and real estate costs for funeral home facilities. Competition also plays a role. Cities with more providers tend to have more price variation, which benefits families who compare options.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The best way to control costs is to request the General Price List from at least three providers in Jacksonville before making a decision. Under federal law, every funeral home must give you this list on request.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/funeral-homes/fl/jacksonville" className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-lg transition-colors text-center">Browse Funeral Homes in Jacksonville</Link>
                <Link href="/funeral-costs/florida" className="inline-block border border-slate-300 text-slate-700 font-bold px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors text-center">Florida State Cost Overview</Link>
              </div>
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
                <Link href="/blog/funeral-cost-calculator" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Cost Calculator</h3><p className="text-sm text-gray-600">Estimate costs by state with real pricing data.</p></Link>
                <Link href="/blog/funeral-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs in 2026</h3><p className="text-sm text-gray-600">National cost overview and money saving tips.</p></Link>
                <Link href="/blog/how-to-read-a-funeral-home-general-price-list" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">How to Read a General Price List</h3><p className="text-sm text-gray-600">Understand the document every funeral home must give you.</p></Link>
                <Link href="/blog/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Direct Cremation?</h3><p className="text-sm text-gray-600">The most affordable cremation option explained.</p></Link>
              </div>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 7,395+ funeral homes and cremation providers across all 50 states. No popups. No pressure. Built for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
