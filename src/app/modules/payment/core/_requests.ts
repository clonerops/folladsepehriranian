import { http, httpFormData } from "../../../../_cloner/helpers/axiosConfig"
import { IPayment } from "./_models"

const getRecievePaymentByApproved = async (approvied:string = "0") => {
    try {
        const { data } = await http.get(`/v1/ReceivePay?IsApproved=${approvied}`)
        return data
    } catch (error: any) {
        return error.response
    }
}

const postRecievePayment = async (formData: any) => {
    try {
        const { data } = await httpFormData.post('/v1/ReceivePay', formData)
        return data

    } catch (error: any) {
        return error.response
    }
}

const getRecievePaymentById = async (id:string) => {
    try {
        const { data } = await http.get(`/v1/ReceivePay/${id}`)
        return data
    } catch (error: any) {
        return error.response
    }
}
const updateRecievePaymentById = async (formData: IPayment) => {
    try {
        const { data } = await http.put(`/v1/ReceivePay/${formData.id}`, JSON.stringify(formData))
        return data
    } catch (error: any) {
        return error.response
    }
}

const deleteRecievePaymentById = async (id:string) => {
    try {
        const { data } = await http.delete(`/v1/ReceivePay/${id}`)
        return data
    } catch (error: any) {
        return error.response
    }
}

const updatePaymentApproved = async (id:string) => {
    try {
        const { data } = await http.put(`/v1/ReceivePay/ReceivePayApprove/${id}`, JSON.stringify({id: id}))
        return data
    } catch (error: any) {
        return error.response
    }
}


export {
    getRecievePaymentByApproved,
    postRecievePayment,
    getRecievePaymentById,
    updateRecievePaymentById,
    deleteRecievePaymentById,
    updatePaymentApproved

}