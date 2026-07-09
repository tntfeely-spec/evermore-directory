'use client';
import { useEffect } from 'react';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { trackLeadForm } from '@/lib/analytics';

interface Props {
  funeralHomeName?: string;
  city?: string;
  state?: string;
}

export default function SidebarLeadForm({ funeralHomeName, city, state }: Props) {
  useEffect(() => {
    trackLeadForm('form_open', { form_source: 'listing_page', form_type: 'sidebar_form' });
  }, []);

  function handleSuccess() {
    localStorage.setItem('lcf_submitted', 'true');
  }

  return (
    <LeadCaptureForm
      source="listing_page"
      funeralHomeName={funeralHomeName}
      city={city}
      state={state}
      onSuccess={handleSuccess}
    />
  );
}
