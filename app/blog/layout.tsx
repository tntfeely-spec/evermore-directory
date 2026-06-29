import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="bg-slate-50 border-t border-gray-200 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Need help finding a funeral home?
          </h2>
          <p className="text-gray-600 text-center mb-6 text-sm">
            Answer a few quick questions to get connected with local providers near you.
          </p>
          <LeadCaptureForm source="blog" />
        </div>
      </div>
    </>
  );
}
