'use client'

import PortalLayout, { usePortalUser } from '@/components/PortalLayout'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Lead = {
  business_name: string
  city: string
  state: string
  phone: string
}

export default function LeadsPage() {
  const user = usePortalUser()
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)

  const loadLeads = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('funeral_homes')
        .select('business_name, city, state, phone')
        .eq('state', 'TN')
        .limit(10)

      if (!error && data) {
        setLeads(data)
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadLeads()
  }, [loadLeads])

  if (!user) return null

  return (
    <PortalLayout>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Leads</h1>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Funeral Homes — Tennessee</h2>
        </div>

        {loading ? (
          <div className="px-6 py-8 text-center text-gray-400 text-sm">Loading leads...</div>
        ) : leads.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-400 text-sm">No leads found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-600">
                  <th className="px-4 py-3 font-medium">Business Name</th>
                  <th className="px-4 py-3 font-medium">City</th>
                  <th className="px-4 py-3 font-medium">Phone</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.map((lead, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900 font-medium">{lead.business_name}</td>
                    <td className="px-4 py-3 text-gray-700">{lead.city}</td>
                    <td className="px-4 py-3 text-gray-700">{lead.phone || '—'}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        Not contacted
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/portal/calls?business=${encodeURIComponent(lead.business_name)}&city=${encodeURIComponent(`${lead.city}, ${lead.state}`)}`}
                        className="inline-block px-3 py-1.5 bg-slate-800 text-white rounded-md text-xs font-medium hover:bg-slate-700 transition-colors"
                      >
                        Log a Call
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PortalLayout>
  )
}
