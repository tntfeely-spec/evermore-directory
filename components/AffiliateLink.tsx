'use client';

interface AffiliateLinkProps {
  href: string;
  children: React.ReactNode;
  placeholder?: boolean;
  className?: string;
  retailer?: string;
  product?: string;
}

export default function AffiliateLink({ href, children, placeholder = false, className, retailer, product }: AffiliateLinkProps) {
  if (placeholder) {
    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction) {
      return null;
    }

    return (
      <span
        className={className || 'inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 text-yellow-900 font-semibold text-sm rounded-md shadow-sm my-2 border-2 border-yellow-600 border-dashed'}
        title="PLACEHOLDER: Replace with real affiliate URL before publishing"
      >
        {children}
        <span className="text-xs uppercase tracking-wider opacity-80">[PLACEHOLDER]</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={className || 'inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-md shadow-sm transition-colors no-underline my-2'}
      data-retailer={retailer}
      data-product={product}
    >
      {children}
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}
