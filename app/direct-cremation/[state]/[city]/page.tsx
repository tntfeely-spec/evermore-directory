import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Navigation from '@/components/Navigation';

export const revalidate = 0;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{
    state: string;
    city: string;
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

interface CremationProvider {
  id: string;
  business_name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string | null;
  website: string | null;
  services_offered: string | null;
  price_range_cremation: string | null;
  special_features: string | null;
  is_featured: boolean;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city } = await params;
  const stateName = stateNames[state.toLowerCase()];
  const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  if (!stateName) {
    return { title: 'City Not Found' };
  }

  const cityNameHyphenated = city.replace(/\b\w/g, (l: string) => l.toUpperCase());
  const { count } = await supabase
    .from('funeral_homes')
    .select('*', { count: 'exact', head: true })
    .eq('state', state.toUpperCase())
    .eq('provider_type', 'direct_cremation')
    .or(`city.ilike.${cityName},city.ilike.${cityNameHyphenated}`);

  const homeCount = count || 0;

  const title = homeCount > 0
    ? `${homeCount} Direct Cremation Providers in ${cityName}, ${stateName} (2026) | Compare Prices`
    : `Direct Cremation in ${cityName}, ${stateName} (2026) | Compare Prices`;

  const description = `Find affordable direct cremation providers in ${cityName}, ${stateName}. Compare pricing, reviews, and contact info for ${homeCount} local cremation specialists.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://funeralhomedirectories.com/direct-cremation/${state.toLowerCase()}/${city.toLowerCase()}`,
    },
    openGraph: {
      title,
      description,
      url: `https://funeralhomedirectories.com/direct-cremation/${state.toLowerCase()}/${city.toLowerCase()}`,
      siteName: 'Evermore Directory',
      type: 'website',
    },
  };
}

