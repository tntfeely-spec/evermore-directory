import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is Pre-Need Planning? How to Pre-Plan a Funeral (2026)',
  description: 'Pre-need planning is the process of arranging and sometimes prepaying for funeral services before death. It reduces costs, prevents family burden, and ensures your wishes are followed.',
  alternates: { canonical: 'https://funeralhomedirectories.com/what-is-pre-need-planning' },
  openGraph: {
    title: 'What Is Pre-Need Planning? How to Pre-Plan a Funeral (2026)',
    description: 'Pre-need planning is arranging funeral services before death. It reduces costs and ensures your wishes are followed.',
    url: 'https://funeralhomedirectories.com/what-is-pre-need-planning',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

const faqs = [
  { q: 'What is the difference between pre-need and at-need?', a: 'Pre-need means arranging funeral services in advance, before death occurs. At-need means making arrangements at the time of death. Pre-need planning gives families more time to compare prices, make thoughtful decisions, and in some cases lock in current pricing.' },
  { q: 'Can you prepay for a funeral?', a: 'Yes. Prepayment options include pre-need contracts with a specific funeral home, funeral trusts, and final expense insurance policies. Each option has different terms regarding refunds, portability, and price guarantees. Consult your state funeral board for consumer protection rules.' },
  { q: 'Is a pre-need contract refundable?', a: 'It depends on the state and the contract terms. Some states require pre-need contracts to be fully refundable. Others allow non-refundable contracts. Always read the contract carefully and ask about cancellation and transfer policies before signing.' },
  { q: 'Does pre-need planning lock in the price?', a: 'Some pre-need contracts guarantee the price at the time of purchase, meaning your survivors will not pay more even if prices increase. Others are non-guaranteed, meaning the family may owe the difference if prices rise. Ask specifically whether the contract is price-guaranteed.' },
  { q: 'Can I transfer a pre-need contract to another funeral home?', a: 'Transferability varies by state and contract. Some states require that pre-need funds be portable (transferable to another provider). Others do not. If you move to a different city or change your mind about a provider, you will need to check the contract terms and your state laws.' },
  { q: 'What should I include in my pre-need plan?', a: 'At minimum, document your preference for burial vs. cremation, the type of service you want (or do not want), who should be contacted, and any specific wishes such as music, readings, or charitable donations in lieu of flowers. More detailed plans can specify the casket or urn, cemetery, and even the obituary text.' },
];

export default function WhatIsPreNeedPlanningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "What Is Pre-Need Planning? How to Pre-Plan a Funeral",
        "author": { "@type": "Person", "name": "Terry Feely", "url": "https://funeralhomedirectories.com/about" },
        "publisher": { "@type": "Organization", "name": "Evermore Directory", "url": "https://funeralhomedirectories.com" },
        "datePublished": "2026-05-15", "dateModified": "2026-05-15",
        "url": "https://funeralhomedirectories.com/what-is-pre-need-planning"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://funeralhomedirectories.com" },
          { "@type": "ListItem", "position": 2, "name": "What Is Pre-Need Planning?" }
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
            <span className="text-gray-600">What Is Pre-Need Planning?</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Is Pre-Need Planning?</h1>
          <p className="text-sm text-gray-500 mb-10">
            By <Link href="/about" className="text-slate-600 hover:text-slate-800">Terry Feely</Link>, Former Firefighter and Paramedic &middot; Last Updated May 2026
          </p>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Pre-need planning is the process of making funeral or cremation arrangements in advance of death, while a person is still living and able to express their preferences. According to the NFDA, only about 20 percent of Americans have pre-planned their funeral, even though over 60 percent say they would prefer to have their wishes documented. Pre-need planning can range from a simple written statement of preferences to a fully prepaid contract with a specific funeral home.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Definition</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pre-need planning (also called pre-arrangement or pre-planning) refers to any advance decision-making about funeral services, disposition method, and related wishes. At its simplest, pre-need planning means writing down whether you want burial or cremation, what type of service you prefer, and any specific requests. At its most comprehensive, it involves selecting a funeral home, choosing specific services and merchandise, and prepaying through a contract, trust, or insurance policy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Pre-need planning is distinct from <Link href="/glossary#at-need" className="text-slate-600 hover:text-slate-800 font-medium">at-need arrangement</Link>, which takes place after death under time pressure. The primary benefit of pre-need planning is that it allows the individual to make decisions thoughtfully, compare prices without emotional urgency, and spare their family from the burden of guessing what they would have wanted.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pre-need planning itself is free. Documenting your wishes, comparing providers, and discussing preferences with your family costs nothing. The costs come only if you choose to prepay for services. Prepayment options include pre-need contracts (paying a funeral home directly for future services), funeral trusts (placing funds in a managed trust), and final expense insurance policies (purchasing a small whole life policy with death benefit of $5,000 to $25,000).
            </p>
            <p className="text-gray-600 leading-relaxed">
              One key benefit of prepaying is the potential to lock in current prices. Funeral costs have risen consistently, averaging 2 to 4 percent annual increases. A price-guaranteed pre-need contract purchased today could save a family thousands of dollars if the services are not needed for 10 or 20 years. However, not all contracts guarantee prices, so this must be verified in writing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Steps to Pre-Plan</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ol className="space-y-4 text-gray-700">
                <li><strong>1. Decide on disposition.</strong> Choose between burial, cremation, <Link href="/what-is-aquamation" className="text-slate-600 hover:text-slate-800 font-medium">aquamation</Link>, <Link href="/what-is-a-green-burial" className="text-slate-600 hover:text-slate-800 font-medium">green burial</Link>, or body donation. This is the most fundamental decision and drives all other choices.</li>
                <li><strong>2. Choose a service type.</strong> Decide whether you want a formal funeral service, memorial service, celebration of life, graveside service, or no service at all. Document any specific requests for music, readings, or speakers.</li>
                <li><strong>3. Compare providers.</strong> Request <Link href="/what-is-a-general-price-list" className="text-slate-600 hover:text-slate-800 font-medium">General Price Lists</Link> from at least three funeral homes or cremation providers in your area. Compare total costs for the specific arrangement you want.</li>
                <li><strong>4. Document your wishes.</strong> Write down your preferences clearly. Include disposition method, service preferences, who should be contacted, and any specific instructions. Give copies to your spouse, adult children, or designated agent.</li>
                <li><strong>5. Consider prepayment (optional).</strong> If you choose to prepay, understand the terms: Is the price guaranteed? Is the contract transferable to another provider? Is it refundable if you change your mind? What happens if the funeral home goes out of business?</li>
                <li><strong>6. Organize important documents.</strong> Gather and store together: your pre-plan, will, life insurance policies, bank account information, Social Security number, veteran discharge papers (DD-214 if applicable), and contact information for key people.</li>
              </ol>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Pre-Plan</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              There is no wrong time to pre-plan, but most consumer advocates recommend starting the conversation in your 50s or 60s. Specific triggers that prompt pre-planning include a serious health diagnosis, the death of a spouse or parent (which makes the next generation aware of the process), retirement planning conversations, and Medicaid planning (irrevocable funeral trusts can be excluded from Medicaid asset limits).
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a former first responder, I can tell you that the families who had the easiest time in the hours and days after a death were those where the deceased had clearly documented their wishes. Even a simple handwritten note saying "I want direct cremation, no service, scatter my ashes at the lake" removes an enormous burden from grieving family members who would otherwise be guessing under pressure.
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
              <Link href="/vs/pre-need-vs-at-need-planning" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Pre-Need vs At-Need Planning</h3>
                <p className="text-sm text-gray-600">Complete comparison of planning approaches.</p>
              </Link>
              <Link href="/what-is-a-general-price-list" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">What Is a General Price List?</h3>
                <p className="text-sm text-gray-600">The document you need to compare funeral costs.</p>
              </Link>
              <Link href="/direct-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Direct Cremation Cost by State</h3>
                <p className="text-sm text-gray-600">Compare the most affordable cremation option nationwide.</p>
              </Link>
              <Link href="/funeral-costs" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Costs by State</h3>
                <p className="text-sm text-gray-600">Understand what you will be comparing.</p>
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
