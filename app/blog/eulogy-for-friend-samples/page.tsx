import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Eulogy for a Friend: Samples, Tips, and How to Write One',
  description: 'Writing a eulogy for a friend is one of the hardest things you will do. Here are sample eulogies, practical tips, and a structure that works.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/eulogy-for-friend-samples' },
};

const faqs = [
  { q: 'How long should a eulogy for a friend be?', a: 'Most eulogies run 3 to 7 minutes, or roughly 500 to 1,000 words. Shorter is usually better. A focused, heartfelt 4 minute eulogy is more powerful than a rambling 15 minute one. Ask the funeral director or officiant if there is a time limit.' },
  { q: 'What should you say in a eulogy for a friend?', a: 'Focus on who your friend was as a person, not just what they did. Share a specific story that captures their character. Mention what they meant to you and to others. Keep it honest, warm, and personal.' },
  { q: 'Is it okay to be funny in a eulogy?', a: 'Yes. If your friend was someone who loved to laugh, humor belongs in their eulogy. A well placed story that makes people smile is one of the most powerful things you can share. Just keep it respectful and make sure the humor reflects who they were.' },
  { q: 'What if you cry while delivering a eulogy?', a: 'That is completely normal and expected. Pause, take a breath, and continue when you are ready. No one will judge you. Having a printed copy of the eulogy ensures you can pick up where you left off. You can also ask someone to stand nearby as a backup reader.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function EulogyForFriendPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Eulogy for a Friend: Samples, Tips, and How to Write One</h1>
              <p className="text-xl text-gray-600 mb-4">A practical guide with three sample eulogies you can adapt for your friend.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Writing a eulogy for a friend is one of the hardest and most meaningful things you will ever be asked to do. You do not need to be a professional writer. You just need to be honest about who your friend was and what they meant to you.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Structure a Eulogy for a Friend</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A simple structure works best:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li><strong>Opening:</strong> Introduce yourself and your relationship to your friend. One or two sentences is enough.</li>
                <li><strong>A story that captures who they were:</strong> Pick one specific moment, not a summary. Specific details are what people remember.</li>
                <li><strong>What they meant to you and others:</strong> What did they bring to a room? What will you miss most?</li>
                <li><strong>Closing:</strong> A final thought, a goodbye, or a line that feels true to your friend.</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Include</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>A specific story or memory, not generalizations</li>
                <li>What made your friend unique: their humor, their kindness, their stubbornness, whatever was unmistakably them</li>
                <li>How they affected other people, not just you</li>
                <li>Something they said often or believed deeply</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy: Formal Tone</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed italic">
                <p className="mb-4">&quot;I met David 22 years ago on the first day of a job neither of us was sure we wanted. Within a week he had made friends with everyone on the floor, including the security guard whose name no one else had bothered to learn. That was David. He paid attention to people.&quot;</p>
                <p className="mb-4">&quot;Over two decades, David was my colleague, my confidant, and my closest friend. He had a way of listening that made you feel like whatever you were saying was the most important thing he had heard all day. In an industry that rewards self promotion, David succeeded by making everyone around him better.&quot;</p>
                <p>&quot;I will miss his counsel, his steadiness, and his terrible coffee. The world is quieter without him, and that quiet is the loudest thing I have ever heard.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy: Warm and Personal Tone</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed italic">
                <p className="mb-4">&quot;Sarah was the kind of friend who would drive 45 minutes across town to bring you soup when you were sick, and then stay for three hours because she got distracted telling you a story about her neighbor&apos;s cat. That was Sarah. She showed up for people, and she never left on time.&quot;</p>
                <p className="mb-4">&quot;She laughed louder than anyone I have ever known. She cried at every movie, every wedding, and once at a particularly good sunset. She felt everything fully, and she made the people around her feel fully too.&quot;</p>
                <p>&quot;I do not know how to do Thursdays without her. But I know she would want us eating tacos and laughing, so that is what I am going to try to do.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy: Short Graveside Version</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed italic">
                <p className="mb-4">&quot;Mike was my best friend for 30 years. He was honest, loyal, and funnier than he ever got credit for. He loved fishing, his kids, and the Chicago Bears, in an order that changed depending on the season.&quot;</p>
                <p>&quot;I am not going to stand here and try to summarize 30 years. I will just say this: he was the first person I called with good news and the first person I called with bad news. That tells you everything you need to know about the kind of friend he was.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Delivering the Eulogy</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Print your eulogy in a large font. Do not rely on your phone.</li>
                <li>Practice reading it out loud at least twice. Hearing it helps you feel the pacing.</li>
                <li>It is okay to pause and collect yourself. Silence is not awkward in a eulogy.</li>
                <li>Make eye contact with the audience when you can. It connects the words to the room.</li>
                <li>Ask a trusted person to stand nearby as a backup reader in case you need a break.</li>
              </ul>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step by Step</Link></li>
                <li><Link href="/blog/what-is-a-celebration-of-life" className="text-slate-600 hover:text-slate-800 font-medium">What Is a Celebration of Life Service?</Link></li>
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
