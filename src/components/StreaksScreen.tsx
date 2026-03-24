'use client'

import { useState, useEffect } from 'react'
import { User } from '@supabase/supabase-js'

interface StreaksScreenProps {
  user: User | null
  onAuth: () => void
}

export function StreaksScreen({ user, onAuth }: StreaksScreenProps) {
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)
  const [loading, setLoading] = useState(true)
  const [visitHistory, setVisitHistory] = useState<string[]>([])

  useEffect(() => {
    const loadStreakData = async () => {
      setLoading(true)
      
      if (user) {
        // TODO: Load from Supabase
      } else {
        // Load from localStorage
        const savedStreak = localStorage.getItem('streak')
        const savedLongestStreak = localStorage.getItem('longestStreak')
        const savedHistory = localStorage.getItem('visitHistory')
        
        if (savedStreak) setCurrentStreak(parseInt(savedStreak))
        if (savedLongestStreak) setLongestStreak(parseInt(savedLongestStreak))
        if (savedHistory) setVisitHistory(JSON.parse(savedHistory))
      }
      
      setLoading(false)
    }

    loadStreakData()
  }, [user])

  const getStreakEmoji = (streak: number) => {
    if (streak >= 100) return '🔥🔥🔥'
    if (streak >= 50) return '🔥🔥'
    if (streak >= 10) return '🔥'
    if (streak >= 5) return '⭐'
    if (streak >= 1) return '✨'
    return '❄️'
  }

  const getStreakMessage = (streak: number) => {
    if (streak >= 100) return 'Legendary Explorer!'
    if (streak >= 50) return 'Master Adventurer!'
    if (streak >= 30) return 'Expert Traveler!'
    if (streak >= 14) return 'Dedicated Explorer!'
    if (streak >= 7) return 'Week Warrior!'
    if (streak >= 3) return 'Building Momentum!'
    if (streak >= 1) return 'Great Start!'
    return 'Begin Your Journey!'
  }

  const generateCalendarDays = () => {
    const days = []
    const today = new Date()
    
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      const hasVisited = visitHistory.includes(dateStr)
      
      days.push({
        date: dateStr,
        day: date.getDate(),
        hasVisited,
        isToday: i === 0
      })
    }
    
    return days
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white/60">Loading your streaks...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full glass-panel flex items-center justify-center">
          <span className="text-3xl">🔥</span>
        </div>
        <h2 className="font-playfair text-2xl font-bold text-white mb-4 text-center">
          Streaks
        </h2>
        <p className="text-white/60 text-center mb-8">
          Sign in to track your daily exploration streaks and compete with friends.
        </p>
        <button
          onClick={onAuth}
          className="px-6 py-3 rounded-xl glass-panel-tinted text-white font-medium touch-feedback"
        >
          Sign In
        </button>
      </div>
    )
  }

  const calendarDays = generateCalendarDays()

  return (
    <div className="min-h-screen safe-area-top safe-area-bottom">
      {/* Header */}
      <div className="p-4">
        <h1 className="font-playfair text-2xl font-bold text-white mb-2">
          Streaks
        </h1>
        <p className="text-white/60 text-sm">
          Keep your daily exploration streak alive!
        </p>
      </div>

      {/* Current Streak */}
      <div className="px-4 mb-8">
        <div className="glass-panel-tinted rounded-2xl p-6 text-center">
          <div className="text-6xl mb-4">{getStreakEmoji(currentStreak)}</div>
          <div className="font-playfair text-4xl font-bold text-white mb-2">
            {currentStreak}
          </div>
          <div className="text-white/80 text-lg mb-1">
            Day Streak
          </div>
          <div className="text-white/60 text-sm">
            {getStreakMessage(currentStreak)}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-panel rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {longestStreak}
            </div>
            <div className="text-white/60 text-sm">
              Longest Streak
            </div>
          </div>
          <div className="glass-panel rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {visitHistory.length}
            </div>
            <div className="text-white/60 text-sm">
              Total Days
            </div>
          </div>
        </div>
      </div>

      {/* 30-Day Calendar */}
      <div className="px-4 pb-24">
        <h3 className="text-white font-medium mb-4">Last 30 Days</h3>
        <div className="glass-panel rounded-xl p-4">
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day) => (
              <div
                key={day.date}
                className={`aspect-square flex items-center justify-center rounded-lg text-xs ${
                  day.hasVisited
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : day.isToday
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-white/5 text-white/40'
                }`}
              >
                {day.day}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-white/60">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500/30"></div>
              <span>Visited</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded bg-white/10 border border-white/20"></div>
              <span>Today</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded bg-white/5"></div>
              <span>Missed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
