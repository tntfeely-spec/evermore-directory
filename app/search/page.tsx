'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

interface FuneralHome {
  id: string;
  business_name: string;
  address: string;
  city: string;
  state: string;
  zip?: string;
  phone?: string;
  website?: string;
  email?: string;
  services?: string;
  price_range?: string;
}

const US_STATES = [
  { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }, { code: 'DC', name: 'Washington DC' }
];

// Parse search query to detect city and state
function parseSearchQuery(query: string): { city: string; stateCode: string | null; stateName: string | null } {
  const trimmed = query.trim();
  
  // Try "City, ST" format (e.g., "Glen Ellyn, IL")
  const commaMatch = trimmed.match(/^(.+?),\s*(.+)$/);
  if (commaMatch) {
    const cityPart = commaMatch[1].trim();
    const statePart = commaMatch[2].trim().toUpperCase();
    
    // Check if statePart is a state code
    const stateByCode = US_STATES.find(s => s.code === statePart);
    if (stateByCode) {
      return { city: cityPart, stateCode: stateByCode.code, stateName: stateByCode.name };
    }
    
    // Check if statePart is a state name
    const stateByName = US_STATES.find(s => s.name.toLowerCase() === commaMatch[2].trim().toLowerCase());
    if (stateByName) {
      return { city: cityPart, stateCode: stateByName.code, stateName: stateByName.name };
    }
  }
  
  // Try "City ST" format without comma (e.g., "Glen Ellyn IL")
  const spaceMatch = trimmed.match(/^(.+?)\s+([A-Za-z]{2})$/);
  if (spaceMatch) {
    const stateCode = spaceMatch[2].toUpperCase();
    const stateByCode = US_STATES.find(s => s.code === stateCode);
    if (stateByCode) {
      return { city: spaceMatch[1].trim(), stateCode: stateByCode.code, stateName: stateByCode.name };
    }
  }
  
  // Check if the entire query is a state name
  const stateByName = US_STATES.find(s => s.name.toLowerCase() === trimmed.toLowerCase());
  if (stateByName) {
    return { city: '', stateCode: stateByName.code, stateName: stateByName.name };
  }
  
  // Check if query ends with a state code after space
  const parts = trimmed.split(/\s+/);
  if (parts.length >= 2) {
    const lastPart = parts[parts.length - 1].toUpperCase();
    const stateCheck = US_STATES.find(s => s.code === lastPart);
    if (stateCheck) {
      return { city: parts.slice(0, -1).join(' '), stateCode: stateCheck.code, stateName: stateCheck.name };
    }
  }
  
  return { city: trimmed, stateCode: null, stateName: null };
}

