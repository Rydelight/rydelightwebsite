import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import AnalyticsCtaTracker from '@/components/analytics-cta-tracker'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://rydelight.com'
const homepageTitle = 'Rydelight | Private Electric Chauffeur Service in DFW'
const homepageDescription =
  'Private electric chauffeur service across Dallas-Fort Worth for airport transfers, business travel, events, and special occasions. Travel in a 2025 Tesla Model Y with Rydelight.'
const socialImage = `${siteUrl}/images/rydelight-home-hero-private-electric.png`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: homepageTitle,
  description: homepageDescription,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: homepageTitle,
    description: homepageDescription,
    siteName: 'Rydelight',
    images: [
      {
        url: socialImage,
        width: 2560,
        height: 1440,
        alt: 'Private electric chauffeur vehicle in the Dallas-Fort Worth area',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homepageTitle,
    description: homepageDescription,
    images: [socialImage],
  },
}

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rydelight',
  url: siteUrl,
  logo: `${siteUrl}/images/LogoSquareTransparent.png`,
  email: 'booking@rydelight.com',
  telephone: '+14699190519',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+14699190519',
    contactType: 'customer service',
    email: 'booking@rydelight.com',
    availableLanguage: 'English',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Dallas-Fort Worth Metroplex',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-white px-4 py-3 font-semibold text-gray-900 shadow-lg focus:not-sr-only focus:outline-none focus:ring-4 focus:ring-[#0091ea]"
        >
          Skip to main content
        </a>
        {children}
        <AnalyticsCtaTracker />
        <Script id="organization-structured-data" type="application/ld+json">
          {JSON.stringify(organizationStructuredData)}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1PYL66XNHS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1PYL66XNHS');
          `}
        </Script>
      </body>
    </html>
  )
}
