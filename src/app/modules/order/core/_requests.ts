import { http } from "../../../../_cloner/helpers/axiosConfig";
import { ICreateOrder } from "./_models";

const createOrder = async (formData: ICreateOrder) => {
    try {
        const { data } = await http.post(`/v1/Order`, JSON.stringify(formData))
        return data
    } catch (error: any) {
        return error.response
    }
}

export {
    createOrder
}