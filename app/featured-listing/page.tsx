import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export default function FeaturedListingPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="max-w-[1200px] mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/EVERMORE LOGO.png"
              alt="Evermore"
              width={160}
              height={80}
              className="h-20 w-auto"
            />
          </Link>
          <ul className="flex gap-8">
            <li><Link href="/" className="font-['Montserrat'] font-semibold text-[#2C3E50] hover:opacity-70 transition-opacity">Home</Link></li>
            <li><Link href="/about" className="font-['Montserrat'] font-semibold text-[#2C3E50] hover:opacity-70 transition-opacity">About Us</Link></li>
            <li><Link href="/how-it-works" className="font-['Montserrat'] font-semibold text-[#2C3E50] hover:opacity-70 transition-opacity">How It Works</Link></li>
            <li><Link href="/resources" className="font-['Montserrat'] font-semibold text-[#2C3E50] hover:opacity-70 transition-opacity">Resources</Link></li>
            <li><Link href="/contact" className="font-['Montserrat'] font-semibold text-[#2C3E50] hover:opacity-70 transition-opacity">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="relative text-white py-32 px-5 text-center"
        style={{
          background: 'url(/Evermore_funreal_home_banner.png) no-repeat center center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/45 z-[1]" />
        <div className="relative z-[2] max-w-[1200px] mx-auto">
          <h1 className="font-['Montserrat'] text-5xl font-bold mb-5" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Reach More Families
          </h1>
          <p className="text-2xl mb-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            Get featured on America&apos;s trusted funeral home directory
          </p>
          
            href="#pricing"
            className="inline-block bg-[#5D6D7E] text-white px-10 py-4 text-xl font-bold rounded-md font-['Montserrat'] transition-all hover:bg-[#4A5A6A] hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        {/* Stand Out Section */}
        <div className="bg-white rounded-lg p-12 shadow-md mb-10">
          <h2 className="font-['Montserrat'] text-4xl text-[#2C3E50] text-center font-bold mb-5">
            Stand Out from the Competition
          </h2>
          <p className="text-center text-lg text-[#5A6C7D] max-w-[800px] mx-auto mb-10 leading-relaxed">
            Featured listings receive premium placement and enhanced visibility. Get your funeral home in front of families when they need you most.
          </p>

          {/* Features Grid */}
          <h3 className="font-['Montserrat'] text-2xl text-[#2C3E50] font-bold mt-10 mb-5">What You Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
            {[
              { title: 'Featured Badge', description: 'Stand out with a prominent "FEATURED" badge that catches the eye of families searching for services in your area.' },
              { title: 'Top Placement', description: 'Your listing appears at the top of search results, ensuring maximum visibility when families need you most.' },
              { title: 'Enhanced Styling', description: 'Professional border and elevated design makes your listing immediately stand out from standard listings.' },
              { title: 'Increased Inquiries', description: 'Featured listings receive significantly more phone calls, website visits, and email inquiries from families.' },
              { title: 'Statewide Reach', description: 'Your featured listing appears across all relevant searches throughout your entire service area.' },
              { title: 'Monthly Reports', description: 'Track your performance with detailed analytics on views, clicks, and inquiries to measure your ROI.' }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-[#F5F7FA] p-9 rounded-lg border-l-4 border-[#5D6D7E] transition-all hover:bg-[#ECEFF1] hover:shadow-lg"
              >
                <h4 className="font-['Montserrat'] text-xl text-[#2C3E50] font-bold mb-3">{feature.title}</h4>
                <p className="text-[#5A6C7D] text-[15px] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Example Preview */}
          <h3 className="font-['Montserrat'] text-2xl text-[#2C3E50] font-bold mt-10 mb-5">See the Difference</h3>
          <p className="text-center text-lg text-[#5A6C7D] max-w-[800px] mx-auto mb-8 leading-relaxed">
            Here&apos;s how your listing will appear to families searching in your area:
          </p>
          
          <div className="relative bg-white border-[3px] border-[#5D6D7E] rounded-lg p-8 my-8 shadow-md">
            <div className="absolute top-4 right-4 bg-[#5D6D7E] text-white px-5 py-2 rounded font-bold text-[11px] tracking-widest">
              FEATURED
            </div>
            <div className="font-['Montserrat'] text-[22px] font-bold text-[#2C3E50] mb-3">
              Your Funeral Home Name
            </div>
            <div className="text-[#5A6C7D] mb-4 leading-normal">
              123 Main Street<br />Your City, State 12345
            </div>
            <p className="text-[#5A6C7D] my-4 leading-relaxed">
              Featured listings stand out with professional styling, premium badge placement, and top positioning in search results. Families see your funeral home first when searching for compassionate, trusted service.
            </p>
            <div className="mt-5 pt-5 border-t border-[#E8EAED]">
              <span className="text-[#4A90B8] mr-5 font-medium">📞 (555) 123-4567</span>
              <span className="text-[#4A90B8] font-medium">🌐 Visit Website</span>
            </div>
          </div>

          {/* Comparison Table */}
          <h3 className="font-['Montserrat'] text-2xl text-[#2C3E50] font-bold mt-10 mb-5">
            Standard vs Featured Comparison
          </h3>
          <table className="w-full border-collapse my-10">
            <thead>
              <tr className="bg-[#5D6D7E] text-white">
                <th className="p-5 text-left font-['Montserrat'] font-semibold">Feature</th>
                <th className="p-5 text-left font-['Montserrat'] font-semibold">Standard Listing</th>
                <th className="p-5 text-left font-['Montserrat'] font-semibold">Featured Listing</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Listed in directory', standard: true, featured: true },
                { feature: 'Contact information', standard: true, featured: true },
                { feature: 'Services offered', standard: true, featured: true },
                { feature: 'Featured badge', standard: false, featured: true },
                { feature: 'Top search placement', standard: false, featured: true },
                { feature: 'Enhanced styling', standard: false, featured: true },
                { feature: 'Priority support', standard: false, featured: true },
                { feature: 'Monthly analytics', standard: false, featured: true }
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#E8EAED] hover:bg-[#F5F7FA]">
                  <td className="p-5">{row.feature}</td>
                  <td className="p-5">{row.standard ? <span className="text-[#5D6D7E] text-2xl font-bold">✓</span> : '—'}</td>
                  <td className="p-5">{row.featured ? <span className="text-[#5D6D7E] text-2xl font-bold">✓</span> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pricing Section */}
        <div
          id="pricing"
          className="text-white py-16 px-12 rounded-lg text-center my-10 shadow-lg"
          style={{ background: 'linear-gradient(135deg, #5D6D7E 0%, #4A5A6A 100%)' }}
        >
          <h2 className="font-['Montserrat'] text-4xl font-bold mb-3">Simple, Transparent Pricing</h2>
          <p className="text-lg opacity-90 mb-5">No setup fees. No long-term contracts. Cancel anytime.</p>
          
          <div className="text-[72px] font-bold font-['Montserrat'] my-5">$99</div>
          <div className="text-2xl opacity-95 mb-5">per month</div>
          
          <p className="mt-5 text-lg">That&apos;s just <strong>$3.30 per day</strong> to reach more families.</p>
          
          {/* Signup Form - GHL Embed */}
          <div className="bg-white rounded-lg p-10 mt-10 max-w-[700px] mx-auto">
            <h3 className="text-[#2C3E50] font-['Montserrat'] text-2xl font-bold mb-5 text-center">
              Start Your Featured Listing
            </h3>
            
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/js24LxZ50to0b8i1GWuw"
              style={{ width: '100%', height: '1441px', border: 'none', borderRadius: '3px' }}
              id="inline-js24LxZ50to0b8i1GWuw"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Featured Listing Signup"
              data-height="1441"
              data-layout-iframe-id="inline-js24LxZ50to0b8i1GWuw"
              data-form-id="js24LxZ50to0b8i1GWuw"
              title="Featured Listing Signup"
            />
          </div>
          
          <p className="mt-8 text-sm opacity-80">Have questions? Call us at (615) 555-1234</p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg p-12 shadow-md">
          <h2 className="font-['Montserrat'] text-4xl text-[#2C3E50] text-center font-bold mb-10">
            Frequently Asked Questions
          </h2>
          
          {[
            {
              q: 'How long does it take to get featured?',
              a: 'Your listing can be featured within 24-48 hours of signup. We\'ll work with you to ensure all information is accurate and up-to-date.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes! There are no long-term contracts. You can cancel your featured listing at any time with 30 days notice.'
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards and ACH bank transfers. Payment is processed monthly and can be set up for automatic billing.'
            },
            {
              q: 'How do I know it\'s working?',
              a: 'You\'ll receive monthly analytics reports showing your listing views, clicks, and inquiries. Plus, you\'ll notice the increase in phone calls and website traffic.'
            },
            {
              q: 'What if I\'m not satisfied?',
              a: 'We offer a 30-day money-back guarantee. If you\'re not seeing results, we\'ll refund your first month—no questions asked.'
            },
            {
              q: 'Do you work with funeral homes of all sizes?',
              a: 'Absolutely! From independent family-owned funeral homes to larger operations, our featured listings benefit businesses of all sizes.'
            }
          ].map((faq, i) => (
            <div key={i} className="mb-8">
              <h3 className="font-['Montserrat'] text-2xl text-[#2C3E50] font-bold mt-8 mb-5">
                {faq.q}
              </h3>
              <p className="text-[#5A6C7D] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white text-center py-10 px-5 mt-16">
        <p className="my-2.5 opacity-90">&copy; 2024 Evermore Funeral Directories. All rights reserved.</p>
        <p className="my-2.5 opacity-90">
          <Link href="/privacy" className="text-white mx-2.5 hover:opacity-80">Privacy Policy</Link> | 
          <Link href="/terms" className="text-white mx-2.5 hover:opacity-80">Terms of Service</Link>
        </p>
        <p className="my-2.5 opacity-90">Providing compassionate guidance and support during difficult times.</p>
      </footer>

      {/* GHL Form Embed Script */}
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
