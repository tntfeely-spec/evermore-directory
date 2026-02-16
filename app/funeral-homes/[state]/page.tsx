import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Navigation from '@/components/Navigation';
import PremiumBanner from '@/components/PremiumBanner';

interface PageProps {
  params: Promise<{
    state: string;
  }>;
}

const stateNames: { [key: string]: string } = {
  'al': 'Alabama', 'ak': 'Alaska', 'az': 'Arizona', 'ar': 'Arkansas',
  'ca': 'California', 'co': 'Colorado', 'ct': 'Connecticut', 'de': 'Delaware',
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
    return {
      title: 'State Not Found',
    };
  }

  return {
    title: `Funeral Homes in ${stateName} - Find Cremation Services & Funeral Directors | Evermore Directory`,
    description: `Find trusted funeral homes and cremation services in ${stateName}. Browse compassionate funeral directors, memorial chapels, and burial services across all cities in ${stateName}.`,
    alternates: {
      canonical: `https://funeralhomedirectories.com/funeral-homes/${state.toLowerCase()}`,
    },
    openGraph: {
      title: `Funeral Homes in ${stateName} - Find Cremation Services & Funeral Directors | Evermore Directory`,
      description: `Find trusted funeral homes and cremation services in ${stateName}. Browse compassionate funeral directors, memorial chapels, and burial services across all cities in ${stateName}.`,
      url: `https://funeralhomedirectories.com/funeral-homes/${state.toLowerCase()}`,
      siteName: 'Evermore Directory',
      type: 'website',
    },
  };
}

export default async function StateCitiesPage({ params }: PageProps) {
  const { state } = await params;
  const stateName = stateNames[state.toLowerCase()];

  if (!stateName) {
    notFound();
  }

  const { data: homes, error } = await supabase
    .from('funeral_homes')
    .select('city')
    .eq('state', state.toUpperCase());

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

  // Generate JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": `Funeral Homes in ${stateName}`,
        "description": `Find ${totalListings} funeral homes and cremation services across ${cities.length} cities in ${stateName}.`,
        "url": `https://funeralhomedirectories.com/funeral-homes/${state.toLowerCase()}`
      },
      {
        "@type": "ItemList",
        "name": `Cities with Funeral Homes in ${stateName}`,
        "numberOfItems": cities.length,
        "itemListElement": cities.slice(0, 20).map((cityData, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": `${cityData.city}, ${stateName}`,
          "url": `https://funeralhomedirectories.com/funeral-homes/${state.toLowerCase()}/${cityData.city.toLowerCase().replace(/\s+/g, '-')}`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://funeralhomedirectories.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "States",
            "item": "https://funeralhomedirectories.com/states"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": stateName,
            "item": `https://funeralhomedirectories.com/funeral-homes/${state.toLowerCase()}`
          }
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
      <PremiumBanner />
      <div className="min-h-screen relative">
        {/* Background Image */}
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: 'url(/Mountain_Lake_Image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.7
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm">
            <Link href="/states" className="text-blue-600 hover:text-blue-800">
              All States
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{stateName}</span>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Funeral Homes in {stateName}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find compassionate funeral homes and cremation services throughout {stateName}. Browse trusted funeral directors, memorial chapels, and burial services in cities across the state.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Funeral Homes by City in {stateName}
          </h2>
          <p className="text-gray-600 mb-8">
            Browse funeral homes and cremation providers by city in {stateName}. Each city listing includes local funeral directors, cremation services, and memorial chapels with complete contact information and service details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {cities?.map((city: { city: string; count: number }) => (
              <Link
                key={city.city}
                href={`/funeral-homes/${state.toLowerCase()}/${city.city.toLowerCase().replace(/ /g, '-')}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-transparent hover:border-blue-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{city.city}</h3>
                    <p className="text-sm text-gray-600">{city.count} funeral homes</p>
                  </div>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Benefits Section - NO EMOJIS */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Benefits of Using the Evermore Directory in {stateName}
            </h2>
            <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Discover why families throughout {stateName} trust our directory to find compassionate funeral homes and cremation services
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Local {stateName} Funeral Homes
                </h3>
                <p className="text-gray-600">
                  Find funeral homes and cremation services throughout {stateName}, from major cities to small towns. Our directory includes both family-owned funeral directors and established memorial chapels serving your community.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Verified Contact Information
                </h3>
                <p className="text-gray-600">
                  All funeral homes in our {stateName} directory are verified with current phone numbers, addresses, and service information so you can reach trusted providers immediately when needed.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Compare Services and Options
                </h3>
                <p className="text-gray-600">
                  Compare funeral homes across {stateName} to find services that match your needs, whether traditional burial, cremation, memorial services, or pre-planning arrangements.
                </p>
              </div>
            </div>
          </div>

          {/* Complete Guide Section */}
          <div className="mb-20 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Guide to Finding Funeral Homes in {stateName}
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4 leading-relaxed">
                The Evermore Directory provides comprehensive coverage of funeral homes and cremation services throughout {stateName}. Our directory connects families with compassionate funeral directors, memorial chapels, and cremation providers in every corner of the state. Whether you're in a major metropolitan area or a rural community, you'll find licensed funeral service providers who can assist with burial arrangements, cremation services, memorial planning, pre-arrangements, and grief support.
              </p>
              <p className="mb-4 leading-relaxed">
                {stateName} funeral homes in our directory offer a full range of services including traditional funerals with viewing, direct burial, cremation services, memorial services, celebration of life ceremonies, green burial options, and pre-planning services. Many funeral directors in {stateName} are experienced with specific cultural and religious traditions and can provide personalized care that honors your family's wishes.
              </p>
              <p className="leading-relaxed">
                Browse our city-by-city directory to find funeral homes near you in {stateName}. Each listing includes verified contact information, service offerings, and location details to help you make informed decisions during a difficult time.
              </p>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mb-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tips for Choosing a Funeral Home in {stateName}
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Contact multiple funeral homes in your {stateName} community to compare pricing and available services</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Request the General Price List (GPL) from each {stateName} funeral home - they're required by law to provide it</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Ask about all options including burial, cremation, green burial, and memorial services available in {stateName}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Verify the funeral home's licensing with the {stateName} state board and check their experience with your cultural or religious traditions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Inquire about additional services like grief counseling, pre-planning, and memorial products offered by {stateName} providers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Consider the location and accessibility of the funeral home for family and friends attending services in {stateName}</span>
              </li>
            </ul>
          </div>

          {/* Pro Tip Box - NO LIGHTBULB */}
          <div className="mb-20 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg shadow-md p-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Tip for {stateName} Families</h3>
              <p className="text-gray-700 leading-relaxed">
                When contacting funeral homes in {stateName}, ask about their experience serving families in your specific community. Local funeral directors often have established relationships with cemeteries, crematoriums, florists, and other service providers in the area, which can help streamline arrangements and potentially reduce costs during an already difficult time.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/states"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              ← Back to All States
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
