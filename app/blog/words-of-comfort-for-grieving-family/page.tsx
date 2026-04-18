import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Words of Comfort for a Grieving Family: What to Say and What to Avoid',
  description: 'Finding the right words for a grieving family is hard. Here are sincere things to say, messages that bring comfort, and phrases to avoid.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/words-of-comfort-for-grieving-family' },
};

const faqs = [
  { q: 'What is the most comforting thing to say to someone who lost a loved one?', a: 'The most comforting thing you can say is something simple and sincere: "I am here for you." People who are grieving do not need wisdom or explanations. They need to know they are not alone. Acknowledging the loss directly and offering your presence is almost always the right approach.' },
  { q: 'What should you not say to a grieving person?', a: 'Avoid phrases that minimize the loss or impose a timeline on grief. "Everything happens for a reason," "They are in a better place," "At least they lived a long life," and "I know how you feel" can all feel dismissive, even when said with good intentions. Stay away from comparisons to your own losses unless the person asks.' },
  { q: "Is it okay to say 'I\\'m sorry for your loss'?", a: 'Yes. "I am sorry for your loss" is a safe and appropriate thing to say. Some people consider it generic, but it is genuine and universally understood. If you want to add warmth, follow it with something personal: "I am sorry for your loss. Your mother was one of the kindest people I have ever known."' },
  { q: "What do you say when you don't know what to say?", a: 'Say exactly that: "I do not know what to say, but I want you to know I care." Honesty about your own uncertainty is far better than filling the silence with a cliche. You can also simply say their name, give a hug, or sit with them quietly. Presence matters more than words.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function WordsOfComfortPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Words of Comfort for a Grieving Family: What to Say and What to Avoid</h1>
              <p className="text-xl text-gray-600 mb-4">Sincere words, written messages, and guidance on what to say when someone you care about is grieving.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Finding the right words for a grieving family is one of the hardest things most people face. The truth is that there are no perfect words, and that is okay. What matters most is showing up, being sincere, and letting the person know you care.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Say in Person</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When you see someone who is grieving, keep it simple. &quot;I am so sorry&quot; is enough. You do not need to explain the loss, offer a silver lining, or fill the silence with conversation. Sometimes the most powerful thing you can do is simply be present.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If you knew the deceased, share a specific memory. &quot;I will never forget the time your dad helped me fix my car in the rain. He was that kind of person.&quot; Personal stories are a gift to a grieving family because they show that the person they lost was remembered and valued by others.</p>
              <p className="text-gray-600 leading-relaxed">Offer concrete help instead of vague offers. &quot;I am bringing dinner on Thursday&quot; is more helpful than &quot;Let me know if you need anything.&quot; Grieving people rarely have the energy to ask for help, so taking the initiative makes a real difference.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write in a Card</h2>
              <p className="text-gray-600 leading-relaxed mb-6">A handwritten card is one of the most appreciated gestures during a time of loss. Keep your message short, sincere, and personal. Here are examples you can adapt:</p>

              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-gray-600 bg-slate-50 py-3 pr-3 rounded-r mb-4">
                &quot;There are no words that feel adequate right now. I just want you to know that your family is in my heart, and I am here for whatever you need.&quot;
              </blockquote>

              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-gray-600 bg-slate-50 py-3 pr-3 rounded-r mb-4">
                &quot;Your mother was a remarkable woman who made everyone around her feel welcome. I will carry her kindness with me always. Thinking of your whole family during this time.&quot;
              </blockquote>

              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-gray-600 bg-slate-50 py-3 pr-3 rounded-r mb-4">
                &quot;I am holding you and your family close in my thoughts. I know the days ahead will be hard, but you will not walk through them alone.&quot;
              </blockquote>

              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-gray-600 bg-slate-50 py-3 pr-3 rounded-r mb-4">
                &quot;I did not know your father well, but I know how deeply you loved him. That love says everything about who he was. I am sorry for your loss.&quot;
              </blockquote>

              <blockquote className="border-l-4 border-slate-300 pl-4 italic text-gray-600 bg-slate-50 py-3 pr-3 rounded-r">
                &quot;Words fall short at a time like this. Please know that I care, and I am here. Always.&quot;
              </blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Say When Someone Dies Unexpectedly</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Sudden loss carries a particular kind of shock. The family may be in disbelief, and their grief may be compounded by trauma, unanswered questions, or feelings of injustice. In these moments, resist the urge to make sense of the loss or offer explanations.</p>
              <p className="text-gray-600 leading-relaxed mb-4">&quot;I cannot imagine what you are going through, but I am here&quot; is honest and appropriate. Avoid saying &quot;at least they did not suffer&quot; or &quot;God needed them more,&quot; which can feel dismissive of the family&apos;s pain.</p>
              <p className="text-gray-600 leading-relaxed">With sudden loss, practical help is especially important. The family may be in crisis mode, dealing with police reports, medical examiners, and urgent decisions. Showing up with food, helping with logistics, or simply sitting with them can mean more than any words.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Say When a Child Dies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The death of a child is among the most devastating losses a person can endure. There is nothing you can say to make it better, and you should not try. Do not compare it to other losses. Do not talk about future children. Do not say &quot;they are in a better place.&quot;</p>
              <p className="text-gray-600 leading-relaxed mb-4">Instead, say their child&apos;s name. &quot;I am so sorry about Emma. She was such a bright, beautiful little girl.&quot; Parents who have lost a child often fear that people will stop saying the child&apos;s name. Using it is one of the most meaningful things you can do.</p>
              <p className="text-gray-600 leading-relaxed">Be prepared for the grief to last much longer than you expect, and continue to check in weeks and months later. The rest of the world moves on quickly, but the parents do not.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Not to Say</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Even well-meaning people can say things that cause more pain. Here are phrases to avoid:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>&quot;Everything happens for a reason.&quot; This can feel dismissive of the family&apos;s pain and imply that the death was somehow justified.</li>
                <li>&quot;I know how you feel.&quot; Unless you have experienced the same type of loss, you do not. Even then, every person&apos;s grief is unique.</li>
                <li>&quot;They lived a good, long life.&quot; The length of a life does not reduce the pain of losing someone you love.</li>
                <li>&quot;You need to be strong.&quot; This tells the grieving person to suppress their emotions, which is the opposite of what they need.</li>
                <li>&quot;At least they are not suffering anymore.&quot; While this may be true, it does not help the person who is now suffering from the loss.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When You Do Not Know What to Say</h2>
              <p className="text-gray-600 leading-relaxed mb-4">It is completely okay to not know what to say. Grief makes everyone uncomfortable, and the fear of saying the wrong thing keeps many people from saying anything at all. But silence and distance can feel like abandonment to someone who is grieving.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If you cannot find the right words, try: &quot;I do not know what to say, but I want you to know I am thinking of you.&quot; That honesty is more comforting than any rehearsed phrase.</p>
              <p className="text-gray-600 leading-relaxed">You can also show care without words. Send a meal. Mow their lawn. Drop off groceries. Sit with them in silence. The grieving person does not need you to fix their pain. They just need to know they are not forgotten.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">What to Do When Someone Dies</Link></li>
                <li><Link href="/blog/what-to-do-after-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">What to Do After a Funeral</Link></li>
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
