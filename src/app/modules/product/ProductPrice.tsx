import { Card7 } from "../../../_cloner/partials/content/cards/Card7"
import { useDeleteProductPrice, useRetrieveProductPrice } from "./core/_hooks"
import { columns } from "./helpers/productPriceColumns"
import { IProductPrice } from "./core/_models"
import { useState, useEffect } from "react"
import MyModal from "../../../_cloner/helpers/components/HeadlessModal"
import CreateProductPrice from "./components/CreateProductPrice"
import EditProductPrice from "./components/EditProductPrice"
import Backdrop from "../../../_cloner/helpers/components/Backdrop"
import FuseSearch from "../../../_cloner/helpers/FuseSearch"
import DataGrid from "../../../_cloner/helpers/components/DataGrid"
import { ToastComponent } from "../../../_cloner/helpers/components/Toast"


const ProductPrice = () => {
    const { refetch, data: productPrice, isLoading: productPriceLoading } = useRetrieveProductPrice();
    const { mutate: deleteMutate, isLoading: deleteLoading } = useDeleteProductPrice()
    // State
    const [itemForEdit, setItemForEdit] = useState<IProductPrice | undefined>();
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [results, setResults] = useState<IProductPrice[]>([])

    useEffect(() => {
        setResults(productPrice?.data)
    }, [productPrice])

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 8;


    const totalItems = results?.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = results?.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    const handleEdit = (item: IProductPrice | undefined) => {
        setIsOpen(true)
        setItemForEdit(item);
    };

    const handleDelete = (id: string | undefined) => {
        if (id) deleteMutate(id, {
            onSuccess: (message) => {
                ToastComponent(message?.message)
                refetch()
            }
        });
    };

    const renderAction = (item: any) => {
        return <div className="tw-flex tw-gap-4">
            <div onClick={() => handleEdit(item?.data)} className="tw-bg-yellow-500 tw-px-4 tw-py-2 tw-cursor-pointer tw-rounded-md">
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
            <div onClick={() => handleDelete(item?.data?.id)} className="tw-bg-red-500 tw-px-4 tw-py-2 tw-cursor-pointer tw-rounded-md">
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
    }

    return (
        <>
            {deleteLoading && <Backdrop loading={deleteLoading} />}
            {productPriceLoading && <Backdrop loading={productPriceLoading} />}
            <Card7 image="" title="">
                <CreateProductPrice refetch={refetch} />
                <div className="tw-w-80 md:tw-w-[40%] tw-mb-2">
                    <FuseSearch keys={['productName', 'brandName', 'price',]} placeholder="جستجو" data={productPrice?.data} threshold={0.5} setResults={setResults} />
                </div>
                <DataGrid columns={columns(renderAction)} rowData={currentItems} />
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

                {/* <ReusableTable columns={columns} data={results} isLoading={productPriceLoading} isError={productPriceError} renderActions={renderAction} /> */}
                <MyModal title="ویرایش قیمت کالا" isOpen={isOpen} setIsOpen={setIsOpen}>
                    <EditProductPrice refetch={refetch} item={itemForEdit} />
                </MyModal>
            </Card7>
        </>
    )
}

export default ProductPrice