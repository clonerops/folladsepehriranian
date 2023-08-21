import { useMutation } from "@tanstack/react-query";
import * as api from "./_requests";
import { IRegisterUser } from "./_models";

const useRegisterUser = () => {
    return useMutation((formData: IRegisterUser) => {
        return api.registerUser(formData);
    });
};

export { useRegisterUser };
