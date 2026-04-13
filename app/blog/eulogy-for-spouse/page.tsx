import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Eulogy for a Spouse: Examples for a Husband or Wife',
  description: 'Writing a eulogy for your husband or wife is one of the most intimate and difficult things you will ever do. Here are sample eulogies, a structure that works, and practical tips.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/eulogy-for-spouse' },
};

const faqs = [
  { q: 'What do you say in a eulogy for your spouse?', a: 'Talk about who they were as a person and what your life together meant to you. Share a specific memory that captures their character. Mention the qualities that made them irreplaceable, such as their kindness, their humor, their strength, or the way they loved. You can also talk about what they meant to their children, their friends, and their community.' },
  { q: 'How do you start a eulogy for your husband or wife?', a: 'Start with something specific and true. You might open with how you met, a defining trait, or a moment that captures who they were. Something like "The first thing I noticed about my wife was..." or "My husband had this habit of..." draws the audience in immediately. Avoid generic openings. The more personal the first line, the more powerful the eulogy.' },
  { q: 'How long should a spouse\'s eulogy be?', a: 'Most eulogies are 3 to 7 minutes, or roughly 500 to 1,000 words. For a spouse, leaning toward the longer end is perfectly appropriate since you have more to share than anyone. But do not feel obligated to make it long. A short, focused eulogy can be just as powerful. Ask the officiant if there is a time guideline for the service.' },
  { q: 'Is it okay to ask someone else to read the eulogy for you?', a: 'Absolutely. Many surviving spouses write the eulogy themselves but ask a close friend, sibling, or adult child to read it at the service. This is common and completely understandable. The grief of losing a spouse is uniquely intense, and there is no shame in asking for help. You can also plan to read it yourself but have a backup reader standing nearby in case you need them to take over.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function EulogyForSpousePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Eulogy for a Spouse: Examples for a Husband or Wife</h1>
              <p className="text-xl text-gray-600 mb-4">Sample eulogies, a practical structure, and honest advice for honoring your husband or wife.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Writing a eulogy for your husband or wife is one of the most intimate and difficult things you will ever do. This is the person who shared your bed, your meals, your worries, and your joy. No one knew them the way you did. That knowledge is what makes your eulogy irreplaceable. You do not need to be eloquent. You just need to be honest about who they were and what your life together meant.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Write It</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Start by sitting with your memories. Write down everything that comes to mind: the big moments and the small ones, the funny stories and the quiet ones. Do not edit yourself at first. Just let it flow. Once you have a full page, look for the two or three threads that feel most important and build the eulogy around those.</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-4">
                <li><strong>Opening:</strong> Introduce yourself briefly and set the tone. You might start with how you met or a defining quality.</li>
                <li><strong>A story or two:</strong> Pick moments that show who they were. Specific details matter more than summaries.</li>
                <li><strong>What they meant to you and others:</strong> How did they change your life? What did they bring to their family, friends, and community?</li>
                <li><strong>Closing:</strong> A final thought, a goodbye, or something that feels true to your relationship.</li>
              </ol>
              <p className="text-gray-600 leading-relaxed">Do not try to cover your entire marriage. A eulogy is not a biography. It is a portrait, and the best portraits focus on a few defining features rather than trying to capture everything at once.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Include</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>A specific memory that captures who they were, not just what they did</li>
                <li>The qualities that made them irreplaceable: their warmth, their patience, their humor, their determination</li>
                <li>How they showed love, in their own way</li>
                <li>What they meant to their children, extended family, or friends</li>
                <li>Something they said often, a phrase or piece of wisdom that was unmistakably theirs</li>
                <li>What you will miss most and what you will carry forward</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">The small details of a shared life are often the most powerful things to include. The way they took their coffee, the song they hummed, the thing they always said before bed. These are the details that make a eulogy feel true.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy for a Husband</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;My husband was not a man who made grand gestures. He showed love in small, steady ways that you could set your clock by. Every morning for 34 years, he made the coffee before I woke up. He never once mentioned it or asked for thanks. That was just who he was. He took care of people quietly, consistently, and without keeping score.&quot;</p>
                <p className="mb-4">&quot;He was the kind of father who showed up for everything. Every game, every recital, every science fair. He sat in the front row and clapped the loudest, even when our kids were embarrassed by it. Especially when they were embarrassed by it. He believed that being present was the most important thing a parent could do, and he never wavered on that.&quot;</p>
                <p className="mb-4">&quot;He made me laugh every single day. Even on the hard days, even when I did not want to, he could find a way to make me smile. He had this dry, deadpan humor that caught you off guard and made everything a little lighter.&quot;</p>
                <p>&quot;I do not know yet what my life looks like without him. The house is too quiet and the coffee does not taste right when I make it myself. But I know this: I was loved well for 34 years, and not everyone gets to say that. I will carry that love with me for the rest of my life.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sample Eulogy for a Wife</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;My wife was the strongest person I have ever known, and I do not think she ever realized it. She carried this family with grace and grit, making it all look effortless even when I knew it was anything but. She managed a career, raised three children, kept us all fed and organized, and still found time to be the friend that everyone called first.&quot;</p>
                <p className="mb-4">&quot;She had this way of making people feel seen. When she talked to you, she listened with her whole body. She asked the question nobody else thought to ask. She remembered the details you mentioned in passing three months ago and brought them up at exactly the right time. People trusted her because she earned it, every single day.&quot;</p>
                <p className="mb-4">&quot;She loved fiercely and without reservation. She loved our children in a way that shaped everything about who they became. She loved me in a way that made me want to be better, not because she demanded it, but because she believed I could be.&quot;</p>
                <p>&quot;I am not the same person without her, and I never will be. But I am a better person because of her, and I will spend whatever time I have left trying to live up to the faith she had in me.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Eulogy for a Spouse</h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700 italic border-l-4 border-slate-300">
                <p className="mb-4">&quot;We were married for 28 years. In that time, we built a home, raised two children, weathered storms, and laughed more than I can count. It was not always easy, but it was always ours.&quot;</p>
                <p className="mb-4">&quot;My spouse was my best friend, my partner in every decision, and the person I wanted to tell things to first. Good news, bad news, funny things that happened at the store. All of it went to them first.&quot;</p>
                <p>&quot;I will miss them every day. But I am grateful for every one of those 28 years, and I would not trade a single moment. That is the truth of it, and that is enough.&quot;</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Delivering When Deeply Grieving</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Delivering a eulogy for your spouse may be the hardest public moment of your life. The grief is raw and close, and the act of speaking about the person you lost can feel overwhelming. Here are some things that can help.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Print the eulogy in a large, clear font. Your hands may shake, and you need to be able to read it easily.</li>
                <li>Practice reading it aloud at least twice. This helps you identify the emotional peaks so they do not catch you off guard.</li>
                <li>If you cry, pause and breathe. Take as long as you need. The room will wait for you.</li>
                <li>Bring water to the podium. A sip gives you a natural moment to collect yourself.</li>
                <li>Make eye contact when you can. Looking at a friendly face in the audience can ground you.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">Give yourself permission to feel whatever you feel. Nobody expects you to be stoic. They expect you to be real, and your grief is part of that.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Do If You Cannot Get Through It</h2>
              <p className="text-gray-600 leading-relaxed mb-4">It is completely normal for a surviving spouse to be unable to finish reading the eulogy. The grief may simply be too heavy in that moment, and there is no shame in that. The most important thing you can do is plan ahead for this possibility.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Ask a close friend, sibling, or adult child to stand beside you at the podium as a backup reader. Give them a copy of the eulogy in advance so they can review it. If you reach a point where you cannot continue, simply hand them the paper and step back. They will take over seamlessly, and no one in the room will think less of you for it.</p>
              <p className="text-gray-600 leading-relaxed">Some surviving spouses choose to write the eulogy themselves but ask someone else to read the entire thing from the start. This is just as valid and just as meaningful. The love is in the words, not in who speaks them. Do whatever feels right for you.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/loss-of-spouse-guide" className="text-slate-600 hover:text-slate-800 font-medium">Loss of a Spouse: A Guide for the Weeks and Months Ahead</Link></li>
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
