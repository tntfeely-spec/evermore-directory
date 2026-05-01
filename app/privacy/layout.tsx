import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Evermore Directory',
  description: 'Evermore Directory privacy policy. How we collect, use, and protect your information when you use our funeral home directory.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
