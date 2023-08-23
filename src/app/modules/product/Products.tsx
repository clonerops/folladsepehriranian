import { useState } from "react";
import { IProducts } from "./core/_models";

const Products = () => {
    const fakeData = [
        {
            productName: "asda",
            productBrandId: 0,
            productSize: "ad",
            approximateWeight: 1,
            numberInPackage: 2,
            size: "sad",
            standard: "sad",
            productState: "asd",
            description: "as",
        },
    ];

    // const [selectedRows, setSelectedRows] = useState<IProduct>(); // Track selected row IDs
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [startRowIndex, setStartRowIndex] = useState<number>(0); // Track starting index of current page
    const itemsPerPage = 20; // Number of items to show per page
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredData = fakeData.filter((item) => {
        const values = Object.values(item);
        return values.some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    });


    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = filteredData.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            setStartRowIndex((page - 1) * itemsPerPage); // Update startRowIndex
        }
    };

    // const handleRowClick = (item: IProduct) => {
    //     setSelectedRows(item);
    // };

    return (
        <>
            <div>
                <table className="w-full my-2">
                    <thead className="bg-gray-200">
                        <tr>
                            <td className="py-4 px-4 text-center text-gray-600 border border-gray-300">
                                ردیف
                            </td>
                            <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                                نام محصول
                            </td>
                            <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                                برند محصول
                            </td>
                            <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                                سایز محصول
                            </td>
                            <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                                وزن تقریبی
                            </td>
                            <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                                تعداد در بسته
                            </td>
                            <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                                اندازه
                            </td>
                            <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                                استاندارد
                            </td>
                            <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                                توضیحات
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item: IProducts, index) => {
                            return (
                                <tr
                                    // className="cursor-pointer hover:bg-gray-100"
                                    // key={item.id}
                                    // onClick={() => handleRowClick(item)}
                                    // className={
                                    //     selectedRows?.id === item.
                                    //         ? "bg-yellow-100"
                                    //         : "cursor-pointer hover:bg-gray-100"
                                    // }
                                >
                                    <td className="text-center py-4 border border-gray-300">
                                        {startRowIndex + index + 1}
                                    </td>
                                    <td className="text-center py-4 border border-gray-300">
                                        {item.productName}
                                    </td>
                                    <td className="text-center py-4 border border-gray-300">
                                        {item.productBrandId}
                                    </td>
                                    <td className="text-center py-4 border border-gray-300">
                                        {item.productSize}
                                    </td>
                                    <td className="text-center py-4 border border-gray-300">
                                        {item.approximateWeight}
                                    </td>
                                    <td className="text-center py-4 border border-gray-300">
                                        {item.numberInPackage}
                                    </td>
                                    <td className="text-center py-4 border border-gray-300">
                                        {item.size}
                                    </td>
                                    <td className="text-center py-4 border border-gray-300">
                                        {item.approximateWeight}
                                    </td>
                                    <td className="text-center py-4 border border-gray-300">
                                        {item.standard}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div>
                    <p>
                        صفحه {currentPage} از {totalPages}
                    </p>
                    <div className="flex justify-between">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => goToPage(currentPage - 1)}
                            className="bg-gray-200 rounded-md px-6 py-2"
                        >
                            قبلی
                        </button>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => goToPage(currentPage + 1)}
                            className="bg-gray-200 rounded-md px-6 py-2"
                        >
                            بعدی
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
