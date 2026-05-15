import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Casket vs Coffin: Shape, Cost, and Key Differences (2026)',
  description: 'A casket is rectangular with a hinged lid, while a coffin is tapered and wider at the shoulders. Caskets cost $1,000 to $10,000 and coffins cost $500 to $5,000. Compare shape, materials, and usage.',
  alternates: { canonical: 'https://funeralhomedirectories.com/vs/casket-vs-coffin' },
  openGraph: {
    title: 'Casket vs Coffin: Shape, Cost, and Key Differences (2026)',
    description: 'A casket is rectangular with a hinged lid, while a coffin is tapered and wider at the shoulders. Compare shape, cost, materials, and regional usage.',
    url: 'https://funeralhomedirectories.com/vs/casket-vs-coffin',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'Are caskets and coffins the same thing?', a: 'No. While both are burial containers, they differ in shape. A casket is rectangular with four straight sides and a split or full hinged lid. A coffin is hexagonal or octagonal, wider at the shoulders and narrower at the head and feet. In everyday American English the words are often used interchangeably, but they describe distinct products.' },
  { q: 'Why are caskets more popular than coffins in the United States?', a: 'Caskets became the standard in the United States during the mid-1800s when the funeral industry shifted toward embalming and open-casket viewings. The rectangular shape provides more interior room and a flat, padded lid that frames the upper body during a viewing. Coffins remain common in Europe and the United Kingdom, where tapered designs never fell out of use.' },
  { q: 'Can you be cremated in a coffin instead of a casket?', a: 'Yes. Cremation requires only a rigid, combustible container. Both caskets and coffins meet this requirement, as do simple cremation containers made from cardboard or pressed wood. Most families choosing cremation select the least expensive container available rather than a full casket or coffin.' },
  { q: 'Is a coffin cheaper than a casket?', a: 'Generally yes. Coffins use less material due to their tapered shape and are typically priced between $500 and $5,000. Caskets range from $1,000 to $10,000 or more depending on material and finish. However, coffins are harder to find in the United States, so limited availability can offset the price difference.' },
  { q: 'Do funeral homes sell coffins?', a: 'Most American funeral homes stock only caskets. If you want a coffin, you may need to order one from a specialty retailer or an overseas supplier. Under the FTC Funeral Rule, funeral homes must accept a casket or coffin purchased from a third party and cannot charge a handling fee for doing so.' },
];

