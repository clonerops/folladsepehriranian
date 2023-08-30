import { useMutation, useQuery } from "@tanstack/react-query";
import { ICustomer } from "./_models";
import * as api from "./_requests";

const useCreateCustomer = () => {
    return useMutation((formdata: ICustomer) => {
        return api.createCustomer(formdata);
    });
};

const useGetCustomers = () => {
    return useQuery(["customers"], () => api.getCustomers());
};

const useGetCustomer = () => {
    return useMutation((id: string) => {
        return api.getCustomer(id);
    });
};

const useUpdateCustomer = () => {
    return useMutation((formdata: ICustomer) => {
        return api.updateCustomer(formdata);
    });
};

const useDeleteCustomer = () => {
    return useMutation((id: string) => {
        return api.deleteCustomer(id);
    });
};

export {
    useCreateCustomer,
    useGetCustomers,
    useGetCustomer,
    useUpdateCustomer,
    useDeleteCustomer,
};
