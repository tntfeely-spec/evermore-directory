import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10 Funeral Homes in Nashville, TN (2026) | Compare Prices and Services | Evermore Directory',
  description: 'Looking for a funeral home in Nashville, TN? Compare the top 10 funeral homes in Nashville with pricing, services, and contact information. Updated for 2026.',
  keywords: 'best funeral homes nashville tn, nashville funeral homes, funeral homes nashville tennessee, cremation nashville tn, funeral services nashville',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/best-funeral-homes-nashville-tn',
  },
  openGraph: {
    title: '10 Funeral Homes in Nashville, TN (2026) | Compare Prices and Services',
    description: 'Compare the top 10 funeral homes in Nashville with pricing, services, and contact information. Updated for 2026.',
    url: 'https://funeralhomedirectories.com/blog/best-funeral-homes-nashville-tn',
    type: 'article',
  },
};

const funeralHomes = [
  {
    name: 'Marshall-Donnelly-Combs Funeral Home',
    address: '109 3rd Avenue South, Nashville, TN',
    phone: '615-327-1111',
    cremation: '$4,000 – $7,000',
    burial: '$7,000 – $12,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/tn/nashville/marshall-donnelly-combs-funeral-home',
  },
  {
    name: 'Mount Olivet Funeral Home & Cemetery',
    address: '1101 Lebanon Pike, Nashville, TN',
    phone: '615-255-4193',
    cremation: '$4,000 – $7,000',
    burial: '$7,000 – $12,000',
    services: 'Funeral Services, Cremation, Cemetery, Pre-Planning, Veterans Services',
    url: '/funeral-homes/tn/nashville/mount-olivet-funeral-home-cemetery',
  },
  {
    name: 'Patton Brothers Funeral Home',
    address: '1306 South Street, Nashville, TN',
    phone: '615-256-3608',
    cremation: '$3,500 – $6,500',
    burial: '$6,500 – $11,000',
    services: 'Traditional Funeral, Cremation, Pre-Planning, Memorial Services',
    url: '/funeral-homes/tn/nashville/patton-brothers-funeral-home',
  },
  {
    name: 'Phillips-Robinson Funeral Home',
    address: '2707 Clarksville Pike, Nashville, TN',
    phone: '615-262-3312',
    cremation: '$3,500 – $6,500',
    burial: '$6,500 – $11,000',
    services: 'Traditional Funeral, Cremation, Natural Burial, Green Burial',
    url: '/funeral-homes/tn/nashville/phillips-robinson-funeral-home',
  },
  {
    name: 'Smith Brothers Funeral Directors',
    address: '820 Dickerson Pike, Nashville, TN',
    phone: '615-726-1476',
    cremation: '$3,500 – $6,500',
    burial: '$6,500 – $11,000',
    services: 'Traditional Funeral, Cremation, Pre-Planning, Special Limousine Services',
    url: '/funeral-homes/tn/nashville/smith-brothers-funeral-directors-inc',
  },
  {
    name: 'Spring Hill Funeral Home & Cemetery',
    address: '5110 Gallatin Pike, Nashville, TN',
    phone: '615-865-1101',
    cremation: '$4,000 – $7,000',
    burial: '$7,000 – $12,000',
    services: 'Traditional Funeral, Cremation, Cemetery, Pre-Planning, Veterans Services',
    url: '/funeral-homes/tn/nashville/spring-hill-funeral-home-cemetery',
  },
  {
    name: 'Terrell Broady Funeral Home',
    address: '3855 Clarksville Pike, Nashville, TN',
    phone: '615-244-4755',
    cremation: '$3,500 – $6,500',
    burial: '$6,500 – $11,000',
    services: 'Traditional Funeral, Cremation, Pre-Planning, Notary Services, Limousine Services',
    url: '/funeral-homes/tn/nashville/terrell-broady-funeral-home',
  },
  {
    name: 'Woodbine Funeral Home',
    address: '3620 Nolensville Rd, Nashville, TN',
    phone: '615-832-1948',
    cremation: '$3,500 – $6,500',
    burial: '$6,500 – $11,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Graveside Services',
    url: '/funeral-homes/tn/nashville/woodbine-funeral-home',
  },
  {
    name: 'Woodlawn-Roesch-Patton Funeral Home',
    address: '660 Thompson Ln, Nashville, TN',
    phone: '615-383-4754',
    cremation: '$4,000 – $7,000',
    burial: '$7,000 – $12,000',
    services: 'Traditional Funeral, Cremation, Cemetery, Pre-Planning, Veterans Services',
    url: '/funeral-homes/tn/nashville/woodlawn-roesch-patton-funeral-home-memorial-park',
  },
  {
    name: 'Woodbine Funeral Home - Hickory Chapel',
    address: '5852 Nolensville Rd, Nashville, TN',
    phone: '615-331-1952',
    cremation: '$3,500 – $6,500',
    burial: '$6,500 – $11,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Graveside Services',
    url: '/funeral-homes/tn/nashville/woodbine-funeral-home-hickory-chapel',
  },
];

