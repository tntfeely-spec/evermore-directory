import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Thank You Notes After a Funeral: What to Write and When to Send',
  description: 'Sending thank you notes after a funeral is a meaningful gesture. Here is what to write, when to send them, and examples for different situations.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/thank-you-notes-after-funeral' },
};

const faqs = [
  { q: 'Do you have to send thank you notes after a funeral?', a: 'Thank you notes are not required, but they are a meaningful gesture that most families choose to send. People who attended the service, sent flowers, brought food, or offered support will appreciate knowing their effort mattered. Even a brief note goes a long way.' },
  { q: 'How long do you have to send thank you notes after a funeral?', a: 'Most etiquette guides suggest sending thank you notes within two to four weeks after the funeral. However, grief does not follow a schedule. If it takes longer, that is perfectly acceptable. A late thank you note is always better than none at all.' },
  { q: 'What do you write in a thank you note after a funeral?', a: 'Keep it simple and sincere. Mention what the person did (attended, sent flowers, brought food), acknowledge how it helped, and express your gratitude. You do not need to write a long letter. Two to three sentences is enough.' },
  { q: 'Can you send a thank you card via email after a funeral?', a: 'Yes. While handwritten notes are traditional, email or even a text message is acceptable, especially for coworkers, distant acquaintances, or when the volume of notes is overwhelming. What matters most is that you acknowledge the kindness, not the format you use.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function ThankYouNotesAfterFuneralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You Notes After a Funeral: What to Write and When to Send</h1>
              <p className="text-xl text-gray-600 mb-4">A simple guide to writing sincere thank you notes after a funeral, with examples for every situation.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Sending thank you notes after a funeral is one of the most meaningful things a family can do to acknowledge the people who showed up during the hardest days. A brief, sincere note lets the recipient know that their kindness was noticed and appreciated.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Should Receive a Thank You Note</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Anyone who made a tangible effort to support the family deserves a note. This includes people who sent flowers, brought food, made donations in the deceased&apos;s name, or traveled a significant distance to attend the service. Pallbearers, readers, and musicians who participated in the ceremony should also receive a personal thank you.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The funeral home staff, clergy, and anyone who helped organize the service or reception are also appropriate recipients. If a neighbor watched the house during the funeral or a coworker covered shifts so the family could grieve, those gestures deserve acknowledgment too.</p>
              <p className="text-gray-600 leading-relaxed">You do not need to send a note to every single attendee. A general thank you in the obituary or at the service itself is sufficient for the broader group. Focus your personal notes on the people whose support stood out.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When to Send Thank You Notes</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The traditional guideline is to send thank you notes within two to four weeks of the funeral. This gives the family time to recover from the immediate aftermath while the gestures are still fresh in memory.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If that timeline feels overwhelming, do not let it stop you. Many families send notes over the course of several weeks or even months. Some families divide the list among siblings or close relatives so the task does not fall on one person alone.</p>
              <p className="text-gray-600 leading-relaxed">If you are months past the funeral and still have not sent notes, send them anyway. No one will judge a grieving family for being late with a thank you. The gesture itself is what matters.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write: Simple Examples for Different Situations</h2>
              <p className="text-gray-600 leading-relaxed mb-6">The best thank you notes are short, specific, and sincere. You do not need to write a long message. Below are examples for common situations that you can adapt to your own words.</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Thank You for Flowers</h3>
                <blockquote className="border-l-4 border-slate-300 pl-4 italic text-gray-600 bg-slate-50 py-3 pr-3 rounded-r">
                  &quot;Thank you for the beautiful arrangement you sent for Mom&apos;s service. The flowers brought warmth to a difficult day, and our family noticed your thoughtfulness. It meant more than you know.&quot;
                </blockquote>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Thank You for Food</h3>
                <blockquote className="border-l-4 border-slate-300 pl-4 italic text-gray-600 bg-slate-50 py-3 pr-3 rounded-r">
                  &quot;Thank you for the meals you brought to our home last week. During a time when none of us had the energy to cook, your kindness kept our family fed and cared for. We are truly grateful.&quot;
                </blockquote>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Thank You for Attending</h3>
                <blockquote className="border-l-4 border-slate-300 pl-4 italic text-gray-600 bg-slate-50 py-3 pr-3 rounded-r">
                  &quot;Thank you for being there at Dad&apos;s funeral. Your presence meant so much to our family. Knowing that so many people loved him made a painful day a little easier to bear.&quot;
                </blockquote>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Thank You to the Funeral Home</h3>
                <blockquote className="border-l-4 border-slate-300 pl-4 italic text-gray-600 bg-slate-50 py-3 pr-3 rounded-r">
                  &quot;Thank you for the care and professionalism you showed our family during an incredibly difficult time. You handled every detail with dignity and compassion, and we could not have gotten through this without your guidance.&quot;
                </blockquote>
              </div>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/what-to-do-after-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">What to Do After a Funeral</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step-by-Step</Link></li>
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
