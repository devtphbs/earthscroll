'use client'

import { User } from '@supabase/supabase-js'

interface BottomNavProps {
  currentScreen: string
  onScreenChange: (screen: string) => void
  user: User | null
  isPremium: boolean
}

export function BottomNav({ currentScreen, onScreenChange, user, isPremium }: BottomNavProps) {
  const navItems = [
    { id: 'discover', label: 'Discover', icon: '🌍' },
    { id: 'atlas', label: 'My Atlas', icon: '📚' },
    { id: 'streaks', label: 'Streaks', icon: '🔥' },
    { id: 'premium', label: 'Premium', icon: isPremium ? '⭐' : '💎' }
  ]

  return (
    <div className="bottom-nav">
      <div className="bottom-nav-content glass-panel-tinted">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onScreenChange(item.id)}
            className={`flex flex-col items-center justify-center space-y-1 px-3 py-2 rounded-full transition-all touch-feedback ${
              currentScreen === item.id
                ? 'text-white'
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
