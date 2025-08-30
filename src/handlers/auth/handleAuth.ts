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

    const { username } = result.username;

    if (!username) {
        return NextResponse.json({ message: "Bad Username" }, { status: 400 });
    }

    const dbData = await db.select().from(userTable).where(eq(userTable.username, username));
    console.log(dbData);
};

export default handleAuth;
