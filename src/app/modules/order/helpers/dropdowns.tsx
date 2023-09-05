export const dropdownCustomer = (data: any) => {
    return (
        data &&
        data?.map((obj: { firstName: string; lastName: string, id: string }): any => {
            const { firstName, lastName, id } = obj;
            return { value: id, label: firstName + " " + lastName };
        })
    );
};
export const dropdownOrderSendType = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: number, description:string }): any => {
            const { description, id } = obj;
            return { value: id, label: description };
        })
    );
};
export const dropdownRentPaymentType = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: number, desc:string }): any => {
            const { desc, id } = obj;
            return { value: id, label: desc };
        })
    );
};
export const dropdownPurchaseInvoice = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: number, desc:string }): any => {
            const { desc, id } = obj;
            return { value: id, label: desc };
        })
    );
};
export const dropdownInvoiceType = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: number, typeDesc:string }): any => {
            const { typeDesc, id } = obj;
            return { value: id, label: typeDesc };
        })
    );
};
export const dropdownWarehouseType = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: number, description:string }): any => {
            const { description, id } = obj;
            return { value: id, label: description };
        })
    );
};
export const dropdownWarehouses = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: number, name:string, warehouseTypeId: number }): any => {
            const { name, id, warehouseTypeId } = obj;
            return { value: id, label: name, warehouseTypeId: warehouseTypeId };
        })
    );
};
export const dropdownExitType = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: number, title:string }): any => {
            const { title, id } = obj;
            return { value: id, label: title };
        })
    );
};