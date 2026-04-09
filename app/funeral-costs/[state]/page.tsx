import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import { supabase } from '@/lib/supabase';
import { statePricing, stateMeta, allStateSlugs } from '@/lib/state-pricing';

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
  const pricing = statePricing[state];
  if (!meta || !pricing) return { title: 'Not Found' };

  const cremLow = pricing.directCremation.split('-')[0].trim();
  const burialLow = pricing.traditionalBurial.split('-')[0].trim();
  return {
    title: `Funeral Costs in ${meta.name} 2026 | Average Burial and Cremation Prices`,
    description: `Compare average funeral costs in ${meta.name}. Direct cremation from ${cremLow}. Traditional burial from ${burialLow}. Based on NFDA 2024 data.`,
    alternates: { canonical: `https://funeralhomedirectories.com/funeral-costs/${state}` },
  };
}

export default async function StateCostsPage({ params }: PageProps) {
  const { state } = await params;
  const meta = stateMeta[state];
  const pricing = statePricing[state];
  if (!meta || !pricing) notFound();

  // Top 5 cities (by listing count) in the state
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

  const rows = [
    { label: 'Direct Cremation', range: pricing.directCremation },
    { label: 'Cremation with Memorial Service', range: pricing.cremationWithMemorial },
    { label: 'Traditional Burial', range: pricing.traditionalBurial },
    { label: 'Full Funeral with Viewing', range: pricing.fullFuneralWithViewing },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much does a funeral cost in ${meta.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `In ${meta.name}, a traditional funeral with viewing typically costs ${pricing.fullFuneralWithViewing}, while a direct cremation runs ${pricing.directCremation}. These ranges are based on the NFDA 2024 Cremation and Burial Report adjusted for regional cost of living.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the cheapest funeral option in ${meta.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Direct cremation is the most affordable option in ${meta.name}, typically ${pricing.directCremation}. It includes transportation, cremation, and return of the remains without a formal service.`,
        },
      },
      {
        '@type': 'Question',
        name: `Are funeral homes in ${meta.name} required to provide price lists?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Under the FTC Funeral Rule, every funeral home in ${meta.name} must provide an itemized General Price List to anyone who asks, in person or by phone, free of charge.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does ${meta.name} have veterans burial benefits?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Eligible veterans in ${meta.name} can receive VA burial allowances, free interment in a national cemetery, and military funeral honors. Many states also operate state veterans cemeteries with additional benefits.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-6 text-sm">
            <Link href="/funeral-costs" className="text-slate-600 hover:text-slate-800">Funeral Costs</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{meta.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Average Funeral Costs in {meta.name} (2026)
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Compare average funeral and cremation prices across {meta.name}, based on NFDA 2024 data.
          </p>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Service</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Average price range</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{r.label}</td>
                    <td className="px-6 py-4 text-slate-700 font-mono whitespace-nowrap">{r.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mb-10">
            Price ranges are based on the NFDA 2024 Cremation and Burial Report national median costs, adjusted for regional cost of living.
            Actual costs vary by funeral home. Always request a General Price List directly from each funeral home.
          </p>

          {pricing.note && (
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-10 rounded">
              <p className="text-sm text-amber-900">{pricing.note}</p>
            </div>
          )}

          <div className="text-center mb-12">
            <Link
              href={`/funeral-homes/${meta.abbr}`}
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Find Funeral Homes in {meta.name} →
            </Link>
          </div>

          {topCities.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Cities in {meta.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {topCities.map((c) => (
                  <Link
                    key={c}
                    href={`/funeral-homes/${meta.abbr}/${citySlug(c)}`}
                    className="bg-white rounded-lg border border-gray-200 px-4 py-3 text-center text-gray-700 hover:text-slate-700 hover:border-slate-400 hover:shadow-sm transition-all font-medium"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{q.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
