import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'The FTC Funeral Rule: Your Rights When Planning a Funeral',
  description: 'The FTC Funeral Rule protects families from deceptive funeral home practices. Here is what it requires, what your rights are, and how to use it when making arrangements.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/ftc-funeral-rule-explained' },
};

const faqs = [
  { q: 'What is the FTC Funeral Rule?', a: 'The FTC Funeral Rule is a federal regulation enforced by the Federal Trade Commission that governs how funeral homes must conduct business with consumers. It was enacted in 1984 and requires funeral homes to provide itemized pricing, disclose consumer rights, and refrain from misrepresenting legal requirements. The rule applies to all funeral homes operating in the United States and is designed to protect families from deceptive or unfair practices during funeral planning.' },
  { q: 'Can a funeral home require you to buy a package?', a: 'No. Under the FTC Funeral Rule, funeral homes must allow you to purchase individual items and services on an a la carte basis. They cannot require you to buy a bundled package as the only option. While funeral homes are allowed to offer packages, they must also make individual pricing available. You have the right to select only the specific goods and services you want.' },
  { q: 'What can I do if a funeral home violates my rights?', a: 'If you believe a funeral home has violated the FTC Funeral Rule, you can file a complaint with the Federal Trade Commission at ftc.gov/complaint or by calling 1-877-FTC-HELP. You can also contact your state&apos;s attorney general office or the state board that licenses funeral directors. Keep copies of all documents, contracts, and receipts as evidence. In some cases, families have also pursued legal action through private attorneys.' },
  { q: 'Does the FTC Funeral Rule apply to cremation providers?', a: 'Yes. The FTC Funeral Rule applies to any provider that sells funeral goods and services, including cremation providers, cemeteries that sell funeral goods, and standalone cremation facilities. All of these providers must comply with the same pricing disclosure and consumer protection requirements as traditional funeral homes. If a cremation provider refuses to give you a price list, they are violating the rule.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function FTCFuneralRuleExplainedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">The FTC Funeral Rule: Your Rights When Planning a Funeral</h1>
              <p className="text-xl text-gray-600 mb-4">Everything families need to know about the federal regulation that protects consumers from unfair funeral home practices.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Planning a funeral is one of the most stressful experiences a family can face, and it happens during a time when people are least equipped to advocate for themselves. The Federal Trade Commission recognized this vulnerability and created the Funeral Rule to protect consumers. If you are planning a funeral or making pre-arrangements, knowing your rights under this rule can save you money and protect you from practices that are not in your best interest.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is the FTC Funeral Rule</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The FTC Funeral Rule is a federal regulation that has been in effect since 1984. It was created by the Federal Trade Commission after years of investigation revealed that many funeral homes engaged in practices that were unfair to consumers. These practices included refusing to disclose prices, bundling services in ways that forced families to buy things they did not want, and misrepresenting legal requirements for embalming, caskets, and other items.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The rule applies to all funeral providers in the United States, including traditional funeral homes, cremation providers, and cemeteries that sell funeral goods and services. It sets specific requirements for how these businesses must communicate pricing and what they can and cannot require consumers to purchase.</p>
              <p className="text-gray-600 leading-relaxed">The FTC periodically reviews and updates the Funeral Rule. The most recent significant review included proposals to require funeral homes to post their prices online, which would make comparison shopping even easier for families. Whether you are making arrangements at need or planning ahead, the Funeral Rule is your most important consumer protection tool.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Funeral Homes Are Required to Do</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The Funeral Rule imposes several specific obligations on funeral homes. First, they must provide a written General Price List (GPL) to any person who inquires in person about funeral arrangements. The GPL must be provided at the beginning of the discussion, before any merchandise is shown or services are discussed in detail. The family is entitled to keep the GPL.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Second, funeral homes must provide price information over the phone to anyone who calls and asks. They cannot require you to visit in person before disclosing prices. This provision was specifically included to allow families to comparison shop without the pressure of a face to face meeting.</p>
              <p className="text-gray-600 leading-relaxed">Third, funeral homes must provide a written statement after funeral arrangements are made that itemizes every good and service selected along with the price of each. This final statement ensures that the family has a clear record of what they agreed to and what they are being charged. It also provides documentation in case of a dispute.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Right to Itemized Pricing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">One of the most important protections under the Funeral Rule is the right to itemized pricing. Funeral homes must list each service and product separately with its own price. They cannot present only bundled packages or all inclusive prices without also offering individual items. This allows you to select only the services you want and avoid paying for things you do not need.</p>
              <p className="text-gray-600 leading-relaxed mb-4">For example, if you want a simple service without embalming, without a viewing, and without a casket (because you are choosing cremation), you should be able to select only the basic services fee, transportation, the cremation fee, and an urn. The funeral home cannot force you to pay for embalming, a casket rental, or facility use for a viewing that you do not want.</p>
              <p className="text-gray-600 leading-relaxed">The only exception is the basic services fee, which is a non-declinable charge that covers the funeral home&apos;s overhead. Every arrangement includes this fee, and you cannot opt out of it. Everything else on the GPL is optional, and the choice of what to include belongs to the family.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Items You Cannot Be Forced to Buy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The Funeral Rule specifically protects your right to decline certain items that funeral homes have historically pressured families into purchasing. You cannot be required to buy embalming unless it is specifically mandated by state law for your situation (which is rare). The funeral home must disclose this in writing on the GPL.</p>
              <p className="text-gray-600 leading-relaxed mb-4">You also cannot be required to purchase a casket from the funeral home. You have the right to buy a casket from any source, including online retailers, and the funeral home must accept it without charging a handling fee. Similarly, you cannot be told that a casket is required for cremation. While some crematories require a rigid container, it does not have to be a traditional casket, and a simple cardboard or plywood container is sufficient.</p>
              <p className="text-gray-600 leading-relaxed">Funeral homes are also prohibited from claiming that embalming is required by law when it is not, that a specific casket is needed for a particular type of burial, or that any product or service is legally mandated when there is no such law. If a funeral director tells you something is required, ask them to show you the specific law. If they cannot, you know it is a business policy, not a legal requirement.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to File a Complaint Against a Funeral Home</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If you believe a funeral home has violated the FTC Funeral Rule, you have several options for recourse. The most direct is to file a complaint with the Federal Trade Commission online at ftc.gov/complaint or by calling 1-877-FTC-HELP (1-877-382-4357). The FTC uses these complaints to identify patterns of violations and may take enforcement action against funeral homes that repeatedly break the rules.</p>
              <p className="text-gray-600 leading-relaxed mb-4">You can also file a complaint with your state&apos;s attorney general office, which may have its own consumer protection division that handles funeral related complaints. Additionally, most states have a licensing board that oversees funeral directors and funeral homes. Filing a complaint with the state board can result in disciplinary action, including fines or license revocation.</p>
              <p className="text-gray-600 leading-relaxed">Document everything. Keep copies of the General Price List, any contracts or agreements you signed, receipts for all payments, and notes about any conversations where you believe the funeral home misrepresented information. This documentation will strengthen your complaint and make it easier for regulators to investigate.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Protections for Families</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Beyond pricing transparency, the Funeral Rule provides several other protections that families should know about. Funeral homes cannot charge a fee for handling a casket purchased from an outside vendor. They cannot require you to be present when the body is cremated. They cannot misrepresent the legal requirements for any product or service.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The rule also protects families who are making arrangements for direct cremation or direct burial. These are the simplest and most affordable options, and funeral homes cannot steer you away from them or make the process unnecessarily complicated. If you request a direct cremation, the funeral home must offer it at the price listed on the GPL without requiring additional services.</p>
              <p className="text-gray-600 leading-relaxed">Perhaps the most important protection is simply the right to information. When families have access to clear, itemized pricing and understand their rights, they are in a much better position to make decisions that align with their values and budget. The Funeral Rule does not tell families what to buy. It ensures they have the information they need to choose freely.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-read-a-funeral-home-general-price-list" className="text-slate-600 hover:text-slate-800 font-medium">How to Read a Funeral Home General Price List</Link></li>
                <li><Link href="/blog/questions-to-ask-a-funeral-director" className="text-slate-600 hover:text-slate-800 font-medium">Questions to Ask a Funeral Director</Link></li>
              </ul>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 5,100+ funeral homes and cremation providers across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}