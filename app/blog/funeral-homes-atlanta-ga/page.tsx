import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '12 Funeral Homes in Atlanta, GA (2026) | Compare Prices & Services | Evermore Directory',
  description: 'Compare funeral homes in Atlanta, GA with real pricing, services, and contact info. Updated 2026.',
  keywords: 'funeral homes atlanta ga, atlanta funeral homes, cremation atlanta ga, funeral services atlanta, atlanta cremation cost',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/funeral-homes-atlanta-ga',
  },
  openGraph: {
    title: '12 Funeral Homes in Atlanta, GA (2026) | Compare Prices & Services',
    description: 'Compare funeral homes in Atlanta, GA with real pricing, services, and contact info. Updated 2026.',
    url: 'https://funeralhomedirectories.com/blog/funeral-homes-atlanta-ga',
    type: 'article',
  },
};

const funeralHomes = [
  {
    name: 'Alfonso Dawson Mortuary',
    address: '3000 Martin Luther King Jr Dr, Atlanta, GA',
    phone: '404-691-3810',
    cremation: '$2,500 – $5,000',
    burial: '$6,000 – $10,500',
    services: 'Traditional Funeral, Cremation, International Shipping, Memorial Services',
    url: '/funeral-homes/ga/atlanta/alfonso-dawson-mortuary-inc',
  },
  {
    name: 'Goolsby Mortuary',
    address: '1375 Jonesboro Rd SE, Atlanta, GA',
    phone: '404-588-0128',
    cremation: '$2,500 – $5,000',
    burial: '$6,000 – $10,500',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/ga/atlanta/goolsby-mortuary-inc-cremation-services',
  },
  {
    name: "Gus Thornhill's Funeral Home",
    address: '1721 Robinson Ave SE, Atlanta, GA',
    phone: '404-622-0087',
    cremation: '$2,500 – $5,000',
    burial: '$6,000 – $10,500',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/ga/atlanta/gus-thornhills-funeral-home',
  },
  {
    name: 'H.M. Patterson & Son - Spring Hill Chapel',
    address: '1020 Spring Street NW, Atlanta, GA',
    phone: '404-876-1022',
    cremation: '$3,000 – $6,000',
    burial: '$7,000 – $12,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/ga/atlanta/hm-patterson-son-spring-hill-chapel',
  },
  {
    name: 'H.M. Patterson & Son - Oglethorpe Hill',
    address: '4550 Peachtree Rd NE, Atlanta, GA',
    phone: '404-261-4586',
    cremation: '$3,500 – $6,500',
    burial: '$6,500 – $11,000',
    services: 'Traditional Funeral, Cremation, Pre-Planning, Veterans Services',
    url: '/funeral-homes/ga/atlanta/hm-patterson-son-oglethorpe-hill-chapel',
  },
  {
    name: 'Legends Memorial Group',
    address: '650 Ponce De Leon Avenue, Atlanta, GA',
    phone: '800-489-6076',
    cremation: '$2,500 – $5,000',
    burial: '$6,000 – $10,500',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/ga/atlanta/legends-memorial-group-and-funeral-homes',
  },
  {
    name: 'Murray Brothers Funeral Home',
    address: '1199 Utoy Springs Rd SW, Atlanta, GA',
    phone: '404-349-3000',
    cremation: '$2,500 – $5,000',
    burial: '$6,000 – $10,500',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/ga/atlanta/murray-brothers-funeral-home',
  },
  {
    name: 'Speaks Funeral Home',
    address: '3490 Fairburn Rd SW, Atlanta, GA',
    phone: '404-349-7474',
    cremation: '$2,500 – $5,000',
    burial: '$6,000 – $10,500',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/ga/atlanta/speaks-funeral-home',
  },
  {
    name: 'William Gayleano Murray & Son',
    address: '923 McDaniel Street SW, Atlanta, GA',
    phone: '404-963-5634',
    cremation: '$2,200 – $4,500',
    burial: '$5,500 – $10,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, International Shipping',
    url: '/funeral-homes/ga/atlanta/william-gayleano-murray-son-funeral-home',
  },
  {
    name: 'Willie A Watkins Funeral Home',
    address: '1003 Ralph David Abernathy Blvd SW, Atlanta, GA',
    phone: '404-758-1731',
    cremation: '$3,500 – $6,500',
    burial: '$6,500 – $11,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/ga/atlanta/willie-a-watkins-funeral-home',
  },
];

