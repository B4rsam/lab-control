import { cookies, headers } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";

interface Success {
    result: JwtPayload | any;
    error: null;
}

interface Failure<E> {
    result: null;
    error: E;
}

type Result<E> = Success | Failure<E>;

const tokenVerify = async <E = Error>(): Promise<Result<E>> => {
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
            error: error as E,
        };
    }
};

export default tokenVerify;
