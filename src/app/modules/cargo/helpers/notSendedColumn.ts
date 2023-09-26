export const columns = (renderAction: any) => {
  const col = [
    { field: 'orderCode', headerName: 'شماره سفارش', headerClass: "tw-bg-[#6501FD]" },
    { field: 'registerDate', headerName: 'تاریخ ثبت سفارش', headerClass: "tw-bg-[#6501FD]" },
    { field: 'customerFirstName', headerName: 'نام سفارش دهنده', headerClass: "tw-bg-[#6501FD]" },
    { field: 'customerLastName', headerName: 'نام خانوادگی', headerClass: "tw-bg-[#6501FD]" },
    { field: 'totalAmount', headerName: 'مبلغ کل', headerClass: "tw-bg-[#6501FD]" },
    { field: 'description', headerName: 'توضیحات', headerClass: "tw-bg-[#6501FD]" },
    { headerName: 'عملیات', cellRenderer: renderAction, headerClass: "tw-bg-[#6501FD]" }
  ]
  return col
}