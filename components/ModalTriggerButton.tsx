'use client';

interface Props {
  label: string;
  className?: string;
}

// Dispatches the 'open-lead-modal' event, picked up by StickyLeadButton on the same page.
export default function ModalTriggerButton({ label, className }: Props) {
  function open() {
    window.dispatchEvent(new CustomEvent('open-lead-modal'));
  }
  return (
    <button type="button" onClick={open} className={className}>
      {label}
    </button>
  );
}
