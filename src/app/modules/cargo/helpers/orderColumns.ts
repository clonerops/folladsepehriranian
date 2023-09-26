export const columns = (renderAction: any) => {
  const col = [
    { field: 'productName', headerName: 'نام کالا', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'rowId', headerName: 'شماره ردیف', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'warehouseName', headerName: 'انبار', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'proximateAmount', headerName: 'مقدار تقریبی', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'numberInPackage', headerName: 'تعداد در بسته', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'price', headerName: 'قیمت', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'buyPrice', headerName: 'قیمت خرید', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'purchaseInvoiceTypeDesc', headerName: 'نوع فاکتور خرید', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'purchaserCustomerName', headerName: 'خرید از', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'purchaseSettlementDate', headerName: 'تاریخ تسویه خرید', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'cargoSendDate', headerName: 'تاریخ ارسال', headerClass: "tw-bg-[#6501FD] tw-text-black" },
  ]
  return col
}