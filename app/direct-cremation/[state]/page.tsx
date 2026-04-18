import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Navigation from '@/components/Navigation';

interface PageProps {
  params: Promise<{
    state: string;
  }>;
}

const stateNames: { [key: string]: string } = {
  'al': 'Alabama', 'ak': 'Alaska', 'az': 'Arizona', 'ar': 'Arkansas',
  'ca': 'California', 'co': 'Colorado', 'ct': 'Connecticut', 'de': 'Delaware',
  'dc': 'District of Columbia',
  'fl': 'Florida', 'ga': 'Georgia', 'hi': 'Hawaii', 'id': 'Idaho',
  'il': 'Illinois', 'in': 'Indiana', 'ia': 'Iowa', 'ks': 'Kansas',
  'ky': 'Kentucky', 'la': 'Louisiana', 'me': 'Maine', 'md': 'Maryland',
  'ma': 'Massachusetts', 'mi': 'Michigan', 'mn': 'Minnesota', 'ms': 'Mississippi',
  'mo': 'Missouri', 'mt': 'Montana', 'ne': 'Nebraska', 'nv': 'Nevada',
  'nh': 'New Hampshire', 'nj': 'New Jersey', 'nm': 'New Mexico', 'ny': 'New York',
  'nc': 'North Carolina', 'nd': 'North Dakota', 'oh': 'Ohio', 'ok': 'Oklahoma',
  'or': 'Oregon', 'pa': 'Pennsylvania', 'ri': 'Rhode Island', 'sc': 'South Carolina',
  'sd': 'South Dakota', 'tn': 'Tennessee', 'tx': 'Texas', 'ut': 'Utah',
  'vt': 'Vermont', 'va': 'Virginia', 'wa': 'Washington', 'wv': 'West Virginia',
  'wi': 'Wisconsin', 'wy': 'Wyoming'
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params;
  const stateName = stateNames[state.toLowerCase()];

  if (!stateName) {
    return { title: 'State Not Found' };
  }

  const description = `Find affordable direct cremation providers in ${stateName}. Compare pricing, read reviews, and contact local cremation specialists near you.`;

  return {
    title: `Direct Cremation Providers in ${stateName} (2026) | Evermore Directory`,
    description,
    alternates: {
      canonical: `https://funeralhomedirectories.com/direct-cremation/${state.toLowerCase()}`,
    },
    openGraph: {
      title: `Direct Cremation Providers in ${stateName} (2026) | Evermore Directory`,
      description,
      url: `https://funeralhomedirectories.com/direct-cremation/${state.toLowerCase()}`,
      siteName: 'Evermore Directory',
      type: 'website',
    },
  };
}

