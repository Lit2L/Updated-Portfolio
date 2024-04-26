import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Space_Grotesk } from 'next/font/google'
import clsx from 'clsx'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-navigation'
import { Navigation } from '@/components/navigation'
import './globals.css'
import { Providers } from '@/providers'

const epilogue = Space_Grotesk({ subsets: ['latin'], weight: 'variable' })

export const metadata: Metadata = {
  title: 'Larry Ly - Frontend developer',
  description: `I bring Modern Web development to Data Analytics .`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-p-32 scroll-smooth' suppressHydrationWarning>
      <body
        className={clsx(
          'bg-dark-150 body text-dark-600 transition-colors duration-300 ease-in-out dark:bg-dark-850 dark:text-dark-50',
          epilogue.className
        )}
      >
        <Providers>
          <Navigation />
          <MobileNav />
          {children}
          <Analytics />
          <Footer />
        </Providers>

        <Analytics />
      </body>
    </html>
  )
}
