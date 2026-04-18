import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What to Wear to a Funeral: Dress Code Guide for 2026',
  description: 'Most funerals call for dark, conservative clothing but dress codes vary by service type and culture. Here is exactly what to wear and what to avoid.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/what-to-wear-to-a-funeral' },
};

const faqs = [
  { q: 'Is it okay to wear colors other than black to a funeral?', a: 'Yes, it is generally acceptable to wear dark, muted colors such as navy, charcoal, dark green, or deep burgundy. Some celebrations of life even encourage bright colors. The key is to consider the tone of the service and the wishes of the family. When in doubt, darker tones are always a safe choice.' },
  { q: 'Can you wear jeans to a funeral?', a: 'Jeans are usually not appropriate for a traditional funeral service. However, if the family has specifically requested casual attire or the service is an informal memorial, clean dark jeans paired with a nice top or blazer can be acceptable. Always err on the side of dressing up rather than down.' },
  { q: 'What should you wear to a casual memorial service?', a: 'For a casual memorial service, business casual is a safe approach. Think slacks or a skirt with a blouse or collared shirt. Avoid athletic wear, flip flops, and graphic tees. Even when the invitation says casual, it is still important to look put together out of respect for the deceased and their family.' },
  { q: 'Do children need to dress up for a funeral?', a: 'Children do not need to wear formal attire, but they should be dressed neatly and in subdued colors. A clean polo shirt with khakis or a simple dress works well. Avoid clothing with loud patterns, cartoon characters, or bright neon colors. Comfort is important since children may become restless during the service.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function WhatToWearToAFuneralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What to Wear to a Funeral: Dress Code Guide for 2026</h1>
              <p className="text-xl text-gray-600 mb-4">Most funerals call for dark, conservative clothing, but the right outfit depends on the type of service, the cultural context, and the family&apos;s wishes.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-600 leading-relaxed mb-4">The short answer is that dark, conservative clothing is appropriate for most funeral services. Black remains the standard, but navy, charcoal, and other muted tones are widely accepted as well.</p>
              <p className="text-gray-600 leading-relaxed">That said, funeral dress codes have shifted significantly in recent years. Celebrations of life, outdoor memorials, and culturally specific services each come with their own expectations. This guide covers what to wear for every common type of funeral or memorial service so you can show up looking respectful and feeling confident.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Traditional Funeral Attire for Men</h2>
              <p className="text-gray-600 leading-relaxed mb-4">For a traditional funeral, men should wear a dark suit or at minimum dress slacks with a collared shirt. A tie is appropriate but not always required. Stick with solid colors or very subtle patterns, and choose dark shoes such as black or dark brown leather dress shoes.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If you do not own a suit, a dark sport coat with dress pants works well. The goal is to look polished and respectful without drawing attention to yourself. Avoid bright colors, flashy accessories, and casual footwear like sneakers or sandals.</p>
              <p className="text-gray-600 leading-relaxed">In warmer climates or during summer months, a dark dress shirt with slacks is acceptable if the service is not highly formal. Remove hats when entering the building, and keep jewelry minimal.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Traditional Funeral Attire for Women</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Women have more flexibility in funeral attire, but the same principles apply: keep it dark, conservative, and understated. A black or dark dress, a pantsuit, or a skirt with a blouse are all appropriate choices. Hemlines should be at or below the knee, and necklines should be modest.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Closed-toe shoes are preferred, especially if the service includes a graveside portion. Heels are fine for indoor services, but consider bringing flats for outdoor settings where you may be walking on grass or uneven ground.</p>
              <p className="text-gray-600 leading-relaxed">Keep jewelry simple and avoid anything that jingles or draws attention. A small handbag is appropriate. If the weather is cool, a dark cardigan or blazer is a good layering piece that keeps the overall look polished.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Wear to a Celebration of Life</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Celebrations of life are typically less formal than traditional funerals, and the family may specify a dress code on the invitation. Some families ask guests to wear the deceased&apos;s favorite color, sports team gear, or bright clothing to reflect the personality of the person being honored.</p>
              <p className="text-gray-600 leading-relaxed mb-4">If no dress code is specified, business casual in muted or neutral tones is a safe default. Think of it as one step up from what you would wear to a nice restaurant. You want to look put together without being overly formal.</p>
              <p className="text-gray-600 leading-relaxed">When the family does request something specific, honor that request. Wearing a Hawaiian shirt to a celebration of life for someone who loved the beach is not disrespectful. It is exactly what the family wants and a meaningful way to participate in the tribute.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Wear to an Outdoor Graveside Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Graveside services present practical challenges that indoor funerals do not. You will be standing on grass, possibly on uneven terrain, and exposed to the elements. Dress with the same level of formality you would for an indoor service, but make practical adjustments.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Wear shoes with flat or low heels that will not sink into soft ground. In cold weather, bring a dark overcoat. In rain, carry an umbrella, preferably black or dark colored. Sunglasses are acceptable in bright conditions, but remove them if you are speaking to the family directly.</p>
              <p className="text-gray-600 leading-relaxed">For summer graveside services, lighter fabrics are fine as long as the colors remain dark or muted. Bring water if the service is expected to be long, and consider wearing sunscreen. Comfort matters because fidgeting from discomfort can be distracting during a solemn moment.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Children Should Wear</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Children should be dressed neatly and in subdued colors, but they do not need to wear formal attire. A collared shirt with khakis works for boys, and a simple dress or skirt with a blouse works for girls. The most important thing is that the child is comfortable so they can sit through the service without becoming overly restless.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Avoid clothing with cartoon characters, bright neon colors, or loud patterns. Dark sneakers or clean dress shoes are both fine. If the child is very young, comfort takes priority over formality. No one will judge a toddler for not wearing a suit.</p>
              <p className="text-gray-600 leading-relaxed">For teenagers, the same guidelines as adults apply. This can be a good opportunity to teach them about appropriate dress for solemn occasions, but keep the conversation gentle and focused on respect rather than rigid rules.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Not to Wear</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Regardless of the type of service, some clothing choices are almost always inappropriate. Avoid athletic wear, including yoga pants, gym shorts, and running shoes. Skip graphic tees, clothing with logos or slogans, and anything that is visibly worn out or stained.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Revealing clothing is not appropriate for a funeral. This includes very short skirts, low-cut tops, and sheer fabrics. The focus of the day should be on the person who has passed, not on any individual guest&apos;s appearance.</p>
              <p className="text-gray-600 leading-relaxed">Strong perfume or cologne should also be avoided, as funeral homes and chapels are enclosed spaces and many people are sensitive to fragrances. Keep accessories minimal and avoid anything that makes noise, such as bangle bracelets or large earrings that might clink together.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step-by-Step Guide</Link></li>
                <li><Link href="/blog/funeral-etiquette-guide" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Etiquette Guide</Link></li>
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
