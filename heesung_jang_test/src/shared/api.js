import axios from "axios";

// Axios 인스턴스 설정
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

//┏----------interceptor를 통한 header 설정----------┓
instance.interceptors.request.use(async (config) => {
    config.headers["content-type"] = "application/json; charset=utf-8";
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    config.headers["Accept"] = "*/*";

    return config;
});

// test axios API 통신 모듈
export const testApi = {
    getAllResults: () => instance.get("/result"),
    getResult: (name) =>
        instance.get("/result", {
            params: {
                name: name,
            },
        }),
};
