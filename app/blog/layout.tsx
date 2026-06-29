import InlineLeadSection from '@/components/InlineLeadSection';
import ScrollModal from '@/components/ScrollModal';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <InlineLeadSection source="blog" />
      </div>
      <ScrollModal source="blog" threshold={0.4} />
    </>
  );
}