export default function FuneralHomesAtlantaPage() {
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
            { "@type": "ListItem", "position": 3, "name": "Funeral Homes in Atlanta, GA" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "12 Funeral Homes in Atlanta, GA (2026) | Compare Prices & Services",
          "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
          "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
          "datePublished": "2026-04-03",
          "dateModified": "2026-04-03",
          "url": "https://funeralhomedirectories.com/blog/funeral-homes-atlanta-ga"
        }) }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                12 Funeral Homes in Atlanta, GA (2026) | Compare Prices &amp; Services
              </h1>
              <p className="text-sm text-gray-500 mb-3">
                By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic | Evermore Directory &middot; Last updated: April 2026
              </p>
              <p className="text-xl text-gray-600">
                Compare pricing, services, and contact information for Atlanta&apos;s funeral homes.
              </p>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 mb-4">
                Atlanta, GA is home to a wide range of funeral homes including H.M. Patterson &amp; Son, Murray Brothers, and Willie A Watkins, all offering cremation and traditional burial services. Cremation in Atlanta typically costs between $2,200 and $6,500, while traditional burial ranges from $5,500 to $12,000.
              </p>
              <p className="text-gray-600">
                Below is our complete list of 12 funeral homes in Atlanta, with real pricing, addresses, and direct contact information so you can compare options and make the right choice for your family.
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
                Average Funeral Costs in Atlanta, GA
              </h2>
              <p className="text-gray-600 mb-4">
                Funeral costs in Atlanta vary depending on the type of service, the funeral home, and additional options like viewings, flowers, and cemetery fees. Here are the average costs you can expect in 2026:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Service Type</th>
                      <th className="border p-3 text-left">Atlanta Average Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-3">Direct Cremation</td><td className="border p-3">$1,500 – $3,500</td></tr>
                    <tr><td className="border p-3">Cremation with Memorial Service</td><td className="border p-3">$2,500 – $6,500</td></tr>
                    <tr><td className="border p-3">Traditional Burial</td><td className="border p-3">$6,000 – $12,000</td></tr>
                    <tr><td className="border p-3">Full Funeral with Viewing</td><td className="border p-3">$7,500 – $14,000+</td></tr>
                    <tr><td className="border p-3">Graveside Service Only</td><td className="border p-3">$2,000 – $4,500</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Prices are estimates based on Evermore Directory data and publicly available General Price Lists. Cemetery fees, flowers, and obituary costs are not included. Always request a current GPL from the funeral home.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Choose a Funeral Home in Atlanta
              </h2>
              <p className="text-gray-600 mb-4">
                Choosing a funeral home is one of the most important decisions you will make during a difficult time. Here are the key factors to consider when comparing Atlanta funeral homes:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                  <strong>Request the General Price List (GPL).</strong> Every funeral home is legally required to provide one under FTC law. Compare GPLs from at least two or three funeral homes before making a decision.
                </li>
                <li>
                  <strong>Consider location and traffic.</strong> Atlanta&apos;s traffic can add significant travel time. A funeral home near the family or cemetery reduces stress on the day of services.
                </li>
                <li>
                  <strong>Ask about cultural and religious accommodations.</strong> Atlanta is a diverse city. Confirm the funeral home can accommodate any specific cultural, religious, or community traditions your family needs.
                </li>
                <li>
                  <strong>Read reviews.</strong> Google reviews can give you a sense of how other families were treated. Look for mentions of compassion, transparency, and follow-through.
                </li>
                <li>
                  <strong>Ask about payment options.</strong> Many Atlanta funeral homes offer payment plans or accept insurance assignments. Ask upfront so there are no surprises.
                </li>
                <li>
                  <strong>Check for international shipping services.</strong> Several Atlanta funeral homes offer international repatriation services, which may be important for families with ties to other countries.
                </li>
              </ul>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Explore Funeral Homes in Nearby Cities
              </h2>
              <p className="text-gray-600 mb-4">
                Looking for options outside of Atlanta? Browse funeral homes in these nearby Georgia cities:
              </p>
              <ul className="space-y-2">
                <li><Link href="/funeral-homes/ga/marietta" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Marietta, GA &rarr;</Link></li>
                <li><Link href="/funeral-homes/ga/decatur" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Decatur, GA &rarr;</Link></li>
                <li><Link href="/funeral-homes/ga/sandy-springs" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Sandy Springs, GA &rarr;</Link></li>
                <li><Link href="/funeral-homes/ga/smyrna" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Smyrna, GA &rarr;</Link></li>
                <li><Link href="/funeral-homes/ga/roswell" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Roswell, GA &rarr;</Link></li>
                <li className="pt-2 mt-2 border-t border-gray-200"><Link href="/funeral-homes/ga" className="text-slate-600 hover:text-slate-800 font-medium">Browse All Georgia Funeral Homes &rarr;</Link></li>
              </ul>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Related Reading
              </h2>
              <ul className="space-y-2">
                <li><Link href="/blog/funeral-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">How Much Does a Funeral Cost in 2026? Complete Price Guide &rarr;</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: A Step-by-Step Guide &rarr;</Link></li>
                <li><Link href="/blog/cremation-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">How Much Does Cremation Cost in 2026? Complete Price Guide &rarr;</Link></li>
              </ul>
            </section>

            <section className="text-center mt-12">
              <Link
                href="/funeral-homes/ga/atlanta"
                className="inline-block bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                View All Atlanta Funeral Homes
              </Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
