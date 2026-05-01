import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Funeral Homes | Evermore Directory',
  description: 'Search for funeral homes by city, state, or ZIP code. Compare pricing, services, and contact information for funeral homes near you.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
