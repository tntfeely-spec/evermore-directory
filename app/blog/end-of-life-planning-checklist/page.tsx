import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'End of Life Planning Checklist: Everything to Do Before It Is Too Late',
  description: 'A practical end of life planning checklist covering wills, advance directives, funeral preferences, financial accounts, and what to share with your family.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/end-of-life-planning-checklist' },
};

const faqs = [
  { q: 'What documents do I need for end of life planning?', a: 'At minimum, you need a last will and testament, a durable power of attorney, a healthcare proxy (medical power of attorney), and an advance directive or living will. Together, these cover your finances, your medical care, and your wishes for what happens after death.' },
  { q: 'When should I start end of life planning?', a: 'As soon as you have dependents, own property, or have strong preferences about your care and funeral. Most financial planners recommend starting in your 30s or 40s, but it is never too late. The best time to plan is before you need to.' },
  { q: 'What is an advance directive?', a: 'An advance directive is a legal document that states your wishes for medical treatment if you become unable to speak for yourself. It typically covers life support, resuscitation, feeding tubes, and pain management. It is sometimes called a living will.' },
  { q: 'How do I tell my family about my end of life wishes?', a: 'Start with a simple conversation. Tell them where your documents are stored, who your attorney and financial advisor are, and what your preferences are for funeral and burial. You do not need to cover everything in one sitting. Written notes or a letter can supplement the conversation.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function EndOfLifePlanningChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Complete an End of Life Planning Checklist","description":"A step by step guide to documenting your end of life wishes so your family is prepared.","step":[{"@type":"HowToStep","position":1,"name":"Create or update your will","text":"Write or update your will with a licensed attorney. Name an executor and specify how assets should be distributed."},{"@type":"HowToStep","position":2,"name":"Set up a healthcare directive","text":"Complete a living will and healthcare power of attorney. Specify your wishes for life support, resuscitation, and end of life care."},{"@type":"HowToStep","position":3,"name":"Document your funeral preferences","text":"Write down whether you want burial or cremation, the type of service, music preferences, and any specific requests. Store with your will."},{"@type":"HowToStep","position":4,"name":"Organize financial accounts","text":"List all bank accounts, investment accounts, insurance policies, and debts. Include account numbers and contact information for each institution."},{"@type":"HowToStep","position":5,"name":"Create a digital asset inventory","text":"Document usernames and passwords for email, social media, and financial accounts. Specify what should happen to each account after your death."},{"@type":"HowToStep","position":6,"name":"Tell a trusted person where everything is","text":"Share the location of your will, healthcare directive, and planning documents with at least one trusted family member or friend."}]}) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">End of Life Planning Checklist</h1>
              <p className="text-xl text-gray-600 mb-4">A practical, step-by-step checklist so your family never has to guess what you wanted.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Planning ahead is one of the most generous things you can do for the people you love. It means your family will never have to make difficult financial, medical, or funeral decisions under pressure without knowing what you wanted. This checklist covers the essentials: legal documents, finances, funeral preferences, digital assets, and how to share it all with your family.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Legal Documents</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Last will and testament:</strong> Specifies how your assets are distributed and who is responsible for carrying out your wishes.</li>
                <li><strong>Durable power of attorney:</strong> Designates someone to manage your financial affairs if you become incapacitated.</li>
                <li><strong>Healthcare proxy (medical power of attorney):</strong> Names someone to make medical decisions on your behalf if you cannot.</li>
                <li><strong>Advance directive / living will:</strong> Records your wishes for life support, resuscitation, pain management, and other medical interventions.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Financial Accounts and Insurance</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Review and update beneficiary designations on all retirement accounts, life insurance policies, and bank accounts.</li>
                <li>Create a master list of all financial accounts including banks, brokerage accounts, retirement funds, and debts.</li>
                <li>Confirm life insurance coverage is adequate and the policy is current.</li>
                <li>Consider final expense insurance or a payable-on-death account to cover funeral costs without burdening your family.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funeral and Burial Preferences</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Decide between burial and cremation and record your preference in writing.</li>
                <li>Specify the type of service you want: traditional funeral, celebration of life, graveside, or no service.</li>
                <li>Consider a prepaid funeral plan to lock in today&apos;s prices.</li>
                <li>Note the location of your DD-214 if you are a veteran (needed for VA burial benefits).</li>
                <li>Record the location of all important documents: will, insurance policies, deeds, passwords.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Digital Assets</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Create a secure list of passwords for email, banking, social media, and online accounts.</li>
                <li>Designate a legacy contact for social media accounts (Facebook, Google, Apple all offer this).</li>
                <li>Decide what should happen to your social media profiles: memorialized, deleted, or managed by someone.</li>
                <li>Note any digital assets with monetary value: cryptocurrency, domain names, online businesses.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Share With Your Family</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Your plans are only useful if your family knows about them. At a minimum, make sure at least one trusted person knows:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Where your legal documents are stored (physical location and any digital copies).</li>
                <li>The name and contact information of your attorney, financial advisor, and insurance agent.</li>
                <li>Your funeral and burial preferences.</li>
                <li>How to access your financial accounts and digital assets.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Get Started Today</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li><strong>Pick one thing from this list and do it this week.</strong> You do not need to do everything at once. Start with a will or an advance directive.</li>
                <li><strong>Have one conversation.</strong> Tell your spouse, child, or closest friend where your documents are and what your preferences are.</li>
                <li><strong>Write it down.</strong> Even a handwritten letter with your wishes, stored somewhere your family can find it, is better than nothing.</li>
              </ol>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step-by-Step</Link></li>
                <li><Link href="/blog/pre-planning-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">Pre-Planning a Funeral: Why It Matters</Link></li>
                <li><Link href="/veteran-burial-benefits" className="text-slate-600 hover:text-slate-800 font-medium">Veteran Burial Benefits</Link></li>
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
