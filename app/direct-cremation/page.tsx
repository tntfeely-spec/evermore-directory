import { Metadata } from 'next';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Direct Cremation Providers by State (2026) | Evermore Directory',
  description: 'Find affordable direct cremation providers across all 50 states. Compare pricing, reviews, and contact info for local cremation specialists near you.',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/direct-cremation',
  },
  openGraph: {
    title: 'Direct Cremation Providers by State (2026) | Evermore Directory',
    description: 'Find affordable direct cremation providers across all 50 states. Compare pricing, reviews, and contact info for local cremation specialists near you.',
    url: 'https://funeralhomedirectories.com/direct-cremation',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const stateNames: { [key: string]: string } = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas',
  'CA': 'California', 'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware',
  'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho',
  'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas',
  'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
  'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi',
  'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada',
  'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico', 'NY': 'New York',
  'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma',
  'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
  'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah',
  'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia',
  'WI': 'Wisconsin', 'WY': 'Wyoming', 'DC': 'District of Columbia',
};

export default async function DirectCremationHubPage() {
  const { data: homes } = await supabase
    .from('funeral_homes')
    .select('state')
    .eq('provider_type', 'direct_cremation');

  const stateCounts: { [key: string]: number } = {};
  homes?.forEach((home) => {
    if (home.state) {
      stateCounts[home.state] = (stateCounts[home.state] || 0) + 1;
    }
  });

  const states = Object.entries(stateCounts)
    .filter(([abbr]) => stateNames[abbr])
    .map(([abbr, count]) => ({ abbr, name: stateNames[abbr], count }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const totalProviders = homes?.length || 0;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Direct Cremation Providers by State",
        "description": `Find ${totalProviders} direct cremation providers across ${states.length} states.`,
        "url": "https://funeralhomedirectories.com/direct-cremation"
      },
      {
        "@type": "ItemList",
        "name": "States with Direct Cremation Providers",
        "numberOfItems": states.length,
        "itemListElement": states.map((s, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": s.name,
          "url": `https://funeralhomedirectories.com/direct-cremation/${s.abbr.toLowerCase()}`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Direct Cremation", "item": "https://funeralhomedirectories.com/direct-cremation" }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navigation />

      <div className="min-h-screen relative">
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: 'url(/Mountain_Lake_Image.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.35
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          <nav className="mb-8 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Direct Cremation</span>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Direct Cremation Providers by State
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Direct cremation is the most affordable option for families who want cremation without a formal funeral service. Browse {totalProviders} verified direct cremation providers across {states.length} states to compare pricing and contact local specialists.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Find Direct Cremation Providers in Your State
          </h2>
          <p className="text-gray-600 mb-8">
            Browse {totalProviders} direct cremation providers across {states.length} states. Each listing includes pricing, contact information, and service details so you can compare options and find affordable cremation near you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {states.map((s) => (
              <Link
                key={s.abbr}
                href={`/direct-cremation/${s.abbr.toLowerCase()}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-transparent hover:border-slate-400"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{s.name}</h3>
                    <p className="text-sm text-gray-600">{s.count} cremation provider{s.count !== 1 ? 's' : ''}</p>
                  </div>
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* What is Direct Cremation */}
          <div className="mb-20 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is Direct Cremation?
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4 leading-relaxed">
                Direct cremation is a simple, affordable alternative to a traditional funeral. The body is cremated shortly after death without embalming, a viewing, or a formal ceremony beforehand. Families receive the cremated remains and can then plan a memorial service, scattering, or celebration of life on their own schedule.
              </p>
              <p className="mb-4 leading-relaxed">
                The national average cost for direct cremation ranges from $1,000 to $3,500, compared to $7,000 to $12,000 for a traditional funeral with burial. This makes it the most budget-friendly option for families who want to honor their loved one without the financial burden of a full funeral.
              </p>
              <p className="leading-relaxed">
                Direct cremation providers handle transportation, necessary paperwork, the cremation itself, and return of ashes. Many families choose to hold a celebration of life weeks or months later, giving them time to grieve and plan a meaningful gathering without the pressure of immediate arrangements.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Why Families Choose Direct Cremation
            </h2>
            <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              More than 60% of Americans now choose cremation, and direct cremation is the fastest growing option
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-slate-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Significant Cost Savings
                </h3>
                <p className="text-gray-600">
                  Direct cremation typically costs $1,000 to $3,500, saving families thousands compared to traditional funeral services. No embalming, casket, or facility rental fees.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-slate-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Flexible Memorial Planning
                </h3>
                <p className="text-gray-600">
                  Without the pressure of immediate funeral arrangements, families can take time to plan a meaningful memorial, celebration of life, or scattering ceremony on their own terms.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-slate-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Simple, Dignified Process
                </h3>
                <p className="text-gray-600">
                  Direct cremation providers handle all logistics including transportation, permits, and cremation. The process is respectful, efficient, and completed within days.
                </p>
              </div>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="mb-20 bg-gradient-to-r from-amber-50 to-slate-50 border-l-4 border-amber-500 rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Tip</h3>
            <p className="text-gray-700 leading-relaxed">
              When comparing direct cremation providers, always request an itemized price list. The FTC Funeral Rule requires all providers to give you one. Look for the &quot;direct cremation&quot; line item specifically, and ask what is included (transportation, cremation container, return of ashes, death certificates). Some providers bundle everything into one price while others charge separately for each item.
            </p>
          </div>

          {/* Helpful Guides */}
          <div className="mb-20 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Helpful Direct Cremation Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/what-is-direct-cremation"
                className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What is Direct Cremation? The Complete 2026 Guide</h3>
                <p className="text-sm text-gray-600">Everything you need to know about direct cremation, from process to pricing.</p>
              </Link>
              <Link
                href="/blog/direct-cremation-cost-by-state"
                className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Cost by State: 2026 Guide</h3>
                <p className="text-sm text-gray-600">State-by-state cremation pricing with provider counts and cost comparisons.</p>
              </Link>
              <Link
                href="/blog/how-to-choose-direct-cremation-provider"
                className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-slate-600 mb-1">How to Choose a Direct Cremation Provider</h3>
                <p className="text-sm text-gray-600">The 7-point checklist for finding a trustworthy cremation provider.</p>
              </Link>
              <Link
                href="/blog"
                className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-slate-600 mb-1">View All Guides</h3>
                <p className="text-sm text-gray-600">Browse our complete library of cremation and funeral planning resources.</p>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/states"
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Browse All States
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
