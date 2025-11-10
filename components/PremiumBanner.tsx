'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PremiumBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <span className="text-2xl">🌟</span>
          <p className="text-sm md:text-base font-medium">
            <span className="font-bold">Funeral Home Owners:</span> Get Featured in Our Directory - Reach More Families
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="/featured-listing" 
            className="bg-white text-blue-600 px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Sign Up Now
          </Link>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors p-1"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
