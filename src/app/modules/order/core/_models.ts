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
    customerId: string
    totalAmount: number
    orderCode: number
    confirmedStatus: boolean
    description: string
    exitType: number
    orderSendTypeId: number
    paymentTypeId: number
    customerOfficialName: string
    invoiceTypeId: number
    approvedDate: string
    freightName: string
    settlementDate: string
    dischargePlaceAddress: string
    freightDriverName: string
    carPlaque: string
    details: ICreateOrderDetails[]
}

export interface ICreateOrderDetails {
    rowId: number
    productId: string
    warehouseId: string
    proximateAmount: number
    numberInPackage: number
    price: number
    cargoSendDate: string
    buyPrice: number
    purchaseInvoiceType: number
    purchaseSettlementDate: string
    sellerCompanyRow: string
}