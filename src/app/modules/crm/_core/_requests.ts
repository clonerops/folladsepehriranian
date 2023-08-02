import { dashboardHttp } from "../../../../_cloner/helpers/axiosConfig";
import { ComplaintOrRequestSendData } from "./_models";

// Tables Details
const getComplantOrRequestReport = async (formData: ComplaintOrRequestSendData) => {
    const { data } = await dashboardHttp.get(
        `CrmTBSReport/GetComplaintStatisticDashboardRep?fromDate=${formData.fromDate}&toDate=${formData.toDate}`
    );
    return data;
};

export { getComplantOrRequestReport };
