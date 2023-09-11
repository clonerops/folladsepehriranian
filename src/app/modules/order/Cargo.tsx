import { useRetrievesNotSendedOrder } from "./core/_hooks"
import { IOrderDetail } from "./core/_models"
import Modal from "../../../_cloner/helpers/components/Modal"
import { useState } from "react"
import OrderDetials from "./components/OrderDetials"
import CustomInput from "../../../_cloner/helpers/components/CustomInput"
import CargoConfirm from "./components/CargoConfirm"
import { Link } from "react-router-dom"


const Cargo = () => {
    const { data: cargoNotSended } = useRetrievesNotSendedOrder()
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
        setIsOpenConfirm(true)
    }
    return (
        <>
            <div className="tw-w-full tw-overflow-auto">
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
                                مبلغ کل
                            </td>
                            <td className="tw-min-w-[160px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                توضیحات
                            </td>
                            <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">

                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {cargoNotSended?.map((item: IOrderDetail, index: number) => {
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
                                    {item.totalAmount}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.description}
                                </td>
                                <td className="tw-flex tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    <Link to={`/dashboard/order/cargo/${item.id}`}>
                                        <button className="tw-bg-indigo-500 tw-text-white tw-py-2 tw-px-4 tw-mx-2 tw-rounded-md">
                                            جزئیات و ثبت اعلام بار
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Cargo