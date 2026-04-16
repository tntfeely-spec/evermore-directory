import Link from 'next/link';
import { Metadata } from 'next';
import BlogFooterLinks from '@/components/BlogFooterLinks';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: '13 Funeral Homes in Houston, TX (2026) | Compare Prices & Services | Evermore Directory',
  description: 'Compare funeral homes in Houston, TX with real pricing, services, and contact info. Updated 2026.',
  keywords: 'funeral homes houston tx, houston funeral homes, cremation houston tx, funeral services houston, houston cremation cost',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/funeral-homes-houston-tx',
  },
  openGraph: {
    title: '13 Funeral Homes in Houston, TX (2026) | Compare Prices & Services',
    description: 'Compare funeral homes in Houston, TX with real pricing, services, and contact info. Updated 2026.',
    url: 'https://funeralhomedirectories.com/blog/funeral-homes-houston-tx',
    type: 'article',
  },
};

const funeralHomes = [
  {
    name: "All Peoples' Funeral Home",
    address: '5645 Aldine Bender Road, Houston, TX',
    phone: '281-590-8511',
    cremation: '$2,500 to $5,000',
    burial: '$6,000 to $10,500',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/tx/houston/all-peoples-funeral-home',
  },
  {
    name: 'Bradshaw-Carter Memorial',
    address: '1734 West Alabama Street, Houston, TX',
    phone: '713-659-4084',
    cremation: '$3,000 to $6,000',
    burial: '$7,000 to $12,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/tx/houston/bradshaw-carter-memorial-funeral-services',
  },
  {
    name: 'Brookside Funeral Home',
    address: '13747 Cutten Rd, Houston, TX',
    phone: '281-893-6500',
    cremation: '$2,500 to $5,000',
    burial: '$6,000 to $10,500',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/tx/houston/brookside-funeral-home-champions',
  },
  {
    name: 'Cypress-Fairbanks Funeral Home',
    address: '9926 Jones Road, Houston, TX',
    phone: '281-469-2561',
    cremation: '$2,500 to $5,000',
    burial: '$6,000 to $10,500',
    services: 'Traditional Funeral, Cremation, Pet Memorial Services, Pre-Planning',
    url: '/funeral-homes/tx/houston/cypress-fairbanks-funeral-home',
  },
  {
    name: 'Earthman Resthaven',
    address: '13102 North Freeway, Houston, TX',
    phone: '281-447-3344',
    cremation: '$2,800 to $5,500',
    burial: '$6,500 to $11,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/tx/houston/earthman-resthaven-funeral-home',
  },
  {
    name: 'Forest Lawn Funeral Home',
    address: '8701 Almeda Genoa Road, Houston, TX',
    phone: '713-991-9000',
    cremation: '$2,200 to $4,500',
    burial: '$5,500 to $10,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Veterans Services',
    url: '/funeral-homes/tx/houston/forest-lawn-funeral-home-of-houston',
  },
  {
    name: 'Geo H Lewis & Sons',
    address: '1010 Bering Drive, Houston, TX',
    phone: '713-789-3005',
    cremation: '$3,500 to $6,500',
    burial: '$6,500 to $11,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/tx/houston/geo-h-lewis-sons-funeral-directors',
  },
  {
    name: 'Klein Funeral Home',
    address: '9719 Wortham Blvd, Houston, TX',
    phone: '832-678-3900',
    cremation: '$2,800 to $5,500',
    burial: '$6,500 to $11,000',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/tx/houston/klein-funeral-home-cyfair-northwest',
  },
  {
    name: 'Mabrie Memorial Mortuary',
    address: '5000 Almeda Road, Houston, TX',
    phone: '713-523-2922',
    cremation: '$2,500 to $5,000',
    burial: '$6,000 to $10,500',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/tx/houston/mabrie-memorial-mortuary',
  },
  {
    name: 'McCoy and Harrison Funeral Home',
    address: '4918 Martin Luther King Blvd, Houston, TX',
    phone: '713-659-6111',
    cremation: '$2,500 to $5,000',
    burial: '$6,000 to $10,500',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/tx/houston/mccoy-and-harrison-funeral-home',
  },
  {
    name: 'Memorial Oaks Funeral Home',
    address: '13001 Katy Fwy, Houston, TX',
    phone: '713-647-8100',
    cremation: '$3,000 to $6,000',
    burial: '$7,000 to $12,000',
    services: 'Traditional Funeral, Cremation, Cemetery, Memorial Services',
    url: '/funeral-homes/tx/houston/memorial-oaks-funeral-home-cemetery',
  },
  {
    name: 'San Jacinto Memorial',
    address: '14659 I-45 North, Houston, TX',
    phone: '281-873-9900',
    cremation: '$2,500 to $5,000',
    burial: '$6,000 to $10,500',
    services: 'Traditional Funeral, Cremation, Cemetery, Memorial Services',
    url: '/funeral-homes/tx/houston/san-jacinto-memorial',
  },
  {
    name: 'Winford Funerals',
    address: '9910 Long Point Road, Houston, TX',
    phone: '713-465-4406',
    cremation: '$2,500 to $5,000',
    burial: '$6,000 to $10,500',
    services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning',
    url: '/funeral-homes/tx/houston/winford-funerals',
  },
];

