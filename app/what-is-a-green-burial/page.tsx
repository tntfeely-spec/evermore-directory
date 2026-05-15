import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is a Green Burial? Cost, Process, and How It Works (2026)',
  description: 'A green burial is an environmentally focused burial that skips embalming and uses a biodegradable casket or shroud. Costs range from $1,000 to $4,000.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-a-green-burial' },
  openGraph: {
    title: 'What Is a Green Burial? Cost, Process, and How It Works (2026)',
    description: 'A green burial is an environmentally focused burial that skips embalming and uses a biodegradable casket or shroud.',
    url: 'https://funeralhomedirectories.com/what-is-a-green-burial',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'How much does a green burial cost?', a: 'Green burial typically costs $1,000 to $4,000 for the burial itself, which is significantly less than traditional burial ($7,000 to $15,000). Savings come from eliminating embalming, using a biodegradable container instead of a metal casket, and skipping the concrete burial vault.' },
  { q: 'Is a green burial legal?', a: 'Yes. Green burial is legal in all 50 US states. No state requires embalming for immediate burial, and no state requires a concrete vault (though individual cemeteries may have their own rules). You need to find a cemetery that accepts green burials.' },
  { q: 'Do you need a casket for a green burial?', a: 'No. Green burials can use a biodegradable casket (wicker, bamboo, pine), a burial shroud (cloth wrap), or in some cases just a simple cotton sheet. The key requirement is that the container is fully biodegradable.' },
  { q: 'Where can I find a green burial cemetery?', a: 'The Green Burial Council (greenburialcouncil.org) maintains a directory of certified green burial grounds across the United States. There are currently over 300 green burial providers in the US, including hybrid cemeteries that offer both traditional and green sections.' },
  { q: 'Can you have a viewing with green burial?', a: 'Yes, but without embalming. Many families hold a brief viewing or visitation with the body refrigerated or on dry ice rather than embalmed. The viewing typically takes place within 24 to 48 hours of death.' },
];

export default function WhatIsGreenBurialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is a Green Burial? Cost, Process, and How It Works",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-a-green-burial"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is a Green Burial?" }
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
            <span className="text-gray-600">What Is a Green Burial?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is a Green Burial?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A green burial is an environmentally focused burial practice that returns the body to the earth without embalming chemicals, metal caskets, or concrete vaults. The body is placed in a biodegradable container such as a wicker casket, pine box, or simple cloth shroud and buried in a way that allows natural decomposition. Green burial typically costs $1,000 to $4,000, making it significantly less expensive than traditional burial, which averages $7,000 to $15,000.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Green burial (also called natural burial or eco-burial) is a disposition method that minimizes the environmental impact of burying the dead. It eliminates three elements common in traditional burial: formaldehyde-based embalming fluids, non-biodegradable caskets (steel, bronze, sealed hardwood), and concrete burial vaults or grave liners. Instead, the body is prepared without chemical preservation and placed in a container that will decompose naturally in the soil.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Green Burial Council, the industry's primary certifying body, defines three levels of green burial grounds: hybrid (conventional cemeteries with a green section), natural (dedicated green cemeteries with restrictions on non-biodegradable materials), and conservation (burial grounds that actively protect and restore natural habitats).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Green burial is one of the most affordable burial options. The major cost components are the biodegradable container ($200 to $2,000 for shrouds, wicker, or pine), the cemetery plot ($500 to $4,000 at a green burial ground), and the opening and closing of the grave ($300 to $1,000). There is no embalming fee ($500 to $800 saved), no vault fee ($1,000 to $10,000 saved), and no expensive casket ($1,000 to $10,000 saved).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Total costs for a green burial with a simple service typically range from $1,000 to $4,000. By comparison, the NFDA reports a national median cost of $7,848 for a traditional funeral with viewing and burial, not including the cemetery plot or grave marker.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Process</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. No embalming.</strong> The body is washed and prepared without chemical preservatives. Refrigeration or dry ice is used if the burial will not take place immediately.</li>
                <li><strong>2. Biodegradable container.</strong> The body is placed in a shroud, wicker basket, bamboo casket, or simple unfinished pine box. Any material that will fully decompose in soil is acceptable.</li>
                <li><strong>3. Shallow burial.</strong> The grave is typically dug 3.5 to 4 feet deep (shallower than conventional burial at 6 feet) to keep the body within the biologically active soil layer where decomposition occurs naturally.</li>
                <li><strong>4. No vault.</strong> The body and container are placed directly in the earth without a concrete vault or liner. The grave is filled with the excavated soil.</li>
                <li><strong>5. Natural marker.</strong> Instead of a traditional headstone, the grave may be marked with a native tree, shrub, natural stone, or GPS coordinates. Some green cemeteries allow flat stone markers.</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Choose a Green Burial</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Green burial is a good choice for families who value environmental stewardship, want a simpler and more natural approach to death, or want to reduce costs compared to traditional burial. It is also appealing to families who want the permanence of a burial site (unlike cremation) without the environmental footprint of conventional burial. Surveys show that over 60 percent of Americans express interest in green burial when asked.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Green burial may not be practical if there is no green burial ground within a reasonable distance, if the family wants a traditional headstone and landscaped cemetery setting, or if religious or cultural traditions require specific burial practices that conflict with green burial principles.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Requirements</h2>
            <p className="text-gray-600 leading-relaxed">
              Green burial is legal in all 50 US states. No state requires embalming for a direct burial (burial without a prior public viewing). No state requires a burial vault, though individual cemeteries may impose their own vault requirements. The key legal step is finding a cemetery that accepts green burials. The Green Burial Council certifies over 300 providers in the United States. Families should verify that the cemetery accepts biodegradable containers and does not require embalming or a vault.
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
              <Link href="/vs/green-burial-vs-traditional-burial" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Green Burial vs Traditional Burial</h3>
                <p className="text-sm text-gray-600">Complete cost and environmental comparison.</p>
              </Link>
              <Link href="/what-is-aquamation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Aquamation?</h3>
                <p className="text-sm text-gray-600">Another eco-friendly alternative to traditional cremation.</p>
              </Link>
              <Link href="/glossary#green-burial" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Glossary: Green Burial</h3>
                <p className="text-sm text-gray-600">Quick definition and related terms.</p>
              </Link>
              <Link href="/funeral-costs" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs by State</h3>
                <p className="text-sm text-gray-600">Compare costs across all 50 states.</p>
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
