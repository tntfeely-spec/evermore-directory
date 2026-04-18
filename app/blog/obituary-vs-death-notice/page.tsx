import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Obituary vs. Death Notice: What Is the Difference?',
  description: 'An obituary celebrates a person\'s life while a death notice is a brief announcement of the death. Here is how they differ and when to use each one.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/obituary-vs-death-notice' },
};

const faqs = [
  { q: 'What is the difference between an obituary and a death notice?', a: 'A death notice is a short, factual announcement that states who died, when they died, and the details of the funeral service. An obituary is a longer, narrative piece that tells the story of the person\'s life, including their accomplishments, personality, surviving family members, and what made them memorable. Death notices are typically a few sentences. Obituaries range from a few paragraphs to a full page.' },
  { q: 'How much does it cost to publish an obituary in a newspaper?', a: 'Newspaper obituary costs vary widely depending on the publication and the length of the piece. A short obituary in a local paper might cost $50 to $200. A longer obituary in a major metropolitan newspaper can cost $500 to $1,000 or more. Most newspapers charge by the line or by the word, and photos usually cost extra. Some papers offer package deals that include both print and online placement.' },
  { q: 'Can you publish an obituary for free?', a: 'Yes. Many websites allow you to publish an obituary at no cost. Legacy.com, the funeral home\'s website, and social media platforms are all free options. Some community newspapers also publish basic death notices for free. The only place where you will typically pay is a print newspaper, where space is sold by the line.' },
  { q: 'Who writes the obituary when someone dies?', a: 'The obituary is usually written by a family member, often with help from the funeral director. Some families hire a professional writer if they want a polished, narrative obituary. The funeral home will also write a basic obituary for you if you provide the key details. There is no rule about who must write it. Anyone close to the deceased can take on the task.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function ObituaryVsDeathNoticePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Obituary vs. Death Notice: What Is the Difference?</h1>
              <p className="text-xl text-gray-600 mb-4">They serve different purposes and cost different amounts. Here is how to decide which one you need and where to publish it.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">An obituary tells the story of a person&apos;s life. A death notice simply announces that someone has died and provides the details of the funeral service. Most families need at least a death notice, and many choose to publish a full obituary as well, especially if the deceased had a wide circle of friends, colleagues, or community connections.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is an Obituary</h2>
              <p className="text-gray-600 leading-relaxed mb-4">An obituary is a written tribute that celebrates the life of someone who has died. It typically includes a biographical summary covering the person&apos;s birthplace, education, career, hobbies, and the relationships that defined their life. A well written obituary captures the personality of the deceased and gives readers a sense of who they were as a person, not just a list of facts.</p>
              <p className="text-gray-600 leading-relaxed">Obituaries also serve a practical purpose. They list the names of surviving family members, detail the funeral or memorial service arrangements, and often include information about where donations can be made in lieu of flowers. The length of an obituary varies. Some families write a few paragraphs, while others produce a full page narrative with multiple photos and stories.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is a Death Notice</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A death notice is a short, factual announcement. It typically includes the person&apos;s full name, age, date of death, and the time and location of the funeral or memorial service. It may also mention the funeral home handling the arrangements. A death notice does not include biographical details, personal stories, or a list of survivors.</p>
              <p className="text-gray-600 leading-relaxed">Death notices are usually written by the funeral home and published in local newspapers. They serve as a public notification so that friends, acquaintances, and community members know that a death has occurred and can attend the service if they wish. Many newspapers publish death notices for free or at a very low cost because of their brevity.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Differences Between the Two</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Understanding the core differences helps you decide which to use:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Purpose:</strong> An obituary celebrates and honors a life. A death notice announces the death and provides service details.</li>
                <li><strong>Length:</strong> Obituaries range from a few paragraphs to a full page. Death notices are typically 3 to 5 sentences.</li>
                <li><strong>Content:</strong> Obituaries include biographical information, personal stories, and a list of survivors. Death notices include only the basic facts.</li>
                <li><strong>Tone:</strong> Obituaries are personal and narrative. Death notices are formal and factual.</li>
                <li><strong>Cost:</strong> Obituaries are significantly more expensive to publish in newspapers due to their length. Death notices are inexpensive or free.</li>
                <li><strong>Author:</strong> Obituaries are usually written by the family. Death notices are often written by the funeral home.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When to Use Each</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If the deceased had a large social or professional network, an obituary ensures that the broader community learns about the death and has a chance to remember the person. Obituaries are particularly important when the deceased was well known in their field, active in community organizations, or had family spread across multiple cities.</p>
              <p className="text-gray-600 leading-relaxed">A death notice is sufficient when the family prefers a private service or when the deceased&apos;s close circle has already been notified directly. Some families publish a death notice in the newspaper for the public and share a longer obituary privately through the funeral home&apos;s website or social media. There is no rule that says you must choose one or the other. Many families use both.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Much Do Obituaries Cost to Publish</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Newspaper obituary costs vary dramatically depending on the publication. Small community papers may charge $50 to $200 for a standard obituary. Mid size regional papers typically charge $200 to $500. Major metropolitan papers like The New York Times, Chicago Tribune, or Los Angeles Times can charge $500 to $1,000 or more for a single obituary.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Most newspapers charge by the line, by the word, or by the column inch. Photos add to the cost, often $25 to $100 per image. Some papers offer package pricing that bundles a print obituary with an online listing. Sunday editions, which have the highest readership, may cost more than weekday editions.</p>
              <p className="text-gray-600 leading-relaxed">Ask the funeral director for guidance. They work with local newspapers regularly and can help you understand the pricing, submit the obituary on your behalf, and ensure it meets the paper&apos;s formatting requirements.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Free Ways to Share an Obituary Online</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You do not have to pay a newspaper to share an obituary. Most funeral homes publish obituaries on their websites at no charge, and these listings often include space for photos, a guest book for condolence messages, and details about the service. This is the most common way obituaries are read today.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Websites like Legacy.com, Echovita, and EverLoved allow you to create free obituary pages. Social media platforms are another option. A heartfelt post on Facebook or a dedicated memorial page can reach hundreds of people instantly and allows friends and family to share memories, photos, and condolences in one place.</p>
              <p className="text-gray-600 leading-relaxed">If you want to honor someone with a written tribute but cannot afford a newspaper obituary, an online obituary is a respectful and widely accessible alternative. The most important thing is that the people who need to know about the death and the service are informed in time.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary</Link></li>
                <li><Link href="/blog/obituary-examples" className="text-slate-600 hover:text-slate-800 font-medium">Obituary Examples and Templates</Link></li>
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