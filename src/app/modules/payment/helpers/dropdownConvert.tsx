export const dropdownReceivePaymentResource = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: any; desc: any }): any => {
            const { id, desc } = obj;
            return { value: id, label: desc };
        })
    );
};
