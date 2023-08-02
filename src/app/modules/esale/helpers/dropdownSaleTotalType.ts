export const dropdownSaleTotalType = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: any; totalTypeDesc: any }): any => {
            const { id, totalTypeDesc } = obj;
            return { value: id, label: totalTypeDesc };
        })
    );
};
export const dropdownSaleTotalTypeDetails = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: any; detailDesc: any }): any => {
            const { id, detailDesc } = obj;
            return { value: id, label: detailDesc };
        })
    );
};
export const dropdownSaleTotalWinnerType = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: any; totalTypeDesc: any }): any => {
            const { id, totalTypeDesc } = obj;
            return { value: id, label: totalTypeDesc };
        })
    );
};
export const dropdownTotalDate = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: any; deliverDateDesc: any }): any => {
            const { id, deliverDateDesc } = obj;
            return { value: id, label: deliverDateDesc };
        })
    );
};
