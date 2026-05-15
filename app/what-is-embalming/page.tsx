import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is Embalming? Process, Cost, and When It Is Required (2026)',
  description: 'Embalming is the chemical preservation of a deceased body, typically costing $500 to $800. It is not legally required in most situations in any US state.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-embalming' },
  openGraph: {
    title: 'What Is Embalming? Process, Cost, and When It Is Required (2026)',
    description: 'Embalming is the chemical preservation of a deceased body, typically costing $500 to $800.',
    url: 'https://funeralhomedirectories.com/what-is-embalming',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'Is embalming legally required?', a: 'No. Embalming is not required by law in any US state for routine burial or cremation. Some states require embalming if the body is being transported across state lines and will not be buried or cremated within a certain time frame. Refrigeration is always an accepted alternative.' },
  { q: 'How much does embalming cost?', a: 'Embalming typically costs $500 to $800. This fee covers the chemical preservation process, sanitation, and basic cosmetic preparation. It does not include dressing, casketing, or restorative art, which are billed separately.' },
  { q: 'Can you have a viewing without embalming?', a: 'Yes. A viewing without embalming is possible if the body is refrigerated and the viewing takes place within 24 to 48 hours of death. Some funeral homes may require embalming for an extended public viewing, but this is a business policy, not a legal requirement.' },
  { q: 'What chemicals are used in embalming?', a: 'The primary embalming chemical is formaldehyde, typically in a solution of 2 to 5 percent concentration mixed with water, humectants, and dyes. Formaldehyde is classified as a probable human carcinogen by the EPA, which is why embalmers use protective equipment.' },
  { q: 'How long does embalming preserve a body?', a: 'Embalming typically preserves a body sufficiently for viewing for one to two weeks. It does not permanently prevent decomposition. For long-term preservation (such as delayed funerals), additional treatments or refrigeration may be needed.' },
];

export default function WhatIsEmbalmingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is Embalming? Process, Cost, and When It Is Required",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-embalming"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is Embalming?" }
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
            <span className="text-gray-600">What Is Embalming?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is Embalming?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Embalming is the chemical preservation of a deceased person&apos;s body using formaldehyde-based solutions to temporarily delay decomposition. The process typically costs $500 to $800 and is most commonly performed when the family wants a public viewing or open-casket visitation. Embalming is not legally required in any US state for routine burial or cremation, though many families assume it is mandatory.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Embalming is the process of replacing the blood in a deceased person&apos;s circulatory system with a preservative solution, primarily formaldehyde mixed with water, humectants, and dyes. The purpose is to temporarily preserve the body&apos;s appearance for viewing and to sanitize the remains. Modern embalming was developed during the American Civil War to allow soldiers&apos; bodies to be transported home for burial, and it became a standard practice in the American funeral industry throughout the 20th century.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The United States is one of the few countries where embalming is routinely practiced. In most of Europe, Asia, and other regions, refrigeration is the standard method of short-term preservation. As cremation rates have risen in the US (now over 60 percent), the rate of embalming has declined, since direct cremation does not require any preservation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Embalming is an itemized service on the funeral home&apos;s <Link href="/what-is-a-general-price-list" className="text-slate-600 hover:text-slate-800 font-medium">General Price List</Link>, typically priced between $500 and $800. Some funeral homes charge additional fees for cosmetic preparation, dressing, and casketing, which are separate from the embalming fee itself. Under the <Link href="/what-is-the-ftc-funeral-rule" className="text-slate-600 hover:text-slate-800 font-medium">FTC Funeral Rule</Link>, funeral homes cannot perform embalming without the family&apos;s permission and cannot charge for it if it was done without authorization.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Process</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Preparation.</strong> The body is washed, disinfected, and positioned on the embalming table. Medical devices, dressings, and clothing are removed. The body is massaged to relieve rigor mortis if present.</li>
                <li><strong>2. Arterial embalming.</strong> An incision is made in an artery (typically the carotid or femoral), and embalming fluid is pumped through the circulatory system using a machine. Blood is simultaneously drained from a corresponding vein.</li>
                <li><strong>3. Cavity embalming.</strong> A trocar (hollow needle) is used to aspirate fluids from the chest and abdominal cavities. A concentrated preservative solution is then injected into these cavities.</li>
                <li><strong>4. Surface treatments.</strong> Any areas that were not adequately preserved through arterial embalming receive direct chemical treatment or surface sealing.</li>
                <li><strong>5. Cosmetic preparation.</strong> The body is washed again, hair is styled, and cosmetics are applied to restore a natural appearance. The features are set (eyes closed, mouth positioned) using techniques appropriate to the individual.</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When Embalming Is Needed</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Embalming is typically chosen when the family wants an open-casket viewing or visitation, especially if the viewing will take place more than 24 to 48 hours after death. It provides a more natural appearance for longer periods than refrigeration alone. Some families also choose embalming for cultural or religious reasons, or simply because they have always understood it to be part of the funeral process.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Embalming is not needed for <Link href="/what-is-direct-cremation" className="text-slate-600 hover:text-slate-800 font-medium">direct cremation</Link>, direct burial, <Link href="/what-is-a-green-burial" className="text-slate-600 hover:text-slate-800 font-medium">green burial</Link>, or when the family does not want a viewing. If the funeral will take place within 24 to 48 hours of death, refrigeration is a sufficient and less expensive alternative to embalming.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Requirements</h2>
            <p className="text-gray-600 leading-relaxed">
              No US state requires embalming for routine burial or cremation. Some states require embalming if the body is being shipped by common carrier (air or rail) without refrigeration. A few states require embalming or refrigeration if burial or cremation will not occur within a certain number of hours (typically 24 to 72 hours, varying by state). Under the FTC Funeral Rule, funeral homes must disclose that embalming is not required by law (except in specific circumstances) and must get the family&apos;s permission before performing it. If embalming is done without permission, the funeral home cannot charge for the service.
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
              <Link href="/what-is-the-ftc-funeral-rule" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is the FTC Funeral Rule?</h3>
                <p className="text-sm text-gray-600">Your rights regarding embalming and all funeral services.</p>
              </Link>
              <Link href="/what-is-a-green-burial" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a Green Burial?</h3>
                <p className="text-sm text-gray-600">An alternative that skips embalming entirely.</p>
              </Link>
              <Link href="/glossary#embalming" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Glossary: Embalming</h3>
                <p className="text-sm text-gray-600">Quick definition and related terms.</p>
              </Link>
              <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Guide</h3>
                <p className="text-sm text-gray-600">The most popular no-embalming option.</p>
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
