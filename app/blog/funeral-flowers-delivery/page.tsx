import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Funeral Flowers Delivery: How to Order and What to Send',
  description: 'Sending funeral flowers is a meaningful way to show support. Here is how to order funeral flower delivery, what to send, when to send it, and how much to spend.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/funeral-flowers-delivery' },
};

const faqs = [
  { q: 'Can you send flowers directly to a funeral home?', a: 'Yes. Most funeral homes accept flower deliveries on behalf of the family. When ordering, include the name of the deceased, the date and time of the service, and the funeral home name and address. Call the funeral home in advance if you are unsure about delivery instructions or timing.' },
  { q: 'How much should you spend on funeral flowers?', a: 'Most people spend $50 to $150 on a sympathy arrangement. A simple bouquet or plant starts around $30 to $50. Standing sprays and larger arrangements typically run $100 to $250 or more. The amount you spend matters far less than the gesture itself.' },
  { q: 'What flowers are most appropriate for a funeral?', a: 'Lilies are the most traditional funeral flower, symbolizing the return of the soul to peace. White roses represent reverence and respect. Carnations, chrysanthemums, and gladioli are also commonly used. There is no wrong flower to send as long as the arrangement is respectful.' },
  { q: 'How do you order funeral flowers online?', a: 'Choose a national florist service or a local florist in the city where the service is being held. Enter the funeral home address as the delivery location, include the name of the deceased on the card, and select a delivery date that is one day before or the morning of the service. Most online florists offer same day or next day delivery.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function FuneralFlowersDeliveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Funeral Flowers Delivery: How to Order and What to Send</h1>
              <p className="text-xl text-gray-600 mb-4">A practical guide to ordering, timing, and choosing the right arrangement.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">Sending funeral flowers is one of the most meaningful ways to show support when someone loses a loved one. Whether you are ordering from across the country or from a local florist, getting the timing, arrangement type, and card message right makes the gesture count.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When to Send Funeral Flowers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The best time to send funeral flowers is the day before or the morning of the visitation or service. This gives the funeral home staff time to set up the arrangements before guests arrive. If you miss the service, sending flowers or a plant to the family&apos;s home in the days or weeks afterward is still a welcome and appropriate gesture.</p>
              <p className="text-gray-600 leading-relaxed">Avoid sending flowers to the family&apos;s home on the day of the service itself, as the family will likely be at the funeral home or church. If the obituary says &quot;in lieu of flowers, please donate to...&quot; you should respect that request and make a donation instead.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Order Funeral Flower Delivery Online</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Ordering funeral flowers online is straightforward. Choose a national florist service or search for a local florist in the city where the service is being held. Local florists often provide fresher arrangements and more flexible delivery windows than national chains.</p>
              <p className="text-gray-600 leading-relaxed mb-4">When placing your order, you will need the funeral home name and full address, the name of the deceased, the date and time of the service, and what you would like written on the card. Most online florists offer same day delivery if you order before noon, and next day delivery is nearly always available.</p>
              <p className="text-gray-600 leading-relaxed">Confirm the delivery date carefully. If the visitation is on Thursday evening and the funeral is on Friday morning, having flowers arrive Thursday afternoon is ideal.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Write on the Card</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Keep the card message short and sincere. A few examples:</p>
              <div className="space-y-3">
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;With deepest sympathy. Thinking of your family during this time.&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;In loving memory of [name]. With love, [your name].&quot;</blockquote>
                <blockquote className="bg-gray-50 rounded-lg p-4 text-gray-700 italic border-l-4 border-slate-300">&quot;[Name] will be deeply missed. Our hearts are with you.&quot;</blockquote>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Funeral Flower Arrangements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Standing spray:</strong> A large arrangement displayed on an easel near the casket. Typically sent by close family, employers, or organizations. $100 to $300.</li>
                <li><strong>Casket spray:</strong> An arrangement placed on top of the casket. Usually ordered by the immediate family. $150 to $500.</li>
                <li><strong>Bouquet or vase arrangement:</strong> A smaller arrangement displayed on a table at the service. The most common choice for friends and extended family. $50 to $150.</li>
                <li><strong>Basket arrangement:</strong> A handled basket with flowers, easy to transport to the family&apos;s home after the service. $50 to $125.</li>
                <li><strong>Sympathy plant:</strong> A live plant that lasts longer than cut flowers and can be planted in a garden. $30 to $100.</li>
                <li><strong>Wreath:</strong> A circular arrangement symbolizing eternal life. Displayed on an easel or placed at the gravesite. $75 to $200.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Much to Spend on Funeral Flowers</h2>
              <p className="text-gray-600 leading-relaxed">Most people spend $50 to $150 on a sympathy flower arrangement. Close friends and family often spend $100 to $200. Coworkers and acquaintances typically spend $40 to $75, and group arrangements from an office or organization commonly run $75 to $200. The amount you spend is far less important than the fact that you sent something at all.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sending Flowers to the Funeral Home vs the Family Home</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If you want the flowers displayed at the service, send them to the funeral home. If you want the family to enjoy them at home afterward, send them to the family&apos;s home address a few days after the service. Many families appreciate receiving flowers at home during the quiet weeks after the funeral when the initial outpouring of support has faded.</p>
              <p className="text-gray-600 leading-relaxed">If sending to the funeral home, always include the name of the deceased on the delivery label so the staff knows which service the flowers are for.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Far in Advance to Order</h2>
              <p className="text-gray-600 leading-relaxed">Order as soon as you learn the details of the service. One to two days in advance is ideal. Same day delivery is available from most florists if you order before noon, but earlier ordering gives the florist more time to prepare a fresh, well crafted arrangement.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Send Instead of Flowers</h2>
              <p className="text-gray-600 leading-relaxed">If the family has requested no flowers, consider a meal delivery, a charitable donation in the deceased&apos;s name, a sympathy gift basket, a memorial plant or tree, or a handwritten card. All of these are meaningful alternatives that show you care. For more ideas, see our guide on <Link href="/blog/sympathy-gift-ideas" className="text-slate-600 hover:text-slate-800 underline">sympathy gift ideas</Link>.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map(f => (
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
                <li><Link href="/blog/funeral-flowers-guide" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Flowers: What to Send and What They Mean</Link></li>
                <li><Link href="/blog/donations-at-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">Donations at a Funeral: How to Request and Handle Them</Link></li>
              </ul>
            </section>

            <section className="mt-16 bg-slate-50 border-t border-slate-100 py-10 -mx-4 px-4 text-center">
              <p className="text-lg font-semibold text-slate-700 mb-2">Find funeral homes in your area</p>
              <p className="text-slate-600 text-sm mb-5">Search 5,100+ funeral homes and cremation providers across all 50 states. Compare prices, services, and locations. Free for families.</p>
              <Link href="/states" className="inline-block bg-slate-700 text-white px-6 py-3 rounded hover:bg-slate-800 transition-colors font-medium">Browse Funeral Homes Near You</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
