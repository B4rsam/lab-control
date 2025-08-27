import { ILoginRequest } from "@/src/services/auth/auth.props";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const data: ILoginRequest = await req.json();

    if (!data.username || !data.password)
        return NextResponse.json({ message: "Bad Request" }, { status: 400 });

    if (data.username === "a" && data.password === "a") {
        return NextResponse.json({ message: "Good Auth" }, { status: 200 });
    }

    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
}
