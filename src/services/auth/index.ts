import { ILoginRequest } from "@/src/services/auth/auth.props";
import api from "@/src/services/instance";
import { IGeneralResponse } from "@/src/services/shared.props";

const endpoint = "/auth";

export const authLogin = (data: ILoginRequest) => {
    return api.post<IGeneralResponse>(endpoint, data);
};
