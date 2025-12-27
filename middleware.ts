import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent')?.toLowerCase() || ''
  const isBot = ua.includes('facebook') || ua.includes('twitter') || ua.includes('bot')

  if (isBot) {
    // Bypass any auth/geo logic for known crawlers
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
