import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const ua = request.headers.get('user-agent')?.toLowerCase() || ''
  const isBot = ua.includes('facebook') || ua.includes('twitter') || ua.includes('bot')

  if (isBot) {
    // Whitelist social/AI bots; bypass auth/geo/firewall logic
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
