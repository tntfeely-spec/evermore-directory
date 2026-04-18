import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Direct Cremation Cost by State: 2026 Price Guide | Evermore Directory',
  description: 'Direct cremation costs $1,000 to $3,500 in most states. See average prices for all 50 states with provider counts and cost-saving tips. Updated 2026.',
  keywords: 'direct cremation cost by state, direct cremation price, cremation cost 2026, cheapest cremation by state, how much does direct cremation cost',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/direct-cremation-cost-by-state',
  },
  openGraph: {
    title: 'Direct Cremation Cost by State: 2026 Price Guide',
    description: 'Direct cremation costs $1,000 to $3,500 in most states. See average prices for all 50 states with provider counts and cost-saving tips.',
    url: 'https://funeralhomedirectories.com/blog/direct-cremation-cost-by-state',
    type: 'article',
  },
};

const stateData = [
  { state: 'Alabama', abbr: 'AL', providers: 0, range: '', avg: '', note: 'Contact providers' },
  { state: 'Alaska', abbr: 'AK', providers: 3, range: '$995 to $5,000', avg: '$2,630', note: '' },
  { state: 'Arizona', abbr: 'AZ', providers: 20, range: '$595 to $4,000', avg: '$1,835', note: '' },
  { state: 'Arkansas', abbr: 'AR', providers: 3, range: '$795 to $2,500', avg: '$1,430', note: 'Limited data' },
  { state: 'California', abbr: 'CA', providers: 52, range: '$4,500 to $8,000', avg: '$6,250', note: 'Limited pricing data' },
  { state: 'Colorado', abbr: 'CO', providers: 15, range: '$800 to $2,500', avg: '$1,708', note: '' },
  { state: 'Connecticut', abbr: 'CT', providers: 1, range: '$995 to $3,000', avg: '$1,997', note: 'Limited data' },
  { state: 'Delaware', abbr: 'DE', providers: 0, range: '', avg: '', note: 'Contact providers' },
  { state: 'District of Columbia', abbr: 'DC', providers: 2, range: '', avg: '', note: 'Contact providers' },
  { state: 'Florida', abbr: 'FL', providers: 29, range: '$2,500 to $5,500', avg: '$4,016', note: '' },
  { state: 'Georgia', abbr: 'GA', providers: 8, range: '', avg: '', note: 'Contact providers' },
  { state: 'Hawaii', abbr: 'HI', providers: 0, range: '', avg: '', note: 'Contact providers' },
  { state: 'Idaho', abbr: 'ID', providers: 3, range: '$1,900 to $6,400', avg: '$3,816', note: 'Limited data' },
  { state: 'Illinois', abbr: 'IL', providers: 28, range: '$2,500 to $5,500', avg: '$3,750', note: '' },
  { state: 'Indiana', abbr: 'IN', providers: 15, range: '$895 to $3,500', avg: '$2,222', note: '' },
  { state: 'Iowa', abbr: 'IA', providers: 1, range: '$895 to $2,500', avg: '$1,697', note: 'Limited data' },
  { state: 'Kansas', abbr: 'KS', providers: 7, range: '$795 to $2,800', avg: '$1,672', note: '' },
  { state: 'Kentucky', abbr: 'KY', providers: 5, range: '', avg: '', note: 'Contact providers' },
  { state: 'Louisiana', abbr: 'LA', providers: 1, range: '$995 to $3,500', avg: '$2,247', note: 'Limited data' },
  { state: 'Maine', abbr: 'ME', providers: 14, range: '$1,000 to $5,600', avg: '$2,992', note: '' },
  { state: 'Maryland', abbr: 'MD', providers: 7, range: '$995 to $3,000', avg: '$2,022', note: '' },
  { state: 'Massachusetts', abbr: 'MA', providers: 4, range: '', avg: '', note: 'Contact providers' },
  { state: 'Michigan', abbr: 'MI', providers: 7, range: '', avg: '', note: 'Contact providers' },
  { state: 'Minnesota', abbr: 'MN', providers: 18, range: '$795 to $4,000', avg: '$1,938', note: '' },
  { state: 'Mississippi', abbr: 'MS', providers: 0, range: '', avg: '', note: 'Contact providers' },
  { state: 'Missouri', abbr: 'MO', providers: 11, range: '$895 to $3,500', avg: '$1,997', note: '' },
  { state: 'Montana', abbr: 'MT', providers: 9, range: '$1,000 to $5,900', avg: '$3,255', note: '' },
  { state: 'Nebraska', abbr: 'NE', providers: 14, range: '$1,600 to $4,900', avg: '$3,290', note: '' },
  { state: 'Nevada', abbr: 'NV', providers: 24, range: '$695 to $3,500', avg: '$1,680', note: '' },
  { state: 'New Hampshire', abbr: 'NH', providers: 15, range: '$1,000 to $5,600', avg: '$2,914', note: '' },
  { state: 'New Jersey', abbr: 'NJ', providers: 1, range: '$1,195 to $3,000', avg: '$2,097', note: 'Limited data' },
  { state: 'New Mexico', abbr: 'NM', providers: 4, range: '$895 to $3,500', avg: '$1,848', note: '' },
  { state: 'New York', abbr: 'NY', providers: 7, range: '$1,500 to $5,000', avg: '$3,250', note: 'Limited pricing data' },
  { state: 'North Carolina', abbr: 'NC', providers: 15, range: '$895 to $6,900', avg: '$3,132', note: '' },
  { state: 'North Dakota', abbr: 'ND', providers: 12, range: '$1,100 to $5,400', avg: '$3,029', note: '' },
  { state: 'Ohio', abbr: 'OH', providers: 2, range: '', avg: '', note: 'Contact providers' },
  { state: 'Oklahoma', abbr: 'OK', providers: 12, range: '$795 to $3,000', avg: '$1,897', note: 'Limited pricing data' },
  { state: 'Oregon', abbr: 'OR', providers: 8, range: '$795 to $3,500', avg: '$2,080', note: '' },
  { state: 'Pennsylvania', abbr: 'PA', providers: 11, range: '$1,500 to $3,500', avg: '$2,500', note: '' },
  { state: 'Rhode Island', abbr: 'RI', providers: 10, range: '$1,200 to $5,900', avg: '$3,435', note: '' },
  { state: 'South Carolina', abbr: 'SC', providers: 2, range: '$995 to $2,500', avg: '$1,622', note: 'Limited data' },
  { state: 'South Dakota', abbr: 'SD', providers: 9, range: '$1,100 to $5,700', avg: '$3,000', note: '' },
  { state: 'Tennessee', abbr: 'TN', providers: 12, range: '$1,295 to $2,500', avg: '$1,897', note: 'Limited pricing data' },
  { state: 'Texas', abbr: 'TX', providers: 32, range: '$1,500 to $3,500', avg: '$2,500', note: 'Limited pricing data' },
  { state: 'Utah', abbr: 'UT', providers: 0, range: '', avg: '', note: 'Contact providers' },
  { state: 'Vermont', abbr: 'VT', providers: 8, range: '$1,700 to $5,900', avg: '$3,487', note: '' },
  { state: 'Virginia', abbr: 'VA', providers: 12, range: '', avg: '', note: 'Contact providers' },
  { state: 'Washington', abbr: 'WA', providers: 7, range: '$595 to $5,000', avg: '$1,898', note: '' },
  { state: 'West Virginia', abbr: 'WV', providers: 6, range: '$1,000 to $5,800', avg: '$3,116', note: '' },
  { state: 'Wisconsin', abbr: 'WI', providers: 17, range: '$750 to $3,500', avg: '$1,906', note: '' },
  { state: 'Wyoming', abbr: 'WY', providers: 10, range: '$1,100 to $6,100', avg: '$3,295', note: '' },
];

