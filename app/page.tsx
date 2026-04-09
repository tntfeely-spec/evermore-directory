import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

import SearchAutocomplete from '@/components/SearchAutocomplete';
import HomeQuiz from '@/components/HomeQuiz';

export const metadata: Metadata = {
  title: 'Evermore Directory - Find Funeral Homes & Cremation Services Nationwide',
  description: 'Find compassionate funeral homes and cremation services across America.',
};

export default function HomePage() {
  return (
    <>
      <Navigation />

      
      <div className="min-h-screen relative">
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: 'url(/Ocean_Image.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.35
          }}
        />

        <div className="relative z-10">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Find and Compare Funeral Homes Nationwide
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto mb-8 leading-relaxed">
              Compare 4,800+ funeral homes and cremation services across all 50 states. Search by city or ZIP code to find and compare local funeral directors, burial options, direct cremation providers, and pricing near you. Free for families. No pressure.
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <SearchAutocomplete />
            </div>

            <div className="max-w-2xl mx-auto mb-10">
              <HomeQuiz />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/states"
                className="bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Browse All States
              </Link>
              <Link 
                href="/featured-listing"
                className="bg-white hover:bg-gray-50 text-slate-600 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl border-2 border-slate-500"
              >
                List Your Funeral Home
              </Link>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <Link href="/states" className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-4xl font-bold text-slate-600 mb-2">50</div>
                <div className="text-gray-600 font-semibold">States Covered</div>
              </Link>
              <Link href="/states" className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-4xl font-bold text-slate-600 mb-2">4,800+</div>
                <div className="text-gray-600 font-semibold">Funeral Homes Listed</div>
              </Link>
              <Link href="/states" className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-4xl font-bold text-slate-600 mb-2">2,082+</div>
                <div className="text-gray-600 font-semibold">Cities Covered</div>
              </Link>
            </div>

            <div className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Browse Top Cities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
                {[
                  { city: 'New York', state: 'NY', slug: 'ny/new-york' },
                  { city: 'Los Angeles', state: 'CA', slug: 'ca/los-angeles' },
                  { city: 'Chicago', state: 'IL', slug: 'il/chicago' },
                  { city: 'Houston', state: 'TX', slug: 'tx/houston' },
                  { city: 'Phoenix', state: 'AZ', slug: 'az/phoenix' },
                  { city: 'Philadelphia', state: 'PA', slug: 'pa/philadelphia' },
                  { city: 'San Antonio', state: 'TX', slug: 'tx/san-antonio' },
                  { city: 'San Diego', state: 'CA', slug: 'ca/san-diego' },
                  { city: 'Dallas', state: 'TX', slug: 'tx/dallas' },
                  { city: 'San Jose', state: 'CA', slug: 'ca/san-jose' },
                  { city: 'Austin', state: 'TX', slug: 'tx/austin' },
                  { city: 'Jacksonville', state: 'FL', slug: 'fl/jacksonville' },
                  { city: 'Fort Worth', state: 'TX', slug: 'tx/fort-worth' },
                  { city: 'Columbus', state: 'OH', slug: 'oh/columbus' },
                  { city: 'Charlotte', state: 'NC', slug: 'nc/charlotte' },
                ].map((c) => (
                  <Link
                    key={c.slug}
                    href={`/funeral-homes/${c.slug}`}
                    className="bg-white rounded-lg border border-gray-200 px-4 py-3 text-center text-gray-700 hover:text-slate-700 hover:border-slate-400 hover:shadow-sm transition-all font-medium"
                  >
                    {c.city}, {c.state}
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link href="/states" className="text-slate-600 hover:text-slate-800 font-semibold">
                  View all states →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
