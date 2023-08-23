import { http } from "../../../../_cloner/helpers/axiosConfig";
import { IProducts } from "./_models";

const retrieveProducts = async (PageNumber: number = 1, PageSize: number = 1) => {
    const { data } = await http.get(
        `/v${1}/Product?PageNumber=${PageNumber}&PageSize=${PageSize}`
    );
    return data;
};

const createProducts = async (formData: IProducts) => {
    const { data } = await http.post(
        `/v${1}/Product`,
        JSON.stringify(formData)
    );
    return data;
};

const retrieveProductById = async (id: number) => {
    const { data } = await http.get(`/v${1}/Product/${id}`);
    return data;
};

const updateProduct = async (formData: IProducts, id: number) => {
    const { data } = await http.put(
        `/v${1}/Product/${id}`,
        JSON.stringify(formData)
    );
    return data;
};

const deleteProduct = async (id: number) => {
    const { data } = await http.delete(`/v${1}/Product/${id}`);
    return data;
};

export {
    retrieveProducts,
    createProducts,
    retrieveProductById,
    updateProduct,
    deleteProduct,
};
