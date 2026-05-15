import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is Aquamation? Cost, Process, and Legality by State (2026)',
  description: 'Aquamation (alkaline hydrolysis) is a water-based alternative to cremation that uses 90% less energy. Legal in 28 states, costing $2,000 to $5,000.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-aquamation' },
  openGraph: {
    title: 'What Is Aquamation? Cost, Process, and Legality by State (2026)',
    description: 'Aquamation (alkaline hydrolysis) is a water-based alternative to cremation that uses 90% less energy.',
    url: 'https://funeralhomedirectories.com/what-is-aquamation',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'Is aquamation legal in my state?', a: 'Aquamation is legal in approximately 28 states as of 2026, including California, Colorado, Florida, Illinois, Minnesota, Oregon, and Washington. Legislation is pending in several additional states. Check with your state funeral board for current status.' },
  { q: 'How much does aquamation cost?', a: 'Aquamation typically costs $2,000 to $5,000, which is comparable to or slightly higher than traditional flame cremation. Prices vary by provider and location. As more providers offer the service, prices are expected to decrease.' },
  { q: 'Is aquamation more environmentally friendly than cremation?', a: 'Yes. Aquamation uses approximately one-tenth the energy of flame cremation and produces no direct greenhouse gas emissions. It does not release mercury from dental fillings into the atmosphere, which is a concern with traditional cremation.' },
  { q: 'What are the remains like after aquamation?', a: 'The remains are white bone fragments, similar to cremated remains but slightly more in volume (about 20 percent more than flame cremation). The bone fragments are processed into a fine powder and returned to the family.' },
  { q: 'Can I have a viewing before aquamation?', a: 'Yes. Aquamation does not prevent a viewing, visitation, or funeral service beforehand. Families can choose a full traditional service followed by aquamation, or they can opt for a direct aquamation (no service) similar to direct cremation.' },
];

export default function WhatIsAquamationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is Aquamation? Cost, Process, and Legality by State",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-aquamation"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is Aquamation?" }
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
            <span className="text-gray-600">What Is Aquamation?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is Aquamation?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Aquamation, formally known as alkaline hydrolysis, is a water-based alternative to flame cremation that uses an alkaline solution and gentle water flow to reduce a body to bone fragments. The process uses approximately one-tenth the energy of traditional cremation and produces no direct carbon emissions. Aquamation is legal in approximately 28 US states as of 2026, with costs typically ranging from $2,000 to $5,000.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Alkaline hydrolysis is a chemical process that accelerates the natural decomposition of organic material using water, heat, and an alkaline solution (typically potassium hydroxide). The process mimics what happens naturally in soil over decades, but completes in 6 to 8 hours. The body is placed in a stainless steel vessel, and the alkaline solution is circulated at temperatures between 200 and 300 degrees Fahrenheit. After the process, only bone fragments and a sterile liquid remain.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The technology has been used for decades in medical and veterinary settings but became available for human funeral use starting in the early 2000s. It is also known as bio-cremation, water cremation, flameless cremation, or resomation (a trademarked term used primarily in the UK).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aquamation typically costs $2,000 to $5,000, comparable to a mid-range cremation package. The cost is higher than direct flame cremation ($695 to $3,500) because fewer providers offer the service and the equipment is more expensive to purchase and operate. As more funeral homes invest in aquamation equipment and consumer demand increases, prices are expected to come down.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The price typically includes transportation, the aquamation process, required permits and paperwork, and return of the remains. As with cremation, families can compare prices by requesting <Link href="/what-is-a-general-price-list" className="text-slate-600 hover:text-slate-800 font-medium">General Price Lists</Link> from multiple providers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Process</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Preparation.</strong> The body is placed in a stainless steel vessel (similar in size to a cremation retort). Any medical devices such as pacemakers are removed beforehand, as with flame cremation.</li>
                <li><strong>2. Alkaline solution.</strong> The vessel is filled with a solution of water and potassium hydroxide (or sodium hydroxide). The ratio is approximately 95 percent water and 5 percent alkali.</li>
                <li><strong>3. Heating and circulation.</strong> The solution is heated to 200 to 300 degrees Fahrenheit and circulated around the body for 6 to 8 hours. The combination of heat, alkalinity, and water flow breaks down all organic tissue.</li>
                <li><strong>4. Completion.</strong> After the cycle, only bone fragments remain in the vessel. The liquid byproduct is a sterile solution of amino acids, sugars, and salts that is safely processed through the municipal wastewater system.</li>
                <li><strong>5. Processing and return.</strong> The bone fragments are dried, processed into a fine white powder, and returned to the family. The volume of remains is approximately 20 percent greater than flame cremation.</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Choose Aquamation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aquamation appeals to families who want an environmentally responsible alternative to flame cremation or traditional burial. It is a good choice if environmental impact is a priority, if the family wants a gentler process than high-heat combustion, or if the deceased expressed a preference for an eco-friendly disposition. It produces no air emissions and uses significantly less energy than flame cremation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Aquamation may not be available in your state, and fewer providers offer it compared to traditional cremation. If availability is limited in your area, <Link href="/what-is-a-green-burial" className="text-slate-600 hover:text-slate-800 font-medium">green burial</Link> is another environmentally focused alternative worth considering.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Requirements</h2>
            <p className="text-gray-600 leading-relaxed">
              Aquamation is legal in approximately 28 states as of 2026. States that have approved aquamation include California, Colorado, Connecticut, Florida, Georgia, Idaho, Illinois, Kansas, Maine, Maryland, Minnesota, Missouri, Nevada, North Carolina, Oklahoma, Oregon, Utah, Vermont, Virginia, Washington, and Wyoming, among others. Legislation is pending or under review in several additional states. In states where aquamation is not yet legalized, families who want the service may need to transport the deceased to a neighboring state where it is available.
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
              <Link href="/vs/cremation-vs-aquamation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Cremation vs Aquamation</h3>
                <p className="text-sm text-gray-600">Side-by-side comparison of cost, process, and environmental impact.</p>
              </Link>
              <Link href="/what-is-a-green-burial" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Green Burial?</h3>
                <p className="text-sm text-gray-600">Another eco-friendly alternative to traditional burial.</p>
              </Link>
              <Link href="/glossary#aquamation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Glossary: Aquamation</h3>
                <p className="text-sm text-gray-600">Quick definition and related terms.</p>
              </Link>
              <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Cost by State</h3>
                <p className="text-sm text-gray-600">Compare traditional cremation pricing nationwide.</p>
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
