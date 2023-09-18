import React from 'react';

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

const ReusableTable: React.FC<Props> = ({ columns, data, isLoading, isError, renderActions }) => {

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


    { isLoading && <div>درحال بارگزاری</div> }
    { isError && <div>بارگزاری محصولات با خطا مواجه شده است!</div> }


    return (
        <div className='tw-overflow-x-auto tw-min-w-full'>
            <table className="tw-w-full">
                <thead className="tw-bg-slate-200">
                    <tr>
                        {columns?.map((column) => (
                            <th className="tw-min-w-[140px] tw-text-gray-500 tw-border tw-border-gray-100 tw-py-4 px-2 tw-text-center" key={column.key}>{column.title}</th>
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
