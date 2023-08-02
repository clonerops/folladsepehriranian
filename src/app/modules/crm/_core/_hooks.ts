import { useMutation } from "@tanstack/react-query";
import * as api from "./_requests";
import { ComplaintOrRequestSendData } from "./_models";


const useGetComplaintOrRequestReport = () => {
    return useMutation((formData: ComplaintOrRequestSendData) => {
        return api.getComplantOrRequestReport(formData);
    });
};


export {
    useGetComplaintOrRequestReport,
};
