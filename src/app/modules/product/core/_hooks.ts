import { useMutation, useQuery } from "@tanstack/react-query";
import * as api from "./_requests";
import { IProductPrice, IProducts, ISuppliers } from "./_models";

const useRetrieveProducts = () => {
    return useQuery(["products"], () => api.retrieveProducts());
};

const useCreateProduct = () => {
    return useMutation((formData: IProducts) => {
        return api.createProducts(formData);
    });
};

const useRetrieveProductById = () => {
    return useMutation((id: number) => {
        return api.retrieveProductById(id);
    });
};

const useUpdateProduct = () => {
    return useMutation((formdata: IProducts) => {
        return api.updateProduct(formdata);
    });
};

const useDeleteProduct = () => {
    return useMutation((id: string) => {
        return api.deleteProduct(id);
    });
};

// Brands
const useRetrieveBrands = () => {
    return useQuery(["brands"], () => api.retrieveBrands());
};

// Suppliers
const useRetrieveSuppliers = () => {
    return useQuery(["suppliers"], () => api.retrieveSuppliers());
};

const useCreateSupplier = () => {
    return useMutation((formData: ISuppliers) => {
        return api.createSuppliers(formData);
    });
};

const useRetrieveSupplierById = () => {
    return useMutation((id: number) => {
        return api.retrieveSupplierById(id);
    });
};

const useUpdateSupplier = () => {
    return useMutation((formdata: ISuppliers) => {
        return api.updateSupplier(formdata);
    });
};

const useDeleteSupplier = () => {
    return useMutation((id: string) => {
        return api.deleteSupplier(id);
    });
};
// Product Price
const useRetrieveProductPrice = () => {
    return useQuery(["productPrice"], () => api.retrieveProductPrice());
};

const useCreateProductPrice = () => {
    return useMutation((formData: IProductPrice) => {
        return api.createProductPrice(formData);
    });
};

const useRetrieveProductPriceById = () => {
    return useMutation((id: number) => {
        return api.retrieveProductPriceById(id);
    });
};

const useUpdateProductPrice = () => {
    return useMutation((formdata: IProductPrice) => {
        return api.updateProductPrice(formdata);
    });
};

const useDeleteProductPrice = () => {
    return useMutation((id: string) => {
        return api.deleteProductPrice(id);
    });
};


export {
    useRetrieveProducts,
    useCreateProduct,
    useRetrieveProductById,
    useUpdateProduct,
    useDeleteProduct,
    useRetrieveBrands,
    useRetrieveSuppliers,
    useCreateSupplier,
    useRetrieveSupplierById,
    useUpdateSupplier,
    useDeleteSupplier,
    useRetrieveProductPrice,
    useCreateProductPrice,
    useRetrieveProductPriceById,
    useUpdateProductPrice,
    useDeleteProductPrice
};
