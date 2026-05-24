import Link from 'next/link';
import { Metadata } from 'next';
import BlogFooterLinks from '@/components/BlogFooterLinks';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: '7 Best Funeral Homes in Cedar Rapids / Marion, IA (2026) | Prices & Services',
  description: 'Compare 7 funeral homes in Cedar Rapids and Marion, Iowa with real pricing, services, and contact info. Cremation from $1,195. Updated May 2026.',
  keywords: 'funeral homes cedar rapids ia, funeral homes marion iowa, best funeral homes cedar rapids, cremation cedar rapids, funeral services marion ia',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/best-funeral-homes-cedar-rapids-marion-ia',
  },
  openGraph: {
    title: '7 Best Funeral Homes in Cedar Rapids / Marion, IA (2026)',
    description: 'Compare 7 funeral homes in Cedar Rapids and Marion, Iowa with real pricing and services.',
    url: 'https://funeralhomedirectories.com/blog/best-funeral-homes-cedar-rapids-marion-ia',
    type: 'article',
  },
};

const funeralHomes = [
  {
    name: 'Murdoch Funeral Home - Marion',
    address: '3855 Katz Drive, Marion, IA',
    phone: '319-377-1553',
    cremation: '$1,295 to $5,000',
    burial: '$5,000 to $15,000',
    services: 'Funeral Services, Cremation, Pre-Planning, Chapel Services',
    url: '/funeral-homes/ia/marion/murdoch-funeral-home-marion',
  },
  {
    name: 'Brosh Chapel',
    address: '1029 C Avenue NE, Cedar Rapids, IA',
    phone: '319-362-8837',
    cremation: '$1,195 to $4,500',
    burial: '$4,500 to $14,000',
    services: 'Funeral Services, Cremation, Pre-Planning, Military Honors',
    url: '/funeral-homes/ia/cedar-rapids/brosh-chapel',
  },
  {
    name: 'Cedar Memorial',
    address: '4200 First Avenue NE, Cedar Rapids, IA',
    phone: '319-393-8000',
    cremation: '$1,395 to $5,500',
    burial: '$5,500 to $16,000',
    services: 'Funeral Services, Cremation, Cemetery, Pre-Planning',
    url: '/funeral-homes/ia/cedar-rapids/cedar-memorial',
  },
  {
    name: 'Murdoch Funeral Homes',
    address: '520 Wilson Avenue SW, Cedar Rapids, IA',
    phone: '319-364-1549',
    cremation: '$1,295 to $5,000',
    burial: '$5,000 to $15,000',
    services: 'Funeral Services, Cremation, Cemetery, Pre-Planning',
    url: '/funeral-homes/ia/cedar-rapids/murdoch-funeral-homes',
  },
  {
    name: 'Papich-Kuba Funeral Service',
    address: '311 Second Street SE, Cedar Rapids, IA',
    phone: '319-364-3211',
    cremation: '$1,195 to $4,500',
    burial: '$4,500 to $14,000',
    services: 'Funeral Services, Cremation, Pre-Planning, Traditional Services',
    url: '/funeral-homes/ia/cedar-rapids/papich-kuba-funeral-service',
  },
  {
    name: 'Stewart Baxter Funeral & Memorial Services',
    address: '1820 First Avenue NE, Cedar Rapids, IA',
    phone: '319-362-2147',
    cremation: '$1,295 to $5,000',
    burial: '$5,000 to $15,000',
    services: 'Funeral Services, Cremation, Pre-Planning, Veterans Services',
    url: '/funeral-homes/ia/cedar-rapids/stewart-baxter-funeral-memorial-services',
  },
  {
    name: 'Teahen Funeral Home',
    address: '3100 F Avenue NW, Cedar Rapids, IA',
    phone: '319-396-2616',
    cremation: '$1,295 to $5,000',
    burial: '$5,000 to $15,000',
    services: 'Funeral Services, Cremation, Pre-Planning, Reception Venue',
    url: '/funeral-homes/ia/cedar-rapids/teahen-funeral-home',
  },
];

