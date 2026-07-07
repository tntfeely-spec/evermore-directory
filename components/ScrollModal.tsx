'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LeadModal from '@/components/LeadModal';

const SESSION_KEY = 'lcf_modal_shown';

type Source = 'homepage' | 'listing_page' | 'city_page' | 'state_page' | 'blog' | 'contact' | 'general';

function detectSource(pathname: string): Source {
  if (pathname === '/') return 'homepage';
  if (pathname === '/contact') return 'contact';
  if (pathname.startsWith('/blog')) return 'blog';
  if (/\/funeral-homes\/[^/]+\/[^/]+\/[^/]+/.test(pathname)) return 'listing_page';
  if (/\/funeral-homes\/[^/]+\/[^/]+/.test(pathname)) return 'city_page';
  if (/\/funeral-homes\/[^/]+/.test(pathname)) return 'state_page';
  return 'general';
}

interface Props {
  threshold?: number;
  delayMs?: number;
}

export default function ScrollModal({ threshold = 0.30, delayMs }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const source = detectSource(pathname);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') return;
    if (localStorage.getItem('lcf_submitted') === 'true') return;

    let fired = false;

    function fire() {
      if (fired) return;
      if (localStorage.getItem('lcf_submitted') === 'true') return;
      fired = true;
      sessionStorage.setItem(SESSION_KEY, 'true');
      window.removeEventListener('scroll', handleScroll);
      setIsOpen(true);
    }

    function handleScroll() {
      if (localStorage.getItem('lcf_submitted') === 'true') {
        window.removeEventListener('scroll', handleScroll);
        return;
      }
      const pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (pct >= threshold) fire();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    const timer = delayMs != null ? setTimeout(fire, delayMs) : null;

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer != null) clearTimeout(timer);
    };
  }, [threshold, delayMs]);

  function handleClose() {
    setIsOpen(false);
  }

  function handleSuccess() {
    localStorage.setItem('lcf_submitted', 'true');
    window.dispatchEvent(new CustomEvent('lcf-submitted'));
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
