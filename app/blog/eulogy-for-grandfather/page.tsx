import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Eulogy for a Grandfather: Examples, Templates, and What to Say',
  description: 'Real eulogy examples for a grandfather including veteran and traditional versions. Fill in the blank templates and opening lines included.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/eulogy-for-grandfather' },
};

const faqs = [
  { q: 'What do you say in a eulogy for a grandfather?', a: 'Talk about what he taught you, how he spent his time, and what made him uniquely himself. Grandfathers are often remembered for their routines, their stories, and their quiet presence.' },
  { q: 'How long should a grandfather\'s eulogy be?', a: '3 to 5 minutes. If multiple grandchildren are sharing, 2 minutes each is fine.' },
  { q: 'What memories work best?', a: 'His workshop, his garden, his fishing spot, the stories he told over and over, the phrases he used, the way he greeted you when you walked in. Specific details bring a eulogy to life.' },
  { q: 'How do you start a eulogy for your grandpa?', a: 'Open with something he always did. For example: My grandfather, Earl, sat in the same chair every evening for 40 years. And every evening when I walked through the door, he said the same thing: Well, look who it is.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const speakableSchema = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Eulogy for a Grandfather: Examples, Templates, and What to Say', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['article > section:first-of-type'] } };

export default function EulogyForGrandfatherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Eulogy for a Grandfather: Examples, Templates, and What to Say</h1>
              <p className="text-xl text-gray-600 mb-4">Real eulogy examples for a grandfather including veteran and traditional versions with opening lines.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">A eulogy for your grandfather should honor the full weight of who he was. Whether he was a veteran, a farmer, a businessman, or simply the person who showed up every Sunday, these examples give you real language to work from.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Full Eulogy Example for a Grandfather</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">My grandfather, Earl Pemberton, had a chair. It was a brown recliner with a permanent dip on the left side where he sat every evening after supper. The remote control lived on the right armrest. A glass of iced tea lived on the side table. And when you walked through the front door, no matter what time it was, he looked up from that chair and said, &quot;Well, look who it is.&quot;</p>
                <p className="mb-4">He told the same stories over and over, and every single one of us let him, because they got better each time. The fish got bigger. The winters got colder. The walk to school got longer. He knew we knew, and he did not care. The telling was the point.</p>
                <p className="mb-4">On Saturday mornings, he was in his workshop by six. He built birdhouses, shelves, cutting boards, and a rocking horse for my daughter that he sanded for three weekends straight because he said a child should never get a splinter from something made with love. He had sawdust in his hair more often than not, and his hands were rough in a way that made you feel safe when he held yours.</p>
                <p className="mb-4">He grew tomatoes every summer in the same patch of yard, and he talked about those tomatoes like they were his greatest accomplishment. He gave them away to neighbors, to the mail carrier, to anyone who stood still long enough. He said a garden is only worth having if you share it.</p>
                <p>That was his philosophy about everything, really. Share what you have. Show up when it matters. Sit in your chair at the end of the day and be glad for the people who walk through the door. I am going to miss that chair. I am going to miss him in it. And I am going to say &quot;Well, look who it is&quot; to my own grandchildren someday, because that is how he stays alive.</p>
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Eulogy Example for a Grandfather</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p>My grandfather, Walter Novak, was a man of routine. Coffee at five thirty. Newspaper by six. Workshop by seven. He did the same things every day for decades, and there was something deeply comforting about that. You always knew where to find him. You always knew he would be there. The world felt steadier because Walter Novak was in it, doing the same quiet, good things he had always done. I will miss that steadiness more than I can say.</p>
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eulogy for a Grandfather Who Was a Veteran</h2>
              <blockquote className="bg-gray-50 rounded-lg p-6 text-gray-700 leading-relaxed border-l-4 border-slate-300">
                <p className="mb-4">My grandfather, Staff Sergeant Henry Aldridge, enlisted at 19 and came home at 21 a different person than the one who left. He served in Korea during the winter of 1951, and he carried that winter with him for the rest of his life. He did not talk about it at the dinner table. He did not march in parades. But every Veterans Day, he put on his service pin and sat quietly on the porch, and we knew to leave him alone with whatever he was remembering.</p>
                <p className="mb-4">The military made him precise. His lawn was always cut in straight lines. His shoes were always polished. He shook hands like he meant it and he expected you to do the same. But beneath that discipline was a tenderness that caught you off guard. He cried at every grandchild&apos;s baptism. He kept a photograph of my grandmother in his wallet from 1953 until the day he died.</p>
                <p>He told me once that the thing about service is that it never really ends. You just find different ways to serve. He served his country, then he served his family, then he served his neighborhood by mowing the elderly widow&apos;s lawn next door every week for 15 years without being asked. That is the kind of man he was. Duty was not a word to him. It was a way of living.</p>
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Opening Lines for a Grandfather Eulogy</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li>&quot;My grandfather, Earl Pemberton, sat in the same chair every evening for 40 years. And every evening when I walked through the door, he said the same thing: Well, look who it is.&quot;</li>
                <li>&quot;If you wanted to find my grandpa, you checked three places: the garden, the workshop, or his recliner. He was never anywhere else, and he never needed to be.&quot;</li>
                <li>&quot;My grandfather told the same six stories for 30 years. I can tell every one of them by heart, and I plan to keep telling them.&quot;</li>
                <li>&quot;Grandpa had hands like sandpaper and a voice like gravel, and he was the gentlest person I have ever known.&quot;</li>
                <li>&quot;Walter Novak did not believe in wasting words. So I will try to keep this short, because he would appreciate that.&quot;</li>
                <li>&quot;My grandfather taught me two things: how to bait a hook and how to be patient enough to use it. Those two lessons have carried me further than any degree.&quot;</li>
                <li>&quot;The last time I saw my grandfather, he handed me a bag of tomatoes from his garden and said, give those to someone who needs them. That was his answer to everything.&quot;</li>
                <li>&quot;Henry Aldridge was not a man who asked for much. A cup of coffee, a baseball game on the radio, and his family nearby. That was enough for him, and watching him be content with that taught me more than he will ever know.&quot;</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Qualities and Stories Worth Including</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>His daily routine, because grandfathers are often defined by the rhythms they kept</li>
                <li>The stories he told repeatedly, and what those stories reveal about what mattered to him</li>
                <li>A specific skill he had or hobby he loved, whether it was woodworking, fishing, gardening, or fixing engines</li>
                <li>The phrases he used over and over, his greetings, his advice, his jokes</li>
                <li>How he treated your grandmother, because that relationship often says more about a man than anything else</li>
                <li>Something he built, grew, or made with his hands that still exists</li>
                <li>The way he made you feel when you were a child, safe, important, seen</li>
                <li>What he sacrificed for his family that he never talked about</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Handle a Grandfather You Did Not Know Well</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Not every grandchild grows up close to their grandfather. Distance, family dynamics, or simply the timing of generations can mean you did not know him as well as you wish you had. That does not disqualify you from delivering a meaningful eulogy. It just changes your approach.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Start by talking to the people who did know him well. Ask your parents, your aunts and uncles, his neighbors, his friends. Ask them for one specific story that captures who he was. You will be surprised how quickly a picture forms. People love to talk about the people they have lost, and they will give you more material than you need.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Be honest in the eulogy about your perspective. You can say, &quot;I did not get to spend as much time with my grandfather as I wish I had, but what I do know is this.&quot; Honesty is always more powerful than pretending. Share what you observed, what you were told, and what you wish you had asked him. That honesty will resonate with the room more than a fabricated closeness ever could.</p>
              <p className="text-gray-600 leading-relaxed">You can also honor what he left behind in the people he raised. If your parent is kind, steady, or hardworking, talk about how those qualities trace back to him. A grandfather&apos;s legacy lives in his children and grandchildren whether or not you spent every Sunday together.</p>
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