export default function BestFuneralHomesCedarRapidsMarionPage() {
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
            { "@type": "ListItem", "position": 3, "name": "Funeral Homes Cedar Rapids Marion IA" }
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "7 Best Funeral Homes in Cedar Rapids / Marion, IA (2026) | Prices & Services",
          "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
          "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
          "datePublished": "2026-05-18",
          "dateModified": "2026-05-18",
          "url": "https://funeralhomedirectories.com/blog/best-funeral-homes-cedar-rapids-marion-ia"
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does a funeral cost in Cedar Rapids, Iowa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In Cedar Rapids, direct cremation starts at $1,195 and traditional burial ranges from $4,500 to $16,000 depending on the funeral home and services selected. Always request a General Price List from any funeral home you are considering."
              }
            },
            {
              "@type": "Question",
              "name": "Are there any funeral homes in Marion, Iowa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Murdoch Funeral Home on Katz Drive is the only funeral home physically located in Marion, Iowa. Several additional funeral homes in nearby Cedar Rapids, just minutes away, also serve Marion families."
              }
            },
            {
              "@type": "Question",
              "name": "Which Cedar Rapids funeral home has the lowest cremation price?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Brosh Chapel and Papich-Kuba Funeral Service both offer cremation services starting at $1,195, making them the most affordable cremation options in the Cedar Rapids area."
              }
            },
            {
              "@type": "Question",
              "name": "Which funeral homes in Cedar Rapids have an on-site crematory?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Stewart Baxter Funeral & Memorial Services operates an on-site crematory at their Cedar Rapids location. This means cremation is performed in-house rather than outsourced to a third party."
              }
            },
            {
              "@type": "Question",
              "name": "Can I pre-plan a funeral in Cedar Rapids or Marion?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All seven funeral homes listed in the Cedar Rapids and Marion area offer pre-planning services. Pre-planning allows you to lock in current pricing and make your wishes known in advance."
              }
            }
          ]
        }) }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                7 Best Funeral Homes in Cedar Rapids / Marion, IA (2026)
              </h1>
              <p className="text-sm text-gray-500 mb-3">
                By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic | Evermore Directory &middot; Last updated: May 2026
              </p>
              <p className="text-xl text-gray-600">
                Compare pricing, services, and contact information for funeral homes in Cedar Rapids and Marion, Iowa.
              </p>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 mb-4">
                Marion, Iowa is a city of about 40,000 residents on the northeast side of Cedar Rapids. If you are searching for a funeral home in Marion, your closest local option is Murdoch Funeral Home on Katz Drive. But the wider Cedar Rapids metro area, just minutes away, offers several additional providers worth comparing for price, services, or specific needs like veterans services or on-site cremation. Here are all 7 funeral homes serving the <Link href="/funeral-homes/ia/marion" className="text-slate-600 hover:text-slate-800">Marion</Link> and <Link href="/funeral-homes/ia/cedar-rapids" className="text-slate-600 hover:text-slate-800">Cedar Rapids</Link> area, with real pricing from their General Price Lists.
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
                What Sets Each Funeral Home Apart
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                  <strong>Murdoch Funeral Home, Marion:</strong> The only funeral home physically located in Marion. Part of the Murdoch family, which has been serving Iowa since 1847.
                </li>
                <li>
                  <strong>Brosh Chapel:</strong> Lowest starting cremation price in the area at $1,195. Also coordinates military honors for veteran families.
                </li>
                <li>
                  <strong>Cedar Memorial:</strong> A combined cemetery and funeral home with a florist on-site. Convenient for families who want all arrangements handled in one location.
                </li>
                <li>
                  <strong>Murdoch Funeral Homes, Cedar Rapids:</strong> Over 175 years of continuous service. Located on the grounds of Linwood Cemetery, with 6 locations across Iowa and 24/7/365 availability.
                </li>
                <li>
                  <strong>Papich-Kuba Funeral Service:</strong> Competitive cremation pricing starting at $1,195, matching Brosh Chapel as the most affordable cremation option in Cedar Rapids.
                </li>
                <li>
                  <strong>Stewart Baxter Funeral &amp; Memorial Services:</strong> Operates an on-site crematory, which is important for families who want cremation performed in-house rather than outsourced. Also has expertise in military and veterans services.
                </li>
                <li>
                  <strong>Teahen Funeral Home:</strong> Features the Monarch Room reception venue, which seats 165 guests. A strong choice for families planning a large gathering after the service.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Average Funeral Costs in Cedar Rapids / Marion, IA
              </h2>
              <p className="text-gray-600 mb-4">
                Funeral costs in the Cedar Rapids and Marion area vary depending on the provider, service type, and additional options like flowers, obituaries, and cemetery fees. Here are the typical price ranges based on Evermore Directory data for 2026:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Service Type</th>
                      <th className="border p-3 text-left">Cedar Rapids / Marion Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-3">Direct Cremation</td><td className="border p-3">$1,195 to $3,500</td></tr>
                    <tr><td className="border p-3">Cremation with Memorial Service</td><td className="border p-3">$3,000 to $5,500</td></tr>
                    <tr><td className="border p-3">Traditional Burial</td><td className="border p-3">$4,500 to $16,000</td></tr>
                    <tr><td className="border p-3">Full Funeral with Viewing</td><td className="border p-3">$6,000 to $16,000+</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Prices from Evermore Directory data. Always request a current GPL from the funeral home before making a decision.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Choose a Funeral Home in Cedar Rapids or Marion
              </h2>
              <p className="text-gray-600 mb-4">
                Choosing a funeral home is one of the most important decisions you will make during a difficult time. Here are the key factors to consider when comparing providers in the Cedar Rapids and Marion area:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                  <strong>Request the General Price List (GPL).</strong> Every funeral home is legally required to provide one under FTC law. Compare GPLs from at least two or three providers before committing.
                </li>
                <li>
                  <strong>Consider location.</strong> If you live in Marion, Murdoch on Katz Drive is the closest option. But Cedar Rapids funeral homes are only a short drive away, so do not rule them out based on distance alone.
                </li>
                <li>
                  <strong>Ask about cremation.</strong> If cremation is important to your family, ask whether the funeral home has an on-site crematory or outsources to a third party. Stewart Baxter operates its own crematory in Cedar Rapids.
                </li>
                <li>
                  <strong>Check for veterans services.</strong> If you are planning services for a veteran, Brosh Chapel and Stewart Baxter both have experience coordinating military honors.
                </li>
                <li>
                  <strong>Ask about reception space.</strong> If you expect a large gathering after the service, Teahen Funeral Home&apos;s Monarch Room seats 165 guests. Not all funeral homes have reception facilities.
                </li>
                <li>
                  <strong>Look into pre-planning.</strong> All seven funeral homes in this list offer pre-planning. Pre-arranging locks in current pricing and removes the burden of last-minute decisions from your family. Learn more in our <Link href="/blog/how-to-choose-a-funeral-home" className="text-slate-600 hover:text-slate-800">guide to choosing a funeral home</Link>.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How much does a funeral cost in Cedar Rapids, Iowa?</h3>
                  <p className="text-gray-600">
                    In Cedar Rapids, direct cremation starts at $1,195 and traditional burial ranges from $4,500 to $16,000 depending on the funeral home and services selected. Always request a General Price List from any funeral home you are considering.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Are there any funeral homes in Marion, Iowa?</h3>
                  <p className="text-gray-600">
                    Murdoch Funeral Home on Katz Drive is the only funeral home physically located in Marion, Iowa. Several additional funeral homes in nearby Cedar Rapids, just minutes away, also serve Marion families.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Which Cedar Rapids funeral home has the lowest cremation price?</h3>
                  <p className="text-gray-600">
                    Brosh Chapel and Papich-Kuba Funeral Service both offer cremation services starting at $1,195, making them the most affordable cremation options in the Cedar Rapids area.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Which funeral homes in Cedar Rapids have an on-site crematory?</h3>
                  <p className="text-gray-600">
                    Stewart Baxter Funeral &amp; Memorial Services operates an on-site crematory at their Cedar Rapids location. This means cremation is performed in-house rather than outsourced to a third party.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I pre-plan a funeral in Cedar Rapids or Marion?</h3>
                  <p className="text-gray-600">
                    Yes. All seven funeral homes listed in the Cedar Rapids and Marion area offer pre-planning services. Pre-planning allows you to lock in current pricing and make your wishes known in advance.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Related Articles
              </h2>
              <ul className="space-y-2">
                <li><Link href="/funeral-costs" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Costs by State &rarr;</Link></li>
                <li><Link href="/blog/cremation-costs-2026" className="text-slate-600 hover:text-slate-800 font-medium">Cremation Costs in 2026: What to Expect &rarr;</Link></li>
                <li><Link href="/blog/how-to-choose-a-funeral-home" className="text-slate-600 hover:text-slate-800 font-medium">How to Choose a Funeral Home &rarr;</Link></li>
                <li><Link href="/blog/burial-vs-cremation" className="text-slate-600 hover:text-slate-800 font-medium">Burial vs Cremation: Comparing Your Options &rarr;</Link></li>
              </ul>
            </section>

            <BlogFooterLinks />

            <div className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes near you</p>
              <p className="text-slate-600 text-sm mb-5">Search 7,395+ funeral homes and cremation providers across all 50 states.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </div>

            <p className="text-sm text-gray-400 text-center mt-8">
              Last updated: May 2026
            </p>
          </article>
        </div>
      </main>
    </>
  );
}
