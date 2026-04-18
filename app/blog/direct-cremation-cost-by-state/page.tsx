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

/*
 * Data methodology:
 * - Averages are shown only for states with 5+ price data points AND 30%+ pricing
 *   coverage across providers. States below either threshold show the national
 *   range ($1,000 to $3,500) and are flagged "limited" so readers contact
 *   providers directly for quotes.
 * - 21 states have valid calculated averages. 18 states are flagged limited.
 *   7 states have providers but no published pricing. 5 states/territories have
 *   no providers listed yet.
 */
const stateData = [
  { state: 'Alabama', abbr: 'AL', providers: 0, range: '', avg: '', note: 'none' },
  { state: 'Alaska', abbr: 'AK', providers: 3, range: '$995 to $5,000', avg: '$2,630', note: '' },
  { state: 'Arizona', abbr: 'AZ', providers: 20, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Arkansas', abbr: 'AR', providers: 3, range: '$795 to $2,500', avg: '$1,430', note: '' },
  { state: 'California', abbr: 'CA', providers: 52, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Colorado', abbr: 'CO', providers: 15, range: '$800 to $2,500', avg: '$1,708', note: '' },
  { state: 'Connecticut', abbr: 'CT', providers: 1, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Delaware', abbr: 'DE', providers: 0, range: '', avg: '', note: 'none' },
  { state: 'District of Columbia', abbr: 'DC', providers: 2, range: '', avg: '', note: 'no_price' },
  { state: 'Florida', abbr: 'FL', providers: 29, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Georgia', abbr: 'GA', providers: 8, range: '', avg: '', note: 'no_price' },
  { state: 'Hawaii', abbr: 'HI', providers: 0, range: '', avg: '', note: 'none' },
  { state: 'Idaho', abbr: 'ID', providers: 3, range: '$1,900 to $6,400', avg: '$3,816', note: '' },
  { state: 'Illinois', abbr: 'IL', providers: 28, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Indiana', abbr: 'IN', providers: 15, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Iowa', abbr: 'IA', providers: 1, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Kansas', abbr: 'KS', providers: 7, range: '$795 to $2,800', avg: '$1,672', note: '' },
  { state: 'Kentucky', abbr: 'KY', providers: 5, range: '', avg: '', note: 'no_price' },
  { state: 'Louisiana', abbr: 'LA', providers: 1, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Maine', abbr: 'ME', providers: 14, range: '$1,000 to $5,600', avg: '$2,992', note: '' },
  { state: 'Maryland', abbr: 'MD', providers: 7, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Massachusetts', abbr: 'MA', providers: 4, range: '', avg: '', note: 'no_price' },
  { state: 'Michigan', abbr: 'MI', providers: 7, range: '', avg: '', note: 'no_price' },
  { state: 'Minnesota', abbr: 'MN', providers: 18, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Mississippi', abbr: 'MS', providers: 0, range: '', avg: '', note: 'none' },
  { state: 'Missouri', abbr: 'MO', providers: 11, range: '$895 to $3,500', avg: '$1,997', note: '' },
  { state: 'Montana', abbr: 'MT', providers: 9, range: '$1,000 to $5,900', avg: '$3,255', note: '' },
  { state: 'Nebraska', abbr: 'NE', providers: 14, range: '$1,600 to $4,900', avg: '$3,290', note: '' },
  { state: 'Nevada', abbr: 'NV', providers: 24, range: '$695 to $3,500', avg: '$1,680', note: '' },
  { state: 'New Hampshire', abbr: 'NH', providers: 15, range: '$1,000 to $5,600', avg: '$2,914', note: '' },
  { state: 'New Jersey', abbr: 'NJ', providers: 1, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'New Mexico', abbr: 'NM', providers: 4, range: '$895 to $3,500', avg: '$1,848', note: '' },
  { state: 'New York', abbr: 'NY', providers: 7, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'North Carolina', abbr: 'NC', providers: 15, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'North Dakota', abbr: 'ND', providers: 12, range: '$1,100 to $5,400', avg: '$3,029', note: '' },
  { state: 'Ohio', abbr: 'OH', providers: 2, range: '', avg: '', note: 'no_price' },
  { state: 'Oklahoma', abbr: 'OK', providers: 12, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Oregon', abbr: 'OR', providers: 8, range: '$795 to $3,500', avg: '$2,080', note: '' },
  { state: 'Pennsylvania', abbr: 'PA', providers: 11, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Rhode Island', abbr: 'RI', providers: 10, range: '$1,200 to $5,900', avg: '$3,435', note: '' },
  { state: 'South Carolina', abbr: 'SC', providers: 2, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'South Dakota', abbr: 'SD', providers: 9, range: '$1,100 to $5,700', avg: '$3,000', note: '' },
  { state: 'Tennessee', abbr: 'TN', providers: 12, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Texas', abbr: 'TX', providers: 32, range: '$1,000 to $3,500', avg: '', note: 'limited' },
  { state: 'Utah', abbr: 'UT', providers: 0, range: '', avg: '', note: 'none' },
  { state: 'Vermont', abbr: 'VT', providers: 8, range: '$1,700 to $5,900', avg: '$3,487', note: '' },
  { state: 'Virginia', abbr: 'VA', providers: 12, range: '', avg: '', note: 'no_price' },
  { state: 'Washington', abbr: 'WA', providers: 7, range: '$595 to $5,000', avg: '$1,898', note: '' },
  { state: 'West Virginia', abbr: 'WV', providers: 6, range: '$1,000 to $5,800', avg: '$3,116', note: '' },
  { state: 'Wisconsin', abbr: 'WI', providers: 17, range: '$750 to $3,500', avg: '$1,906', note: '' },
  { state: 'Wyoming', abbr: 'WY', providers: 10, range: '$1,100 to $6,100', avg: '$3,295', note: '' },
];

const faqs = [
  {
    q: 'What is the average cost of direct cremation in the United States?',
    a: 'Most families pay between $1,000 and $3,500 for direct cremation. The exact cost depends on your state, your city, and which provider you choose. Prices start under $700 in the most competitive markets like Nevada and Washington, and can exceed $5,000 in high cost areas. Always request an itemized price list from providers in your area.',
  },
  {
    q: 'Which states have the cheapest direct cremation?',
    a: 'Among states with sufficient pricing data in our directory, Arkansas ($1,430 average), Kansas ($1,672 average), and Nevada ($1,680 average) have the lowest costs. Low prices are typically driven by lower cost of living, more competition among providers, and proximity to crematories.',
  },
  {
    q: 'Which states have the most expensive direct cremation?',
    a: 'Among states with sufficient pricing data, Vermont ($3,487 average), Idaho ($3,816 average), and Rhode Island ($3,435 average) have the highest averages. Higher costs in these states are driven by limited crematory infrastructure, rural transportation distances, or high cost of living.',
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
    a: 'Browse the Evermore Directory by state and city to compare direct cremation providers in your area. Request itemized price lists from at least 3 providers, ask exactly what is included, and check whether the provider is licensed in your state. Online-only cremation providers sometimes offer lower prices than traditional funeral homes.',
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
                Direct cremation in the United States typically costs between $1,000 and $3,500, with exact pricing depending on the state, the provider, and what is included in the package. Among states where our directory has sufficient pricing data, the most affordable include Arkansas (average $1,430), Kansas (average $1,672), and Nevada (average $1,680). States with higher averages include Vermont ($3,487), Idaho ($3,816), and Rhode Island ($3,435), where limited crematory infrastructure and rural geography drive costs up.
              </p>
              <p className="text-gray-600 mb-4">
                This guide is based on published pricing from 513 direct cremation providers listed in the <Link href="/direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">Evermore Directory</Link>. For a broader overview of what direct cremation is and how it works, see our <Link href="/blog/what-is-direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">complete guide to direct cremation</Link>.
              </p>
            </section>

            {/* Data methodology note */}
            <section className="mb-10 bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-2">About this pricing data</h3>
              <p className="text-gray-600 text-sm mb-2">
                Direct cremation pricing varies widely by provider, package, and location. The averages in this guide are calculated from published price ranges where available. We only display a calculated average for states where at least 5 price data points exist and at least 30% of listed providers have published pricing. States that do not meet both thresholds show the national range ($1,000 to $3,500) instead, to avoid misleading readers with incomplete data.
              </p>
              <p className="text-gray-600 text-sm">
                For accurate, current pricing, always contact providers directly and request an itemized General Price List. Prices in this guide reflect published ranges as of April 2026 and may not include all fees.
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
                  <p className="text-gray-600 text-sm">States with more direct cremation providers tend to have lower prices. Nevada (24 providers, $1,680 average) and Kansas (7 providers, $1,672 average) are good examples of competition driving prices down.</p>
                </div>
              </div>
            </section>

            {/* THE MAIN TABLE */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Direct Cremation Cost by State: Full 2026 Table
              </h2>
              <p className="text-gray-600 mb-6">
                This table includes all 50 states and the District of Columbia. Provider counts and pricing are from the Evermore Directory as of April 2026. States marked with a dagger (&dagger;) have limited pricing data; the national range is shown instead of a calculated average. See provider websites for actual quotes.
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
                          {s.note === 'none' && 'No providers listed yet'}
                          {s.note === 'no_price' && 'Contact providers for pricing'}
                          {s.note === 'limited' && <>{s.range} <span className="text-amber-600">&dagger;</span></>}
                          {s.note === '' && s.range}
                        </td>
                        <td className="px-3 py-2.5 text-gray-700 font-semibold">
                          {s.avg || (s.note === 'limited' ? <span className="text-gray-400 font-normal text-xs">See provider websites</span> : <span className="text-gray-400 font-normal">N/A</span>)}
                        </td>
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
                &dagger; Limited pricing data: fewer than 5 price data points or less than 30% of providers have published pricing. National range shown instead. Contact providers directly for current quotes.
              </p>
            </section>

            {/* Top 5 cheapest — only from VALID states */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                5 Most Affordable States for Direct Cremation
              </h2>
              <p className="text-gray-600 mb-4 text-sm">Based on states with sufficient pricing data in our directory (5+ price points, 30%+ provider coverage).</p>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">1. Arkansas: $1,430 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Low cost of living and minimal state regulations keep cremation affordable. Prices start as low as $795 in some markets.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">2. Kansas: $1,672 average</h3>
                  <p className="text-gray-600 text-sm mt-1">7 providers create healthy competition in the Kansas City metro area and statewide. Prices range from $795 to $2,800.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">3. Nevada: $1,680 average</h3>
                  <p className="text-gray-600 text-sm mt-1">With 24 providers, Nevada has strong competition that keeps Las Vegas and Reno prices low. Some providers start at $695.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">4. Colorado: $1,708 average</h3>
                  <p className="text-gray-600 text-sm mt-1">15 providers across the Denver metro and Colorado Springs offer prices from $800 to $2,500, keeping the statewide average well below the national midpoint.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">5. New Mexico: $1,848 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Low overhead costs and a straightforward regulatory environment help keep prices under $3,500 statewide. Prices start at $895.</p>
                </div>
              </div>
            </section>

            {/* Top 5 most expensive — only from VALID states */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                5 Highest Cost States for Direct Cremation
              </h2>
              <p className="text-gray-600 mb-4 text-sm">Based on states with sufficient pricing data in our directory.</p>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">1. Idaho: $3,816 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Limited crematory access in rural areas means longer transportation distances. Only 3 providers in our directory, all with published pricing. Range: $1,900 to $6,400.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">2. Vermont: $3,487 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Limited crematory infrastructure and a small, rural population mean fewer providers and less price competition. Prices range from $1,700 to $5,900.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">3. Rhode Island: $3,435 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Despite having 10 providers, costs remain elevated due to the Northeast cost of living and regulatory environment. Range: $1,200 to $5,900.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">4. Wyoming: $3,295 average</h3>
                  <p className="text-gray-600 text-sm mt-1">Rural geography and limited crematory access drive transportation costs. 10 providers with pricing data, ranging from $1,100 to $6,100.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800">5. Nebraska: $3,290 average</h3>
                  <p className="text-gray-600 text-sm mt-1">14 providers across the state, with prices from $1,600 to $4,900. Urban Omaha and Lincoln prices tend to be lower than rural areas.</p>
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
                  <p className="text-gray-600">California has the most direct cremation providers in our directory but limited published pricing data (only 2% of providers list prices). The state&apos;s strict environmental regulations and high cost of living likely drive costs above the national average, particularly in the LA, San Francisco, and San Diego metro areas. Contact providers directly for current quotes. <Link href="/direct-cremation/ca" className="text-slate-600 hover:text-slate-800 font-medium">Browse California providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Texas (32 providers)</h3>
                  <p className="text-gray-600">Texas has the second most providers in our directory, concentrated in the Dallas/Fort Worth, Austin, and San Antonio metros. Published pricing data is limited (3% coverage), but the state&apos;s minimal waiting period requirements and competitive market suggest prices near the national range of $1,000 to $3,500. <Link href="/direct-cremation/tx" className="text-slate-600 hover:text-slate-800 font-medium">Browse Texas providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Florida (29 providers)</h3>
                  <p className="text-gray-600">Florida&apos;s large retiree population creates strong demand for cremation services. Our directory lists 29 providers across Jacksonville, Tampa, Miami, and other metros. Published pricing coverage is limited (10%), so families should contact providers directly for current quotes. <Link href="/direct-cremation/fl" className="text-slate-600 hover:text-slate-800 font-medium">Browse Florida providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">New York (7 providers)</h3>
                  <p className="text-gray-600">New York has limited direct cremation provider coverage in our directory, with most concentrated in the NYC metro area. Published pricing data is limited. Upstate New York providers are typically more affordable than those in the five boroughs. <Link href="/direct-cremation/ny" className="text-slate-600 hover:text-slate-800 font-medium">Browse New York providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Pennsylvania (11 providers)</h3>
                  <p className="text-gray-600">Pennsylvania&apos;s direct cremation market is centered around Philadelphia, with published pricing data limited to a small number of providers. Contact providers directly for current quotes. <Link href="/direct-cremation/pa" className="text-slate-600 hover:text-slate-800 font-medium">Browse Pennsylvania providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Illinois (28 providers)</h3>
                  <p className="text-gray-600">Illinois has strong provider coverage, particularly in the Chicago suburbs and Rockford area. Published pricing data is limited (11% coverage), but the market is competitive. Downstate providers in Peoria and Springfield are typically more affordable than Chicago metro options. <Link href="/direct-cremation/il" className="text-slate-600 hover:text-slate-800 font-medium">Browse Illinois providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Ohio (2 providers)</h3>
                  <p className="text-gray-600">Ohio has limited direct cremation coverage in our directory, with providers in Cincinnati and Columbus. Contact providers directly for current pricing. <Link href="/direct-cremation/oh" className="text-slate-600 hover:text-slate-800 font-medium">Browse Ohio providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Georgia (8 providers)</h3>
                  <p className="text-gray-600">Georgia&apos;s direct cremation providers are concentrated in the Atlanta metro area, with coverage in Marietta, Duluth, Norcross, and Stone Mountain. No published pricing data is available. Contact providers directly. <Link href="/direct-cremation/ga" className="text-slate-600 hover:text-slate-800 font-medium">Browse Georgia providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">North Carolina (15 providers)</h3>
                  <p className="text-gray-600">North Carolina has good statewide coverage with providers in Charlotte, Raleigh, Durham, Greensboro, and Wilmington. Published pricing data is limited (20% coverage). Contact providers for current quotes. <Link href="/direct-cremation/nc" className="text-slate-600 hover:text-slate-800 font-medium">Browse North Carolina providers</Link>.</p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Michigan (7 providers)</h3>
                  <p className="text-gray-600">Michigan&apos;s direct cremation providers are concentrated in the Detroit metro area, including Livonia, Southfield, and Bloomfield Hills. No published pricing data is available. Contact providers directly. <Link href="/direct-cremation/mi" className="text-slate-600 hover:text-slate-800 font-medium">Browse Michigan providers</Link>.</p>
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
              <p>Written by <strong className="text-gray-500">Terry Feely</strong>, former firefighter and paramedic. Pricing data sourced from provider listings in the Evermore Directory, April 2026. Averages shown only for states with sufficient data coverage. Always contact providers directly for current pricing.</p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
