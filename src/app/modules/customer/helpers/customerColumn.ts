const customerTypeCellRenderer = (params: any) => {
  if (params.data.customerType === 0) {
    return 'حقوقی';
  } else {
    return 'حقیقی';
  }
};
const customerValidTypeCellRenderer = (params: any) => {
  if (params.data.customerValidityId === 1) {
    return 'عادی';
  } else if (params.data.customerValidityId === 2) {
    return 'VIP';
  } else {
    return "سیاه"
  }
};
const customerIsSupplier = (params: any) => {
  if (params.data.isSupplier) {
    return 'بله';
  } else {
    return "خیر"
  }
};

export const columns = (renderAction: any) => {
  const col = [
    { field: 'id', headerName: 'کد مشتری', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'firstName', headerName: 'نام', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'lastName', headerName: 'نام خانوادگی', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'nationalId', headerName: 'کدملی', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'customerType', headerName: 'نوع مشتری', headerClass: "tw-bg-[#6501FD] tw-text-black", cellRenderer: customerTypeCellRenderer },
    { field: 'customerValidityId', headerName: 'نوع اعتبار', headerClass: "tw-bg-[#6501FD] tw-text-black", cellRenderer: customerValidTypeCellRenderer },
    { field: 'mobile', headerName: 'موبایل', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'isSupplier', headerName: 'تامین کننده؟', headerClass: "tw-bg-[#6501FD] tw-text-black", cellRenderer: customerIsSupplier },
    { field: 'address1', headerName: 'آدرس یک', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'address2', headerName: 'آدرس دو', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'representative', headerName: 'معرف', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { headerName: 'عملیات', cellRenderer: renderAction, headerClass: "tw-bg-[#6501FD] tw-text-black" }
  ]
  return col
}