import { useMutation } from "@tanstack/react-query";
import * as api from "./_requests";
import {
    IConfirmEmail,
    IForgetPassword,
    ILoginUser,
    IRegisterUser,
    IResetPassword,
} from "./_models";

const useRegisterUser = () => {
    return useMutation((formData: IRegisterUser) => {
        return api.registerUser(formData);
    });
};

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

export {
    useRegisterUser,
    useLoginUser,
    useForgetPasswordUser,
    useResetPasswordUser,
    useConfirmEmail,
};
