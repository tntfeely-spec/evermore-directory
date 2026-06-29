import StickyLeadButton from '@/components/StickyLeadButton';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <StickyLeadButton source="blog" />
    </>
  );
}
