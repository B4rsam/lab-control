import { SignOptions } from "jsonwebtoken";

const tokenConfig: SignOptions = {
    expiresIn: 900000,
};

export default tokenConfig;
