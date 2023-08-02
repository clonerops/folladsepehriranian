export const dropdownContractors = (data: any) => {
    return (
        data &&
        data?.map((obj: { p_ID: any; p_NAME: any }): any => {
            const { p_ID, p_NAME } = obj;
            return { value: p_ID, label: p_NAME };
        })
    );
};
export const dropdownDealers = (data: any) => {
    return (
        data &&
        data?.map((obj: { dlR_NO: any; dlR_NAME: any }): any => {
            const { dlR_NO, dlR_NAME } = obj;
            return { value: dlR_NO, label: dlR_NAME };
        })
    );
};