  export const columns = (renderAction: any) => {
    const col = [
      { field: 'customerFirstName', headerName: 'نام', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'customerLastName', headerName: 'نام خانوادگی', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'productName', headerName: 'کالا', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'price', headerName: 'قیمت', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'rentAmount', headerName: 'کرایه', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'overPrice', headerName: 'قیمت تمام شده', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'priceDate', headerName: 'تاریخ قیمت', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'rate', headerName: 'امتیاز', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { headerName: 'عملیات', cellRenderer: renderAction, headerClass: "tw-bg-[#6501FD] tw-text-black" }
    ]
    return col
  }