import { useState, useEffect } from "react";
import { ISuppliers } from "./core/_models";
import Modal from "../../../_cloner/helpers/components/Modal";
import { useDeleteSupplier, useRetrieveSuppliers } from "./core/_hooks";
import Backdrop from "../../../_cloner/helpers/components/Backdrop";
import CreateSupplier from "./components/CreateSupplier";
import EditSupplier from "./components/EditSupplier";
import { Card7 } from "../../../_cloner/partials/content/cards/Card7";
import ReusableTable from "../../../_cloner/helpers/components/Table";
import { columns } from "./helpers/supplierColumns";
import FuseSearch from "../../../_cloner/helpers/FuseSearch";
import CreateButton from "../../../_cloner/helpers/components/CreateButton";
import PageTitle from "../../../_cloner/helpers/components/PageTitle";

const Suppliers = () => {
    const { data: suppliers, isLoading: suppliersLoading, isError: suppliersError, refetch } = useRetrieveSuppliers();
    const { mutate, isLoading: deleteLoading } = useDeleteSupplier();
    const [results, setResults] = useState<ISuppliers[]>([])

    useEffect(() => {
        setResults(suppliers?.data)
    }, [suppliers])

    const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const [itemForEdit, setItemForEdit] = useState<ISuppliers>();

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

    const handleEdit = (item: ISuppliers) => {
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

    const renderAction = (item: any) => {
        return <div className="tw-flex tw-gap-4">
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
    }

    return (
        <>
            {deleteLoading && <Backdrop loading={deleteLoading} />}
            {suppliersLoading && <Backdrop loading={suppliersLoading} />}
            <PageTitle title="لیست تامین کنندگان" image="/media/icons/duotune/Communication/com014.svg" />
            <Card7 image="" title="">
                <div className="tw-flex tw-justify-between tw-items-center">
                    <div className="tw-w-80 md:tw-w-[40%]">
                        <FuseSearch keys={['customerFirstName', 'customerLastName', 'productName', 'price', 'rentAmount', 'overPrice', 'priceDatepriceDate', 'rate']} placeholder="جستجو تامین کننده" data={suppliers?.data} threshold={0.5} setResults={setResults} />
                    </div>
                    <CreateButton setState={setIsCreateOpen} />
                </div>
                <ReusableTable columns={columns} data={currentItems} renderActions={renderAction} isError={suppliersError} isLoading={suppliersLoading} />
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
            </Card7>
            <Modal
                isOpen={isCreateOpen}
                onClose={() => setIsCreateOpen(false)}
                title="ایجاد تامین کننده جدید"
            >
                <CreateSupplier refetch={refetch} setIsCreateOpen={setIsCreateOpen} />
            </Modal>
            <Modal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                title="ویرایش تامین کننده"
            >
                <EditSupplier refetch={refetch} item={itemForEdit} />
            </Modal>
        </>
    );
};

export default Suppliers;
