import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Evermore Directory | Built by a Former First Responder',
  description: 'Evermore Directory was built by Terry Feely, a former firefighter and paramedic. Free funeral home directory covering 7,395+ providers across all 50 states.',
  alternates: { canonical: 'https://funeralhomedirectories.com/about' },
  openGraph: {
    title: 'About Evermore Directory',
    description: 'Built by Terry Feely, a former firefighter and paramedic. Free for families. 7,395+ funeral homes across all 50 states.',
    url: 'https://funeralhomedirectories.com/about',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Terry Feely",
        "jobTitle": "Founder",
        "description": "Former firefighter and paramedic with firsthand experience helping families navigate end of life decisions",
        "url": "https://funeralhomedirectories.com/about",
        "worksFor": {
          "@type": "Organization",
          "name": "Evermore Directory",
          "url": "https://funeralhomedirectories.com"
        }
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Evermore Funeral Home Directory",
        "url": "https://funeralhomedirectories.com/about",
        "mainEntity": {
          "@type": "Organization",
          "name": "Evermore Directory",
          "url": "https://funeralhomedirectories.com",
          "founder": { "@type": "Person", "name": "Terry Feely" }
        }
      }) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            About Evermore Funeral Home Directory
          </h1>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built by a First Responder</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Terry Feely is the founder of Evermore Funeral Home Directory. He spent years as a firefighter and paramedic, where he regularly helped families in the immediate aftermath of a death. He watched families make major financial decisions in the worst moments of their lives, often with no price transparency and no time to compare options.
              </p>
              <p>
                That experience is why Evermore exists.
              </p>
              <p>
                Families in crisis should not have to navigate a $10,000 purchase with no information. They should not have to wonder whether they are being charged fairly. They should not have to call five funeral homes to find out what a direct cremation costs. The information should already be there, organized, clear, and free.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Evermore Is</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Evermore is a free directory of 7,395 plus funeral homes and cremation providers across all 50 states. It is built for families, not funeral homes. There is no cost to search, compare, or contact any provider listed in the directory.
              </p>
              <p>
                The directory is funded by funeral homes who pay $99 per month for a featured listing, which is placement only, not preferential treatment. Every listing in the directory, paid or unpaid, displays the same information the same way. Families pay nothing.
              </p>
              <p>
                No popups. No pressure. Built for families.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The FTC Funeral Rule requires every funeral home in the United States to provide an itemized General Price List on request. Most families do not know this. Evermore helps families compare providers, understand their rights under federal law, and make informed decisions during one of the hardest moments of their lives.
              </p>
              <p>
                Funeral planning should be as transparent as comparing hotel rooms. That is the standard Evermore is built to.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-slate-50 rounded-xl p-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-700 mb-1">7,395+</div>
                <div className="text-gray-600 text-sm">Providers Listed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-700 mb-1">50</div>
                <div className="text-gray-600 text-sm">States + DC</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-700 mb-1">$0</div>
                <div className="text-gray-600 text-sm">Cost to Families</div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Questions or feedback go to <a href="mailto:listings@funeralhomedirectories.com" className="text-slate-600 hover:text-slate-800 font-semibold">listings@funeralhomedirectories.com</a>. Terry reads every message. If something on the site does not match the promise of transparency and zero pressure, write him directly and he will fix it.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">For Funeral Home Owners</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your listing is already live. Claiming it takes 2 minutes and is free. A featured listing gives you priority placement for $99 per month with no contract.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/featured-listing" className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center">
                Learn About Featured Listings
              </Link>
            </div>
          </section>

          <div className="text-sm text-gray-500">
            <p>Evermore Directory is owned and operated by Colbridges Digital LLC, Nashville, Tennessee.</p>
          </div>
        </div>
      </main>
    </>
  );
}
