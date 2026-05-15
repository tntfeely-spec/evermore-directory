import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is a Cremation Society? How It Differs from a Funeral Home (2026)',
  description: 'A cremation society is a funeral provider specializing exclusively in cremation services, typically offering direct cremation at 30 to 50 percent below funeral home prices.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-a-cremation-society' },
  openGraph: {
    title: 'What Is a Cremation Society? How It Differs from a Funeral Home (2026)',
    description: 'A cremation society specializes exclusively in cremation services at 30 to 50 percent below funeral home prices.',
    url: 'https://funeralhomedirectories.com/what-is-a-cremation-society',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'Is a cremation society the same as a funeral home?', a: 'No. A cremation society specializes exclusively in cremation services and typically does not offer traditional funeral services, burial, or embalming. Funeral homes offer a full range of services including burial, cremation, viewing, and formal ceremonies. Cremation societies generally have lower overhead and lower prices.' },
  { q: 'How much does a cremation society charge?', a: 'Cremation societies typically charge $695 to $2,500 for direct cremation, which is 30 to 50 percent less than a full-service funeral home. The lower price reflects their focused business model and lower overhead costs.' },
  { q: 'Are cremation societies legitimate?', a: 'Yes. Cremation societies are licensed funeral establishments regulated by the same state laws and agencies that govern traditional funeral homes. They must comply with the FTC Funeral Rule and provide General Price Lists. However, always verify a provider is licensed through your state funeral board.' },
  { q: 'Can a cremation society handle a memorial service?', a: 'Some cremation societies offer basic memorial service coordination, but most focus exclusively on the cremation process. Families typically arrange memorial services or celebrations of life separately through a church, event venue, or on their own.' },
  { q: 'Do cremation societies own their own crematory?', a: 'Some do, and some contract with a third-party crematory. Ask the cremation society directly whether they operate their own crematory or outsource the cremation. Both arrangements are common and acceptable.' },
];

export default function WhatIsCremationSocietyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is a Cremation Society? How It Differs from a Funeral Home",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-a-cremation-society"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is a Cremation Society?" }
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
            <span className="text-gray-600">What Is a Cremation Society?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is a Cremation Society?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A cremation society is a funeral service provider that specializes exclusively in cremation rather than offering the full range of funeral, burial, and cremation services. Cremation societies typically offer direct cremation at prices 30 to 50 percent below traditional funeral homes, with most charging between $695 and $2,500. They operate with lower overhead by focusing on a single service type and maintaining smaller facilities without chapels, viewing rooms, or large staffs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A cremation society is a licensed funeral establishment that has chosen to specialize in cremation services. Unlike a traditional funeral home, which offers embalming, viewing, funeral services, burial coordination, casket sales, and cremation, a cremation society focuses narrowly on the cremation process: transportation of the deceased, paperwork, the cremation, and return of the ashes. This specialization allows them to operate with significantly less overhead.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The term "society" in the name does not mean it is a nonprofit organization or membership group, though some cremation societies do operate as nonprofits or cooperatives. The majority are for-profit businesses. The name is a legacy from early cremation advocacy organizations that formed in the 1960s and 1970s to promote cremation as an affordable alternative to burial.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cremation societies typically charge $695 to $2,500 for a complete direct cremation package. This usually includes transportation of the deceased (within a set radius), the basic cremation container, the cremation process, required permits and paperwork, and return of the cremated remains. By comparison, a full-service funeral home may charge $2,000 to $3,500 for the same direct cremation service because their overhead costs are higher.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The price difference comes from operating costs, not quality. Cremation societies do not maintain large buildings with chapels and viewing rooms. They employ smaller staffs. They do not stock caskets or urns for sale (though some offer basic urn options). This leaner model allows them to pass savings directly to families.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Cremation Societies Work</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Contact.</strong> The family calls the cremation society to initiate arrangements. Many cremation societies offer 24/7 phone support and can begin the process immediately.</li>
                <li><strong>2. Arrangement.</strong> Arrangements are often made over the phone or online rather than in person. The cremation society collects necessary information and provides the <Link href="/what-is-a-general-price-list" className="text-slate-600 hover:text-slate-800 font-medium">General Price List</Link> and authorization forms.</li>
                <li><strong>3. Transportation.</strong> The cremation society dispatches a vehicle to transport the deceased from the place of death to their facility or a contracted crematory.</li>
                <li><strong>4. Permits and paperwork.</strong> The society files the death certificate, obtains the cremation permit, and secures the family&apos;s written authorization to cremate.</li>
                <li><strong>5. Cremation.</strong> The body is cremated, either at the society&apos;s own crematory or at a contracted facility. The ashes are processed and placed in a temporary container.</li>
                <li><strong>6. Return of remains.</strong> The family picks up the ashes or the society arranges delivery, typically by USPS Priority Mail Express (legal and commonly used).</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Choose a Cremation Society</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A cremation society is the right choice when the family wants cremation at the lowest possible cost, when no formal ceremony is needed before cremation, and when the family values a simple, efficient process over a full-service experience. Families who plan to hold their own memorial service or celebration of life separately often find that a cremation society plus an independent memorial event costs far less than a full-service funeral home package.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A cremation society may not be ideal if the family wants a viewing or visitation before cremation, if they need help planning a formal ceremony, or if they prefer an in-person arrangement conference with a funeral director. In those cases, a full-service <Link href="/states" className="text-slate-600 hover:text-slate-800 font-medium">funeral home</Link> that also offers cremation would be a better fit.
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
              <Link href="/vs/cremation-society-vs-funeral-home" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Cremation Society vs Funeral Home</h3>
                <p className="text-sm text-gray-600">Complete comparison of services, costs, and experience.</p>
              </Link>
              <Link href="/what-is-direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Direct Cremation?</h3>
                <p className="text-sm text-gray-600">The core service cremation societies provide.</p>
              </Link>
              <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Cost by State</h3>
                <p className="text-sm text-gray-600">Compare real pricing from 5,100+ providers.</p>
              </Link>
              <Link href="/glossary#cremation-society" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Glossary</h3>
                <p className="text-sm text-gray-600">115 funeral terms explained in plain language.</p>
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
