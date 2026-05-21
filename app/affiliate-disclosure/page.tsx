import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | Evermore Directory',
  description: 'How Evermore Directory uses affiliate links and earns commissions.',
  alternates: { canonical: 'https://funeralhomedirectories.com/affiliate-disclosure' },
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Affiliate Disclosure</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: May 21, 2026</p>

          <div className="prose prose-lg text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800">The basics</h2>
              <p>
                Evermore Directory (funeralhomedirectories.com), operated by Colbridges Digital
                LLC, participates in affiliate programs. When you click certain links on our
                site and make a purchase, we may earn a small commission at no additional cost
                to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">Amazon Associates</h2>
              <p>
                Evermore Directory is a participant in the Amazon Services LLC Associates
                Program, an affiliate advertising program designed to provide a means for sites
                to earn advertising fees by advertising and linking to Amazon.com. As an Amazon
                Associate, we earn from qualifying purchases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">Other affiliate partners</h2>
              <p>
                We also participate in affiliate programs with other retailers and service
                providers relevant to families planning funerals or shopping for memorial and
                sympathy products. Current and past partners include Awin (which connects us
                to Etsy, Personalization Mall, and other retailers), FloristOne, and
                ShareASale-network merchants.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">How we choose what to recommend</h2>
              <p>
                Affiliate relationships do not influence which products we recommend. Our
                product reviews are based on independent research into product quality, value,
                and fit for the audience. We sometimes link to products we do not earn a
                commission on, simply because they are the best choice for a particular
                situation.
              </p>
              <p>
                If a product is featured in a review, that is an editorial decision. If we
                cannot recommend a product honestly, we leave it out of the article.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">Identifying affiliate links</h2>
              <p>
                Affiliate links on Evermore Directory carry the HTML attribute <code className="bg-gray-100 px-1 rounded text-sm">rel=&quot;sponsored&quot;</code>, which
                identifies them to search engines as commercial links. Within articles, links
                to retailers are typically styled as buttons (such as &quot;Check on Amazon&quot;) so you can
                recognize them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">Questions</h2>
              <p>
                Email <a href="mailto:contact@funeralhomedirectories.com" className="text-slate-600 hover:text-slate-800 font-medium">contact@funeralhomedirectories.com</a> with
                any questions about this disclosure or our editorial policies.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
