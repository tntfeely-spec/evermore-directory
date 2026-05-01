import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | Evermore Directory',
  description: 'Learn how Evermore Directory helps families find and compare funeral homes across all 50 states. Free for families, no pressure, no referral fees.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
