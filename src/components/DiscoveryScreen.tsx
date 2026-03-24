'use client'

import { useState, useEffect, useRef } from 'react'
import { places, Place } from '@/data/places'
import { PlaceCard } from './PlaceCard'
import { StreakCounter } from './StreakCounter'
import { PaywallCard } from './PaywallCard'
import { User } from '@supabase/supabase-js'

interface DiscoveryScreenProps {
  user: User | null
  onAuth: () => void
  isPremium: boolean
}

export function DiscoveryScreen({ user, onAuth, isPremium }: DiscoveryScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [savedPlaces, setSavedPlaces] = useState<string[]>([])
  const [cardsViewed, setCardsViewed] = useState(0)
  const [showPaywall, setShowPaywall] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const dailyLimit = 10
  const remainingCards = dailyLimit - cardsViewed

  useEffect(() => {
    // Load saved places from localStorage or Supabase
    const loadSavedPlaces = async () => {
      if (user) {
        // TODO: Load from Supabase
      } else {
        const saved = localStorage.getItem('savedPlaces')
        if (saved) {
          setSavedPlaces(JSON.parse(saved))
        }
      }
    }

    loadSavedPlaces()
  }, [user])

  useEffect(() => {
    // Check daily limit
    if (!isPremium && cardsViewed >= dailyLimit) {
      setShowPaywall(true)
    }
  }, [cardsViewed, isPremium])

  const handleSwipeRight = async (place: Place) => {
    // Save place
    const newSavedPlaces = [...savedPlaces, place.id]
    setSavedPlaces(newSavedPlaces)
    
    if (user) {
      // TODO: Save to Supabase
    } else {
      localStorage.setItem('savedPlaces', JSON.stringify(newSavedPlaces))
    }

    // Increment cards viewed
    setCardsViewed(prev => prev + 1)
    
    // Move to next card
    if (currentIndex < places.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const handleSwipeLeft = () => {
    // Increment cards viewed
    setCardsViewed(prev => prev + 1)
    
    // Move to next card
    if (currentIndex < places.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const handleDoubleTap = (place: Place) => {
    handleSwipeRight(place)
  }

  const currentPlace = places[currentIndex]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with streak counter */}
      <div className="safe-area-top p-4">
        <div className="flex justify-between items-center">
          <h1 className="font-playfair text-2xl font-bold text-white">
            EarthScroll
          </h1>
          <StreakCounter user={user} />
        </div>
      </div>

      {/* Cards container */}
      <div 
        ref={containerRef}
        className="flex-1 relative overflow-hidden"
      >
        {showPaywall ? (
          <PaywallCard onUpgrade={() => {}} />
        ) : (
          <PlaceCard
            key={currentPlace.id}
            place={currentPlace}
            isSaved={savedPlaces.includes(currentPlace.id)}
            onSwipeRight={() => handleSwipeRight(currentPlace)}
            onSwipeLeft={handleSwipeLeft}
            onDoubleTap={() => handleDoubleTap(currentPlace)}
            isPremium={isPremium}
            remainingCards={remainingCards}
          />
        )}
      </div>

      {/* Bottom padding for navigation */}
      <div className="h-20 safe-area-bottom"></div>
    </div>
  )
}
