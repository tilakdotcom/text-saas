import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const accessToken = request.cookies.get("accessToken");

  const isProtectedPage =
    url.pathname.startsWith("/dashboard") || url.pathname.startsWith("/upload");

  if (isProtectedPage && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
