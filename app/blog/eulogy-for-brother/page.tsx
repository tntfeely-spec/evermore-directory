import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Eulogy for a Brother: Examples, Tips, and How to Write One',
  description: 'Losing a brother leaves a particular kind of emptiness. Here are sample eulogies, a structure that works, and tips for honoring your brother\'s life.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/eulogy-for-brother' },
};

const faqs = [
  { q: 'What do you say in a eulogy for a brother?', a: 'Talk about who he was, not just what he did. Share specific stories that capture his personality, his humor, his values, and the way he treated people. Mention what he meant to you as a sibling and what you will carry forward from knowing him.' },
  { q: 'How do you start a eulogy for your brother?', a: 'Start with a specific memory or a defining trait. Something like "My brother was the kind of person who..." or a brief story that shows who he was. Avoid generic openings. The more specific and personal the opening, the more it draws the audience in.' },
  { q: 'What should a brother\'s eulogy include?', a: 'Include a story or memory that shows his character, what he cared about, how he affected the people around him, and what you will miss most. You can also include something he said often or a habit that was uniquely his. Focus on a few key threads rather than trying to cover everything.' },
  { q: 'Is it okay to be funny in a eulogy for a brother?', a: 'Yes. If your brother was someone who loved humor, including something funny in his eulogy honors who he was. A well placed story that makes the audience smile can be one of the most powerful moments in a eulogy. Keep it respectful and make sure the humor reflects his personality.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function EulogyForBrotherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Eulogy for a Brother: Examples, Tips, and How to Write One</h1>
              <p className="text-xl text-gray-600 mb-4">Sample eulogies, a practical structure, and honest advice for honoring your brother&apos;s memory.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Losing a brother leaves a particular kind of emptiness. He knew you before you were fully formed. He shared your childhood, your parents, your history. Writing a eulogy for him means trying to put all of that into words, and that is not easy. But you do not need it to be perfect. You just need it to be honest.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Write It</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Start by thinking about the stories you have already been telling people since he died. Those are usually the right ones for the eulogy. The memories that come to mind first are often the most telling because they capture who he really was.</p>
              <p className="text-gray-600 leading-relaxed mb-4">A simple structure works best. Open with who he was to you. Share one or two stories that show his character. Talk about what he meant to you and to others. Close with something that feels true, a goodbye, a promise, or a final thought that honors him.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Do not worry about being eloquent. The audience wants to hear from someone who loved him, and that is you. Speak plainly and let the stories do the work.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Include</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>A specific memory from childhood, something that captures your relationship as siblings</li>
                <li>A quality that defined him, his humor, his loyalty, his generosity, his stubbornness</li>
                <li>How he treated other people, friends, coworkers, strangers</li>
                <li>Something he said often, a catchphrase, a piece of advice, a joke he repeated</li>
                <li>What you will miss most about him</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">You do not need to include everything. Pick the two or three things that feel most important and build the eulogy around those. The most powerful eulogies are focused, not comprehensive.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy: Heartfelt</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;My brother was two years older than me, which meant he did everything first: learned to ride a bike first, got in trouble first, figured out how to talk to girls first, and gave me notes on all of it. He was my advance scout for life, and I relied on him more than he probably knew.&quot;</p>
                <p className="mb-4">&quot;He had this way of making people feel welcome. It did not matter who you were or where you came from. If you were in a room with my brother, you were included. He remembered names. He asked follow up questions. He made you feel like he was genuinely glad to see you, because he was.&quot;</p>
                <p className="mb-4">&quot;We fought like brothers do. We argued about everything from sports to politics to whose turn it was to take out the trash. But underneath all of that, there was never any question. He was on my side. Always. No matter what.&quot;</p>
                <p>&quot;I am going to miss him every day. I am going to miss his laugh, his bad advice, and the way he called me at the worst possible times just to tell me something that could have been a text. The world is quieter without him, and I do not like it.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy: Short and Simple</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;My brother was my first friend. We shared a room for 16 years. We shared everything, actually. He was generous that way, even when he pretended not to be.&quot;</p>
                <p className="mb-4">&quot;He lived his life with energy and honesty. He said what he meant, he kept his promises, and he loved the people in his life fiercely. He was not complicated. He was real.&quot;</p>
                <p>&quot;I will carry him with me in everything I do. Every time I keep a promise, every time I show up for someone, every time I laugh at my own joke the way he used to, that is him. That will always be him.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Delivering</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Delivering a eulogy for your brother is one of the hardest things you will do. These tips can help you get through it.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Print the eulogy in a large font and bring it to the podium. Do not rely on your phone or your memory.</li>
                <li>Practice reading it aloud at least twice before the service. This helps you anticipate the emotional moments.</li>
                <li>If you cry, pause, breathe, and continue when you are ready. Everyone in the room understands.</li>
                <li>Ask someone you trust to stand nearby as a backup reader in case you need a break.</li>
                <li>Bring water with you. A sip gives you a natural pause when you need one.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">Nobody expects perfection. They expect love, and you have that in abundance.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Honoring a Complex Relationship</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Sibling relationships are rarely simple. If your relationship with your brother was complicated, you can still write a meaningful eulogy. You do not have to pretend things were perfect, and you do not have to share the difficult parts publicly.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Focus on what was genuine between you. Maybe you had periods of distance but always found your way back. Maybe you disagreed about a lot but shared a bond that nothing could break. Whatever was real and good, that is what belongs in the eulogy.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If you are struggling, remember that a eulogy is not about telling the whole truth of a relationship. It is about honoring someone&apos;s life with love and honesty, and you can do that even when the relationship had hard chapters.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/eulogy-for-friend-samples" className="text-slate-600 hover:text-slate-800 font-medium">Eulogy for a Friend: Samples and Tips</Link></li>
                <li><Link href="/blog/how-to-write-a-eulogy" className="text-slate-600 hover:text-slate-800 font-medium">How to Write a Eulogy: A Complete Guide</Link></li>
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
