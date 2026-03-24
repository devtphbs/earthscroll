'use client'

import { useState, useEffect } from 'react'
import { DiscoveryScreen } from '@/components/DiscoveryScreen'
import { AuthModal } from '@/components/AuthModal'
import { BottomNav } from '@/components/BottomNav'
import { MyAtlasScreen } from '@/components/MyAtlasScreen'
import { StreaksScreen } from '@/components/StreaksScreen'
import { PremiumScreen } from '@/components/PremiumScreen'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'

type Screen = 'discover' | 'atlas' | 'streaks' | 'premium'

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('discover')
  const [user, setUser] = useState<User | null>(null)
  const [showAuth, setShowAuth] = useState(false)
  const [isPremium, setIsPremium] = useState(false)

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      
      if (session?.user) {
        // Check if user is premium
        const { data: profile } = await supabase
          .from('profiles')
          .select('is_premium')
          .eq('id', session.user.id)
          .single()
        
        if (profile?.is_premium) {
          setIsPremium(true)
        } else if (session.user.email === process.env.NEXT_PUBLIC_FREE_PRO_EMAIL) {
          // Auto-grant premium for free pro email
          await supabase
            .from('profiles')
            .upsert({ 
              id: session.user.id, 
              email: session.user.email,
              is_premium: true 
            })
          setIsPremium(true)
        }
      }
    }

    checkSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        
        if (session?.user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('is_premium')
            .eq('id', session.user.id)
            .single()
          
          if (profile?.is_premium) {
            setIsPremium(true)
          } else if (session.user.email === process.env.NEXT_PUBLIC_FREE_PRO_EMAIL) {
            await supabase
              .from('profiles')
              .upsert({ 
                id: session.user.id, 
                email: session.user.email,
                is_premium: true 
              })
            setIsPremium(true)
          } else {
            setIsPremium(false)
          }
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const handleAuth = () => {
    if (!user) {
      setShowAuth(true)
    }
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'discover':
        return <DiscoveryScreen user={user} onAuth={handleAuth} isPremium={isPremium} />
      case 'atlas':
        return <MyAtlasScreen user={user} onAuth={handleAuth} />
      case 'streaks':
        return <StreaksScreen user={user} onAuth={handleAuth} />
      case 'premium':
        return <PremiumScreen user={user} isPremium={isPremium} />
      default:
        return <DiscoveryScreen user={user} onAuth={handleAuth} isPremium={isPremium} />
    }
  }

  return (
    <div className="min-h-screen bg-dark-primary relative overflow-hidden">
      {renderScreen()}
      
      <BottomNav 
        currentScreen={currentScreen}
        onScreenChange={(screen) => setCurrentScreen(screen as Screen)}
        user={user}
        isPremium={isPremium}
      />
      
      {showAuth && (
        <AuthModal 
          onClose={() => setShowAuth(false)}
          onSuccess={(user) => {
            setUser(user)
            setShowAuth(false)
          }}
        />
      )}
    </div>
  )
}
