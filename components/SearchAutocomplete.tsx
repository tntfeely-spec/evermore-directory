'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const stateNames: { [key: string]: string } = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas',
  'CA': 'California', 'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware',
  'DC': 'District of Columbia', 'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii',
  'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
  'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine',
  'MD': 'Maryland', 'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota',
  'MS': 'Mississippi', 'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska',
  'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico',
  'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
  'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island',
  'SC': 'South Carolina', 'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas',
  'UT': 'Utah', 'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington',
  'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming'
};

interface CityResult {
  city: string;
  state: string;
  count: number;
}

export default function SearchAutocomplete() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<CityResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('funeral_homes')
          .select('city, state')
          .ilike('city', `${query}%`)
          .limit(100);

        if (error) throw error;

        // Group by city/state and count
        const cityMap: { [key: string]: CityResult } = {};
        data?.forEach((row) => {
          const key = `${row.city}-${row.state}`;
          if (cityMap[key]) {
            cityMap[key].count++;
          } else {
            cityMap[key] = { city: row.city, state: row.state, count: 1 };
          }
        });

        const sorted = Object.values(cityMap)
          .sort((a, b) => b.count - a.count)
          .slice(0, 8);

        setResults(sorted);
        setIsOpen(sorted.length > 0);
        setSelectedIndex(-1);
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  function navigateToCity(city: string, state: string) {
    const citySlug = city.toLowerCase().replace(/\s+/g, '-');
    const stateSlug = state.toLowerCase();
    router.push(`/funeral-homes/${stateSlug}/${citySlug}`);
    setIsOpen(false);
    setQuery('');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (selectedIndex >= 0 && results[selectedIndex]) {
      navigateToCity(results[selectedIndex].city, results[selectedIndex].state);
    } else if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => results.length > 0 && setIsOpen(true)}
            placeholder="Search by city or state..."
            className="w-full px-6 py-4 pr-14 text-lg border-2 border-gray-200 rounded-xl shadow-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>

      {/* Autocomplete Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
          {isLoading ? (
            <div className="px-6 py-4 text-gray-500 text-center">Searching...</div>
          ) : (
            results.map((result, index) => (
              <button
                key={`${result.city}-${result.state}`}
                onClick={() => navigateToCity(result.city, result.state)}
                className={`w-full text-left px-6 py-3 flex items-center justify-between hover:bg-blue-50 transition-colors ${
                  index === selectedIndex ? 'bg-blue-50' : ''
                } ${index !== results.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div>
                  <span className="font-semibold text-gray-900">{result.city}</span>
                  <span className="text-gray-500 ml-2">{stateNames[result.state] || result.state}</span>
                </div>
                <span className="text-sm text-gray-400">{result.count} funeral home{result.count !== 1 ? 's' : ''}</span>
              </button>
            ))
          )}
          {query.length >= 2 && results.length > 0 && (
            <button
              onClick={() => {
                router.push(`/search?q=${encodeURIComponent(query.trim())}`);
                setIsOpen(false);
              }}
              className="w-full text-left px-6 py-3 text-blue-600 font-semibold hover:bg-blue-50 transition-colors border-t border-gray-200"
            >
              See all results for &quot;{query}&quot; →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
