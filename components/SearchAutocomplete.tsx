// components/SearchAutocomplete.tsx
// Full replacement -- supports city name, suburb, ZIP code search
// Works with the new /api/search route

'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface SearchResult {
  type?: 'home' | 'city';
  city: string;
  state: string;
  url: string;
  label: string;
  sublabel: string;
}

export default function SearchAutocomplete() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data.results || []);
        setOpen(true);
        setSelected(-1);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function handleSelect(result: SearchResult) {
    setQuery(result.label);
    setOpen(false);
    router.push(result.url);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || results.length === 0) {
      if (e.key === 'Enter') handleSubmit();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selected >= 0 && results[selected]) {
        handleSelect(results[selected]);
      } else if (results.length === 1) {
        handleSelect(results[0]);
      } else {
        handleSubmit();
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
      setSelected(-1);
    }
  }

  function handleSubmit() {
    if (results.length === 1) {
      handleSelect(results[0]);
      return;
    }
    if (results.length > 0) {
      handleSelect(results[0]);
      return;
    }
    if (query.trim()) {
      router.push(`/states`);
    }
  }

  const isZip = /^\d{5}$/.test(query.trim());

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="flex">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setOpen(true)}
          placeholder="Search by name, city, or ZIP code..."
          className="w-full px-5 py-4 text-lg rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800 placeholder-gray-400"
          aria-label="Search for funeral homes by name, city, or ZIP code"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-haspopup="listbox"
          autoComplete="off"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-4 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-r-lg transition-colors flex items-center gap-2 whitespace-nowrap"
          aria-label="Search"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          )}
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>

      {/* Dropdown results */}
      {open && results.length > 0 && (
        <div
          ref={dropdownRef}
          role="listbox"
          className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
        >
          {results.map((result, i) => (
            <button
              key={`${result.city}-${result.state}-${i}`}
              role="option"
              aria-selected={i === selected}
              onClick={() => handleSelect(result)}
              className={`w-full text-left px-5 py-3 flex items-center justify-between transition-colors ${
                i === selected ? 'bg-slate-50' : 'hover:bg-gray-50'
              }`}
            >
              <div>
                <span className="font-semibold text-gray-800">{result.label}</span>
                {result.sublabel && (
                  <span className="block text-sm text-gray-400 mt-0.5">{result.sublabel}</span>
                )}
              </div>
              <svg className="h-4 w-4 text-gray-300 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      )}

      {/* No results */}
      {open && !loading && query.length >= 2 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-xl border border-gray-100 px-5 py-4 text-gray-500 text-sm">
          {isZip
            ? `No funeral homes found near ZIP ${query}. Try searching by city name.`
            : `No results for "${query}". Try a nearby city or ZIP code.`}
        </div>
      )}
    </div>
  );
}
