import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Veteran Burial Benefits 2026 | Free Military Funeral and Cemetery Guide',
  description:
    'Learn about free veteran burial benefits including VA burial allowances, national cemetery eligibility, and military funeral honors. Updated 2026 guide.',
  alternates: { canonical: 'https://funeralhomedirectories.com/veteran-burial-benefits' },
};

const faqs = [
  {
    q: 'Who is eligible for VA burial benefits?',
    a: 'Most veterans who were discharged under conditions other than dishonorable are eligible for VA burial benefits. This includes burial in a national cemetery, a government headstone or marker, a burial flag, and a Presidential Memorial Certificate. Spouses and dependent children may also be eligible for burial in a national cemetery.',
  },
  {
    q: 'How much is the VA burial allowance in 2026?',
    a: 'For service-connected deaths, the VA pays up to $2,000 toward burial expenses. For non-service-connected deaths, eligible veterans receive up to $796 for burial and funeral expenses, plus an additional $796 plot allowance if not buried in a national cemetery (for deaths on or after October 1, 2024). Amounts are adjusted annually for inflation.',
  },
  {
    q: 'Are veterans buried for free in national cemeteries?',
    a: 'Yes. Eligible veterans receive a gravesite in any of the 155 VA national cemeteries with available space, opening and closing of the grave, perpetual care, a government headstone or marker, a burial flag, and a Presidential Memorial Certificate at no cost to the family.',
  },
  {
    q: 'How do I apply for VA burial benefits?',
    a: 'File VA Form 21P-530 (Application for Burial Benefits) along with the veteran\'s discharge papers (DD-214), the death certificate, and itemized funeral expense receipts. Most funeral homes will help families file this paperwork, or you can apply online at va.gov.',
  },
  {
    q: 'What are military funeral honors?',
    a: 'Every eligible veteran is entitled to military funeral honors at no cost. This includes the folding and presentation of the United States flag and the playing of Taps by at least two uniformed military personnel, one of whom is from the veteran\'s parent service branch. Request honors through the funeral home.',
  },
  {
    q: 'Can spouses of veterans be buried in national cemeteries?',
    a: 'Yes. Spouses, surviving spouses (even if remarried), and minor or disabled adult children of eligible veterans may be buried in a VA national cemetery, even if they predecease the veteran. There is no charge for the gravesite, opening and closing, or perpetual care.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function VeteranBenefitsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navigation />
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Veteran Burial Benefits & Military Funeral Assistance
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            A complete 2026 guide to VA burial allowances, national cemetery eligibility, military funeral honors, and how to apply.
          </p>

          <section className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">VA Burial Allowance Amounts</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li><strong>Service-connected death:</strong> Up to $2,000 toward burial expenses.</li>
              <li><strong>Non-service-connected death:</strong> Up to $796 for burial and funeral expenses.</li>
              <li><strong>Plot or interment allowance:</strong> Up to $796 if not buried in a national cemetery.</li>
              <li><strong>Transportation allowance:</strong> Reimbursement for transportation of remains may be available in certain cases.</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">Amounts shown apply to deaths on or after October 1, 2024, and are adjusted annually for inflation.</p>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">National Cemetery Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The VA operates 155 national cemeteries across the United States. Eligible veterans, their spouses, and dependent children
              can be buried at no cost. Benefits include the gravesite, opening and closing of the grave, a government headstone or marker,
              perpetual care, a burial flag, and a Presidential Memorial Certificate.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To check eligibility, contact the National Cemetery Scheduling Office at 1-800-535-1117 or visit va.gov/burials-memorials.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Military Funeral Honors</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every eligible veteran is entitled to military funeral honors at no cost. By law, an honors detail consists of at least
              two uniformed military personnel, one from the veteran&apos;s parent service branch.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Folding and presentation of the U.S. flag to the next of kin</li>
              <li>• Playing of Taps (live or recorded)</li>
              <li>• Honor guard, rifle volley, and bugler when available</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Request military funeral honors through the funeral home, which will coordinate with the appropriate service branch.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply for Benefits</h2>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside leading-relaxed">
              <li>Gather the veteran&apos;s discharge papers (DD-214 or equivalent).</li>
              <li>Obtain a certified copy of the death certificate.</li>
              <li>Collect itemized funeral expense receipts.</li>
              <li>File <strong>VA Form 21P-530</strong> (Application for Burial Benefits) online at va.gov or by mail to the Pension Management Center.</li>
              <li>Most funeral homes will assist families with the paperwork at no charge.</li>
            </ol>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Presidential Memorial Certificate</h2>
            <p className="text-gray-700 leading-relaxed">
              The Presidential Memorial Certificate (PMC) is an engraved paper certificate signed by the current President honoring
              the memory of an honorably discharged deceased veteran. Multiple certificates can be requested at no cost. Apply with
              VA Form 40-0247 along with a copy of the veteran&apos;s discharge papers.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">State Veterans Cemeteries</h2>
            <p className="text-gray-700 leading-relaxed">
              In addition to VA national cemeteries, most states operate their own state veterans cemeteries. Eligibility and benefits
              vary by state, but most provide free or low-cost burial for eligible veterans and their dependents. Contact your state
              veterans affairs office for details.
            </p>
          </section>

          <div className="text-center mb-12">
            <Link
              href="/states"
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Find funeral homes near you that assist with veteran benefits →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
