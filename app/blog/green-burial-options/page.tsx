import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Green Burial Options: What They Are and How to Plan One',
  description: 'Green burial is a natural, environmentally friendly alternative to traditional burial. Here is what it involves, what it costs, and how to find a provider.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/green-burial-options' },
};

const faqs = [
  { q: 'What is a green burial?', a: 'A green burial is a natural burial method that skips embalming, uses biodegradable containers instead of metal or hardwood caskets, and avoids concrete burial vaults. The goal is to allow the body to decompose naturally and return to the earth with minimal environmental impact.' },
  { q: 'Is green burial legal in all states?', a: 'Green burial is legal in all 50 states. No state requires embalming, and no state requires a burial vault by law, though individual cemeteries may have their own rules. Some states have specific regulations about burial depth or land use, so check with your local green burial cemetery for details.' },
  { q: 'How much does a green burial cost compared to traditional burial?', a: 'A green burial typically costs between $1,000 and $4,000, compared to $7,000 to $12,000 for a traditional burial with embalming, a casket, a vault, and a cemetery plot. The savings come from eliminating embalming, using simpler containers, and choosing natural burial grounds over manicured cemeteries.' },
  { q: 'Can you have a viewing before a green burial?', a: 'Yes. A viewing or visitation is possible without embalming. The funeral home can use refrigeration to preserve the body for several days. Some families hold a private viewing at home. The key is to schedule the viewing within a few days of death and keep the room cool.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function GreenBurialOptionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Green Burial Options: What They Are and How to Plan One</h1>
              <p className="text-xl text-gray-600 mb-4">A practical guide to natural burial for families who want an environmentally conscious alternative to traditional burial.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Green burial is a natural approach to burial that allows the body to return to the earth without the chemicals, metals, and concrete used in conventional burial. It is one of the fastest growing trends in the funeral industry, driven by families who want a simpler, more environmentally responsible option.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is a Green Burial</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A green burial eliminates the practices that define conventional burial. There is no embalming with formaldehyde. There is no metal or lacquered hardwood casket. There is no concrete vault liner. Instead, the body is placed in a biodegradable container, such as a simple wooden casket, a wicker basket, or a shroud, and buried directly in the earth.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The grave is typically shallower than in a traditional cemetery, usually three to four feet deep, which allows natural soil organisms to break down the body more efficiently. The burial site may be marked with a native plant, a flat stone, or a GPS coordinate rather than a traditional headstone.</p>
              <p className="text-gray-600 leading-relaxed">The philosophy behind green burial is straightforward: the human body is organic, and returning it to the earth without interference is the most natural thing a family can do.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Green Burial</h2>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Hybrid cemeteries:</strong> Traditional cemeteries that offer a green burial section. They allow biodegradable caskets and skip the vault requirement for designated plots. This is the most accessible option for most families.</p>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Natural burial grounds:</strong> Dedicated green cemeteries where every burial follows natural practices. These sites often double as nature preserves or conservation easements, protecting the land from future development.</p>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Conservation cemeteries:</strong> The most rigorous standard. These are certified by the Green Burial Council and must be managed by a conservation organization. They permanently protect the land and restore native habitat.</p>
              <p className="text-gray-600 leading-relaxed"><strong>Home burial:</strong> In many states, families can bury their loved one on private land with the proper permits. This is the most personal form of green burial, though zoning and property laws vary by county.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Green Burial Differs from Traditional Burial</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Traditional burial involves embalming the body with formaldehyde-based chemicals, placing it in a sealed casket (often metal or finished hardwood), and lowering it into a concrete vault inside the grave. This process is designed to slow decomposition and maintain the cemetery grounds.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Green burial takes the opposite approach. It embraces decomposition as a natural process. No chemicals are used. The container is designed to break down along with the body. There is no vault. The grave is dug and filled by hand in many cases, and the site is maintained as a natural landscape rather than a manicured lawn.</p>
              <p className="text-gray-600 leading-relaxed">The environmental difference is significant. Traditional burial puts roughly 800,000 gallons of embalming fluid, 90,000 tons of steel, and 1.6 million tons of concrete into the ground each year in the United States alone.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cost of Green Burial</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Green burial is substantially less expensive than traditional burial. A complete green burial typically costs between $1,000 and $4,000, which includes the burial container, the plot, and the opening and closing of the grave. By comparison, a traditional burial with embalming, a casket, a vault, and a cemetery plot averages $7,000 to $12,000.</p>
              <p className="text-gray-600 leading-relaxed mb-4">The savings come from every step. A biodegradable casket or shroud costs a fraction of a traditional casket. Skipping embalming saves $500 to $1,000. Eliminating the vault saves another $1,000 to $3,000. Plots in natural burial grounds are often less expensive than those in traditional cemeteries.</p>
              <p className="text-gray-600 leading-relaxed">For families managing tight budgets, green burial offers a way to provide a respectful, meaningful burial without the financial burden that comes with conventional funeral practices.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Find a Green Burial Cemetery</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The Green Burial Council maintains a directory of certified green burial providers across the country. You can search by state to find cemeteries, funeral homes, and product providers that meet their standards. Many conventional cemeteries have also begun offering green sections, so it is worth calling local cemeteries to ask.</p>
              <p className="text-gray-600 leading-relaxed mb-4">When evaluating a green burial cemetery, ask about their land management practices, what containers they allow, whether they use GPS marking, and whether the land is protected by a conservation easement. Not all green cemeteries are equal, and the details matter.</p>
              <p className="text-gray-600 leading-relaxed">If you are planning ahead, visiting the site in person can help you understand what the experience will be like. Many natural burial grounds are beautiful, peaceful places that feel very different from a traditional cemetery.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/burial-vs-cremation" className="text-slate-600 hover:text-slate-800 font-medium">Burial vs. Cremation: How to Decide</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step-by-Step</Link></li>
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
