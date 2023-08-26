import { http } from "../../../../_cloner/helpers/axiosConfig";
import { IProducts } from "./_models";

const retrieveProducts = async (
    PageNumber: number | null | string = "",
    PageSize: number | null | string = ""
) => {
    let url: string = ``;

    if (PageNumber || PageSize === "") {
        url = `/v${1}/Product`;
    } else {
        url = `/v${1}/Product?PageNumber=${PageNumber}&PageSize=${PageSize}`;
    }

    const { data } = await http.get(url);
    return data;
};

const createProducts = async (formData: IProducts) => {
    try {
        const { data } = await http.post(
            `/v${1}/Product`,
            JSON.stringify(formData)
        );
        return data;
    } catch (error: any) {
        return error.response;
    }
};

const retrieveProductById = async (id: number) => {
    try {
        const { data } = await http.get(`/v${1}/Product/${id}`);
        return data;
    } catch (error: any) {
        return error?.response;
    }
};

const updateProduct = async (formData: IProducts) => {
    try {
        const { data } = await http.put(
            `/v${1}/Product/${formData.id}`,
            JSON.stringify(formData)
        );
        return data;
    } catch (error: any) {
        return error?.response;
    }
};

const deleteProduct = async (id: string) => {
    try {
        const { data } = await http.delete(`/v${1}/Product/${id}`);
        return data;
    } catch (error: any) {
        return error.response;
    }
};

export {
    retrieveProducts,
    createProducts,
    retrieveProductById,
    updateProduct,
    deleteProduct,
};
