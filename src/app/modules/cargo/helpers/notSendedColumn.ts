export const columns = (renderAction: any) => {
  const col = [
    { field: 'orderCode', headerName: 'شماره سفارش', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'registerDate', headerName: 'تاریخ ثبت سفارش', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'customerFirstName', headerName: 'نام سفارش دهنده', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'customerLastName', headerName: 'نام خانوادگی', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'totalAmount', headerName: 'مبلغ کل', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'description', headerName: 'توضیحات', headerClass: "tw-bg-blue-200 tw-text-black" },
    { headerName: 'عملیات', cellRenderer: renderAction, headerClass: "tw-bg-blue-200 tw-text-black" }
  ]
  return col
}