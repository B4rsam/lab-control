import { ILoginRequest } from "@/src/services/auth/auth.props";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { tokenConfig } from "@/src/middlewares";

const handleLogin = async (req: Request) => {
    const data: ILoginRequest = await req.json();

    if (!data.username || !data.password)
        return NextResponse.json({ message: "Bad Request" }, { status: 400 });

    if (data.username === "a" && data.password === "a") {
        const token = jwt.sign(
            {
                username: data.username,
            },
            process.env.JWT_KEY as string,
            tokenConfig
        );
        return new NextResponse(JSON.stringify({ message: "Logged in" }), {
            status: 200,
            headers: { "Set-Cookie": `token=${token}` },
        });
    }

    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
};

export default handleLogin;
