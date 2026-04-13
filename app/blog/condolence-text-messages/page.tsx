import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Condolence Text Messages: What to Send and What to Avoid',
  description: 'Short, sincere condolence texts to send when someone loses a loved one. Examples for close friends, coworkers, and acquaintances, plus what not to say.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/condolence-text-messages' },
};

const faqs = [
  { q: 'Is it appropriate to send a condolence text message?', a: 'Yes. A short, sincere text is appropriate in most situations, especially as an initial expression of sympathy. It lets the person know you are thinking of them without putting pressure on them to respond immediately. For close relationships, follow up with a phone call, visit, or handwritten card when the time is right.' },
  { q: 'What should you not say in a condolence text?', a: 'Avoid phrases like "everything happens for a reason," "they are in a better place," "I know how you feel," or "at least they lived a long life." These minimize the person\'s grief even when well intended. Also avoid asking "how are you doing" in the first few days. They are not doing well, and the question forces them to perform for your comfort.' },
  { q: 'How long should a condolence text be?', a: 'Two to four sentences is ideal. A condolence text should be brief, specific, and sincere. The goal is to let the person know you care, not to fill space. Short and genuine is always better than long and generic.' },
  { q: 'Should you send a condolence text or call?', a: 'A text is usually the best first step because it does not demand an immediate response. The grieving person can read it when they are ready. For close friends and family, follow up with a phone call within a few days. For acquaintances or coworkers, a text alone is perfectly appropriate.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function CondolenceTextMessagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Condolence Text Messages: What to Send and What to Avoid</h1>
              <p className="text-xl text-gray-600 mb-4">Examples for close friends, coworkers, acquaintances, and specific types of loss.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">A short sincere text is often the right move when someone loses a loved one. Unlike a formal card, a text feels immediate and personal, letting someone know you are thinking of them right now.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Condolence Texts for a Close Friend</h2>
              <div className="space-y-3">
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;I just heard. I am so sorry. I love you and I am here for whatever you need.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;There are no words good enough right now. Just know I am thinking of you every minute.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;I am bringing dinner to your house Thursday evening. You do not need to respond or do anything.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;I am not going to ask how you are. I just want you to know I am here and I am not going anywhere.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;[Name] meant the world to so many people. I am heartbroken with you.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;No need to reply. I just want you to know you are not alone in this.&quot;</blockquote>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condolence Texts for a Coworker or Acquaintance</h2>
              <div className="space-y-3">
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;I was sorry to hear about your loss. Please take all the time you need. We are covering things at work.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;Thinking of you and your family during this difficult time. No need to respond.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;I am so sorry for your loss. If there is anything I can help with at work or otherwise, please let me know.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;Sending you my deepest sympathy. Take care of yourself and your family.&quot;</blockquote>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condolence Texts for the Loss of a Parent</h2>
              <div className="space-y-3">
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;I know how much your [mom/dad] meant to you. I am so sorry. They raised an incredible person.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;Losing a parent changes everything. I am here for you however you need me to show up.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;Your [mom/dad] was one of a kind. I will always remember [specific memory]. Thinking of your whole family.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;There is no timeline for this kind of grief. I will check in on you next week and the week after that.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;I am not going to pretend I know what to say. I just want you to know how much I care about you.&quot;</blockquote>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condolence Texts for the Loss of a Spouse</h2>
              <div className="space-y-3">
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;I am heartbroken for you. [Name] was an extraordinary person and the love between you two was something everyone could see.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;I cannot imagine what you are going through right now. I am here and I am not going to disappear after the funeral.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;You do not have to be strong right now. Let the people who love you carry some of this.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;I will be at your door Saturday morning with coffee. No expectations, just company if you want it.&quot;</blockquote>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condolence Texts for the Loss of a Child</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The loss of a child is the most devastating grief a person can experience. There are no words that will make it better. The best texts for this situation are very short, very honest, and do not try to explain or comfort with platitudes.</p>
              <div className="space-y-3">
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;There are no words for this. I am so deeply sorry. I love you.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;I will not pretend to understand your pain. I just want you to know I am here and I am not leaving.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;[Child&apos;s name] was so loved. I am holding you and your family in my heart.&quot;</blockquote>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Not to Say in a Condolence Text</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>&quot;Everything happens for a reason.&quot;</strong> This minimizes their pain and implies the death was somehow justified or planned.</li>
                <li><strong>&quot;They are in a better place.&quot;</strong> You do not know what the grieving person believes, and right now the only place they want their person is here.</li>
                <li><strong>&quot;I know exactly how you feel.&quot;</strong> You do not. Even if you have experienced a similar loss, their grief is theirs.</li>
                <li><strong>&quot;At least they lived a long life.&quot;</strong> The length of a life does not reduce the pain of losing someone.</li>
                <li><strong>&quot;How are you doing?&quot;</strong> Especially in the first few days, this forces them to perform emotional labor for your benefit. They are not doing well.</li>
                <li><strong>Long messages about your own grief.</strong> Keep the focus on the person who lost someone, not on your feelings about it.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When to Follow Up After the First Text</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The first text matters, but the follow up matters more. Most people receive an outpouring of support in the first week and then hear from almost no one by week three. Be the person who checks in at two weeks, four weeks, and three months.</p>
              <p className="text-gray-600 leading-relaxed">A simple follow up text like &quot;Still thinking of you. No need to respond.&quot; or &quot;I am free Saturday if you want company. No pressure either way.&quot; can mean more than the original condolence because it shows you have not forgotten.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map(f => (
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
                <li><Link href="/blog/how-to-write-a-condolence-card" className="text-slate-600 hover:text-slate-800 font-medium">How to Write a Condolence Card</Link></li>
                <li><Link href="/blog/what-to-say-at-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">What to Say at a Funeral</Link></li>
                <li><Link href="/blog/thank-you-notes-after-funeral" className="text-slate-600 hover:text-slate-800 font-medium">Thank You Notes After a Funeral</Link></li>
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
