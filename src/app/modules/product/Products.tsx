import { useState } from "react";
import { IProducts } from "./core/_models";
import Modal from "../../../_cloner/helpers/components/Modal";
import { useDeleteProduct, useRetrieveProducts } from "./core/_hooks";
import Backdrop from "../../../_cloner/helpers/components/Backdrop";
import CustomInput from "../../../_cloner/helpers/components/CustomInput";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";

const Products = () => {
    const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const [itemForEdit, setItemForEdit] = useState<IProducts>();

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [startRowIndex, setStartRowIndex] = useState<number>(0);
    const itemsPerPage = 8; 
    const [searchTerm, setSearchTerm] = useState<string>("");

    const { data: products, isLoading: productsLoading, isError: productsError, refetch } = useRetrieveProducts();
    const { mutate, isLoading: deleteLoading } = useDeleteProduct();

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = products?.data?.filter((item: IProducts) => {
        const values = Object.values(item);
        return values.some((value) =>
            value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const totalItems = filteredData?.length;
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

    const handleEdit = (item: IProducts) => {
        setIsEditOpen(true);
        setItemForEdit(item);
    };
    const handleDelete = (id: string | undefined) => {
        if (id) mutate(id, {
            onSuccess: () => {
                refetch()
            }
        });
    };

    return (
        <>
            {deleteLoading && <Backdrop loading={deleteLoading} />}
            {productsLoading && <Backdrop loading={productsLoading} />}
            <div>
                <div className="tw-flex tw-justify-between tw-items-center">
                    <div className="tw-w-80 md:tw-w-[40%]">
                        <CustomInput
                            value={searchTerm}
                            onChange={handleSearchInput}
                            placeholder="جستجو کالا"
                        />

                    </div>
                    <button
                        onClick={() => setIsCreateOpen(true)}
                        className="tw-bg-green-500 tw-px-8 tw-py-4 tw-rounded-md tw-flex tw-gap-x-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-6 tw-h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    </button>
                </div>
                <div className="tw-overflow-x-auto">
                    <table className="tw-w-full tw-my-2">
                        <thead className="tw-bg-gray-200">
                            <tr>
                                <td className="tw-py-4 tw-px-4 tw-text-center tw-text-gray-600 tw-border tw-border-slate-100">
                                    ردیف
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-slate-100">
                                    نام کالا
                                </td>
                                {/* <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-slate-100">
                                    برند کالا
                                </td> */}
                                <td className="tw-min-w-[100px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-slate-100">
                                    سایز کالا
                                </td>
                                <td className="tw-min-w-[80px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-slate-100">
                                    وزن تقریبی
                                </td>
                                <td className="tw-min-w-[100px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-slate-100">
                                    تعداد در بسته
                                </td>
                                <td className="tw-min-w-[100px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-slate-100">
                                    استاندارد
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-slate-100">
                                    توضیحات
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-slate-100">
                                    
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {productsLoading && <span>درحال بارگزاری</span>}
                            {productsError && <span>بارگزاری کالاات با خطا مواجه شده است!</span>}
                            {currentItems?.map(
                                (item: IProducts, index: number) => {
                                    return (
                                        <tr key={item.id}>
                                            <td className="tw-text-center tw-py-4">
                                                {startRowIndex + index + 1}
                                            </td>
                                            <td className="tw-text-center tw-py-4">
                                                {item.productName}
                                            </td>
                                            {/* <td className="tw-text-center tw-py-4">
                                                {item.brandName}
                                            </td> */}
                                            <td className="tw-text-center tw-py-4">
                                                {item.productSize}
                                            </td>
                                            <td className="tw-text-center tw-py-4">
                                                {item.approximateWeight}
                                            </td>
                                            <td className="tw-text-center tw-py-4">
                                                {item.numberInPackage}
                                            </td>
                                            <td className="tw-text-center tw-py-4">
                                                {item.standard}
                                            </td>
                                            <td className="tw-text-center tw-py-4 tw-hidden">
                                                {item.productState}
                                            </td>
                                            <td className="tw-text-center tw-py-4">
                                                {item.description}
                                            </td>
                                            <td className="tw-flex tw-justify-center tw-items-center tw-text-center tw-py-4">
                                                <div className="tw-flex tw-gap-4">
                                                    <div onClick={() => handleEdit(item)} className="tw-bg-yellow-500 tw-px-4 tw-py-2 tw-cursor-pointer tw-rounded-md">
                                                        <div
                                                            className="tw-cursor-pointer tw-text-white"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                className="tw-w-6 tw-h-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => handleDelete(item?.id)} className="tw-bg-red-500 tw-px-4 tw-py-2 tw-cursor-pointer tw-rounded-md">
                                                        <div
                                                            className="tw-cursor-pointer tw-text-white"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                className="tw-w-6 tw-h-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
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
            <Modal
                isOpen={isCreateOpen}
                onClose={() => setIsCreateOpen(false)}
            >
                <CreateProduct refetch={refetch} setIsCreateOpen={setIsCreateOpen} />
            </Modal>
            <Modal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
            >
                <EditProduct refetch={refetch} item={itemForEdit} />
            </Modal>
        </>
    );
};

export default Products;
