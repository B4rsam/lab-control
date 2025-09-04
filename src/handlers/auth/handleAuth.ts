import { NextResponse } from "next/server";
import { tokenVerify } from "@/src/middlewares/index";
import { db } from "@/src/drizzle/db";
import { userTable } from "@/src/drizzle/schema";
import { eq } from "drizzle-orm";

const handleAuth = async () => {
    const { result, error } = await tokenVerify();

    if (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }

    const { username } = result;

    if (!username) {
        return NextResponse.json({ message: "Invalid Auth" }, { status: 400 });
    }

    const dbData = await db
        .select({ username: userTable.username })
        .from(userTable)
        .where(eq(userTable.username, username));

    if (!dbData || !dbData.length) {
        return NextResponse.json({ message: "Invalid Auth" }, { status: 400 });
    }

    return NextResponse.json({ message: "Good Auth" }, { status: 200 });
};

export default handleAuth;
