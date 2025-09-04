import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const cookieConfig: Partial<ResponseCookie> = {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 900000,
    path: "/",
};

export default cookieConfig;