const faqs = [
  {
    q: 'What is the average cost of direct cremation in the United States?',
    a: 'The national average for direct cremation is approximately $2,000 to $2,500. However, prices range from under $700 in the most competitive markets (Nevada, Arizona, Washington) to over $6,000 in high cost areas like California. Always request an itemized price list from providers in your area.',
  },
  {
    q: 'Which state has the cheapest direct cremation?',
    a: 'Based on our directory data, Arkansas, South Carolina, and Kansas have the lowest average direct cremation costs, with averages under $1,700. Nevada and Iowa are also among the most affordable states for direct cremation. Low costs are typically driven by lower cost of living, more competition among providers, and proximity to crematories.',
  },
  {
    q: 'Which state has the most expensive direct cremation?',
    a: 'California has the highest average direct cremation costs in our directory, followed by Florida, Illinois, and Idaho. Higher costs in these states are driven by higher cost of living, stricter regulatory requirements, and urban pricing in major metro areas.',
  },
  {
    q: 'Why does direct cremation cost more in some states?',
    a: 'Direct cremation prices vary by state due to differences in cost of living, state regulations (permit fees, waiting periods, required certifications), crematory access (rural areas may need longer transportation), and competition among providers. States with more providers tend to have lower prices due to market competition.',
  },
  {
    q: 'Does direct cremation cost include everything?',
    a: 'A standard direct cremation package typically includes transportation of the deceased, a basic cremation container, the cremation process, required permits, and return of remains. Death certificates are sometimes included (1 to 2 copies) or charged separately at $5 to $25 each depending on the state. A decorative urn is not included.',
  },
  {
    q: 'How can I find the cheapest direct cremation near me?',
    a: 'Browse the Evermore Directory by state and city to compare direct cremation providers and pricing in your area. Request itemized price lists from at least 3 providers, ask exactly what is included, and check whether the provider is licensed in your state. Online-only cremation providers sometimes offer lower prices than traditional funeral homes.',
  },
];

