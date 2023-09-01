import { useMutation, useQuery } from "@tanstack/react-query";
import * as api from "./_requests";
import {
    IConfirmEmail,
    IForgetPassword,
    ILoginUser,
    IResetPassword,
} from "./_models";


const useLoginUser = () => {
    return useMutation((formData: ILoginUser) => {
        return api.loginUser(formData);
    });
};

const useForgetPasswordUser = () => {
    return useMutation((formData: IForgetPassword) => {
        return api.forgetPasswordUser(formData);
    });
};

const useResetPasswordUser = () => {
    return useMutation((formData: IResetPassword) => {
        return api.resetPasswordUser(formData);
    });
};

const useConfirmEmail = () => {
    return useMutation((formData: IConfirmEmail) => {
        return api.confirmEmailUser(formData);
    });
};

const useGetCaptcha = () => {
    return useQuery(['captcha'], () => api.getCaptcha())
}

export {
    useLoginUser,
    useForgetPasswordUser,
    useResetPasswordUser,
    useConfirmEmail,
    useGetCaptcha
};
