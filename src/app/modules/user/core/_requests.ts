import { http } from "../../../../_cloner/helpers/axiosConfig";
import { IRegisterUser } from "./_models";

const registerUser = async (formData: IRegisterUser) => {
    try {
        const { data } = await http.post("/Account/register",JSON.stringify(formData));
        return data
    } catch (error: any) {
        return error.response
    }
};

export { registerUser }
