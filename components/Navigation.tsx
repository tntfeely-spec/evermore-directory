'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center text-slate-800 dark:text-slate-100" aria-label="Evermore Funeral Home Directory">
            <svg width="160" height="52" viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
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
            <Link href="/about" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Contact</Link>
            <Link href="/resources" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Resources</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              // X icon when open
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon when closed
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
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/states"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors"
            >
              Browse States
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/resources"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-slate-600 hover:bg-gray-50 font-medium transition-colors"
            >
              Resources
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
