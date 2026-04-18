import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Short Eulogy Examples: Brief Tributes Under 3 Minutes',
  description: 'Short eulogy examples you can adapt for any service. Under 200 words, under 100 words, and one paragraph versions for every relationship.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/short-eulogy-examples' },
};

const faqs = [
  { q: 'How short can a eulogy be?', a: 'A eulogy can be as short as one paragraph or 60 seconds. There is no minimum length. A single sincere story about the person is always enough.' },
  { q: 'Is a 2 minute eulogy too short?', a: 'No. A 2 minute eulogy delivered with sincerity is often more memorable than a 10 minute speech. Aim for substance over length.' },
  { q: 'What if I cannot get through a short eulogy?', a: 'Have a printed backup copy and ask a trusted person to stand beside you. If you cannot continue, they can finish reading for you.' },
  { q: 'Can multiple people give short eulogies at the same service?', a: 'Yes. Having 3 or 4 people each share a brief 2 minute tribute often creates a richer picture of the person than one long speech.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const speakableSchema = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Short Eulogy Examples: Brief Tributes Under 3 Minutes', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['article > section:first-of-type'] } };

export default function ShortEulogyExamplesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Short Eulogy Examples: Brief Tributes Under 3 Minutes</h1>
              <p className="text-xl text-gray-600 mb-4">Under 200 words, under 100 words, and one paragraph versions for every relationship.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">A short eulogy runs under 3 minutes when delivered, which is approximately 200 to 400 words. Short eulogies are often more powerful than long ones. These examples show how to honor someone fully in just a few paragraphs.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Short Eulogies Work</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When someone stands up and speaks for two minutes with honesty and warmth, every word carries weight. There is no filler, no rambling, no pressure to cover an entire life story. A short eulogy forces you to choose the details that matter most, and that selection itself becomes the tribute. The audience remembers every word because there are not too many of them.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Short eulogies also suit moments when grief makes it hard to speak for long. Standing at a podium while your voice shakes is exhausting. Knowing that you only need to get through one page of text makes the task feel possible. And for services where several people want to speak, short tributes let everyone participate without the service running long.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Under 100 Words: Eulogy for a Parent</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p>My mother, Linda Hargrove, made our house a home in ways I did not fully appreciate until I had a house of my own. She kept fresh flowers on the kitchen table every week for 30 years. She left notes in our lunchboxes long after we told her we were too old for them. She answered every phone call by saying, &quot;Tell me everything.&quot; She meant it every time. I will spend the rest of my life trying to love people the way she did.</p>
              </blockquote>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Under 100 Words: Eulogy for a Friend</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p>Danny Kowalski was the first person to show up and the last to leave. He drove four hours to help me move into an apartment I lived in for six months. He remembered every birthday without a calendar. When my father was in the hospital, Danny sat with me in the waiting room for nine hours and never once checked his phone. He did not do these things to be thanked. He did them because that is who he was.</p>
              </blockquote>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Under 100 Words: Eulogy for a Grandparent</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p>My grandfather, Victor Saldana, believed that showing up was the whole point. He was at every game, every recital, every graduation. He sat in the back row and clapped louder than anyone. After every event, he would find me, put his hand on my shoulder, and say, &quot;I would not have missed it.&quot; He never missed a single one. Not one. And I will carry that with me for the rest of my life.</p>
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Under 200 Words: Eulogy for a Mother</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p className="mb-4">My mother, Jean Calloway, was not the kind of person who asked for attention. She worked quietly and steadily for 35 years as a school librarian, and she treated every child who walked through those doors like they mattered. She kept a jar of butterscotch candies on her desk because she said a kid who is chewing on something sweet is a kid who is ready to listen.</p>
                <p className="mb-4">At home, she was the same way. Steady. Present. She made dinner every night not because she had to but because she believed sitting down together was how a family stayed a family. She read to us long after we could read ourselves, because she said the sound of someone reading to you is a form of love.</p>
                <p>She was right about that. She was right about most things. I did not always tell her so, and I wish I had said it more. But I think she knew. Mothers usually do.</p>
              </blockquote>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Under 200 Words: Eulogy for a Father</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p className="mb-4">My father, Paul Engstrom, fixed things. That was his way of saying I love you. A squeaky door, a flat tire, a broken shelf. He never said, &quot;I will get to it later.&quot; He got up and handled it. When I bought my first house and the pipes froze the first winter, he drove two hours in the snow with a space heater and a bag of tools.</p>
                <p className="mb-4">He was not a talker. He did not give long speeches or write letters. But every Saturday morning, he made pancakes for whoever was at the house. No invitation needed. If you showed up, there was a plate for you. That was how he built a family. Not with words but with consistency.</p>
                <p>I am going to miss his quiet presence more than I can explain. The house is louder now, somehow, without the quietest person in it.</p>
              </blockquote>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Under 200 Words: Eulogy for a Friend</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p className="mb-4">I met Sarah Whitfield on the first day of a job neither of us ended up keeping. We bonded over bad coffee and a shared hatred of fluorescent lighting, and from that day on, she was my person. She was the one I called when things fell apart and the one I called when things went right.</p>
                <p className="mb-4">Sarah had a gift for making hard things feel manageable. She would listen to your worst day, pause for about two seconds, and then say something so honest it made you laugh. She never pretended things were fine when they were not. But she always made you believe they would be.</p>
                <p>She was supposed to be here for decades more. I had plans that included her. I think a lot of us did. The unfairness of that is something I am still learning to sit with. But I know what she would say: Stop feeling sorry for yourself and go do something worth talking about. So that is what I am going to try to do.</p>
              </blockquote>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Under 200 Words: Eulogy for a Grandparent</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">My grandmother, Dorothy Brennan, had opinions about everything and she shared them freely. She thought store bought pie was a crime. She thought thank you notes should be handwritten and mailed within three days. She thought children should play outside until the streetlights came on, and she thought the world would be better off if more people sat on their front porches.</p>
                <p className="mb-4">She was 94 years old, and she still baked her own bread every Sunday. She still called each of her eleven grandchildren on their birthdays and sang the entire song into the voicemail if you did not pick up. She still wore lipstick to the grocery store because she said you never know who you are going to run into.</p>
                <p>She lived with intention. Every small thing she did was done on purpose, with care. That is the lesson she left us. It was never about the big moments. It was about the Tuesday mornings and the handwritten notes and the bread rising on the counter.</p>
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">One Paragraph Eulogies</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p>My uncle, Ray Pescatori, taught me how to play chess when I was seven. He was patient about it in a way he was not patient about much else. He let me win for an entire year before he started playing for real, and when he finally beat me, he said, &quot;Now the game starts.&quot; That was Ray. He let you find your footing before he challenged you, and then he pushed you to be better. I will miss him at every family gathering for the rest of my life.</p>
              </blockquote>

              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-6">
                <p>My sister, Claire Denning, laughed harder than anyone I have ever known. Full body, tears streaming, gasping for air laughing. She could find something funny in the worst situations, and she made everyone around her lighter because of it. Even in the hospital, she made the nurses laugh. She made us laugh. She would not want us to stop now.</p>
              </blockquote>

              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p>My wife, Angela Torres, was the bravest person I have ever known. Not in a dramatic way. She was brave in the quiet, daily way that no one gives awards for. She raised three children while working full time. She went back to school at 42. She fought her illness with a calm determination that I could never match. She told me once that courage is just deciding to keep going, and she never stopped deciding.</p>
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Eulogy Opening Lines</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li>&quot;My father, James Holloway, was not a man of many words. But the words he chose stayed with you for years.&quot;</li>
                <li>&quot;If you knew my mother, you knew her kitchen. That is where everything important happened.&quot;</li>
                <li>&quot;I have been trying to think of the right way to describe my grandmother, and the truest thing I can say is this: she made you feel like you were the most important person in the room.&quot;</li>
                <li>&quot;My best friend, Marco Reyes, would hate that I am up here being serious right now. So I will try to keep this short.&quot;</li>
                <li>&quot;My grandfather sat in the same chair every evening for 40 years. That chair is empty now, and the whole house feels different.&quot;</li>
                <li>&quot;I want to tell you about the kind of neighbor Helen Braddock was, because that tells you everything about the kind of person she was.&quot;</li>
                <li>&quot;My brother taught me almost everything I know about being a decent person. He would be embarrassed to hear me say that, but it is true.&quot;</li>
                <li>&quot;The last thing my aunt said to me was, do not make this sad. So I am going to try my best.&quot;</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Keeping a Eulogy Short Without Losing Meaning</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Choose one or two stories instead of trying to cover the person&apos;s entire life. A single well told memory says more than a list of accomplishments.</li>
                <li>Cut any sentence that starts with &quot;as we all know&quot; or &quot;everyone here can agree.&quot; If everyone knows it, you do not need to say it.</li>
                <li>Read it out loud and time yourself. If it runs over 3 minutes, look for sentences that repeat the same idea in different words and remove the weaker version.</li>
                <li>End with one sentence that captures what you will carry forward. A strong closing eliminates the need for a long wind down.</li>
                <li>Skip the biography. The obituary handles the timeline. Your job is to share what the person felt like to be around.</li>
                <li>Write it first, then cut it. It is easier to shorten a long draft than to expand a short one.</li>
                <li>Ask yourself: if I could only say three sentences about this person, what would they be? Build from there.</li>
              </ul>
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
