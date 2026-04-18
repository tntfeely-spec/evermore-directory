import Link from 'next/link';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'What Is a Celebration of Life Service? (2026 Guide)',
  description: 'A celebration of life is a memorial service focused on honoring who someone was rather than mourning their loss. Here is what to expect and how to plan one.',
  alternates: { canonical: 'https://funeralhomedirectories.com/blog/what-is-a-celebration-of-life' },
};

const faqs = [
  { q: 'What is the difference between a celebration of life and a funeral?', a: 'A funeral is typically a formal, structured ceremony held within days of death, often at a funeral home or house of worship. A celebration of life is less formal, can be held anywhere and at any time, and focuses on sharing memories and honoring the person rather than mourning the loss.' },
  { q: 'Do you have a body at a celebration of life?', a: 'Usually not. Most celebrations of life happen after burial or cremation. If cremation was chosen, the urn may be displayed. Some families hold a celebration of life weeks or months after the death, making the presence of a body impractical.' },
  { q: 'How long is a celebration of life service?', a: 'Most celebrations of life last 1 to 3 hours. There is no fixed format, so the length depends on the program, number of speakers, and whether a meal or reception follows.' },
  { q: 'Can you have a celebration of life with cremation?', a: 'Yes. Cremation is the most common companion to a celebration of life because it allows families to schedule the event on their own timeline rather than within the narrow window required when a body is present.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function CelebrationOfLifePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">What Is a Celebration of Life Service?</h1>
              <p className="text-xl text-gray-600 mb-4">What to expect, how it differs from a funeral, and how to plan one that honors the person you lost.</p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">By Terry Feely</span><span>|</span><span>Former Firefighter and Paramedic</span><span>|</span><span>April 2026</span>
              </div>
            </header>

            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed text-lg">A celebration of life is a memorial service focused on honoring who someone was rather than mourning their loss. It replaces the formality of a traditional funeral with personal stories, shared memories, and a tone that reflects the personality of the person being remembered.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Differs from a Traditional Funeral</h2>
              <p className="text-gray-600 leading-relaxed mb-4">A traditional funeral follows a set structure: visitation, ceremony, and burial or cremation, usually within a few days of death. A celebration of life has no fixed format or timeline. It can happen days, weeks, or even months later, at any location the family chooses.</p>
              <p className="text-gray-600 leading-relaxed">The tone is typically uplifting. Where funerals tend to be solemn, celebrations of life encourage laughter, storytelling, and shared memories. There is no requirement for a religious officiant, formal readings, or a specific order of events.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Typically Happens at a Celebration of Life</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Every celebration of life is different, but common elements include open-microphone storytelling, photo displays or slideshows, the person&apos;s favorite music, a shared meal, and sometimes activities that reflect their hobbies or passions.</p>
              <p className="text-gray-600 leading-relaxed">Some families set up memory tables with personal items, create video tributes, or organize activities like a group walk, a toast, or a balloon or lantern release. The goal is to make the gathering feel like the person being honored would have wanted.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Plan a Celebration of Life</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Choose a venue: a home, park, restaurant, community center, or any place meaningful to the person.</li>
                <li>Set the date: there is no rush. Pick a time that allows family and friends to attend.</li>
                <li>Decide on format: open mic, structured program, or casual gathering. All work.</li>
                <li>Gather photos, music, and personal items that tell the person&apos;s story.</li>
                <li>Assign a point person to welcome guests and guide the flow of the event.</li>
                <li>Arrange food and drinks. Catering, potluck, or a restaurant all work depending on the group.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Much Does a Celebration of Life Cost</h2>
              <p className="text-gray-600 leading-relaxed">Costs vary widely because there are no fixed requirements. A backyard gathering with potluck food can cost almost nothing. A rented venue with catering, decorations, and a video tribute might run $1,000 to $5,000. The flexibility is one of the main advantages over a traditional funeral.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Is a Celebration of Life Right for Your Family</h2>
              <p className="text-gray-600 leading-relaxed">A celebration of life works well for families who want something personal, flexible, and focused on the life that was lived rather than the loss. It is especially common when cremation is chosen, since there is no timeline pressure. If the person you lost was informal, social, or would have wanted their service to feel more like a gathering of friends, this may be the right fit.</p>
            </section>

            <section className="mb-10 bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
              <div className="space-y-6">{faqs.map(f => (<div key={f.q}><h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3><p className="text-gray-600 leading-relaxed">{f.a}</p></div>))}</div>
            </section>

            <section className="mb-10 bg-slate-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Reading</h2>
              <ul className="space-y-2">
                <li><Link href="/blog/traditional-vs-celebration-of-life" className="text-slate-600 hover:text-slate-800 font-medium">Traditional Funeral vs. Celebration of Life</Link></li>
                <li><Link href="/blog/how-to-plan-a-funeral" className="text-slate-600 hover:text-slate-800 font-medium">How to Plan a Funeral: Step-by-Step</Link></li>
                <li><Link href="/blog/how-to-write-an-obituary" className="text-slate-600 hover:text-slate-800 font-medium">How to Write an Obituary</Link></li>
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
