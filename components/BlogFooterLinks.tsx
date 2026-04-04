import Link from 'next/link';

export default function BlogFooterLinks() {
  return (
    <>
      <section className="mb-10 bg-slate-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Find Funeral Homes in Your City
        </h2>
        <p className="text-gray-600 mb-4">
          Browse verified funeral homes and compare prices in major cities across the US.
        </p>
        <ul className="space-y-2">
          <li><Link href="/funeral-homes/tn/nashville" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Nashville, TN &rarr;</Link></li>
          <li><Link href="/funeral-homes/ga/atlanta" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Atlanta, GA &rarr;</Link></li>
          <li><Link href="/funeral-homes/tx/houston" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Houston, TX &rarr;</Link></li>
          <li><Link href="/funeral-homes/il/chicago" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Chicago, IL &rarr;</Link></li>
          <li><Link href="/funeral-homes/tn/memphis" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Memphis, TN &rarr;</Link></li>
          <li><Link href="/funeral-homes/ca/los-angeles" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Homes in Los Angeles, CA &rarr;</Link></li>
        </ul>
      </section>

      <section className="mb-10 bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Explore the Directory
        </h2>
        <ul className="space-y-2">
          <li><Link href="/states" className="text-slate-600 hover:text-slate-800 font-medium">Browse All States &rarr;</Link></li>
          <li><Link href="/" className="text-slate-600 hover:text-slate-800 font-medium">Find Funeral Homes Near You &rarr;</Link></li>
          <li><Link href="/resources" className="text-slate-600 hover:text-slate-800 font-medium">Funeral Home Planning Resources &rarr;</Link></li>
          <li><Link href="/featured-listing" className="text-slate-600 hover:text-slate-800 font-medium">List Your Funeral Home &rarr;</Link></li>
        </ul>
      </section>
    </>
  );
}
