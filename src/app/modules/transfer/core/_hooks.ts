import { useMutation, useQuery } from "@tanstack/react-query";
import * as api from "./_requests";
import { BLandsByStatus, BLandsCarsByStatus } from "./_models";

const useGetContractors = () => {
    return useQuery(["contractors"], api.getContractors);
};

const useGetDealers = () => {
    return useQuery(["dealers"], api.getDealers);
};

const useGetBLandsByStatus = () => {
    return useMutation((formData: BLandsByStatus) => {
        return api.getBLandsByStatus(formData);
    });
};
const useGetBLandsCarsByStatus = () => {
    return useMutation((formData: BLandsCarsByStatus) => {
        return api.getBLandsCarsByStatus(formData);
    });
};
const useGetBLandsCarsByStatus2 = () => {
    return useMutation((formData: BLandsCarsByStatus) => {
        return api.getBLandsCarsByStatus2(formData);
    });
};

export {
    useGetContractors,
    useGetDealers,
    useGetBLandsByStatus,
    useGetBLandsCarsByStatus,
    useGetBLandsCarsByStatus2
};
