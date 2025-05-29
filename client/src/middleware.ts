import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const accessToken = request.cookies.get("accessToken");

  const isAuthPage = url.pathname === "/login" || url.pathname === "/register";
  const isProtectedPage = url.pathname.startsWith("/dashboard");

  if (isAuthPage && accessToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (isProtectedPage && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Otherwise allow the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
