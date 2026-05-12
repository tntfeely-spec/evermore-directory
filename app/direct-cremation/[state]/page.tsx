import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Navigation from '@/components/Navigation';
import { stateMeta, allStateSlugs } from '@/lib/state-pricing';
import { getAllRealStatePricing, getRealStatePricing, getStateRanking, formatCurrency, formatRange } from '@/lib/server/state-pricing-real';

export const revalidate = 0;

interface PageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return allStateSlugs.map((state) => ({ state }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params;
  const meta = stateMeta[state.toLowerCase()];
  if (!meta) return { title: 'Not Found' };
  const stateName = meta.name;
  return {
    title: `Direct Cremation Costs in ${stateName} (2026)`,
    description: `Compare direct cremation costs in ${stateName}. Real pricing from local providers. Find the most affordable cremation option near you.`,
    alternates: { canonical: `https://funeralhomedirectories.com/direct-cremation/${state.toLowerCase()}` },
  };
}

export default async function DirectCremationStatePage({ params }: PageProps) {
  const { state } = await params;
  const meta = stateMeta[state.toLowerCase()];
  if (!meta) notFound();
  const stateName = meta.name;
  const stateUpper = meta.abbr.toUpperCase();

  // Get real pricing data
  const allPricing = await getAllRealStatePricing();
  const pricing = allPricing.find(r => r.abbr === stateUpper);
  const cremRank = pricing ? getStateRanking(allPricing, stateUpper, 'cremation') : 0;
  const totalStates = allPricing.length;

  // Get direct cremation providers in this state
  const { data: dcHomes } = await supabase
    .from('funeral_homes')
    .select('city')
    .eq('state', stateUpper)
    .eq('provider_type', 'direct_cremation');

  const cityCounts: { [key: string]: number } = {};
  dcHomes?.forEach((h) => { if (h.city) cityCounts[h.city] = (cityCounts[h.city] || 0) + 1; });
  const topCities = Object.entries(cityCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const dcCount = dcHomes?.length || 0;

  // Total listings (all types) for this state
  const { count: totalListings } = await supabase
    .from('funeral_homes')
    .select('*', { count: 'exact', head: true })
    .eq('state', stateUpper);

  const cremRange = pricing ? formatRange(pricing.cremationLow, pricing.cremationHigh) : '$1,500 to $3,500';
  const cremMemRange = pricing ? formatRange(Math.round(pricing.cremationHigh * 1.5), Math.round(pricing.cremationHigh * 2.2)) : '$4,500 to $7,500';

  const faqs = [
    { q: `How much does direct cremation cost in ${stateName}?`, a: `Direct cremation in ${stateName} ranges from ${cremRange}. ${pricing?.dataSource === 'supabase' ? `Based on real pricing from ${pricing.listingCount} funeral homes.` : 'Based on NFDA national medians adjusted for regional cost of living.'}` },
    { q: `What is included in direct cremation in ${stateName}?`, a: `Direct cremation in ${stateName} typically includes transportation of the deceased, a basic cremation container, the cremation process, required permits, and return of cremated remains. No embalming, viewing, or ceremony is included.` },
    { q: `Can I have a memorial service after direct cremation in ${stateName}?`, a: `Yes. Many families in ${stateName} choose direct cremation and then hold a separate celebration of life or memorial service on their own timeline. There is no time limit on when you hold the memorial.` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": `Direct Cremation Costs in ${stateName} (2026)`,
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-12", "dateModified": "2026-05-12",
        "url": `https://funeralhomedirectories.com/direct-cremation/${state.toLowerCase()}`
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Direct Cremation", "item": "https://funeralhomedirectories.com/direct-cremation" },
          { "@type": "ListItem", "position": 3, "name": stateName }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      }) }} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <nav className="mb-6 text-sm">
            <Link href="/direct-cremation" className="text-slate-600 hover:text-slate-800">Direct Cremation</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{stateName}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Direct Cremation Costs in {stateName} (2026)
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          {/* AI-citable opening */}
          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed">
              Direct cremation in {stateName} costs {cremRange}, making it the most affordable funeral option available. The national average for direct cremation is $1,500 to $3,500. {stateName} ranks {cremRank} out of {totalStates} states for direct cremation cost, where 1 is the cheapest. {pricing?.dataSource === 'supabase' ? `These figures are based on real pricing from ${pricing.listingCount} funeral homes in ${stateName} listed on Evermore Directory.` : `These figures are based on NFDA national medians adjusted for ${stateName}'s regional cost of living.`}
            </p>
          </section>

          {/* Pricing table */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Direct Cremation Pricing in {stateName}</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Service</th>
                    <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">{stateName} Average</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="px-6 py-4 font-semibold text-gray-900">Direct Cremation</td>
                    <td className="px-6 py-4 text-slate-700 font-mono">{cremRange}</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-slate-50/40">
                    <td className="px-6 py-4 font-semibold text-gray-900">Cremation with Memorial Service</td>
                    <td className="px-6 py-4 text-slate-700 font-mono">{cremMemRange}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* State ranking */}
          {cremRank > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center mb-10">
              <p className="text-4xl font-bold text-slate-700 mb-1">{cremRank}<span className="text-lg text-gray-400"> / {totalStates}</span></p>
              <p className="text-sm text-gray-600">Direct cremation cost ranking (1 = cheapest)</p>
            </div>
          )}

          {/* Provider count + CTA */}
          <div className="text-center mb-10">
            <p className="text-lg text-gray-700 mb-4">
              {dcCount > 0 ? `${dcCount} direct cremation providers in ${stateName}` : `Browse ${totalListings || 0} funeral homes in ${stateName}`}
            </p>
            <Link
              href={dcCount > 0 ? `/direct-cremation/${state.toLowerCase()}/${topCities[0] ? topCities[0][0].toLowerCase().replace(/\s+/g, '-') : ''}` : `/funeral-homes/${state.toLowerCase()}`}
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Find Cremation Providers in {stateName}
            </Link>
          </div>

          {/* Top cities */}
          {topCities.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Cities for Direct Cremation in {stateName}</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {topCities.map(([city, count]) => (
                  <Link
                    key={city}
                    href={`/direct-cremation/${state.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white rounded-lg border border-gray-200 px-4 py-3 text-center text-gray-700 hover:text-slate-700 hover:border-slate-400 hover:shadow-sm transition-all font-medium"
                  >
                    {city} ({count})
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mb-10 bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Guide</h3>
                <p className="text-sm text-gray-600">Complete guide and national cost comparison.</p>
              </Link>
              <Link href={`/funeral-homes/${state.toLowerCase()}`} className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">All Funeral Homes in {stateName}</h3>
                <p className="text-sm text-gray-600">Browse all providers with contact info and services.</p>
              </Link>
            </div>
          </section>

          <div className="text-center text-sm text-gray-400">
            <p>Written by <strong className="text-gray-500">Terry Feely</strong>, former firefighter and paramedic with firsthand experience helping families navigate end of life decisions.</p>
          </div>
        </div>
      </main>
    </>
  );
}
