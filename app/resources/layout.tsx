import Navigation from '@/components/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | Evermore Directory',
  description: 'Funeral planning resources, cost guides, and tools for families. Free obituary maker, eulogy writer, and funeral home comparison tools.',
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
