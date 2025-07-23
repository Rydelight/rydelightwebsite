
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rydelight - Premium Chauffeur Service | DFW Metro Area',
  description: 'Professional chauffeur service in the DFW metro area. Luxury Tesla Model Y transportation for business executives, airport transfers, and special occasions. Book your ride today.',
  keywords: 'chauffeur service, DFW, Dallas, Fort Worth, airport transfer, Tesla Model Y, luxury transportation, business travel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
