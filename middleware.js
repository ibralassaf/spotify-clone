import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Token will exist if the user is authenticated (Logged in)

  const url = req.nextUrl.clone();
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next/") || pathname.includes(".")) {
    return;
  }
  // Allow the request if the following is true ...
  // 1. the token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // Redirect them to login if they don't have a token and are requesting a protected route

  if (!token && pathname !== "/login") {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Redirect them to home if they have a token and are requesting a public route
  // (Not Working)
  if (token && pathname === "/login") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}
