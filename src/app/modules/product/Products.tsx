import { useState } from "react";
import { IProducts } from "./core/_models";
import Modal from "../../../_cloner/helpers/components/Modal";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import { useDeleteProduct } from "./core/_hooks";

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

    const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

    // const [selectedRows, setSelectedRows] = useState<IProduct>(); // Track selected row IDs
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [startRowIndex, setStartRowIndex] = useState<number>(0); // Track starting index of current page
    const itemsPerPage = 20; // Number of items to show per page
    const [searchTerm, setSearchTerm] = useState<string>("");

    const { mutate } = useDeleteProduct();

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

    const handleEdit = (id: number) => {
        setIsEditOpen(true);
    };
    const handleDelete = (id: number) => {
        mutate(id);
    };

    return (
        <>
            <div>
                <div>
                    <button onClick={() => setIsCreateOpen(true)} className="bg-green-500 px-16 py-4 rounded-md"> 
                        <span className="text-white">ایجاد محصول جدید</span>
                    </button>
                </div>
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
                            <td className="py-4 px-2 text-center text-gray-600 border border-gray-300">
                                عملیات
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
                                    <td className="flex justify-center items-center text-center py-4 border border-gray-300">
                                        <div className="flex gap-4">
                                            <div
                                                onClick={() =>
                                                    handleEdit(
                                                        item.productBrandId
                                                    )
                                                }
                                                className="cursor-pointer text-yellow-500"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                    />
                                                </svg>
                                            </div>
                                            <div
                                                onClick={() =>
                                                    handleDelete(
                                                        item.productBrandId
                                                    )
                                                }
                                                className="cursor-pointer text-red-500"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
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
            <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)}>
                <CreateProduct />
            </Modal>
            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
                <EditProduct />
            </Modal>
        </>
    );
};

export default Products;
