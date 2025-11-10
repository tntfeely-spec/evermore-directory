'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HowItWorksPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/Ocean_Image.png)' }}>
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/EVERMORE_LOGO.png" alt="Evermore" className="h-10 w-auto" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium transition">About Us</Link>
              <Link href="/how-it-works" className="text-teal-600 font-semibold">How It Works</Link>
              <Link href="/resources" className="text-gray-700 hover:text-teal-600 font-medium transition">Resources</Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium transition">Contact</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-teal-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">Home</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">About Us</Link>
              <Link href="/how-it-works" className="block px-3 py-2 bg-teal-50 text-teal-600 rounded-md font-semibold">How It Works</Link>
              <Link href="/resources" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">Resources</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">How Evermore Directory Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finding the right funeral home for your family is simple and straightforward. Follow these four easy steps to get started.
          </p>
        </div>

        {/* 4-Step Process */}
        <div className="space-y-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-3 bg-gradient-to-br from-teal-500 to-teal-600 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">1</div>
                  <div className="text-white font-semibold text-lg">Search</div>
                </div>
              </div>
              <div className="lg:col-span-9 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Start Your Search</h3>
                <p className="text-gray-700 mb-4">
                  Begin by entering your location or the location where you need services. You can search by city, state, or zip code. Our comprehensive database includes funeral homes across all 50 states.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Search by city, state, or zip code</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Filter by specific services you need</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Browse all available funeral homes in your area</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link 
                    href="/search"
                    className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Start Searching
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-3 bg-gradient-to-br from-blue-500 to-blue-600 p-8 flex items-center justify-center lg:order-last">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">2</div>
                  <div className="text-white font-semibold text-lg">Compare</div>
                </div>
              </div>
              <div className="lg:col-span-9 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Review and Compare Options</h3>
                <p className="text-gray-700 mb-4">
                  Browse through detailed listings to find funeral homes that meet your specific needs. Each listing includes comprehensive information to help you make an informed decision.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>View contact information and location details</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>See what services each funeral home offers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Compare multiple options side by side</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Check price ranges to fit your budget</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-3 bg-gradient-to-br from-green-500 to-green-600 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">3</div>
                  <div className="text-white font-semibold text-lg">Connect</div>
                </div>
              </div>
              <div className="lg:col-span-9 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Reach Out Directly</h3>
                <p className="text-gray-700 mb-4">
                  Once you've identified funeral homes that fit your needs, contact them directly. We provide verified contact information to ensure you can reach the right people quickly.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Call directly using provided phone numbers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Visit funeral home websites for more details</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Schedule consultations or visits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ask questions about services and pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-3 bg-gradient-to-br from-purple-500 to-purple-600 p-8 flex items-center justify-center lg:order-last">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">4</div>
                  <div className="text-white font-semibold text-lg">Decide</div>
                </div>
              </div>
              <div className="lg:col-span-9 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Make Your Choice</h3>
                <p className="text-gray-700 mb-4">
                  After speaking with funeral homes and gathering information, choose the provider that best meets your family's needs. You can feel confident knowing you've made an informed decision.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Select the funeral home that fits your needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Coordinate services and arrangements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Work with professionals who understand your needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Honor your loved one with dignity and compassion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help Getting Started?</h3>
            <p className="text-gray-700 mb-6">
              Our resources page provides helpful guides on funeral planning, understanding costs, and making important decisions during difficult times.
            </p>
            <Link 
              href="/resources"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              View Resources
            </Link>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              Our team is here to help. If you have any questions about using Evermore Directory or need assistance, don't hesitate to reach out.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin?
          </h2>
          <p className="text-xl text-white mb-8">
            Start your search for the perfect funeral home today
          </p>
          <Link 
            href="/search"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Search Funeral Homes Now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Evermore Directory</h3>
              <p className="text-gray-400">Your trusted resource for finding compassionate funeral care nationwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/search" className="text-gray-400 hover:text-white transition">Search</Link></li>
                <li><Link href="/states" className="text-gray-400 hover:text-white transition">Browse by State</Link></li>
                <li><Link href="/featured-listing" className="text-gray-400 hover:text-white transition">Featured Listings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition">How It Works</Link></li>
                <li><Link href="/resources" className="text-gray-400 hover:text-white transition">Planning Resources</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Evermore Directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
