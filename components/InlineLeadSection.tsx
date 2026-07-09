'use client';
import { useState, useEffect, useRef } from 'react';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { trackLeadForm } from '@/lib/analytics';

type Source = 'blog' | 'city_page' | 'state_page' | 'general';

interface Props {
  source: Source;
  city?: string;
  state?: string;
}

export default function InlineLeadSection({ source, city, state }: Props) {
  const [hidden, setHidden] = useState(
    () => typeof window !== 'undefined' && localStorage.getItem('lcf_submitted') === 'true'
  );
  const openFiredRef = useRef(false);

  useEffect(() => {
    function handleSubmitted() {
      setHidden(true);
    }
    window.addEventListener('lcf-submitted', handleSubmitted);
    return () => window.removeEventListener('lcf-submitted', handleSubmitted);
  }, []);

  useEffect(() => {
    if (!hidden && !openFiredRef.current) {
      openFiredRef.current = true;
      trackLeadForm('form_open', { form_source: source, form_type: 'inline_section' });
    }
  }, [hidden, source]);

  function handleSuccess() {
    localStorage.setItem('lcf_submitted', 'true');
    window.dispatchEvent(new CustomEvent('lcf-submitted'));
  }

  if (hidden) return null;

  return (
    <div className="my-10 bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden max-w-xl mx-auto">
      <div className="bg-slate-700 px-6 py-5 text-center">
        <p className="text-white font-semibold text-lg leading-tight">
          Get matched with local funeral homes
        </p>
        <p className="text-slate-300 text-sm mt-1">
          Answer 4 quick questions. Free, no pressure.
        </p>
      </div>
      <div className="p-6">
        <LeadCaptureForm source={source} city={city} state={state} onSuccess={handleSuccess} />
      </div>
    </div>
  );
}
