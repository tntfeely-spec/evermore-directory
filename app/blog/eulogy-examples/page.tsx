import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Eulogy Examples: Real Samples for Any Relationship',
  description: 'Real eulogy examples for mother, father, grandmother, grandfather, friend, and more. Copy, adapt, and personalize for your service.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/eulogy-examples' },
};

const faqs = [
  { q: 'How long should a eulogy be?', a: 'Most eulogies run 3 to 5 minutes when delivered, which is approximately 400 to 600 words. Shorter is usually better. A focused 3 minute eulogy is more powerful than a rambling 10 minute one.' },
  { q: 'Who should deliver a eulogy?', a: 'Usually a close family member, a longtime friend, or a colleague. There are no strict rules. The right person is whoever knew the deceased well and feels up to speaking.' },
  { q: 'How do you start a eulogy?', a: 'Start with the person\'s name and one defining quality or a brief story that captures who they were. Avoid starting with thank you or my name is. Jump straight into who they were.' },
  { q: 'Can you read a eulogy from notes?', a: 'Yes. Most people read eulogies from printed notes or a phone. Practice it enough to make eye contact occasionally, but there is no expectation that you will memorize it.' },
  { q: 'What should you not say in a eulogy?', a: 'Avoid cliches like they are in a better place or everything happens for a reason. Avoid airing family grievances. Keep the focus on celebrating the person\'s life.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Deliver a Eulogy',
  description: 'Practical steps for delivering a eulogy at a funeral or memorial service.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Practice out loud at least three times', text: 'Reading silently is not the same as speaking. Practice the full eulogy out loud to hear how it sounds and feel where the emotional moments are.' },
    { '@type': 'HowToStep', position: 2, name: 'Time yourself', text: 'Aim for 3 to 5 minutes. If your eulogy runs longer than 7 minutes, cut the weakest section. Shorter is always better than too long.' },
    { '@type': 'HowToStep', position: 3, name: 'Print large text double spaced', text: 'Print your eulogy in at least 14 point font with double spacing. This makes it easy to read through tears or shaking hands.' },
    { '@type': 'HowToStep', position: 4, name: 'Mark emotional spots with a pause note', text: 'Put a small mark in the margin where you know you might get emotional. When you reach those spots, pause, take a breath, and continue when ready.' },
    { '@type': 'HowToStep', position: 5, name: 'Make brief eye contact during practiced lines', text: 'Look up from your notes during lines you have practiced most. Brief eye contact connects the words to the room.' },
    { '@type': 'HowToStep', position: 6, name: 'Pause and breathe if you get emotional', text: 'It is completely normal to cry during a eulogy. Pause, take a slow breath, and continue. No one will judge you. Have a backup reader standing nearby if needed.' },
  ],
};

