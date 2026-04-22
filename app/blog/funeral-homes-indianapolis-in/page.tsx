import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: '10 Funeral Homes in Indianapolis, IN (2026) | Prices & Services | Evermore Directory',
  description: 'Compare the top 10 funeral homes in Indianapolis with pricing, services, and contact information. Updated for 2026.',
  keywords: 'funeral homes indianapolis in, indianapolis funeral homes, cremation indianapolis, funeral services indianapolis indiana',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/funeral-homes-indianapolis-in' },
  openGraph: {
    title: '10 Funeral Homes in Indianapolis, IN (2026) | Prices & Services',
    description: 'Compare the top 10 funeral homes in Indianapolis with pricing, services, and contact information. Updated for 2026.',
    url: 'https://funeralhomedirectories.com/blog/funeral-homes-indianapolis-in',
    type: 'article',
  },
};

const funeralHomes = [
  { name: 'Flanner Buchanan, Washington Park North', address: '2706 Kessler Boulevard West Dr, Indianapolis, IN 46228', phone: '317-251-5959', cremation: '$2,500 to $6,000', burial: '$6,000 to $10,500', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning, Veterans Services', url: '/funeral-homes/in/indianapolis/flanner-buchanan-washington-park-north' },
  { name: 'G.H. Herrmann Funeral Homes', address: '5141 Madison Ave, Indianapolis, IN 46227', phone: '317-787-7211', cremation: '$1,800 to $5,000', burial: '$5,000 to $11,000', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning', url: '/funeral-homes/in/indianapolis/gh-herrmann-funeral-homes' },
  { name: 'Shirley Brothers Funeral Homes & Crematory', address: 'Multiple Indianapolis Locations', phone: '317-897-9606', cremation: '$2,000 to $5,500', burial: '$5,500 to $11,000', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning', url: '/funeral-homes/in/indianapolis/shirley-brothers-funeral-homes-crematory' },
  { name: 'Flanner Buchanan, Floral Park', address: '425 N Holt Rd, Indianapolis, IN 46222', phone: '317-241-9311', cremation: '$2,200 to $6,000', burial: '$6,000 to $12,000', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning, Veterans Services, Grief Support', url: '/funeral-homes/in/indianapolis/flanner-buchanan-floral-park' },
  { name: 'Flanner Buchanan, Montcalm', address: '2020 Montcalm St, Indianapolis, IN 46202', phone: '317-387-7000', cremation: '$2,500 to $6,500', burial: '$6,500 to $12,000', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning', url: '/funeral-homes/in/indianapolis/flanner-buchanan-montcalm' },
  { name: 'G.H. Herrmann Funeral Home, East', address: '1505 South East Street, Indianapolis, IN 46225', phone: '317-787-7211', cremation: '$2,200 to $5,500', burial: '$6,000 to $11,000', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning, Veterans Services', url: '/funeral-homes/in/indianapolis/gh-herrmann-funeral-home-east' },
  { name: 'G.H. Herrmann Funeral Home, Madison', address: '5141 Madison Avenue, Indianapolis, IN 46227', phone: '317-787-7211', cremation: '$3,000 to $6,000', burial: '$7,000 to $11,000', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning, Grief Support', url: '/funeral-homes/in/indianapolis/gh-herrmann-funeral-home-madison' },
  { name: 'Flanner Buchanan, Decatur Township', address: '5463 Kentucky Ave, Indianapolis, IN 46221', phone: '317-856-2627', cremation: '$2,500 to $5,000', burial: '$6,500 to $11,000', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning, Grief Support', url: '/funeral-homes/in/indianapolis/flanner-buchanan-decatur-township' },
  { name: 'Flanner Buchanan, Memorial Park', address: '9350 E Washington St, Indianapolis, IN 46229', phone: '317-898-4462', cremation: '$2,800 to $6,000', burial: '$5,500 to $12,000', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning, Veterans Services', url: '/funeral-homes/in/indianapolis/flanner-buchanan-memorial-park' },
  { name: 'Flanner Buchanan, Oaklawn Memorial Gardens', address: '9700 Allisonville Rd, Indianapolis, IN 46250', phone: '317-849-3616', cremation: '$2,800 to $6,000', burial: '$5,500 to $12,000', services: 'Traditional Funeral, Cremation, Memorial Services, Pre-Planning', url: '/funeral-homes/in/indianapolis/flanner-buchanan-oaklawn-memorial-gardens' },
];

export default function FuneralHomesIndianapolisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://funeralhomedirectories.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Funeral Homes in Indianapolis, IN" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "10 Funeral Homes in Indianapolis, IN (2026) | Prices & Services",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-04-22", "dateModified": "2026-04-22",
        "url": "https://funeralhomedirectories.com/blog/funeral-homes-indianapolis-in"
      }) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">10 Funeral Homes in Indianapolis, IN (2026) | Prices &amp; Services</h1>
              <p className="text-sm text-gray-500 mb-3">By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic | Evermore Directory &middot; Last updated: April 2026</p>
              <p className="text-xl text-gray-600">Compare pricing, services, and contact information for Indianapolis&apos;s top funeral homes.</p>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 mb-4">Indianapolis is served by several well-established funeral home families including Flanner Buchanan (with six locations across the metro), G.H. Herrmann Funeral Homes, and Shirley Brothers Funeral Homes &amp; Crematory. Cremation in Indianapolis typically costs between $1,800 and $6,500, while traditional burial ranges from $5,000 to $12,000.</p>
              <p className="text-gray-600">Below is our complete list of 10 funeral homes in Indianapolis, with real pricing, addresses, and direct contact information so you can compare options and make the right choice for your family.</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Average Funeral Costs in Indianapolis, IN</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead><tr className="bg-gray-50 border-b border-gray-200"><th className="text-left px-4 py-3 font-semibold text-gray-700">Service Type</th><th className="text-left px-4 py-3 font-semibold text-gray-700">Estimated Cost Range</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Direct Cremation</td><td className="px-4 py-3 text-gray-700">$1,800 to $3,500</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Cremation with Memorial Service</td><td className="px-4 py-3 text-gray-700">$3,500 to $6,500</td></tr>
                    <tr className="border-b border-gray-100"><td className="px-4 py-3 text-gray-700">Traditional Burial</td><td className="px-4 py-3 text-gray-700">$5,000 to $12,000</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Full Funeral with Viewing</td><td className="px-4 py-3 text-gray-700">$6,500 to $12,000+</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic mt-4">Prices are estimates based on publicly available General Price Lists from Indianapolis funeral homes. Always request the current GPL from each provider.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Choose a Funeral Home in Indianapolis</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">1.</span><span>Contact multiple Indianapolis funeral homes to compare pricing. Costs can vary significantly between providers.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">2.</span><span>Request the General Price List (GPL) from each provider. They are required by federal law to provide it.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">3.</span><span>Ask about experience with your cultural or religious traditions.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">4.</span><span>Consider location and accessibility for family members attending services.</span></li>
                <li className="flex items-start"><span className="text-slate-600 font-bold mr-3">5.</span><span>Verify the funeral home is licensed with the Indiana Professional Licensing Agency.</span></li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Funeral Homes in Nearby Indianapolis Metro Cities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Link href="/funeral-homes/in/carmel" className="text-slate-600 hover:text-slate-800 hover:underline py-2">Carmel</Link>
                <Link href="/funeral-homes/in/fishers" className="text-slate-600 hover:text-slate-800 hover:underline py-2">Fishers</Link>
                <Link href="/funeral-homes/in/greenwood" className="text-slate-600 hover:text-slate-800 hover:underline py-2">Greenwood</Link>
                <Link href="/funeral-homes/in/anderson" className="text-slate-600 hover:text-slate-800 hover:underline py-2">Anderson</Link>
                <Link href="/funeral-homes/in/noblesville" className="text-slate-600 hover:text-slate-800 hover:underline py-2">Noblesville</Link>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/how-to-plan-a-funeral" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">How to Plan a Funeral</h3><p className="text-sm text-gray-600">Step-by-step guide to planning funeral services.</p></Link>
                <Link href="/blog/ftc-funeral-rule-explained" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">FTC Funeral Rule Explained</h3><p className="text-sm text-gray-600">Your rights when purchasing funeral services.</p></Link>
                <Link href="/blog/cremation-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">Cremation Costs in 2026</h3><p className="text-sm text-gray-600">State-by-state cremation pricing guide.</p></Link>
                <Link href="/funeral-homes/in/indianapolis" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-semibold text-slate-600 mb-1">All Indianapolis Funeral Homes</h3><p className="text-sm text-gray-600">Browse the complete Indianapolis directory.</p></Link>
              </div>
            </section>

            <div className="text-center mt-10"><Link href="/funeral-homes/in/indianapolis" className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors">Browse All Indianapolis Funeral Homes</Link></div>
          </article>
        </div>
      </main>
    </>
  );
}
