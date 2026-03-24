'use client'

import { useState, useRef, useEffect } from 'react'
import { Place } from '@/data/places'
import { motion } from 'framer-motion'
import { useGesture } from '@use-gesture/react'

interface PlaceCardProps {
  place: Place
  isSaved: boolean
  onSwipeRight: () => void
  onSwipeLeft: () => void
  onDoubleTap: () => void
  isPremium: boolean
  remainingCards: number
}

export function PlaceCard({ 
  place, 
  isSaved, 
  onSwipeRight, 
  onSwipeLeft, 
  onDoubleTap,
  isPremium,
  remainingCards 
}: PlaceCardProps) {
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  let lastTap = 0

  const bind = useGesture({
    onDrag: ({ offset: [x], down }) => {
      setDragOffset(x)
      setIsDragging(down)
    },
    onDragEnd: ({ offset: [x], velocity: [vx] }) => {
      if (Math.abs(x) > 100 || Math.abs(vx) > 0.5) {
        if (x > 0) {
          onSwipeRight()
        } else {
          onSwipeLeft()
        }
      }
      setDragOffset(0)
      setIsDragging(false)
    },
    onClick: () => {
      const currentTime = new Date().getTime()
      const tapLength = currentTime - lastTap
      if (tapLength < 500 && tapLength > 0) {
        onDoubleTap()
      }
      lastTap = currentTime
    }
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'eerie': return 'category-eerie'
      case 'hidden-gem': return 'category-hidden-gem'
      case 'natural-wonder': return 'category-natural-wonder'
      case 'man-made': return 'category-man-made'
      case 'abandoned': return 'category-abandoned'
      default: return 'category-natural-wonder'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'eerie': return 'Eerie'
      case 'hidden-gem': return 'Hidden Gem'
      case 'natural-wonder': return 'Natural Wonder'
      case 'man-made': return 'Man-made'
      case 'abandoned': return 'Abandoned'
      default: return 'Unknown'
    }
  }

  const rotation = dragOffset * 0.1
  const opacity = Math.abs(dragOffset) > 100 ? 0.7 : 1

  return (
    <motion.div
      ref={cardRef}
      {...bind()}
      className="absolute inset-0 flex items-center justify-center p-4"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity,
        rotate: rotation,
        x: dragOffset,
        transition: { type: 'spring', stiffness: 300, damping: 30 }
      }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      <div className="relative w-full h-full max-w-md max-h-[80vh] rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${place.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Category Tag */}
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 glass-panel-tinted border ${getCategoryColor(place.category)}`}>
            {getCategoryLabel(place.category)}
          </div>

          {/* Place Name */}
          <h2 className="font-playfair text-3xl font-bold text-white mb-2">
            {place.name}
          </h2>

          {/* Country */}
          <p className="text-white/80 text-sm mb-4">
            {place.country}
          </p>

          {/* Fact */}
          <p className="text-white/90 text-sm leading-relaxed mb-6">
            {place.fact}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            {/* Save Indicator */}
            <div className="flex items-center space-x-2">
              {isSaved ? (
                <div className="flex items-center space-x-1 text-emerald-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm">Saved</span>
                </div>
              ) : (
                <div className="text-white/60 text-sm">
                  Double tap to save
                </div>
              )}
            </div>

            {/* AI Chat Button (Premium only) */}
            {isPremium && (
              <button className="p-2 rounded-full glass-panel-tinted touch-feedback">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Swipe Indicators */}
        {isDragging && (
          <>
            {dragOffset > 50 && (
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                <div className="p-3 rounded-full bg-emerald-500/20 border border-emerald-500/50">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
            {dragOffset < -50 && (
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <div className="p-3 rounded-full bg-rose-500/20 border border-rose-500/50">
                  <svg className="w-8 h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Cards Remaining Indicator */}
      {!isPremium && (
        <div className="absolute top-4 right-4 glass-panel-tinted px-3 py-1 rounded-full text-xs">
          {remainingCards} cards left
        </div>
      )}
    </motion.div>
  )
}
