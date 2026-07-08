'use client';
import { useEffect, useRef, useState } from 'react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

type Source = 'homepage' | 'listing_page' | 'city_page' | 'state_page' | 'blog' | 'contact' | 'general';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  source: Source;
  funeralHomeName?: string;
  city?: string;
  state?: string;
  defaultZip?: string;
}

export default function LeadModal({
  isOpen,
  onClose,
  onSuccess,
  source,
  funeralHomeName,
  city,
  state,
  defaultZip,
}: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [isDone, setIsDone] = useState(false);

  // Reset done-lock when modal closes so it's fresh on next open
  useEffect(() => {
    if (!isOpen) setIsDone(false);
  }, [isOpen]);

  // Focus management: move into modal on open, restore on close
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        focusable?.[0]?.focus();
      });
    } else {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape to close + focus trap
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (!isDone) onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;

      // Re-query each keydown so focus trap works across form steps
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(el => !!(el.offsetWidth || el.offsetHeight));

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, isDone]);

  if (!isOpen) return null;

  return (
    // Outer div: covers viewport, click backdrop to close (disabled during success)
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={isDone ? undefined : onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal panel — click inside does NOT close */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-heading"
        tabIndex={-1}
        className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl outline-none"
        onClick={e => e.stopPropagation()}
      >
        {/* Close X — hidden during success window so users can read confirmation */}
        {!isDone && <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1.5 focus:outline-none focus:ring-2 focus:ring-slate-500"
          aria-label="Close"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>}

        <div className="p-6 pt-10">
          <h2 id="lead-modal-heading" className="sr-only">
            Find a funeral home near you
          </h2>
          <LeadCaptureForm
            source={source}
            funeralHomeName={funeralHomeName}
            city={city}
            state={state}
            defaultZip={defaultZip}
            onSuccess={onSuccess}
            onFormDone={() => setIsDone(true)}
          />
        </div>
      </div>
    </div>
  );
}
