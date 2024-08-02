import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Meteora',
  description: 'A loja virtual mais rápida do universo e região.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <div className="px-12 pt-8 flex flex-col justify-between items-centere min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
