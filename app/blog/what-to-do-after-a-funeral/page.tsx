import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What to Do After a Funeral: Planning the Gathering and Next Steps',
  description: 'After a funeral, many families host a gathering to share memories and support each other. Here is how to plan it and what to handle in the days that follow.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/what-to-do-after-a-funeral' },
};

const faqs = [
  { q: 'What is the gathering after a funeral called?', a: 'The gathering after a funeral goes by many names: repast, reception, wake, mercy meal, or simply an after-funeral gathering. The term varies by region, culture, and religion, but the purpose is the same:a chance for family and friends to share food, memories, and support.' },
  { q: 'Who typically hosts the after-funeral gathering?', a: 'Close family members usually host, but friends, neighbors, church groups, or coworkers often help with food, setup, and logistics. Many families delegate planning to a trusted friend so they can focus on grieving and being present with guests.' },
  { q: 'How long does an after-funeral reception last?', a: 'Most after-funeral gatherings last 2 to 4 hours. There is no formal start or end time. Guests typically come and go as they are able, and the event naturally winds down as people leave.' },
  { q: 'What should you bring to a funeral reception?', a: 'Food is the most appreciated contribution:casseroles, baked goods, fruit trays, or anything that can be served easily. If the family has requested no food, a sympathy card with a personal note is always welcome.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function WhatToDoAfterFuneralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What to Do After a Funeral: The Gathering and Next Steps</h1>
              <p className="text-xl text-gray-600 mb-4">How to plan the after-funeral gathering and handle the practical tasks that follow in the days and weeks ahead.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">The funeral is over, but the work is not. Most families host a gathering afterward where friends and family share food, memories, and support. In the days that follow, there are practical tasks that need attention:death certificates, accounts, notifications, and the beginning of a long process of adjustment.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Planning the After-Funeral Gathering</h2>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Venue:</strong> The family home is the most common location. Church halls, restaurants, community centers, and parks also work well. Choose somewhere comfortable and easy to reach.</p>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Food:</strong> Keep it simple. Sandwiches, casseroles, finger food, and desserts are standard. Many communities organize potlucks or meal trains. If budget allows, catering removes one more task from the family&apos;s plate.</p>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Who hosts:</strong> Close family usually hosts, but a trusted friend or family member can manage the logistics so the immediate family can focus on being present with guests.</p>
              <p className="text-gray-600 leading-relaxed"><strong>Timing:</strong> Most gatherings begin immediately after the funeral or graveside service and last 2 to 4 hours. Let guests know the location before or during the service.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Expect at the Gathering</h2>
              <p className="text-gray-600 leading-relaxed">The tone is usually informal and warm. People eat, talk, share stories, and check in on each other. Some families display photos or a memorial slideshow. There is no program or schedule:just presence. It is one of the most healing parts of the process for many families.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Practical Tasks in the Days After a Funeral</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Death certificates:</strong> Order 10 to 15 certified copies. You will need them for insurance claims, bank accounts, property transfers, and government agencies.</li>
                <li><strong>Notify agencies:</strong> Social Security Administration, employer, pension provider, health insurance, life insurance companies, banks, and credit card companies.</li>
                <li><strong>Cancel or transfer accounts:</strong> Utilities, subscriptions, memberships, and automatic payments.</li>
                <li><strong>File for benefits:</strong> Life insurance claims, VA burial benefits (if applicable), and any employer death benefits.</li>
                <li><strong>Begin estate process:</strong> Contact the executor or attorney to begin probate if there is a will, or consult a probate attorney if there is not.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Taking Care of Yourself After the Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Grief does not follow a schedule. The weeks after a funeral can feel simultaneously empty and overwhelming. Give yourself permission to feel whatever you feel without judgment.</p>
              <p className="text-gray-600 leading-relaxed">Lean on the people who showed up for you. Accept help when it is offered. Consider joining a grief support group or speaking with a counselor. Many funeral homes offer grief resources and can connect you with local support services.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">What to Do When Someone Dies</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step-by-Step</Link></li>
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary</Link></li>
              </ul>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 4,800+ funeral homes across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
