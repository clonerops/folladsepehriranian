export const columns = (renderAction: any) => {
  const col = [
    { field: 'productName', flex: 1, headerName: 'نام کالا', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'brandName', headerName: 'نام برند', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'price', headerName: 'قیمت', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'registerDate', headerName: 'تاریخ قیمت', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { headerName: 'عملیات', cellRenderer: renderAction, headerClass: "tw-bg-[#6501FD] tw-text-black" }
  ]
  return col
}