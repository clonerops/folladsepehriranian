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
    size: string | undefined
    standard: string | undefined
    productState: string | undefined
    description: string | undefined
    brandName?: string | undefined
}

export interface IBrands {
    name: string | undefined
    status: number | undefined
    id: number | undefined
}

export interface ISuppliers {
    id?: string | undefined
    customerId: string,
    productId: string,
    price: number,
    rentAmount: number,
    overPrice: number,
    priceDate: string,
    rate: number
  }