export const columns = (renderAction: any) => {
  const col = [
    { field: 'productIntegratedName', flex: 1, headerName: 'شرح کالا', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'productName', headerName: 'کالا', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'approximateWeight', width: 120, headerName: 'وزن تقریبی', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'warehouseName', width: 120, headerName: 'انبار', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'approximateInventory', width: 120, headerName: 'موجودی', headerClass: "tw-bg-[#6501FD] tw-text-black" },
    { field: 'thickness', width: 120, headerName: 'قیمت', headerClass: "tw-bg-[#6501FD] tw-text-black" },
  ]
  return col
}