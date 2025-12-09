import { Metadata } from 'next';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import Navigation from '@/components/Navigation';
import PremiumBanner from '@/components/PremiumBanner';

export const metadata: Metadata = {
  title: 'Find Funeral Homes by State - Evermore Directory',
  description: 'Browse funeral homes and cremation services across all 50 states. Find trusted funeral directors, memorial chapels, and burial services nationwide.',
};

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

export default async function StatesPage() {
  const { data: homes } = await supabase
    .from('funeral_homes')
    .select('state').limit(10000);

  const stateCounts: { [key: string]: number } = {};
  homes?.forEach((home) => {
    if (home.state) {
      stateCounts[home.state] = (stateCounts[home.state] || 0) + 1;
    }
  });

  const cityCounts: { [key: string]: Set<string> } = {};
  const { data: allHomes } = await supabase
    .from('funeral_homes')
    .select('state, city').limit(10000);
  
  allHomes?.forEach((home) => {
    if (home.state && home.city) {
      const key = home.state;
      if (!cityCounts[key]) {
        cityCounts[key] = new Set<string>();
      }
      cityCounts[key].add(home.city);
    }
  });

  const stateData = Object.entries(stateNames).map(([abbr, name]) => ({
    abbreviation: abbr.toUpperCase(),
    name,
    count: stateCounts[abbr.toUpperCase()] || 0,
    cityCount: cityCounts[abbr.toUpperCase()] ? (cityCounts[abbr.toUpperCase()] as any).size : 0,
  })).filter(state => state.count > 0);

  return (
    <>
      <Navigation />
      <PremiumBanner />
      
      <div className="min-h-screen relative">
        {/* Background Image */}
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: 'url(/Mountain_Highway_Image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.35
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Funeral Homes and Cremation Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find compassionate funeral homes across America, from local funeral directors to cremation services. 
              Discover trusted providers offering burial services, memorial planning, cremation, and grief support in all 50 states.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Funeral Homes by State</h2>
          <p className="text-gray-600 mb-8">
            Find funeral homes and cremation providers in your state. Our directory includes independent funeral directors, 
            cremation services, and memorial chapels offering compassionate care with complete service details and contact information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stateData.map((state) => (
              <Link
                key={state.abbreviation}
                href={`/funeral-homes/${state.abbreviation.toLowerCase()}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-2 border-transparent hover:border-blue-500"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-blue-600">{state.abbreviation}</span>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{state.name}</h3>
                <p className="text-sm text-gray-600">{state.count} funeral homes</p>
                <p className="text-sm text-gray-600">{state.cityCount} cities</p>
              </Link>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Benefits of Using the Evermore Directory
            </h2>
            <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Discover why families across America trust our directory to find compassionate funeral homes and cremation services
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Compare Local Funeral Homes
                </h3>
                <p className="text-gray-600">
                  The Evermore Directory helps you compare funeral homes and cremation providers nationwide, allowing you to find 
                  services that match your needs and budget for burial, cremation, or memorial planning.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Verified Contact Information
                </h3>
                <p className="text-gray-600">
                  All funeral homes in our directory are verified with accurate contact information, addresses, 
                  and service details to ensure you can reach trusted local providers when you need them most.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Nationwide Coverage
                </h3>
                <p className="text-gray-600">
                  Access funeral homes and cremation services in all 50 states, from major cities to small towns, 
                  ensuring you find compassionate care wherever you need it.
                </p>
              </div>
            </div>
          </div>

          {/* Complete Guide Section */}
          <div className="mb-20 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Guide to Finding Funeral Homes in America
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4 leading-relaxed">
                The Evermore Directory provides comprehensive coverage of funeral homes and cremation services across the United States. 
                Our nationwide directory connects families with compassionate funeral directors, memorial chapels, and cremation providers 
                in every state. Whether you're in a major metropolitan area or a rural community, you'll find licensed funeral service 
                providers who can assist with burial arrangements, cremation services, memorial planning, pre-arrangements, and grief support.
              </p>
              <p className="mb-4 leading-relaxed">
                Funeral homes across America offer a full range of services including traditional funerals with viewing, direct burial, 
                cremation services, memorial services, celebration of life ceremonies, green burial options, and pre-planning services. 
                Many funeral directors are experienced with specific cultural and religious traditions and can provide personalized care 
                that honors your family's wishes and values.
              </p>
              <p className="leading-relaxed">
                Browse our state-by-state directory to find funeral homes near you. Each state listing includes cities with funeral service 
                providers, and each city page features verified contact information, service offerings, and location details to help you 
                make informed decisions during a difficult time. From family-owned funeral homes to national providers, cremation specialists 
                to full-service memorial chapels, our directory helps you find the right provider for your needs.
              </p>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mb-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tips for Choosing a Funeral Home
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Contact multiple funeral homes to compare pricing - costs can vary significantly between providers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Request the General Price List (GPL) from each funeral home - they're required by federal law to provide it</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Ask funeral directors about all available options including burial, cremation, memorial services, and green burial alternatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Inquire about pre-planning services if you're arranging future arrangements for yourself or loved ones</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Check if the funeral home offers grief counseling, memorial products, and ongoing family support services</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Verify the funeral home's state licensing and ask about their experience with specific cultural or religious traditions</span>
              </li>
            </ul>
          </div>

          {/* Types of Funeral Homes Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Types of Funeral Service Providers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Independent Funeral Homes
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
                  National Providers
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span>Major funeral home chains with nationwide locations</span>
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
              Common Services Offered by Funeral Homes
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Tip for Families</h3>
              <p className="text-gray-700 leading-relaxed">
                When contacting funeral homes, don't hesitate to ask detailed questions about their pricing, services, and experience 
                with your specific needs. Reputable funeral directors will be transparent about costs and happy to explain all available 
                options without pressure. Taking time to compare services from multiple funeral homes ensures you make the best decision 
                for your family during this difficult time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
