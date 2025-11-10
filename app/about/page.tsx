'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
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
              <Link href="/about" className="text-teal-600 font-semibold">About Us</Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-teal-600 font-medium transition">How It Works</Link>
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
              <Link href="/about" className="block px-3 py-2 bg-teal-50 text-teal-600 rounded-md font-semibold">About Us</Link>
              <Link href="/how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">How It Works</Link>
              <Link href="/resources" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">Resources</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Evermore Directory</h1>
          <p className="text-xl text-gray-600">
            Helping families find compassionate care during life's most difficult moments
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Evermore Directory, we understand that losing a loved one is one of life's most challenging experiences. Our mission is to provide families across America with a comprehensive, easy-to-use resource for finding funeral homes and memorial services that will honor their loved ones with dignity and compassion.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We believe that every family deserves access to quality funeral care, regardless of where they live. That's why we've created the most complete directory of funeral homes spanning all 50 states, making it easier for you to find the right services when you need them most.
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Do</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Evermore Directory serves as a trusted bridge between families in need and compassionate funeral service providers. We provide:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                <svg className="h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Comprehensive Listings:</span>
                <span className="text-gray-700"> Detailed information about funeral homes, including services offered, contact information, and location details</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                <svg className="h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Easy Search Tools:</span>
                <span className="text-gray-700"> Search by location, services, or specific needs to find the perfect match for your family</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                <svg className="h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Verified Information:</span>
                <span className="text-gray-700"> All listings are carefully verified to ensure accuracy and reliability</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-1">
                <svg className="h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Educational Resources:</span>
                <span className="text-gray-700"> Helpful guides and information to assist you in making informed decisions</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Our Values */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="text-teal-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Compassion</h3>
              <p className="text-gray-700 text-sm">
                We approach every family's situation with empathy, understanding, and genuine care
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Accuracy</h3>
              <p className="text-gray-700 text-sm">
                We maintain the highest standards of accuracy in all our listings and information
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-green-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-700 text-sm">
                We're committed to providing resources and support throughout your journey
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Evermore Directory</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            During one of life's most difficult times, you need a resource you can trust. Evermore Directory stands apart by offering:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>The most comprehensive funeral home directory covering all 50 states</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>Up-to-date, verified contact information and service details</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>An easy-to-use search interface designed with families in mind</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>Free access to all listings with no hidden fees</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              <span>Educational resources to help guide your decisions</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Find the Right Funeral Home?
          </h2>
          <p className="text-white mb-6">
            Start your search today and find compassionate care for your family
          </p>
          <Link 
            href="/search"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Search Now
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
