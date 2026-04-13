import Link from 'next/link';
import { Metadata } from 'next';
import BlogFooterLinks from '@/components/BlogFooterLinks';

export const metadata: Metadata = {
  title: '13 Funeral Homes in Chicago, IL (2026) | Compare Prices & Services | Evermore Directory',
  description: 'Compare funeral homes in Chicago, IL with real pricing, services, and contact info. Updated 2026.',
  keywords: 'funeral homes chicago il, chicago funeral homes, cremation chicago il, funeral services chicago, chicago cremation cost',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/funeral-homes-chicago-il',
  },
  openGraph: {
    title: '13 Funeral Homes in Chicago, IL (2026) | Compare Prices & Services',
    description: 'Compare funeral homes in Chicago, IL with real pricing, services, and contact info. Updated 2026.',
    url: 'https://funeralhomedirectories.com/blog/funeral-homes-chicago-il',
    type: 'article',
  },
};

const funeralHomes = [
  {
    name: 'AA Rayner and Sons',
    address: '318 E. 71st Street, Chicago, IL',
    phone: '773-846-4845',
    cremation: '$3,500 to $6,500',
    burial: '$7,000 to $12,000',
    services: 'Traditional Funeral, Cremation, Pre-Planning, Veterans Services',
    url: '/funeral-homes/il/chicago/aa-rayner-and-sons-funeral-homes',
  },
  {
    name: 'Cage Memorial Chapel',
    address: '7800 S. Cottage Grove Ave, Chicago, IL',
    phone: '773-721-8900',
    cremation: '$3,000 to $5,500',
    burial: '$6,000 to $10,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/il/chicago/cage-memorial-chapel',
  },
  {
    name: 'Calahan Funeral Home',
    address: '7535 W. Talcott Avenue, Chicago, IL',
    phone: '773-631-3500',
    cremation: '$3,500 to $6,500',
    burial: '$7,000 to $12,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/il/chicago/calahan-funeral-home',
  },
  {
    name: 'CB Taylor Funeral Home',
    address: '5350 W North Avenue, Chicago, IL',
    phone: '773-889-8500',
    cremation: '$3,500 to $6,500',
    burial: '$7,000 to $12,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/il/chicago/cb-taylor-funeral-home',
  },
  {
    name: 'Christian Funeral Home',
    address: '3526 North Cicero Avenue, Chicago, IL',
    phone: '773-478-3240',
    cremation: '$3,500 to $6,500',
    burial: '$7,000 to $12,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/il/chicago/christian-funeral-home',
  },
  {
    name: "Gatling's Chapel",
    address: '3149 S. State Street, Chicago, IL',
    phone: '312-791-1717',
    cremation: '$3,000 to $5,500',
    burial: '$6,500 to $11,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/il/chicago/gatlings-chapel',
  },
  {
    name: 'Jones Funeral Home',
    address: '316 E. 61st Street, Chicago, IL',
    phone: '773-324-2200',
    cremation: '$3,000 to $5,500',
    burial: '$6,500 to $11,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Aftercare',
    url: '/funeral-homes/il/chicago/jones-funeral-home-llc',
  },
  {
    name: 'Lakeview Funeral Home',
    address: '1458 W. Belmont Ave, Chicago, IL',
    phone: '773-472-6300',
    cremation: '$3,500 to $6,500',
    burial: '$7,000 to $12,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning, Veterans Services',
    url: '/funeral-homes/il/chicago/lakeview-funeral-home',
  },
  {
    name: 'Leak & Sons Funeral Home',
    address: '7838 S Cottage Grove Avenue, Chicago, IL',
    phone: '773-731-9500',
    cremation: '$3,500 to $6,500',
    burial: '$6,500 to $11,000',
    services: 'Traditional Funeral, Cremation, Pre-Planning, Memorial Services',
    url: '/funeral-homes/il/chicago/leak-sons-funeral-home',
  },
  {
    name: 'Muzyka Funeral Home',
    address: '5776 W. Lawrence Avenue, Chicago, IL',
    phone: '773-545-3800',
    cremation: '$3,500 to $6,500',
    burial: '$7,000 to $12,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/il/chicago/muzyka-funeral-home',
  },
  {
    name: 'SCI Illinois Services - Rosehill',
    address: '5800 N. Ravenswood Ave, Chicago, IL',
    phone: '773-561-5940',
    cremation: '$4,000 to $7,000',
    burial: '$7,500 to $13,000',
    services: 'Traditional Funeral, Cremation, Cemetery, Memorial Services',
    url: '/funeral-homes/il/chicago/sci-illinois-services-rosehill',
  },
  {
    name: 'Smith-Corcoran Funeral Homes',
    address: '6150 N. Cicero Avenue, Chicago, IL',
    phone: '773-736-3833',
    cremation: '$3,500 to $6,500',
    burial: '$7,000 to $12,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/il/chicago/smith-corcoran-funeral-homes',
  },
  {
    name: 'Taylor Funeral Home',
    address: '63 East 79th Street, Chicago, IL',
    phone: '773-488-7300',
    cremation: '$3,500 to $6,500',
    burial: '$7,000 to $12,000',
    services: 'Traditional Funeral, Cremation, Pre-Planning, Veterans Services',
    url: '/funeral-homes/il/chicago/taylor-funeral-home-ltd',
  },
];

