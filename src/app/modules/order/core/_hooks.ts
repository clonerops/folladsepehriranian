import { useMutation, useQuery } from "@tanstack/react-query"
import { ICreateOrder } from "./_models"
import * as api from './_requests'

const useCreateOrder = () => {
    return useMutation((formData: ICreateOrder) => {
        return api.createOrder(formData)
    })
}

const useRetrieveOrders = () => {
    return useQuery(['orders'], () => api.retrieveOrders())
}

export {
    useCreateOrder,
    useRetrieveOrders
}