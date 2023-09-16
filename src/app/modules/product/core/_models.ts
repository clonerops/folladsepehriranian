export interface IProducts {
    id?: string | undefined
    productName: string | undefined
    productBrandId: number | undefined
    productCode?: number | undefined
    warehouseId?: number | undefined
    productSize: string | undefined
    approximateWeight: number | string | undefined
    numberInPackage: number | string | undefined
    statusId?: number | string | undefined
    description: string | undefined
    brandName?: string | undefined
    productDetail?: IProductDetails
}

export interface IProductDetails {
    size: number | string | undefined
    standard: number | string | undefined
    productState: number | string | undefined
    productIntegratedName: string | undefined
}

export interface IBrands {
    name: string | undefined
    status: number | undefined
    id: number | undefined
}

export interface ISuppliers {
    id?: string | undefined
    customerId: string | undefined,
    customerFirstName?: string | undefined,
    customerLastName?: string | undefined,
    productName?: string | undefined,
    productId: string | undefined,
    price: number | undefined,
    rentAmount: number | undefined,
    overPrice: number | undefined,
    priceDate: string | undefined,
    rate: number | undefined
}

export interface IProductPrice {
    id?: string | undefined,
    price: number | undefined,
    productId: string | undefined,
    productBrandId: number | undefined
}