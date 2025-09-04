import { ILoginRequest } from "@/src/services/auth/auth.props";
import api from "@/src/services/instance";
import { IGeneralResponse } from "@/src/services/shared.props";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const endpoint = "/auth";

export const authCheck = (token: RequestCookie) => {
    return api.get<IGeneralResponse>(endpoint, {
        headers: { Cookie: `${token.name}=${token.value}` },
    });
};

export const authLogin = (data: ILoginRequest) => {
    return api.post<IGeneralResponse>(endpoint, data);
};
