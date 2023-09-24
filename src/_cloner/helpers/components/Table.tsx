import React, { useEffect, useState } from 'react';
import { sortTableData } from '../tableUtils';

interface TableColumn {
    key: string;
    title: string;
    className?: string
    customText?: any
}

interface Props {
    columns: TableColumn[];
    data: any[];
    isLoading: boolean;
    isError: boolean;
    renderActions: (item: any) => React.ReactNode;
}

const ReusableTable: React.FC<Props> = ({ columns, data, renderActions }) => {
    
    // const [tableData, setTableData] = useState(data)
    // const [sortingKey, setSortingKey] = useState<string | null >(null)

    // useEffect(() => {
    //     setTableData(data)
    // }, [data])

    const getValueFromNestedKey = (item: any, key: string) => {
        const keys = key.split('.');
        let value = item;

        for (const nestedKey of keys) {
            if (value && value.hasOwnProperty(nestedKey)) {
                value = value[nestedKey];
            } else {
                return null;
            }
        }

        return value;
    };

    // const handleSort = (key: string) => {
    //     let sortingData = [...tableData];

    //     // Check if we are sorting the same key, if yes, reverse the order
    //     if (sortingKey === key) {
    //         sortingData.reverse();
    //     } else {
    //         // Sort the data based on the selected key
    //         sortingData.sort((a, b) => {
    //             const valueA = getValueFromNestedKey(a, key);
    //             const valueB = getValueFromNestedKey(b, key);

    //             // You may need to handle different data types and sorting logic here
    //             // For simplicity, this example assumes all values are strings
    //             return valueA.localeCompare(valueB);
    //         });
    //     }

    //     // Update the table data and sorting key
    //     setTableData(sortingData);
    //     setSortingKey(key);
    // }    
    return (
        <div className='tw-overflow-x-auto tw-min-w-full'>
            <table className="tw-w-full">
                <thead className="tw-bg-slate-200">
                    <tr>
                        {columns?.map((column) => (
                            <th className="tw-cursor-pointer tw-min-w-[140px] tw-text-gray-500 tw-border tw-border-gray-100 tw-py-4 px-2 tw-text-center" key={column.key}>{column.title}</th>
                        ))}
                        <th className="tw-min-w-[140px] tw-text-gray-500 tw-border tw-border-gray-100 tw-py-4 px-2 tw-text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => (
                        <tr key={index}>
                            {columns?.map((column) => (
                                <td className={
                                    `tw-text-black tw-font-yekan_bold tw-py-4 tw-text-center `
                                } key={column.key}>
                                    <span className={column.className}>
                                        {column.customText ? column.customText(getValueFromNestedKey(item, column.key)) : getValueFromNestedKey(item, column.key)}
                                    </span>
                                </td>
                            ))}
                            <td className="tw-flex tw-justify-center tw-items-center tw-text-center tw-py-4">{renderActions(item)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReusableTable;
