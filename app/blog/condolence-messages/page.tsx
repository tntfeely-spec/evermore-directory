import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Condolence Messages: What to Say for Every Type of Loss',
  description: 'Finding the right condolence message is hard. Here are sincere examples for loss of a mother, father, husband, wife, child, and coworker.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/condolence-messages' },
};

const faqs = [
  { q: 'What is a good condolence message for loss of a mother?', a: 'A good condolence message for loss of a mother acknowledges the unique and irreplaceable bond between a mother and her child. Mention the mother by name if you can, share a specific quality or memory, and express your care for the person who is grieving. A sincere message like &quot;Your mother was an extraordinary woman, and I can see her love in everything you do&quot; is more meaningful than any generic sentiment.' },
  { q: 'What do you say to a coworker who lost a loved one?', a: 'Keep your message sincere but respectful of professional boundaries. Acknowledge the loss directly, express your sympathy, and offer practical support like covering their workload or bringing a meal. Something as simple as &quot;I am so sorry for your loss. Please take whatever time you need, and know that we are here for you&quot; is appropriate and kind.' },
  { q: 'How do you write a condolence message?', a: 'Start by acknowledging the loss and naming the deceased if you knew them. Share a brief memory or quality you admired about them. Close with a simple expression of care or a specific offer of support. Keep it brief and genuine. Three to five sentences is usually enough. The most important thing is sincerity, not length or eloquence.' },
  { q: 'Is it better to send a card or a text condolence message?', a: 'Both are appropriate, and either is better than silence. A handwritten card carries more weight because it shows you took time and effort. However, a text message can be a good first response when you hear the news, followed by a card in the mail. Text messages also work well when you know the person prefers digital communication or when distance makes mailing a card impractical.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function CondolenceMessagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Condolence Messages: What to Say for Every Type of Loss</h1>
              <p className="text-xl text-gray-600 mb-4">Finding the right condolence message is hard. Here are sincere examples for loss of a mother, father, husband, wife, child, and coworker.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Every loss is different, and the right words depend on the relationship, the circumstances, and the person you are writing to. These condolence message examples are organized by type of loss so you can find something that fits your specific situation.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condolence Message for Loss of a Mother</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A mother&apos;s death leaves a gap that nothing else can fill. When writing to someone who has lost their mother, honor the depth of that bond and avoid minimizing it with platitudes.</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Your mother was one of the warmest people I have ever known. Her kindness shaped everyone around her, especially you. I am so sorry she is gone.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I will always remember your mom&apos;s laugh and the way she made everyone feel welcome in her home. She was truly special, and I am thinking of you.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Losing your mother is a pain that words cannot touch. I just want you to know that I see your grief and I am here for you, today and in the months ahead.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;Your mother raised an incredible person, and that is a legacy that will never fade. I am so sorry for your loss.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condolence Message for Loss of a Father</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A father&apos;s passing often leaves people feeling unmoored, even in adulthood. When someone loses their dad, acknowledge the steadying presence they have lost and the grief they are carrying.</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Your dad was a remarkable man. I always admired his quiet strength and the way he showed up for the people he loved. I am so sorry he is gone.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I know your father meant the world to you. He was the kind of man who made everyone around him feel safe and valued. That is a rare gift.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Losing a father feels like losing your anchor. I am thinking of you and your family, and I am here whenever you need someone to lean on.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;Your father&apos;s love for his family was obvious to anyone who spent time with him. I am so grateful I got to know him, and I am deeply sorry for your loss.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condolence Message for Loss of a Husband</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Losing a husband reshapes every part of daily life. When writing to a widow, acknowledge both the enormity of the loss and the life they built together. Do not rush her toward healing or suggest she will find love again.</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I am so deeply sorry about [Name]. The love you two shared was beautiful and real, and I know this loss is devastating. I am here for you.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;[Name] was a wonderful man, and everyone who knew him was better for it. I am holding you in my thoughts and I am just a phone call away.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;The life you and [Name] built together was something truly special. I know the road ahead feels impossible right now. Please know you do not have to walk it alone.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condolence Message for Loss of a Wife</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A man who has lost his wife may struggle to express his grief openly, especially if he was raised in a culture that discourages emotional vulnerability in men. Your message can give him permission to grieve by being direct and warm.</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I am so sorry about [Name]. She was an extraordinary person, and I know she was the center of your world. I am thinking of you.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;[Name] brought so much joy and warmth into every room she entered. I am heartbroken for you. Please let me know how I can help in the days ahead.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;There are no words for losing the person you built your life with. I just want you to know that I care about you, and I am here.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condolence Message for Loss of a Child</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The death of a child is the most devastating loss a parent can face. Approach this message with humility and care. Do not attempt to explain the loss or find a bright side. Simply name the child, acknowledge the pain, and be present.</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I am so deeply sorry about [Child&apos;s name]. There are no words that feel adequate for a loss this profound. I am here for you, and I will stay here.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;[Child&apos;s name] was so loved, and that love will never end. I am holding your family in my heart every single day.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;Nothing about this is fair. I am not going to pretend to understand your pain, but I want you to know that I see it and I care. You are not alone.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condolence Message for a Coworker</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When a colleague experiences a loss, your message should be genuine but mindful of professional boundaries. A brief, warm message with an offer of practical support is usually the best approach.</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I was very sorry to hear about your loss. Please take all the time you need, and know that we are here to support you however we can.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;You and your family are in my thoughts. Do not worry about anything here at work. We have you covered.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;I am thinking of you during this difficult time. If there is anything at all I can do, please let me know. I mean it.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Condolence Message for a Friend</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When your friend is grieving, you have the advantage of knowing them well. Use that closeness to write something personal and specific rather than relying on generic sympathy phrases.</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I love you and I am so sorry you are going through this. [Name] was an incredible person, and I know how much they meant to you. I am here whenever you need me.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;You do not have to respond to this. I just want you to know that I am thinking about you constantly and I am ready to show up whenever you need me to.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;I have watched you love [Name] for years, and I know this pain is indescribable. I am not going anywhere. Call me, text me, or just sit with me. Whatever you need.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Condolence Messages</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Sometimes brief is best. These short messages work well for cards, texts, or when you do not know the recipient well:</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I am so sorry for your loss. You are in my thoughts.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Thinking of you and your family during this time.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;No words feel enough. Just know that I care.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Holding you close in my heart.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;Sending you love and strength.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Not to Say</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Even with the best intentions, certain phrases can cause more pain than comfort. Here are common condolence mistakes to avoid:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li><strong>&apos;Everything happens for a reason.&apos;</strong> This implies the death was necessary or justified, which is never comforting to someone in acute grief.</li>
                <li><strong>&apos;They are in a better place.&apos;</strong> Unless you know the recipient shares this belief, it can feel dismissive of their pain.</li>
                <li><strong>&apos;At least they are not suffering anymore.&apos;</strong> While it may be medically true, this phrase minimizes the grief of the person left behind.</li>
                <li><strong>&apos;I know exactly how you feel.&apos;</strong> No two losses are identical. Claiming to understand their specific grief can feel presumptuous.</li>
                <li><strong>&apos;You should be grateful for the time you had.&apos;</strong> Gratitude and grief are not mutually exclusive. Telling someone to be grateful implies they should not be sad.</li>
                <li><strong>&apos;Let me know if you need anything.&apos;</strong> While well intended, this puts the burden on the grieving person. Instead, offer something specific like bringing a meal or running an errand.</li>
              </ul>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/condolence-text-messages" className="text-slate-600 hover:text-slate-800 font-medium">Condolence Text Messages: What to Send and What to Avoid</Link></li>
                <li><Link href="/blog/sympathy-card-messages" className="text-slate-600 hover:text-slate-800 font-medium">Sympathy Card Messages: What to Write and What to Avoid</Link></li>
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