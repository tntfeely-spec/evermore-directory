import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Eulogy for a Mother: Examples, Tips, and How to Write One',
  description: 'Writing a eulogy for your mother is one of the most personal things you will ever do. Here are sample eulogies, a simple structure, and tips for delivering it with love.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/eulogy-for-mother' },
};

const faqs = [
  { q: 'What do you say in a eulogy for your mother?', a: 'Talk about who your mother was as a person, not just her role in the family. Share specific stories that show her personality, her values, and the way she made people feel. Mention what she taught you and what you will carry forward from her life.' },
  { q: 'How do you start a eulogy for your mom?', a: 'Start with a simple, honest statement about who she was. Something like "My mother was the kind of person who..." or a brief memory that captures her personality. You do not need to open with something grand. Specificity draws people in more than poetry.' },
  { q: 'How long should a eulogy for a mother be?', a: 'Most eulogies run 3 to 7 minutes, which is roughly 500 to 1,000 words. A focused, heartfelt 5 minute eulogy is more powerful than a long, unfocused one. Ask the officiant if there is a time limit for the service.' },
  { q: 'What is a good opening line for a mother\'s eulogy?', a: 'A good opening line is specific and personal. Try something like "My mother never sat down before everyone else had been served" or "Mom had a way of making every room warmer just by being in it." Avoid generic openings that could apply to anyone.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function EulogyForMotherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Eulogy for a Mother: Examples, Tips, and How to Write One</h1>
              <p className="text-xl text-gray-600 mb-4">Sample eulogies, a clear structure, and practical advice for honoring your mother&apos;s life.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Writing a eulogy for your mother is one of the most personal and meaningful things you will ever do. You do not need to be a writer or a public speaker to do it well. You just need to tell the truth about who she was and what she meant to you and to the people around her.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Start</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The first sentence is often the hardest. Start by thinking about the one quality or habit that was most unmistakably your mother. Maybe she always had coffee ready before anyone woke up. Maybe she remembered everyone&apos;s birthday without ever writing them down. Whatever it is, that detail makes a strong opening because it is real and specific.</p>
              <p className="text-gray-600 leading-relaxed mb-4">You do not have to open with something poetic or profound. A simple, honest observation works better than a famous quote. If you are stuck, write the body of the eulogy first and come back to the opening later. Sometimes the right first line becomes obvious once the rest is written.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Some openings that work well: &quot;My mother was the kind of person who...&quot; or &quot;The first thing you noticed about Mom was...&quot; or a brief story that captures who she was in a single moment. The goal is to draw the room in with something that feels true.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Include</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A good eulogy for a mother is not a biography. It does not need to cover her entire life in chronological order. Instead, pick two or three threads that capture who she was and build around those.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>A specific memory or story that shows her character, not just what she did but who she was</li>
                <li>What she taught you, whether through words or by example</li>
                <li>How she made people feel, including people outside the family</li>
                <li>Something she said often or a phrase that was unmistakably hers</li>
                <li>What you will miss most and what you will carry forward from her life</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">Focus on the details that only someone who knew her well would know. Those are the moments that make a eulogy feel personal and real, rather than something that could apply to any mother.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy from a Son</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;My mother was not a woman who asked for attention. She did not give speeches or expect applause. She just showed up, every single day, for the people she loved. She showed up with food when someone was sick. She showed up with a phone call when someone was lonely. She showed up at every game, every recital, and every school event, always in the third row, always clapping the loudest.&quot;</p>
                <p className="mb-4">&quot;Mom had a way of making you feel like the most important person in the room. When she listened to you, she really listened. She did not check her phone or glance at the clock. She gave you her full attention, and that gift was something I did not fully appreciate until I became an adult and realized how rare it is.&quot;</p>
                <p className="mb-4">&quot;She taught me that strength is quiet. She never complained about the hard things in her life. She just handled them, one after another, with a steadiness that made the rest of us feel like everything would be fine. And it always was, because she made sure of it.&quot;</p>
                <p>&quot;I love you, Mom. Thank you for every early morning, every packed lunch, and every time you told me you were proud of me. I will spend the rest of my life trying to make you proud, even now.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy: Short and Simple</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;My mother was the foundation of our family. She held everything together without ever asking for credit. She made ordinary moments feel important, Sunday dinners, car rides to school, late night conversations at the kitchen table.&quot;</p>
                <p className="mb-4">&quot;She believed in showing up, in being kind even when it was hard, and in telling the people you love that you love them before you hang up the phone. She did that every single time.&quot;</p>
                <p>&quot;I will miss her voice, her advice, and the way she could fix anything with a hug and a cup of tea. She was the best of us. We will carry her with us always.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy: Warm and Personal</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;If you knew my mother, you knew her garden. She spent hours out there every weekend, hands in the dirt, talking to her tomato plants like they were old friends. She said gardening was the only thing that made her forget about time, and she meant it. She would go out at noon and come back at sunset, sunburned and happy, with a basket of vegetables and absolutely no idea what time it was.&quot;</p>
                <p className="mb-4">&quot;Mom was stubborn in the best possible way. When she believed in something, she did not back down. She believed in honesty, in hard work, and in treating every person with dignity regardless of their circumstances. She taught us those things not by lecturing but by living them every single day.&quot;</p>
                <p className="mb-4">&quot;She was also funny. Not in a loud way, but in a dry, perfectly timed way that could catch you completely off guard at the dinner table. She had a talent for saying the exact right thing at the exact right moment, and she usually did it with a straight face that made it even funnier.&quot;</p>
                <p>&quot;Mom, I am going to take care of your garden. I am not going to be as good at it as you were, but I am going to try, and I know you would say that trying is enough.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Delivering</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Delivering a eulogy for your mother is emotionally demanding, but preparation makes it manageable. Here are some practical tips to help you get through it.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Print the eulogy in a large font, at least 14 point. Do not rely on your phone or a small notecard.</li>
                <li>Practice reading it out loud at least twice before the service. Hearing it helps you anticipate the emotional moments.</li>
                <li>Bring a glass of water to the podium. A sip gives you a natural pause when you need to collect yourself.</li>
                <li>Ask a trusted family member or friend to stand nearby as a backup reader in case you need someone to take over.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">Remember, the people in the room are on your side. They are not expecting a perfect performance. They are there to grieve with you and to honor your mother alongside you.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do If You Cry</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You will probably cry. That is completely normal and no one will judge you for it. Crying during a eulogy for your mother is not a sign of weakness. It is a sign of love.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If tears come, pause, take a slow breath, and continue when you are ready. Silence is not awkward during a eulogy. It is natural and the audience will wait for you. Having a printed copy ensures you can find your place if you need to stop for a moment.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Some people find it helpful to practice reading the eulogy enough times that the emotional weight lessens slightly. Others prefer to read it fresh. Either approach is fine. The most important thing is that you said yes to doing this, and your mother would be proud of you for it.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/sample-eulogy-for-mother-from-daughter" className="text-slate-600 hover:text-slate-800 font-medium">Sample Eulogy for a Mother from a Daughter</Link></li>
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
