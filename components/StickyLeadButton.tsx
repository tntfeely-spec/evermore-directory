'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import LeadModal from '@/components/LeadModal';
import { trackLeadForm } from '@/lib/analytics';

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
  source?: Source;
  funeralHomeName?: string;
  city?: string;
  state?: string;
  defaultZip?: string;
}

export default function StickyLeadButton({
  source: propSource,
  funeralHomeName,
  city,
  state,
  defaultZip,
}: Props) {
  const pathname = usePathname();
  const source = propSource ?? detectSource(pathname);

  const [isOpen, setIsOpen] = useState(false);
  // Lazy initializer: runs once on client mount, reads localStorage without triggering
  // the setState-in-effect lint rule and without needing a separate useEffect
  const [submitted, setSubmitted] = useState(
    () => typeof window !== 'undefined' && localStorage.getItem('lcf_submitted') === 'true'
  );
  const triggerRef = useRef<HTMLButtonElement>(null);

  function openModal() {
    setIsOpen(true);
    trackLeadForm('form_open', { form_source: source, form_type: 'sticky_button' });
  }

  useEffect(() => {
    function handleOpenEvent() {
      openModal();
    }
    window.addEventListener('open-lead-modal', handleOpenEvent);
    return () => window.removeEventListener('open-lead-modal', handleOpenEvent);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function handleLcfSubmitted() {
      setSubmitted(true);
    }
    window.addEventListener('lcf-submitted', handleLcfSubmitted);
    return () => window.removeEventListener('lcf-submitted', handleLcfSubmitted);
  }, []);

  function handleClose() {
    setIsOpen(false);
  }

  function handleSuccess() {
    localStorage.setItem('lcf_submitted', 'true');
    window.dispatchEvent(new CustomEvent('lcf-submitted'));
    setSubmitted(true);
    setIsOpen(false);
  }

  return (
    <>
      {submitted ? (
        <div className="fixed bottom-4 right-4 z-40">
          <button
            onClick={openModal}
            className="text-xs text-gray-400 hover:text-gray-500 underline transition-colors bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm"
          >
            Get matched again
          </button>
        </div>
      ) : (
        <div className="fixed bottom-0 inset-x-0 z-40 flex justify-center pb-5 px-4 pointer-events-none">
          <button
            ref={triggerRef}
            onClick={openModal}
            className="pointer-events-auto bg-slate-700 hover:bg-slate-800 active:bg-slate-900 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-xl transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            Get matched with local funeral homes
          </button>
        </div>
      )}

      <LeadModal
        isOpen={isOpen}
        onClose={handleClose}
        onSuccess={handleSuccess}
        source={source}
        funeralHomeName={funeralHomeName}
        city={city}
        state={state}
        defaultZip={defaultZip}
      />
    </>
  );
}
