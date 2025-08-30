import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const tokenVerify = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    try {
        const result = jwt.verify(token?.value as string, process.env.JWT_KEY as string);
        return {
            result,
            error: null,
        };
    } catch (error) {
        return {
            result: null,
            error: error,
        };
    }
};

export default tokenVerify;
