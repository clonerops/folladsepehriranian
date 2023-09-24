export const columns = (renderAction: any) => {
    const col = [
      { field: 'orderCode', headerName: 'شماره سفارش', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'registerDate', headerName: 'تاریخ ثبت سفارش', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'customerFirstName', headerName: 'سفارش دهنده', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'customerLastName', headerName: 'نحوه ارسال', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'orderSendTypeDesc', headerName: 'نحوه پرداخت', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'paymentTypeDesc', headerName: 'نوع', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'invoiceTypeDesc', headerName: ' فاکتور', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'totalAmount', headerName: 'مبلغ کل', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'exitType', headerName: 'نوع خروج', headerClass: "tw-bg-blue-200 tw-text-black" },
      { field: 'description', headerName: 'توضیحات', headerClass: "tw-bg-blue-200 tw-text-black" },
      { headerName: 'عملیات', cellRenderer: renderAction, headerClass: "tw-bg-blue-200 tw-text-black" }
    ]
    return col
  }

