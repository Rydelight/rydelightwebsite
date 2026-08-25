import type { MetadataRoute } from 'next'

const siteUrl = 'https://rydelight.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/concert-event-transportation`,
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
