import { http } from "../../../../_cloner/helpers/axiosConfig";
import { ICustomer } from "./_models";

const createCustomer = async (formData: ICustomer) => {
    try {
        const { data } = await http.post("/v1/Customer", JSON.stringify(formData));
        return data;    
    } catch (error: any) {
        return error.response
    }
};

const getCustomers = async () => {
    try {
        const { data } = await http.get("/v1/Customer");
        return data;
    } catch (error: any) {
        return error.response
    }
};

const getCustomer = async (id: string) => {
    try {
        const { data } = await http.get(`/v1/Customer/${id}`)
        return data
    } catch (error: any) {
        return error.response
    }
};

const updateCustomer = async (formData: ICustomer) => {
    try {
        const { data } = await http.put(`/v1/Customer/${formData.id}`, JSON.stringify(formData))
        return data
    } catch (error: any) {
        return error.response
    }
} 

const deleteCustomer = async (id: string) => {
    try {
        const { data } = await http.delete(`/v1/Customer/${id}`)
        return data
    } catch (error: any) {
        return error.response
    }
}

export { 
    createCustomer, 
    getCustomers, 
    getCustomer,
    updateCustomer,
    deleteCustomer 
};
