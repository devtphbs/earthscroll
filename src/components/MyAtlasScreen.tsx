'use client'

import { useState, useEffect } from 'react'
import { places, Place } from '@/data/places'
import { User } from '@supabase/supabase-js'

interface MyAtlasScreenProps {
  user: User | null
  onAuth: () => void
}

export function MyAtlasScreen({ user, onAuth }: MyAtlasScreenProps) {
  const [savedPlaces, setSavedPlaces] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSavedPlaces = async () => {
      setLoading(true)
      
      if (user) {
        // TODO: Load from Supabase
      } else {
        const saved = localStorage.getItem('savedPlaces')
        if (saved) {
          setSavedPlaces(JSON.parse(saved))
        }
      }
      
      setLoading(false)
    }

    loadSavedPlaces()
  }, [user])

  const savedPlacesData = places.filter(place => savedPlaces.includes(place.id))

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white/60">Loading your atlas...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full glass-panel flex items-center justify-center">
          <span className="text-3xl">📚</span>
        </div>
        <h2 className="font-playfair text-2xl font-bold text-white mb-4 text-center">
          My Atlas
        </h2>
        <p className="text-white/60 text-center mb-8">
          Sign in to save and view your favorite places from around the world.
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

  if (savedPlacesData.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full glass-panel flex items-center justify-center">
          <span className="text-3xl">🗺️</span>
        </div>
        <h2 className="font-playfair text-2xl font-bold text-white mb-4 text-center">
          Your Atlas is Empty
        </h2>
        <p className="text-white/60 text-center mb-8">
          Start exploring and double-tap on places to save them to your personal atlas.
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen safe-area-top safe-area-bottom">
      {/* Header */}
      <div className="p-4">
        <h1 className="font-playfair text-2xl font-bold text-white mb-2">
          My Atlas
        </h1>
        <p className="text-white/60 text-sm">
          {savedPlacesData.length} place{savedPlacesData.length !== 1 ? 's' : ''} saved
        </p>
      </div>

      {/* Saved Places Grid */}
      <div className="px-4 pb-24">
        <div className="grid grid-cols-1 gap-4">
          {savedPlacesData.map((place) => (
            <div
              key={place.id}
              className="glass-panel rounded-xl overflow-hidden touch-feedback"
            >
              <div className="flex h-32">
                {/* Image */}
                <div 
                  className="w-32 h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${place.imageUrl})` }}
                ></div>
                
                {/* Content */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-white mb-1">
                      {place.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-2">
                      {place.country}
                    </p>
                    <p className="text-white/80 text-xs line-clamp-2">
                      {place.fact}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full category-${place.category}`}>
                      {place.category.replace('-', ' ')}
                    </span>
                    <button className="text-emerald-400 text-sm">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