export default function FuneralHomesHoustonPage() {
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
            { "@type": "ListItem", "position": 3, "name": "Funeral Homes in Houston, TX" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "13 Funeral Homes in Houston, TX (2026) | Compare Prices & Services",
          "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
          "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
          "datePublished": "2026-04-03",
          "dateModified": "2026-04-03",
          "url": "https://funeralhomedirectories.com/blog/funeral-homes-houston-tx"
        }) }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                13 Funeral Homes in Houston, TX (2026) | Compare Prices &amp; Services
              </h1>
              <p className="text-sm text-gray-500 mb-3">
                By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic | Evermore Directory &middot; Last updated: April 2026
              </p>
              <p className="text-xl text-gray-600">
                Compare pricing, services, and contact information for Houston&apos;s funeral homes.
              </p>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 mb-4">
                Houston, TX has a large selection of funeral homes including Bradshaw-Carter Memorial, Geo H Lewis &amp; Sons, and Memorial Oaks, all offering cremation and traditional burial services. Cremation in Houston typically costs between $2,200 and $6,500, while traditional burial ranges from $5,500 to $12,000.
              </p>
              <p className="text-gray-600">
                Below is our complete list of 13 funeral homes in Houston, with real pricing, addresses, and direct contact information so you can compare options and make the right choice for your family.
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
                Average Funeral Costs in Houston, TX
              </h2>
              <p className="text-gray-600 mb-4">
                Funeral costs in Houston vary depending on the type of service, the funeral home, and additional options like viewings, flowers, and cemetery fees. Here are the average costs you can expect in 2026:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Service Type</th>
                      <th className="border p-3 text-left">Houston Average Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-3">Direct Cremation</td><td className="border p-3">$1,200 to $3,500</td></tr>
                    <tr><td className="border p-3">Cremation with Memorial Service</td><td className="border p-3">$2,500 to $6,500</td></tr>
                    <tr><td className="border p-3">Traditional Burial</td><td className="border p-3">$6,000 to $12,000</td></tr>
                    <tr><td className="border p-3">Full Funeral with Viewing</td><td className="border p-3">$7,000 to $14,000+</td></tr>
                    <tr><td className="border p-3">Graveside Service Only</td><td className="border p-3">$2,000 to $4,500</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Prices are estimates based on Evermore Directory data and publicly available General Price Lists. Cemetery fees, flowers, and obituary costs are not included. Always request a current GPL from the funeral home.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Choose a Funeral Home in Houston
              </h2>
              <p className="text-gray-600 mb-4">
                Choosing a funeral home is one of the most important decisions you will make during a difficult time. Here are the key factors to consider when comparing Houston funeral homes:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                  <strong>Request the General Price List (GPL).</strong> Every funeral home is legally required to provide one under FTC law. Compare GPLs from at least two or three funeral homes before making a decision.
                </li>
                <li>
                  <strong>Consider location.</strong> Houston is one of the most spread-out cities in the country. A funeral home close to the family or cemetery can save significant drive time, especially during rush hour.
                </li>
                <li>
                  <strong>Ask about the services you need.</strong> Some families want a full traditional service with viewing. Others prefer a simple direct cremation. Make sure the funeral home offers what you are looking for at a price you can afford.
                </li>
                <li>
                  <strong>Read reviews.</strong> Google reviews can give you a sense of how other families were treated. Look for mentions of compassion, transparency, and follow-through.
                </li>
                <li>
                  <strong>Ask about payment options.</strong> Many Houston funeral homes offer payment plans or accept insurance assignments. Ask upfront so there are no surprises.
                </li>
                <li>
                  <strong>Check for specialized services.</strong> Some Houston funeral homes offer pet memorial services, cemetery plots on-site, or veterans services. Confirm the funeral home can meet your specific needs.
                </li>
              </ul>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Explore Funeral Homes in Nearby Cities
              </h2>
              <p className="text-gray-600 mb-4">
                Looking for options outside of Houston? Browse funeral homes in these nearby Texas cities:
              </p>
              <ul className="space-y-2">
                <li><Link href="/funeral-homes/tx/pearland" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Pearland, TX</Link></li>
                <li><Link href="/funeral-homes/tx/the-woodlands" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in The Woodlands, TX</Link></li>
                <li className="pt-2 mt-2 border-t border-gray-200"><Link href="/funeral-homes/tx" className="text-slate-600 hover:text-slate-800 font-medium">Browse All Texas Funeral Homes &rarr;</Link></li>
              </ul>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Related Reading
              </h2>
              <ul className="space-y-2">
                <li><Link href="/blog/funeral-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">How Much Does a Funeral Cost in 2026? Complete Price Guide &rarr;</Link></li>
                <li><Link href="/blog/direct-cremation-vs-traditional-funeral" className="text-slate-600 hover:text-slate-800 font-medium">Direct Cremation vs Traditional Funeral: How to Choose &rarr;</Link></li>
                <li><Link href="/blog/pre-planning-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">Pre-Planning a Funeral: Why It Matters and How to Do It &rarr;</Link></li>
              </ul>
            </section>

            <BlogFooterLinks />

            <section className="text-center mt-12">
              <Link
                href="/funeral-homes/tx/houston"
                className="inline-block bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                View All Houston Funeral Homes
              </Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
