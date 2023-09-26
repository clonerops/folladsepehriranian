  export const columns = (renderAction: any) => {
    const col = [
      { field: 'id', headerName: 'شماره ثبت', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'receivePaymentSourceFromDesc', headerName: 'دریافت از', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'receivePaymentSourceToDesc', headerName: 'پرداخت به', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'accountOwner', headerName: 'صاحب حساب', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'trachingCode', headerName: 'کد پیگیری', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'companyName', headerName: 'صاحب شرکت', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'contractCode', headerName: 'شماره قرارداد', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'isAccountingApproval', headerName: 'تایید حسابداری؟', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'accountingApprovalDate', headerName: 'تاریخ تایید حسابداری', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'accountingApproverId', headerName: '', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { field: 'description', headerName: 'توضیحات', headerClass: "tw-bg-[#6501FD] tw-text-black" },
      { headerName: 'عملیات', cellRenderer: renderAction, headerClass: "tw-bg-[#6501FD] tw-text-black" }
    ]
    return col
  }