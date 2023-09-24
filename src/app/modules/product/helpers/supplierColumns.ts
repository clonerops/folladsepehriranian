  export const columns = (renderAction: any) => {
    const col = [
      { field: 'customerFirstName', headerName: 'نام', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'customerLastName', headerName: 'نام خانوادگی', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'productName', headerName: 'کالا / کالا', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'price', headerName: 'قیمت', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'rentAmount', headerName: 'کرایه', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'overPrice', headerName: 'قیمت تمام شده', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'priceDate', headerName: 'تاریخ قیمت', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'rate', headerName: 'امتیاز', headerClass: "tw-bg-blue-200 tw-text-black" },
      { headerName: 'عملیات', cellRenderer: renderAction, headerClass: "tw-bg-blue-200 tw-text-black" }
    ]
    return col
  }