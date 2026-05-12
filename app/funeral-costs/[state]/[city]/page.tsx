import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import { supabase } from '@/lib/supabase';

export const revalidate = 0;

interface PageProps {
  params: Promise<{ state: string; city: string }>;
}

const STATE_ABBR: Record<string, string> = {
  alabama: "AL", alaska: "AK", arizona: "AZ", arkansas: "AR",
  california: "CA", colorado: "CO", connecticut: "CT", delaware: "DE",
  "district-of-columbia": "DC",
  florida: "FL", georgia: "GA", hawaii: "HI", idaho: "ID",
  illinois: "IL", indiana: "IN", iowa: "IA", kansas: "KS",
  kentucky: "KY", louisiana: "LA", maine: "ME", maryland: "MD",
  massachusetts: "MA", michigan: "MI", minnesota: "MN", mississippi: "MS",
  missouri: "MO", montana: "MT", nebraska: "NE", nevada: "NV",
  "new-hampshire": "NH", "new-jersey": "NJ", "new-mexico": "NM",
  "new-york": "NY", "north-carolina": "NC", "north-dakota": "ND",
  ohio: "OH", oklahoma: "OK", oregon: "OR", pennsylvania: "PA",
  "rhode-island": "RI", "south-carolina": "SC", "south-dakota": "SD",
  tennessee: "TN", texas: "TX", utah: "UT", vermont: "VT",
  virginia: "VA", washington: "WA", "west-virginia": "WV",
  wisconsin: "WI", wyoming: "WY",
};

const STATE_NAMES: Record<string, string> = {
  alabama: "Alabama", alaska: "Alaska", arizona: "Arizona",
  arkansas: "Arkansas", california: "California", colorado: "Colorado",
  connecticut: "Connecticut", delaware: "Delaware",
  "district-of-columbia": "District of Columbia",
  florida: "Florida", georgia: "Georgia", hawaii: "Hawaii", idaho: "Idaho",
  illinois: "Illinois", indiana: "Indiana", iowa: "Iowa",
  kansas: "Kansas", kentucky: "Kentucky", louisiana: "Louisiana",
  maine: "Maine", maryland: "Maryland", massachusetts: "Massachusetts",
  michigan: "Michigan", minnesota: "Minnesota", mississippi: "Mississippi",
  missouri: "Missouri", montana: "Montana", nebraska: "Nebraska",
  nevada: "Nevada", "new-hampshire": "New Hampshire",
  "new-jersey": "New Jersey", "new-mexico": "New Mexico",
  "new-york": "New York", "north-carolina": "North Carolina",
  "north-dakota": "North Dakota", ohio: "Ohio", oklahoma: "Oklahoma",
  oregon: "Oregon", pennsylvania: "Pennsylvania",
  "rhode-island": "Rhode Island", "south-carolina": "South Carolina",
  "south-dakota": "South Dakota", tennessee: "Tennessee", texas: "Texas",
  utah: "Utah", vermont: "Vermont", virginia: "Virginia",
  washington: "Washington", "west-virginia": "West Virginia",
  wisconsin: "Wisconsin", wyoming: "Wyoming",
};

// National reference averages
const NAT_CREM_LOW = 1500;
const NAT_CREM_HIGH = 3500;
const NAT_BUR_LOW = 7000;
const NAT_BUR_HIGH = 12000;

function parsePriceRange(raw: string | null): { low: number; high: number } | null {
  if (!raw) return null;
  const cleaned = raw.replace(/\$/g, '').replace(/,/g, '');
  const parts = cleaned.split('-').map(s => s.trim()).filter(s => /^\d+$/.test(s));
  if (parts.length < 2) return null;
  const low = parseInt(parts[0], 10);
  const high = parseInt(parts[1], 10);
  if (low <= 0 || high <= 0 || low > 100000 || high > 100000) return null;
  return { low, high };
}

function fmt(n: number): string {
  return '$' + n.toLocaleString('en-US');
}

function fmtRange(low: number, high: number): string {
  return `${fmt(low)} to ${fmt(high)}`;
}

