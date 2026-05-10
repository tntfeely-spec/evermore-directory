'use client';

import { useEffect } from 'react';
import { trackListingDetailView, trackListingWebsiteClick, trackListingPhoneClick, type ListingContext } from '@/lib/analytics';

interface Props {
  listing: ListingContext;
}

export default function ListingTracker({ listing }: Props) {
  useEffect(() => {
    trackListingDetailView(listing);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}

export function WebsiteLink({
  href,
  listing,
  className,
  children,
}: {
  href: string;
  listing: ListingContext;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackListingWebsiteClick(listing)}
    >
      {children}
    </a>
  );
}

export function PhoneLink({
  phone,
  listing,
  className,
  children,
}: {
  phone: string;
  listing: ListingContext;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`tel:${phone.replace(/\D/g, '')}`}
      className={className}
      onClick={() => trackListingPhoneClick(listing)}
    >
      {children}
    </a>
  );
}
