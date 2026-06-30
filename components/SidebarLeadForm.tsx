'use client';
import LeadCaptureForm from '@/components/LeadCaptureForm';

interface Props {
  funeralHomeName?: string;
  city?: string;
  state?: string;
}

export default function SidebarLeadForm({ funeralHomeName, city, state }: Props) {
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
