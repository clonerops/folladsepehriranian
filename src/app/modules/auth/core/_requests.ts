import { http } from "../../../../_cloner/helpers/axiosConfig";
import {
    IConfirmEmail,
    IForgetPassword,
    ILoginUser,
    IRegisterUser,
    IResetPassword,
} from "./_models";

const registerUser = async (formData: IRegisterUser) => {
    const { data } = await http.post(
        "/Account/register",
        JSON.stringify(formData)
    );
    return data;
};

const loginUser = async (formData: ILoginUser) => {
    console.log(formData)
    const { data } = await http.post("/Account/authenticate",JSON.stringify(formData));
    return data;
};

const forgetPasswordUser = async (formData: IForgetPassword) => {
    const { data } = await http.post(
        "/Account/forget-password",
        JSON.stringify(formData)
    );
    return data;
};

const resetPasswordUser = async (formData: IResetPassword) => {
    const { data } = await http.post(
        "/Account/reset-password",
        JSON.stringify(formData)
    );
    return data;
};

const confirmEmailUser = async (formData: IConfirmEmail) => {
    const { data } = await http.get(
        `/Account/confirm-email?userId=${formData.userId}&code=${formData.code}`
    );
    return data;
};

export {
    registerUser,
    loginUser,
    forgetPasswordUser,
    resetPasswordUser,
    confirmEmailUser,
};
