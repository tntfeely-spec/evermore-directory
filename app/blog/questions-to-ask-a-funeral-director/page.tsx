import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: '20 Questions to Ask a Funeral Director Before You Decide',
  description: "Knowing what to ask a funeral director can save your family thousands of dollars and prevent difficult surprises. Here are the most important questions.",
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/questions-to-ask-a-funeral-director' },
};

const faqs = [
  { q: 'Are funeral homes required to answer questions about pricing?', a: 'Yes. Under the FTC Funeral Rule, funeral homes must provide an itemized General Price List to anyone who asks, whether in person, by phone, or by email. They cannot refuse to answer pricing questions or require you to visit in person first.' },
  { q: 'Can you negotiate with a funeral director?', a: 'Yes. While the basic services fee is usually non negotiable, many line items are optional. You can decline services you do not need, bring your own casket or urn, and ask about package discounts. Comparing quotes from multiple funeral homes gives you leverage.' },
  { q: 'What is a General Price List?', a: 'A General Price List, or GPL, is a document every funeral home is required to provide. It lists every service and product offered with individual prices. Reviewing the GPL is the single most important step you can take before making any decisions.' },
  { q: 'Should you contact multiple funeral homes before deciding?', a: 'Yes. Prices for identical services can vary by 50% or more between funeral homes in the same city. Calling three funeral homes and comparing their GPLs takes 30 minutes and can save your family thousands of dollars.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function QuestionsToAskFuneralDirectorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">20 Questions to Ask a Funeral Director Before You Decide</h1>
              <p className="text-xl text-gray-600 mb-4">The right questions save money, prevent surprises, and help your family make confident decisions.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Most families have never hired a funeral director before. Knowing what to ask can save thousands of dollars and prevent the kind of surprises that add stress to an already difficult time. Here are the 20 questions that matter most, organized by topic.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions About Pricing</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Can I see your General Price List?</li>
                <li>What is your basic services fee and what does it include?</li>
                <li>What is the total cost of your least expensive burial option?</li>
                <li>What is the total cost of your least expensive cremation option?</li>
                <li>Are there any required fees or charges beyond what is on the GPL?</li>
                <li>Can I purchase a casket or urn from an outside vendor?</li>
                <li>Do you offer payment plans?</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions About Services</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600" start={8}>
                <li>What services are included in your packages versus available individually?</li>
                <li>Do you handle all paperwork including the death certificate and permits?</li>
                <li>Can you coordinate with the cemetery, church, or other venues?</li>
                <li>Do you offer grief support resources or referrals for our family?</li>
                <li>What are your hours for visitation and services?</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions About Cremation</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600" start={13}>
                <li>Do you operate your own crematory or use a third party?</li>
                <li>What is the total cost of direct cremation with no service?</li>
                <li>Can we hold a viewing or visitation before cremation?</li>
                <li>How long does the cremation process take from start to return of remains?</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions About Pre Planning</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600" start={17}>
                <li>Do you offer pre planning or pre payment options?</li>
                <li>Is the prepaid plan irrevocable or revocable?</li>
                <li>How are prepaid funds held and protected?</li>
                <li>Can a prepaid plan be transferred to another funeral home if we move?</li>
              </ol>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step by Step</Link></li>
                <li><Link href="/funeral-costs" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Costs by State</Link></li>
                <li><Link href="/blog/what-happens-if-you-cant-afford-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">What Happens If You Cannot Afford a Funeral?</Link></li>
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
