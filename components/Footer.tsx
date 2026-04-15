'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
  'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
];

export default function Footer() {
  const pathname = usePathname();
  // Hide footer on private pages
  if (pathname?.startsWith('/upgrade') || pathname?.startsWith('/portal') || pathname?.startsWith('/admin')) {
    return null;
  }

  return (
<footer className="bg-gray-900 text-gray-300 mt-20 relative z-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* State Grid */}
        <div className="mb-12 pb-10 border-b border-gray-800">
          <h4 className="text-white font-semibold mb-4">Browse All States</h4>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2 text-sm">
            {US_STATES.map((state) => (
              <Link
                key={state}
                href={`/funeral-homes/${state.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors py-1"
              >
                {state}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-3">Evermore Directory</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Free for families. Funeral homes across all 50 states. No pressure, no popups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Search</Link></li>
              <li><Link href="/states" className="hover:text-white transition-colors">Browse by State</Link></li>
              <li><Link href="/featured-listing" className="hover:text-white transition-colors">Featured Listings</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/funeral-costs" className="hover:text-white transition-colors">Funeral Costs by State</Link></li>
              <li><Link href="/veteran-burial-benefits" className="hover:text-white transition-colors">Veteran Burial Benefits</Link></li>
              <li><Link href="/obituary-maker" className="hover:text-white transition-colors">Free AI Obituary Maker</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Obituary Tools */}
          <div>
            <h4 className="text-white font-semibold mb-4">Obituary Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/obituary-maker" className="hover:text-white transition-colors">Free AI Obituary Maker</Link></li>
              <li><Link href="/blog/obituary-template" className="hover:text-white transition-colors">Free Obituary Templates</Link></li>
              <li><Link href="/blog/how-to-write-an-obituary" className="hover:text-white transition-colors">How to Write an Obituary</Link></li>
              <li><Link href="/blog/obituary-examples" className="hover:text-white transition-colors">Obituary Examples</Link></li>
            </ul>
          </div>

          {/* Eulogy Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Eulogy Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/eulogy-examples" className="hover:text-white transition-colors">Eulogy Examples</Link></li>
              <li><Link href="/blog/eulogy-template" className="hover:text-white transition-colors">Free Eulogy Template</Link></li>
              <li><Link href="/blog/how-to-write-a-eulogy" className="hover:text-white transition-colors">How to Write a Eulogy</Link></li>
              <li><Link href="/blog/short-eulogy-examples" className="hover:text-white transition-colors">Short Eulogy Examples</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-500">For funeral home inquiries:</p>
              <a
                href="mailto:listings@funeralhomedirectories.com"
                className="text-sm text-slate-500 hover:text-blue-300 transition-colors"
              >
                listings@funeralhomedirectories.com
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Evermore Directory. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built for families. Free to use.</p>
        </div>
      </div>
    </footer>
  );
}
