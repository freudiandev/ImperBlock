import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const allowAll = [{ userAgent: '*', allow: '/' }]

  const allowNamedBots = [
    { userAgent: 'facebookexternalhit', allow: '/' },
    { userAgent: 'FacebookBot', allow: '/' },
    { userAgent: 'Twitterbot', allow: '/' },
    { userAgent: 'LinkedInBot', allow: '/' },
    { userAgent: 'WhatsApp', allow: '/' },
    { userAgent: 'TelegramBot', allow: '/' },
  ]

  return {
    rules: [...allowNamedBots, ...allowAll],
    sitemap: 'https://impermebilizacion.uio.ec/sitemap.xml',
    host: 'https://impermebilizacion.uio.ec',
  }
}
export const dynamic = 'force-static'
export const revalidate = 3600
