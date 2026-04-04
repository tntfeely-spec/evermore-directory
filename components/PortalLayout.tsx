'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

type PortalUser = { username: string; role: 'admin' | 'sales' }

const NAV_ITEMS = [
  { href: '/portal/dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4' },
  { href: '/portal/training', label: 'Training', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', sub: [
    { href: '/portal/training/manual', label: 'Training Manual' },
  ] },
  { href: '/portal/commission', label: 'Commission', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { href: '/portal/sales', label: 'Log a Sale', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { href: '/portal/documents', label: 'Documents', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { href: '/portal/profile', label: 'My Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
]

export function usePortalUser(): PortalUser | null {
  const [user, setUser] = useState<PortalUser | null>(null)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem('portal_user')
    if (stored) {
      try { setUser(JSON.parse(stored)) } catch { router.push('/portal/login') }
    } else {
      router.push('/portal/login')
    }
  }, [router])

  return user
}

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const user = usePortalUser()
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  function logout() {
    localStorage.removeItem('portal_user')
    router.push('/portal/login')
  }

  if (!user) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-gray-400 text-sm">Loading...</p></div>
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-800 px-4 py-3 flex items-center justify-between">
        <span className="text-white font-bold text-sm">Evermore Portal</span>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-800 flex flex-col transition-transform lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-6 py-6 border-b border-slate-700">
          <h1 className="text-white font-bold text-lg">Evermore</h1>
          <p className="text-slate-400 text-xs mt-0.5">Sales Portal</p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <div key={item.href}>
                <Link href={item.href} onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                    active ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}>
                  <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  {item.label}
                </Link>
                {'sub' in item && item.sub && active && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.sub.map((sub: { href: string; label: string }) => (
                      <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-1.5 rounded-md text-xs transition-colors ${
                          pathname === sub.href ? 'text-white bg-slate-600' : 'text-slate-400 hover:text-white'
                        }`}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="px-4 py-4 border-t border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-white text-xs font-bold">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="text-white text-sm font-medium">{user.username}</div>
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                user.role === 'admin' ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'
              }`}>
                {user.role === 'admin' ? 'Admin' : 'Rep'}
              </span>
            </div>
          </div>
          <button onClick={logout}
            className="w-full text-left text-slate-400 hover:text-white text-xs transition-colors">
            Sign out
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {mobileOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} />}

      {/* Main content */}
      <main className="flex-1 lg:ml-64 pt-14 lg:pt-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
