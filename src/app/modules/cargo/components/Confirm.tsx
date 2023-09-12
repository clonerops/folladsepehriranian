import { useParams } from "react-router-dom"
import CustomInput from "../../../../_cloner/helpers/components/CustomInput"
import { Card6 } from "../../../../_cloner/partials/content/cards/Card6"
import CustomDatepicker from "../../../../_cloner/helpers/components/CustomDatepicker"
import ProfessionalSelect from "../../../../_cloner/helpers/components/ProfessionalSelect"
import { useRetrieveOrder } from "../../order/core/_hooks"

const Confirm = () => {
    const { id } = useParams()
    const { data } = useRetrieveOrder(id)

    const paymentInfo = [
        { value: 1, label: "نقدی" },
        { value: 2, label: "ماهیانه باربری" }
    ]
    return (
        <>
            <Card6 image="" title="">
                <h3 className="tw-text-right tw-font-yekan_bold tw-font-bold tw-text-2xl tw-py-4">جزئیات سفارش {data?.data?.orderCode}</h3>

                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-text-right p-4">
                    <div className="py-4">نوع فاکتور: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-lg">{data?.data?.invoiceTypeDesc}</span></div>
                    <div className="py-4">نوع خروج: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-lg">{data?.data?.exitType === 1 ? "عادی" : "بعد از تسویه"}</span></div>
                    <div className="py-4">نوع ارسال: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-lg">{data?.data?.orderSendTypeDesc}</span></div>
                    <div className="py-4">نحوه پرداخت کرایه: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-lg">{data?.data?.paymentTypeDesc}</span></div>
                    <div className="py-4">اسم رسمی: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-lg">{data?.data?.customerOfficialName}</span></div>
                    <div className="py-4">تاریخ تسویه: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-lg">{data?.data?.settlementDate}</span></div>
                </div>

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

                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.details?.map((item: any, index: number) => {
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

                            </tr>
                        })}
                    </tbody>
                </table>

                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4 mt-8">
                    <CustomInput
                        // getFieldProps={formik.getFieldProps}
                        // touched={formik.touched.tel1}
                        // errors={formik.errors.tel1}
                        name={"driver"}
                        type="string"
                        placeholder="راننده"
                    />
                    <CustomInput
                        // getFieldProps={formik.getFieldProps}
                        // touched={formik.touched.tel1}
                        // errors={formik.errors.tel1}
                        name={"driver"}
                        type="string"
                        placeholder="باربری"
                    />
                    <CustomInput
                        // getFieldProps={formik.getFieldProps}
                        // touched={formik.touched.tel1}
                        // errors={formik.errors.tel1}
                        name={"driver"}
                        type="string"
                        placeholder="پلاک خودرو"
                    />
                    <CustomInput
                        // getFieldProps={formik.getFieldProps}
                        // touched={formik.touched.tel1}
                        // errors={formik.errors.tel1}
                        name={"driver"}
                        type="string"
                        placeholder="شماره همراه راننده"
                    />
                    <CustomDatepicker
                        // onChange={(d: any) =>
                        //     setSettlementDate(d.value)
                        // }
                        placeholder="تاریخ حمل"
                    />
                    <ProfessionalSelect
                        options={paymentInfo}
                        // options={dropdownCustomer(
                        //     customers?.data
                        // )}
                        // value={customerSelect}
                        // onChange={handleCustomerChange}
                        placeholder="نوع پرداخت کرایه"
                    />
                </div>

                <div className="d-flex justify-content-end tw-mt-5">
                    <button
                        // onClick={handleCreateOrder}
                        className="tw-bg-green-600 tw-text-white tw-px-20 tw-py-4 tw-rounded-md tw-text-lg"
                    >
                        {/* {isLoading ? "درحال پردازش" : "ثبت سفارش"} */}
                        ثبت اعلام بار
                    </button>
                </div>

            </Card6>
        </>
    )
}

export default Confirm