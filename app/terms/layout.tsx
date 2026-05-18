import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Evermore Directory',
  description: 'Terms of service for Evermore Directory, the funeral home directory covering all 50 US states.',
  alternates: { canonical: 'https://funeralhomedirectories.com/terms' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
