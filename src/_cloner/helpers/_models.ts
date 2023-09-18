export interface ISendTypes {
    description: string
    id: number
}
export interface IRentPaymentType {
    desc: string
    id: number
}
export interface IPurchaseInvoice {
    desc: string
    id: number
}
export interface IInvoiceType {
    typeDesc: string
    id: number
}
export interface ICustomerValidities {
    validityDesc: string
    id: number
}
export interface IWarehouseTypes {
    validityDesc: string
    id: number
}
export interface IWarehouse {
    name: string | null,
    warehouseTypeId: number | null,
    warehouseType: string | number | null,
    products: string | number | null,
    id: number | null,
}
export interface IReceivePaymentSources extends IPurchaseInvoice {}