function cityDisplay(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function vsNational(low: number, high: number, natLow: number, natHigh: number): string {
  const mid = (low + high) / 2;
  const natMid = (natLow + natHigh) / 2;
  const pct = Math.round(((mid - natMid) / natMid) * 100);
  if (pct > 5) return `${pct}% above national average`;
  if (pct < -5) return `${Math.abs(pct)}% below national average`;
  return 'Near national average';
}

export async function generateStaticParams() {
  return [
    { state: 'georgia', city: 'atlanta' },
    { state: 'texas', city: 'houston' },
    { state: 'california', city: 'los-angeles' },
    { state: 'illinois', city: 'chicago' },
    { state: 'arizona', city: 'phoenix' },
    { state: 'texas', city: 'dallas' },
    { state: 'pennsylvania', city: 'philadelphia' },
    { state: 'california', city: 'san-diego' },
    { state: 'texas', city: 'san-antonio' },
    { state: 'florida', city: 'jacksonville' },
    { state: 'new-york', city: 'new-york' },
    { state: 'california', city: 'san-jose' },
    { state: 'texas', city: 'austin' },
    { state: 'ohio', city: 'columbus' },
    { state: 'texas', city: 'fort-worth' },
    { state: 'north-carolina', city: 'charlotte' },
    { state: 'indiana', city: 'indianapolis' },
    { state: 'california', city: 'san-francisco' },
    { state: 'washington', city: 'seattle' },
    { state: 'colorado', city: 'denver' },
    { state: 'tennessee', city: 'nashville' },
    { state: 'oklahoma', city: 'oklahoma-city' },
    { state: 'texas', city: 'el-paso' },
    { state: 'district-of-columbia', city: 'washington' },
    { state: 'kentucky', city: 'louisville' },
    { state: 'nevada', city: 'las-vegas' },
    { state: 'tennessee', city: 'memphis' },
    { state: 'oregon', city: 'portland' },
    { state: 'maryland', city: 'baltimore' },
    { state: 'wisconsin', city: 'milwaukee' },
    { state: 'new-mexico', city: 'albuquerque' },
    { state: 'arizona', city: 'tucson' },
    { state: 'california', city: 'fresno' },
    { state: 'california', city: 'sacramento' },
    { state: 'missouri', city: 'kansas-city' },
    { state: 'nebraska', city: 'omaha' },
    { state: 'colorado', city: 'colorado-springs' },
    { state: 'north-carolina', city: 'raleigh' },
    { state: 'minnesota', city: 'minneapolis' },
    { state: 'florida', city: 'tampa' },
    { state: 'louisiana', city: 'new-orleans' },
    { state: 'texas', city: 'arlington' },
    { state: 'kansas', city: 'wichita' },
    { state: 'california', city: 'anaheim' },
    { state: 'virginia', city: 'virginia-beach' },
    { state: 'colorado', city: 'aurora' },
    { state: 'california', city: 'long-beach' },
    { state: 'kentucky', city: 'lexington' },
    { state: 'california', city: 'stockton' },
    { state: 'pennsylvania', city: 'pittsburgh' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city } = await params;
  const stateAbbr = STATE_ABBR[state];
  const stateName = STATE_NAMES[state];
  if (!stateAbbr || !stateName) return { title: 'Not Found' };
  const cityName = cityDisplay(city);

  return {
    title: `Funeral Costs in ${cityName}, ${stateName} (2026) | Evermore Directory`,
    description: `Average funeral costs in ${cityName}, ${stateName}. Based on real pricing from local funeral homes. Compare cremation and burial prices.`,
    alternates: { canonical: `https://funeralhomedirectories.com/funeral-costs/${state}/${city}` },
  };
}

export default async function CityCostPage({ params }: PageProps) {
  const { state, city } = await params;
  const stateAbbr = STATE_ABBR[state];
  const stateName = STATE_NAMES[state];
  if (!stateAbbr || !stateName) notFound();
  const cityName = cityDisplay(city);

  // Query listings with pricing for this city
  const { data: listings } = await supabase
    .from('funeral_homes')
    .select('price_range_cremation, price_range_burial, business_name')
    .eq('state', stateAbbr)
    .ilike('city', cityName)
    .not('price_range_cremation', 'is', null)
    .neq('price_range_cremation', '');

  // Parse and average prices
  const cremPrices: { low: number; high: number }[] = [];
  const burPrices: { low: number; high: number }[] = [];
  for (const row of listings || []) {
    const crem = parsePriceRange(row.price_range_cremation);
    if (crem) cremPrices.push(crem);
    const bur = parsePriceRange(row.price_range_burial);
    if (bur) burPrices.push(bur);
  }

  const avg = (arr: number[]) => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
  const hasData = cremPrices.length >= 3;

  const cremLow = hasData ? avg(cremPrices.map(p => p.low)) : NAT_CREM_LOW;
  const cremHigh = hasData ? avg(cremPrices.map(p => p.high)) : NAT_CREM_HIGH;
  const burLow = hasData && burPrices.length >= 3 ? avg(burPrices.map(p => p.low)) : NAT_BUR_LOW;
  const burHigh = hasData && burPrices.length >= 3 ? avg(burPrices.map(p => p.high)) : NAT_BUR_HIGH;
  const listingCount = cremPrices.length;

  const dataNote = hasData
    ? `Based on real pricing from ${listingCount} funeral homes in ${cityName}.`
    : 'Pricing based on national averages. Local data limited.';

  // Total listings in city (with or without pricing)
  const { count: totalInCity } = await supabase
    .from('funeral_homes')
    .select('*', { count: 'exact', head: true })
    .eq('state', stateAbbr)
    .ilike('city', cityName);

  // Nearby cities (4 others in same state)
  const { data: cityRows } = await supabase
    .from('funeral_homes')
    .select('city')
    .eq('state', stateAbbr);

  const cityCounts = new Map<string, number>();
  for (const row of cityRows || []) {
    if (!row.city) continue;
    cityCounts.set(row.city, (cityCounts.get(row.city) || 0) + 1);
  }
  const nearbyCities = Array.from(cityCounts.entries())
    .filter(([c]) => c.toLowerCase() !== cityName.toLowerCase())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([c]) => c);

  const cSlug = (c: string) => c.toLowerCase().replace(/\s+/g, '-');

  const rows = [
    { label: 'Direct Cremation', range: fmtRange(cremLow, cremHigh), vs: vsNational(cremLow, cremHigh, NAT_CREM_LOW, NAT_CREM_HIGH) },
    { label: 'Cremation with Memorial Service', range: fmtRange(Math.round(cremHigh * 1.5), Math.round(cremHigh * 2.0)), vs: vsNational(Math.round(cremHigh * 1.5), Math.round(cremHigh * 2.0), 5800, 7500) },
    { label: 'Traditional Burial', range: fmtRange(burLow, burHigh), vs: vsNational(burLow, burHigh, NAT_BUR_LOW, NAT_BUR_HIGH) },
    { label: 'Full Funeral with Viewing', range: fmtRange(Math.round(burHigh * 1.2), Math.round(burHigh * 1.4)), vs: vsNational(Math.round(burHigh * 1.2), Math.round(burHigh * 1.4), 9000, 15000) },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `How much does a funeral cost in ${cityName}, ${stateName}?`, acceptedAnswer: { '@type': 'Answer', text: `In ${cityName}, direct cremation ranges from ${fmtRange(cremLow, cremHigh)} and traditional burial costs ${fmtRange(burLow, burHigh)}. ${dataNote}` } },
      { '@type': 'Question', name: `What is the cheapest funeral option in ${cityName}?`, acceptedAnswer: { '@type': 'Answer', text: `Direct cremation is the most affordable option in ${cityName}, starting around ${fmt(cremLow)}. It includes transportation, cremation, and return of remains without a formal service.` } },
      { '@type': 'Question', name: `How does ${cityName} compare to the national average for funeral costs?`, acceptedAnswer: { '@type': 'Answer', text: `${cityName}'s direct cremation costs are ${vsNational(cremLow, cremHigh, NAT_CREM_LOW, NAT_CREM_HIGH).toLowerCase()}. The national average for direct cremation is $1,500 to $3,500 and for traditional burial is $7,000 to $12,000.` } },
      { '@type': 'Question', name: `Why do funeral costs vary between funeral homes in ${cityName}?`, acceptedAnswer: { '@type': 'Answer', text: `Funeral costs in ${cityName} vary based on the type of service selected, the provider's location and overhead costs, whether they own or rent their crematory, and which optional services are included. Always request a General Price List to compare itemized costs.` } },
      { '@type': 'Question', name: `Are funeral homes in ${cityName} required to provide price lists?`, acceptedAnswer: { '@type': 'Answer', text: 'Yes. Under the FTC Funeral Rule, every funeral home must provide an itemized General Price List to anyone who asks, in person or by phone, free of charge.' } },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: `Average Funeral Costs in ${cityName}, ${stateName} (2026)`,
    author: { '@type': 'Person', name: 'Terry Feely', url: 'https://funeralhomedirectories.com/about' },
    publisher: { '@type': 'Organization', name: 'Evermore Directory', url: 'https://funeralhomedirectories.com' },
    datePublished: '2026-05-13', dateModified: '2026-05-13',
    url: `https://funeralhomedirectories.com/funeral-costs/${state}/${city}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://funeralhomedirectories.com' },
      { '@type': 'ListItem', position: 2, name: 'Funeral Costs by State', item: 'https://funeralhomedirectories.com/funeral-costs' },
      { '@type': 'ListItem', position: 3, name: stateName, item: `https://funeralhomedirectories.com/funeral-costs/${state}` },
      { '@type': 'ListItem', position: 4, name: cityName },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/funeral-costs" className="text-slate-600 hover:text-slate-800">Funeral Costs by State</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={`/funeral-costs/${state}`} className="text-slate-600 hover:text-slate-800">{stateName}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{cityName}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Average Funeral Costs in {cityName}, {stateName} (2026)
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Real price ranges from {totalInCity || listingCount} funeral homes in {cityName}
          </p>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          {/* Opening paragraph */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Funeral costs in {cityName}, {stateName} range from {fmtRange(cremLow, cremHigh)} for direct cremation to {fmtRange(burLow, burHigh)} for a traditional funeral with burial. The national average for direct cremation is $1,500 to $3,500, and the national average for traditional burial is $7,000 to $12,000. {cityName}&apos;s cremation costs are {vsNational(cremLow, cremHigh, NAT_CREM_LOW, NAT_CREM_HIGH).toLowerCase()}, and burial costs are {vsNational(burLow, burHigh, NAT_BUR_LOW, NAT_BUR_HIGH).toLowerCase()}. {dataNote}
            </p>
          </div>

          {/* Pricing table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Service</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">{cityName} Average</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">vs National</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{r.label}</td>
                    <td className="px-6 py-4 text-slate-700 font-mono whitespace-nowrap">{r.range}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{r.vs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mb-10">
            {dataNote} Always request a General Price List directly from each funeral home.
          </p>

          {/* CTA */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 mb-4">Browse {totalInCity || 0} funeral homes in {cityName}</p>
            <Link
              href={`/funeral-homes/${stateAbbr.toLowerCase()}/${city}`}
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Find Funeral Homes in {cityName}
            </Link>
          </div>

          {/* Nearby cities */}
          {nearbyCities.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Cities in {stateName}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {nearbyCities.map((c) => (
                  <Link
                    key={c}
                    href={`/funeral-homes/${stateAbbr.toLowerCase()}/${cSlug(c)}`}
                    className="bg-white rounded-lg border border-gray-200 px-4 py-3 text-center text-gray-700 hover:text-slate-700 hover:border-slate-400 hover:shadow-sm transition-all font-medium"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((q: { name: string; acceptedAnswer: { text: string } }) => (
                <div key={q.name}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{q.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Reading */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/funeral-cost-calculator" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Cost Calculator</h3>
                <p className="text-sm text-gray-600">Estimate costs by state with real pricing data.</p>
              </Link>
              <Link href={`/funeral-costs/${state}`} className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs in {stateName}</h3>
                <p className="text-sm text-gray-600">Statewide cost overview and comparison.</p>
              </Link>
              <Link href={`/funeral-homes/${stateAbbr.toLowerCase()}/${city}`} className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Homes in {cityName}</h3>
                <p className="text-sm text-gray-600">Browse all providers with contact info and services.</p>
              </Link>
              <Link href="/blog/how-to-read-a-funeral-home-general-price-list" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">How to Read a General Price List</h3>
                <p className="text-sm text-gray-600">Understand the document every funeral home must give you.</p>
              </Link>
            </div>
          </div>

          {/* Attribution */}
          <div className="text-center text-sm text-gray-400">
            <p>Written by <strong className="text-gray-500">Terry Feely</strong>, former firefighter and paramedic with firsthand experience helping families navigate end of life decisions.</p>
          </div>
        </div>
      </div>
    </>
  );
}
