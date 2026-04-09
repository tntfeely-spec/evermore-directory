import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Navigation from '@/components/Navigation';

export const revalidate = 0;

interface PageProps {
  params: Promise<{ state: string; city: string }>;
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
  'wi': 'Wisconsin', 'wy': 'Wyoming',
};

interface FuneralHome {
  id: string;
  business_name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string | null;
  services_offered: string | null;
  price_range_cremation: string | null;
  is_featured: boolean;
}

function lowestCremationPrice(homes: FuneralHome[]): number | null {
  const prices = homes
    .map((h) => {
      if (!h.price_range_cremation) return null;
      const m = h.price_range_cremation.match(/\$?([\d,]+)/);
      return m ? parseInt(m[1].replace(/,/g, ''), 10) : null;
    })
    .filter((n): n is number => n !== null && n > 0);
  return prices.length ? Math.min(...prices) : null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city } = await params;
  const stateName = stateNames[state.toLowerCase()];
  const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  if (!stateName) return { title: 'Not Found' };

  const { data: homes } = await supabase
    .from('funeral_homes')
    .select('price_range_cremation')
    .eq('state', state.toUpperCase())
    .ilike('city', cityName);

  const lowest = lowestCremationPrice((homes || []) as FuneralHome[]) ?? 1500;
  const canonical = `https://funeralhomedirectories.com/funeral-homes/${state.toLowerCase()}/${city.toLowerCase()}/cremation`;

  return {
    title: `Cremation Services in ${cityName}, ${stateName} (2026) | Compare Prices`,
    description: `Find and compare cremation services in ${cityName}, ${stateName}. Direct cremation from $${lowest.toLocaleString()}. Compare local cremation providers.`,
    alternates: { canonical },
    openGraph: { title: `Cremation Services in ${cityName}, ${stateName}`, url: canonical, type: 'website' },
  };
}

export default async function CremationPage({ params }: PageProps) {
  const { state, city } = await params;
  const stateName = stateNames[state.toLowerCase()];
  const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  if (!stateName) notFound();

  const { data: allHomes } = await supabase
    .from('funeral_homes')
    .select('*')
    .eq('state', state.toUpperCase())
    .ilike('city', cityName)
    .order('is_featured', { ascending: false })
    .order('business_name');

  if (!allHomes || allHomes.length === 0) notFound();

  const cremationHomes = (allHomes as FuneralHome[]).filter(
    (h) =>
      (h.services_offered && h.services_offered.toLowerCase().includes('cremation')) ||
      h.price_range_cremation
  );
  const homes: FuneralHome[] = cremationHomes.length > 0 ? cremationHomes : (allHomes as FuneralHome[]);

  const lowest = lowestCremationPrice(homes) ?? 1500;
  const slugify = (n: string) => n.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');
  const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
  const cityHref = `/funeral-homes/${state.toLowerCase()}/${citySlug}`;
  const canonical = `https://funeralhomedirectories.com${cityHref}/cremation`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://funeralhomedirectories.com' },
      { '@type': 'ListItem', position: 2, name: 'States', item: 'https://funeralhomedirectories.com/states' },
      { '@type': 'ListItem', position: 3, name: stateName, item: `https://funeralhomedirectories.com/funeral-homes/${state.toLowerCase()}` },
      { '@type': 'ListItem', position: 4, name: cityName, item: `https://funeralhomedirectories.com${cityHref}` },
      { '@type': 'ListItem', position: 5, name: 'Cremation Services', item: canonical },
    ],
  };

  const pricingRows = [
    { label: 'Direct cremation', range: `$${lowest.toLocaleString()} – $${(lowest + 2000).toLocaleString()}`, desc: 'Transportation, cremation, and return of remains. No service.' },
    { label: 'Cremation with memorial', range: `$${(lowest + 1500).toLocaleString()} – $${(lowest + 4500).toLocaleString()}`, desc: 'Cremation followed by a memorial service without the body present.' },
    { label: 'Cremation with viewing', range: `$${(lowest + 3000).toLocaleString()} – $${(lowest + 6500).toLocaleString()}`, desc: 'Traditional viewing/visitation prior to cremation.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />
      <div className="min-h-screen relative">
        <div
          className="fixed inset-0 z-0"
          style={{ backgroundImage: 'url(/Mountain_Lake_Image.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.35 }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm">
            <Link href="/states" className="text-slate-600 hover:text-slate-800">All States</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={`/funeral-homes/${state.toLowerCase()}`} className="text-slate-600 hover:text-slate-800">{stateName}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={cityHref} className="text-slate-600 hover:text-slate-800">{cityName}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Cremation Services</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cremation Services in {cityName}, {stateName}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare {homes.length} cremation provider{homes.length === 1 ? '' : 's'} in {cityName}. Direct cremation from ${lowest.toLocaleString()}.
            </p>
            <div className="mt-6">
              <Link href={cityHref} className="text-slate-600 hover:text-slate-800 font-semibold underline">
                View all funeral homes and cremation services in {cityName}
              </Link>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Cremation Pricing in {cityName}</h2>
              <p className="text-sm text-gray-500 mt-1">Estimated ranges based on local providers. Request a General Price List for exact costs.</p>
            </div>
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Service</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Typical price range</th>
                  <th className="hidden md:table-cell text-left px-6 py-3 text-sm font-semibold text-gray-700">What&apos;s included</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((r, i) => (
                  <tr key={r.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{r.label}</td>
                    <td className="px-6 py-4 text-slate-700 font-mono whitespace-nowrap">{r.range}</td>
                    <td className="hidden md:table-cell px-6 py-4 text-sm text-gray-600">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Listings */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cremation Providers in {cityName}, {stateName}</h2>
            <div className="space-y-4">
              {homes.map((home) => (
                <Link
                  key={home.id}
                  href={`${cityHref}/${slugify(home.business_name)}`}
                  className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 group cursor-pointer"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {home.is_featured && (
                      <span className="bg-slate-700 text-white text-xs font-bold px-2 py-0.5 rounded-full tracking-wider">FEATURED</span>
                    )}
                    <span className="text-xl font-bold text-gray-900 group-hover:text-slate-700">{home.business_name}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{home.address}, {home.city}, {home.state} {home.zip}</p>
                  {home.phone && <p className="text-sm mb-1 text-slate-600 font-semibold">{home.phone}</p>}
                  {home.price_range_cremation && (
                    <p className="text-sm text-gray-700 mt-1">Cremation pricing: <span className="font-semibold">{home.price_range_cremation}</span></p>
                  )}
                  <span className="mt-4 inline-block bg-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-lg group-hover:bg-slate-800 transition-colors">
                    View full listing →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-12 text-center">
            <Link href={cityHref} className="inline-block bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold">
              View all funeral homes and cremation services in {cityName}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
