import Link from 'next/link'
import { Header } from '@/components/ui/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary-200 after:via-primary-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary-700 before:dark:opacity-10 after:dark:from-secondary-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>

      <div className="max-w-4xl w-full px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
          Personal Astrologer
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Sua jornada de autoconhecimento guiada pelas estrelas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link 
            href="/login" 
            className="px-8 py-3 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            Começar Agora
          </Link>
          <Link 
            href="/about" 
            className="px-8 py-3 rounded-md border border-secondary-600 text-secondary-600 hover:bg-secondary-50 transition-colors"
          >
            Saiba Mais
          </Link>
        </div>
        
        {/* Features */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-serif font-semibold mb-3">Mapa Astrológico</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Visualize seu mapa natal interativo e descubra padrões únicos da sua personalidade.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-serif font-semibold mb-3">Diário Pessoal</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Registre suas experiências e observe como elas se conectam com os ciclos astrológicos.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-serif font-semibold mb-3">Mentor Astrológico</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Receba insights personalizados baseados no seu mapa e nos trânsitos planetários atuais.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}