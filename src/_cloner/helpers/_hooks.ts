import { useQuery } from "@tanstack/react-query"
import * as api from './_requests'

const useGetSendTypes = () => {
    return useQuery(['sendTypes'], () => api.getSendTypes())
}
const useGetPaymentTypes = () => {
    return useQuery(['paymentTypes'], () => api.getPaymentTypes())
}
const useGetPurchaseInvoice = () => {
    return useQuery(['purchaseInvoice'], () => api.getPurchaseInvoice())
}
const useGetInvoiceType = () => {
    return useQuery(['invoiceType'], () => api.getInvoiceType())
}
const useGetCustomerValidities = () => {
    return useQuery(['customerValidities'], () => api.getCustomerValidities())
}
const useGetWarehouseTypes = () => {
    return useQuery(['warehouseTypes'], () => api.getWarehouseTypes())
}

export {
    useGetSendTypes,
    useGetPaymentTypes,
    useGetPurchaseInvoice,
    useGetInvoiceType,
    useGetCustomerValidities,
    useGetWarehouseTypes
}