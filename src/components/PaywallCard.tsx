'use client'

import { motion } from 'framer-motion'

interface PaywallCardProps {
  onUpgrade: () => void
}

export function PaywallCard({ onUpgrade }: PaywallCardProps) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center p-4"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="w-full max-w-md glass-panel-tinted rounded-2xl p-8 text-center">
        {/* Lock Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full glass-panel flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="font-playfair text-2xl font-bold text-white mb-4">
          Unlock EarthScroll Premium
        </h2>

        {/* Description */}
        <p className="text-white/80 mb-6">
          You've reached your daily limit! Upgrade to Premium for unlimited scrolling and exclusive features.
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8 text-left">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white/90 text-sm">Unlimited scrolling</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white/90 text-sm">Full Atlas access</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white/90 text-sm">Offline mode</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white/90 text-sm">AI Place Chat</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <div className="text-white/60 text-sm mb-2">Choose your plan:</div>
          <div className="space-y-2">
            <button
              onClick={onUpgrade}
              className="w-full glass-panel rounded-xl p-4 touch-feedback hover:bg-white/10 transition-all"
            >
              <div className="text-white font-medium">Monthly</div>
              <div className="text-white/60 text-sm">€5/month</div>
            </button>
            <button
              onClick={onUpgrade}
              className="w-full glass-panel-tinted rounded-xl p-4 touch-feedback hover:bg-white/10 transition-all border border-emerald-400/30"
            >
              <div className="text-white font-medium">Yearly</div>
              <div className="text-emerald-400 text-sm">€39/year (Save 35%)</div>
            </button>
          </div>
        </div>

        {/* Terms */}
        <p className="text-white/40 text-xs">
          Secure payment via Stripe. Cancel anytime.
        </p>
      </div>
    </motion.div>
  )
}
