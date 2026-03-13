import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Evermore Directory | Built by a Former Firefighter and Paramedic',
  description: 'Evermore Directory was built by Terry Feely, a former firefighter and paramedic from the Chicago area. Free for families. Funeral homes across all 50 states.',
  alternates: {
    canonical: 'https://funeralhomedirectories.com/about',
  },
  openGraph: {
    title: 'About Evermore Directory | Built by a Former Firefighter and Paramedic',
    description: 'Evermore Directory was built by Terry Feely, a former firefighter and paramedic from the Chicago area. Free for families. Funeral homes across all 50 states.',
    url: 'https://funeralhomedirectories.com/about',
    siteName: 'Evermore Directory',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
<div className="min-h-screen relative">
  <div className="fixed inset-0 z-0" style={{ backgroundImage: 'url(/Mountain_Lake_Image.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.35 }} />
  <div className="relative z-10">
        {/* Hero */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Built by Someone Who Has Been There
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Evermore Directory exists because families deserve honest, straightforward
              help finding the right funeral home during one of the most difficult
              times of their lives.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

          {/* Founding Story */}
          <div className="bg-white rounded-xl shadow-md p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              The Story Behind Evermore
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-lg">
                I spent most of my career as a firefighter and paramedic in the
                Chicago area, working out of the suburbs just outside the city.
                I had the profound responsibility of being present with families
                during the most difficult moments of their lives, on emergency
                scenes, in emergency rooms, and in the quiet moments after.
              </p>
              <p>
                What I witnessed, again and again, was families facing one of
                the most important decisions they would ever make with almost no
                real information to guide them. Grieving and exhausted, they had
                no way to compare services, no idea what questions to ask, and
                no one in their corner helping them find the right fit.
              </p>
              <p>
                I built Evermore Directory because that deserves to change.
              </p>
              <p>
                Evermore lists funeral homes across all 50 states, organized by
                city so families can find and compare local providers when it
                matters most. It is completely free for families to use.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">Terry Feely, Founder</p>
                <p className="text-sm text-gray-500">Former Firefighter and Paramedic</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-xl shadow-md p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How Evermore Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-700">1</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Free for Families</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Search and compare funeral homes in any city across all 50 states.
                  No account required. No cost.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-700">2</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Supported by the Funeral Profession</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Funeral homes can claim their free listing or upgrade to a
                  featured placement for $99 per month. Resources and partners
                  on the site are chosen for their relevance to families
                  navigating end-of-life decisions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-700">3</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Families First, Always</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Every decision about how this directory works starts with one
                  question: does this serve families well? That has been the
                  guiding principle from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-slate-800 rounded-xl shadow-md p-10 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Commitment to Families
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-3">Honest Information</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Listings include contact details, services offered, and price
                  ranges so families can make informed comparisons before making
                  any calls.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Relevant Resources Only</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Any partners or resources on this site are chosen because they
                  are genuinely useful to families during this time. Funeral
                  planning, grief support, estate guidance. Nothing unrelated.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Built for This Moment</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  We know families using this directory are often doing so under
                  enormous stress. Everything about how this site is designed
                  reflects that.
                </p>
              </div>
            </div>
          </div>

          {/* By the Numbers */}
          <div className="bg-white rounded-xl shadow-md p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Evermore by the Numbers
            </h2>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-700 mb-1">2,082+</div>
                <div className="text-gray-600 text-sm">Cities Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-700 mb-1">50</div>
                <div className="text-gray-600 text-sm">States + DC</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-700 mb-1">$0</div>
                <div className="text-gray-600 text-sm">Cost to Families</div>
              </div>
            </div>
          </div>

          {/* For Funeral Homes */}
          <div className="bg-white rounded-xl shadow-md p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              For Funeral Home Owners
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your listing is already live. Claiming it takes 2 minutes and is
              completely free. A featured listing gives you priority placement
              and monthly analytics showing how many families viewed your listing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://claim.funeralhomedirectories.com/claim"
                className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors text-center"
              >
                Claim Your Free Listing
              </Link>
              <Link
                href="/featured-listing"
                className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
              >
                Learn About Featured Listings
              </Link>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="bg-white rounded-xl shadow-md p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Have a question, a correction, or want to learn more about listing
              your funeral home? We would love to hear from you.
            </p>
            <a
              href="mailto:listings@funeralhomedirectories.com"
              className="text-slate-700 hover:text-slate-800 font-semibold text-lg"
            >
              listings@funeralhomedirectories.com
            </a>
          </div>

          {/* Based in Nashville */}
          <div className="bg-white rounded-xl shadow-md p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Based in Nashville, Tennessee
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Evermore Directory is owned and operated by Colbridges Digital LLC,
              Nashville, Tennessee.
            </p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
