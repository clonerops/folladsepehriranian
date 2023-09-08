import React, { useState } from "react";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import { IProducts } from "../../product/core/_models";

const ProductSelectedListInModal = (props: {
    products: IProducts[] | undefined;
    productLoading: boolean;
    productError: boolean;
    setSelectedProductOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectProductFromModal: React.Dispatch<
        React.SetStateAction<IProducts | undefined>
    >;
}) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [startRowIndex, setStartRowIndex] = useState<number>(0); // Track starting index of current page

    const itemsPerPage = 7; // Number of items to show per page

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = props.products?.filter((item) => {
        const values = Object.values(item);
        return values.some((value) =>
            value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const totalItems: any = filteredData?.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = filteredData?.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            setStartRowIndex((page - 1) * itemsPerPage); // Update startRowIndex
        }
    };

    const handleSelectProduct = (item: IProducts) => {
        props.setSelectedProductOpen(false);
        props.setSelectProductFromModal(item);
    };

    return (
        <div className="container tw-my-8">
            <div className="tw-w-50 tw-my-2">
                <CustomInput
                    value={searchTerm}
                    onChange={handleSearchInput}
                    placeholder="جستجو محصول / کالا"
                />
            </div>
            <div className="tw-overflow-x-auto tw-w-full md:tw-h-[380px]">
                <table className="tw-w-full ">
                    <thead className="tw-bg-gray-200">
                        <tr>
                            <td className="tw-py-4 tw-px-4 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                ردیف
                            </td>
                            <td className="tw-min-w-[160px] tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                کالا / محصول
                            </td>
                            <td className="tw-min-w-[160px] tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                شرح کالا
                            </td>
                            <td className="tw-min-w-[160px] tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                وزن تقریبی
                            </td>
                            <td className="tw-min-w-[160px] tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                برند
                            </td>
                            <td className="tw-min-w-[160px] tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                انبار
                            </td>
                            <td className="tw-min-w-[160px] tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                موجودی
                            </td>
                            <td className="tw-min-w-[160px] tw-py-4 tw-px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                قیمت
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems?.map((item: IProducts, index: number) => {
                            return (
                                <tr
                                    className="tw-cursor-pointer hover:tw-bg-yellow-100"
                                    key={item.id}
                                    onClick={() => handleSelectProduct(item)}
                                >
                                    <td className="tw-text-center tw-py-2 tw-border tw-border-gray-300">
                                        {startRowIndex + index + 1}
                                    </td>
                                    <td className="tw-text-center tw-py-2 tw-border tw-border-gray-300">
                                        {item.productName}
                                    </td>
                                    <td className="tw-text-center tw-py-2 tw-border tw-border-gray-300">
                                        {item.standard}
                                    </td>
                                    <td className="tw-text-center tw-py-2 tw-border tw-border-gray-300">
                                        {item.approximateWeight}
                                    </td>
                                    <td className="tw-text-center tw-py-2 tw-border tw-border-gray-300">
                                        {item.brandName}
                                    </td>
                                    <td className="tw-text-center tw-py-2 tw-border tw-border-gray-300">
                                        {item.numberInPackage}
                                    </td>
                                    <td className="tw-text-center tw-py-2 tw-border tw-border-gray-300">
                                        {item.numberInPackage}
                                    </td>
                                    <td className="tw-text-center tw-py-2 tw-border tw-border-gray-300">
                                        {item.numberInPackage}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                <p>
                    صفحه {currentPage} از {totalPages}
                </p>
                <div className="tw-flex tw-justify-between">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => goToPage(currentPage - 1)}
                        className="tw-bg-gray-200 tw-rounded-md tw-px-6 tw-py-2"
                    >
                        قبلی
                    </button>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => goToPage(currentPage + 1)}
                        className="tw-bg-gray-200 tw-rounded-md tw-px-6 tw-py-2"
                    >
                        بعدی
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductSelectedListInModal;
