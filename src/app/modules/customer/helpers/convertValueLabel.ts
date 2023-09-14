export const convertValueLabelCustomerValidaty = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: number, validityDesc:string }): any => {
            const { validityDesc, id } = obj;
            return { value: id, label: validityDesc };
        })
    );
};