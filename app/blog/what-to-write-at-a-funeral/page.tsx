import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What to Write at a Funeral: Guest Book, Memorial Card, and Memory Book',
  description: 'Knowing what to write in a funeral guest book or on a memorial card is harder than it sounds. Here are sincere, simple examples for every situation.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/what-to-write-at-a-funeral' },
};

const faqs = [
  { q: 'What do you write in a funeral guest book?', a: 'Write your name and a brief, sincere message for the family. You do not need to write anything long or literary. A simple sentence like &quot;Your family is in my thoughts. [Name] was a wonderful person&quot; is meaningful and appropriate. If you knew the deceased, mention a specific quality you admired or a memory you shared. If you did not know them well, focus on expressing care for the family member you do know. The goal is simply to let the family know you were there and that you care.' },
  { q: 'What do you write on a memorial card?', a: 'A memorial card message is slightly longer than a guest book entry and can be more personal. Start by acknowledging the loss, then share a specific memory or quality of the deceased if you can. Close with a statement of care or support. For example: &quot;I will always remember [Name]&apos;s laugh and how they could brighten any room. I am so grateful I got to know them. Thinking of you and your family during this time.&quot; If you did not know the deceased, focus your message on supporting the grieving person.' },
  { q: 'How long should a funeral guest book message be?', a: 'A funeral guest book message is typically one to three sentences. There is no minimum or maximum length, but most people write between 10 and 30 words. The space in a guest book is usually limited, so a short, heartfelt message is perfectly appropriate. Do not feel pressured to write more than feels natural. A single sentence of genuine sympathy carries more weight than a paragraph of filler.' },
  { q: 'What should you not write in a funeral guest book?', a: 'Avoid writing religious statements unless you know the family shares your faith. Do not write phrases like &quot;they are in a better place&quot; or &quot;everything happens for a reason,&quot; as these can feel dismissive to a grieving person. Do not leave the page blank because you are unsure what to write. Even a simple &quot;with love and sympathy&quot; followed by your name is better than nothing. Avoid making the message about yourself or your own grief, and avoid offering unsolicited advice about how the family should cope.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function WhatToWriteAtAFuneralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What to Write at a Funeral: Guest Book, Memorial Card, and Memory Book</h1>
              <p className="text-xl text-gray-600 mb-4">Knowing what to write in a funeral guest book or on a memorial card is harder than it sounds. Here are sincere, simple examples for every situation.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Most people freeze when handed a pen at a funeral because they are afraid of writing the wrong thing. The truth is that any sincere message matters more than a perfect one, and a few honest words are always better than a blank page.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is a Funeral Guest Book</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A funeral guest book is a book placed at the entrance or sign in table of a funeral service for guests to write their name and leave a short message for the family. It serves as a record of who attended the service and provides the family with written expressions of sympathy and support that they can revisit in the weeks and months ahead.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Some families use a traditional bound guest book, while others provide individual cards, a memory board, or a digital guest book. Regardless of the format, the purpose is the same. It gives attendees a way to acknowledge the loss and offer a few words of comfort without needing to find the right moment to speak to the family in person.</p>
              <p className="text-gray-600 leading-relaxed">Many grieving families say that reading through the guest book after the service is one of the most comforting parts of the process. Seeing how many people cared enough to attend and leave a message can provide real solace during an incredibly difficult time.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write in a Guest Book</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A guest book entry does not need to be long or eloquent. A few sincere words are all it takes. Here are five examples that work for almost any situation:</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Your family is in my thoughts. [Name] was a wonderful person.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I will always remember [Name]&apos;s kindness. Sending love to your whole family.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;[Name] made everyone around them feel welcome. That is a rare gift.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;No words feel adequate right now. Just know I am here.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;Thank you for letting us celebrate [Name]&apos;s life today.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Messages That Help</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Sometimes you only have space for a few words, or a short message is all that feels right. These brief expressions of sympathy are always appropriate:</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;With love and sympathy.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Thinking of you always.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;[Name] will be deeply missed.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;What a beautiful life.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Honored to be here today.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;Holding your family close.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write on a Memorial Card</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A memorial card gives you a bit more room than a guest book, so you can include a specific memory or personal detail. A memorial card message typically runs two to four sentences and can be left at the service, mailed to the family, or tucked into a floral arrangement. Here are three examples:</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I will never forget the afternoon [Name] spent teaching me how to fish. That patience and generosity defined who they were. Your family is in my heart.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;Every time I walked into your home, [Name] made me feel like part of the family. That warmth is something I will carry with me always. I am so sorry for your loss.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;[Name] had the kind of laugh that made everyone else laugh too. I am grateful for every moment I got to spend around that joy. Thinking of you during this time.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write in a Memory Book</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Some families set out a memory book at the service with prompts for guests to share personal recollections of the deceased. If you see a memory book, do not overthink it. Write naturally, as if you were telling the family a story about their loved one in conversation. A memory book entry can be a few sentences or a full paragraph.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Common prompts include &quot;My favorite memory of [Name] is...&quot;, &quot;One thing I will always remember about [Name] is...&quot;, and &quot;[Name] taught me...&quot;. You do not have to answer the prompt exactly. The goal is simply to capture something genuine about the person who has died. Even a small detail, like the way they greeted you or their favorite saying, can mean the world to the family.</p>
              <p className="text-gray-600 leading-relaxed">If you are struggling to think of a specific memory, write about a quality instead. Something like &quot;[Name] always made time for everyone, no matter how busy life got&quot; or &quot;I never saw [Name] without a smile&quot; tells the family that their loved one left a lasting impression on you.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When You Did Not Know the Deceased</h2>
              <p className="text-gray-600 leading-relaxed mb-4">It is common to attend a funeral for someone you did not know well, or at all, because you want to support a friend, coworker, or family member. In this situation, focus your message on the person who is grieving rather than the person who has died. You are there because you care about someone who is hurting, and that is what your message should reflect.</p>
              <p className="text-gray-600 leading-relaxed mb-4">A simple message like &quot;I am here because I care about you. I am so sorry for your loss&quot; is honest and appropriate. You do not need to pretend you knew the deceased or fabricate a connection. The grieving person will appreciate your presence and your willingness to show up during a painful time.</p>
              <p className="text-gray-600 leading-relaxed">If you learned something about the deceased during the service that moved you, it is perfectly fine to mention it. Something like &quot;Hearing the stories about [Name] today made it clear what a special person they were&quot; shows that you were paying attention and that you care.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When You Were Very Close</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If you were very close to the person who died, it is okay to write more than a sentence or two. Share a specific memory that captures who they were to you. Mention something only the two of you would understand, or describe a moment that changed your life because of them. The family will treasure these personal details more than any generic condolence.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Do not feel pressured to keep it short for the sake of being polite. A close friend or family member writing a heartfelt paragraph in the guest book or memory book gives the family something meaningful to hold onto. Your words may be the ones they return to most often.</p>
              <p className="text-gray-600 leading-relaxed">If you find yourself unable to write at the service because the grief is too raw, that is completely understandable. You can always send a card or letter to the family in the days that follow. A written message delivered after the funeral can be just as powerful, and sometimes even more so, because it arrives when the initial wave of support has begun to fade.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Avoid</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Do not write religious statements unless you know the family shares your faith. Phrases like &quot;God has a plan&quot; or &quot;they are with the angels now&quot; may be comforting to some families but deeply hurtful to others. When in doubt, keep your message secular and focused on the person and the family.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Avoid writing &quot;they are in a better place.&quot; To a person who just lost someone they love, no place feels better than here. This phrase, however well intentioned, can minimize the pain the family is experiencing and suggest they should not be as upset as they are. It is one of the most common things people write, and one of the least helpful.</p>
              <p className="text-gray-600 leading-relaxed">Do not leave the page blank because you are unsure what to write. Even your name and a simple &quot;with sympathy&quot; is better than a blank line. The family will look through the guest book and notice who signed it. Your presence and your willingness to put pen to paper, even imperfectly, are what matter most.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><Link href="/blog/sympathy-card-messages" className="text-blue-600 hover:underline">Sympathy Card Messages: What to Write and What to Avoid</Link></li>
                <li><Link href="/blog/words-of-comfort-for-grieving-family" className="text-blue-600 hover:underline">Words of Comfort for a Grieving Family: What to Say and What to Avoid</Link></li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Find Funeral Homes in Your Area</h2>
              <p className="text-gray-600 mb-6">Browse trusted funeral homes and cremation providers in your state to find compassionate, affordable care during a difficult time.</p>
              <Link href="/states" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Browse All States</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
