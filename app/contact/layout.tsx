import Navigation from '@/components/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Evermore Directory | Evermore Directory',
  description: 'Contact Evermore Directory for questions about funeral home listings, featured placements, or directory information. We respond within 24 hours.',
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
