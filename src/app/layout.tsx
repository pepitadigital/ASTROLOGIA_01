import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { SupabaseProvider } from '@/lib/supabase-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Personal Astrologer',
  description: 'Um aplicativo de bem-estar e autoconhecimento baseado em astrologia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}