export default async function DirectCremationCityPage({ params }: PageProps) {
  const { state, city } = await params;
  const stateName = stateNames[state.toLowerCase()];
  const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  if (!stateName) {
    notFound();
  }

  const cityNameHyphenated = city.replace(/\b\w/g, (l: string) => l.toUpperCase());
  const { data: providers, error } = await supabase
    .from('funeral_homes')
    .select('*')
    .eq('state', state.toUpperCase())
    .eq('provider_type', 'direct_cremation')
    .or(`city.ilike.${cityName},city.ilike.${cityNameHyphenated}`)
    .order('is_featured', { ascending: false })
    .order('business_name');

  if (error) {
    console.error('Error fetching providers:', error);
  }

  if (!providers || providers.length === 0) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Direct Cremation in {cityName}, {stateName}</h1>
            <p className="text-lg text-gray-600 mb-8">We do not have direct cremation providers listed for {cityName} yet. Browse all direct cremation providers in {stateName} to find services near you.</p>
            <Link href={`/direct-cremation/${state.toLowerCase()}`} className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg">
              Browse All {stateName} Cremation Providers
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Get nearby cities with direct cremation providers
  const { data: nearbyCities } = await supabase
    .from('funeral_homes')
    .select('city')
    .eq('state', state.toUpperCase())
    .eq('provider_type', 'direct_cremation');

  const uniqueNearbyCities = [...new Set(nearbyCities?.map(h => h.city) || [])]
    .filter(c => c.toLowerCase() !== cityName.toLowerCase())
    .sort()
    .slice(0, 12);

  const featuredProviders = providers.filter((p: CremationProvider) => p.is_featured);
  const regularProviders = providers.filter((p: CremationProvider) => !p.is_featured);

  const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');
  const citySlugForUrl = city.toLowerCase().replace(/\s+/g, '-');

  // Extract pricing
  function extractPrices(raw: string | null): number[] {
    if (!raw) return [];
    const matches = raw.match(/\$?([\d,]+)/g);
    if (!matches) return [];
    return matches.map(m => parseInt(m.replace(/[$,]/g, ''), 10)).filter(n => n > 0 && n < 100000);
  }

  const allPrices = providers.flatMap((p: CremationProvider) => extractPrices(p.price_range_cremation));
  const minPrice = allPrices.length > 0 ? Math.min(...allPrices) : null;
  const maxPrice = allPrices.length > 0 ? Math.max(...allPrices) : null;
  const priceRange = minPrice && maxPrice
    ? `$${minPrice.toLocaleString()} to $${maxPrice.toLocaleString()}`
    : '$1,000 to $3,500';

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does direct cremation cost in ${cityName}, ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Based on ${providers.length} providers listed in ${cityName}, direct cremation costs range from ${priceRange}. Request an itemized price list from each provider to compare exact costs.`
        }
      },
      {
        "@type": "Question",
        "name": `How many direct cremation providers are in ${cityName}, ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Evermore Directory lists ${providers.length} direct cremation provider${providers.length !== 1 ? 's' : ''} in ${cityName}, ${stateName}. Browse the list above to compare services, pricing, and contact information.`
        }
      },
      {
        "@type": "Question",
        "name": `What is included in direct cremation in ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Direct cremation in ${cityName} typically includes transportation of the deceased, a basic cremation container, the cremation process, necessary permits and death certificates, and return of cremated remains. No embalming, viewing, or formal service is included.`
        }
      },
      {
        "@type": "Question",
        "name": `Can I have a memorial service after direct cremation in ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. Many families in ${cityName} choose direct cremation and then hold a separate celebration of life or memorial service days, weeks, or even months later. This gives you time to plan a meaningful gathering without the pressure of immediate funeral arrangements.`
        }
      }
    ]
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": `Direct Cremation Providers in ${cityName}, ${stateName}`,
        "numberOfItems": providers.length,
        "itemListElement": providers.map((p: CremationProvider, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "LocalBusiness",
            "name": p.business_name,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": p.address,
              "addressLocality": p.city,
              "addressRegion": p.state,
              "postalCode": p.zip,
              "addressCountry": "US"
            },
            ...(p.phone && { "telephone": p.phone }),
            ...(p.website && { "url": p.website }),
            "priceRange": p.price_range_cremation || "$$"
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Direct Cremation", "item": "https://funeralhomedirectories.com/direct-cremation" },
          { "@type": "ListItem", "position": 3, "name": stateName, "item": `https://funeralhomedirectories.com/direct-cremation/${state.toLowerCase()}` },
          { "@type": "ListItem", "position": 4, "name": cityName, "item": `https://funeralhomedirectories.com/direct-cremation/${state.toLowerCase()}/${city.toLowerCase()}` }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />
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
            <Link href="/direct-cremation" className="text-slate-600 hover:text-slate-800">Direct Cremation</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={`/direct-cremation/${state.toLowerCase()}`} className="text-slate-600 hover:text-slate-800">{stateName}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{cityName}</span>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Direct Cremation Providers in {cityName}, {stateName}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare {providers.length} affordable direct cremation provider{providers.length !== 1 ? 's' : ''} in {cityName}. Direct cremation offers a simple, dignified process starting from {minPrice ? `$${minPrice.toLocaleString()}` : '$1,000'} with no formal service required.
            </p>
            <div className="mt-4 text-lg text-gray-700 font-semibold">
              {providers.length} provider{providers.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {/* Featured Listings */}
          {featuredProviders.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Cremation Providers in {cityName}
              </h2>
              <div className="space-y-6">
                {featuredProviders.map((p: CremationProvider) => (
                  <div key={p.id} className="relative bg-white rounded-xl shadow-sm p-6 border border-green-200">
                    <span className="absolute top-4 right-4 bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider">FEATURED</span>
                    <div className="flex items-center flex-wrap gap-2 mb-2 pr-24">
                      <Link href={`/funeral-homes/${state.toLowerCase()}/${citySlugForUrl}/${slugify(p.business_name)}`} className="text-2xl font-bold text-gray-900 hover:text-slate-700">
                        {p.business_name}
                      </Link>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{p.address}, {p.city}, {p.state} {p.zip}</p>
                    {p.phone && <p className="text-sm mb-1 text-slate-600 font-semibold">{p.phone}</p>}
                    {p.price_range_cremation && <p className="text-sm text-green-700 font-semibold mb-2">Starting at {p.price_range_cremation}</p>}
                    <div className="flex gap-3 mt-3">
                      <Link href={`/funeral-homes/${state.toLowerCase()}/${citySlugForUrl}/${slugify(p.business_name)}`} className="inline-block bg-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                        View Details
                      </Link>
                      {p.website && (
                        <a href={p.website} target="_blank" rel="noopener noreferrer" className="inline-block border border-slate-300 text-slate-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                          Visit Website
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Listings */}
          {regularProviders.length > 0 && (
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                All Direct Cremation Providers in {cityName}, {stateName}
              </h2>
              <div className="space-y-4">
                {regularProviders.map((p: CremationProvider) => (
                  <div key={p.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                    <Link href={`/funeral-homes/${state.toLowerCase()}/${citySlugForUrl}/${slugify(p.business_name)}`} className="text-xl font-bold text-gray-900 hover:text-slate-700">
                      {p.business_name}
                    </Link>
                    <p className="text-gray-600 text-sm mt-1 mb-1">{p.address}, {p.city}, {p.state} {p.zip}</p>
                    {p.phone && <p className="text-sm mb-1 text-slate-600 font-semibold">{p.phone}</p>}
                    {p.price_range_cremation && <p className="text-sm text-green-700 font-semibold mb-2">Starting at {p.price_range_cremation}</p>}
                    <div className="flex gap-3 mt-3">
                      <Link href={`/funeral-homes/${state.toLowerCase()}/${citySlugForUrl}/${slugify(p.business_name)}`} className="inline-block bg-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                        View Details
                      </Link>
                      {p.website && (
                        <a href={p.website} target="_blank" rel="noopener noreferrer" className="inline-block border border-slate-300 text-slate-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                          Visit Website
                        </a>
                      )}
                      {p.phone && (
                        <a href={`tel:${p.phone}`} className="inline-block border border-slate-300 text-slate-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                          Call Now
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What is Direct Cremation */}
          <div className="mb-20 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is Direct Cremation in {cityName}?
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4 leading-relaxed">
                Direct cremation in {cityName} is a straightforward cremation service without a prior viewing, visitation, or formal funeral ceremony. The deceased is transported into the provider&apos;s care, cremated, and the remains are returned to the family. This is the most affordable cremation option available.
              </p>
              <p className="mb-4 leading-relaxed">
                Pricing for direct cremation in {cityName} ranges from {priceRange} based on {providers.length} local provider{providers.length !== 1 ? 's' : ''}. This typically includes transportation, a basic cremation container, permits, and return of ashes. Compare providers above to find the best option for your family.
              </p>
              <p className="leading-relaxed">
                Many {cityName} families choose direct cremation and then hold a separate celebration of life or memorial service on their own schedule. This approach gives you time to grieve, plan something meaningful, and gather family from out of town without the pressure of immediate funeral arrangements.
              </p>
            </div>
          </div>

          {/* Tips */}
          <div className="mb-20 bg-gradient-to-br from-slate-50 to-slate-50 rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tips for Choosing Direct Cremation in {cityName}
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-slate-600 font-bold mr-3">1.</span>
                <span>Request an itemized price list from each {cityName} provider. Under federal law, they must provide one.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 font-bold mr-3">2.</span>
                <span>Ask what is included in the quoted price: transportation, cremation container, permits, death certificates, and return of remains.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 font-bold mr-3">3.</span>
                <span>Confirm the provider is licensed in {stateName} and ask about their chain of custody procedures.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 font-bold mr-3">4.</span>
                <span>Ask about timeline expectations: most direct cremations in {cityName} are completed within 3 to 7 business days.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 font-bold mr-3">5.</span>
                <span>Compare at least 2 to 3 providers before deciding. Prices and service quality vary between {cityName} cremation providers.</span>
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mb-20 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Direct Cremation FAQ for {cityName}, {stateName}
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">How much does direct cremation cost in {cityName}?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Based on {providers.length} providers in {cityName}, direct cremation costs range from {priceRange}. This includes transportation, cremation, basic container, permits, and return of remains. Always request an itemized price list before making arrangements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">What is the difference between direct cremation and a traditional funeral?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Direct cremation skips the embalming, viewing, and formal ceremony that come with a traditional funeral. The body is cremated shortly after death, and families receive the ashes. A traditional funeral in {cityName} typically costs $7,000 to $12,000, while direct cremation starts around {minPrice ? `$${minPrice.toLocaleString()}` : '$1,000'}.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">How long does direct cremation take in {cityName}?</h3>
                <p className="text-gray-700 leading-relaxed">
                  From the time of death to return of ashes, direct cremation in {cityName} typically takes 3 to 7 business days. The actual cremation process takes 2 to 3 hours. Delays can occur if a medical examiner review is required or if there are weekend/holiday closures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can I hold a memorial service after direct cremation?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes. Many families in {cityName} choose direct cremation and then hold a celebration of life or memorial service later. You can plan this at home, a park, a restaurant, a place of worship, or any venue that feels meaningful. There is no time limit on when you hold the memorial.
                </p>
              </div>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="mb-20 bg-gradient-to-r from-amber-50 to-slate-50 border-l-4 border-amber-500 rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Tip for {cityName} Families</h3>
            <p className="text-gray-700 leading-relaxed">
              If you are arranging direct cremation in {cityName} during an emergency, most providers listed above can begin the process within hours of your call. Have the deceased&apos;s full legal name, date of birth, and Social Security number ready. The provider will handle transportation and all required paperwork.
            </p>
          </div>

          <div className="mb-8 text-center text-sm text-gray-400">
            <p>Directory information compiled and maintained by <strong className="text-gray-500">Terry Feely</strong>, former firefighter and paramedic with firsthand experience helping families navigate end of life decisions.</p>
          </div>

          {/* Nearby Cities */}
          {uniqueNearbyCities.length > 0 && (
            <div className="mb-20 bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Direct Cremation in Nearby {stateName} Cities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {uniqueNearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity}
                    href={`/direct-cremation/${state.toLowerCase()}/${nearbyCity.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-600 hover:text-slate-800 hover:underline py-2"
                  >
                    {nearbyCity}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Helpful Guides */}
          <div className="mb-20 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Direct Cremation Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What is Direct Cremation? The Complete 2026 Guide</h3>
                <p className="text-sm text-gray-600">Everything you need to know about direct cremation, from process to pricing.</p>
              </Link>
              <Link href="/blog/how-to-choose-direct-cremation-provider" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">How to Choose a Direct Cremation Provider</h3>
                <p className="text-sm text-gray-600">The 7-point checklist for finding a trustworthy cremation provider.</p>
              </Link>
              <Link href="/blog/direct-cremation-cost-by-state" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Cost by State: 2026 Guide</h3>
                <p className="text-sm text-gray-600">State-by-state cremation pricing with provider counts and cost comparisons.</p>
              </Link>
              <Link href="/blog" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">View All Guides</h3>
                <p className="text-sm text-gray-600">Browse our complete library of cremation and funeral planning resources.</p>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href={`/direct-cremation/${state.toLowerCase()}`}
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Back to {stateName} Cities
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
