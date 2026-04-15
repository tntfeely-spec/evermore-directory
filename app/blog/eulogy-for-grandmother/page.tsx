import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Eulogy for a Grandmother: Examples, Templates, and What to Say',
  description: 'Real eulogy examples for a grandmother with fill in the blank templates. Short, traditional, and celebration of life styles included.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/eulogy-for-grandmother' },
};

const faqs = [
  { q: 'What do you say in a eulogy for a grandmother?', a: 'Focus on the specific things she did that no one else did the same way. Her recipes, her phrases, her routines, her way of making you feel safe. Specifics are always more powerful than generalizations.' },
  { q: 'How long should a eulogy for a grandmother be?', a: '3 to 5 minutes is ideal. If you are one of many grandchildren speaking, 2 minutes each is appropriate.' },
  { q: 'What are good memories to include?', a: 'Kitchen memories, holiday traditions, things she taught you, phrases she repeated, how her house smelled, what she kept in her purse. The more specific the better.' },
  { q: 'How do you start a eulogy for your grandma?', a: 'Open with something only she did. For example: My grandmother, Rose, never let anyone leave her house without a plate of food. Not once in 91 years.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const speakableSchema = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Eulogy for a Grandmother: Examples, Templates, and What to Say', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['article > section:first-of-type'] } };

export default function EulogyForGrandmotherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Eulogy for a Grandmother: Examples, Templates, and What to Say</h1>
              <p className="text-xl text-gray-600 mb-4">Real eulogy examples for a grandmother with templates and opening lines you can use today.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">A eulogy for your grandmother should capture the specific things that made her irreplaceable. These examples and templates give you a starting point so you can focus on what made her unique.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Full Eulogy Example for a Grandmother</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">My grandmother, Lucille Ferraro, ran her kitchen like it was the center of the known universe. And honestly, it was. Every Sunday, she made sauce from scratch starting at seven in the morning. By noon, the whole house smelled like garlic and tomatoes and basil, and by two o&apos;clock, every chair at her dining room table was full.</p>
                <p className="mb-4">She never wrote down a single recipe. When I asked her how much oregano to use, she held up her fingers pinched together and said, &quot;This much.&quot; When I asked how long to cook the meatballs, she said, &quot;Until they are done.&quot; She thought measuring cups were for people who did not pay attention.</p>
                <p className="mb-4">But her kitchen was about more than food. It was where she told us stories about growing up. It was where she gave advice that you did not ask for but always needed. It was where she handed you a dish towel and said, &quot;Make yourself useful,&quot; which was her way of saying, you belong here.</p>
                <p className="mb-4">She had a phrase for everything. When someone complained, she said, &quot;Offer it up.&quot; When someone bragged, she said, &quot;Good for you, now set the table.&quot; When one of us was nervous about something, she said, &quot;You will be fine. Ferraro women are always fine.&quot;</p>
                <p>I am not fine right now. But I will be. Because she taught me how. She taught all of us how. And every Sunday for the rest of my life, I am going to make her sauce, and I am not going to use a measuring cup, and I am going to pretend I can hear her telling me it needs more salt.</p>
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Eulogy Example for a Grandmother</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p>My grandmother, Bea Sanderson, kept butterscotch candies in her purse, tissues in her sleeve, and a photograph of every grandchild in her wallet. She called each of us &quot;my heart.&quot; Not sweetheart. Just &quot;my heart.&quot; As in, &quot;Come here, my heart, and tell me about your day.&quot; She made you feel like your day was the most interesting thing she had heard all week. I will never stop missing the sound of her voice saying those words.</p>
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Poem or Closing Verse for a Grandmother Eulogy</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p>She kept the bread rising and the table set,<br />
                the porch light on for whoever had not come home yet.<br />
                She measured love in suppers made,<br />
                in quiet prayers and lemonade.<br />
                The house is still. The oven is cold.<br />
                But everything she gave us, we hold.</p>
              </blockquote>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p>Her hands were never still for long,<br />
                always mending, stirring, holding on.<br />
                She carried us before we knew<br />
                that carrying was what she always chose to do.<br />
                Now we carry her, in all the ways<br />
                she taught us through ten thousand days.</p>
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Opening Lines for a Grandmother Eulogy</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li>&quot;My grandmother, Lucille Ferraro, never let anyone leave her house hungry. It was physically impossible. She would block the door with a plate of cookies.&quot;</li>
                <li>&quot;If you want to know who my grandmother was, I can tell you in one sentence: she remembered everything about everyone and made sure they knew it.&quot;</li>
                <li>&quot;My grandma kept every birthday card she ever received. I know this because we found them last week, sorted by year, in a shoebox in her closet. There were 40 years of shoeboxes.&quot;</li>
                <li>&quot;Grandma had a saying for every situation, and she was almost always right, which she would want me to acknowledge publicly.&quot;</li>
                <li>&quot;The first thing you noticed about my grandmother&apos;s house was the smell. Cinnamon, coffee, and something baking. Always something baking.&quot;</li>
                <li>&quot;My grandmother taught me that love is not a feeling. It is a decision you make every morning when you get up and start cooking for people.&quot;</li>
                <li>&quot;Bea Sanderson was 92 years old, and she still called me every Sunday at exactly four o&apos;clock. If I did not answer, she called back at 4:01.&quot;</li>
                <li>&quot;I have eleven cousins, and every single one of us believed we were her favorite. That was her greatest trick.&quot;</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Include That Captures Who She Really Was</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>The specific recipes she made and how she made them, especially the ones she refused to write down</li>
                <li>Phrases she repeated so often that the family still quotes them</li>
                <li>The rituals and routines that defined her days, Sunday dinners, morning coffee, the way she answered the phone</li>
                <li>What her home felt like when you walked in the door</li>
                <li>How she treated people, strangers, neighbors, and family</li>
                <li>Something she kept, a locket, a letter, a photograph, that tells a story about what mattered to her</li>
                <li>The way she handled difficulty, because grandmothers often carry more than anyone realizes</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Common Phrases That Feel True vs Phrases That Feel Hollow</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-600 mb-4">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 font-semibold text-gray-800">Feels True</th>
                      <th className="py-3 font-semibold text-gray-800">Feels Hollow</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">&quot;She made you feel like you were the only person in the room.&quot;</td>
                      <td className="py-3">&quot;She was the best grandmother ever.&quot;</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">&quot;She kept every letter I ever wrote her.&quot;</td>
                      <td className="py-3">&quot;She loved her grandchildren very much.&quot;</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">&quot;Her pie crust was the only one I have ever liked.&quot;</td>
                      <td className="py-3">&quot;She was an amazing cook.&quot;</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">&quot;She called me every Sunday at four. I used to find it annoying. Now I would give anything for my phone to ring.&quot;</td>
                      <td className="py-3">&quot;She always stayed in touch.&quot;</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 pr-4">&quot;She wore the same perfume for 50 years and I can still smell it on her sweaters.&quot;</td>
                      <td className="py-3">&quot;She had great style.&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 leading-relaxed">The difference between a eulogy that moves people and one that does not is specificity. Any grandmother can be described as loving and kind. Only yours hid $5 bills in your coat pockets when you were not looking.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/eulogy-examples" className="text-slate-600 hover:text-slate-800 font-medium">Eulogy Examples for Every Relationship</Link></li>
                <li><Link href="/blog/eulogy-template" className="text-slate-600 hover:text-slate-800 font-medium">Eulogy Template: A Fill in the Blank Guide</Link></li>
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
