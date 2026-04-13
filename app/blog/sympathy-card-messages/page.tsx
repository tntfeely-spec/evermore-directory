import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Sympathy Card Messages: What to Write and What to Avoid',
  description: 'Finding the right words for a sympathy card is hard. Here are sincere, simple messages for every situation, relationship, and type of loss.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/sympathy-card-messages' },
};

const faqs = [
  { q: 'What do you write in a sympathy card?', a: 'Write a brief, sincere message that acknowledges the loss and expresses your care. You do not need to be eloquent. A few honest sentences that name the deceased and offer your support are more meaningful than any preprinted sentiment. Start by saying you are sorry, mention the person by name if you can, and close with a simple statement of care or a specific offer of help.' },
  { q: 'How long should a sympathy card message be?', a: 'Most sympathy card messages are three to five sentences long. You do not need to fill the entire card. A short, genuine message is always better than a long one that struggles to find the right words. The recipient will remember your sincerity, not your word count.' },
  { q: 'Is it too late to send a sympathy card?', a: 'It is never too late to send a sympathy card. Many grieving people say that cards received weeks or months after the loss are especially meaningful because the initial wave of support has usually faded by then. A late card shows that you are still thinking of them, and that matters more than timing.' },
  { q: 'What should you not write in a sympathy card?', a: 'Avoid phrases that minimize the loss or try to explain why it happened. Do not write things like &quot;Everything happens for a reason,&quot; &quot;They are in a better place,&quot; or &quot;I know how you feel.&quot; Also avoid making the message about yourself or comparing their loss to your own experiences. Keep the focus on the recipient and their loved one.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function SympathyCardMessagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Sympathy Card Messages: What to Write and What to Avoid</h1>
              <p className="text-xl text-gray-600 mb-4">Finding the right words for a sympathy card is hard. Here are sincere, simple messages for every situation, relationship, and type of loss.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">When someone you care about loses a loved one, sitting down to write a sympathy card can feel paralyzing. You want to say something that helps, but you are terrified of saying the wrong thing.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Sympathy Cards Matter</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A sympathy card is one of the few tangible expressions of care that a grieving person can hold onto. Unlike a phone call or a hug, a card can be revisited on hard days, tucked into a memory box, or reread when the grief returns months later. Many bereaved families say that the cards they received after a loss became some of their most treasured possessions.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Sending a card also communicates something that words alone sometimes cannot. It tells the recipient that you took time out of your day to think about them, choose a card, and write something by hand. In an age of quick text messages and social media posts, that effort carries real weight.</p>
              <p className="text-gray-600 leading-relaxed">The most common reason people do not send a sympathy card is fear of saying the wrong thing. But the truth is that almost any sincere message is better than silence. The grieving person is not grading your words. They simply want to know that someone noticed their pain.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write in a Sympathy Card</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A good sympathy card message is simple and honest. You do not need to be a skilled writer. Start by acknowledging the loss, mention the deceased by name if you knew them, and close with a statement of care or support. Here are five general messages that work for almost any situation:</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I am so sorry about [Name]. They were such a wonderful person, and I know how much they meant to you. Thinking of you and your family.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;There are no perfect words for a time like this. Please just know that I care about you deeply and I am here for whatever you need.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I will always remember [Name]&apos;s kindness and warmth. The world is a little dimmer without them. Sending you all my love.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;My heart breaks for you and your family. [Name] touched so many lives, and their memory will live on in everyone who knew them.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;I wish I had the right words, but I want you to know that I am thinking of you every day. You are not alone in this.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Sympathy Messages for a Card</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Sometimes a brief message is all you need. These shorter options are appropriate when you do not know the recipient well or when you simply want to keep things simple:</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;With heartfelt sympathy. You and your family are in my thoughts.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Thinking of you during this difficult time. I am so sorry for your loss.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;No words are enough, but please know I care.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Holding you close in my heart. I am here if you need me.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Wishing you peace and comfort in the days ahead.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;Sending love and strength to you and your family.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write for Loss of a Parent</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Losing a parent is one of the most profound losses a person can experience, regardless of age. When writing to someone who has lost a mother or father, acknowledge the unique significance of that relationship. Here are examples that work well:</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Your mother was one of the most gracious people I have ever known. I can see so much of her in you, and I know she was proud of the person you have become.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I am so sorry about your dad. He had a way of making everyone around him feel welcome, and I will carry that memory with me.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;There is no loss quite like losing a parent. The person who shaped you, encouraged you, and loved you from the very beginning. I am thinking of you.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;Your father&apos;s legacy lives on in you and your family. I am honored to have known him, and I am here for you in the days ahead.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write for Loss of a Spouse</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Losing a husband or wife changes everything about a person&apos;s daily life. When writing to someone who has lost a spouse, acknowledge both the depth of the relationship and the enormity of the adjustment ahead. Be careful not to rush them toward &quot;moving on.&quot;</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I cannot imagine what you are going through right now. [Name] was your partner in everything, and I know this loss is beyond words. I am here for you.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;The love between you and [Name] was something truly special. Everyone who knew you both could see it. I am so deeply sorry.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;You and [Name] built a beautiful life together. That life does not end with this loss. His/her love will be with you always, and so will I.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write for Loss of a Child</h2>
              <p className="text-gray-600 leading-relaxed mb-4">There are no adequate words for the loss of a child. This is the hardest sympathy card you will ever write, and it is important to approach it with extreme care and humility. Do not try to explain the loss or offer a silver lining. Simply acknowledge the child, name them, and let the parents know you see their pain.</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I am so deeply sorry about [Child&apos;s name]. No parent should ever have to endure this. I am holding you in my heart and I am here for you.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;[Child&apos;s name] was so loved, and that love does not end. I will never forget their smile. I am thinking of you every single day.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;There are no words big enough for this loss. Please know that you do not have to carry this alone. I am here, and I will stay here.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write for a Coworker</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Writing a sympathy card to a coworker requires a balance between warmth and professional boundaries. You want to be genuine without overstepping. Keep the message sincere but somewhat brief, and offer practical support if you can.</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I was so sorry to hear about your loss. Please take all the time you need, and know that we are thinking of you here at the office.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;You and your family are in my thoughts. Please do not worry about anything at work. We have everything covered and we are here for you.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;I am thinking of you during this difficult time. If there is anything I can do to help, whether at work or outside of it, please do not hesitate to ask.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write When You Did Not Know the Deceased</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Sometimes you need to send a sympathy card to someone whose loved one you never met. This is common with coworkers, neighbors, or newer friends. Do not pretend to have known the person. Instead, focus your message on the recipient and what you have observed about their relationship.</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I did not have the chance to know [Name], but I can tell from the way you spoke about them how special they were. I am so sorry for your loss.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Although I never met your [mother/father/loved one], the love you have for them tells me everything I need to know. Thinking of you.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;I may not have the right words because I did not know [Name] personally, but I care about you and I am sorry you are hurting.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Phrases to Avoid</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Certain well intended phrases can actually cause pain. Here are specific phrases to leave out of your sympathy card and the reasons why:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li><strong>&apos;Everything happens for a reason.&apos;</strong> This implies the death was somehow necessary or justified. To a grieving person, there is no acceptable reason for their loss.</li>
                <li><strong>&apos;They are in a better place.&apos;</strong> Unless you are certain of the recipient&apos;s beliefs and know this would be welcome, it can feel like you are dismissing their pain by suggesting the deceased is better off gone.</li>
                <li><strong>&apos;I know exactly how you feel.&apos;</strong> No two losses are the same. Even if you have experienced a similar loss, claiming to understand their specific grief can feel presumptuous and minimizing.</li>
                <li><strong>&apos;At least they lived a long life.&apos;</strong> The length of someone&apos;s life does not reduce the grief of losing them. This phrase suggests the recipient should be grateful rather than sad, which is not helpful.</li>
                <li><strong>&apos;You need to stay strong.&apos;</strong> Telling someone to be strong implies that expressing their grief is a form of weakness. Grieving people need permission to feel, not pressure to perform composure.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When to Send a Sympathy Card</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The best time to send a sympathy card is as soon as you learn of the loss. Most people try to send their card within the first one to two weeks. However, if you miss that window, do not let that stop you. A card that arrives a month or two later can be even more meaningful because the initial flood of support has usually subsided.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Some people also choose to send a second card around a significant date, such as the deceased&apos;s birthday or the one year anniversary of the death. These gestures show the grieving person that you have not forgotten their loss, and they are almost always deeply appreciated.</p>
              <p className="text-gray-600 leading-relaxed">If you are mailing the card to someone you see regularly, you can also hand deliver it. Leaving it on their desk, in their mailbox, or on their doorstep gives them the space to read it privately without the pressure of responding in the moment.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-write-a-condolence-card" className="text-slate-600 hover:text-slate-800 font-medium">How to Write a Condolence Card: What to Say and What to Avoid</Link></li>
                <li><Link href="/blog/words-of-comfort-for-grieving-family" className="text-slate-600 hover:text-slate-800 font-medium">Words of Comfort for a Grieving Family: What to Say and What to Avoid</Link></li>
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