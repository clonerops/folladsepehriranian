import { dashboardHttp } from "../../../../_cloner/helpers/axiosConfig"
import { BLandsByStatus, BLandsCarsByStatus } from "./_models"

const getContractors = async () => {
    const { data } = await dashboardHttp.get('/SaleSystem/GetContractor')
    return data
}
const getDealers = async () => {
    const { data } = await dashboardHttp.get('/SaleSystem/GetDelaers')
    return data
}
const getBLandsByStatus = async (formData: BLandsByStatus ) => {
    const { data } = await dashboardHttp.get('/BillLandingReport/GetIssuedBLandsByStatus', {
        headers: {
            fromDate: formData.fromDate,
            toDate: formData.toDate,
            contractor_id: formData.contractor_id     
        }
    })
    return data
}
const getBLandsCarsByStatus = async (formData: BLandsCarsByStatus) => {
    const { data } = await dashboardHttp.get('/BillLandingReport/GetBLandCarsStatisticByStatus', {
        headers: {
            fromDate: formData.fromDate,
            toDate: formData.toDate,
            dealer_no: formData.dealer_no,
            contractor_id: formData.contractor_id     
        }
    })
    return data
}
const getBLandsCarsByStatus2 = async (formData: BLandsCarsByStatus) => {
    const { data } = await dashboardHttp.get('/BillLandingReport/GetBLandCarsStatisticByStatus2', {
        headers: {
            fromDate: formData.fromDate,
            toDate: formData.toDate,
            dealer_no: formData.dealer_no,
            contractor_id: formData.contractor_id     
        }
    })
    return data
}

export {
    getContractors,
    getDealers,
    getBLandsByStatus,
    getBLandsCarsByStatus,
    getBLandsCarsByStatus2

}