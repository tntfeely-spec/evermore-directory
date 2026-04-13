import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'How to Choose a Funeral Home: What Families Need to Know',
  description: 'Choosing a funeral home during a time of grief is difficult. Here is what to look for, what to ask, and how to compare your options.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/how-to-choose-a-funeral-home' },
};

const faqs = [
  { q: 'How do I find a reputable funeral home near me?', a: 'Start by asking people you trust for recommendations. Check online reviews on Google and the Better Business Bureau. Verify the funeral home is licensed through your state regulatory board. You can also browse listings on directories like funeralhomedirectories.com to compare options in your area.' },
  { q: 'What should I ask when calling a funeral home?', a: 'Ask for an itemized price list, which they are legally required to provide. Ask about their experience with your type of service, whether they handle cremation on site or outsource it, and what is included in their basic service fee. Also ask about timeline, capacity, and any additional charges.' },
  { q: 'Are funeral homes required to show prices?', a: 'Yes. Under the Federal Trade Commission Funeral Rule, all funeral homes must provide an itemized General Price List to anyone who asks, whether in person or over the phone. They cannot require you to purchase a package or refuse to give prices before you visit.' },
  { q: 'Is it okay to shop around for a funeral home?', a: 'Absolutely. Comparing funeral homes is not disrespectful. It is practical and responsible. Prices for the same services can vary by thousands of dollars within the same city. Taking the time to compare ensures your family gets the care and value you deserve.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function HowToChooseAFuneralHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"How to Choose a Funeral Home","description":"A practical guide to comparing and choosing a funeral home for your family.","step":[{"@type":"HowToStep","position":1,"name":"Request General Price Lists from multiple homes","text":"Contact at least three funeral homes and ask for their General Price List. Under the FTC Funeral Rule they are legally required to provide it at no charge."},{"@type":"HowToStep","position":2,"name":"Compare prices for the services you actually need","text":"Focus on comparing prices for the specific services you want, not package prices. You have the right to choose only the items you need."},{"@type":"HowToStep","position":3,"name":"Visit the facility in person","text":"If possible, visit the funeral home before signing anything. Assess cleanliness, professionalism, and whether the staff treats you with compassion and transparency."},{"@type":"HowToStep","position":4,"name":"Ask about payment options","text":"Ask whether the funeral home offers payment plans, accepts insurance assignments, or has other financing options available."},{"@type":"HowToStep","position":5,"name":"Check reviews and licensing","text":"Look up Google reviews and verify the funeral home is licensed in your state. Your state funeral regulatory board maintains a public license database."}]}) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Choose a Funeral Home: What Families Need to Know</h1>
              <p className="text-xl text-gray-600 mb-4">A practical guide to finding the right funeral home for your family&apos;s needs and budget.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">When a loved one passes away, choosing a funeral home is often one of the first decisions families face. It can feel overwhelming, especially when you are grieving and unfamiliar with the industry. The good news is that a few straightforward steps can help you find a funeral home that treats your family with dignity and provides fair, transparent pricing.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Start with Price Transparency</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The single most important thing to look for when choosing a funeral home is price transparency. Under the FTC Funeral Rule, every funeral home in the United States is required to provide an itemized General Price List to anyone who asks. If a funeral home is reluctant to share prices, hesitates, or pressures you to come in before discussing costs, that is a warning sign.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Call at least two or three funeral homes and request their price list. Compare the basic service fee, which is a nonnegotiable charge that covers the funeral director&apos;s overhead. Then compare the individual line items for the services you actually need. You are not required to purchase a package, and you have the right to choose only the services you want.</p>
              <p className="text-gray-600 leading-relaxed">Prices can vary dramatically. In many cities, the difference between the most and least expensive funeral home for the same services can be $3,000 or more. Comparing is not disrespectful. It is responsible.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Check Licensing and Reputation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Every funeral home must be licensed by the state in which it operates. You can verify a funeral home&apos;s license through your state&apos;s funeral regulatory board, which is typically part of the Department of Health or a dedicated Board of Funeral Directors and Embalmers. This confirms they meet minimum standards for facilities, staffing, and operations.</p>
              <p className="text-gray-600 leading-relaxed">Beyond licensing, check online reviews on Google, Yelp, and the Better Business Bureau. Look for patterns in the reviews rather than isolated complaints. Consistent mentions of compassionate staff, clear communication, and fair pricing are strong indicators. Repeated complaints about hidden charges, disorganization, or pressure tactics should be taken seriously.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visit Before You Decide</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If time allows, visit the funeral home in person before making a commitment. Pay attention to the condition of the facility. Is it clean, well maintained, and welcoming? Does the staff greet you with warmth and patience, or do they seem rushed and transactional? The atmosphere of the funeral home matters because your family and guests will spend meaningful time there.</p>
              <p className="text-gray-600 leading-relaxed">During your visit, ask to see the rooms where services are held. Ask about capacity, parking, and accessibility for elderly or disabled guests. A funeral home that is proud of its facility and staff will be happy to give you a tour and answer questions without pressure.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Red Flags to Watch For</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Refusing or delaying to provide a price list over the phone</li>
                <li>Pressuring you to purchase a more expensive casket, package, or service than you requested</li>
                <li>Claiming that embalming is required by law when it often is not</li>
                <li>Being vague about what is included in their fees</li>
                <li>Discouraging you from comparing prices with other funeral homes</li>
                <li>Requiring you to use their casket supplier rather than allowing a third party casket</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">Any of these behaviors suggest the funeral home may not be acting in your family&apos;s best interest. You always have the right to walk away and choose another provider.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Compare Multiple Funeral Homes</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The best approach is to call three funeral homes, request their General Price List, and compare apples to apples. Write down the specific services you need, such as transportation, preparation, a viewing, a service, and a cremation or burial. Then add up what each funeral home charges for those exact items.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Pay close attention to the basic service fee, which every funeral home charges regardless of what services you select. This fee alone can range from $1,500 to $3,500 depending on the provider. Also confirm whether there are any additional fees for things like death certificate copies, obituary placement, or use of facilities for a service.</p>
              <p className="text-gray-600 leading-relaxed">Do not feel rushed. Even in an at need situation, you have time to make a few phone calls. Most hospitals and medical facilities will hold the body for 24 to 48 hours at no charge, giving you time to compare options before deciding.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/questions-to-ask-a-funeral-director" className="text-slate-600 hover:text-slate-800 font-medium">Questions to Ask a Funeral Director</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step by Step</Link></li>
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
