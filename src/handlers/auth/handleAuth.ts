import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const handleAuth = async (req: Request) => {
    const cookieStore = await cookies();
    try {
        jwt.verify(cookieStore.get("token")?.value as string, "test");
        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        // @ts-ignore
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
};

export default handleAuth;
