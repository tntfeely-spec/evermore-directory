import Link from 'next/link';
import { Metadata } from 'next';
import BlogFooterLinks from '@/components/BlogFooterLinks';
import Navigation from '@/components/Navigation';
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Funeral Homes in Los Angeles, CA (2026) | Prices and Services',
  description: 'Compare funeral homes in Los Angeles with real pricing, services, and contact info. Updated 2026.',
  keywords: 'funeral homes los angeles, los angeles funeral homes, cremation los angeles, funeral services LA, los angeles cremation cost',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/funeral-homes-los-angeles',
  },
  openGraph: {
    title: 'Funeral Homes in Los Angeles, CA (2026) | Prices and Services',
    description: 'Compare funeral homes in Los Angeles with real pricing, services, and contact info. Updated 2026.',
    url: 'https://funeralhomedirectories.com/blog/funeral-homes-los-angeles',
    type: 'article',
  },
};

const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-');

export default async function FuneralHomesLosAngelesPage() {
  const { data: funeralHomes } = await supabase
    .from('funeral_homes')
    .select('id, business_name, address, city, state, zip, phone, website, services_offered, price_range_cremation, price_range_burial, special_features, is_featured')
    .ilike('city', 'Los Angeles')
    .eq('state', 'CA')
    .order('is_featured', { ascending: false })
    .order('business_name', { ascending: true });

  const homes = funeralHomes || [];
  const count = homes.length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://funeralhomedirectories.com/blog" },
            { "@type": "ListItem", "position": 3, "name": "Funeral Homes in Los Angeles, CA" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${count} Funeral Homes in Los Angeles, CA (2026)`,
          "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
          "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
          "datePublished": "2026-04-07",
          "dateModified": "2026-04-07",
          "url": "https://funeralhomedirectories.com/blog/funeral-homes-los-angeles"
        }) }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {count} Funeral Homes in Los Angeles, CA (2026)
              </h1>
              <p className="text-sm text-gray-500 mb-3">
                By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic | Evermore Directory &middot; Last updated: April 2026
              </p>
              <p className="text-xl text-gray-600">
                Compare pricing, services, and contact information for Los Angeles&apos;s top funeral homes.
              </p>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 mb-4">
                Los Angeles, CA is served by a large number of funeral homes offering both cremation and traditional burial services. Cremation in Los Angeles typically costs between $995 and $6,000, while traditional burial ranges from $7,000 to $15,000 or more. With so many options across the city, comparing providers on price and services is one of the most important steps families can take.
              </p>
              <p className="text-gray-600">
                Below is our complete list of {count} funeral homes in Los Angeles, with real pricing, addresses, and direct contact information so you can compare options and make the right choice for your family.
              </p>
            </section>

            {homes.map((home, i) => (
              <section key={home.id} className="mb-8 bg-slate-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {i + 1}. {home.business_name}
                </h2>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p><strong>Address:</strong> {home.address}, {home.city}, {home.state} {home.zip}</p>
                  {home.phone && (
                    <p><strong>Phone:</strong>{' '}
                      <a href={`tel:${home.phone.replace(/\D/g, '')}`} className="text-slate-600 hover:text-slate-800">
                        {home.phone}
                      </a>
                    </p>
                  )}
                  {home.services_offered && (
                    <p><strong>Services:</strong> {home.services_offered}</p>
                  )}
                  {home.price_range_cremation && (
                    <p><strong>Cremation:</strong> {home.price_range_cremation}</p>
                  )}
                  {home.price_range_burial && (
                    <p><strong>Burial:</strong> {home.price_range_burial}</p>
                  )}
                </div>
                <Link
                  href={`/funeral-homes/ca/los-angeles/${slugify(home.business_name)}`}
                  className="inline-block text-slate-600 font-medium hover:text-slate-800"
                >
                  View full profile, services &amp; pricing &rarr;
                </Link>
              </section>
            ))}

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Average Funeral Costs in Los Angeles, CA
              </h2>
              <p className="text-gray-600 mb-4">
                Funeral costs in Los Angeles vary depending on the type of service, the funeral home, and additional options like viewings, flowers, and cemetery fees. Here are the average costs you can expect in 2026:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Service Type</th>
                      <th className="border p-3 text-left">Los Angeles Average Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-3">Direct Cremation</td><td className="border p-3">$995 to $3,500</td></tr>
                    <tr><td className="border p-3">Cremation with Memorial Service</td><td className="border p-3">$2,500 to $6,000</td></tr>
                    <tr><td className="border p-3">Traditional Burial</td><td className="border p-3">$7,000 to $15,000+</td></tr>
                    <tr><td className="border p-3">Full Funeral with Viewing</td><td className="border p-3">$8,000 to $20,000+</td></tr>
                    <tr><td className="border p-3">Graveside Service Only</td><td className="border p-3">$3,000 to $6,000</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Prices are estimates based on Evermore Directory data and publicly available General Price Lists. Cemetery fees, flowers, and obituary costs are not included. Always request a current GPL from the funeral home.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Choose a Funeral Home in Los Angeles
              </h2>
              <p className="text-gray-600 mb-4">
                Choosing a funeral home is one of the most important decisions you will make during a difficult time. Here are the key factors to consider when comparing Los Angeles funeral homes:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                  <strong>Request the General Price List (GPL).</strong> Every funeral home is legally required to provide one under FTC law. Compare GPLs from at least two or three funeral homes before making a decision.
                </li>
                <li>
                  <strong>Consider location.</strong> Los Angeles is spread out across dozens of neighborhoods. A funeral home close to the family or the cemetery can reduce stress and transportation costs.
                </li>
                <li>
                  <strong>Ask about the services you need.</strong> Some families want a full traditional service with viewing. Others prefer a simple direct cremation. Make sure the funeral home offers what you are looking for at a price you can afford.
                </li>
                <li>
                  <strong>Read reviews.</strong> Google reviews can give you a sense of how other families were treated. Look for mentions of compassion, transparency, and follow through.
                </li>
                <li>
                  <strong>Ask about payment options.</strong> Many Los Angeles funeral homes offer payment plans or accept insurance assignments. Ask upfront so there are no surprises.
                </li>
                <li>
                  <strong>Check for cultural or religious services.</strong> Los Angeles is one of the most diverse cities in the country. If your family has specific cultural or religious requirements, confirm the funeral home can accommodate them.
                </li>
              </ul>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Explore Funeral Homes in Nearby Cities
              </h2>
              <p className="text-gray-600 mb-4">
                Looking for options outside of Los Angeles? Browse funeral homes in these nearby California cities:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/funeral-homes/ca/long-beach" className="text-slate-600 hover:text-slate-800 font-medium">
                    Funeral Homes in Long Beach, CA &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/funeral-homes/ca/glendale" className="text-slate-600 hover:text-slate-800 font-medium">
                    Funeral Homes in Glendale, CA &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/funeral-homes/ca/pasadena" className="text-slate-600 hover:text-slate-800 font-medium">
                    Funeral Homes in Pasadena, CA &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/funeral-homes/ca/burbank" className="text-slate-600 hover:text-slate-800 font-medium">
                    Funeral Homes in Burbank, CA &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/funeral-homes/ca/santa-monica" className="text-slate-600 hover:text-slate-800 font-medium">
                    Funeral Homes in Santa Monica, CA &rarr;
                  </Link>
                </li>
                <li className="pt-2 mt-2 border-t border-gray-200"><Link href="/funeral-homes/ca" className="text-slate-600 hover:text-slate-800 font-medium">Browse All California Funeral Homes &rarr;</Link></li>
              </ul>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Related Reading
              </h2>
              <ul className="space-y-2">
                <li><Link href="/blog/cremation-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">How Much Does Cremation Cost in 2026? &rarr;</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: A Step by Step Guide &rarr;</Link></li>
                <li><Link href="/blog/direct-cremation-vs-traditional-funeral" className="text-slate-600 hover:text-slate-800 font-medium">Direct Cremation vs Traditional Funeral: How to Choose &rarr;</Link></li>
              </ul>
            </section>

            <BlogFooterLinks />

            <section className="text-center mt-12">
              <Link
                href="/funeral-homes/ca/los-angeles"
                className="inline-block bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                View All Los Angeles Funeral Homes
              </Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
