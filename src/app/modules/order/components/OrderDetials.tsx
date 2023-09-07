import { IOrderDetail } from "../core/_models"

const OrderDetials = (props: { item: IOrderDetail | undefined }) => {
    return (
        <>
            <div className="container">
                <h3 className="tw-text-right tw-font-yekan_bold tw-font-bold tw-text-2xl tw-py-4">جزئیات سفارش {props.item?.orderCode}</h3>
                <table className="tw-w-full tw-my-2">
                    <thead className="tw-bg-indigo-200">
                        <tr>
                            <td className="tw-py-4 tw-px-4 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                ردیف
                            </td>
                            <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                نام محصول
                            </td>
                            <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                شماره ردیف
                            </td>
                            <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                شماره انبار
                            </td>
                            <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                مقدار تقریبی
                            </td>
                            <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                تعداد در بسته
                            </td>
                            <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                قیمت
                            </td>
                            <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                قیمت خرید
                            </td>
                            <td className="tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                                نوع فاکتور خرید
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {props?.item?.details?.map((item: any, index: number) => {
                            return <tr key="{id}">
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {index + 1}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.productName}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.rowId}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.warehouseName}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.proximateAmount}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.numberInPackage}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.price}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.buyPrice}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.purchaseInvoiceTypeDesc}
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default OrderDetials