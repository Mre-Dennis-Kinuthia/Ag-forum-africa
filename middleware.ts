import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PUBLIC_PATHS = new Set(["/", "/about", "/contact"])

const PUBLIC_PREFIXES = ["/api/", "/_next/", "/images/"]

const STATIC_EXT = /\.(svg|png|jpg|jpeg|webp|ico|txt|xml|webmanifest)$/i

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (STATIC_EXT.test(pathname)) {
    return NextResponse.next()
  }

  if (PUBLIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next()
  }

  if (PUBLIC_PATHS.has(pathname)) {
    return NextResponse.next()
  }

  return NextResponse.rewrite(new URL("/not-found", request.url))
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
