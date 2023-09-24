export const columns = (renderAction: any) => {
  const col = [
    { field: 'productName', headerName: 'نام کالا', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'size', headerName: 'سایز کالا', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'productIntegratedName', headerName: 'شرح کالا', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'approximateWeight', headerName: 'وزن تقریبی', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'numberInPackage', headerName: 'تعداد در بسته', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'standard', headerName: 'استاندارد', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'productState', headerName: 'حالت', headerClass: "tw-bg-blue-200 tw-text-black" },
    { field: 'description', headerName: 'توضیحات', headerClass: "tw-bg-blue-200 tw-text-black" },
    { headerName: 'عملیات', cellRenderer: renderAction, headerClass: "tw-bg-blue-200 tw-text-black" }
  ]
  return col
}