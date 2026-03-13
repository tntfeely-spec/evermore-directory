import Link from 'next/link';

export default function Footer() {
  return (
<footer className="bg-gray-900 text-gray-300 mt-20 relative z-10">      
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

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
              <li><Link href="/resources" className="hover:text-white transition-colors">Planning Resources</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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
