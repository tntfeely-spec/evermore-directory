import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { stateMeta, allStateSlugs } from '@/lib/state-pricing';

export const metadata: Metadata = {
  title: 'Average Funeral Costs by State (2026) | Evermore Directory',
  description:
    'Compare average funeral and cremation costs in every US state. Based on NFDA 2024 Cremation and Burial Report data.',
  alternates: { canonical: 'https://funeralhomedirectories.com/funeral-costs' },
};

export default function FuneralCostsIndex() {
  const sorted = [...allStateSlugs].sort((a, b) => stateMeta[a].name.localeCompare(stateMeta[b].name));
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Average Funeral Costs by State (2026)
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Compare average funeral and cremation costs in every US state. Based on the NFDA 2024 Cremation and Burial Report,
            adjusted for regional cost of living.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {sorted.map((slug) => (
              <Link
                key={slug}
                href={`/funeral-costs/${slug}`}
                className="bg-white rounded-lg border border-gray-200 px-4 py-3 text-center text-gray-700 hover:text-slate-700 hover:border-slate-400 hover:shadow-sm transition-all font-medium"
              >
                {stateMeta[slug].name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
