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
            <div className="mb-20">
              <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Trusted by families nationwide</p>
              <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-2">Everything you need to make the right choice</h2>
              <p className="text-center text-gray-500 mb-12 text-sm">Free for families. No pressure. No popups.</p>

              <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
                <div className="flex flex-col items-center gap-3 flex-1 max-w-xs mx-auto bg-slate-100 border border-slate-300 rounded-2xl p-8">
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="72" height="72" rx="14" fill="#cbd5e1"/>
                    <rect x="6" y="6" width="60" height="60" rx="4" fill="#f1f5f9"/>
                    <line x1="6" y1="14" x2="66" y2="14" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="6" y1="22" x2="66" y2="22" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="6" y1="30" x2="66" y2="30" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="6" y1="38" x2="66" y2="38" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="6" y1="46" x2="66" y2="46" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="6" y1="54" x2="66" y2="54" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="14" y1="6" x2="14" y2="66" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="22" y1="6" x2="22" y2="66" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="30" y1="6" x2="30" y2="66" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="38" y1="6" x2="38" y2="66" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="46" y1="6" x2="46" y2="66" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="54" y1="6" x2="54" y2="66" stroke="#64748b" strokeWidth=".5"/>
                    <line x1="6" y1="30" x2="66" y2="30" stroke="#1e293b" strokeWidth="1.5"/>
                    <line x1="38" y1="6" x2="38" y2="66" stroke="#1e293b" strokeWidth="1.5"/>
                    <line x1="6" y1="22" x2="66" y2="22" stroke="#334155" strokeWidth="2"/>
                    <line x1="22" y1="6" x2="22" y2="66" stroke="#334155" strokeWidth="2"/>
                    <line x1="54" y1="6" x2="54" y2="66" stroke="#334155" strokeWidth="2"/>
                    <line x1="6" y1="46" x2="66" y2="46" stroke="#334155" strokeWidth="2"/>
                    <path d="M6 18 Q20 15 35 20 Q50 25 66 18" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M6 42 Q22 38 42 44 Q54 47 66 42" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="24" cy="28" r="2.5" fill="#1e293b"/>
                    <circle cx="47" cy="36" r="2.5" fill="#1e293b"/>
                    <path d="M36 16 C36 12 30 12 30 16 C30 20 36 24 36 24 C36 24 42 20 42 16 C42 12 36 12 36 16Z" fill="#1e293b"/>
                    <circle cx="36" cy="16" r="1.5" fill="#f1f5f9"/>
                  </svg>
                  <span className="text-3xl font-bold text-slate-800">50</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-widest text-center">States Covered</span>
                </div>

                <div className="flex flex-col items-center gap-3 flex-1 max-w-xs mx-auto bg-slate-100 border border-slate-300 rounded-2xl p-8">
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="72" height="72" rx="14" fill="#cbd5e1"/>
                    <rect x="18" y="30" width="36" height="23" rx="1.5" fill="#94a3b8" stroke="#1e293b" strokeWidth="1.5"/>
                    <path d="M13 32 L36 15 L59 32" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                    <rect x="28" y="40" width="10" height="13" rx="1" fill="#1e293b" opacity=".85"/>
                    <rect x="19" y="35" width="9" height="7" rx=".75" fill="none" stroke="#1e293b" strokeWidth="1.2"/>
                    <rect x="44" y="35" width="9" height="7" rx=".75" fill="none" stroke="#1e293b" strokeWidth="1.2"/>
                    <path d="M36 15 L36 10" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="36" cy="9" r="2.5" fill="#1e293b"/>
                    <path d="M18 53 L54 53" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round"/>
                    <line x1="32" y1="40" x2="33" y2="44" stroke="#1e293b" strokeWidth=".75" opacity=".5"/>
                    <line x1="36" y1="40" x2="36" y2="44" stroke="#1e293b" strokeWidth=".75" opacity=".5"/>
                    <line x1="39" y1="40" x2="38" y2="44" stroke="#1e293b" strokeWidth=".75" opacity=".5"/>
                  </svg>
                  <span className="text-3xl font-bold text-slate-800">4,800+</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-widest text-center">Funeral Homes Listed</span>
                </div>

                <div className="flex flex-col items-center gap-3 flex-1 max-w-xs mx-auto bg-slate-100 border border-slate-300 rounded-2xl p-8">
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="72" height="72" rx="14" fill="#cbd5e1"/>
                    <rect x="10" y="40" width="11" height="14" rx="1" fill="#94a3b8" stroke="#1e293b" strokeWidth="1.5"/>
                    <rect x="23" y="32" width="11" height="22" rx="1" fill="#94a3b8" stroke="#1e293b" strokeWidth="1.5"/>
                    <rect x="38" y="36" width="11" height="18" rx="1" fill="#94a3b8" stroke="#1e293b" strokeWidth="1.5"/>
                    <rect x="51" y="27" width="11" height="27" rx="1" fill="#94a3b8" stroke="#1e293b" strokeWidth="1.5"/>
                    <rect x="12" y="44" width="2.5" height="3" rx=".5" fill="#1e293b" opacity=".85"/>
                    <rect x="16" y="44" width="2.5" height="3" rx=".5" fill="#1e293b" opacity=".85"/>
                    <rect x="25" y="36" width="2.5" height="3" rx=".5" fill="#1e293b" opacity=".85"/>
                    <rect x="29" y="36" width="2.5" height="3" rx=".5" fill="#1e293b" opacity=".85"/>
                    <rect x="40" y="40" width="2.5" height="3" rx=".5" fill="#1e293b" opacity=".85"/>
                    <rect x="44" y="40" width="2.5" height="3" rx=".5" fill="#1e293b" opacity=".85"/>
                    <rect x="53" y="31" width="2.5" height="3" rx=".5" fill="#1e293b" opacity=".85"/>
                    <rect x="57" y="31" width="2.5" height="3" rx=".5" fill="#1e293b" opacity=".85"/>
                    <path d="M8 54 L64 54" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="44" cy="21" r="5.5" fill="none" stroke="#1e293b" strokeWidth="2"/>
                    <path d="M44 26.5 L44 32" stroke="#1e293b" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="44" cy="21" r="2" fill="#1e293b"/>
                  </svg>
                  <span className="text-3xl font-bold text-slate-800">2,082+</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-widest text-center">Cities Covered</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-3">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#cbd5e1"/><rect x="6" y="8" width="20" height="16" rx="1.5" fill="none" stroke="#1e293b" strokeWidth="1.4"/><path d="M9 12 L23 12 M9 16 L18 16 M9 20 L15 20" stroke="#1e293b" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  <p className="font-semibold text-gray-900 leading-snug">All the information you need to make a decision</p>
                  <p className="text-sm text-gray-500 leading-relaxed">Stress and worry free. Learn what services are right for your loved one without being pressured.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-3">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#cbd5e1"/><circle cx="16" cy="14" r="6" fill="none" stroke="#1e293b" strokeWidth="1.4"/><path d="M9 27 C9 22.5 23 22.5 23 27" fill="none" stroke="#1e293b" strokeWidth="1.4" strokeLinecap="round"/><path d="M13.5 14 L15.5 16 L18.5 12" stroke="#1e293b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <p className="font-semibold text-gray-900 leading-snug">Make the right choice with confidence</p>
                  <p className="text-sm text-gray-500 leading-relaxed">Compare quality photos, services, and verified information to know exactly who to trust.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-3">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#cbd5e1"/><rect x="6" y="10" width="20" height="12" rx="1.5" fill="none" stroke="#1e293b" strokeWidth="1.4"/><path d="M10 16 L14 16 M16 16 L22 16" stroke="#1e293b" strokeWidth="1.4" strokeLinecap="round"/><path d="M6 13 L26 13" stroke="#1e293b" strokeWidth="1" opacity=".4"/><circle cx="24" cy="22" r="5" fill="#f1f5f9" stroke="#1e293b" strokeWidth="1.4"/><path d="M22 22 L23.5 23.5 L26 21" stroke="#1e293b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <p className="font-semibold text-gray-900 leading-snug">Save time and money instantly</p>
                  <p className="text-sm text-gray-500 leading-relaxed">Compare funeral home prices across your area without making a single phone call.</p>
                </div>
              </div>
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
