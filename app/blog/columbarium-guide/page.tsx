import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Columbarium: What It Is and How Niche Burial Works',
  description: 'A columbarium is a structure with small compartments called niches designed to hold cremated remains. Here is what they cost and how to purchase a niche.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/columbarium-guide' },
};

const faqs = [
  { q: 'What is a columbarium?', a: 'A columbarium is a structure designed to hold urns containing cremated remains in individual compartments called niches. Columbariums can be indoor rooms, outdoor walls, or freestanding structures in a cemetery or memorial garden. Each niche is typically sealed with a faceplate that can be engraved with the name, dates, and a brief inscription for the deceased. They provide a permanent, dignified resting place for cremated remains.' },
  { q: 'How much does a columbarium niche cost?', a: 'Columbarium niche prices range from about $500 to $5,000 or more, depending on the location, size, and position of the niche. Niches at eye level in a prominent columbarium tend to cost more than those in upper or lower rows. Indoor niches in a climate controlled building are typically more expensive than outdoor niches. The price usually includes the niche space and the faceplate, but engraving and the inurnment ceremony may cost extra.' },
  { q: 'Can you visit a columbarium?', a: 'Yes, columbariums are designed for visitation. Most cemetery and church columbariums are accessible during regular visiting hours, just like any other part of the grounds. Indoor columbariums may have specific hours of operation, but they are generally open to families and visitors during daytime hours. Many people find columbariums to be peaceful, contemplative spaces that are well suited for quiet reflection and remembrance.' },
  { q: 'What is the difference between a columbarium and a mausoleum?', a: 'A columbarium holds urns containing cremated remains in small compartments called niches. A mausoleum holds full caskets in larger compartments called crypts. Both are above ground structures that provide a permanent resting place, but they serve different types of disposition. A mausoleum crypt is much larger and more expensive than a columbarium niche because it must accommodate an entire casket and body.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function ColumbariumGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Columbarium: What It Is and How Niche Burial Works</h1>
              <p className="text-xl text-gray-600 mb-4">A guide to columbariums and columbarium niches, including types, costs, and how to select and purchase a niche for cremated remains.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is a Columbarium</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A columbarium is a structure that contains small compartments, called niches, designed to hold urns with cremated remains. The word comes from the Latin &apos;columba,&apos; meaning dove, because early Roman columbariums resembled the compartmented structures used as dovecotes. Today, columbariums serve as a dignified and space efficient way to memorialize loved ones who have been cremated.</p>
              <p className="text-gray-600 leading-relaxed">Columbariums can be found in cemeteries, churches, memorial parks, and even some funeral homes. They may be indoor rooms with climate control and soft lighting, or they may be outdoor walls set among gardens and landscaping. Each niche is sealed with a faceplate, usually made of granite, marble, bronze, or glass, that displays the name and dates of the person whose remains rest inside.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Columbarium Niches</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Columbarium niches come in several sizes and configurations to suit different needs:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li><strong>Single niches:</strong> These are designed to hold one urn and are the most common option. A standard single niche measures approximately 12 inches wide by 12 inches high by 12 inches deep, though dimensions vary by facility. They are suitable for most standard adult urns.</li>
                <li><strong>Companion niches:</strong> These larger compartments are designed to hold two urns side by side, allowing a couple to share the same niche. Companion niches are typically twice the width of a single niche and may be priced at less than double the cost of two individual niches.</li>
                <li><strong>Family niches:</strong> Some columbariums offer oversized niches that can accommodate three or more urns for an entire family. These are less common but are available at larger facilities. They provide a single location where multiple generations can be memorialized together.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">Some niches also feature a glass front panel that allows visitors to see the urn and any small mementos placed inside, such as photographs, medals, or flowers. These display niches typically cost more than standard niches with solid faceplates.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where Columbariums Are Located</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The most common locations for columbariums are cemeteries and churches. Many cemeteries have added columbarium walls or buildings in recent decades to accommodate the growing demand for cremation services. These are often situated in landscaped areas with benches and walkways that create a peaceful environment for visitors.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Churches and places of worship sometimes maintain their own columbariums, either inside the building itself or on the church grounds. This allows members to have their final resting place within their faith community. Some church columbariums are reserved for members only, while others are open to the general public.</p>
              <p className="text-gray-600 leading-relaxed">Memorial parks, which are distinct from traditional cemeteries in their garden like design, also frequently include columbariums. National and state veterans cemeteries often have columbariums available at no cost to eligible veterans and their spouses. Some newer facilities even incorporate columbariums into nature trails or meditation gardens.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What a Columbarium Niche Costs</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Columbarium niche prices range from approximately $500 to $5,000 or more. The cost depends on several factors, including the geographic location of the facility, whether the niche is indoor or outdoor, its position within the columbarium wall, and the size of the niche. Niches at eye level or in premium positions typically command the highest prices.</p>
              <p className="text-gray-600 leading-relaxed mb-4">In addition to the niche itself, there are usually fees for the faceplate engraving, which ranges from $200 to $500, and the inurnment ceremony, which may cost $200 to $500. Some facilities bundle these costs into a single price, while others itemize them separately. Annual or one time maintenance fees may also apply, particularly at private facilities.</p>
              <p className="text-gray-600 leading-relaxed">Compared to traditional ground burial, a columbarium niche is generally much less expensive. A cemetery burial plot alone can cost $1,000 to $4,000, and that does not include the cost of opening and closing the grave, the vault, or the headstone. A columbarium niche offers a permanent resting place with significantly lower total costs.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Purchase a Niche</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Purchasing a columbarium niche is similar to buying a cemetery plot. You can buy one at the time of need, when a death has already occurred, or in advance as part of preplanning. Many families purchase niches years before they are needed to lock in current pricing and ensure availability at their preferred location.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Start by visiting the columbariums in your area to see them in person. Pay attention to the setting, the condition of the facility, and the atmosphere. Ask about available positions, pricing, what is included in the cost, and any ongoing maintenance fees. Request a written price list so you can compare options.</p>
              <p className="text-gray-600 leading-relaxed">When you select a niche, you will sign a purchase agreement or license that specifies your rights to use that particular space. Read the agreement carefully, paying attention to rules about what can be placed in the niche, visiting hours, and any restrictions on the type or size of urn. Some facilities also have rules about decorating or placing items around the niche faceplate.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Columbarium vs. Cemetery Burial for Cremains</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Families who choose cremation have several options for the final placement of remains, including a columbarium niche and a traditional cemetery burial. Burying an urn in a cemetery plot is allowed at most cemeteries and gives the family a traditional headstone and gravesite to visit. However, the cost is similar to a full body burial because you still need a plot, an urn vault, and a marker.</p>
              <p className="text-gray-600 leading-relaxed mb-4">A columbarium niche provides a dedicated, above ground space that is protected from the elements and easy to locate. There is no digging required, and the remains are housed in a clean, permanent structure. Many families appreciate that a columbarium visit feels less somber than a cemetery visit and that the remains are sheltered from weather and ground conditions.</p>
              <p className="text-gray-600 leading-relaxed">The choice between these options often comes down to personal preference and budget. If your family values a traditional gravesite with a headstone, cemetery burial of the urn may feel right. If you prefer a lower cost, space efficient option with a more contemporary feel, a columbarium niche is worth considering.</p>
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
                <li><Link href="/blog/what-to-do-with-ashes-after-cremation" className="text-blue-600 hover:underline">What to Do with Ashes After Cremation</Link></li>
                <li><Link href="/blog/urns-guide" className="text-blue-600 hover:underline">Cremation Urns: Types, Costs, and How to Choose One</Link></li>
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
