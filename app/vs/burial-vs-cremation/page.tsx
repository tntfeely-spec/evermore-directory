import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Burial vs Cremation: Cost, Process, and Complete Comparison (2026)',
  description: 'Burial with a full funeral service costs a median of $7,848 while direct cremation ranges from $695 to $3,500. Compare cost, process, environmental impact, and religious considerations.',
  alternates: { canonical: 'https://funeralhomedirectories.com/vs/burial-vs-cremation' },
  openGraph: {
    title: 'Burial vs Cremation: Cost, Process, and Complete Comparison (2026)',
    description: 'Burial with a full funeral service costs a median of $7,848 while direct cremation ranges from $695 to $3,500.',
    url: 'https://funeralhomedirectories.com/vs/burial-vs-cremation',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'Is cremation cheaper than burial?', a: 'Yes. Direct cremation costs $695 to $3,500, while a traditional burial with funeral service has a national median cost of $7,848 before cemetery expenses. When you include the cemetery plot, vault, and headstone, burial typically costs $10,000 to $15,000 or more.' },
  { q: 'Can you have a funeral service with cremation?', a: 'Yes. Families can hold a full funeral service with the body present before cremation, or they can choose direct cremation followed by a memorial service at any time. Cremation does not prevent a formal gathering or ceremony.' },
  { q: 'Which religions prohibit cremation?', a: 'Islam and Orthodox Judaism prohibit cremation. The Catholic Church permitted cremation starting in 1963, though it prefers burial and requires that cremated remains be kept in a sacred place rather than scattered. Most Protestant denominations, Hinduism, and Buddhism accept or encourage cremation.' },
  { q: 'Is cremation better for the environment than burial?', a: 'Standard cremation uses less land and avoids embalming chemicals, but it does release carbon emissions from the burning process. Green burial, which skips embalming, vaults, and non-biodegradable caskets, is considered the most environmentally friendly option overall.' },
  { q: 'Can you be buried without embalming?', a: 'Yes. Embalming is not required by law in most states. If burial takes place within 24 to 48 hours, or if the body is kept refrigerated, embalming can be skipped. Green burial cemeteries specifically prohibit embalming.' },
];