export default async function DirectCremationStatePage({ params }: PageProps) {
  const { state } = await params;
  const stateName = stateNames[state.toLowerCase()];

  if (!stateName) {
    notFound();
  }

  const { data: homes, error } = await supabase
    .from('funeral_homes')
    .select('city')
    .eq('state', state.toUpperCase())
    .eq('provider_type', 'direct_cremation');

  if (error) {
    console.error('Error fetching cities:', error);
  }

  const cityCounts: { [key: string]: number } = {};
  homes?.forEach((home) => {
    if (home.city) {
      cityCounts[home.city] = (cityCounts[home.city] || 0) + 1;
    }
  });

  const cities = Object.entries(cityCounts)
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count);

  const totalListings = homes?.length || 0;

  if (totalListings === 0) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Direct Cremation in {stateName}</h1>
            <p className="text-lg text-gray-600 mb-8">We do not have direct cremation providers listed for {stateName} yet. Browse all funeral homes in {stateName} or check back soon.</p>
            <Link href={`/funeral-homes/${state.toLowerCase()}`} className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg">
              Browse All {stateName} Funeral Homes
            </Link>
          </div>
        </div>
      </>
    );
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": `Direct Cremation Providers in ${stateName}`,
        "description": `Find ${totalListings} direct cremation providers across ${cities.length} cities in ${stateName}.`,
        "url": `https://funeralhomedirectories.com/direct-cremation/${state.toLowerCase()}`
      },
      {
        "@type": "ItemList",
        "name": `Cities with Direct Cremation Providers in ${stateName}`,
        "numberOfItems": cities.length,
        "itemListElement": cities.slice(0, 20).map((cityData, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": `${cityData.city}, ${stateName}`,
          "url": `https://funeralhomedirectories.com/direct-cremation/${state.toLowerCase()}/${cityData.city.toLowerCase().replace(/\s+/g, '-')}`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Direct Cremation", "item": "https://funeralhomedirectories.com/direct-cremation" },
          { "@type": "ListItem", "position": 3, "name": stateName, "item": `https://funeralhomedirectories.com/direct-cremation/${state.toLowerCase()}` }
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
            <Link href="/direct-cremation" className="text-slate-600 hover:text-slate-800">
              Direct Cremation
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{stateName}</span>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Direct Cremation Providers in {stateName}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find affordable direct cremation services throughout {stateName}. Browse {totalListings} cremation providers across {cities.length} cities to compare pricing and find simple, dignified cremation near you.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Direct Cremation by City in {stateName}
          </h2>
          <p className="text-gray-600 mb-8">
            Browse {totalListings} direct cremation providers across {cities.length} cities in {stateName}. Each listing includes pricing, contact information, and service details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {cities.map((city) => (
              <Link
                key={city.city}
                href={`/direct-cremation/${state.toLowerCase()}/${city.city.toLowerCase().replace(/ /g, '-')}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-transparent hover:border-slate-400"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{city.city}</h3>
                    <p className="text-sm text-gray-600">{city.count} cremation provider{city.count !== 1 ? 's' : ''}</p>
                  </div>
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* About Direct Cremation in State */}
          <div className="mb-20 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Direct Cremation in {stateName}
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4 leading-relaxed">
                Direct cremation is the simplest and most affordable cremation option available in {stateName}. It involves cremation without a prior viewing, visitation, or formal funeral service. Families receive the cremated remains and can then plan a memorial or celebration of life on their own timeline.
              </p>
              <p className="mb-4 leading-relaxed">
                The Evermore Directory lists {totalListings} direct cremation providers across {cities.length} cities in {stateName}. Each provider offers transparent pricing and handles all logistics including transportation, permits, the cremation process, and return of ashes.
              </p>
              <p className="leading-relaxed">
                Direct cremation in {stateName} typically costs between $1,000 and $3,500, depending on the provider and location. This is significantly less than the $7,000 to $12,000 average for a traditional funeral with burial.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Benefits of Direct Cremation in {stateName}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-slate-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
                <p className="text-gray-600">
                  Direct cremation in {stateName} saves families thousands by eliminating costs for embalming, caskets, viewing facilities, and formal ceremony arrangements.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-slate-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Statewide Coverage</h3>
                <p className="text-gray-600">
                  Browse {totalListings} providers across {cities.length} {stateName} cities. Most providers serve surrounding areas and can arrange transportation from anywhere in the region.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-slate-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plan on Your Terms</h3>
                <p className="text-gray-600">
                  After direct cremation, you have complete flexibility to hold a celebration of life, memorial, or scattering ceremony when and where it feels right for your family.
                </p>
              </div>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="mb-20 bg-gradient-to-r from-amber-50 to-slate-50 border-l-4 border-amber-500 rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Tip for {stateName} Families</h3>
            <p className="text-gray-700 leading-relaxed">
              When comparing direct cremation providers in {stateName}, ask each provider exactly what is included in their quoted price. A complete direct cremation package should cover transportation of the deceased, basic cremation container, the cremation process, necessary permits and paperwork, and return of cremated remains. Some {stateName} providers also include a certain number of certified death certificates.
            </p>
          </div>

          {/* Helpful Guides */}
          <div className="mb-20 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Helpful Direct Cremation Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What is Direct Cremation? The Complete 2026 Guide</h3>
                <p className="text-sm text-gray-600">Everything you need to know about direct cremation, from process to pricing.</p>
              </Link>
              <Link href="/blog/direct-cremation-cost-by-state" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Cost by State: 2026 Guide</h3>
                <p className="text-sm text-gray-600">State-by-state cremation pricing with provider counts and cost comparisons.</p>
              </Link>
              <Link href="/blog/how-to-choose-direct-cremation-provider" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">How to Choose a Direct Cremation Provider</h3>
                <p className="text-sm text-gray-600">The 7-point checklist for finding a trustworthy cremation provider.</p>
              </Link>
              <Link href="/blog" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">View All Guides</h3>
                <p className="text-sm text-gray-600">Browse our complete library of cremation and funeral planning resources.</p>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/direct-cremation"
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Back to All States
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
