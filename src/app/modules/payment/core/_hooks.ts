import { useMutation, useQuery } from "@tanstack/react-query";
import { IPayment } from "./_models";
import * as api from "./_requests";

const useGetRecievePaymentByApproved = () => {
    return useMutation((approvied: string) => {
        return api.getRecievePaymentByApproved(approvied);
    });
};

const usePostRecievePayment = () => {
    return useMutation((formData: any) => {
        return api.postRecievePayment(formData);
    });
};

const useUpdateRecievePaymentById = () => {
    return useMutation((formdata: IPayment) => {
        return api.updateRecievePaymentById(formdata);
    });
};

const useGetRecievePaymentById = (id: string) => {
    return useQuery(['recievePayDetail', id], () => api.getRecievePaymentById(id))
};
const useDeleteRecievePaymentById = () => {
    return useMutation((id: string) => {
        return api.deleteRecievePaymentById(id);
    });
};
const useUpdatePaymentApproved = () => {
    return useMutation((id: string) => {
        return api.updatePaymentApproved(id);
    });
};

export {
    useGetRecievePaymentByApproved,
    usePostRecievePayment,
    useUpdateRecievePaymentById,
    useGetRecievePaymentById,
    useDeleteRecievePaymentById,
    useUpdatePaymentApproved
};
