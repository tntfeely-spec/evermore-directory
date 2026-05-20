'use client';

interface AffiliateLinkProps {
  href: string;
  children: React.ReactNode;
  placeholder?: boolean;
  className?: string;
  retailer?: string;
  product?: string;
}

export default function AffiliateLink({ href, children, placeholder = false, className = '', retailer, product }: AffiliateLinkProps) {
  if (placeholder) {
    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction) {
      // In production, render as plain text with no link to prevent broken affiliate URLs
      return <span className={className}>{children}</span>;
    }

    // In development, render with yellow highlight so it is obvious the URL needs to be filled in
    return (
      <span
        className={`bg-yellow-200 border border-yellow-400 px-1 rounded ${className}`}
        title="PLACEHOLDER: Replace with real affiliate URL before publishing"
      >
        {children} <span className="text-xs font-bold text-yellow-700">[PLACEHOLDER]</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={className || 'text-slate-600 hover:text-slate-800 font-medium underline'}
      data-retailer={retailer}
      data-product={product}
    >
      {children}
    </a>
  );
}
