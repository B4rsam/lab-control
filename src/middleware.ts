import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { authCheck } from "@/src/services/auth";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = (await cookies()).get("token");

    if (pathname === "/auth") return NextResponse.next();

    if (!token) return NextResponse.redirect(new URL("/auth", req.url));

    try {
        const response = await authCheck(token);
        if (response) {
            return NextResponse.next();
        }
    } catch {
        return NextResponse.redirect(new URL("/auth", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|sw.js|firebase-messaging-sw.js|.*\\.(?:ico|png|json|txt|xml|webmanifest)$).*)",
    ],
};
