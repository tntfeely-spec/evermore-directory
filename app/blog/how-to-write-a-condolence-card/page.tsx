import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'How to Write a Condolence Card: What to Say and What to Avoid',
  description: 'Writing a condolence card feels difficult because there are no perfect words for grief. Here are simple, sincere messages and examples that actually help.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/how-to-write-a-condolence-card' },
};

const faqs = [
  { q: 'What do you write in a condolence card?', a: 'Write a brief, sincere message that acknowledges the loss and expresses your care for the grieving person. Start by naming the deceased if possible, share a specific memory or quality you admired, and offer a simple closing like &quot;Thinking of you&quot; or &quot;With deepest sympathy.&quot; You do not need to write a long message. A few heartfelt sentences are more meaningful than a lengthy note that tries too hard to comfort.' },
  { q: 'How long should a condolence message be?', a: 'A condolence message can be as short as two or three sentences. Most effective condolence cards are brief and genuine rather than long and elaborate. The grieving person may receive many cards and will appreciate messages that are easy to read and clearly heartfelt. If you have a longer story or memory to share, you can always write a separate letter at a later time.' },
  { q: 'Is it okay to send a condolence card weeks after a death?', a: 'Yes, it is absolutely appropriate to send a condolence card weeks or even months after a death. Many people actually appreciate receiving cards after the initial wave of support has faded, because that is often when grief feels most isolating. There is no expiration date on expressing sympathy. A late card is always better than no card at all.' },
  { q: 'What should you not write in a condolence card?', a: 'Avoid phrases that minimize the loss or attempt to explain why it happened. Do not write things like &quot;Everything happens for a reason,&quot; &quot;They are in a better place,&quot; &quot;I know how you feel,&quot; or &quot;At least they lived a long life.&quot; Also avoid making the message about your own grief or needs. The card should focus on the recipient and their loss, not on your own feelings or experiences.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function CondolenceCardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Write a Condolence Card","description":"What to write in a condolence card and what to avoid.","step":[{"@type":"HowToStep","position":1,"name":"Acknowledge the loss directly","text":"Open by naming the person who died. Say you are sorry for their loss. Do not open with anything unrelated to the loss."},{"@type":"HowToStep","position":2,"name":"Share a specific memory if you have one","text":"If you knew the deceased, share one brief specific memory. This is the most meaningful thing you can do and sets your card apart from generic condolences."},{"@type":"HowToStep","position":3,"name":"Offer a specific form of support","text":"Instead of saying let me know if you need anything, offer something specific such as I will bring dinner Tuesday or I would love to take the kids for the afternoon."},{"@type":"HowToStep","position":4,"name":"Close simply and warmly","text":"End with a simple closing such as With love, With sympathy, or Thinking of you. Do not add lengthy closing statements."},{"@type":"HowToStep","position":5,"name":"Send it within two weeks","text":"Send the card as soon as possible. Cards received in the weeks after the funeral are often more meaningful than those sent immediately when the family is overwhelmed."}]}) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Write a Condolence Card: What to Say and What to Avoid</h1>
              <p className="text-xl text-gray-600 mb-4">Practical guidance for writing a meaningful condolence card, with example messages and a clear list of phrases to avoid.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write in a Condolence Card</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The most important thing about a condolence card is that you send one at all. Many people avoid writing because they are afraid of saying the wrong thing, but a sincere, imperfect message is always better than silence. The person receiving your card does not expect you to fix their pain. They simply want to know that someone cares enough to acknowledge what they are going through.</p>
              <p className="text-gray-600 leading-relaxed mb-4">A good condolence message has three parts. First, acknowledge the loss directly by naming the person who died. Second, share something personal, whether it is a memory, a quality you admired in the deceased, or simply a statement about how much they meant to you or the community. Third, close with a simple expression of care or an offer of specific support.</p>
              <p className="text-gray-600 leading-relaxed">Keep the message focused on the recipient and their loved one, not on yourself. Avoid the temptation to share your own grief stories or to explain why the loss happened. Your job is to witness their pain, not to solve it. A few honest sentences written in your own voice will mean more than any borrowed quote or preprinted sentiment.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Condolence Messages</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If you are struggling to find words, any of these simple messages would be appropriate. You can use them as they are or adapt them with your own details:</p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I am thinking of you and your family during this difficult time. [Name] was such a warm and generous person, and I will always remember their kindness.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;There are no words that feel adequate right now. Please know that I care about you and I am here if you need anything at all.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I loved [Name] and will miss them. One of my favorite memories is [specific memory]. Thank you for sharing them with all of us.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">&apos;I am so sorry for your loss. I did not know [Name] well, but I could see how much they meant to you, and that tells me everything about the kind of person they were.&apos;</blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">&apos;My heart goes out to you and your family. I will be bringing dinner on Thursday, but please do not feel any obligation to visit or respond. Just know I am nearby.&apos;</blockquote>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write When You Did Not Know the Deceased</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Sometimes you need to send a condolence card to a coworker, neighbor, or acquaintance whose loved one you never met. This can feel awkward because you cannot share personal memories. In these cases, focus entirely on the person you are writing to and what you have observed about their relationship with the deceased.</p>
              <p className="text-gray-600 leading-relaxed mb-4">You might write something like, &apos;I could always tell how much your mother meant to you by the way you talked about her. I am sorry she is gone.&apos; Or simply, &apos;I did not have the chance to know [Name], but I know how much you loved them, and I am thinking of you.&apos; These messages are honest about your limited connection while still being warm and supportive.</p>
              <p className="text-gray-600 leading-relaxed">Do not pretend to have known the person or to feel a loss you do not genuinely feel. Honesty, even when it means admitting you did not know the deceased, is always more respectful than fabricating a connection. The recipient will appreciate your sincerity.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write When a Child Has Died</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The death of a child is among the most devastating losses a family can experience, and writing a condolence card in this situation feels especially daunting. The most important thing you can do is acknowledge the child by name and recognize the magnitude of the loss. Do not minimize it or try to find a silver lining.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Avoid phrases like &apos;God needed another angel&apos; or &apos;At least you have other children.&apos; These statements, however well intended, can feel deeply hurtful to a parent who has lost a child. Instead, say what you know to be true: that their child mattered, that the loss is profound, and that you are present for them.</p>
              <p className="text-gray-600 leading-relaxed">A simple message like, &apos;I am holding you in my heart. [Child&apos;s name] was so loved, and nothing about this is okay. I am here,&apos; says everything that needs to be said. Parents who have lost a child often say that the most meaningful cards were the ones that simply acknowledged their pain without trying to explain it away.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write When the Death Was Sudden</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A sudden or unexpected death adds shock and disorientation to the grief. When someone dies without warning, the survivors are often still processing the reality of what happened when the cards begin arriving. Your message should acknowledge the shocking nature of the loss without dwelling on the circumstances of the death.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Avoid asking questions about what happened or speculating about the cause of death. The family may not want to discuss details, and your card is not the place for that conversation. Instead, focus on the person who died and on the grief of those who are left behind.</p>
              <p className="text-gray-600 leading-relaxed">A message like, &apos;I am stunned and heartbroken by this news. [Name] was so full of life, and I cannot imagine what you are going through right now. I am here for you in whatever way helps,&apos; acknowledges the shock while keeping the focus where it belongs. Let the family share details on their own terms and timeline.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Phrases to Avoid in a Condolence Card</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Certain phrases, though commonly used and well intended, can actually cause pain to someone who is grieving. Here are specific phrases to leave out of your condolence card:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li><strong>&apos;Everything happens for a reason.&apos;</strong> This implies that the death was somehow necessary or justified, which is not comforting to someone in acute grief.</li>
                <li><strong>&apos;They are in a better place.&apos;</strong> Unless you are certain of the recipient&apos;s religious beliefs and know this would be welcome, this phrase can feel dismissive of the very real pain of the loss.</li>
                <li><strong>&apos;I know exactly how you feel.&apos;</strong> No two losses are the same, and claiming to understand their specific grief can feel presumptuous, even if you have experienced a similar loss.</li>
                <li><strong>&apos;At least they lived a long life.&apos;</strong> The length of a life does not reduce the pain of losing someone you love. This phrase minimizes their grief.</li>
                <li><strong>&apos;You need to be strong.&apos;</strong> Grieving people do not need to be strong. They need to be allowed to feel whatever they are feeling without judgment or expectations.</li>
                <li><strong>&apos;Let me know if you need anything.&apos;</strong> While this seems helpful, it places the burden on the grieving person to reach out. Instead, offer something specific, like bringing a meal on a particular day.</li>
              </ul>
            </section>

            <section className="mb-10 bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/words-of-comfort-for-grieving-family" className="text-blue-600 hover:underline">Words of Comfort for a Grieving Family</Link></li>
                <li><Link href="/blog/thank-you-notes-after-funeral" className="text-blue-600 hover:underline">Thank You Notes After a Funeral</Link></li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Find a Funeral Home or Cremation Provider Near You</h2>
              <p className="text-gray-600 mb-6">Browse our directory to compare providers in your area and make an informed decision for your family.</p>
              <Link href="/states" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Browse All States</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