export default function SearchPage() {
  const [allHomes, setAllHomes] = useState<FuneralHome[]>([]);
  const [exactResults, setExactResults] = useState<FuneralHome[]>([]);
  const [nearbyResults, setNearbyResults] = useState<FuneralHome[]>([]);
  const [nearbyLabel, setNearbyLabel] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [sortBy, setSortBy] = useState('business_name');
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Service filters
  const [filters, setFilters] = useState({
    cremation: false,
    traditional: false,
    prePlanning: false,
    veterans: false
  });

  // Load funeral homes from Supabase
  useEffect(() => {
    async function loadFuneralHomes() {
      setLoading(true);
      const { data, error } = await supabase
        .from('funeral_homes')
        .select('*')
        .order('business_name');

      if (error) {
        console.error('Error loading funeral homes:', error);
      } else if (data) {
        setAllHomes(data);
      }
      setLoading(false);
    }
    loadFuneralHomes();
  }, []);

  // Apply filters with proximity search
  useEffect(() => {
    let filtered = [...allHomes];

    // Apply state dropdown filter
    if (selectedState) {
      filtered = filtered.filter(home => home.state === selectedState);
    }

    // Apply service filters
    const anyServiceSelected = Object.values(filters).some(v => v);
    if (anyServiceSelected) {
      filtered = filtered.filter(home => {
        const services = home.services?.toLowerCase() || '';
        return (
          (filters.cremation && services.includes('cremation')) ||
          (filters.traditional && services.includes('traditional')) ||
          (filters.prePlanning && services.includes('pre-planning')) ||
          (filters.veterans && services.includes('veteran'))
        );
      });
    }

    // Search with proximity
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const parsed = parseSearchQuery(searchTerm);

      // Exact matches: city, business name, or ZIP contains search term
      let exact = filtered.filter(home =>
        home.business_name?.toLowerCase().includes(term) ||
        home.city?.toLowerCase().includes(parsed.city.toLowerCase()) ||
        home.zip?.toLowerCase().includes(term)
      );

      // If we parsed a state from the query, also filter exact by that state
      if (parsed.stateCode && !selectedState) {
        exact = exact.filter(home => 
          home.state === parsed.stateCode ||
          home.business_name?.toLowerCase().includes(term)
        );
      }

      // Sort exact results
      exact.sort((a, b) => {
        const aVal = a[sortBy as keyof FuneralHome] || '';
        const bVal = b[sortBy as keyof FuneralHome] || '';
        return String(aVal).localeCompare(String(bVal));
      });

      setExactResults(exact);

      // Proximity: if few exact results, find nearby
      if (exact.length < 5) {
        const exactIds = new Set(exact.map(h => h.id));
        let nearby: FuneralHome[] = [];
        let label = '';

        if (exact.length > 0) {
          // Get ZIP prefixes from exact matches (first 3 digits = same area)
          const zipPrefixes = [...new Set(
            exact
              .filter(h => h.zip && h.zip.length >= 3)
              .map(h => h.zip!.substring(0, 3))
          )];

          if (zipPrefixes.length > 0) {
            nearby = filtered.filter(home =>
              !exactIds.has(home.id) &&
              home.zip &&
              zipPrefixes.some(prefix => home.zip!.startsWith(prefix))
            );
            label = 'Nearby funeral homes';
          }
        } else if (parsed.stateCode) {
          // No exact matches but we know the state — show state results
          nearby = filtered.filter(home =>
            home.state === parsed.stateCode
          );

          // Sort by ZIP to cluster geographically
          nearby.sort((a, b) => {
            const aZip = a.zip || '99999';
            const bZip = b.zip || '99999';
            return aZip.localeCompare(bZip);
          });

          label = `Funeral homes in ${parsed.stateName}`;
        } else {
          // No state detected, try ZIP prefix from search term if it looks like a ZIP
          const zipMatch = searchTerm.match(/^\d{3,5}$/);
          if (zipMatch) {
            const prefix = searchTerm.substring(0, 3);
            nearby = filtered.filter(home =>
              home.zip && home.zip.startsWith(prefix)
            );
            label = `Funeral homes near ZIP ${searchTerm}`;
          }
        }

        // Sort nearby
        nearby.sort((a, b) => {
          const aVal = a[sortBy as keyof FuneralHome] || '';
          const bVal = b[sortBy as keyof FuneralHome] || '';
          return String(aVal).localeCompare(String(bVal));
        });

        setNearbyResults(nearby.slice(0, 40)); // Cap nearby at 40
        setNearbyLabel(label);
      } else {
        setNearbyResults([]);
        setNearbyLabel('');
      }
    } else {
      // No search term — show all (filtered by state/services)
      filtered.sort((a, b) => {
        const aVal = a[sortBy as keyof FuneralHome] || '';
        const bVal = b[sortBy as keyof FuneralHome] || '';
        return String(aVal).localeCompare(String(bVal));
      });
      setExactResults(filtered);
      setNearbyResults([]);
      setNearbyLabel('');
    }

    setCurrentPage(1);
  }, [searchTerm, selectedState, filters, sortBy, allHomes]);

  // Combined results for pagination
  const allResults = [...exactResults, ...nearbyResults];
  const totalPages = Math.ceil(allResults.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Figure out which results to show on current page
  const currentPageItems = allResults.slice(startIndex, endIndex);

  // Determine where the "nearby" label should appear
  const nearbyStartsAt = exactResults.length;
  const showNearbyDivider = nearbyResults.length > 0 && startIndex < allResults.length;
  const nearbyDividerInPage = nearbyStartsAt >= startIndex && nearbyStartsAt < endIndex;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFilterChange = (filter: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
  };

  // Render a funeral home card
  const renderCard = (home: FuneralHome) => (
    <div
      key={home.id}
      className="bg-white/75 backdrop-blur-md rounded-lg p-6 shadow-md transition-all hover:translate-y-[-2px] hover:shadow-lg border border-black/[0.06] flex flex-col"
    >
      <h3 className="font-['Montserrat'] text-[19px] font-semibold text-[#1c1c1e] mb-3.5 leading-tight">
        {home.business_name || 'Unnamed Funeral Home'}
      </h3>

      <div className="flex flex-col gap-2.5 mb-4 flex-grow">
        {home.address && (
          <div className="flex items-start gap-2 text-sm text-[#3a3a3c]">
            <span className="font-medium text-[#1c1c1e] min-w-[70px]">Address:</span>
            <span>{home.address}</span>
          </div>
        )}
        <div className="flex items-start gap-2 text-sm text-[#3a3a3c]">
          <span className="font-medium text-[#1c1c1e] min-w-[70px]">Location:</span>
          <span>{home.city || 'N/A'}, {home.state || 'N/A'} {home.zip || ''}</span>
        </div>
        {home.phone && (
          <div className="flex items-start gap-2 text-sm text-[#3a3a3c]">
            <span className="font-medium text-[#1c1c1e] min-w-[70px]">Phone:</span>
            <span>{home.phone}</span>
          </div>
        )}
        {home.price_range && (
          <div className="flex items-start gap-2 text-sm text-[#3a3a3c]">
            <span className="font-medium text-[#1c1c1e] min-w-[70px]">Price Range:</span>
            <span>{home.price_range}</span>
          </div>
        )}
        {home.services && (
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {home.services.split(',').map((service, i) => (
              <span
                key={i}
                className="bg-black/[0.04] text-[#3a3a3c] px-3 py-1 rounded text-xs font-medium border border-black/[0.08]"
              >
                {service.trim()}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-3 pt-4 border-t border-black/[0.06]">
        {home.phone && (
          <a
            href={`tel:${home.phone}`}
            className="flex-1 text-center px-6 py-2.5 bg-black/[0.04] text-[#1c1c1e] rounded-md text-sm font-medium border border-black/[0.08] transition-colors hover:bg-black/[0.08]"
          >
            Call
          </a>
        )}
        {home.website && (
          <a
            href={home.website.startsWith('http') ? home.website : `https://${home.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-6 py-2.5 bg-black/[0.04] text-[#1c1c1e] rounded-md text-sm font-medium border border-black/[0.08] transition-colors hover:bg-black/[0.08]"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'url(/Ocean_Image.png) center/cover fixed',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        color: '#2C3E50'
      }}
    >
      {/* Background overlay */}
      <div className="fixed inset-0 bg-white/40 -z-10" />

      {/* Header */}
      <header className="bg-[rgba(245,245,247,0.95)] backdrop-blur-md sticky top-0 z-50 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-10 py-5 flex items-center gap-8">
          <Link href="/">
            <Image
              src="/EVERMORE LOGO.png"
              alt="Evermore"
              width={160}
              height={80}
              className="h-20 w-auto"
            />
          </Link>

          <div className="flex-1 max-w-[600px]">
            <input
              type="text"
              placeholder="Search by name, city, ZIP, or &quot;City, State&quot;..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3.5 border border-[#d1d1d6] rounded-md text-base bg-white transition-all focus:outline-none focus:border-[#8e8e93] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.05)]"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-5 py-8 grid grid-cols-[280px_1fr] gap-8">
        {/* Sidebar Filters */}
        <aside className="bg-white/70 backdrop-blur-md rounded-lg p-6 h-fit sticky top-[140px] shadow-md border border-black/[0.06]">
          {/* Services Filter */}
          <div className="mb-6">
            <h3 className="font-['Montserrat'] text-[15px] font-semibold text-[#1c1c1e] mb-3.5">
              Services
            </h3>
            <div className="flex flex-col gap-2.5">
              {[
                { key: 'cremation', label: 'Cremation' },
                { key: 'traditional', label: 'Traditional' },
                { key: 'prePlanning', label: 'Pre-Planning' },
                { key: 'veterans', label: 'Veterans' }
              ].map(({ key, label }) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer text-sm text-[#3a3a3c]">
                  <input
                    type="checkbox"
                    checked={filters[key as keyof typeof filters]}
                    onChange={() => handleFilterChange(key as keyof typeof filters)}
                    className="w-4 h-4 cursor-pointer accent-[#636366]"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* State Filter */}
          <div className="mb-6">
            <h3 className="font-['Montserrat'] text-[15px] font-semibold text-[#1c1c1e] mb-3.5">
              State
            </h3>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full p-2.5 border border-[#d1d1d6] rounded-md text-sm bg-white cursor-pointer transition-colors focus:outline-none focus:border-[#8e8e93]"
            >
              <option value="">All States</option>
              {US_STATES.map(state => (
                <option key={state.code} value={state.code}>{state.name}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="mb-6">
            <h3 className="font-['Montserrat'] text-[15px] font-semibold text-[#1c1c1e] mb-3.5">
              Sort By
            </h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2.5 border border-[#d1d1d6] rounded-md text-sm bg-white cursor-pointer transition-colors focus:outline-none focus:border-[#8e8e93]"
            >
              <option value="business_name">Name</option>
              <option value="state">State</option>
              <option value="city">City</option>
            </select>
          </div>

          {/* Results Per Page */}
          <div>
            <h3 className="font-['Montserrat'] text-[15px] font-semibold text-[#1c1c1e] mb-3.5">
              Results Per Page
            </h3>
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="w-full p-2.5 border border-[#d1d1d6] rounded-md text-sm bg-white cursor-pointer transition-colors focus:outline-none focus:border-[#8e8e93]"
            >
              <option value="20">20</option>
              <option value="40">40</option>
              <option value="60">60</option>
              <option value="80">80</option>
              <option value="100">100</option>
            </select>
          </div>
        </aside>

        {/* Results */}
        <main>
          {/* Results Count */}
          <div className="mb-5 text-[#1c1c1e] font-['Montserrat'] font-semibold text-lg">
            {loading ? 'Loading...' : (
              searchTerm ? (
                <>
                  {exactResults.length} {exactResults.length === 1 ? 'result' : 'results'} found
                  {nearbyResults.length > 0 && ` · ${nearbyResults.length} nearby`}
                </>
              ) : (
                `${exactResults.length} funeral homes found`
              )
            )}
          </div>

          {/* Results */}
          {loading ? (
            <div className="text-center py-20 text-[#3a3a3c]">Loading funeral homes...</div>
          ) : allResults.length === 0 ? (
            <div className="bg-white/75 backdrop-blur-md rounded-lg p-12 text-center shadow-md">
              <h3 className="text-xl font-semibold mb-2">No funeral homes found</h3>
              <p className="text-[#3a3a3c]">Try searching for a city and state (e.g., &quot;Glen Ellyn, IL&quot;) or browse by state</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 mb-8">
                {currentPageItems.map((home, index) => {
                  const globalIndex = startIndex + index;
                  const isNearbyStart = globalIndex === nearbyStartsAt && nearbyResults.length > 0;

                  return (
                    <div key={home.id} className={isNearbyStart ? 'col-span-full' : ''}>
                      {isNearbyStart && (
                        <div className="col-span-full mb-4 mt-6 pb-2 border-b-2 border-blue-500/30">
                          <h2 className="text-lg font-semibold text-blue-700 font-['Montserrat']">
                            {nearbyLabel}
                          </h2>
                          <p className="text-sm text-[#636366] mt-1">
                            Based on ZIP code proximity
                          </p>
                        </div>
                      )}
                      {renderCard(home)}
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white/75 backdrop-blur-md rounded-md border border-black/[0.06] text-sm font-medium transition-all hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + 1 + Math.max(0, currentPage - 3);
                    if (page > totalPages) return null;
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-md border text-sm font-medium transition-all ${
                          currentPage === page
                            ? 'bg-[#636366] text-white border-[#636366]'
                            : 'bg-white/75 backdrop-blur-md border-black/[0.06] hover:bg-white/90'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white/75 backdrop-blur-md rounded-md border border-black/[0.06] text-sm font-medium transition-all hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
