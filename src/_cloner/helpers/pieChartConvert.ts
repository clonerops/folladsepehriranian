export const pieChartConvert = (data: any) => {
    return (
        data &&
        data?.map((obj: { count: any; statusDesc: any }): any => {
            const { count, statusDesc } = obj;
            return { y: count, name: statusDesc };
        })
    );
};