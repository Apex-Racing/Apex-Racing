import { Inter } from 'next/font/google'
// Corrigindo os caminhos de importação (case sensitive)
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Apex Racing',
  description: 'Portal de notícias e informações sobre F1, WEC e WRC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gray-100">
            <div className="container mx-auto px-4 py-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}