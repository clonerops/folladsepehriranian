import { useRetrieveOrders } from "./core/_hooks";
// import Modal from "../../../_cloner/helpers/components/Modal"
// import { useState } from "react"
// import OrderDetials from "./components/OrderDetials"
// import CustomInput from "../../../_cloner/helpers/components/CustomInput"
// import Swal from 'sweetalert2'
// import SubmitButton from "../../../_cloner/helpers/components/SubmitButton"
import { Card7 } from "../../../_cloner/partials/content/cards/Card7";
import { Link } from "react-router-dom";
import DataGrid from "../../../_cloner/helpers/components/DataGrid";
import { columns } from "./helpers/orderListColumns";

const OrderList = () => {
    const { data: orders } = useRetrieveOrders();
    // const { mutate, isLoading } = useConfirmOrder()
    // States
    // const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false)
    // const [isOpenConfirm, setIsOpenConfirm] = useState<boolean>(false)
    // const [orderDetails, setOrderDetails] = useState<IOrderDetail>()

    // functions
    // const openDetails = (item: IOrderDetail) => {
    //     setOrderDetails(item)
    //     setIsOpenDetail(true)
    // }
    // const openConfirm = (item: IOrderDetail) => {
    //     setOrderDetails(item)
    //     setIsOpenConfirm(true)
    // }

    // const handleConfirmOrder = () => {
    //     if (orderDetails?.id)
    //         mutate(orderDetails?.id, {
    //             onSuccess: () => {
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: "تایید سفارش با موفقیت ثبت گردید.",
    //                     showConfirmButton: false,
    //                     timer: 8500,
    //                 })
    //                 setIsOpenConfirm(false)
    //             }
    //         })
    // }
    const renderAction = (item: any) => {
        return <Link
            to={`/dashboard/order/detail/${item?.data?.id}`}
        >
            <button className="tw-bg-indigo-500 tw-text-white  tw-px-4 tw-rounded-md">
                جزئیات
            </button>
        </Link>

    }
    return (
        <>
            <Card7 image="" title="">
                <DataGrid columns={columns(renderAction)} rowData={orders?.data} />

                {/* <div className="tw-w-full tw-overflow-auto">
                    <table className="tw-w-full tw-my-2">
                        <thead className="tw-bg-gray-200">
                            <tr>
                                <td className="tw-py-4 tw-px-4 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                    ردیف
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                    شماره سفارش
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                    تاریخ ثبت سفارش
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                    سفارش دهنده
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                    نحوه ارسال
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                    نحوه پرداخت
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                    نوع فاکتور
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                    مبلغ کل
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                    نوع خروج
                                </td>
                                <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                    توضیحات
                                </td>
                                <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300"></td>
                            </tr>
                        </thead>
                        <tbody>
                            {orders?.data?.map(
                                (item: IOrderDetail, index: number) => {
                                    return (
                                        <tr key="{id}">
                                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                                {index + 1}
                                            </td>
                                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                                {item.orderCode}
                                            </td>
                                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                                {item.registerDate}
                                            </td>
                                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                                {item.customerFirstName +
                                                    " " +
                                                    item.customerLastName}
                                            </td>
                                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                                {item.orderSendTypeDesc}
                                            </td>
                                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                                {item.paymentTypeDesc}
                                            </td>
                                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                                {item.invoiceTypeDesc}
                                            </td>
                                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                                {item.totalAmount}
                                            </td>
                                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                                {item.exitType === 1
                                                    ? "عادی"
                                                    : "بعد از تسویه"}
                                            </td>
                                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                                {item.description}
                                            </td>
                                            <td className="tw-flex tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                                <Link
                                                    to={`/dashboard/order/detail/${item.id}`}
                                                >
                                                    <button className="tw-bg-indigo-500 tw-text-white tw-py-2 tw-px-4 tw-mx-2 tw-rounded-md">
                                                        جزئیات
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </div> */}
            </Card7>

            {/* <Modal
                isOpen={isOpenDetail}
                onClose={() => setIsOpenDetail(false)}
            >
                <OrderDetials item={orderDetails} />
            </Modal> */}
            {/* <Modal
                isOpen={isOpenConfirm}
                onClose={() => setIsOpenConfirm(false)}
                reqular
            >
                <div className="container">
                    <h3 className="tw-text-right tw-font-yekan_bold tw-font-bold tw-text-2xl tw-py-4">تایید سفارش {orderDetails?.orderCode}</h3>
                    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
                        <span className="tw-text-center tw-font-yekan_bold tw-font-bold tw-text-lg tw-py-4">آیا شفارش شماره {orderDetails?.orderCode} مورد تایید می باشد؟</span>
                    </div>

                    <div>
                        <button onClick={handleConfirmOrder} className="tw-bg-green-500 tw-m-4 tw-px-4 tw-py-2 tw-text-white tw-rounded-md">
                            {!isLoading ? "تایید سفارش" : "در حال پردازش ..."}
                        </button>
                        <button onClick={() => setIsOpenConfirm(false)} className="tw-bg-red-500 tw-m-4 tw-px-4 tw-py-2 tw-text-white tw-rounded-md">عدم تایید سفارش</button>
                    </div>
                </div>
            </Modal> */}
        </>
    );
};

export default OrderList;
