import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Condolence Text Messages: What to Write and What to Avoid',
  description: 'Sending a condolence text message is appropriate when you cannot call or visit in person. Here are simple, sincere examples and a few phrases to avoid.',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/condolence-text-message',
  },
};

const faqs = [
  {
    q: 'Is it okay to send a condolence text message?',
    a: 'Yes, sending a condolence text message is an appropriate and kind way to express sympathy, especially as an initial expression of support. A text is particularly suitable when you are not close enough to the person to call, when you want to reach out quickly without putting pressure on them to respond, or when you know the person prefers texting over phone calls.',
  },
  {
    q: 'What do you text someone who has lost a loved one?',
    a: 'Keep your message short, sincere, and specific. Acknowledge the loss, express your sympathy, and let them know you are thinking of them. Avoid asking them to do anything or respond. A simple message like &apos;I am so sorry about [name]. Thinking of you and your family&apos; is more meaningful than a long, elaborate text.',
  },
  {
    q: 'How long should a condolence text be?',
    a: 'Two to three sentences is ideal for a condolence text. The goal is to let the person know you care without overwhelming them with words at a time when they may be struggling to process information. A brief, genuine message is far more appreciated than a lengthy one that requires a response.',
  },
  {
    q: 'Should you text or call when someone dies?',
    a: 'If you are unsure whether to text or call, a text is usually the safer first step. A text allows the grieving person to read your message and respond when they are ready, without the pressure of an immediate conversation. If you are very close to the person, follow up with a phone call or visit within a few days.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

export default function CondolenceTextMessage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Condolence Text Messages: What to Write and What to Avoid
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Simple, sincere examples of what to text someone who is grieving, and the common mistakes to avoid.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span>
                <span>|</span>
                <span>Former Firefighter and Paramedic</span>
                <span>|</span>
                <span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Is It Okay to Send a Condolence Text?</h2>
              <p className="text-gray-600 leading-relaxed">
                A condolence text message is a sincere and appropriate way to express sympathy when you cannot be there in person. The best condolence texts are short, specific, and do not ask anything of the grieving person. For many people, especially younger generations, texting is the primary mode of communication, and a heartfelt text can arrive within minutes of hearing the news.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The key advantage of a text over a phone call is that it does not demand an immediate response. A grieving person may be surrounded by family, handling arrangements, or simply too overwhelmed to talk on the phone. A text sits quietly in their inbox until they are ready to read it. There is no wrong time to send a condolence text, though sooner is generally better than later.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When a Text Is Appropriate vs a Call or Card</h2>
              <p className="text-gray-600 leading-relaxed">
                A text message is ideal as a first point of contact when you hear about a death. It is particularly appropriate for coworkers, acquaintances, neighbors, and friends you are not in close daily contact with. A text lets the person know you are aware of their loss and that you care, without placing any burden on them.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                For close relationships, a text should be followed by a phone call or an in person visit within a few days. A handwritten sympathy card remains one of the most meaningful gestures you can offer and is appropriate for any level of relationship. However, a text does not replace showing up. If you live nearby and are close to the person, make an effort to visit, bring food, or attend the funeral service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Short Condolence Text Examples</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The best condolence texts are brief and do not require the recipient to respond. Here are five examples you can use or adapt.
              </p>
              <blockquote className="border-l-4 border-slate-300 pl-4 py-2 mb-4 text-gray-700 italic">
                &apos;I just heard about [name]. I am so sorry. Thinking of you.&apos;
              </blockquote>
              <blockquote className="border-l-4 border-slate-300 pl-4 py-2 mb-4 text-gray-700 italic">
                &apos;There are no words. I love you and I am here.&apos;
              </blockquote>
              <blockquote className="border-l-4 border-slate-300 pl-4 py-2 mb-4 text-gray-700 italic">
                &apos;I am bringing dinner Thursday. You do not need to respond.&apos;
              </blockquote>
              <blockquote className="border-l-4 border-slate-300 pl-4 py-2 mb-4 text-gray-700 italic">
                &apos;Your [mom/dad/friend] was a wonderful person. I will miss them too.&apos;
              </blockquote>
              <blockquote className="border-l-4 border-slate-300 pl-4 py-2 mb-4 text-gray-700 italic">
                &apos;No need to reply. Just want you to know I am thinking of your family.&apos;
              </blockquote>
              <p className="text-gray-600 leading-relaxed mt-4">
                Notice that none of these examples ask a question or require the grieving person to do anything. The phrase &apos;you do not need to respond&apos; or &apos;no need to reply&apos; is a small but important signal that you are offering support without expecting anything in return.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Text When You Were Close to the Deceased</h2>
              <p className="text-gray-600 leading-relaxed">
                When you personally knew and cared about the person who died, your text can reflect that relationship. Share a specific memory or quality you admired. Something like &apos;Your dad taught me how to fish when I was twelve. I will carry that memory with me always&apos; is far more meaningful than a generic expression of sympathy.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                It is also okay to acknowledge your own grief. Saying &apos;I am heartbroken too&apos; or &apos;I will miss her so much&apos; validates the family&apos;s loss and shows that their loved one mattered to others. Just be careful not to center the message on your own feelings. Keep the focus on the deceased and the person you are writing to.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Text a Coworker or Acquaintance</h2>
              <p className="text-gray-600 leading-relaxed">
                When you are not close to the person but want to acknowledge their loss, keep the message simple and professional. &apos;I was sorry to hear about your loss. Please let me know if there is anything I can help with at work while you are away&apos; is appropriate and practical. It acknowledges the situation without overstepping the boundaries of the relationship.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                For acquaintances, such as a neighbor or a parent from your child&apos;s school, a brief message like &apos;I heard about [name] and I am thinking of your family&apos; is sufficient. You do not need to say more than that. The gesture itself is what matters, not the length of the message.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Avoid in a Condolence Text</h2>
              <p className="text-gray-600 leading-relaxed">
                <strong>Do not say &apos;everything happens for a reason.&apos;</strong> This phrase, however well intentioned, can feel dismissive to someone in acute grief. It implies that the death served some larger purpose, which is not a comforting thought for someone who has just lost a loved one.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Do not make the message about yourself.</strong> Avoid lengthy stories about your own experiences with loss unless you are very close to the person and they have asked. The text should center on the grieving person and their loved one, not on your emotions or your history.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Do not ask &apos;how are you doing&apos; right away.</strong> In the first hours and days after a death, the answer is obvious and the question can feel burdensome. Instead, simply state your support. You can check in with a &apos;how are you holding up&apos; message a few weeks later, when the initial wave of visitors and arrangements has passed.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Do not send multiple follow up texts if they do not respond.</strong> Grief is exhausting, and the person may not have the energy to reply to everyone. Send one sincere message and trust that it was received and appreciated. If you want to follow up, wait at least a week before sending another message.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Following Up After the Funeral</h2>
              <p className="text-gray-600 leading-relaxed">
                One of the most meaningful things you can do is reach out after the funeral, when the initial support has faded and the reality of the loss is setting in. A simple text two or three weeks later, such as &apos;Just thinking about you. No need to reply,&apos; can mean more than the original condolence message. Many grieving people say that the hardest period comes after the service, when everyone else has returned to their normal routines.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                You can also mark important dates on your calendar and send a brief message on the deceased&apos;s birthday, the anniversary of their death, or during holidays. These small acts of remembrance show that you have not forgotten, and they give the grieving person permission to talk about their loved one at a time when others may have stopped bringing it up.
              </p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/words-of-comfort-for-grieving-family" className="text-slate-600 hover:text-slate-800 font-medium">
                    Words of Comfort for a Grieving Family: What to Say and Write
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-write-a-condolence-card" className="text-slate-600 hover:text-slate-800 font-medium">
                    How to Write a Condolence Card: Examples and Etiquette
                  </Link>
                </li>
              </ul>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">
                Search 5,100+ funeral homes and cremation providers across all 50 states. Compare prices, services, and locations. Free for families.
              </p>
              <Link
                href="/states"
                className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium"
              >
                Browse Funeral Homes Near You
              </Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
