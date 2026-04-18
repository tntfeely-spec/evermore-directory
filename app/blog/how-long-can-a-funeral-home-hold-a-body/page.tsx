import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'How Long Can a Funeral Home Hold a Body? (2026 Guide)',
  description:
    'Most funeral homes can hold a body for 1 to 2 weeks without embalming, and longer with embalming or refrigeration. Here is what families need to know.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/how-long-can-a-funeral-home-hold-a-body' },
};

const faqs = [
  {
    q: 'How long can a funeral home hold a body without embalming?',
    a: 'Most funeral homes can hold a body for 1 to 2 weeks without embalming using refrigeration at approximately 2 degrees Celsius. State regulations may shorten this window, and some states require embalming or refrigeration within 24 to 72 hours of death.',
  },
  {
    q: 'How long can a funeral home hold a body with embalming?',
    a: 'Embalming can preserve a body for 4 to 6 weeks, and sometimes longer. This is common when family members need to travel from out of state or services are delayed for legal, religious, or logistical reasons.',
  },
  {
    q: 'Do funeral homes charge for storing a body?',
    a: 'Yes. Most funeral homes charge a daily storage fee ranging from $35 to $100 once the standard holding period ends. Always ask for the rate up front and confirm when the fee starts to accrue.',
  },
  {
    q: 'Are there laws about how long a funeral home can hold a body?',
    a: 'There is no federal law setting a maximum holding period. Individual states set their own rules. For example, Oregon requires funeral homes to report to the mortuary board after 10 days, and Washington DC requires disposition within one week.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HowLongCanFuneralHomeHoldBodyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How Long Can a Funeral Home Hold a Body?</h1>
              <p className="text-xl text-gray-600 mb-4">
                A clear answer to a question most families don&apos;t know to ask until they need to.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span>
                <span>|</span>
                <span>Former Firefighter and Paramedic</span>
                <span>|</span>
                <span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">
                Most funeral homes can hold a body for 1 to 2 weeks without embalming. With embalming or refrigeration,
                storage can extend to 4 to 6 weeks or longer depending on state regulations and preservation method.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Without Embalming</h2>
              <p className="text-gray-600 leading-relaxed">
                Refrigeration keeps a body preserved for approximately 1 to 2 weeks at around 2 degrees Celsius. This is
                ideal for families planning a simple or quick service, and it&apos;s the standard option when there&apos;s
                no need for an open-casket viewing or extended delay.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">With Embalming</h2>
              <p className="text-gray-600 leading-relaxed">
                Embalming can preserve a body for 4 to 6 weeks, and sometimes longer. It is most common when family
                members need to travel from out of town, when services are delayed for legal or religious reasons, or
                when the family wants an open-casket viewing.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">State Regulations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                There is no federal law setting a maximum holding period. Individual states set their own rules:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Oregon requires funeral homes to report to the mortuary board after 10 days.</li>
                <li>Washington DC requires disposition within one week.</li>
                <li>Most states require embalming or refrigeration within 24 to 72 hours of death.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                If you&apos;re unsure of the rules in your state, the funeral director will know, and they&apos;re
                required to follow them.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Daily Storage Fees</h2>
              <p className="text-gray-600 leading-relaxed">
                Most funeral homes charge a daily storage fee ranging from $35 to $100 once the standard holding period
                ends. Always ask up front so you know what to expect and when the fee begins to accrue.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions to Ask Your Funeral Home</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Do you charge for extended storage and what is the daily rate?</li>
                <li>What preservation method do you recommend for our timeline?</li>
                <li>How far in advance do we need to confirm arrangements?</li>
                <li>Are there any state requirements we should know about?</li>
              </ul>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: A Step-by-Step Guide</Link></li>
                <li><Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">What to Do When Someone Dies</Link></li>
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary</Link></li>
              </ul>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 5,100+ funeral homes and cremation providers across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">
                Browse Funeral Homes Near You
              </Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
