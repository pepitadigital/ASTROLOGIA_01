"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import type { Session, User } from "@supabase/supabase-js"

type SupabaseContext = {
  supabase: ReturnType<typeof createClient> | null
  session: Session | null
  user: User | null
  signOut: () => Promise<void>
}

const Context = createContext<SupabaseContext>({
  supabase: null,
  session: null,
  user: null,
  signOut: async () => {},
})

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => {
    if (typeof window === "undefined") return null
    
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase environment variables")
      return null
    }
    
    return createClient(supabaseUrl, supabaseKey)
  })
  
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  
  useEffect(() => {
    if (!supabase) return
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
    })
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        router.refresh()
      }
    )
    
    return () => subscription.unsubscribe()
  }, [supabase, router])
  
  const signOut = async () => {
    if (!supabase) return
    await supabase.auth.signOut()
    router.push("/login")
  }
  
  const value = {
    supabase,
    session,
    user,
    signOut,
  }
  
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useSupabase = () => useContext(Context)