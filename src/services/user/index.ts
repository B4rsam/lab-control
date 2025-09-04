import api from "../instance";
import { IDataResponse } from "../shared.props";
import { IUserDataResponse } from "./user.props";

const endpoint = "/user";

export const getUsername = () => {
    return api.get<IDataResponse<IUserDataResponse>>(endpoint);
};