export default function CasketVsCoffinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Casket vs Coffin: Complete Comparison",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/vs/casket-vs-coffin"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": "https://funeralhomedirectories.com/vs" },
          { "@type": "ListItem", "position": 3, "name": "Casket vs Coffin" }
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
            <Link href="/vs" className="text-slate-600 hover:text-slate-800">Comparisons</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Casket vs Coffin</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Casket vs Coffin: Complete Comparison</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The primary difference between a casket and a coffin is shape. A casket is rectangular with a hinged lid, while a coffin is tapered, wider at the shoulders and narrower at the head and feet. In the United States, caskets are used in over 95 percent of burial funerals, while coffins are more common in Europe, the United Kingdom, and some religious traditions. Casket prices range from $1,000 to $10,000, while coffins typically cost $500 to $5,000.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Factor</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Casket</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Coffin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Shape</td><td className="px-4 py-3">Rectangular with four straight sides</td><td className="px-4 py-3">Hexagonal or octagonal, tapered at head and feet</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Common usage</td><td className="px-4 py-3">Standard in the United States and Canada</td><td className="px-4 py-3">Standard in Europe, UK, and parts of Africa</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Cost range</td><td className="px-4 py-3">$1,000 to $10,000</td><td className="px-4 py-3">$500 to $5,000</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Materials</td><td className="px-4 py-3">Wood, metal (steel, copper, bronze), fiberglass</td><td className="px-4 py-3">Wood (pine, oak, willow), wicker, cardboard</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Lid style</td><td className="px-4 py-3">Split lid (half-couch) or full lid (full-couch)</td><td className="px-4 py-3">Single removable or hinged lid</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Interior lining</td><td className="px-4 py-3">Padded fabric (velvet, crepe, satin)</td><td className="px-4 py-3">Simple cloth or unlined</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Weight</td><td className="px-4 py-3">150 to 450 pounds (heavier with metal)</td><td className="px-4 py-3">50 to 200 pounds</td></tr>
                  <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Regional preference</td><td className="px-4 py-3">North America, parts of Asia</td><td className="px-4 py-3">Europe, United Kingdom, Australia, New Zealand</td></tr>
                  <tr className="border-b"><td className="px-4 py-3 font-medium">Religious associations</td><td className="px-4 py-3">No specific religious requirement</td><td className="px-4 py-3">Traditional in some Christian and Jewish communities</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Availability in US</td><td className="px-4 py-3">Widely available at all funeral homes</td><td className="px-4 py-3">Limited, often requires specialty order</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Casket Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A <Link href="/glossary#casket" className="text-slate-600 hover:text-slate-800 font-medium">casket</Link> is a rectangular burial container with a hinged lid, typically constructed from wood or metal. The word comes from the French word for &quot;jewel box,&quot; reflecting the ornamental design that became popular in the United States during the 19th century. Modern caskets come in two lid styles: half-couch (split lid that opens at the top to reveal the upper body) and full-couch (single lid that opens entirely). The half-couch design is by far the most common choice for open-casket viewings.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Metal caskets made from steel, copper, or bronze are designed to resist moisture and slow decomposition. Steel caskets are categorized by gauge, with 18-gauge being standard and 20-gauge being thinner and less expensive. Wood caskets are available in pine, poplar, cherry, mahogany, and walnut. Interiors are lined with padded fabric, usually crepe, velvet, or satin, and may include an adjustable mattress and pillow. Most American funeral homes carry 30 to 50 casket models in their showroom, and prices vary widely based on material, finish, and hardware.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Under the FTC Funeral Rule, funeral homes must provide a written price list for all caskets and cannot require you to purchase one from them. Third-party retailers and online stores sell caskets at significant discounts, sometimes 40 to 60 percent below funeral home prices. The funeral home must accept a casket purchased elsewhere without charging a handling fee.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coffin Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A coffin is a tapered burial container that is wider at the shoulders and narrows toward the head and feet, creating a hexagonal or octagonal silhouette. This shape closely follows the contour of the human body and uses less material than a rectangular casket. Coffins were the standard burial vessel in the Western world for centuries before the rectangular casket gained popularity in America during the Civil War era.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Today, coffins remain the norm in the United Kingdom, Ireland, Australia, and much of continental Europe. They are typically made from wood, with pine and oak being the most common choices. Wicker and bamboo coffins have gained popularity among families choosing eco-friendly or green burial options. Unlike caskets, coffins are rarely made from metal. The interior is usually lined with simple cotton or linen cloth, or left unlined in the case of green burial coffins. Lids are either removable or attached with basic hinges, and the single-piece design does not allow for a partial opening like the split-lid casket.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In the United States, coffins are uncommon but not unavailable. Some families choose them for cultural reasons, religious traditions, or personal preference. Jewish burial societies (chevra kadisha) traditionally use a simple wooden box similar in spirit to a coffin, though its shape may be rectangular. Families who want a coffin in the US will likely need to order from a specialty supplier or an international retailer, as most funeral home showrooms do not stock them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost Comparison</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Casket Costs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Pine or poplar (basic): $1,000 to $2,500</li>
                    <li>20-gauge steel: $1,500 to $3,500</li>
                    <li>18-gauge steel: $2,500 to $5,000</li>
                    <li>Hardwood (cherry, mahogany): $3,000 to $6,000</li>
                    <li>Copper or bronze: $5,000 to $10,000+</li>
                    <li className="font-bold pt-2 border-t">Typical range: $1,000 to $10,000</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Coffin Costs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Cardboard or pressed wood: $100 to $500</li>
                    <li>Pine: $500 to $1,500</li>
                    <li>Oak or other hardwood: $1,500 to $3,500</li>
                    <li>Wicker or bamboo: $800 to $2,500</li>
                    <li>Custom or imported: $2,000 to $5,000</li>
                    <li className="font-bold pt-2 border-t">Typical range: $500 to $5,000</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                For a detailed breakdown by location, see our <Link href="/funeral-costs" className="text-slate-600 hover:text-slate-800 font-medium">funeral costs by state</Link> guide.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Choose a Casket</h2>
            <p className="text-gray-600 leading-relaxed">
              A casket is the right choice when you plan to hold an open-casket viewing or visitation. The rectangular shape and split-lid design frame the upper body and create a dignified presentation. Caskets are also the practical choice when availability matters, since every funeral home in the United States stocks them. If the deceased was larger in stature, the wider interior of a casket provides more room than a tapered coffin. Families who prefer a sealed, moisture-resistant container will find those features only in metal caskets, not in coffins.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Choose a Coffin</h2>
            <p className="text-gray-600 leading-relaxed">
              A coffin is the right choice when cost savings, simplicity, or environmental impact are priorities. The tapered design uses less material and weighs less, making it easier and less expensive to transport. Coffins are well suited for green burials, where biodegradable materials and minimal construction are preferred. Families with European, British, or Australian heritage may prefer a coffin to honor cultural tradition. If you are planning a closed-lid service or direct burial with no viewing, the visual differences between a casket and coffin are less relevant, and the coffin&apos;s lower price becomes a clear advantage.
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
              <Link href="/vs/burial-vs-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Burial vs Cremation</h3>
                <p className="text-sm text-gray-600">Cost, process, and complete comparison of burial and cremation.</p>
              </Link>
              <Link href="/what-is-a-green-burial" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Green Burial?</h3>
                <p className="text-sm text-gray-600">How natural burial works, what it costs, and where to find green cemeteries.</p>
              </Link>
              <Link href="/funeral-costs" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs by State</h3>
                <p className="text-sm text-gray-600">State-by-state cost breakdown for burial and cremation services.</p>
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
