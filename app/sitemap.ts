import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://impermebilizacion.uio.ec'
  const lastModified = new Date()

  return [
    {
      url: `${base}/`,
      changeFrequency: 'weekly',
      priority: 1.0,
      lastModified,
    },
    {
      url: `${base}/robots.txt`,
      changeFrequency: 'weekly',
      priority: 0.4,
      lastModified,
    },
  ]
}

export const dynamic = 'force-static'
export const revalidate = 3600
