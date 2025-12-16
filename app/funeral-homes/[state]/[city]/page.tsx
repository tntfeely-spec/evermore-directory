import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Navigation from '@/components/Navigation';
import PremiumBanner from '@/components/PremiumBanner';

interface PageProps {
  params: Promise<{
    state: string;
    city: string;
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

interface FuneralHome {
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
  price_range_burial: string | null;
  special_features: string | null;
  is_featured: boolean;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city } = await params;
  const stateName = stateNames[state.toLowerCase()];
  const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  if (!stateName) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: `Funeral Homes in ${cityName}, ${stateName} - Find Cremation Services & Funeral Directors`,
    description: `Find trusted funeral homes and cremation services in ${cityName}, ${stateName}. Compare compassionate funeral directors, burial services, and memorial planning options.`,
  };
}

export default async function CityPage({ params }: PageProps) {
  const { state, city } = await params;
  const stateName = stateNames[state.toLowerCase()];
  const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  if (!stateName) {
    notFound();
  }

  const { data: funeralHomes, error } = await supabase
    .from('funeral_homes')
    .select('*')
    .eq('state', state.toUpperCase())
    .ilike('city', cityName)
    .order('is_featured', { ascending: false })
    .order('business_name');

  if (error) {
    console.error('Error fetching funeral homes:', error);
  }

  if (!funeralHomes || funeralHomes.length === 0) {
    notFound();
  }

  const featuredHomes = funeralHomes.filter((home: FuneralHome) => home.is_featured);
  const regularHomes = funeralHomes.filter((home: FuneralHome) => !home.is_featured);

  // Generate JSON-LD Schema
  const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": `Funeral Homes in ${cityName}, ${stateName}`,
        "numberOfItems": funeralHomes.length,
        "itemListElement": funeralHomes.map((home: FuneralHome, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "FuneralHome",
            "name": home.business_name,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": home.address,
              "addressLocality": home.city,
              "addressRegion": home.state,
              "postalCode": home.zip,
              "addressCountry": "US"
            },
            ...(home.phone && { "telephone": home.phone }),
            ...(home.website && { "url": home.website }),
            "priceRange": home.price_range_cremation || "$$"
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "States", "item": "https://funeralhomedirectories.com/states" },
          { "@type": "ListItem", "position": 3, "name": stateName, "item": `https://funeralhomedirectories.com/funeral-homes/${state.toLowerCase()}` },
          { "@type": "ListItem", "position": 4, "name": cityName, "item": `https://funeralhomedirectories.com/funeral-homes/${state.toLowerCase()}/${citySlug}` }
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
            backgroundImage: 'url(/Sunlight_Forest.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.25
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <nav className="mb-8 text-sm">
            <Link href="/states" className="text-blue-600 hover:text-blue-800">
              All States
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={`/funeral-homes/${state.toLowerCase()}`} className="text-blue-600 hover:text-blue-800">
              {stateName}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{cityName}</span>
          </nav>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Funeral Homes in {cityName}, {stateName}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find compassionate funeral homes and cremation services in {cityName}. 
              Compare trusted funeral directors offering burial, cremation, and memorial services.
            </p>
            <div className="mt-4 text-lg text-gray-700 font-semibold">
              {funeralHomes.length} funeral home{funeralHomes.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {/* Featured Listings */}
          {featuredHomes.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-2">⭐</span>
                Featured Funeral Homes in {cityName}
              </h2>
              <div className="space-y-6">
                {featuredHomes.map((home: FuneralHome) => (
                  <div key={home.id} className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl shadow-lg p-8 border-2 border-yellow-400">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                            FEATURED
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">{home.business_name}</h3>
                        </div>
                        <div className="space-y-2 text-gray-700">
                          <p className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {home.address}, {home.city}, {home.state} {home.zip}
                          </p>
                          {home.phone && (
                            <p className="flex items-center">
                              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <a href={`tel:${home.phone}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                                {home.phone}
                              </a>
                            </p>
                          )}
                          {home.website && (
                            <p className="flex items-center">
                              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                              <a href={home.website.startsWith('http') ? home.website : `https://${home.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
                                Visit Website
                              </a>
                            </p>
                          )}
                          {home.services_offered && (
                            <div className="pt-3 mt-3 border-t border-gray-200">
                              <p className="font-semibold mb-1">Services: <span className="font-normal">{home.services_offered}</span></p>
                            </div>
                          )}
                          {(home.price_range_cremation || home.price_range_burial) && (
                            <div className="pt-3 mt-3 border-t border-gray-200">
                              <p className="font-semibold mb-1">Price Ranges:</p>
                              {home.price_range_cremation && <p className="text-sm">Cremation: {home.price_range_cremation}</p>}
                              {home.price_range_burial && <p className="text-sm">Burial: {home.price_range_burial}</p>}
                            </div>
                          )}                              
                          {home.special_features && (
                            <div className="pt-3 mt-3 border-t border-gray-200">
                              <p className="font-semibold mb-1">Special Features: <span className="font-normal">{home.special_features}</span></p>
                            </div>
                          )}
                          {/* Claim Listing Link */}
                          <div className="pt-3 mt-3 border-t border-gray-200">
                            <a 
                              href="https://claim.funeralhomedirectories.com" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                            >
                              Is this your business? Claim this listing →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Listings */}
          {regularHomes.length > 0 && (
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                All Funeral Homes in {cityName}, {stateName}
              </h2>
              <div className="space-y-4">
                {regularHomes.map((home: FuneralHome) => (
                  <div key={home.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{home.business_name}</h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {home.address}, {home.city}, {home.state} {home.zip}
                      </p>
                      {home.phone && (
                        <p className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${home.phone}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                            {home.phone}
                          </a>
                        </p>
                      )}
                      {home.website && (
                        <p className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                          <a href={home.website.startsWith('http') ? home.website : `https://${home.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
                            Visit Website
                          </a>
                        </p>
                      )}
                      {home.services_offered && (
                        <div className="pt-2 mt-2 border-t border-gray-200">
                          <p className="text-sm"><span className="font-semibold">Services:</span> {home.services_offered}</p>
                        </div>
                      )}
                      {(home.price_range_cremation || home.price_range_burial) && (
                        <div className="pt-2 mt-2 border-t border-gray-200">
                          <p className="text-sm font-semibold">Price Ranges:</p>
                          {home.price_range_cremation && <p className="text-sm">Cremation: {home.price_range_cremation}</p>}
                          {home.price_range_burial && <p className="text-sm">Burial: {home.price_range_burial}</p>}
                        </div>
                   )}
                      {home.special_features && (
                        <div className="pt-2 mt-2 border-t border-gray-200">
                          <p className="text-sm"><span className="font-semibold">Special Features:</span> {home.special_features}</p>
                        </div>
                      )}
                      {/* Claim Listing Link */}
                      <div className="pt-2 mt-2 border-t border-gray-200">
                        <a 
                          href="https://claim.funeralhomedirectories.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          Is this your business? Claim this listing →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Section - NO EMOJIS */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Benefits of Using the Evermore Directory in {cityName}
            </h2>
            <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Discover why families in {cityName}, {stateName} trust our directory to find compassionate 
              funeral homes and cremation services
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Compare Local {cityName} Funeral Homes
                </h3>
                <p className="text-gray-600">
                  The Evermore Directory helps you compare funeral homes and cremation providers in {cityName}, allowing you to find 
                  services that match your needs and budget for burial, cremation, or memorial planning.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Verified {cityName} Funeral Home Information
                </h3>
                <p className="text-gray-600">
                  All funeral homes in our {cityName} directory are verified with accurate contact information, addresses, 
                  and service details to ensure you can reach trusted local providers when you need them most.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Local {cityName} Expertise
                </h3>
                <p className="text-gray-600">
                  Funeral homes in {cityName} understand your community and can provide personalized care that honors local 
                  traditions and preferences during difficult times.
                </p>
              </div>
            </div>
          </div>

          {/* Complete Guide Section */}
          <div className="mb-20 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Guide to Finding Funeral Homes in {cityName}, {stateName}
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4 leading-relaxed">
                Funeral homes in {cityName}, {stateName} specialize in providing compassionate end-of-life services to families 
                during difficult times. Our directory connects you with both independent family-owned funeral directors and established 
                memorial chapels throughout {cityName}. From local funeral homes to cremation providers and memorial service specialists, 
                these trusted providers offer burial services, cremation options, memorial planning, pre-arrangement services, and grief 
                support to help {cityName} families honor their loved ones.
              </p>
              <p className="mb-4 leading-relaxed">
                Whether you need immediate funeral services in {cityName}, are pre-planning arrangements, or seeking cremation options, 
                our directory provides access to verified funeral homes with detailed service information, contact details, and location 
                data. {cityName} funeral directors are experienced with various cultural and religious traditions and can help create 
                meaningful services that reflect your family's wishes and values.
              </p>
              <p className="leading-relaxed">
                The funeral homes listed in {cityName} offer a full range of services including traditional funerals with viewing, 
                graveside services, direct burial, cremation services with memorial options, celebration of life ceremonies, green burial 
                alternatives, and comprehensive pre-planning services. Many {cityName} funeral homes also provide grief counseling, 
                memorial products, and ongoing support to help families navigate the grieving process.
              </p>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mb-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tips for Choosing a Funeral Home in {cityName}, {stateName}
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Contact multiple funeral homes in {cityName} to compare pricing - costs can vary significantly between providers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Request the General Price List (GPL) from each {cityName} funeral home - they're required by federal law to provide it</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Ask {cityName} funeral directors about all available options including burial, cremation, memorial services, and green burial alternatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Inquire about pre-planning services if you're arranging future arrangements in {cityName} for yourself or loved ones</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Check if the {cityName} funeral home offers grief counseling, memorial products, and ongoing family support services</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Verify the funeral home's licensing in {stateName} and ask about their experience with specific cultural or religious traditions</span>
              </li>
            </ul>
          </div>

          {/* Types of Funeral Homes Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Types of Funeral Service Providers in {cityName}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Independent {cityName} Funeral Homes
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Local family-owned funeral directors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Specialized cremation service providers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Community-based memorial chapels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Green burial and natural funeral specialists</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  National Providers Serving {cityName}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Major funeral home chains with {cityName} locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>National cremation service networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Cemetery-affiliated funeral providers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Multi-location memorial service centers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Common Services Offered by {cityName} Funeral Homes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Traditional Services
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span>Full funeral services with viewing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span>Burial arrangements and cemetery coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span>Memorial services and celebrations of life</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span>Religious and cultural ceremony planning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Modern & Alternative Services
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span>Direct cremation services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span>Green burial and eco-friendly options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span>Pre-planning and pre-arrangement services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span>Grief counseling and support groups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pro Tip Box - NO LIGHTBULB */}
          <div className="mb-20 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg shadow-md p-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Tip for {cityName} Families</h3>
              <p className="text-gray-700 leading-relaxed">
                When contacting funeral homes in {cityName}, {stateName}, don't hesitate to ask detailed questions about their pricing, 
                services, and experience with your specific needs. Reputable funeral directors in {cityName} will be transparent about 
                costs and happy to explain all available options without pressure. Taking time to compare services from multiple {cityName} 
                funeral homes ensures you make the best decision for your family during this difficult time.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions About Funeral Homes in {cityName}, {stateName}
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much do funeral services cost in {cityName}, {stateName}?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Funeral costs in {cityName} vary widely depending on services selected. A traditional funeral with viewing can range 
                  from $7,000-$12,000 or more, while direct cremation in {cityName} typically costs $1,000-$3,000. Request the General 
                  Price List (GPL) from each {cityName} funeral home to compare specific costs for burial, cremation, and memorial services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the difference between burial and cremation services in {cityName}?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Burial services in {cityName} involve preparing the body, holding a viewing or service, and interment in a cemetery. 
                  Cremation in {cityName} reduces the body to ashes through high-temperature processing, which can then be kept in an urn, 
                  scattered, or buried. Many {cityName} funeral homes offer both options along with memorial services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do funeral homes in {cityName} offer payment plans?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Many funeral homes in {cityName}, {stateName} offer payment plans or financing options to help families manage costs. 
                  Some {cityName} funeral directors also work with insurance assignments and can help you understand what costs may be 
                  covered by life insurance or other benefits. Always ask about payment options when comparing funeral homes in {cityName}.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I pre-plan funeral arrangements in {cityName}?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, most funeral homes in {cityName} offer pre-planning services. Pre-planning allows you to make decisions about your 
                  funeral or a loved one's service in advance, often at current prices. {cityName} funeral directors can help document your 
                  wishes and establish pre-payment arrangements if desired, providing peace of mind for your family.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What should I bring when meeting with a {cityName} funeral director?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When meeting with funeral homes in {cityName}, bring identification, the deceased's vital information (birth certificate, 
                  social security number), information about military service if applicable, and any pre-planning documents. {cityName} 
                  funeral directors will guide you through required paperwork and help you understand what additional documentation is needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How do I choose the right funeral home in {cityName}, {stateName}?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Choose a {cityName} funeral home by comparing services, prices, and reviews from multiple providers. Visit facilities in 
                  person when possible, ask about their experience with your cultural or religious traditions, and ensure the funeral director 
                  in {cityName} is licensed in {stateName}. Trust your instincts about whether the {cityName} funeral staff treats you with 
                  compassion and respect.
                </p>
              </div>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="text-center">
            <Link 
              href={`/funeral-homes/${state.toLowerCase()}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              ← Back to {stateName} Cities
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
