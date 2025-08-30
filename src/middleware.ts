import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { authCheck } from "@/src/services/auth";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = (await cookies()).get("token");

    if (pathname === "/auth") return NextResponse.next();

    if (!token) return NextResponse.redirect(new URL("/login", req.url));

    try {
        const response = await authCheck();
        if (response) {
            return NextResponse.next();
        }
    } catch {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
}
