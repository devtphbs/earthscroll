'use client'

import { useState } from 'react'
import { User } from '@supabase/supabase-js'

interface PremiumScreenProps {
  user: User | null
  isPremium: boolean
}

export function PremiumScreen({ user, isPremium }: PremiumScreenProps) {
  const [loading, setLoading] = useState(false)

  const handleUpgrade = async (plan: 'monthly' | 'yearly') => {
    setLoading(true)
    // TODO: Implement Stripe checkout
    setTimeout(() => {
      setLoading(false)
      alert('Stripe integration coming soon!')
    }, 2000)
  }

  if (isPremium) {
    return (
      <div className="min-h-screen safe-area-top safe-area-bottom">
        <div className="p-4">
          <h1 className="font-playfair text-2xl font-bold text-white mb-2">
            Premium
          </h1>
          <p className="text-white/60 text-sm">
            You have unlimited access to EarthScroll!
          </p>
        </div>

        <div className="px-4">
          <div className="glass-panel-tinted rounded-2xl p-6 text-center mb-8">
            <div className="text-6xl mb-4">⭐</div>
            <h2 className="font-playfair text-2xl font-bold text-white mb-2">
              Premium Member
            </h2>
            <p className="text-white/80">
              Enjoy all the exclusive features and unlimited exploration!
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass-panel rounded-xl p-4">
              <h3 className="text-white font-medium mb-3">Your Benefits</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80 text-sm">Unlimited scrolling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80 text-sm">Full Atlas access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80 text-sm">Offline mode</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80 text-sm">AI Place Chat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80 text-sm">Priority support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen safe-area-top safe-area-bottom">
      {/* Header */}
      <div className="p-4">
        <h1 className="font-playfair text-2xl font-bold text-white mb-2">
          Premium
        </h1>
        <p className="text-white/60 text-sm">
          Unlock the full EarthScroll experience
        </p>
      </div>

      {/* Hero Section */}
      <div className="px-4 mb-8">
        <div className="glass-panel-tinted rounded-2xl p-6 text-center">
          <div className="text-6xl mb-4">💎</div>
          <h2 className="font-playfair text-2xl font-bold text-white mb-2">
            EarthScroll Premium
          </h2>
          <p className="text-white/80">
            Explore without limits and discover the world's secrets
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="px-4 mb-8">
        <h3 className="text-white font-medium mb-4">What you get:</h3>
        <div className="space-y-3">
          <div className="glass-panel rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center">
                <span className="text-xl">∞</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Unlimited Scrolling</h4>
                <p className="text-white/60 text-sm">No daily limits, explore endlessly</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center">
                <span className="text-xl">📚</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Full Atlas Access</h4>
                <p className="text-white/60 text-sm">Save unlimited places to your collection</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Offline Mode</h4>
                <p className="text-white/60 text-sm">Download places for offline exploration</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h4 className="text-white font-medium">AI Place Chat</h4>
                <p className="text-white/60 text-sm">Ask questions about any place you discover</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="px-4 pb-24">
        <h3 className="text-white font-medium mb-4">Choose your plan:</h3>
        <div className="space-y-3">
          <button
            onClick={() => handleUpgrade('monthly')}
            disabled={loading}
            className="w-full glass-panel rounded-xl p-4 text-left touch-feedback hover:bg-white/10 transition-all disabled:opacity-50"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Monthly</h4>
                <p className="text-white/60 text-sm">Billed monthly</p>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">€5</div>
                <div className="text-white/60 text-sm">/month</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleUpgrade('yearly')}
            disabled={loading}
            className="w-full glass-panel-tinted rounded-xl p-4 text-left touch-feedback hover:bg-white/10 transition-all border border-emerald-400/30 disabled:opacity-50"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Yearly</h4>
                <p className="text-emerald-400 text-sm">Save 35% • Best value</p>
              </div>
              <div className="text-right">
                <div className="text-white font-bold">€39</div>
                <div className="text-white/60 text-sm">/year</div>
              </div>
            </div>
          </button>
        </div>

        <p className="text-white/40 text-xs text-center mt-4">
          Secure payment via Stripe. Cancel anytime.
        </p>
      </div>
    </div>
  )
}
