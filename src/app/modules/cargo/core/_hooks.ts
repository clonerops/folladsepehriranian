import { useMutation, useQuery } from "@tanstack/react-query"
import { ICargo } from "./_models"
import * as api from './_requests'

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
    useRetrievesNotSendedOrder,
    useCreateCargo,
    useRetrieveCargos
}