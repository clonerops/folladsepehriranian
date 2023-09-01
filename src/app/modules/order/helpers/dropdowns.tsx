export const dropdownCustomer = (data: any) => {
    return (
        data &&
        data?.map((obj: { firstName: string; lastName: string, nationalId: string }): any => {
            const { firstName, lastName, nationalId } = obj;
            return { value: nationalId, label: firstName + " " + lastName };
        })
    );
};