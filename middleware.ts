import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip internal paths
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return;
    }

    // If already has locale, allow
    if (pathname.startsWith("/en") || pathname.startsWith("/ro")) {
        return;
    }

    // Only redirect root
    if (pathname === "/") {
        const url = request.nextUrl.clone();
        url.pathname = "/en";
        return NextResponse.redirect(url);
    }

    return;
}
