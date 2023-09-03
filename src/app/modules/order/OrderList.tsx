import { useRetrieveOrders } from "./core/_hooks"
import { IOrder } from "./core/_models"

const OrderList = () => {
    const { data: orders } = useRetrieveOrders()
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
                            سایز محصول
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            وزن تقریبی
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            تعداد در بسته
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            اندازه
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            استاندارد
                        </td>
                        <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            توضیحات
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {orders?.data?.map((item: IOrder, index: number) => {
                        return <tr key="{id}">
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                {index + 1}
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                dddddddddd
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                dddddddddd
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                dddddddddd
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                ddddddddddd
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                dddddddddd
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                ddd
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                ddddddd
                            </td>
                            <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                dddddddddd
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>

        </>
    )
}

export default OrderList