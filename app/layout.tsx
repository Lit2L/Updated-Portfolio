import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Space_Grotesk } from 'next/font/google'
import clsx from 'clsx'
import { Footer } from '@components/footer'
import { MobileNav } from '@components/mobile-navigation'
import { Navigation } from '@components/navigation'
import './globals.css'
import { Providers } from '@providers'

const epilogue = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Larry Ly - Data Analyst and Frontend developer',
  description: `I bring data driven insights to modern Web development .`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-p-32 scroll-smooth' suppressHydrationWarning>
      <body
        className={clsx(
          'bg-dark-50 body text-dark-600 transition-colors duration-300 ease-in-out dark:bg-dark-850 dark:text-dark-50',
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
