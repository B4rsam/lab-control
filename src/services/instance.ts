import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:7070",
    withCredentials: true,
});

export default api;