export default function BestFuneralHomesNashvillePage() {
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
            { "@type": "ListItem", "position": 3, "name": "Best Funeral Homes in Nashville, TN" }
          ]
        }) }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                10 Funeral Homes in Nashville, TN (2026) | Compare Prices and Services
              </h1>
              <p className="text-xl text-gray-600">
                Compare pricing, services, and contact information for Nashville&apos;s top funeral homes.
              </p>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 mb-4">
                Nashville, TN is served by a number of well-established funeral homes including Marshall-Donnelly-Combs, Spring Hill Funeral Home & Cemetery, and Woodlawn-Roesch-Patton, all of which offer both cremation and traditional burial services. Cremation in Nashville typically costs between $3,500 and $7,000, while traditional burial ranges from $6,500 to $12,000.
              </p>
              <p className="text-gray-600">
                Below is our complete list of 10 funeral homes in Nashville, with real pricing, addresses, and direct contact information so you can compare options and make the right choice for your family.
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
                  View full profile, services & pricing &rarr;
                </Link>
              </section>
            ))}

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Average Funeral Costs in Nashville, TN
              </h2>
              <p className="text-gray-600 mb-4">
                Funeral costs in Nashville vary depending on the type of service, the funeral home, and additional options like viewings, flowers, and cemetery fees. Here are the average costs you can expect in 2026:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Service Type</th>
                      <th className="border p-3 text-left">Nashville Average Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-3">Direct Cremation</td><td className="border p-3">$1,800 – $3,500</td></tr>
                    <tr><td className="border p-3">Cremation with Memorial Service</td><td className="border p-3">$3,500 – $7,000</td></tr>
                    <tr><td className="border p-3">Traditional Burial</td><td className="border p-3">$6,500 – $12,000</td></tr>
                    <tr><td className="border p-3">Full Funeral with Viewing</td><td className="border p-3">$8,000 – $15,000+</td></tr>
                    <tr><td className="border p-3">Graveside Service Only</td><td className="border p-3">$2,500 – $5,000</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Prices are estimates based on Evermore Directory data and publicly available General Price Lists. Cemetery fees, flowers, and obituary costs are not included. Always request a current GPL from the funeral home.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Choose a Funeral Home in Nashville
              </h2>
              <p className="text-gray-600 mb-4">
                Choosing a funeral home is one of the most important decisions you will make during a difficult time. Here are the key factors to consider when comparing Nashville funeral homes:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                  <strong>Request the General Price List (GPL).</strong> Every funeral home is legally required to provide one under FTC law. Compare GPLs from at least two or three funeral homes before making a decision.
                </li>
                <li>
                  <strong>Consider location.</strong> Nashville is spread out. A funeral home close to the family or the cemetery can reduce stress and transportation costs.
                </li>
                <li>
                  <strong>Ask about the services you need.</strong> Some families want a full traditional service with viewing. Others prefer a simple direct cremation. Make sure the funeral home offers what you are looking for at a price you can afford.
                </li>
                <li>
                  <strong>Read reviews.</strong> Google reviews can give you a sense of how other families were treated. Look for mentions of compassion, transparency, and follow-through.
                </li>
                <li>
                  <strong>Ask about payment options.</strong> Many Nashville funeral homes offer payment plans or accept insurance assignments. Ask upfront so there are no surprises.
                </li>
                <li>
                  <strong>Check for cultural or religious services.</strong> If your family has specific cultural or religious requirements, confirm the funeral home can accommodate them.
                </li>
              </ul>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Explore Funeral Homes in Nearby Cities
              </h2>
              <p className="text-gray-600 mb-4">
                Looking for options outside of Nashville? Browse funeral homes in these nearby Tennessee cities:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/funeral-homes/tn/murfreesboro" className="text-slate-600 hover:text-slate-800 font-medium">
                    Funeral Homes in Murfreesboro, TN &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/funeral-homes/tn/franklin" className="text-slate-600 hover:text-slate-800 font-medium">
                    Funeral Homes in Franklin, TN &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/funeral-homes/tn/clarksville" className="text-slate-600 hover:text-slate-800 font-medium">
                    Funeral Homes in Clarksville, TN &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/funeral-homes/tn/hendersonville" className="text-slate-600 hover:text-slate-800 font-medium">
                    Funeral Homes in Hendersonville, TN &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/funeral-homes/tn/gallatin" className="text-slate-600 hover:text-slate-800 font-medium">
                    Funeral Homes in Gallatin, TN &rarr;
                  </Link>
                </li>
              </ul>
            </section>

            <section className="text-center mt-12">
              <Link
                href="/funeral-homes/tn/nashville"
                className="inline-block bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                View All Nashville Funeral Homes
              </Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
