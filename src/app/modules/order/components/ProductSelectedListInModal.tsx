import React, { useState } from "react";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import { IProducts } from "../../product/core/_models";

const ProductSelectedListInModal = (props: {
    products: IProducts[] | undefined
    productLoading: boolean
    productError: boolean
    setSelectedProductOpen: React.Dispatch<React.SetStateAction<boolean>>
    setSelectProductFromModal: React.Dispatch<React.SetStateAction<IProducts | undefined>>
}) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const filteredData = props.products?.filter((item) => {
        const values = Object.values(item);
        return values.some((value) =>
            value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const handleSelectProduct = (item: IProducts) => {
        props.setSelectedProductOpen(false)
        props.setSelectProductFromModal(item)
    }

    return (
        <div className="container tw-my-8">
            <div className="tw-w-50 tw-my-2">
                <CustomInput
                    value={searchTerm}
                    onChange={handleSearchInput}
                    placeholder="جستجو محصول / کالا" />
            </div>
            <div className="tw-overflow-x-auto">
                <table className="tw-w-full">
                    <thead className="tw-bg-gray-200">
                        <tr>
                            <td className="tw-py-4 tw-px-4 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                ردیف
                            </td>
                            <td className="tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                کالا / محصول
                            </td>
                            <td className="tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                انبار
                            </td>
                            <td className="tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                موجودی
                            </td>
                            <td className="tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                قیمت
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData?.map((item: IProducts, index: number) => {
                            return (
                                <tr
                                    className="tw-cursor-pointer hover:tw-bg-yellow-100"
                                    key={item.id}
                                    onClick={() => handleSelectProduct(item)}
                                >
                                    <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                        {index + 1}
                                    </td>
                                    <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                        {item.productName}
                                    </td>
                                    <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                        {item.standard}
                                    </td>
                                    <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                        {item.approximateWeight}
                                    </td>
                                    <td className="tw-flex tw-justify-center tw-items-center tw-py-4 tw-border tw-border-gray-300 mx-auto">
                                        {item.productSize} ریال
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductSelectedListInModal;
