import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const ua = request.headers.get('user-agent')?.toLowerCase() || ''
  const isFacebook = ua.includes('facebookexternalhit') || ua.includes('facebookbot')
  const isTwitter = ua.includes('twitterbot')
  const isBot = ua.includes('bot')

  if (isFacebook || isTwitter || isBot) {
    // Whitelist social/AI bots to avoid 403 from auth/rate-limit layers
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = { matcher: '/:path*' }
