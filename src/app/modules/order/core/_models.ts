export interface IProduct {
    id: number;
    product: string;
    count: string;
    price: number;
}

export interface IProductOrder {
    productName: string
    count: string
    price: string
}

export interface ICreateOrder {
    customerId: string | undefined | null
    totalAmount: number | undefined | null
    orderCode?: number | undefined | null
    description: string | undefined | null
    exitType: number | undefined | null
    orderSendTypeId: number | undefined | null 
    paymentTypeId: number | undefined | null
    customerOfficialName: string | undefined | null
    invoiceTypeId: number | undefined | null
    registerDate?: string | undefined | null
    freightName: string | undefined | null
    settlementDate: string | undefined | null
    dischargePlaceAddress: string | undefined | null
    freightDriverName: string | undefined | null
    carPlaque: string | undefined | null
    details: ICreateOrderDetails[] | undefined | null
}

export interface ICreateOrderDetails {
    id?: string | undefined
    rowId: number | undefined | null
    productId: string | undefined | null
    warehouseId: string | undefined | null
    warehouseTypeId: string | undefined | null
    proximateAmount: number | undefined | null
    numberInPackage: number | undefined | null
    price: number | undefined | null
    cargoSendDate: string | undefined | null
    buyPrice: number | undefined | null
    purchaseInvoiceType: string | undefined | null
    purchaseInvoiceTypeId: number | undefined | null
    purchaserCustomerId: string  | undefined | null
    purchaseSettlementDate: string | undefined | null
    sellerCompanyRow: string | undefined | null
}

export interface IOrder extends ICreateOrder {
    id: string | undefined
}

export interface IOrderDetail extends IOrder {
    customerName: string | null | undefined
    orderSendTypeDesc: string | null | undefined
    paymentTypeDesc: string | null | undefined
    invoiceTypeDesc: string | null | undefined
    customerFirstName: string | null | undefined
    customerLastName: string | null | undefined
    productName: string | null | undefined
    warehouseName: string | null | undefined
    purchaseInvoiceTypeDesc: string | null | undefined
    purchaserCustomerName: string | null | undefined
    
}

