import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import PremiumBanner from '@/components/PremiumBanner';

export const metadata: Metadata = {
  title: 'Featured Listing for Funeral Homes | $99/Month | Evermore Directory',
  description: 'Get your funeral home featured at the top of Evermore Directory. Reach more families in your area for just $99/month. No setup fees. Cancel anytime.',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/featured-listing',
  },
};

export default function FeaturedListingPage() {
return (
  <>
    <Navigation />
    <PremiumBanner />
    <div className="min-h-screen bg-[#F5F7FA]" ...>
      {/* rest of page */}
    </div>
  </>
);

      {/* Hero */}
