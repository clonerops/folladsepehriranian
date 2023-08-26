import { useMutation } from "@tanstack/react-query"
import { ICreateOrder } from "./_models"
import * as api from './_requests'

const useCreateOrder = () => {
    return useMutation((formData: ICreateOrder) => {
        return api.createOrder(formData)
    })
}

export {
    useCreateOrder
}