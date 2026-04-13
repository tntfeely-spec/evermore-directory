import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Power of Attorney Guide: Types, How It Works, and What Happens After Death',
  description: 'A power of attorney gives someone legal authority to act on your behalf. Here is how each type works, how to set one up, and what happens when the person dies.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/power-of-attorney-guide' },
};

const faqs = [
  { q: 'What is a power of attorney?', a: 'A power of attorney is a legal document that gives another person, called your agent or attorney-in-fact, the authority to make decisions and take actions on your behalf. The scope of that authority depends on the type of power of attorney you create. It can cover financial matters, healthcare decisions, or both, and it can be broad or limited to specific tasks.' },
  { q: 'What is the difference between a medical and durable power of attorney?', a: 'A medical power of attorney, also called a healthcare proxy, gives your agent the authority to make medical decisions on your behalf if you become unable to communicate. A durable power of attorney typically refers to financial authority and remains in effect even if you become incapacitated. They serve different purposes and most people benefit from having both.' },
  { q: 'Does power of attorney end when someone dies?', a: 'Yes. All power of attorney authority terminates immediately at the moment of death. Once a person dies, the agent no longer has any legal authority to act on their behalf. At that point, the executor or personal representative named in the deceased person&apos;s will takes over responsibility for managing the estate. If there is no will, the court appoints an administrator.' },
  { q: 'Do I need a lawyer to create a power of attorney?', a: 'You do not need a lawyer in most states, but it is often advisable. Many states provide standard power of attorney forms that you can complete yourself. However, the document must meet your state&apos;s specific legal requirements for signing, witnessing, and notarization. An attorney can ensure the document is properly drafted and that the scope of authority matches your intentions, which can prevent problems later.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function PowerOfAttorneyGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Power of Attorney Guide: Types, How It Works, and What Happens After Death</h1>
              <p className="text-xl text-gray-600 mb-4">A power of attorney is one of the most important legal documents you can have in place. Here is what it does, how each type works, and why it matters for your family.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is a Power of Attorney</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A power of attorney is a legal document that grants another person the authority to act on your behalf in legal, financial, or medical matters. The person who creates the document is called the principal, and the person who receives the authority is called the agent or attorney-in-fact. Despite the name, the agent does not need to be a lawyer.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The power of attorney is one of the most practical legal tools available. It allows someone you trust to pay your bills, manage your bank accounts, sell property, make medical decisions, or handle other matters if you are unable to do so yourself. Without one, your family may need to go through a lengthy and expensive court process to gain the authority to manage your affairs.</p>
              <p className="text-gray-600 leading-relaxed">You can create a power of attorney at any time as long as you are mentally competent. Once you lose the ability to make decisions, it is too late. That is why planning ahead is so important.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Power of Attorney</h2>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>General power of attorney</strong> gives your agent broad authority to handle a wide range of financial and legal matters on your behalf. This includes managing bank accounts, paying bills, buying or selling property, filing taxes, and conducting business transactions. A general power of attorney is useful when you need someone to manage your affairs while you are traveling or otherwise unavailable, but it typically ends if you become incapacitated.</p>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Limited (or special) power of attorney</strong> restricts your agent&apos;s authority to a specific task or set of tasks. For example, you might grant a limited power of attorney to allow someone to sign documents at a real estate closing on your behalf or manage a single bank account. Once the specified task is completed, the authority ends.</p>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Durable power of attorney</strong> remains in effect even if you become mentally incapacitated. This is the most commonly recommended type for long term planning because it ensures your agent can continue to manage your affairs if you develop dementia, suffer a stroke, or become otherwise unable to make decisions. Without the &quot;durable&quot; designation, a power of attorney automatically terminates when you lose capacity.</p>
              <p className="text-gray-600 leading-relaxed"><strong>Springing power of attorney</strong> only takes effect when a specific triggering event occurs, usually your incapacitation as certified by one or more physicians. Until that event happens, your agent has no authority. Some people prefer this type because it ensures the agent cannot act unless and until the authority is truly needed.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Medical Power of Attorney</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A medical power of attorney, also called a healthcare proxy or healthcare power of attorney, designates someone to make medical decisions on your behalf if you are unable to communicate. This is separate from a financial power of attorney and covers decisions such as consenting to or refusing treatment, choosing doctors and hospitals, and making decisions about life support and end of life care.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The person you choose as your healthcare agent should understand your values, your preferences for medical treatment, and your wishes for end of life care. Have a detailed conversation with them about the scenarios that matter most to you, including your feelings about life support, resuscitation, and pain management.</p>
              <p className="text-gray-600 leading-relaxed">A medical power of attorney works best when paired with a living will or advance directive. The living will provides written instructions for specific medical scenarios, while the healthcare agent fills in the gaps for situations the living will does not address.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Durable Power of Attorney</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The durable power of attorney is the most important type for long term planning. The word &quot;durable&quot; means the document remains in effect even after you lose the mental capacity to make decisions. This is what makes it different from a standard general power of attorney, which terminates when you become incapacitated.</p>
              <p className="text-gray-600 leading-relaxed mb-4">A durable power of attorney is most commonly used for financial matters. It allows your agent to continue paying your bills, managing your investments, filing your taxes, and handling your property even if you can no longer do so yourself. Without one, your family would need to petition a court for guardianship or conservatorship, which is a time consuming, expensive, and emotionally draining process.</p>
              <p className="text-gray-600 leading-relaxed">Most estate planning attorneys recommend a durable power of attorney as a core document in any estate plan. It is especially important for older adults, anyone with a chronic illness, and anyone who wants to ensure their financial affairs are handled by someone they trust if they become unable to manage them independently.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Does Power of Attorney End at Death</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Yes. All power of attorney authority terminates immediately at the moment of death. This is a critical point that many families do not understand until it is too late. Once a person dies, the agent named in the power of attorney has no legal authority to access bank accounts, sign documents, pay bills, or take any other action on behalf of the deceased.</p>
              <p className="text-gray-600 leading-relaxed mb-4">After death, responsibility for the deceased person&apos;s estate transfers to the executor named in their will. If there is no will, the probate court appoints an administrator. The executor or administrator handles the same types of tasks the agent was managing, but under the authority of the probate court rather than the power of attorney.</p>
              <p className="text-gray-600 leading-relaxed">This transition is one of the reasons it is so important to have both a power of attorney and a will. The power of attorney covers you during your lifetime if you become incapacitated. The will covers what happens after you die. Together, they ensure that someone you trust is always authorized to manage your affairs.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Set Up a Power of Attorney</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Start by choosing your agent carefully. This should be someone you trust completely, who is organized and responsible, and who is willing to take on the role. Discuss the responsibilities with them before you finalize anything. You should also name an alternate agent in case your first choice is unable to serve when the time comes.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Next, define the scope of authority you want to grant. Decide whether you need a general, limited, durable, or springing power of attorney, and whether you want separate documents for financial and medical decisions. Be as specific as possible about what your agent can and cannot do.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Have the document notarized. Most states require notarization for a power of attorney to be valid, and some also require witnesses. Check your state&apos;s specific requirements. Once the document is signed and notarized, distribute copies to your agent, your attorney, your bank, and any other institutions that may need to recognize the document.</p>
              <p className="text-gray-600 leading-relaxed">Keep the original in a secure but accessible location. Let your agent and at least one other trusted person know where it is stored. Review the document every few years and update it if your circumstances, your relationships, or your preferences change.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When You Need One and When You Do Not</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You need a power of attorney if you are an adult who owns property, has bank accounts, or could potentially become unable to manage your own affairs due to illness, injury, or aging. This applies to virtually everyone over the age of 18. Parents of young adults should encourage their children to create a power of attorney as soon as they turn 18, because at that point parents no longer have automatic legal authority to manage their child&apos;s medical or financial decisions.</p>
              <p className="text-gray-600 leading-relaxed mb-4">You may not need a power of attorney if you and your spouse hold all assets jointly and have the legal right to manage each other&apos;s affairs. However, even in this situation, a power of attorney can be valuable for handling matters that require individual authorization, such as tax filings, business transactions, or legal proceedings.</p>
              <p className="text-gray-600 leading-relaxed">The bottom line is that a power of attorney is inexpensive and easy to set up while you are healthy and competent. Waiting until you need one often means waiting until it is too late to create one. The cost of not having one, both financially and emotionally, is far greater than the cost of putting one in place today.</p>
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
                <li><Link href="/blog/end-of-life-planning-checklist" className="text-blue-600 hover:underline">End of Life Planning Checklist: Everything to Do Before It Is Too Late</Link></li>
                <li><Link href="/blog/living-will-vs-advance-directive" className="text-blue-600 hover:underline">Living Will vs Advance Directive: What Is the Difference?</Link></li>
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
