import { http } from "../../../../_cloner/helpers/axiosConfig";
import {
    IConfirmEmail,
    IForgetPassword,
    ILoginUser,
    IResetPassword,
} from "./_models";


const loginUser = async (formData: ILoginUser) => {
    try {
        const { data } = await http.post("/Account/authenticate",JSON.stringify(formData));
        return data;
        
    } catch (error: any) {
        return error.response
    }
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

const getCaptcha = async () => {
    try {
        const { data } = await http.get('/v1/Captcha')
        return data    
    } catch (error: any) {
        return error.response
    }
}

export {
    loginUser,
    forgetPasswordUser,
    resetPasswordUser,
    confirmEmailUser,
    getCaptcha
};
