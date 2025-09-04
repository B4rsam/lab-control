import { ILoginRequest } from "@/src/services/auth/auth.props";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookieConfig, tokenConfig } from "@/src/middlewares";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { db } from "@/src/drizzle/db";
import { userTable } from "@/src/drizzle/schema";
import { eq } from "drizzle-orm";

const handleLogin = async (req: Request) => {
    const data: ILoginRequest = await req.json();

    if (!data.username || !data.password)
        return NextResponse.json({ message: "Bad Request" }, { status: 400 });

    const query = await db
        .select({ password: userTable.password, username: userTable.username })
        .from(userTable)
        .where(eq(userTable.username, data.username));

    if (!query || !query.length)
        return NextResponse.json({ message: "User does not exist" }, { status: 404 });

    const dbData = query[0];

    const result = await bcrypt.compare(data.password, dbData.password);

    if (result) {
        const token = jwt.sign(
            {
                username: data.username,
            },
            process.env.JWT_KEY as string,
            tokenConfig
        );
        const cookieStore = await cookies();
        cookieStore.set("token", token, cookieConfig);

        return NextResponse.json({ message: "Login Success" }, { status: 200 });
    }

    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
};

export default handleLogin;
