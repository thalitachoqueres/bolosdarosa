import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bolos da Rosa',
  description: 'Adoçando seu dia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        <div className="mx-auto flex max-w-[1024px] flex-col items-center justify-between py-10 md:items-start md:pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
