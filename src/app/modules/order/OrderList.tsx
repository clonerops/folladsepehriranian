import { useRetrieveOrders } from "./core/_hooks"
import { IOrder, IOrderDetail } from "./core/_models"
import Modal from "../../../_cloner/helpers/components/Modal"
import { useState } from "react"
import OrderDetials from "./components/OrderDetials"
import CustomInput from "../../../_cloner/helpers/components/CustomInput"


const OrderList = () => {
    const { data: orders } = useRetrieveOrders()
    // States 
    const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false)
    const [isOpenConfirm, setIsOpenConfirm] = useState<boolean>(false)
    const [orderDetails, setOrderDetails] = useState<IOrderDetail>()

    // functions
    const openDetails = (item: IOrderDetail) => {
        setOrderDetails(item)
        setIsOpenDetail(true)
    }
    const openConfirm = (item: IOrderDetail) => {
        setOrderDetails(item)
        setIsOpenConfirm(true)
    }
    return (
        <>
            <table className="tw-w-full tw-my-2">
                <thead className="tw-bg-gray-200">
                    <tr>
                        <td className="tw-py-4 tw-px-4 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            ردیف
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            شماره سفارش
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            تاریخ سفارش
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            سفارش دهنده
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            نحوه ارسال
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            نحوه پرداخت
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            نوع فاکتور
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            مبلغ کل
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            نوع خروج
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            توضیحات
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">

                        </td>
                    </tr>
                </thead>
                <tbody>
                    {orders?.data?.map((item: IOrderDetail, index: number) => {
                        console.log(item)
                        return <tr key="{id}">
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                {index + 1}
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                {item.orderCode}
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                dddddddddd
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                {item.customerFirstName + " " + item.customerLastName}
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
                                {item.exitType === 1 ? "عادی" : "بعد از تسویه"}
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                {item.description}
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                <button onClick={() => openDetails(item)} className="tw-bg-indigo-500 tw-text-white tw-py-2 tw-px-4 tw-mx-2">
                                    جزئیات
                                </button>
                                <button onClick={() => openConfirm(item)} className="tw-bg-green-500 tw-text-white tw-py-2 tw-px-4 tw-mx-2">
                                    تایید
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Modal
                isOpen={isOpenDetail}
                onClose={() => setIsOpenDetail(false)}
            >
                <OrderDetials item={orderDetails} />
            </Modal>
            <Modal
                isOpen={isOpenConfirm}
                onClose={() => setIsOpenConfirm(false)}
                reqular
            >
                <div className="container">
                    <h3 className="tw-text-right tw-font-yekan_bold tw-font-bold tw-text-2xl tw-py-4">تایید سفارش {orderDetails?.orderCode}</h3>
                    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
                        <span className="tw-text-center tw-font-yekan_bold tw-font-bold tw-text-lg tw-py-4">آیا شفارش شماره {orderDetails?.orderCode} مورد تایید می باشد؟</span>
                        <CustomInput placeholder="توضیحات" />
                    </div>

                    <div>
                        <button className="tw-bg-green-500 tw-m-4 tw-px-4 tw-py-2 tw-text-white">تایید سفارش</button>
                        <button className="tw-bg-red-500 tw-m-4 tw-px-4 tw-py-2 tw-text-white">عدم تایید سفارش</button>
                    </div>
                </div>
            </Modal>


        </>
    )
}

export default OrderList