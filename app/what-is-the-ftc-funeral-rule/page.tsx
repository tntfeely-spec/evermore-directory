import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is the FTC Funeral Rule? Your Rights Explained (2026)',
  description: 'The FTC Funeral Rule is a federal regulation that requires funeral homes to provide itemized pricing and prohibits them from forcing you to buy services you do not want.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-the-ftc-funeral-rule' },
  openGraph: {
    title: 'What Is the FTC Funeral Rule? Your Rights Explained (2026)',
    description: 'The FTC Funeral Rule is a federal regulation that requires funeral homes to provide itemized pricing.',
    url: 'https://funeralhomedirectories.com/what-is-the-ftc-funeral-rule',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'What does the FTC Funeral Rule require?', a: 'The FTC Funeral Rule requires funeral homes to provide an itemized General Price List, allows consumers to choose only the services they want, and prohibits requiring a casket for cremation. Violations can result in penalties up to $50,120 per incident.' },
  { q: 'Can a funeral home refuse to give me a price list?', a: 'No. Under the FTC Funeral Rule, every funeral provider must give you an itemized General Price List at the beginning of any in-person discussion about funeral arrangements. This is a federal legal requirement, not optional.' },
  { q: 'Can I bring my own casket to a funeral home?', a: 'Yes. The FTC Funeral Rule requires funeral homes to accept caskets purchased from third-party retailers. They cannot charge a handling fee for accepting an outside casket.' },
  { q: 'Does the FTC Funeral Rule apply to cemeteries?', a: 'The FTC Funeral Rule applies to funeral providers, which includes funeral homes, mortuaries, and cremation providers. It does not directly regulate cemeteries, though some states have separate cemetery consumer protection laws.' },
  { q: 'How do I file a complaint about a funeral home?', a: 'You can file a complaint with the Federal Trade Commission at ftc.gov/complaint. You can also contact your state funeral regulatory board, which has authority to investigate and discipline licensed funeral providers.' },
];

export default function WhatIsFTCFuneralRulePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is the FTC Funeral Rule? Your Rights Explained",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-the-ftc-funeral-rule"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is the FTC Funeral Rule?" }
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
            <span className="text-gray-600">What Is the FTC Funeral Rule?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is the FTC Funeral Rule?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The FTC Funeral Rule is a federal consumer protection regulation enforced by the Federal Trade Commission that governs how funeral homes price and sell their services. First enacted in 1984, the rule requires every funeral provider in the United States to give consumers an itemized General Price List, allows families to purchase only the individual services they want, and prohibits providers from requiring a casket for cremation. Violations can result in penalties up to $50,120 per incident.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Funeral Rule (16 CFR Part 453) is a trade regulation rule administered by the Federal Trade Commission. It applies to all "funeral providers," defined as any person, partnership, or corporation that sells funeral goods or services to the public. This includes funeral homes, mortuaries, cremation providers, and combination establishments. The rule does not apply to cemeteries that only sell interment services, though some states have separate cemetery regulations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The rule was created because the FTC found that consumers purchasing funeral services were at a significant disadvantage. Families making funeral arrangements are often under emotional distress, working under time pressure, and unfamiliar with pricing norms. The Funeral Rule addresses this imbalance by requiring transparency and prohibiting deceptive or unfair practices.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights Under the Funeral Rule</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-2">Right to an itemized price list</h3>
                <p className="text-gray-600 text-sm">Every funeral provider must give you a General Price List (GPL) at the beginning of any in-person discussion about funeral arrangements. The GPL must show the price for each individual item and service. Over the phone, providers must disclose prices upon request.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-2">Right to choose only what you want</h3>
                <p className="text-gray-600 text-sm">You are not required to purchase a package of services. You can select individual items from the GPL. The only non-declinable fee is the "basic services of funeral director and staff" charge, which covers the provider&apos;s overhead and coordination work.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-2">Right to decline embalming</h3>
                <p className="text-gray-600 text-sm">Funeral homes cannot require embalming unless state or local law mandates it for a specific circumstance (such as transporting remains across state lines without refrigeration). If you choose direct cremation or direct burial, embalming is never required.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-2">Right to use an alternative container for cremation</h3>
                <p className="text-gray-600 text-sm">Funeral providers cannot require you to purchase a casket for cremation. They must offer an unfinished wood box or alternative container (such as pressboard or cardboard) as a less expensive option.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-2">Right to bring your own casket</h3>
                <p className="text-gray-600 text-sm">Funeral homes must accept caskets purchased from third-party retailers (online or otherwise) and cannot charge a handling fee for doing so.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the Funeral Rule Protects You</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Before the Funeral Rule, funeral homes routinely presented only package prices, making it impossible for families to compare costs or decline unwanted services. Some providers required expensive caskets for cremation, even though the casket would be destroyed in the process. Others charged for embalming without permission or refused to serve families who purchased caskets elsewhere.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Funeral Rule eliminated these practices by requiring transparency. When you walk into a funeral home, you must receive a printed list of every service and product they offer, with individual prices. This allows you to compare costs between providers and to build an arrangement that fits your budget and preferences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a former first responder, I have been with many families in the immediate hours after a death. The pressure to "do the right thing" is enormous, and some providers use that pressure to sell expensive packages. Knowing your rights under the Funeral Rule is the single most important step you can take to protect yourself financially during an already difficult time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enforcement and Penalties</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The FTC enforces the Funeral Rule through undercover inspections and consumer complaints. FTC investigators pose as consumers and visit funeral homes to verify compliance. Violations can result in civil penalties of up to $50,120 per incident. The FTC also publicizes enforcement actions, which can damage a funeral home&apos;s reputation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you believe a funeral provider has violated the Funeral Rule, you can file a complaint at ftc.gov/complaint or contact your state&apos;s funeral regulatory board. Most states have their own funeral consumer protection laws in addition to the federal Funeral Rule.
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
              <Link href="/what-is-a-general-price-list" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a General Price List?</h3>
                <p className="text-sm text-gray-600">The document every funeral home must give you by law.</p>
              </Link>
              <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Cost by State</h3>
                <p className="text-sm text-gray-600">Compare real pricing from 7,395+ providers.</p>
              </Link>
              <Link href="/glossary#ftc-funeral-rule" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Glossary: FTC Funeral Rule</h3>
                <p className="text-sm text-gray-600">Quick definition and related terms.</p>
              </Link>
              <Link href="/funeral-costs" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs by State</h3>
                <p className="text-sm text-gray-600">Complete cost breakdown for all 50 states.</p>
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
