// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/", "/work", "/project"];

export async function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("__session")?.value;

  const isProtected = protectedRoutes.includes(request.nextUrl.pathname);

  if (isProtected && !currentUser) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/work", "/project"],
};
