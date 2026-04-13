import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Eulogy for a Grandfather: Examples, Tips, and How to Write One',
  description: 'A eulogy for your grandfather is a chance to honor his wisdom, his stories, and the legacy he left behind. Here are sample eulogies and tips for writing and delivering one.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/eulogy-for-grandfather' },
};

const faqs = [
  { q: 'What do you say in a eulogy for a grandfather?', a: 'Talk about who he was as a person, not just his role as a grandfather. Share specific memories that capture his character, his values, and the way he treated people. Mention what he taught you, whether through direct advice or by example. Include a story that shows his personality and talk about the legacy he leaves behind in his family.' },
  { q: 'How long should a grandfather\'s eulogy be?', a: 'Most eulogies run 3 to 7 minutes, or roughly 500 to 1,000 words. A focused, heartfelt 5 minute eulogy is far more effective than a long, unfocused one. If you are sharing the service with other speakers, aim for the shorter end. Ask the funeral director or officiant if there is a time limit.' },
  { q: 'What memories work best in a grandfather\'s eulogy?', a: 'The best memories are specific and sensory. Instead of saying he was a great grandfather, describe the time he taught you to fish and you caught nothing but he acted like it was the best day of his life. Concrete details like what he smelled like, what he always had in his pockets, or what he said every time he answered the phone bring a eulogy to life.' },
  { q: 'How do you start a eulogy for your grandpa?', a: 'Start with a specific detail or memory that captures who he was. Something like "My grandfather had the same routine every morning for 50 years" or "The first thing anyone noticed about my grandpa was his hands." A concrete, personal opening draws the audience in immediately and sets the tone for the rest of the eulogy.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function EulogyForGrandfatherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Eulogy for a Grandfather: Examples, Tips, and How to Write One</h1>
              <p className="text-xl text-gray-600 mb-4">Sample eulogies, a practical structure, and honest advice for honoring your grandfather&apos;s memory.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">A grandfather holds a unique place in a family. He is the keeper of stories, the source of quiet wisdom, and often the steady presence that anchors everyone else. Writing a eulogy for your grandfather is a chance to honor that role and to share with others what he meant to you. You do not need to be a polished writer. You just need to tell the truth about who he was.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Include</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A good eulogy for a grandfather focuses on the qualities and moments that made him who he was. You do not need to cover his entire life. Pick two or three things that feel most important and build the eulogy around those.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>A specific memory or story that captures his personality</li>
                <li>What he taught you, whether through words or by example</li>
                <li>How he made you feel when you were around him</li>
                <li>Something he said often, a phrase or piece of advice that was unmistakably his</li>
                <li>The legacy he leaves in his children, grandchildren, and the people he touched</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">The most powerful eulogies are specific. Instead of saying he was kind, describe the thing he did that showed his kindness. Instead of saying he loved his family, describe the way he showed it. Concrete details are what make a eulogy feel real.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy: Warm and Personal</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;My grandfather loved two things above everything else: fishing and telling stories. Luckily for us, he was much better at one than the other. He could spend six hours on a lake and come home with nothing, and somehow make it sound like the adventure of a lifetime. Every empty hook had a story. Every missed catch was the biggest fish anyone had ever seen.&quot;</p>
                <p className="mb-4">&quot;He taught me that the point of fishing was never really about the fish. It was about being still. It was about paying attention. It was about sitting next to someone you love and letting the quiet do the talking. Some of the best conversations I ever had with my grandfather happened without either of us saying a word.&quot;</p>
                <p className="mb-4">&quot;He had a way of making every grandchild feel like the favorite. I know this because every single one of us believed we were. That was his gift. He gave his full attention to whoever was in front of him, and when you had his attention, you felt like the most important person in the world.&quot;</p>
                <p>&quot;I am going to miss his stories, his patience, and the way he always had a butterscotch candy in his shirt pocket. I am going to miss the sound of his voice on the phone, always starting with the same three words: &apos;Well, hello there.&apos; The lake will be quieter now. But every time I cast a line, he will be right there beside me.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy: Short and Simple</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;My grandfather was not a man of many words, but the words he chose mattered. He told me once that the measure of a person is what they do when nobody is watching. I did not fully understand that until I was older, but I have carried it with me every day since.&quot;</p>
                <p className="mb-4">&quot;He worked hard his entire life. He showed up for his family without fail. He never asked for recognition and never complained about what he did not have. He was grateful, steady, and deeply good.&quot;</p>
                <p>&quot;I will miss him more than I can say. But I see him in my father, I see him in my cousins, and I see him in myself when I remember to be patient and to listen more than I talk. That is his legacy, and it is a good one.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Delivering</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Delivering a eulogy for your grandfather can feel overwhelming, but preparation makes a significant difference. These tips will help you get through it with confidence.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Print the eulogy in a large font and bring it to the podium. Do not rely on your phone or memory.</li>
                <li>Practice reading it aloud at least twice before the service. Hearing the words helps you anticipate the emotional moments.</li>
                <li>If you cry, pause and take a breath. No one will rush you. Everyone in the room understands.</li>
                <li>Make eye contact with the audience when you can. It connects the words to the room.</li>
                <li>Ask someone you trust to stand nearby as a backup reader in case you need a break.</li>
                <li>Bring a glass of water. A sip gives you a natural pause when you need one.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">Nobody expects perfection. They expect love, and that is something you already have.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Honor a Grandfather Who Was Hard to Know</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Not every grandfather was warm and open. Some were quiet, distant, or hard to read. If your relationship with your grandfather was complicated or if you did not know him as well as you wished, you can still write a meaningful eulogy.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Focus on what you did know. Maybe he was a man of routine and discipline. Maybe he showed love through actions rather than words, keeping the house in perfect order or always making sure the car was running. Maybe the most honest thing you can say is that he was a product of his generation and expressed love in ways that were sometimes hard to recognize.</p>
              <p className="text-gray-600 leading-relaxed">You do not have to pretend the relationship was something it was not. A eulogy that says &quot;I wish I had known him better, and here is what I did know&quot; can be just as powerful as one filled with close memories. Honesty is always more moving than a performance.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/eulogy-for-grandmother" className="text-slate-600 hover:text-slate-800 font-medium">Eulogy for a Grandmother: Examples and Tips</Link></li>
                <li><Link href="/blog/how-to-write-a-eulogy" className="text-slate-600 hover:text-slate-800 font-medium">How to Write a Eulogy: A Complete Guide</Link></li>
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
