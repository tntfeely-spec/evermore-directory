import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import PricingCards from '@/components/PricingCards';
import SelfServeOfferModal from '@/components/SelfServeOfferModal';


export const metadata: Metadata = {
  title: 'Featured Listing for Funeral Homes | Evermore Directory',
  description: 'Get your funeral home featured at the top of Evermore Directory. Three pricing tiers — Essential, Premier, and Exclusive. No setup fees. Cancel anytime.',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/featured-listing',
  },
};

export default function FeaturedListingPage() {
  return (
    <>
      <Navigation />
      <SelfServeOfferModal />
      <div className="min-h-screen bg-[#F5F7FA]" style={{ fontFamily: 'Inter, sans-serif' }}>

        {/* Hero */}
        <section
          className="relative text-white py-28 px-5 text-center"
          style={{
            background: 'url(/Mountain_Lake_Image.webp) no-repeat center center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-[1]" />
          <div className="relative z-[2] max-w-[900px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Reach More Families
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-95" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Get featured on America&apos;s trusted funeral home directory
            </p>
            <p className="text-lg mb-8 opacity-90">
              30-day money-back guarantee. No setup fees. Cancel anytime.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white px-10 py-4 text-xl font-bold rounded-lg transition-all whitespace-nowrap"
            >
              Get Started Today
            </a>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-5 py-16">

          {/* What You Get */}
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-md mb-10">
            <h2 className="text-3xl md:text-4xl text-[#2C3E50] text-center font-bold mb-5">
              Stand Out from the Competition
            </h2>
            <p className="text-center text-lg text-[#5A6C7D] max-w-[800px] mx-auto mb-10 leading-relaxed">
              Featured listings receive premium placement and enhanced visibility. Get your funeral home in front of families when they need you most.
            </p>

            <h3 className="text-2xl text-[#2C3E50] font-bold mt-10 mb-5">What You Get</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
              {[
                { title: 'Featured Badge', desc: 'Stand out with a prominent FEATURED badge that catches the eye of families searching for services in your area.' },
                { title: 'Top Placement', desc: 'Your listing appears at the top of search results, ensuring maximum visibility when families need you most.' },
                { title: 'Enhanced Styling', desc: 'Professional border and elevated design makes your listing immediately stand out from standard listings.' },
                { title: 'Increased Inquiries', desc: 'Featured listings receive significantly more phone calls, website visits, and email inquiries from families.' },
                { title: 'Statewide Reach', desc: 'Your featured listing appears across all relevant searches throughout your entire service area.' },
                { title: 'Monthly Reports', desc: 'Track your performance with detailed analytics on views, clicks, and inquiries to measure your ROI.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#F5F7FA] p-8 rounded-lg border-l-4 border-slate-500 hover:shadow-lg transition-all">
                  <h4 className="text-xl text-[#2C3E50] font-bold mb-3">{item.title}</h4>
                  <p className="text-[#5A6C7D] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Sample Featured Listing */}
            <h3 className="text-2xl text-[#2C3E50] font-bold mt-10 mb-5">See the Difference</h3>
            <p className="text-lg text-[#5A6C7D] max-w-[800px] mx-auto mb-8 leading-relaxed">
              Here is how your listing will appear to families searching in your area:
            </p>

            <div className="relative bg-white border-[3px] border-slate-500 rounded-lg p-8 my-8 shadow-md max-w-2xl mx-auto">
              <div className="absolute top-4 right-4 bg-slate-700 text-white px-4 py-1 rounded font-bold text-xs tracking-widest">
                FEATURED
              </div>
              <div className="text-xl font-bold text-[#2C3E50] mb-2">Nashville Family Funeral Home</div>
              <div className="text-[#5A6C7D] mb-4">123 Main Street, Nashville, TN 37201</div>
              <p className="text-[#5A6C7D] leading-relaxed mb-4">
                Serving Nashville families with compassion and care for over 40 years. Traditional funerals, direct cremation, and pre-planning services available.
              </p>
              <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-6">
                <span className="text-slate-700 font-medium">Cremation: $1,800 - $3,500</span>
                <span className="text-slate-700 font-medium">Burial: $7,000 - $12,000</span>
              </div>
            </div>

            {/* Comparison Table */}
            <h3 className="text-2xl text-[#2C3E50] font-bold mt-12 mb-5">Standard vs Featured</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse my-6">
                <thead>
                  <tr className="bg-[#2C3E50] text-white">
                    <th className="p-4 text-left font-semibold">Feature</th>
                    <th className="p-4 text-left font-semibold">Standard</th>
                    <th className="p-4 text-left font-semibold">Featured</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Listed in directory', true, true],
                    ['Contact information', true, true],
                    ['Services offered', true, true],
                    ['Featured badge', false, true],
                    ['Top search placement', false, true],
                    ['Enhanced styling', false, true],
                    ['Priority support', false, true],
                    ['Monthly analytics', false, true],
                  ].map(([feature, standard, featured]) => (
                    <tr key={String(feature)} className="border-b border-[#E8EAED] hover:bg-[#F5F7FA]">
                      <td className="p-4 text-[#2C3E50]">{String(feature)}</td>
                      <td className="p-4">{standard ? <span className="text-slate-600 text-xl font-bold">✓</span> : <span className="text-gray-300 text-xl">-</span>}</td>
                      <td className="p-4">{featured ? <span className="text-slate-600 text-xl font-bold">✓</span> : <span className="text-gray-300 text-xl">-</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing */}
          <div id="pricing" className="bg-white rounded-lg p-8 md:p-12 shadow-md my-10">
            <PricingCards />

            {/* 30-day guarantee */}
            <div className="bg-green-50 border border-green-200 rounded-lg px-8 py-5 mt-10 text-center max-w-2xl mx-auto">
              <p className="text-green-800 font-semibold text-lg">30-Day Money-Back Guarantee</p>
              <p className="text-green-700 text-sm mt-1">Not seeing results in your first month? We will refund you in full, no questions asked.</p>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Questions? Email us at{' '}
              <a href="mailto:listings@funeralhomedirectories.com" className="text-slate-700 hover:text-slate-900 underline">
                listings@funeralhomedirectories.com
              </a>
            </p>

            <div className="mt-10 max-w-[700px] mx-auto">
              <h3 className="text-[#2C3E50] text-xl font-bold mb-5 text-center">
                Have Questions? Contact Us First
              </h3>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/js24LxZ50to0b8i1GWuw"
                style={{ width: '100%', height: '1441px', border: 'none', borderRadius: '3px' }}
                id="inline-js24LxZ50to0b8i1GWuw"
                title="Featured Listing Inquiry"
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-md">
            <h2 className="text-3xl md:text-4xl text-[#2C3E50] text-center font-bold mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              {[
                { q: 'How long does it take to get featured?', a: 'Your listing can be featured within 24-48 hours of signup. We will work with you to ensure all information is accurate and up-to-date.' },
                { q: 'Can I cancel anytime?', a: 'Yes. There are no long-term contracts. You can cancel your featured listing at any time.' },
                { q: 'What payment methods do you accept?', a: 'We accept all major credit cards and ACH bank transfers. Payment is processed monthly and can be set up for automatic billing.' },
                { q: 'How do I know it is working?', a: 'You will receive monthly analytics reports showing your listing views, clicks, and inquiries. Plus, you will notice the increase in phone calls and website traffic.' },
                { q: 'What if I am not satisfied?', a: 'We offer a 30-day money-back guarantee. If you are not seeing results, we will refund your first month with no questions asked.' },
                { q: 'Do you work with funeral homes of all sizes?', a: 'Absolutely. From independent family-owned funeral homes to larger operations, our featured listings benefit businesses of all sizes.' },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-gray-100 pb-8">
                  <h3 className="text-xl text-[#2C3E50] font-bold mb-3">{faq.q}</h3>
                  <p className="text-[#5A6C7D] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct link */}
          <p className="text-center text-xs text-gray-400 mt-8">
            Direct link to this page: funeralhomedirectories.com/featured-listing
          </p>

        </div>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
