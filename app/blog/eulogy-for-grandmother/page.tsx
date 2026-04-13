import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Eulogy for a Grandmother: Examples, Tips, and How to Write One',
  description: 'A eulogy for your grandmother is a chance to honor her life and the love she gave. Here are sample eulogies, a simple structure, and tips for writing one.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/eulogy-for-grandmother' },
};

const faqs = [
  { q: 'What do you say in a eulogy for a grandmother?', a: 'Talk about who she was as a person, not just her role as a grandmother. Share specific memories that capture her personality: the way she cooked, the things she said, how she made people feel. Mention what she taught you and the traditions she created or carried forward.' },
  { q: 'How long should a eulogy for a grandmother be?', a: 'Most eulogies are 3 to 7 minutes long, or about 500 to 1,000 words. A focused, heartfelt eulogy that runs 4 to 5 minutes is more powerful than a long, unfocused one. Check with the officiant about any time limits for the service.' },
  { q: 'What are good memories to include in a grandmother\'s eulogy?', a: 'Include memories that show who she was, not just what she did. Think about her kitchen, her traditions, her sayings, and the way she treated people. Holidays, family gatherings, and small everyday moments often make the best material because they reveal her character.' },
  { q: 'How do you start a eulogy for your grandma?', a: 'Start with a specific detail or memory that was unmistakably hers. Something like "My grandmother\'s house always smelled like cinnamon and coffee" or "Grandma had a saying for everything." Specific openings draw the audience in better than generic statements.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function EulogyForGrandmotherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Eulogy for a Grandmother: Examples, Tips, and How to Write One</h1>
              <p className="text-xl text-gray-600 mb-4">Sample eulogies, a simple structure, and practical guidance for honoring your grandmother&apos;s life.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">A grandmother occupies a unique place in a family. She is often the keeper of traditions, the source of unconditional love, and the person who made holidays and ordinary weekends feel special. Writing a eulogy for her is a chance to honor all of that and to tell the room what she meant to you.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Makes a Grandmother&apos;s Eulogy Special</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A eulogy for a grandmother often has a different feel than one for a parent. Grandparents frequently represent the best parts of childhood, the safety, the warmth, the freedom from responsibility. Your eulogy can lean into that. Talk about what her home felt like. Talk about the traditions she kept alive, the recipes she guarded, the stories she told.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Grandmothers also carry family history. She may have been the link between generations, the person who remembered what everyone else had forgotten. Acknowledging that role in the eulogy gives the audience a sense of what has been lost and what must now be carried forward by the rest of the family.</p>
              <p className="text-gray-600 leading-relaxed mb-4">You do not need to be sentimental. An honest, specific eulogy about who she really was, including her strong opinions, her stubbornness, or her sense of humor, is always more powerful than a generic tribute.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Structure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A simple structure keeps the eulogy focused and easy to deliver. You do not need to cover her entire life.</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-4">
                <li><strong>Opening:</strong> Introduce yourself and your relationship. One or two sentences is enough.</li>
                <li><strong>A memory or story:</strong> Choose one specific moment that captures who she was. Details make it real.</li>
                <li><strong>What she meant to the family:</strong> Her role, her traditions, the way she made people feel.</li>
                <li><strong>Closing:</strong> A final thought, a goodbye, or a line that feels true to who she was.</li>
              </ol>
              <p className="text-gray-600 leading-relaxed mb-4">Pick two or three threads and weave them together. A focused eulogy is always stronger than one that tries to cover everything.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy: Warm and Personal</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;My grandmother&apos;s house smelled like cinnamon and fresh bread and something else I could never quite identify but have spent my whole life trying to find in other places. Walking through her front door was like walking into a hug. Everything slowed down in her house. The television was always too loud, the couch was always too soft, and there was always something cooking.&quot;</p>
                <p className="mb-4">&quot;Grandma was the center of our family. She remembered every birthday, every anniversary, and every preference. She knew which grandchild liked their eggs scrambled and which one liked them fried. She knew which cousin was allergic to strawberries and which one would eat nothing but strawberries. She kept track of all of us, and she made each of us feel like we were her favorite.&quot;</p>
                <p className="mb-4">&quot;She had opinions about everything and was not shy about sharing them. She believed in hard work, good manners, and writing thank you notes by hand. She believed that a home cooked meal could fix most problems and that a good conversation could fix the rest.&quot;</p>
                <p>&quot;I am going to miss her more than I can say. But every time I smell cinnamon, every time I write a thank you note, every time I remember to ask someone how they are doing and actually listen to the answer, that is her. That will always be her.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy: Short and Simple</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;My grandmother was the strongest woman I have ever known. She raised five children, buried a husband too young, and kept the family together through decades of change and challenge. She did all of it with grace and without complaint.&quot;</p>
                <p className="mb-4">&quot;She taught me that love is not a feeling. It is a choice you make every day, in how you treat people, in how you show up, in how you keep going when things get hard.&quot;</p>
                <p>&quot;Grandma, you held us all together. We are going to do our best to keep holding on. Thank you for everything you gave us.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Delivering</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Delivering a eulogy for your grandmother is an emotional experience, but preparation helps. Here are some practical tips.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Print the eulogy in a large, clear font. Do not read from your phone.</li>
                <li>Read it out loud at least twice before the service so you know which parts will be hardest.</li>
                <li>Bring water with you to the podium. A sip gives you a natural moment to pause.</li>
                <li>Ask a trusted person to stand nearby as a backup reader in case you need a break.</li>
                <li>If you cry, pause, breathe, and continue when ready. No one will judge you.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">The audience wants to hear from you because you loved her. That is all the qualification you need.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Things to Include About Her Life</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When thinking about what to say, consider these areas of her life. You do not need to cover all of them, but they can help spark ideas.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Her home and what it felt like to be there</li>
                <li>Family traditions she created or maintained, holiday meals, annual gatherings, bedtime routines</li>
                <li>Her cooking, baking, gardening, or other skills that defined her</li>
                <li>How she treated people outside the family, neighbors, friends, strangers</li>
                <li>Phrases she used or advice she gave repeatedly</li>
                <li>What she was proud of and what brought her joy in her later years</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">The most meaningful material comes from your own experience with her. Trust your memories and let them guide the eulogy.</p>
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
              <p className="text-slate-600 text-sm mb-5">Search 4,800+ funeral homes across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
