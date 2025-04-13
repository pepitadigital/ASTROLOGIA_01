'use client'

import Link from 'next/link'
import { useSupabase } from '@/lib/supabase-provider'

export function Header() {
  const { user, signOut } = useSupabase()

  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="flex items-center">
        <span className="text-2xl font-serif font-bold text-primary-600">AstroLogic</span>
      </Link>
      
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/features" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">
          Funcionalidades
        </Link>
        <Link href="/pricing" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">
          Planos
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">
          Sobre
        </Link>
      </nav>
      
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <Link href="/dashboard" className="px-4 py-2 rounded-md text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors">
              Dashboard
            </Link>
            <button 
              onClick={() => signOut()}
              className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 transition-colors"
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="px-4 py-2 rounded-md text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors">
              Entrar
            </Link>
            <Link href="/signup" className="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors">
              Criar Conta
            </Link>
          </>
        )}
      </div>
    </header>
  )
}