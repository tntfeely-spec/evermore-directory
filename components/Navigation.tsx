'use client';
import { useState } from 'react';
import Link from 'next/link';

const resourceLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/funeral-costs', label: 'Funeral Costs by State' },
  { href: '/veteran-burial-benefits', label: 'Veteran Burial Benefits' },
  { href: '/obituary-maker', label: 'Free AI Obituary Maker' },
  { href: '/blog/obituary-template', label: 'Free Obituary Templates' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center text-slate-800 dark:text-slate-100" aria-label="Evermore Funeral Home Directory">
            <svg width="280" height="90" viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
              <line x1="160" y1="72" x2="520" y2="72" stroke="#cbd5e1" strokeWidth="0.5"/>
              <text x="340" y="130" fontFamily="Georgia, 'Times New Roman', serif" fontSize="62" fontWeight="400" textAnchor="middle" letterSpacing="3" fill="currentColor">Evermore</text>
              <line x1="160" y1="152" x2="318" y2="152" stroke="#cbd5e1" strokeWidth="0.5"/>
              <polygon points="340,144 348,152 340,160 332,152" fill="#cbd5e1"/>
              <line x1="362" y1="152" x2="520" y2="152" stroke="#cbd5e1" strokeWidth="0.5"/>
              <text x="340" y="185" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontSize="11" fontWeight="400" textAnchor="middle" letterSpacing="0.18em" fill="#64748b">FUNERAL HOME DIRECTORY</text>
            </svg>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Home</Link>
            <Link href="/states" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Browse States</Link>
            <Link href="/blog" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Blog</Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-slate-600 font-medium transition-colors flex items-center gap-1">
                Resources
                <svg className="w-3.5 h-3.5 mt-0.5 text-gray-400 group-hover:text-slate-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-56">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 hover:text-slate-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors">
              Home
            </Link>
            <Link href="/states" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors">
              Browse States
            </Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors">
              Blog
            </Link>

            {/* Mobile Resources Accordion */}
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors"
            >
              Resources
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {resourcesOpen && (
              <div className="pl-4 space-y-1">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 rounded-md text-gray-600 hover:text-slate-600 hover:bg-gray-50 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
