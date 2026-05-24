import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is a General Price List (GPL)? Your Right to Funeral Pricing (2026)',
  description: 'A General Price List is an itemized document every funeral home must provide by federal law. It shows individual prices for all goods and services. How to read and use a GPL.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-a-general-price-list' },
  openGraph: {
    title: 'What Is a General Price List (GPL)? Your Right to Funeral Pricing (2026)',
    description: 'A General Price List is an itemized document every funeral home must provide by federal law.',
    url: 'https://funeralhomedirectories.com/what-is-a-general-price-list',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'Does every funeral home have to give me a General Price List?', a: 'Yes. Under the FTC Funeral Rule, every funeral provider in the United States must give you a printed General Price List at the beginning of any in-person discussion about funeral arrangements. Over the phone, they must disclose prices when asked. This is federal law, not optional.' },
  { q: 'Can I get a General Price List online?', a: 'The FTC Funeral Rule does not currently require funeral homes to publish their General Price List online. However, many funeral homes voluntarily post pricing on their websites, and some states have passed laws requiring online GPL disclosure. You can always call or visit in person to request a copy.' },
  { q: 'What should I look for on a General Price List?', a: 'Compare the basic services fee (non-declinable), the direct cremation package price, embalming, use of facilities, and transportation charges. Also check for hidden fees labeled as "other preparation" or "additional services." Compare the total cost for your specific arrangement across three or more providers.' },
  { q: 'Can a funeral home refuse to give me a price list?', a: 'No. Refusing to provide a General Price List is a violation of federal law. The FTC can impose penalties of up to $50,120 per violation. If a funeral home refuses to provide pricing, file a complaint with the FTC at ftc.gov/complaint.' },
  { q: 'How often do funeral homes update their General Price List?', a: 'There is no required update frequency, but funeral homes must update their GPL whenever prices change. Most funeral homes review and update their pricing annually. Always ask for the current GPL, as an outdated list may not reflect current pricing.' },
  { q: 'Can I keep the General Price List?', a: 'Yes. The FTC Funeral Rule requires funeral homes to let you keep the GPL. You should take copies from multiple providers so you can compare pricing at home without pressure.' },
];

export default function WhatIsGeneralPriceListPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is a General Price List (GPL)? Your Right to Funeral Pricing",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-a-general-price-list"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is a General Price List?" }
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
            <span className="text-gray-600">What Is a General Price List?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is a General Price List?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A General Price List (GPL) is an itemized document that every funeral home in the United States is required by federal law to provide to consumers. The GPL lists every good and service the funeral home offers along with its individual price. Under the FTC Funeral Rule, funeral providers must hand you this document at the beginning of any in-person arrangement discussion, free of charge. The GPL is the single most important tool for comparing funeral costs and protecting yourself from overpaying.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The General Price List is a standardized pricing document mandated by the Federal Trade Commission&apos;s Funeral Rule (16 CFR Part 453). It must include the price for every service and merchandise item the funeral home offers, displayed as individual line items rather than bundled packages. The GPL allows consumers to select only the specific services they want and to compare costs across multiple providers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Before the Funeral Rule required GPLs, many funeral homes only offered package pricing, making it impossible for families to know what each component cost or to decline services they did not want. The GPL requirement transformed the funeral industry by introducing price transparency and consumer choice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What a GPL Contains</h2>
            <p className="text-gray-600 leading-relaxed mb-4">A typical General Price List includes the following categories and line items:</p>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700 text-sm">
                <div>
                  <strong>Basic Services of Funeral Director and Staff</strong>
                  <p className="text-gray-600 mt-1">The non-declinable fee covering the funeral director&apos;s services, coordination, and overhead. Typically $1,500 to $3,000. This fee is added to every arrangement.</p>
                </div>
                <div>
                  <strong>Transfer of Remains (Removal)</strong>
                  <p className="text-gray-600 mt-1">Transportation from the place of death to the funeral home. Typically $200 to $500 within a set mile radius. Additional mileage charges may apply.</p>
                </div>
                <div>
                  <strong>Embalming</strong>
                  <p className="text-gray-600 mt-1">Chemical preservation of the body. Typically $500 to $800. Not required by law; the GPL must include a disclosure stating this.</p>
                </div>
                <div>
                  <strong>Other Preparation (Dressing, Cosmetics)</strong>
                  <p className="text-gray-600 mt-1">Non-embalming preparation such as bathing, dressing, and cosmetic application. Typically $150 to $400.</p>
                </div>
                <div>
                  <strong>Use of Facilities (Viewing, Service)</strong>
                  <p className="text-gray-600 mt-1">Separate fees for use of the viewing room, chapel, and reception area. Each typically $300 to $1,500.</p>
                </div>
                <div>
                  <strong>Hearse and Service Car</strong>
                  <p className="text-gray-600 mt-1">Fees for the hearse (to transport the casket to the cemetery) and a lead or family car. Hearse typically $200 to $500. Service car $100 to $300.</p>
                </div>
                <div>
                  <strong>Direct Cremation Package</strong>
                  <p className="text-gray-600 mt-1">All-inclusive price for direct cremation (no service). Must include the minimum container option. Typically $695 to $3,500.</p>
                </div>
                <div>
                  <strong>Caskets</strong>
                  <p className="text-gray-600 mt-1">A separate casket price list showing all available models and prices. Ranges from $1,000 to $10,000+.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use a GPL</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Request GPLs from three or more providers.</strong> Call or visit at least three funeral homes or cremation providers in your area. Each must provide their GPL on request.</li>
                <li><strong>2. Compare line by line.</strong> Do not compare just the package prices. Look at the basic services fee, transfer fee, embalming fee, and facility fees individually. Some providers have a low basic services fee but high facility charges, and vice versa.</li>
                <li><strong>3. Add up your specific arrangement.</strong> List the exact services you want (for example: basic services + transfer + direct cremation container + cremation). Add up the total from each provider&apos;s GPL. Compare the totals.</li>
                <li><strong>4. Watch for unbundled charges.</strong> Some GPLs include items like "additional staff for service" or "online obituary hosting" that may not appear on other providers&apos; lists. Ask what is included and what is extra.</li>
                <li><strong>5. Ask about cash advance items.</strong> These are third-party charges the funeral home pays on your behalf (death certificates, obituary placement, flowers). These should be listed separately as "cash advance items" and passed through at cost, though some providers add a service fee.</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Requirements</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The <Link href="/what-is-the-ftc-funeral-rule" className="text-slate-600 hover:text-slate-800 font-medium">FTC Funeral Rule</Link> requires every funeral provider to give consumers a GPL at the beginning of any in-person discussion about funeral arrangements. The document must be printed (not just verbal), must list all items individually with prices, and the consumer must be allowed to keep it. Over the phone, providers must disclose prices when asked. Failure to provide a GPL or to allow the consumer to keep it is a federal violation punishable by fines up to $50,120 per incident.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The GPL must also include specific disclosures: that embalming is not required by law in most cases, that consumers have the right to choose only the services they want, and that the funeral home will accept caskets purchased from third parties without charging a handling fee.
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
                <p className="text-sm text-gray-600">The federal law that requires funeral homes to provide GPLs.</p>
              </Link>
              <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Cost by State</h3>
                <p className="text-sm text-gray-600">Compare real GPL-based pricing from 7,395+ providers.</p>
              </Link>
              <Link href="/what-is-pre-need-planning" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is Pre-Need Planning?</h3>
                <p className="text-sm text-gray-600">How to use GPLs to pre-plan and compare costs.</p>
              </Link>
              <Link href="/glossary#general-price-list" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
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
