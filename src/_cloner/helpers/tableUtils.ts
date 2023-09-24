export const sortTableData = (data: any[], sortingKey: string): any[] => {
    return [...data].sort((a, b) => {
        return a[sortingKey].localeCompare(b[sortingKey])
    })
}