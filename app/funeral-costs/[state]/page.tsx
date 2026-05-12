import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import { supabase } from '@/lib/supabase';
import { stateMeta, allStateSlugs } from '@/lib/state-pricing';
import {
  getAllRealStatePricing,
  getRealStatePricing,
  getStateRanking,
  formatCurrency,
  formatRange,
  type RealStatePricing,
} from '@/lib/server/state-pricing-real';

export const revalidate = 0;

interface PageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return allStateSlugs.map((state) => ({ state }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params;
  const meta = stateMeta[state];
  if (!meta) return { title: 'Not Found' };

  const pricing = await getRealStatePricing(state);
  const subtitle = pricing && pricing.listingCount > 0
    ? `Based on real pricing from ${pricing.listingCount} funeral homes in ${meta.name}`
    : `Average funeral and cremation prices across ${meta.name}`;

  return {
    title: `Funeral Costs in ${meta.name} (2026) | Evermore Directory`,
    description: `${subtitle}. Direct cremation from ${pricing ? formatCurrency(pricing.cremationLow) : '$1,500'}. Traditional burial from ${pricing ? formatCurrency(pricing.burialLow) : '$7,000'}.`,
    alternates: { canonical: `https://funeralhomedirectories.com/funeral-costs/${state}` },
  };
}

export default async function StateCostsPage({ params }: PageProps) {
  const { state } = await params;
  const meta = stateMeta[state];
  if (!meta) notFound();

  const allPricing = await getAllRealStatePricing();
  const pricing = allPricing.find(r => r.abbr === meta.abbr.toUpperCase());
  if (!pricing) notFound();

  const cremRank = getStateRanking(allPricing, meta.abbr, 'cremation');
  const burialRank = getStateRanking(allPricing, meta.abbr, 'burial');
  const totalStates = allPricing.length;

  // Total listing count for this state (all listings, not just those with pricing)
  const { count: totalListings } = await supabase
    .from('funeral_homes')
    .select('*', { count: 'exact', head: true })
    .eq('state', meta.abbr.toUpperCase());

  const providerCount = totalListings || pricing.listingCount;

  // Top 5 cities by listing count
  const { data: cityRows } = await supabase
    .from('funeral_homes')
    .select('city')
    .eq('state', meta.abbr.toUpperCase());

  const counts = new Map<string, number>();
  for (const row of cityRows || []) {
    if (!row.city) continue;
    counts.set(row.city, (counts.get(row.city) || 0) + 1);
  }
  const topCities = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([city]) => city);

  const citySlug = (c: string) => c.toLowerCase().replace(/\s+/g, '-');

  // National averages for comparison
  const natCremLow = 1500;
  const natCremHigh = 3500;
  const natBurLow = 7000;
  const natBurHigh = 12000;

  function vsNational(low: number, high: number, natLow: number, natHigh: number): string {
    const midState = (low + high) / 2;
    const midNat = (natLow + natHigh) / 2;
    const pct = Math.round(((midState - midNat) / midNat) * 100);
    if (pct > 5) return `${pct}% above national average`;
    if (pct < -5) return `${Math.abs(pct)}% below national average`;
    return 'Near national average';
  }

  const rows = [
    { label: 'Direct Cremation', range: formatRange(pricing.cremationLow, pricing.cremationHigh), vs: vsNational(pricing.cremationLow, pricing.cremationHigh, natCremLow, natCremHigh) },
    { label: 'Cremation with Memorial Service', range: formatRange(Math.round(pricing.cremationHigh * 1.5), Math.round(pricing.cremationHigh * 2.2)), vs: vsNational(Math.round(pricing.cremationHigh * 1.5), Math.round(pricing.cremationHigh * 2.2), 5800, 7500) },
    { label: 'Traditional Burial', range: formatRange(pricing.burialLow, pricing.burialHigh), vs: vsNational(pricing.burialLow, pricing.burialHigh, natBurLow, natBurHigh) },
    { label: 'Full Funeral with Viewing', range: formatRange(Math.round(pricing.burialHigh * 1.1), Math.round(pricing.burialHigh * 1.4)), vs: vsNational(Math.round(pricing.burialHigh * 1.1), Math.round(pricing.burialHigh * 1.4), 9000, 15000) },
  ];

  const dataNote = pricing.dataSource === 'supabase'
    ? `Based on real pricing from ${pricing.listingCount} funeral homes in ${meta.name} listed on Evermore Directory.`
    : `Based on NFDA national medians adjusted for ${meta.name}'s regional cost of living. Contact providers directly for exact pricing.`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much does a funeral cost in ${meta.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `In ${meta.name}, direct cremation ranges from ${formatRange(pricing.cremationLow, pricing.cremationHigh)} and traditional burial costs ${formatRange(pricing.burialLow, pricing.burialHigh)}. These figures are ${pricing.dataSource === 'supabase' ? `based on real pricing from ${pricing.listingCount} funeral homes` : 'based on NFDA national medians adjusted for regional cost of living'}.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the cheapest funeral option in ${meta.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Direct cremation is the most affordable option in ${meta.name}, starting around ${formatCurrency(pricing.cremationLow)}. It includes transportation, cremation, and return of remains without a formal service.`,
        },
      },
      {
        '@type': 'Question',
        name: `How does ${meta.name} compare to the national average for funeral costs?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${meta.name} ranks ${cremRank} out of ${totalStates} states for direct cremation cost (1 being the cheapest) and ${burialRank} out of ${totalStates} for traditional burial. ${vsNational(pricing.cremationLow, pricing.cremationHigh, natCremLow, natCremHigh) === 'Near national average' ? `${meta.name}'s funeral costs are near the national average.` : `${meta.name}'s funeral costs are ${vsNational(pricing.cremationLow, pricing.cremationHigh, natCremLow, natCremHigh).toLowerCase()}.`}`,
        },
      },
      {
        '@type': 'Question',
        name: `Why do funeral costs vary so much in ${meta.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Funeral costs in ${meta.name} vary based on the type of service (cremation vs burial), the provider's location (urban vs rural), facility costs, and which optional services are selected. Always request a General Price List from each funeral home to compare itemized costs.`,
        },
      },
      {
        '@type': 'Question',
        name: `Are funeral homes in ${meta.name} required to provide price lists?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Under the FTC Funeral Rule, every funeral home must provide an itemized General Price List to anyone who asks, in person or by phone, free of charge.',
        },
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Average Funeral Costs in ${meta.name} (2026)`,
    author: { '@type': 'Person', name: 'Terry Feely', url: 'https://funeralhomedirectories.com/about' },
    publisher: { '@type': 'Organization', name: 'Evermore Directory', url: 'https://funeralhomedirectories.com' },
    datePublished: '2026-05-12',
    dateModified: '2026-05-12',
    url: `https://funeralhomedirectories.com/funeral-costs/${state}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://funeralhomedirectories.com' },
      { '@type': 'ListItem', position: 2, name: 'Funeral Costs by State', item: 'https://funeralhomedirectories.com/funeral-costs' },
      { '@type': 'ListItem', position: 3, name: meta.name },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/funeral-costs" className="text-slate-600 hover:text-slate-800">Funeral Costs by State</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{meta.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Average Funeral Costs in {meta.name} (2026)
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            {pricing.dataSource === 'supabase'
              ? `Real price ranges from ${pricing.listingCount} funeral homes across ${meta.name}`
              : `Estimated price ranges for ${meta.name}, based on NFDA national medians`}
          </p>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          {/* AI-citable opening paragraph */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Funeral costs in {meta.name} range from {formatRange(pricing.cremationLow, pricing.cremationHigh)} for direct cremation to {formatRange(pricing.burialLow, pricing.burialHigh)} for a traditional funeral with burial. The national average for direct cremation is $1,500 to $3,500, and the national average for traditional burial is $7,000 to $12,000. {meta.name}&apos;s direct cremation costs are {vsNational(pricing.cremationLow, pricing.cremationHigh, natCremLow, natCremHigh).toLowerCase()}, and burial costs are {vsNational(pricing.burialLow, pricing.burialHigh, natBurLow, natBurHigh).toLowerCase()}.
            </p>
          </div>

          {/* Pricing table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Service</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">{meta.name} Average</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">vs National</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{r.label}</td>
                    <td className="px-6 py-4 text-slate-700 font-mono whitespace-nowrap">{r.range}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{r.vs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mb-10">
            {dataNote} Always request a General Price List directly from each funeral home.
          </p>

          {/* State ranking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <p className="text-4xl font-bold text-slate-700 mb-1">{cremRank}<span className="text-lg text-gray-400"> / {totalStates}</span></p>
              <p className="text-sm text-gray-600">Direct cremation cost ranking (1 = cheapest)</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              <p className="text-4xl font-bold text-slate-700 mb-1">{burialRank}<span className="text-lg text-gray-400"> / {totalStates}</span></p>
              <p className="text-sm text-gray-600">Traditional burial cost ranking (1 = cheapest)</p>
            </div>
          </div>

          {/* Provider count + CTA */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 mb-4">Browse {providerCount > 0 ? providerCount.toLocaleString() : ''} funeral homes in {meta.name}</p>
            <Link
              href={`/funeral-homes/${meta.abbr}`}
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Find Funeral Homes in {meta.name}
            </Link>
          </div>

          {/* Top cities */}
          {topCities.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Cities in {meta.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {topCities.map((c) => (
                  <Link
                    key={c}
                    href={`/funeral-costs/${state}/${citySlug(c)}`}
                    className="bg-white rounded-lg border border-gray-200 px-4 py-3 text-center text-gray-700 hover:text-slate-700 hover:border-slate-400 hover:shadow-sm transition-all font-medium"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((q: { name: string; acceptedAnswer: { text: string } }) => (
                <div key={q.name}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{q.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Reading */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/funeral-cost-calculator" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Cost Calculator</h3>
                <p className="text-sm text-gray-600">Estimate costs by state with real pricing data.</p>
              </Link>
              <Link href={`/direct-cremation/${meta.abbr}`} className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation in {meta.name}</h3>
                <p className="text-sm text-gray-600">Browse direct cremation providers and compare pricing.</p>
              </Link>
              <Link href={`/funeral-homes/${meta.abbr}`} className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Homes in {meta.name}</h3>
                <p className="text-sm text-gray-600">Browse all funeral homes with contact info and services.</p>
              </Link>
              <Link href="/blog/funeral-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs in 2026</h3>
                <p className="text-sm text-gray-600">National cost overview and money saving tips.</p>
              </Link>
              <Link href="/blog/how-to-read-a-funeral-home-general-price-list" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">How to Read a General Price List</h3>
                <p className="text-sm text-gray-600">Understand the document every funeral home must give you.</p>
              </Link>
            </div>
          </div>

          {/* Terry attribution */}
          <div className="text-center text-sm text-gray-400">
            <p>Written by <strong className="text-gray-500">Terry Feely</strong>, former firefighter and paramedic with firsthand experience helping families navigate end of life decisions. Evermore Directory covers 5,100+ funeral homes and cremation providers across all 50 states.</p>
          </div>
        </div>
      </div>
    </>
  );
}
