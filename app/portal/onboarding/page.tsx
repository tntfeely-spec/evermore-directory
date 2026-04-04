'use client'

import PortalLayout, { usePortalUser } from '@/components/PortalLayout'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

type OnboardingProgress = Record<string, boolean>

type ChecklistItem = {
  key: string
  label: string
  link?: string
}

type Section = {
  title: string
  items: ChecklistItem[]
}

const SECTIONS: Section[] = [
  {
    title: 'Day 1',
    items: [
      { key: 'day1_profile', label: 'Complete your profile at /portal/profile', link: '/portal/profile' },
      { key: 'day1_w9', label: 'Submit your W-9 (email terry.feely@me.com with subject: W-9 — [Your Name])' },
      { key: 'day1_agreement', label: 'Read and agree to the Consultant Agreement in /portal/documents', link: '/portal/documents' },
      { key: 'day1_login', label: 'Confirm your login works on desktop and mobile' },
    ],
  },
  {
    title: 'Day 2',
    items: [
      { key: 'day2_manual', label: 'Read the full Sales Training Manual at /portal/training/manual', link: '/portal/training/manual' },
      { key: 'day2_quickref', label: 'Study the Quick Reference Card at /portal/training/quick-reference', link: '/portal/training/quick-reference' },
      { key: 'day2_arc', label: 'Memorize the Acknowledge, Reframe, Close framework' },
      { key: 'day2_script', label: 'Write out Script A in your own words without looking' },
    ],
  },
  {
    title: 'Day 3',
    items: [
      { key: 'day3_practice', label: 'Do 5 practice calls with a friend or family member' },
      { key: 'day3_objections', label: 'Practice 3 objection responses' },
      { key: 'day3_lookup', label: 'Look up 10 funeral homes on funeralhomedirectories.com' },
    ],
  },
  {
    title: 'Days 4-7',
    items: [
      { key: 'week1_contacts', label: 'Make your first 10 real outreach contacts' },
      { key: 'week1_log', label: 'Log every contact in the Call Tracker' },
      { key: 'week1_followups', label: 'Review follow-up dates on dashboard each morning' },
    ],
  },
  {
    title: 'Week 2 (Days 8-14)',
    items: [
      { key: 'week2_contacts', label: '20 outreach contacts minimum' },
      { key: 'week2_close', label: 'First close goal: 1 deal by end of week 2' },
      { key: 'week2_calculator', label: 'Review the commission calculator' },
    ],
  },
  {
    title: 'Week 3-4 (Days 15-30)',
    items: [
      { key: 'week3_volume', label: '20+ contacts per day' },
      { key: 'week3_callbacks', label: 'Work your callbacks from weeks 1-2' },
      { key: 'week3_closes', label: 'Close goal: 1 to 3 deals by end of day 30' },
      { key: 'week3_upsell', label: 'Calendar a 90-day follow-up for any monthly close' },
    ],
  },
]

const ALL_KEYS = SECTIONS.flatMap((s) => s.items.map((i) => i.key))

export default function OnboardingPage() {
  const user = usePortalUser()
  const [progress, setProgress] = useState<OnboardingProgress>({})
  const [loading, setLoading] = useState(true)

  const loadProgress = useCallback(async () => {
    if (!user) return
    try {
      const res = await fetch(`/api/portal/profile?username=${user.username}`)
      const data = await res.json()
      if (data.profile?.onboarding_progress) {
        setProgress(data.profile.onboarding_progress)
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    loadProgress()
  }, [loadProgress])

  if (!user) return null

  const completedCount = ALL_KEYS.filter((k) => progress[k]).length
  const totalCount = ALL_KEYS.length
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  async function toggleItem(key: string) {
    const updated = { ...progress, [key]: !progress[key] }
    setProgress(updated)
    try {
      await fetch('/api/portal/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user!.username,
          onboarding_progress: updated,
        }),
      })
    } catch {
      // revert on failure
      setProgress(progress)
    }
  }

  function sectionComplete(section: Section): boolean {
    return section.items.every((item) => progress[item.key])
  }

  return (
    <PortalLayout>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">30-Day Onboarding</h1>

      {/* Progress Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm font-semibold text-gray-900">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">{completedCount} of {totalCount} items completed</p>
      </div>

      {loading ? (
        <div className="text-center text-gray-400 text-sm py-8">Loading onboarding progress...</div>
      ) : (
        <div className="space-y-6">
          {SECTIONS.map((section) => {
            const done = sectionComplete(section)
            return (
              <div
                key={section.title}
                className={`bg-white rounded-lg border border-gray-200 overflow-hidden ${done ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-gray-200'}`}
              >
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    {section.title}
                    {done && (
                      <span className="text-green-500 text-sm font-normal">Complete</span>
                    )}
                  </h2>
                </div>
                <div className="px-6 py-3">
                  {section.items.map((item) => (
                    <label
                      key={item.key}
                      className="flex items-start gap-3 py-3 cursor-pointer hover:bg-gray-50 -mx-2 px-2 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={!!progress[item.key]}
                        onChange={() => toggleItem(item.key)}
                        className="mt-0.5 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className={`text-sm ${progress[item.key] ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                        {item.link ? (
                          <>
                            {item.label.split(item.link)[0]}
                            <Link href={item.link} className="text-blue-600 hover:underline" onClick={(e) => e.stopPropagation()}>
                              {item.link}
                            </Link>
                            {item.label.split(item.link)[1]}
                          </>
                        ) : (
                          item.label
                        )}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Callout */}
      <div className="mt-8 bg-slate-100 border-l-4 border-l-slate-600 rounded-r-lg p-6">
        <p className="text-sm text-slate-700 italic">
          Your goal for month one is not to be perfect. It is to build the habit of calling and logging every day. The reps who succeed long-term are the ones who showed up consistently in month one.
        </p>
      </div>
    </PortalLayout>
  )
}
