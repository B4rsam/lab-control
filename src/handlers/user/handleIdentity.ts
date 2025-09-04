import { tokenVerify } from "@/src/middlewares";
import { NextResponse } from "next/server";

const handleIdentity = async () => {
    const { result, error } = await tokenVerify();

    if (error) return NextResponse.json({ message: "Invalid Auth" }, { status: 401 });

    const { username } = result;

    return NextResponse.json({ data: username });
};

export default handleIdentity;
