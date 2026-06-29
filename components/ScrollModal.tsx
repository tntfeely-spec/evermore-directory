'use client';
import { useState, useEffect } from 'react';
import LeadModal from '@/components/LeadModal';

const SESSION_KEY = 'lcf_modal_shown';

type Source = 'homepage' | 'listing_page' | 'city_page' | 'state_page' | 'blog' | 'contact' | 'general';

interface Props {
  source: Source;
  threshold?: number;
}

export default function ScrollModal({ source, threshold = 0.55 }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') return;
    if (localStorage.getItem('lcf_submitted') === 'true') return;

    function handleScroll() {
      if (localStorage.getItem('lcf_submitted') === 'true') {
        window.removeEventListener('scroll', handleScroll);
        return;
      }
      const pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (pct >= threshold) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        setIsOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  function handleClose() {
    setIsOpen(false);
  }

  function handleSuccess() {
    localStorage.setItem('lcf_submitted', 'true');
    setIsOpen(false);
  }

  return (
    <LeadModal
      isOpen={isOpen}
      onClose={handleClose}
      onSuccess={handleSuccess}
      source={source}
    />
  );
}
