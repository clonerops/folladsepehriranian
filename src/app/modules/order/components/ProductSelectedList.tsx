import moment from "moment-jalaali";
import { KTSVG } from "../../../../_cloner/helpers";
import { IProducts } from "../../product/core/_models";

const ProductSelectedList = (props: {
    orders: IProducts[] | undefined
    setOrders: any
}) => {
    const handleDeleteFromList = (index: number) => {
        if (props.orders) {
            const cloneItems = [...props.orders]
            cloneItems?.splice(index, 1)
            props.setOrders(cloneItems)
        }
    }
    return (
        <div className="tw-overflow-x-auto">
            <table className="tw-w-full tw-table-auto">
                <thead className="tw-bg-gray-200">
                    <tr>
                        <td className="tw-min-w-[20px] tw-py-4 tw-px-4 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            ردیف
                        </td>
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            کالا / کالا
                        </td>
                        {/* <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            برند
                        </td> */}
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            انبار
                        </td>
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            مقدار
                        </td>
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            قیمت
                        </td>
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            توضیحات
                        </td>
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            ردیف فروش
                        </td>
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            خرید از
                        </td>
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            قیمت خرید
                        </td>
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            تاریخ تسویه خرید
                        </td>
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            نوع فاکتور خرید
                        </td>
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            ردیف بنگاه فروشگاه
                        </td>
                        <td className="tw-min-w-[200px] tw-py-4 px-2 tw-text-center tw-text-gray-600 tw-border tw-border-gray-300">
                            حذف
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {props?.orders?.map((item: any, index: number) => {
                        return (
                            <tr
                                className="tw-cursor-pointer tw-hover:bg-gray-100"
                                key={index}
                            >
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {index + 1}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.productName}
                                </td>
                                {/* <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.productBrandName}
                                </td> */}
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.warehouseName}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.proximateAmount}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.price} ریال
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.productDesc}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.rowId}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.buyPrice}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.buyPrice}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {moment(item.purchaseSettlementDate).format("jYYYY/jMM/jDD")}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.purchaseInvoiceTypeName}
                                </td>
                                <td className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    {item.sellerCompanyRow}
                                </td>
                                <td onClick={() => handleDeleteFromList(index)} className="tw-text-center tw-py-4 tw-border tw-border-gray-300">
                                    <div className="tw-flex tw-justify-center tw-items-center">
                                        <KTSVG
                                            className="tw-text-red-500 tw-text-center"
                                            svgClassName=""
                                            path={
                                                "/media/icons/duotune/arrows/arr011.svg"
                                            }
                                        />
                                    </div>

                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductSelectedList;