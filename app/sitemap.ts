import type { MetadataRoute } from 'next'

const siteUrl = 'https://rydelight.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-08-27'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/dfw-airport-transportation`,
      lastModified: new Date('2026-08-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/concert-event-transportation`,
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