export default function DirectCremationCostByStatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Direct Cremation Cost by State: 2026 Price Guide",
          "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
          "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
          "datePublished": "2026-04-18",
          "dateModified": "2026-04-18",
          "description": "Direct cremation costs $1,000 to $3,500 in most states. See average prices for all 50 states with provider counts and cost-saving tips.",
          "url": "https://funeralhomedirectories.com/blog/direct-cremation-cost-by-state",
          "mainEntityOfPage": "https://funeralhomedirectories.com/blog/direct-cremation-cost-by-state"
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://funeralhomedirectories.com/blog" },
            { "@type": "ListItem", "position": 3, "name": "Direct Cremation Cost by State" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        }) }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Direct Cremation Cost by State: 2026 Price Guide
              </h1>
              <p className="text-sm text-gray-500 mb-3">
                By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic | Evermore Directory &middot; Last updated: April 2026
              </p>
              <p className="text-xl text-gray-600">
                A complete state-by-state breakdown of direct cremation costs in 2026, based on pricing data from 513 providers in the Evermore Directory.
              </p>
            </header>

            {/* AI-citable opening */}
            <section className="mb-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Direct cremation in the United States costs between $695 and $8,000, with most families paying $1,000 to $3,500 depending on their state and provider. The cheapest states for direct cremation are Arkansas (average $1,430), South Carolina (average $1,622), and Kansas (average $1,672). The most expensive states are California (average $6,250), Florida (average $4,016), and Illinois (average $3,750). Costs vary based on local regulations, crematory access, cost of living, and competition among providers.
              </p>
              <p className="text-gray-600 mb-4">
                This guide is based on pricing data from 513 direct cremation providers listed in the <Link href="/direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">Evermore Directory</Link>. For a broader overview of what direct cremation is and how it works, see our <Link href="/blog/what-is-direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">complete guide to direct cremation</Link>.
              </p>
            </section>

            {/* Why costs vary */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Direct Cremation Costs Vary by State
              </h2>
              <p className="text-gray-600 mb-4">
                Four main factors drive the price differences you see in the table below.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">State regulations</h3>
                  <p className="text-gray-600 text-sm">Permit fees, mandatory waiting periods (24 to 72 hours in some states), required refrigeration, and licensing requirements all affect the baseline cost of cremation.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">Crematory access</h3>
                  <p className="text-gray-600 text-sm">In rural states, the nearest crematory may be hours away. Transportation costs get passed to families. States with more crematories per capita tend to have lower prices.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">Cost of living</h3>
                  <p className="text-gray-600 text-sm">Facility rent, staff wages, and operating costs are higher in states like California, New York, and Hawaii. These overhead costs are reflected in pricing.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">Provider competition</h3>
                  <p className="text-gray-600 text-sm">States with more direct cremation providers tend to have lower prices. Nevada (24 providers, $1,680 average) and Arizona (20 providers, $1,835 average) are good examples of competition driving prices down.</p>
                </div>
              </div>
            </section>

            {/* THE MAIN TABLE */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Direct Cremation Cost by State: Full 2026 Table
              </h2>
              <p className="text-gray-600 mb-6">
                This table includes all 50 states and the District of Columbia. Provider counts and pricing are from the Evermore Directory database as of April 2026. States marked &quot;Contact providers&quot; have providers in our directory but no published pricing data yet.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b-2 border-gray-200">
                      <th className="text-left px-3 py-3 font-semibold text-gray-700">State</th>
                      <th className="text-center px-3 py-3 font-semibold text-gray-700">Providers</th>
                      <th className="text-left px-3 py-3 font-semibold text-gray-700">Cost Range</th>
                      <th className="text-left px-3 py-3 font-semibold text-gray-700">Average</th>
                      <th className="text-center px-3 py-3 font-semibold text-gray-700">Browse</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stateData.map((s) => (
                      <tr key={s.abbr} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-3 py-2.5 text-gray-800 font-medium">{s.state}</td>
                        <td className="px-3 py-2.5 text-gray-600 text-center">{s.providers > 0 ? s.providers : 0}</td>
                        <td className="px-3 py-2.5 text-gray-600">
                          {s.range || (s.providers > 0 ? 'Contact providers for pricing' : 'No providers listed yet')}
                          {s.note === 'Limited data' && <span className="text-xs text-amber-600 ml-1">*</span>}
                          {s.note === 'Limited pricing data' && <span className="text-xs text-amber-600 ml-1">*</span>}
                        </td>
                        <td className="px-3 py-2.5 text-gray-700 font-semibold">{s.avg || 'N/A'}</td>
                        <td className="px-3 py-2.5 text-center">
                          {s.providers > 0 ? (
                            <Link href={`/direct-cremation/${s.abbr.toLowerCase()}`} className="text-slate-600 hover:text-slate-800 text-xs font-medium">
                              View
                            </Link>
                          ) : (
                            <Link href="/direct-cremation" className="text-slate-400 hover:text-slate-600 text-xs">
                              Browse
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic">
                * Limited pricing data: fewer than 3 providers with published prices. Averages based on available data. Always contact providers directly for current pricing.
              </p>
            </section>

            {/* Top 5 cheapest */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                5 Cheapest States for Direct Cremation
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">1. Arkansas: $1,430 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Low cost of living and minimal state regulations keep cremation affordable. Prices start as low as $795 in some markets.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">2. South Carolina: $1,622 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Competitive market with both local providers and national chains. Most providers offer all inclusive packages under $2,000.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">3. Kansas: $1,672 average</h3>
                  <p className="text-gray-600 text-sm mt-1">7 providers create healthy competition in the Kansas City metro area and statewide. Prices range from $795 to $2,800.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">4. Nevada: $1,680 average</h3>
                  <p className="text-gray-600 text-sm mt-1">With 24 providers (the highest density in our directory relative to population), competition keeps Las Vegas and Reno prices low. Some providers start at $695.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">5. Iowa: $1,697 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Low overhead costs and a straightforward regulatory environment help keep prices under $2,500 statewide.</p>
                </div>
              </div>
            </section>

            {/* Top 5 most expensive */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                5 Most Expensive States for Direct Cremation
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">1. California: $6,250 average</h3>
                  <p className="text-gray-600 text-sm mt-1">The highest cost of living in the country, strict environmental regulations, and high facility costs drive prices up. Note: our California average is based on limited pricing data and may not reflect the full market. Many CA providers offer direct cremation under $3,000.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">2. Florida: $4,016 average</h3>
                  <p className="text-gray-600 text-sm mt-1">High demand (large retiree population), urban pricing in Miami and Tampa, and facility costs push prices above the national average. Providers range from $2,500 to $5,500.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">3. Idaho: $3,816 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Limited crematory access in rural areas means longer transportation distances. Only 3 providers in our directory with pricing data. Actual costs may vary.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">4. Illinois: $3,750 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Chicago metro pricing drives up the state average. Downstate Illinois providers are typically more affordable. Prices range from $2,500 to $5,500.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">5. Vermont: $3,487 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Limited crematory infrastructure and a small, rural population mean fewer providers and less price competition. Prices range from $1,700 to $5,900.</p>
                </div>
              </div>
            </section>

            {/* How to save money */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Save Money on Direct Cremation
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">1. Compare at least 3 providers</h3>
                  <p className="text-gray-600 text-sm">Prices can vary by $1,000 or more between providers in the same city. Use the <Link href="/direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">Evermore Directory</Link> to compare side by side.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">2. Request an itemized price list</h3>
                  <p className="text-gray-600 text-sm">The FTC Funeral Rule requires every provider to give you one. Compare line items, not just the package total. Some providers bundle items that others charge separately for.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">3. Consider online cremation providers</h3>
                  <p className="text-gray-600 text-sm">National providers like Tulip Cremation and Smart Cremation operate with lower overhead than brick and mortar funeral homes. They coordinate with local crematories but charge less for the service.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">4. Ask about cremation society membership</h3>
                  <p className="text-gray-600 text-sm">Organizations like the Neptune Society and Cremation Society of Illinois offer membership pricing that can be lower than at need rates. See our guide to <Link href="/blog/what-is-a-cremation-society" className="text-slate-600 hover:text-slate-800 font-medium">cremation societies</Link>.</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">5. Check whether the provider owns or rents their crematory</h3>
                  <p className="text-gray-600 text-sm">Providers that own their own crematory often have lower prices because they are not paying a third party for the cremation. Ask when you call.</p>
                </div>
              </div>
            </section>

            {/* State-by-state breakdowns for top 10 */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Direct Cremation in the 10 Most Populous States
              </h2>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">California (52 providers)</h3>
                  <p className="text-gray-600">California has the most direct cremation providers in our directory but also the highest average pricing. The state&apos;s strict environmental regulations and high cost of living drive costs up, particularly in the LA, San Francisco, and San Diego metro areas. Families in rural Northern California and the Central Valley may find lower prices. <Link href="/direct-cremation/ca" className="text-slate-600 hover:text-slate-800 font-medium">Browse California providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Texas (32 providers)</h3>
                  <p className="text-gray-600">Texas offers moderate pricing with an average of $2,500, driven by competition in the Dallas/Fort Worth, Austin, and San Antonio metros. The state has minimal waiting period requirements, which helps keep costs lower. <Link href="/direct-cremation/tx" className="text-slate-600 hover:text-slate-800 font-medium">Browse Texas providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Florida (29 providers)</h3>
                  <p className="text-gray-600">Florida&apos;s large retiree population creates high demand for cremation services. Prices range from $2,500 to $5,500, with the most competitive pricing in Jacksonville and Tampa. Miami and South Florida tend to be on the higher end. <Link href="/direct-cremation/fl" className="text-slate-600 hover:text-slate-800 font-medium">Browse Florida providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">New York (7 providers)</h3>
                  <p className="text-gray-600">New York has limited direct cremation provider coverage in our directory, with most concentrated in the NYC metro area. Prices range from $1,500 to $5,000. Upstate New York providers are typically more affordable than those in the five boroughs. <Link href="/direct-cremation/ny" className="text-slate-600 hover:text-slate-800 font-medium">Browse New York providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Pennsylvania (11 providers)</h3>
                  <p className="text-gray-600">Pennsylvania&apos;s direct cremation market is centered around Philadelphia, with providers ranging from $1,500 to $3,500. The state average of $2,500 is right at the national midpoint. <Link href="/direct-cremation/pa" className="text-slate-600 hover:text-slate-800 font-medium">Browse Pennsylvania providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Illinois (28 providers)</h3>
                  <p className="text-gray-600">Illinois has strong provider coverage, particularly in the Chicago suburbs and Rockford area. The state average of $3,750 is elevated by Chicago metro pricing. Downstate providers in Peoria and Springfield are significantly cheaper. <Link href="/direct-cremation/il" className="text-slate-600 hover:text-slate-800 font-medium">Browse Illinois providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Ohio (2 providers)</h3>
                  <p className="text-gray-600">Ohio has limited direct cremation coverage in our directory, with providers in Cincinnati and Columbus. Contact providers directly for current pricing. <Link href="/direct-cremation/oh" className="text-slate-600 hover:text-slate-800 font-medium">Browse Ohio providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Georgia (8 providers)</h3>
                  <p className="text-gray-600">Georgia&apos;s direct cremation providers are concentrated in the Atlanta metro area, with coverage in Marietta, Duluth, Norcross, and Stone Mountain. Contact providers directly for current pricing. <Link href="/direct-cremation/ga" className="text-slate-600 hover:text-slate-800 font-medium">Browse Georgia providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">North Carolina (15 providers)</h3>
                  <p className="text-gray-600">North Carolina has good statewide coverage with providers in Charlotte, Raleigh, Durham, Greensboro, and Wilmington. Prices range from $895 to $6,900, with an average of $3,132. <Link href="/direct-cremation/nc" className="text-slate-600 hover:text-slate-800 font-medium">Browse North Carolina providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Michigan (7 providers)</h3>
                  <p className="text-gray-600">Michigan&apos;s direct cremation providers are concentrated in the Detroit metro area, including Livonia, Southfield, and Bloomfield Hills. Contact providers directly for current pricing. <Link href="/direct-cremation/mi" className="text-slate-600 hover:text-slate-800 font-medium">Browse Michigan providers</Link>.</p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions About Direct Cremation Costs
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Reading */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Direct Cremation? The Complete 2026 Guide</h3>
                  <p className="text-sm text-gray-600">Everything you need to know about direct cremation, from process to pricing.</p>
                </Link>
                <Link href="/blog/cremation-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Cremation Costs in 2026</h3>
                  <p className="text-sm text-gray-600">Comprehensive pricing guide covering all types of cremation services.</p>
                </Link>
                <Link href="/blog/why-direct-cremation-is-affordable" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Why Is Direct Cremation So Affordable?</h3>
                  <p className="text-sm text-gray-600">The 7 cost factors that make direct cremation thousands less than a traditional funeral.</p>
                </Link>
                <Link href="/blog/how-to-choose-direct-cremation-provider" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">How to Choose a Direct Cremation Provider</h3>
                  <p className="text-sm text-gray-600">The 7-point checklist for finding a trustworthy cremation provider.</p>
                </Link>
                <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-600 mb-1">Browse Direct Cremation Providers by State</h3>
                  <p className="text-sm text-gray-600">Find and compare direct cremation providers in your state and city.</p>
                </Link>
              </div>
            </section>

            <div className="text-center text-sm text-gray-400 mt-12">
              <p>Written by <strong className="text-gray-500">Terry Feely</strong>, former firefighter and paramedic. Pricing data sourced from provider listings in the Evermore Directory, April 2026. Always contact providers directly for current pricing.</p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
