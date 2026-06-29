'use client';
import SearchAutocomplete from '@/components/SearchAutocomplete';

// Wraps SearchAutocomplete for the homepage. When a search result is selected,
// opens the lead capture modal (via the same custom event StickyLeadButton listens to)
// alongside the normal navigation.
export default function HomepageSearch() {
  function handleSearch() {
    window.dispatchEvent(new CustomEvent('open-lead-modal'));
  }
  return <SearchAutocomplete onSearch={handleSearch} />;
}
