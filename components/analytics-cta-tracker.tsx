'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type CtaType = 'booking' | 'phone' | 'email' | 'chat'

export function trackCta(ctaType: CtaType, ctaLocation: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'cta_click', {
    cta_type: ctaType,
    cta_location: ctaLocation,
  })
}

function getCtaType(href: string): CtaType | null {
  if (href.startsWith('tel:')) return 'phone'
  if (href.startsWith('mailto:')) return 'email'
  if (href.startsWith('https://customer.moovs.app/rydelight/new/info')) {
    return 'booking'
  }

  return null
}

function getCtaLocation(link: HTMLAnchorElement) {
  const labeledParent = link.closest<HTMLElement>('[data-analytics-location]')
  if (labeledParent?.dataset.analyticsLocation) {
    return labeledParent.dataset.analyticsLocation
  }

  const sectionId = link.closest<HTMLElement>('section[id]')?.id
  if (sectionId) return `section_${sectionId}`

  if (link.closest('header')) return 'site_header'
  if (link.closest('footer')) return 'site_footer'

  return window.location.pathname === '/concert-event-transportation/'
    ? 'event_page'
    : 'site_page'
}

export default function AnalyticsCtaTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest('a')
      if (!(link instanceof HTMLAnchorElement)) return

      const ctaType = getCtaType(link.href)
      if (!ctaType) return

      trackCta(ctaType, getCtaLocation(link))
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
