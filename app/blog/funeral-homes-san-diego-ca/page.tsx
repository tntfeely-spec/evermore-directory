import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: '10 Funeral Homes in San Diego, CA (2026) | Prices & Services | Evermore Directory',
  description: 'Compare the top 10 funeral homes in San Diego with pricing, services, and contact information. Updated for 2026.',
  keywords: 'funeral homes san diego ca, san diego funeral homes, cremation san diego, funeral services san diego california',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/funeral-homes-san-diego-ca' },
  openGraph: {
    title: '10 Funeral Homes in San Diego, CA (2026) | Prices & Services',
    description: 'Compare the top 10 funeral homes in San Diego with pricing, services, and contact information. Updated for 2026.',
    url: 'https://funeralhomedirectories.com/blog/funeral-homes-san-diego-ca',
    type: 'article',
  },
};

const funeralHomes = [
  { name: 'Greenwood Memorial Park and Mortuary', address: '4300 Imperial Ave, San Diego, CA 92113', phone: '619-264-3131', cremation: '$2,500 to $6,000', burial: '$7,000 to $15,000', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning, Cemetery', url: '/funeral-homes/ca/san-diego/greenwood-memorial-park-and-mortuary' },
  { name: 'Anderson-Ragsdale Mortuary', address: '5050 Federal Blvd, San Diego, CA 92102', phone: '619-263-3141', cremation: '$2,500 to $5,500', burial: '$6,000 to $13,000', services: 'Traditional Funeral, Cremation, Memorial Services', url: '/funeral-homes/ca/san-diego/anderson-ragsdale-mortuary' },
  { name: 'Featheringill Mortuary', address: '6322 El Cajon Blvd, San Diego, CA 92115', phone: '619-583-9511', cremation: '$2,000 to $5,000', burial: '$5,500 to $12,000', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning', url: '/funeral-homes/ca/san-diego/featheringill-mortuary' },
  { name: 'California Cremation & Burial', address: '5880 El Cajon Blvd, San Diego, CA 92115', phone: '619-234-3272', cremation: '$1,500 to $4,000', burial: '$5,000 to $11,000', services: 'Cremation, Burial, Memorial Services, Pre-Planning', url: '/funeral-homes/ca/san-diego/california-cremation-burial' },
  { name: 'Clairemont Mortuary', address: '4266 Mt Abernathy Ave, San Diego, CA 92117', phone: '858-279-2211', cremation: '$2,200 to $5,000', burial: '$5,500 to $12,000', services: 'Traditional Funeral, Cremation, Memorial Services', url: '/funeral-homes/ca/san-diego/clairemont-mortuary' },
  { name: 'Cali Home Funeral Services', address: '7401 Princess View Dr Ste A, San Diego, CA 92120', phone: '619-708-9716', cremation: '$1,800 to $4,500', burial: '$5,000 to $10,000', services: 'Traditional Funeral, Cremation, Memorial Services, Home Funerals', url: '/funeral-homes/ca/san-diego/cali-home-funeral-services' },
  { name: 'Bravo Family Mortuary', address: '4427 Rainier Avenue, San Diego, CA 92120', phone: '619-583-0600', cremation: '$2,000 to $4,500', burial: '$5,000 to $11,000', services: 'Traditional Funeral, Cremation, Memorial Services', url: '/funeral-homes/ca/san-diego/bravo-family-mortuary' },
  { name: 'Bayview Crematory & Burial Services', address: '4666 Mercury St, San Diego, CA 92111', phone: '858-634-1046', cremation: '$1,200 to $3,500', burial: '$4,000 to $9,000', services: 'Cremation, Burial, Memorial Services', url: '/funeral-homes/ca/san-diego/bayview-crematory-burial-services' },
  { name: 'Care Center Cremation & Burial', address: '7403 Princess View Dr Ste E, San Diego, CA 92120', phone: '619-286-2600', cremation: '$1,500 to $3,500', burial: '$4,500 to $10,000', services: 'Cremation, Burial, Memorial Services', url: '/funeral-homes/ca/san-diego/care-center-cremation-burial' },
  { name: 'Funerals Your Way', address: '4858 Mercury St Suite 102, San Diego, CA 92111', phone: '619-550-7807', cremation: '$995 to $3,000', burial: 'N/A', services: 'Cremation, Memorial Services, Direct Cremation', url: '/funeral-homes/ca/san-diego/funerals-your-way' },
];

export default function FuneralHomesSanDiegoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://funeralhomedirectories.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Funeral Homes in San Diego, CA" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "10 Funeral Homes in San Diego, CA (2026) | Prices & Services",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-04-22", "dateModified": "2026-04-22",
        "url": "https://funeralhomedirectories.com/blog/funeral-homes-san-diego-ca"
      }) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">10 Funeral Homes in San Diego, CA (2026) | Prices &amp; Services</h1>
              <p className="text-sm text-gray-500 mb-3">By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic | Evermore Directory &middot; Last updated: April 2026</p>
              <p className="text-xl text-gray-600">Compare pricing, services, and contact information for San Diego&apos;s top funeral homes.</p>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 mb-4">San Diego is served by a wide range of funeral homes including Greenwood Memorial Park and Mortuary, Anderson-Ragsdale Mortuary, and Featheringill Mortuary, offering both cremation and traditional burial services. Cremation in San Diego typically costs between $995 and $6,000, while traditional burial ranges from $4,000 to $15,000.</p>
              <p className="text-gray-600">Below is our complete list of 10 funeral homes in San Diego, with real pricing, addresses, and direct contact information so you can compare options and make the right choice for your family.</p>
            </section>

            {funeralHomes.map((home, i) => (
              <section key={home.url} className="mb-8 bg-slate-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{i + 1}. {home.name}</h2>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p><strong>Address:</strong> {home.address}</p>
                  <p><strong>Phone:</strong> <a href={`tel:${home.phone.replace(/\D/g, '')}`} className="text-slate-600 hover:text-slate-800">{home.phone}</a></p>
                  <p><strong>Services:</strong> {home.services}</p>
                  <p><strong>Cremation:</strong> {home.cremation}</p>
                  <p><strong>Burial:</strong> {home.burial}</p>
                </div>
                <Link href={home.url} className="inline-block text-slate-600 font-medium hover:text-slate-800">View full profile, services &amp; pricing &rarr;</Link>
              </section>
            ))}

            <section className="mb-10 bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Average Funeral Costs in San Diego, CA</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead><tr className="bg-gray-50 border-b border-gray-200"><th className="text-left px-4 py-3 font-semibold text-gray-700">Service Type</th><th className="text-left px-4 py-3 font-semibold text-gray-700">Estimated Cost Range</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Direct Cremation</td><td className="px-4 py-3 text-gray-700">$995 to $3,500</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Cremation with Memorial Service</td><td className="px-4 py-3 text-gray-700">$3,500 to $6,000</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Traditional Burial</td><td className="px-4 py-3 text-gray-700">$5,000 to $15,000</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Full Funeral with Viewing</td><td className="px-4 py-3 text-gray-700">$7,000 to $15,000+</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic mt-4">Prices are estimates based on publicly available General Price Lists from San Diego funeral homes. Always request the current GPL from each provider.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Choose a Funeral Home in San Diego</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">1.</span><span>Contact multiple San Diego funeral homes to compare pricing. Costs can vary significantly between providers.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">2.</span><span>Request the General Price List (GPL) from each provider. They are required by federal law to provide it.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">3.</span><span>Ask about experience with your cultural or religious traditions. San Diego has providers serving Hispanic, Filipino, Vietnamese, and many other communities.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">4.</span><span>Consider location and accessibility. San Diego is spread across a large area, so proximity matters.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">5.</span><span>Verify the funeral home is licensed with the California Cemetery and Funeral Bureau.</span></li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Funeral Homes in Nearby San Diego County Cities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Link href="/funeral-homes/ca/chula-vista" className="text-slate-600 hover:text-slate-800 hover:underline py-2">Chula Vista</Link>
                <Link href="/funeral-homes/ca/el-cajon" className="text-slate-600 hover:text-slate-800 hover:underline py-2">El Cajon</Link>
                <Link href="/funeral-homes/ca/santee" className="text-slate-600 hover:text-slate-800 hover:underline py-2">Santee</Link>
                <Link href="/funeral-homes/ca/escondido" className="text-slate-600 hover:text-slate-800 hover:underline py-2">Escondido</Link>
                <Link href="/funeral-homes/ca/oceanside" className="text-slate-600 hover:text-slate-800 hover:underline py-2">Oceanside</Link>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/how-to-plan-a-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">How to Plan a Funeral</h3><p className="text-sm text-gray-600">Step-by-step guide to planning funeral services.</p></Link>
                <Link href="/blog/ftc-funeral-rule-explained" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">FTC Funeral Rule Explained</h3><p className="text-sm text-gray-600">Your rights when purchasing funeral services.</p></Link>
                <Link href="/blog/cremation-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">Cremation Costs in 2026</h3><p className="text-sm text-gray-600">State-by-state cremation pricing guide.</p></Link>
                <Link href="/funeral-homes/ca/san-diego" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">All San Diego Funeral Homes</h3><p className="text-sm text-gray-600">Browse the complete San Diego directory.</p></Link>
              </div>
            </section>

            <div className="text-center mt-10"><Link href="/funeral-homes/ca/san-diego" className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors">Browse All San Diego Funeral Homes</Link></div>
          </article>
        </div>
      </main>
    </>
  );
}
