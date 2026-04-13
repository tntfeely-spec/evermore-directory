import Link from 'next/link';
import { Metadata } from 'next';
import BlogFooterLinks from '@/components/BlogFooterLinks';

export const metadata: Metadata = {
  title: 'How to Plan a Funeral: Step-by-Step Guide (2026) | Evermore Directory',
  description: 'A practical step-by-step guide to planning a funeral. What to do first, how to choose a funeral home, what decisions to make, and how to manage costs.',
  keywords: 'how to plan a funeral, funeral planning, planning a funeral, funeral checklist, funeral arrangements, what to do when someone dies, funeral planning guide',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/blog/how-to-plan-a-funeral',
  },
};

export default function HowToPlanAFuneralPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://funeralhomedirectories.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://funeralhomedirectories.com/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "How to Plan a Funeral"
            }
          ]
        }) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Plan a Funeral","description":"A step by step guide to planning a funeral from the first 24 hours through the service.","totalTime":"PT72H","step":[{"@type":"HowToStep","position":1,"name":"Get the death certificate process started","text":"Contact a funeral home within 24 to 48 hours. They will guide you through obtaining the death certificate, which is required before any arrangements can be finalized."},{"@type":"HowToStep","position":2,"name":"Choose a funeral home","text":"Contact at least two or three funeral homes and request their General Price List. Compare costs for the specific services you need before making a decision."},{"@type":"HowToStep","position":3,"name":"Choose burial or cremation","text":"Decide between burial and cremation based on the deceased's wishes, religious or cultural preferences, and budget. Direct cremation is typically the least expensive option."},{"@type":"HowToStep","position":4,"name":"Plan the service","text":"Decide on the type of service: traditional funeral, memorial service, graveside service, or celebration of life. Choose a location, officiant, readings, and music."},{"@type":"HowToStep","position":5,"name":"Notify family and friends","text":"Write and publish an obituary. Notify close family and friends directly. Post on social media if appropriate."},{"@type":"HowToStep","position":6,"name":"Handle paperwork and legal tasks","text":"Order multiple certified copies of the death certificate (typically 8 to 12). Notify Social Security, banks, insurance companies, and the deceased's employer."}]}) }} />
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article>
          <header className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Plan a Funeral: A Step-by-Step Guide
            </h1>
            <p className="text-xl text-gray-600">
              A practical guide to help you navigate funeral planning during one of life&apos;s most difficult moments.
            </p>
          </header>

          <section className="mb-10">
            <p className="text-gray-600 mb-4">
              When someone you love passes away, you&apos;re suddenly faced with dozens of decisions-often while grieving and under time pressure. Most people have never planned a funeral before and don&apos;t know where to start.
            </p>
            <p className="text-gray-600">
              This guide walks you through the process step by step, from the first phone call to the days after the service. You don&apos;t have to figure this out alone-funeral directors are there to help-but understanding the process puts you in a better position to make decisions that honor your loved one without overspending.
            </p>
          </section>

          <section className="mb-10 bg-slate-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funeral Planning at a Glance</h2>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <span className="font-bold text-slate-600 flex-shrink-0">Day 1</span>
                <span className="text-gray-700">Notify authorities, contact funeral home, begin making decisions</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-slate-600 flex-shrink-0">Day 1-2</span>
                <span className="text-gray-700">Meet with funeral director, choose burial or cremation, select casket/urn</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-slate-600 flex-shrink-0">Day 2-3</span>
                <span className="text-gray-700">Plan the service, write obituary, notify family and friends</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-slate-600 flex-shrink-0">Day 3-7</span>
                <span className="text-gray-700">Viewing/visitation, funeral service, burial or cremation</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="font-bold text-slate-600 flex-shrink-0">After</span>
                <span className="text-gray-700">Thank-you notes, estate matters, grief support</span>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Step 1: What to Do Immediately After a Death</h2>
            <p className="text-gray-600 mb-4">
              The first hours after a death can feel overwhelming. Here&apos;s what needs to happen:
            </p>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">If the death occurs at home</h3>
                <p className="text-gray-600 text-sm">If the person was under hospice care, call the hospice nurse first-they will guide you through next steps and can pronounce death. If the death was unexpected, call 911. Do not move the body until authorities or the funeral home arrive.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">If the death occurs at a hospital or care facility</h3>
                <p className="text-gray-600 text-sm">The staff will handle the initial process and ask you to designate a funeral home. You do not need to decide immediately-you can ask for time to make calls and compare options before having the body transferred.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Obtain the death certificate</h3>
                <p className="text-gray-600 text-sm">The funeral home typically handles obtaining the death certificate from the attending physician or medical examiner. Order at least 10-15 certified copies-you&apos;ll need them for insurance claims, bank accounts, property transfers, and other legal matters.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Step 2: Choose a Funeral Home</h2>
            <p className="text-gray-600 mb-4">
              This is one of the most important decisions you&apos;ll make. The funeral home you choose will guide you through the entire process and the cost can vary by thousands of dollars between providers in the same city.
            </p>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Compare at least 3 funeral homes</h3>
                <p className="text-gray-600 text-sm">Call or visit at least three funeral homes and request their General Price List (GPL). They are required by law to provide it. Compare the basic services fee, preparation costs, and facility fees. Prices can vary by $3,000-$5,000 for the same services.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Ask the right questions</h3>
                <p className="text-gray-600 text-sm">How long have you been in business? Are you family-owned or corporate? Do you offer payment plans? Can you accommodate our cultural or religious traditions? What is your availability for the dates we&apos;re considering?</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Trust your instincts</h3>
                <p className="text-gray-600 text-sm">A good funeral director will be patient, transparent about pricing, and never pressure you into services you don&apos;t need. If you feel rushed or pressured, go elsewhere.</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              <Link href="/states" className="text-slate-600 hover:underline">Compare funeral homes in your state →</Link>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Step 3: Make Key Decisions</h2>
            <p className="text-gray-600 mb-4">
              Your funeral director will walk you through these decisions, but it helps to think about them beforehand:
            </p>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Burial or Cremation?</h3>
                <p className="text-gray-600 text-sm">This is the first major decision. Consider the deceased&apos;s wishes, religious requirements, family preferences, and budget. Traditional burial costs $7,000-$15,000+ while cremation ranges from $500-$7,000. <Link href="/blog/burial-vs-cremation" className="text-slate-600 hover:underline">See our complete comparison →</Link></p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Type of Service</h3>
                <p className="text-gray-600 text-sm">Options include a traditional funeral with viewing, a memorial service (without the body present), a celebration of life, a graveside service only, or no formal service at all. There is no wrong choice-do what feels right for your family.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Casket or Urn Selection</h3>
                <p className="text-gray-600 text-sm">If burial, you&apos;ll choose a casket ($2,000-$10,000+). Remember you can legally buy one online for less. If cremation, you&apos;ll select an urn ($25-$1,500). For direct cremation, the funeral home provides a basic container at no extra cost.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Location and Date</h3>
                <p className="text-gray-600 text-sm">Services can be held at the funeral home chapel, a church, a community space, outdoors, or at home. Most funerals take place 3-7 days after death, but cremation allows for more flexible timing.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Embalming</h3>
                <p className="text-gray-600 text-sm">Embalming ($500-$1,000) is not legally required in most states. It&apos;s typically needed only for open-casket viewings. If you&apos;re not having a viewing or if burial/cremation happens within 24-48 hours, you can usually skip it.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Step 4: Plan the Service</h2>
            <p className="text-gray-600 mb-4">
              The funeral service is how you honor and remember your loved one. It can be as formal or informal as you want.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-slate-400 pl-4">
                <h3 className="font-semibold text-gray-800">Choose an officiant</h3>
                <p className="text-gray-600 text-sm">This could be a clergy member, a celebrant, a family friend, or the funeral director. Some families have multiple speakers share memories.</p>
              </div>
              <div className="border-l-4 border-slate-400 pl-4">
                <h3 className="font-semibold text-gray-800">Select readings and music</h3>
                <p className="text-gray-600 text-sm">Choose readings, poems, scriptures, or songs that were meaningful to the deceased. Many funeral homes have audio/video equipment for slideshows or video tributes.</p>
              </div>
              <div className="border-l-4 border-slate-400 pl-4">
                <h3 className="font-semibold text-gray-800">Invite speakers for eulogies</h3>
                <p className="text-gray-600 text-sm">Ask 2-3 people who were close to the deceased if they&apos;d like to share memories. Give them a general time frame (3-5 minutes each) and let them know it&apos;s okay to write it down.</p>
              </div>
              <div className="border-l-4 border-slate-400 pl-4">
                <h3 className="font-semibold text-gray-800">Arrange flowers and displays</h3>
                <p className="text-gray-600 text-sm">Decide on floral arrangements, photo displays, or memory tables. Some families request donations to a charity instead of flowers-the funeral home can include this in the obituary.</p>
              </div>
              <div className="border-l-4 border-slate-400 pl-4">
                <h3 className="font-semibold text-gray-800">Plan a reception</h3>
                <p className="text-gray-600 text-sm">Many families hold a reception or gathering after the service. This can be at the funeral home, a restaurant, someone&apos;s home, or a community hall. Keep it simple-friends and extended family often help with food.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Step 5: Write the Obituary</h2>
            <p className="text-gray-600 mb-4">
              The obituary serves as a public notice and a tribute to the deceased. Most funeral homes will help you write it, but many families prefer to write their own.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">What to include in an obituary:</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Full legal name (including maiden name if applicable)</p>
                <p>• Age and date of death</p>
                <p>• City and state of residence</p>
                <p>• Brief biography (birthplace, education, career, accomplishments)</p>
                <p>• Hobbies, passions, and personality traits</p>
                <p>• Surviving family members (spouse, children, grandchildren, siblings)</p>
                <p>• Those who preceded them in death</p>
                <p>• Funeral/memorial service details (date, time, location)</p>
                <p>• Where to send flowers or memorial donations</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Newspaper obituaries can cost $200-$1,000+ depending on length and publication. Many families now publish free obituaries online through the funeral home&apos;s website or memorial sites.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Step 6: Notify People</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Immediate family and close friends</h3>
                <p className="text-gray-600 text-sm">Call or visit in person. Ask a close friend or family member to help with notifications-you don&apos;t have to make every call yourself.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Employer and colleagues</h3>
                <p className="text-gray-600 text-sm">Notify the deceased&apos;s employer and your own employer. Most companies offer bereavement leave of 3-5 days for immediate family.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Organizations and communities</h3>
                <p className="text-gray-600 text-sm">Church or religious community, clubs, volunteer organizations, neighbors, and social groups. The funeral home can help distribute the obituary to local media.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Important institutions</h3>
                <p className="text-gray-600 text-sm">Social Security Administration, banks, insurance companies, the post office, and the DMV. Most of these can be handled in the weeks following the funeral-focus on the service first.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Step 7: Manage Costs</h2>
            <p className="text-gray-600 mb-4">
              Funeral costs can add up quickly. Here&apos;s how to stay in control:
            </p>
            <div className="space-y-3">
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm"><span className="font-semibold text-gray-800">Set a budget before meeting with the funeral home.</span> It&apos;s much harder to say no to add-ons when you&apos;re emotional and don&apos;t have a number in mind.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm"><span className="font-semibold text-gray-800">Only pay for services you actually want.</span> The FTC Funeral Rule protects your right to choose individual items rather than being forced into a package.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm"><span className="font-semibold text-gray-800">Ask about payment plans.</span> Many funeral homes offer financing or accept credit cards. Some also work with insurance assignments.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm"><span className="font-semibold text-gray-800">Check for benefits.</span> Veterans benefits, Social Security death benefit ($255), life insurance, employer benefits, and union or fraternal organization benefits may all apply.</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              <Link href="/blog/funeral-costs-2026" className="text-slate-600 hover:underline">See our complete funeral cost guide →</Link>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Step 8: After the Funeral</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-4">
                <h3 className="font-semibold text-gray-800">Send thank-you notes</h3>
                <p className="text-gray-600 text-sm">Thank those who attended, sent flowers, brought food, or helped in any way. A brief handwritten note is appreciated but not required-do what you can.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h3 className="font-semibold text-gray-800">Handle estate matters</h3>
                <p className="text-gray-600 text-sm">Contact the deceased&apos;s attorney or locate their will. You&apos;ll need to begin the probate process, close or transfer accounts, and handle property. Consider consulting an estate attorney.</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h3 className="font-semibold text-gray-800">Take care of yourself</h3>
                <p className="text-gray-600 text-sm">Grief is exhausting. Give yourself permission to rest. Consider joining a grief support group-many funeral homes offer free groups, or ask your doctor for a referral. There is no timeline for grief.</p>
              </div>
            </div>
          </section>

          <section className="mb-10 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Funeral Planning Checklist</h2>
            <p className="text-gray-600 text-sm mb-4">Use this as a reference to make sure nothing is missed:</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>☐ Obtain death certificate (request 10-15 copies)</p>
              <p>☐ Choose a funeral home and request the GPL</p>
              <p>☐ Decide on burial or cremation</p>
              <p>☐ Select a casket, urn, or alternative container</p>
              <p>☐ Choose the type of service (funeral, memorial, graveside, etc.)</p>
              <p>☐ Set date, time, and location for the service</p>
              <p>☐ Select an officiant</p>
              <p>☐ Arrange music, readings, and eulogies</p>
              <p>☐ Write and publish the obituary</p>
              <p>☐ Choose flowers or request charitable donations</p>
              <p>☐ Arrange a reception or gathering</p>
              <p>☐ Notify family, friends, employer, and organizations</p>
              <p>☐ Select cemetery plot and headstone (if burial)</p>
              <p>☐ Decide on final placement of ashes (if cremation)</p>
              <p>☐ Review and sign funeral home contract</p>
              <p>☐ Arrange transportation for family members</p>
              <p>☐ Gather clothing and personal items for the deceased</p>
              <p>☐ Prepare photos for displays or slideshow</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">How long do you have to plan a funeral?</h3>
                <p className="text-gray-600 text-sm">Most funerals take place 3-7 days after death, but there is no legal requirement for timing in most states. If the body is refrigerated or embalmed, you have more time. With cremation, you can hold a memorial service weeks or months later if needed.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Who is responsible for planning a funeral?</h3>
                <p className="text-gray-600 text-sm">Typically the next of kin-spouse, adult children, or parents. If the deceased pre-planned their funeral, much of the work is already done. The legal authority to make decisions usually follows this order: spouse, adult children, parents, siblings.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Can I plan a funeral without a funeral home?</h3>
                <p className="text-gray-600 text-sm">In most states, yes. Families can legally handle many aspects of funeral care themselves, including transporting the body, holding a home funeral, and arranging direct burial or cremation. However, a funeral director handles permits, paperwork, and logistics that can be difficult to manage during grief.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">What if the deceased didn&apos;t leave instructions?</h3>
                <p className="text-gray-600 text-sm">Make decisions based on what you knew about their values, personality, and preferences. If they were frugal, they likely wouldn&apos;t want an extravagant funeral. If they were social, a larger gathering makes sense. There is no wrong answer-do what feels right and what your family can afford.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Should I pre-plan my own funeral?</h3>
                <p className="text-gray-600 text-sm">Pre-planning is one of the greatest gifts you can give your family. It removes the burden of decision-making during grief, lets you lock in current prices, and ensures your wishes are honored. Most funeral homes offer free pre-planning consultations.</p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/funeral-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">How Much Does a Funeral Cost in 2026?</h3>
                <p className="text-sm text-gray-600">Complete price guide for funeral services across the U.S.</p>
              </Link>
              <Link href="/blog/burial-vs-cremation" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Burial vs Cremation: How to Decide</h3>
                <p className="text-sm text-gray-600">Compare costs, process, and considerations for both options.</p>
              </Link>
              <Link href="/blog/cremation-costs-2026" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">How Much Does Cremation Cost in 2026?</h3>
                <p className="text-sm text-gray-600">State-by-state cremation price guide with money-saving tips.</p>
              </Link>
              <Link href="/blog/funeral-homes-near-me" className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-600 mb-1">Funeral Homes Near Me: How to Choose</h3>
                <p className="text-sm text-gray-600">What to look for when comparing funeral homes in your area.</p>
              </Link>
            </div>
          </section>
          <section className="mb-10 bg-slate-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              You Might Also Find Helpful
            </h2>
            <ul className="space-y-2">
              <li><Link href="/blog/pre-planning-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">Pre-Planning a Funeral: Why It Matters and How to Do It &rarr;</Link></li>
              <li><Link href="/blog/funeral-home-red-flags" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Home Red Flags: What to Watch Out For When Grieving &rarr;</Link></li>
              <li><Link href="/blog/what-to-do-when-someone-dies" className="text-slate-600 hover:text-slate-800 font-medium">What to Do When Someone Dies: A Step-by-Step Guide &rarr;</Link></li>
            </ul>
          </section>
          <BlogFooterLinks />
          {/* Find Funeral Homes CTA */}
          <div className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes near you</p>
            <p className="text-slate-600 text-sm mb-5">Search 4,800+ funeral homes across all 50 states. Compare prices, services, and locations. Free for families. No referral fees.</p>
            <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">
              Browse Funeral Homes Near You
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-8">Last updated: March 2026</p>
        </article>
      </div>
    </main>
    </>
  );
}
