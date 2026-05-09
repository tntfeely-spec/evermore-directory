import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portal | Evermore Directory',
  description: 'Evermore Directory internal portal for funeral home listing management.',
  robots: { index: false, follow: false },
}

export default function PortalRouteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
