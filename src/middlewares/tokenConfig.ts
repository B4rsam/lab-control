import { SignOptions } from "jsonwebtoken";

const tokenConfig = {
    expiresIn: 900000,
    httpOnly: true,
} as SignOptions;

export default tokenConfig;
