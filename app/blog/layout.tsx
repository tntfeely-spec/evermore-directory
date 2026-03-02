import Navigation from '@/components/Navigation';
import PremiumBanner from '@/components/PremiumBanner';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <PremiumBanner />
      {children}
    </>
  );
}
