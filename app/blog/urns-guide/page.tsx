import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Cremation Urns: Types, Costs, and How to Choose One',
  description: 'Choosing a cremation urn is a personal decision that depends on how you plan to use or display the remains. Here is a guide to every type of urn and what each one costs.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/urns-guide' },
};

const faqs = [
  { q: 'What size urn do I need for cremated remains?', a: 'The general rule is one cubic inch of urn space for every pound of body weight. An adult who weighed 180 pounds will need an urn with a capacity of approximately 180 cubic inches. Most standard adult urns hold 200 to 220 cubic inches, which accommodates the majority of adults with room to spare. If you are unsure, ask the crematory for the exact volume of the remains before purchasing.' },
  { q: 'How much does a cremation urn cost?', a: 'Cremation urns range from about $25 for a simple cardboard or basic metal container to $3,000 or more for a handcrafted art piece or custom design. Most families spend between $75 and $350 on a standard decorative urn. Keepsake urns, which hold only a small portion of remains, typically cost $25 to $100 each. Companion urns designed for two people usually cost $150 to $500.' },
  { q: 'Can I use any container as an urn?', a: 'Yes, there is no legal requirement that cremated remains be stored in a commercially sold urn. Any container that is large enough and durable enough to hold the remains will work. Families have used wooden boxes, ceramic vases, cookie jars, ammunition cans, and handmade pottery. The key consideration is that the container should seal properly so no remains can spill out, especially during transport.' },
  { q: 'What is the difference between a keepsake urn and a full-size urn?', a: 'A full size urn is designed to hold all of the cremated remains from one person, typically 200 cubic inches or more. A keepsake urn is much smaller, usually holding only a tablespoon or two of remains. Families use keepsake urns to divide remains among multiple family members or to keep a small portion at home while placing the rest in a columbarium or scattering them.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function UrnsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Cremation Urns: Types, Costs, and How to Choose One</h1>
              <p className="text-xl text-gray-600 mb-4">A complete guide to cremation urns, including the different types available, how to pick the right size, and what you should expect to pay.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Is a Cremation Urn</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A cremation urn is a container designed to hold the cremated remains of a person after the cremation process is complete. Urns come in a wide variety of materials, shapes, and sizes, and they serve as both a practical vessel and a meaningful tribute. Some families display the urn in their home, while others use it as a temporary container before scattering or interring the remains.</p>
              <p className="text-gray-600 leading-relaxed">The word &apos;urn&apos; may bring to mind a specific image, but modern cremation urns look very different from the classical vase shape most people picture. Today&apos;s urns can resemble sculptures, picture frames, books, or natural objects like river stones. The variety available means there is something to fit every personality and every setting.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Cremation Urns</h2>
              <p className="text-gray-600 leading-relaxed mb-4">There are several categories of cremation urns, each designed for a different purpose and setting:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li><strong>Decorative urns:</strong> These are the most common type, designed to be displayed on a mantle, shelf, or in a memorial cabinet. They come in materials ranging from brass and bronze to ceramic and wood, and they are available in nearly every style imaginable. Decorative urns are meant to be a lasting tribute that fits naturally into your home.</li>
                <li><strong>Keepsake urns:</strong> Keepsake urns are small containers that hold only a portion of the cremated remains. They are ideal when a family wants to divide the remains among multiple members so that each person can keep a small remembrance. Keepsake urns are typically two to four inches tall and hold a tablespoon or two of ashes.</li>
                <li><strong>Companion urns:</strong> A companion urn is designed to hold the remains of two people, usually a married couple. These urns are larger than standard urns and feature a single exterior with two internal compartments or one large shared chamber. They allow a couple to rest together in one vessel.</li>
                <li><strong>Biodegradable urns:</strong> Made from materials like paper, sand, cornstarch, or salt, biodegradable urns are designed to break down naturally over time. They are used for water burials, earth burials, or tree planting ceremonies. Some are shaped like sea turtles or other natural forms and dissolve within hours when placed in water.</li>
                <li><strong>Scattering urns:</strong> These urns are designed specifically for releasing ashes in a meaningful location. They feature a special opening or lid mechanism that allows for a controlled, dignified scattering. Some are tube shaped for pouring, while others have a perforated top for a more gradual release.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Urn Materials and Their Differences</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The material of an urn affects its appearance, weight, durability, and price. Metal urns made from brass, bronze, or stainless steel are among the most durable and are well suited for display or burial. They resist corrosion and maintain their appearance for decades with minimal care.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Wood urns provide a warm, natural look and are available in species like cherry, walnut, oak, and mahogany. They work well for home display and for burial, though wood will eventually break down underground over many years. Ceramic and porcelain urns are often hand painted and can be true works of art, but they are fragile and require careful handling.</p>
              <p className="text-gray-600 leading-relaxed">Stone urns made from marble, granite, or onyx are heavy and extremely durable. They are a fitting choice for display or for placement in a columbarium niche. Glass urns, often handblown, can incorporate the cremated remains directly into the glass itself, creating a stunning visual effect.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Choose the Right Size</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The standard rule for choosing an urn size is one cubic inch of capacity for every pound of the person&apos;s body weight. A person who weighed 150 pounds will need an urn with at least 150 cubic inches of capacity. Most standard adult urns hold between 200 and 220 cubic inches, which is enough for the vast majority of adults.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If you are purchasing an urn before the cremation takes place, err on the side of a slightly larger container. It is better to have extra room than to find the urn is too small. If the cremation has already occurred, you can ask the crematory or funeral home for the exact volume of the remains so you can match it precisely.</p>
              <p className="text-gray-600 leading-relaxed">For keepsake urns, size matters less because they are only intended to hold a small portion of the total remains. Most keepsake urns hold between 1 and 15 cubic inches. If you plan to divide remains among several keepsake urns, make sure the total capacity of all the small urns does not exceed the total volume of remains you have.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Cremation Urns Cost</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Cremation urns span a very wide price range, from as low as $25 for a basic container to $3,000 or more for a custom or luxury piece. The temporary plastic container provided by the crematory is usually included in the cremation fee at no additional charge. A simple but attractive metal or wood urn suitable for display typically costs between $75 and $200.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Mid range urns made from higher quality materials like solid brass, hand carved wood, or cloisonne enamel generally run from $200 to $500. Premium urns, including hand blown glass, artist made ceramic pieces, and custom designs, can cost $500 to $3,000 or more. Companion urns are typically priced 50 to 100 percent more than a comparable single urn.</p>
              <p className="text-gray-600 leading-relaxed">It is worth noting that funeral homes often mark up urns significantly. You are legally entitled to use any urn you purchase from any source, and the funeral home cannot charge you a fee for using an outside container. Shopping online or at a specialty retailer can save you 30 to 60 percent compared to funeral home prices.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where to Buy a Cremation Urn</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The most common sources for cremation urns include the funeral home, online retailers, and artisan marketplaces. Funeral homes offer convenience because you can select an urn at the same time you are making other arrangements, but they typically carry a limited selection at higher prices.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Online retailers offer the widest selection and the most competitive prices. Major online urn retailers ship quickly, and many offer expedited shipping for families who need an urn within a few days. Artisan marketplaces are a good source for unique, handmade urns from individual craftspeople.</p>
              <p className="text-gray-600 leading-relaxed">Remember that the FTC Funeral Rule gives you the right to purchase an urn from any source you choose. The funeral home must accept delivery of the urn you select and cannot charge a handling fee for using a container purchased elsewhere. This protection applies to all funeral homes operating in the United States.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Biodegradable Urns for Scattering</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Biodegradable urns are designed to return to nature along with the cremated remains they hold. Water urns dissolve within minutes to hours when placed in a body of water, gently releasing the remains into the current. Earth urns break down over months when buried in soil, allowing the remains to integrate with the ground naturally.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Some biodegradable urns include a seed or seedling compartment that allows a tree or plant to grow from the burial site. These living memorial urns have become increasingly popular with families who want their loved one&apos;s remains to contribute to new growth. The species available vary by manufacturer and by region.</p>
              <p className="text-gray-600 leading-relaxed">Biodegradable urns are among the most affordable options, typically costing between $50 and $300. They are a practical choice for any family that plans to scatter remains at sea, bury them in a natural setting, or create a living memorial. If you are planning a water ceremony, check local regulations about scattering remains in public waterways before purchasing.</p>
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
                <li><Link href="/blog/cremation-jewelry" className="text-blue-600 hover:underline">Cremation Jewelry: Keeping a Loved One Close</Link></li>
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
