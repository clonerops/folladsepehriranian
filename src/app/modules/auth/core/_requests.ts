import { http } from "../../../../_cloner/helpers/axiosConfig";

const loginUser = async (userData: any) => {
    const { data } = await http.post("/Users/authenticate", JSON.stringify(userData));
    return data
};

const getCaptcha = async () => {
    const { data } = await http.get("/Users/GetCaptcha");
    return data;
};

export { loginUser, getCaptcha };
