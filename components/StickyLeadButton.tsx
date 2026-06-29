'use client';
import { useState, useEffect, useRef } from 'react';
import LeadModal from '@/components/LeadModal';

type Source = 'homepage' | 'listing_page' | 'city_page' | 'state_page' | 'blog' | 'contact';

interface Props {
  source: Source;
  funeralHomeName?: string;
  city?: string;
  state?: string;
  defaultZip?: string;
}

export default function StickyLeadButton({
  source,
  funeralHomeName,
  city,
  state,
  defaultZip,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  // Lazy initializer reads localStorage once on mount (client only)
  const [submitted, setSubmitted] = useState(
    () => typeof window !== 'undefined' && localStorage.getItem('lcf_submitted') === 'true'
  );
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Allow any element on the page to open this modal via a custom event
    function handleOpenEvent() {
      setIsOpen(true);
    }
    window.addEventListener('open-lead-modal', handleOpenEvent);
    return () => window.removeEventListener('open-lead-modal', handleOpenEvent);
  }, []);

  function handleClose() {
    setIsOpen(false);
  }

  function handleSuccess() {
    localStorage.setItem('lcf_submitted', 'true');
    setSubmitted(true);
    setIsOpen(false);
  }

  return (
    <>
      {submitted ? (
        // Low-prominence fallback after submission
        <div className="fixed bottom-4 right-4 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="text-xs text-gray-400 hover:text-gray-500 underline transition-colors bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm"
          >
            Get matched again
          </button>
        </div>
      ) : (
        // Prominent sticky CTA
        <div className="fixed bottom-0 inset-x-0 z-40 flex justify-center pb-5 px-4 pointer-events-none">
          <button
            ref={triggerRef}
            onClick={() => setIsOpen(true)}
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
