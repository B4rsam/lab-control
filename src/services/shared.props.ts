export interface IGeneralResponse {
    message: string;
    status: number;
}

export interface IDataResponse<T> extends IGeneralResponse {
    data: T;
}
