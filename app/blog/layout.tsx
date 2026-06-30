import InlineLeadSection from '@/components/InlineLeadSection';
import ScrollModal from '@/components/ScrollModal';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/*
        Desktop (2xl / 1536px+): article is max-w-4xl (896px) centered, leaving ~320px right
        margin. A fixed w-72 (288px) sidebar at right-6 fits without overlapping article text.
        Navigation is sticky top-0 z-50; sidebar is fixed top-24 z-30 — sits just below the nav bar.
      */}
      <div className="hidden 2xl:block fixed top-24 right-6 w-72 z-30">
        <InlineLeadSection source="blog" />
      </div>
      {/* Narrower screens: form flows after article content above the footer */}
      <div className="2xl:hidden max-w-4xl mx-auto px-4 pb-16">
        <InlineLeadSection source="blog" />
      </div>
      {/* Scroll modal: 40% threshold on blog (fires while reader is mid-article) */}
      <ScrollModal threshold={0.4} delayMs={30000} />
    </>
  );
}
