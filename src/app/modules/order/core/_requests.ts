import { http } from "../../../../_cloner/helpers/axiosConfig";
import { ICargo, ICreateOrder } from "./_models";

const createOrder = async (formData: ICreateOrder) => {
    try {
        const { data } = await http.post(`/v1/Order`, JSON.stringify(formData))
        return data
    } catch (error: any) {
        return error.response
    }
}

const retrieveOrders = async () => {
    try {
        const { data } = await http.get(`/v1/Order?PageNumber=1&PageSize=60`)
        return data
    } catch (error: any) {
        return error.response
    }
}
const retrieveOrder = async (id: string | undefined) => {
    try {
        const { data } = await http.get(`/v1/Order/${id}`)
        return data
    } catch (error: any) {
        return error.response
    }
}

// Cargo Annoncment
const retrievesNotSendedOrder = async () => {
    try {
        const { data } = await http.get(`/v1/CargoAnnouncement/GetNotSendedOrders`)
        return data
    } catch (error: any) {
        return error.response
    }
}

const createCargo = async (formData: ICargo) => {
    try {
        const { data } = await http.post(`/v1/CargoAnnouncement`, JSON.stringify(formData))
        return data
    } catch (error: any) {
        return error.response
    }
}

const retrievesCargos = async () => {
    try {
        const { data } = await http.get(`/v1/CargoAnnouncement`)
        return data
    } catch (error: any) {
        return error.response
    }
}
export {
    createOrder,
    retrieveOrders,
    retrieveOrder,
    // Cargo
    retrievesNotSendedOrder,
    createCargo,
    retrievesCargos
}