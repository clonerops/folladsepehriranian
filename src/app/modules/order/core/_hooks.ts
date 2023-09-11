import { useMutation, useQuery } from "@tanstack/react-query"
import { ICargo, ICreateOrder } from "./_models"
import * as api from './_requests'

const useCreateOrder = () => {
    return useMutation((formData: ICreateOrder) => {
        return api.createOrder(formData)
    })
}

const useRetrieveOrders = () => {
    return useQuery(['orders'], () => api.retrieveOrders())
}

const useRetrieveOrder = (id: string | undefined) => {
    return useQuery(['order'], () => api.retrieveOrder(id))
}

// Cargo
const useRetrievesNotSendedOrder = () => {
    return useQuery(['ordersNotSend'], () => api.retrievesNotSendedOrder())
}

const useCreateCargo = () => {
    return useMutation((formData: ICargo) => {
        return api.createCargo(formData)
    })
}

const useRetrieveCargos = () => {
    return useQuery(['cargos'], () => api.retrievesCargos())
}
export {
    useCreateOrder,
    useRetrieveOrders,
    useRetrieveOrder,
    useRetrievesNotSendedOrder,
    useCreateCargo,
    useRetrieveCargos
}