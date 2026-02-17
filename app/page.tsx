import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import PremiumBanner from '@/components/PremiumBanner';
import SearchAutocomplete from '@/components/SearchAutocomplete';

export const metadata: Metadata = {
  title: 'Evermore Directory - Find Funeral Homes & Cremation Services Nationwide',
  description: 'Find compassionate funeral homes and cremation services across America.',
};

export default function HomePage() {
  return (
    <>
      <Navigation />
      <PremiumBanner />
      
      <div className="min-h-screen relative">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: 'url(/Ocean_Image.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.4
          }}
        />

        <div className="relative z-10">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Compassionate Funeral Homes Nationwide
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              The Evermore Directory connects families with trusted funeral homes and cremation services 
              across all 50 states.
            </p>

            <div className="max-w-2xl mx-auto mb-12">
              <SearchAutocomplete />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/states"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Browse All States
              </Link>
              <Link 
                href="/featured-listing"
                className="bg-white hover:bg-gray-50 text-blue-600 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl border-2 border-blue-600"
              >
                List Your Funeral Home
              </Link>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50</div>
                <div className="text-gray-600 font-semibold">States Covered</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4000+</div>
                <div className="text-gray-600 font-semibold">Funeral Homes Listed</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 font-semibold">Verified Information</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