export default function EulogyExamplesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, howToSchema]) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Eulogy Examples: Real Samples for Any Relationship</h1>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">A eulogy is a short speech honoring someone who has died, typically delivered at a funeral or memorial service by someone who knew them well. These eulogy examples cover every major relationship and service type. Each one is written to be adapted, not copied word for word. The best eulogies replace the specific details with your own memories.</p>
            </section>

            {/* Eulogy Example for a Mother */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eulogy Example for a Mother</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">My mother, Linda Brennan, had a kitchen that smelled like cinnamon and butter every single Sunday morning. That was not an accident. She believed that feeding people was the purest way to love them, and she loved relentlessly.</p>
                <p className="mb-4">She had this phrase she said whenever any of us kids came to her with a problem. She would listen, really listen, and then she would say, &quot;Well, what do you think you should do?&quot; She never handed us answers. She handed us the confidence to find our own. I did not appreciate that until I was well into my thirties.</p>
                <p className="mb-4">Mom was the first person awake and the last one to sit down. She ironed clothes that did not need ironing. She kept a garden that looked like it belonged in a magazine, and she talked to every single plant like it was a friend. Maybe they were.</p>
                <p className="mb-4">She drove the same route to church for 40 years and still managed to get lost once a year, which she blamed on the city changing the roads. The city never changed the roads.</p>
                <p>What I will carry with me is not the recipes or the Sunday mornings, though I will carry those too. It is the way she made every person in her life feel like the most important person in the room. She did that for me every single day, and I will spend the rest of my life trying to do that for others.</p>
              </div>
            </section>

            {/* Eulogy Example for a Father */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eulogy Example for a Father</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">My father, Frank Delgado, was not a man of many words. He showed you he loved you by checking the oil in your car without being asked, by standing in the driveway at midnight waiting until your headlights turned the corner, and by building things in his workshop that nobody needed but everybody treasured.</p>
                <p className="mb-4">He built me a bookshelf when I was nine. It was overbuilt, heavy enough to survive a hurricane, and slightly crooked on the left side. I still have it. I will always have it.</p>
                <p className="mb-4">Dad taught me that showing up is the thing that matters. He never missed a game, a recital, or a school play, even the terrible ones. He sat in the front row with his arms crossed and a look on his face that could have been pride or indigestion, but we all knew which one it was.</p>
                <p className="mb-4">He had one lesson he repeated more than any other: &quot;Do it right or do it twice.&quot; He applied that to everything from tightening a bolt to writing a thank you note. I hear his voice every time I am tempted to cut a corner.</p>
                <p>The workshop is quiet now. But the things he built, the shelves, the birdhouses, the confidence he put into his children, those will outlast all of us. Thank you, Dad, for every silent act of love.</p>
              </div>
            </section>

            {/* Eulogy Example for a Grandmother */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eulogy Example for a Grandmother</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">My grandmother, Dorothy Walsh, kept a cookie jar on the counter that was never empty. It was a ceramic rooster with a chipped beak, and every grandchild in this room reached into that rooster at least a thousand times. She made snickerdoodles from memory and refused to write the recipe down. She said it lived in her hands, not on paper.</p>
                <p className="mb-4">Her house smelled like lavender and coffee. The carpet had plastic runners that squeaked when you walked on them, and the couch had pillows you were not allowed to sit on. But her kitchen table was the most welcoming place I have ever known. That is where she told us stories, taught us to play cards, and gave us advice we were too young to appreciate.</p>
                <p className="mb-4">She once told me, &quot;You do not have to be the smartest person in the room. You just have to be the kindest.&quot; I have carried that with me into every job interview, every argument, every difficult conversation.</p>
                <p className="mb-4">Grandma Dorothy raised four children, buried a husband, survived a depression, and still managed to laugh every single day. She laughed with her whole body, leaning back in her chair until we were all sure she would tip over.</p>
                <p>I brought the recipe card box home with me last week. The snickerdoodle card is blank. She was right. It lived in her hands. And now it lives in all of us who watched her make them.</p>
              </div>
            </section>

            {/* Eulogy Example for a Grandfather */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eulogy Example for a Grandfather</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">My grandfather, Earl Patterson, woke up at 5:15 every morning for as long as any of us can remember. He made one cup of black coffee, read the paper front to back, and was dressed and ready for the day before anyone else opened their eyes. He believed in routine the way other people believe in luck.</p>
                <p className="mb-4">Grandpa Earl had a story for everything. You could not mention a town, a tool, or a type of weather without triggering a 10 minute story that somehow always circled back to a lesson about patience or hard work. We groaned as kids. We would give anything to hear one more of those stories now.</p>
                <p className="mb-4">He taught me how to fish, how to tie a proper knot, and how to shake a hand like you meant it. He taught me that being early is being on time, and being on time is being late. He taught me that you measure a person by what they do when nobody is watching.</p>
                <p className="mb-4">Every Saturday he drove to the hardware store, not because he needed anything, but because he liked talking to the people there. He knew every clerk by name. He asked about their families. He remembered details that most people forget.</p>
                <p>Grandpa Earl lived 91 years, and he did not waste a single morning. The coffee pot is still on the counter. The paper is still on the porch. The chair is empty, but the lessons are not.</p>
              </div>
            </section>

            {/* Eulogy Example for a Friend */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eulogy Example for a Friend</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">Marcus Keane was my best friend for 18 years, and in that entire time he was never once on time for anything. Not once. He was late to his own surprise party, which, if you think about it, made it more of a surprise for him than for anyone else.</p>
                <p className="mb-4">We met in a college chemistry lab where neither of us belonged. We both failed that class, and that shared failure turned into the most important friendship of my life. We studied together, traveled together, argued about sports neither of us actually played, and ate more bad pizza than any two people should admit to publicly.</p>
                <p className="mb-4">Marcus was the person you called at 2 a.m. when everything fell apart. He would answer on the first ring, groggy and grumpy, and say, &quot;Alright, tell me everything.&quot; He never judged. He never lectured. He just listened, and then he said something that made you laugh at the thing that had been making you cry.</p>
                <p className="mb-4">He had a way of making ordinary days feel important. A Tuesday afternoon at a diner with Marcus felt like an event. He was fully present with the people he loved, and he loved more people than anyone I have ever known.</p>
                <p>I keep reaching for my phone to text him something funny I saw. I suppose I will keep doing that for a while. That is the kind of space he filled. Irreplaceable. Unmistakable. Always a little late, but always worth the wait.</p>
              </div>
            </section>

            {/* Eulogy Example for a Husband */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eulogy Example for a Husband</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">Robert loved me in the quietest, steadiest way a person can be loved. He brought me coffee every morning before I woke up. He left the porch light on when I worked late. He never once forgot our anniversary, though he pretended to every year just to see my face when the flowers arrived anyway.</p>
                <p className="mb-4">We were married 34 years. In that time we raised three children, moved twice, survived a flood in the basement, and danced in the kitchen more times than I can count. He was not a perfect man. He loaded the dishwasher wrong every single time, and he had opinions about the thermostat that I will never understand. But he was my person.</p>
                <p>The house is too quiet now. I keep setting two places at the table. I keep hearing the garage door and thinking he is home. I know that will fade, and I am not sure I want it to. Thirty four years was not enough, Robert. Not even close.</p>
              </div>
            </section>

            {/* Eulogy Example for a Wife */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eulogy Example for a Wife</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">Catherine made every room she walked into warmer. That is not something people just say. It is literally what happened. She would walk in, and the whole temperature of the room shifted. People stood a little taller. People smiled a little wider. She had that effect on everyone, but especially on me.</p>
                <p className="mb-4">She left notes in my lunch for 28 years. Sometimes they said something sweet. Sometimes they just said &quot;eat the salad.&quot; I saved every single one of them. They are in a shoebox in the closet, and they are the most valuable thing I own.</p>
                <p>Catherine believed that a good life is measured by the people who show up when things get hard. Looking at this room today, I think she proved her own point. She would want me to thank all of you, so I will. And she would want me to stop talking before I start crying, so I will do that too. I love you, Cat. Always.</p>
              </div>
            </section>

            {/* Eulogy Example for a Brother */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eulogy Example for a Brother</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">My brother Kevin once convinced me that the ice cream truck only played music when it was out of ice cream. I believed that for three years. That is the kind of brother he was. Creative. Convincing. Absolutely shameless.</p>
                <p className="mb-4">But Kevin was also the one who sat with me in the hospital when our mother was sick. He did not say much. He just sat there, solid and calm, handing me bad vending machine coffee every hour. He was the kind of person who showed up with exactly what you needed, even if what you needed was just someone sitting next to you in an uncomfortable chair.</p>
                <p>He was my first best friend and the person who knew me longer than anyone else on earth. The world feels uneven without him, like a table with one short leg. I will spend the rest of my life missing him, and I know he would give me a hard time about saying that out loud. So, Kevin, consider this your last chance to roll your eyes at me. I love you, brother.</p>
              </div>
            </section>

            {/* Eulogy Example for a Sister */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eulogy Example for a Sister</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">My sister, Angela, was two years older and roughly two hundred years wiser. She always knew the right thing to say, and if she did not, she would hug you until the right thing to say did not matter anymore.</p>
                <p className="mb-4">She braided my hair before school every morning until I was old enough to do it myself, and then she still checked it before I walked out the door. She proofread every college essay, every job application, and every important text message I sent for 20 years. She caught every typo and every bad decision before I made it.</p>
                <p>Angela believed that sisters are the people who see you at your absolute worst and love you harder because of it. She saw me at my worst more times than I can count, and she never flinched. I do not know who checks my work now. I do not know who I call first with good news. But I know she is still the standard I measure kindness against, and she always will be.</p>
              </div>
            </section>

            {/* Short Eulogy Examples */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Eulogy Examples</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Sometimes a few words are all that is needed. These short eulogy examples are meant for graveside services, informal gatherings, or anyone who wants to keep it brief.</p>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Short Eulogy Example 1</h3>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-4">
                <p>George Harding was my father, and he was the most dependable man I have ever known. He worked the same job for 37 years, came home every night, and sat in the same chair. He did not need adventure. His family was enough. He made ordinary life feel safe, and that is the greatest gift a father can give. We love you, Dad.</p>
              </div>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Short Eulogy Example 2</h3>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-4">
                <p>Marie showed love through food, through showing up, and through handwritten cards that arrived exactly when you needed them. She never forgot a birthday. She never held a grudge. She lived gently, and the world was better for it. We will miss you every day, Marie.</p>
              </div>

              <h3 className="text-lg font-medium text-gray-800 mb-2">Short Eulogy Example 3</h3>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-4">
                <p>James was my best friend for 30 years. He could fix anything, remember everything, and make you laugh when you did not think laughter was possible. He was steady when the world was not. I will carry his friendship with me for the rest of my life.</p>
              </div>
            </section>

            {/* Funny Eulogy Examples */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funny Eulogy Examples</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Humor belongs in a eulogy when it reflects who the person was. These examples use warm, affectionate humor that celebrates a life rather than diminishing the loss.</p>

              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-4">
                <p className="mb-4">My uncle, Sal Fontana, firmly believed he was an excellent cook. He was not. The man once served Thanksgiving turkey that could have been used as a doorstop, and he stood next to it beaming like he had just won a cooking competition. We all ate it. Every single one of us chewed in polite silence, because that is what you did for Sal.</p>
                <p className="mb-4">He also believed he was an excellent driver, an excellent singer, and an excellent dancer. He was none of these things. But he did everything with such complete joy and confidence that you could not help but cheer him on. He lived without embarrassment, and there is something deeply beautiful about that.</p>
                <p>Sal would want us laughing today. He would want someone to bring up the turkey. So, Sal, we brought it up. And we love you for every dry, overcooked bite.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300 mb-4">
                <p className="mb-4">Rita Chen had three rules. First, never go to bed angry. Second, always keep snacks in your purse. Third, never trust a man who does not eat breakfast. She followed these rules with absolute devotion, and honestly, she was never wrong about the breakfast thing.</p>
                <p className="mb-4">She was the kind of woman who would reorganize your entire kitchen while visiting for the weekend and then act offended if you noticed. She once alphabetized my spice rack and labeled my Tupperware lids. I did not ask her to. I also never changed it back.</p>
                <p>Rita lived with purpose, humor, and a purse that weighed approximately nine pounds due to the emergency granola bars. She was the most prepared, most opinionated, most loving person I have ever known, and I will miss her every single day.</p>
              </div>
            </section>

            {/* Eulogy Opening Lines */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eulogy Opening Lines</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The first sentence sets the tone for the entire eulogy. Here are 10 opening lines you can adapt for any relationship.</p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>My mother could make a stranger feel like family within five minutes of meeting her, and that is exactly the kind of person she was every day of her life.</li>
                <li>My father never said &quot;I love you&quot; out loud, but he said it every morning when he started my car in the winter so the seats would be warm by the time I got in.</li>
                <li>The last time I talked to my grandmother, she asked me if I was eating enough, and I want you to know that was also the first thing she ever said to me.</li>
                <li>If you knew David, you are probably smiling right now, because it was impossible to think about him without smiling.</li>
                <li>My sister was the bravest person I have ever known, and she would have hated me for saying that, which is one of the reasons it is true.</li>
                <li>I have started writing this eulogy six times, and each time I stop because no combination of words feels big enough for who he was.</li>
                <li>Margaret lived 88 years, and she spent every single one of them making sure the people she loved never felt alone.</li>
                <li>My brother was the funniest person in every room, and today this room feels unbearably quiet without him.</li>
                <li>I married the love of my life 40 years ago, and somehow every year with her felt like the first one.</li>
                <li>The best way I can describe my friend is this: she made ordinary days feel like they mattered, because when you were with her, they did.</li>
              </ol>
            </section>

            {/* Callout Boxes */}
            <div className="mb-6 bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-gray-700">Need a fill in the blank starting point? Use our free <Link href="/blog/eulogy-template" className="text-slate-700 font-semibold hover:text-slate-900 underline">Eulogy Template</Link>.</p>
            </div>
            <div className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
              <p className="text-gray-700">Step by step guidance on writing and delivering a eulogy: <Link href="/blog/how-to-write-a-eulogy" className="text-slate-700 font-semibold hover:text-slate-900 underline">How to Write a Eulogy</Link>.</p>
            </div>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Reading */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2 text-gray-700">
                <li><Link href="/blog/how-to-write-a-eulogy" className="text-slate-700 font-semibold hover:text-slate-900 underline">How to Write a Eulogy</Link></li>
                <li><Link href="/blog/eulogy-for-friend-samples" className="text-slate-700 font-semibold hover:text-slate-900 underline">Eulogy for a Friend: Samples, Tips, and How to Write One</Link></li>
              </ul>
            </section>

            {/* CTA */}
            <section className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-6 text-center">
              <p className="text-gray-700 mb-3">Planning a funeral or memorial service? Find trusted funeral homes in your area.</p>
              <Link href="/states" className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-colors">Browse Funeral Homes by State</Link>
            </section>

          </article>
        </div>
      </main>
    </>
  );
}