export default function BurialVsCremationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Burial vs Cremation: Complete Comparison",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/vs/burial-vs-cremation"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": "https://funeralhomedirectories.com/vs" },
          { "@type": "ListItem", "position": 3, "name": "Burial vs Cremation" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      }) }} />
      <Navigation />

      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/glossary" className="text-slate-600 hover:text-slate-800">Resources</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Burial vs Cremation</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Burial vs Cremation: Complete Comparison</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Cremation now accounts for over 60 percent of all dispositions in the United States, surpassing burial for the first time in 2015. The national median cost of a burial with full funeral service is approximately $7,848, while direct cremation costs $695 to $3,500. Both options are dignified, legal in all 50 states, and compatible with most religious traditions. The best choice depends on your family&apos;s values, budget, cultural background, and the wishes of the person who has died.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Factor</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Burial</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Cremation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Total cost</td><td className="px-4 py-3">$7,000 to $15,000+</td><td className="px-4 py-3">$695 to $6,000</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Environmental impact</td><td className="px-4 py-3">Higher (embalming chemicals, vault, land use)</td><td className="px-4 py-3">Lower, though produces carbon emissions</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Land use</td><td className="px-4 py-3">Requires cemetery plot</td><td className="px-4 py-3">No land required (optional niche or plot)</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Religious compatibility</td><td className="px-4 py-3">Accepted or required by all major faiths</td><td className="px-4 py-3">Accepted by most faiths, prohibited in Islam and Orthodox Judaism</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Timeline</td><td className="px-4 py-3">3 to 7 days from death to burial</td><td className="px-4 py-3">5 to 10 days for remains to be returned</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Flexibility</td><td className="px-4 py-3">Service must occur before burial</td><td className="px-4 py-3">Memorial can happen at any time</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Permanence</td><td className="px-4 py-3">Fixed location in cemetery</td><td className="px-4 py-3">Portable, can be divided or scattered</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Customization</td><td className="px-4 py-3">Casket, headstone, and plot design</td><td className="px-4 py-3">Urn, scattering location, keepsake jewelry</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Memorial options</td><td className="px-4 py-3">Gravesite serves as permanent memorial</td><td className="px-4 py-3">Columbarium niche, scattering garden, or home display</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Family gathering</td><td className="px-4 py-3">Structured viewing, service, and graveside ceremony</td><td className="px-4 py-3">Flexible gathering on family&apos;s schedule</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Cultural tradition</td><td className="px-4 py-3">Deep roots in Western and Abrahamic traditions</td><td className="px-4 py-3">Common in Eastern traditions, growing rapidly in the West</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Disposition method</td><td className="px-4 py-3">Body placed in casket and interred in ground or mausoleum</td><td className="px-4 py-3">Body reduced to bone fragments through high heat</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Burial Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Burial, also called interment, is the practice of placing the body in a casket and laying it to rest in a cemetery plot or mausoleum. In the United States, burial has been the dominant form of disposition for centuries, though cremation overtook it in 2015. A traditional burial typically involves embalming the body, holding a viewing or visitation, conducting a funeral service at a chapel or house of worship, and then transporting the casket to the cemetery for a graveside ceremony.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Most cemeteries require a burial vault or grave liner to prevent the ground from settling over time. This adds $1,000 to $10,000 to the overall cost. The cemetery plot itself ranges from $500 in rural areas to $10,000 or more in major cities. A headstone or grave marker adds another $500 to $5,000. For families who want a permanent, fixed location to visit their loved one, burial provides a tangible place of remembrance that endures across generations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Families interested in reducing the environmental footprint of burial may consider a <Link href="/what-is-a-green-burial" className="text-slate-600 hover:text-slate-800 font-medium">green burial</Link>, which eliminates embalming, uses a biodegradable casket or shroud, and skips the vault entirely. Green burial cemeteries are growing in number across the country and offer a nature-focused alternative to conventional burial.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cremation Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cremation uses high heat (1,400 to 1,800 degrees Fahrenheit) to reduce the body to bone fragments, which are then processed into a fine powder commonly called ashes or cremated remains. The entire process takes two to three hours. Afterward, the remains are placed in a temporary container or a family-selected urn and returned to the next of kin.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cremation comes in several forms. <Link href="/what-is-direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">Direct cremation</Link> is the simplest and least expensive option, costing $695 to $3,500 with no viewing, embalming, or formal service beforehand. Cremation with a memorial service adds $1,000 to $3,000 for facility rental and coordination. A full funeral service followed by cremation (instead of burial) costs roughly the same as a traditional funeral minus the cemetery expenses.
            </p>
            <p className="text-gray-600 leading-relaxed">
              One of cremation&apos;s greatest advantages is flexibility. Families can keep the remains at home, scatter them at a meaningful location (where legally permitted), place them in a columbarium niche, or bury them in a cemetery plot that is smaller and less expensive than a full casket plot. Cremated remains can also be divided among family members, allowing multiple people to keep a portion.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost Comparison</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Burial Costs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Basic services fee: $1,500 to $3,000</li>
                    <li>Embalming: $500 to $800</li>
                    <li>Viewing facilities: $300 to $1,500</li>
                    <li>Funeral service: $300 to $1,000</li>
                    <li>Casket: $1,000 to $10,000</li>
                    <li>Hearse and procession: $200 to $800</li>
                    <li>Cemetery plot: $500 to $10,000</li>
                    <li>Burial vault: $1,000 to $10,000</li>
                    <li>Headstone: $500 to $5,000</li>
                    <li className="font-bold pt-2 border-t">Total: $7,000 to $15,000+</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Cremation Costs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Basic services fee: $300 to $2,000</li>
                    <li>Transportation: $200 to $500</li>
                    <li>Cremation fee: $200 to $400</li>
                    <li>Cremation container: $50 to $200</li>
                    <li>Permits and paperwork: $50 to $200</li>
                    <li>Urn (optional): $50 to $2,000</li>
                    <li>Memorial service (optional): $1,000 to $3,000</li>
                    <li className="font-bold pt-2 border-t">Direct cremation total: $695 to $3,500</li>
                    <li className="font-bold">With memorial service: $2,000 to $6,000</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                For a detailed breakdown by location, see our <Link href="/funeral-costs" className="text-slate-600 hover:text-slate-800 font-medium">funeral costs by state</Link> guide.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Choose Burial</h2>
            <p className="text-gray-600 leading-relaxed">
              Burial is the right choice when your faith requires it, such as in Islam or Orthodox Judaism. It is also well-suited for families who want a permanent, physical location to visit and maintain over the years. Many people find comfort in the structured progression of a traditional funeral: viewing, service, procession, and graveside ceremony. If the deceased expressed a preference for burial, or if your family has an existing cemetery plot, burial is the natural path. Burial also provides closure through a clearly defined sequence of events that brings the community together in a shared experience.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Choose Cremation</h2>
            <p className="text-gray-600 leading-relaxed">
              Cremation is the right choice when cost is a primary concern, when the deceased requested it, or when your family values flexibility over tradition. Cremation works well for families who are geographically spread out and cannot gather on short notice, since a memorial service can be held weeks or months later. It is also practical when there is no family cemetery plot or when you prefer not to commit to ongoing grave maintenance. If environmental impact matters to your family, cremation uses less land than conventional burial, though <Link href="/what-is-a-green-burial" className="text-slate-600 hover:text-slate-800 font-medium">green burial</Link> remains the most eco-friendly option.
            </p>
          </section>

          <section className="mb-10 bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map(faq => (
                <div key={faq.q}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Direct Cremation?</h3>
                <p className="text-sm text-gray-600">Complete guide to cost, process, and legal requirements.</p>
              </Link>
              <Link href="/what-is-a-green-burial" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Green Burial?</h3>
                <p className="text-sm text-gray-600">How natural burial works, what it costs, and where to find green cemeteries.</p>
              </Link>
              <Link href="/funeral-costs" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs by State</h3>
                <p className="text-sm text-gray-600">State-by-state cost breakdown for burial and cremation.</p>
              </Link>
              <Link href="/glossary" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Glossary</h3>
                <p className="text-sm text-gray-600">115 terms explained in plain language.</p>
              </Link>
            </div>
          </section>

          <div className="text-center text-sm text-gray-400">
            <p>No popups. No pressure. Built for families.</p>
          </div>
        </div>
      </main>
    </>
  );
}
