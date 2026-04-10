import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Digital Estate Planning: What Happens to Your Online Accounts When You Die',
  description: 'Most people have dozens of digital accounts that have no plan for what happens after death. Here is how to organize your digital life so your family is not left guessing.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/digital-estate-planning' },
};

const faqs = [
  { q: 'What happens to your digital accounts when you die?', a: 'When you die, your digital accounts do not automatically close or transfer to anyone. Each platform has its own policy. Some accounts may be memorialized, some may be deleted after a period of inactivity, and some may remain active indefinitely unless a family member contacts the provider. Without a plan in place, your family may be unable to access important accounts, and subscriptions may continue to charge your bank account or credit card. Creating a digital estate plan ensures that your wishes are followed and your family knows how to handle your online presence.' },
  { q: 'What is a digital estate plan?', a: 'A digital estate plan is a document or set of instructions that outlines all of your digital accounts, how to access them, and what you want done with them after you die. It typically includes a list of accounts with usernames and passwords, instructions for each account (whether to close, memorialize, or transfer), the location of any digital assets with financial value such as cryptocurrency or domain names, and the designation of a digital executor who is authorized to manage your digital affairs.' },
  { q: 'Can family members access your phone after you die?', a: 'Accessing a deceased person\'s phone depends on the device and whether the person shared their passcode or set up a legacy contact. Apple\'s Digital Legacy program allows users to designate legacy contacts who can request access after the owner\'s death. Android devices may be accessible through Google\'s Inactive Account Manager. Without these tools or the passcode, gaining access to a locked phone may require a court order, which can be a lengthy and costly process.' },
  { q: 'What happens to your Facebook account when you die?', a: 'Facebook offers two options for deceased users. If the account holder designated a legacy contact before death, that person can manage the memorialized account, which includes writing a pinned post, updating the profile picture, and responding to friend requests. Alternatively, a family member can request that the account be permanently deleted by submitting proof of death to Facebook. If no action is taken, the account remains active and visible to friends.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function DigitalEstatePlanningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Estate Planning: What Happens to Your Online Accounts When You Die</h1>
              <p className="text-xl text-gray-600 mb-4">Your digital life does not end when you do. Without a plan, your family may be locked out of important accounts, charged for forgotten subscriptions, and unable to manage your online presence. Here is how to get organized.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is a Digital Estate</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Your digital estate is the sum of all your online accounts, digital files, and electronic assets. This includes your email accounts, social media profiles, cloud storage, streaming subscriptions, banking and investment portals, domain names, cryptocurrency wallets, and any other online presence tied to your identity. For most people, this adds up to dozens or even hundreds of accounts.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Unlike physical assets such as a house, car, or bank account, digital assets do not automatically transfer to your heirs when you die. Each platform has its own terms of service governing what happens to an account after the holder&apos;s death, and many of those terms were never designed with estate planning in mind. The result is that families are frequently locked out of accounts they need to access or unable to stop charges they do not know about.</p>
              <p className="text-gray-600 leading-relaxed">Your digital estate may also include assets with real financial value, such as cryptocurrency holdings, digital art or NFTs, revenue generating websites, or intellectual property stored online. These assets are part of your overall estate and should be included in your estate planning just as you would include a bank account or piece of real estate.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Digital Estate Planning Matters</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Without a digital estate plan, your family will face a frustrating and often expensive process of trying to access, close, or manage your online accounts after you die. Many platforms require a death certificate, legal documentation, and sometimes a court order before they will grant access to a deceased person&apos;s account. This can take weeks or months, during which subscriptions continue to charge, important emails go unanswered, and digital assets may lose value.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Identity theft is another concern. A deceased person&apos;s online accounts can be targeted by hackers who use the information to open fraudulent accounts, make purchases, or file false tax returns. The longer accounts remain active and unmonitored, the greater the risk. A digital estate plan that includes instructions for closing or securing accounts can help protect your identity even after death.</p>
              <p className="text-gray-600 leading-relaxed">Beyond the practical concerns, a digital estate plan is an act of care for the people you leave behind. It spares them the burden of guessing what you would have wanted, searching for accounts they may not know about, and navigating bureaucratic processes during an already painful time.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Accounts to Include</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Your digital estate plan should include every account you use regularly, as well as any that are tied to financial obligations or sentimental value. Start with the major categories: email accounts (Gmail, Outlook, Yahoo), social media profiles (Facebook, Instagram, LinkedIn, X), financial accounts (online banking, investment platforms, cryptocurrency exchanges), and cloud storage (Google Drive, iCloud, Dropbox).</p>
              <p className="text-gray-600 leading-relaxed mb-4">Include all subscription services, such as streaming platforms, software licenses, gym memberships, and meal delivery services. List any accounts with recurring payments, including domain name registrations, web hosting, and online storage. If you own a website, blog, or online business, include details about hosting, content management, and revenue streams.</p>
              <p className="text-gray-600 leading-relaxed">Do not forget less obvious accounts such as loyalty programs with accumulated points, online gaming accounts with purchased content, professional memberships, and any accounts where you store photos, documents, or creative work. If it requires a username and password, it belongs in your digital estate plan.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Create a Digital Estate Plan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Start by making a comprehensive inventory of all your digital accounts. For each account, record the platform name, your username or email, and any specific instructions you have for what should happen to the account after your death. You do not need to include passwords in the inventory itself if you use a password manager, but you do need to ensure your designated executor can access the password manager.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Designate a digital executor, someone you trust to manage your online presence after your death. This can be the same person as your estate executor or someone different. Make sure this person knows they have been designated, where to find your digital estate plan, and how to access your password manager or master password list.</p>
              <p className="text-gray-600 leading-relaxed">Consider including your digital estate plan as part of your overall estate planning documents. Some states now recognize digital assets in their probate laws, and naming a digital executor in your will can give them legal authority to act on your behalf. An estate planning attorney can help you integrate your digital plan with your existing will and trust documents.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Happens to Social Media After Death</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Each social media platform handles deceased accounts differently. Facebook allows users to designate a legacy contact who can manage a memorialized version of the account after death. The legacy contact can write a pinned post, update the profile picture, and accept friend requests, but they cannot read private messages or log in as the deceased. Alternatively, a family member can request that the account be permanently deleted.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Google offers an Inactive Account Manager that lets you choose what happens to your Google accounts, including Gmail, Google Photos, YouTube, and Google Drive, after a specified period of inactivity. You can designate trusted contacts to receive data from your account, and you can choose whether the account should be deleted after the data is shared.</p>
              <p className="text-gray-600 leading-relaxed">Apple introduced the Digital Legacy program, which allows users to designate legacy contacts who can request access to the deceased person&apos;s Apple ID data, including photos, messages, notes, and files. Instagram allows accounts to be memorialized or removed upon request. LinkedIn will close a deceased member&apos;s account when a verified family member or colleague submits a request. For each platform you use, take the time to set up the available legacy or memorial features now, before they are needed.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Store and Share Your Digital Estate Plan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Your digital estate plan is only useful if your executor can find it when they need it. Store a physical copy in a secure location, such as a home safe or a safe deposit box, alongside your will and other estate documents. Make sure your executor knows where it is and has the ability to access it.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If you use a password manager, share the master password or recovery key with your executor through a secure method. Some password managers, such as 1Password and LastPass, offer emergency access features that allow a designated contact to request access after a waiting period. Set this up now so that the process is seamless when it is needed.</p>
              <p className="text-gray-600 leading-relaxed">Review and update your digital estate plan at least once a year. As you create new accounts, change passwords, or acquire new digital assets, your plan should be updated to reflect the current state of your digital life. An outdated plan can be nearly as frustrating as no plan at all.</p>
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
                <li><Link href="/blog/end-of-life-planning-checklist" className="text-blue-600 hover:underline">End of Life Planning Checklist: Everything You Need to Prepare</Link></li>
                <li><Link href="/blog/what-happens-to-hsa-when-you-die" className="text-blue-600 hover:underline">What Happens to Your HSA When You Die</Link></li>
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