export default function FuneralHomesChicagoPage() {
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
            { "@type": "ListItem", "position": 3, "name": "Funeral Homes in Chicago, IL" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "13 Funeral Homes in Chicago, IL (2026) | Compare Prices & Services",
          "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
          "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
          "datePublished": "2026-04-03",
          "dateModified": "2026-04-03",
          "url": "https://funeralhomedirectories.com/blog/funeral-homes-chicago-il"
        }) }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                13 Funeral Homes in Chicago, IL (2026) | Compare Prices &amp; Services
              </h1>
              <p className="text-sm text-gray-500 mb-3">
                By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic | Evermore Directory &middot; Last updated: April 2026
              </p>
              <p className="text-xl text-gray-600">
                Compare pricing, services, and contact information for Chicago&apos;s funeral homes.
              </p>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 mb-4">
                Chicago, IL has a wide range of funeral homes including Lakeview Funeral Home, Smith-Corcoran, and AA Rayner and Sons, all offering cremation and traditional burial services. Cremation in Chicago typically costs between $3,000 and $7,000, while traditional burial ranges from $6,000 to $13,000.
              </p>
              <p className="text-gray-600">
                Below is our complete list of 13 funeral homes in Chicago, with real pricing, addresses, and direct contact information so you can compare options and make the right choice for your family.
              </p>
            </section>

            {funeralHomes.map((home, i) => (
              <section key={home.url} className="mb-8 bg-slate-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {i + 1}. {home.name}
                </h2>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p><strong>Address:</strong> {home.address}</p>
                  <p><strong>Phone:</strong>{' '}
                    <a href={`tel:${home.phone.replace(/\D/g, '')}`} className="text-slate-600 hover:text-slate-800">
                      {home.phone}
                    </a>
                  </p>
                  <p><strong>Services:</strong> {home.services}</p>
                  <p><strong>Cremation:</strong> {home.cremation}</p>
                  <p><strong>Burial:</strong> {home.burial}</p>
                </div>
                <Link
                  href={home.url}
                  className="inline-block text-slate-600 font-medium hover:text-slate-800"
                >
                  View full profile, services &amp; pricing &rarr;
                </Link>
              </section>
            ))}

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Average Funeral Costs in Chicago, IL
              </h2>
              <p className="text-gray-600 mb-4">
                Funeral costs in Chicago vary depending on the type of service, the funeral home, and additional options like viewings, flowers, and cemetery fees. Here are the average costs you can expect in 2026:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Service Type</th>
                      <th className="border p-3 text-left">Chicago Average Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-3">Direct Cremation</td><td className="border p-3">$1,500 to $4,000</td></tr>
                    <tr><td className="border p-3">Cremation with Memorial Service</td><td className="border p-3">$3,500 to $7,000</td></tr>
                    <tr><td className="border p-3">Traditional Burial</td><td className="border p-3">$7,000 to $13,000</td></tr>
                    <tr><td className="border p-3">Full Funeral with Viewing</td><td className="border p-3">$8,500 to $16,000+</td></tr>
                    <tr><td className="border p-3">Graveside Service Only</td><td className="border p-3">$2,500 to $5,000</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Prices are estimates based on Evermore Directory data and publicly available General Price Lists. Cemetery fees, flowers, and obituary costs are not included. Always request a current GPL from the funeral home.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Choose a Funeral Home in Chicago
              </h2>
              <p className="text-gray-600 mb-4">
                Choosing a funeral home is one of the most important decisions you will make during a difficult time. Here are the key factors to consider when comparing Chicago funeral homes:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                  <strong>Request the General Price List (GPL).</strong> Every funeral home is legally required to provide one under FTC law. Compare GPLs from at least two or three funeral homes before making a decision.
                </li>
                <li>
                  <strong>Consider neighborhood and accessibility.</strong> Chicago is a city of neighborhoods, each with its own character. A funeral home in or near your community can make a meaningful difference for attending family and friends.
                </li>
                <li>
                  <strong>Ask about the services you need.</strong> Some families want a full traditional service with viewing. Others prefer a simple direct cremation. Make sure the funeral home offers what you are looking for at a price you can afford.
                </li>
                <li>
                  <strong>Read reviews.</strong> Google reviews can give you a sense of how other families were treated. Look for mentions of compassion, transparency, and follow-through.
                </li>
                <li>
                  <strong>Ask about payment options.</strong> Many Chicago funeral homes offer payment plans or accept insurance assignments. Ask upfront so there are no surprises.
                </li>
                <li>
                  <strong>Check for veterans services.</strong> Several Chicago funeral homes specialize in veterans burial benefits and military honors. If your loved one served, ask about available benefits.
                </li>
              </ul>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Explore Funeral Homes in Nearby Cities
              </h2>
              <p className="text-gray-600 mb-4">
                Looking for options outside of Chicago? Browse funeral homes in these nearby Illinois cities:
              </p>
              <ul className="space-y-2">
                <li><Link href="/funeral-homes/il/joliet" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Joliet, IL</Link></li>
                <li><Link href="/funeral-homes/il/naperville" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Naperville, IL</Link></li>
                <li><Link href="/funeral-homes/il/schaumburg" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Schaumburg, IL</Link></li>
                <li className="pt-2 mt-2 border-t border-gray-200"><Link href="/funeral-homes/il" className="text-slate-600 hover:text-slate-800 font-medium">Browse All Illinois Funeral Homes &rarr;</Link></li>
              </ul>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Related Reading
              </h2>
              <ul className="space-y-2">
                <li><Link href="/blog/funeral-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">How Much Does a Funeral Cost in 2026? Complete Price Guide &rarr;</Link></li>
                <li><Link href="/blog/cremation-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">How Much Does Cremation Cost in 2026? Complete Price Guide &rarr;</Link></li>
                <li><Link href="/blog/burial-vs-cremation" className="text-slate-600 hover:text-slate-800 font-medium">Burial vs Cremation: Costs, Process &amp; How to Decide &rarr;</Link></li>
              </ul>
            </section>

            <BlogFooterLinks />

            <section className="text-center mt-12">
              <Link
                href="/funeral-homes/il/chicago"
                className="inline-block bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                View All Chicago Funeral Homes
              </Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
