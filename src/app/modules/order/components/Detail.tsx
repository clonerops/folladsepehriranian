import { useLocation, useParams } from "react-router-dom";
import DataGrid from "../../../../_cloner/helpers/components/DataGrid";
import { Card7 } from "../../../../_cloner/partials/content/cards/Card7"
import { columns } from "../../cargo/helpers/orderColumns"
import { useConfirmOrder } from "../core/_hooks";
import { ToastComponent } from "../../../../_cloner/helpers/components/Toast";

type Props = {
    data: any | undefined;
    isConfirm?: boolean;
    isError: boolean;
    isLoading: boolean;
}

const Detail = (props: Props) => {
    const location = useLocation();
    const { id } = useParams()
    const { isConfirmed }: any = location.state;
    const { data } = props;
    const { mutate, data: confirm, isLoading } = useConfirmOrder()

    const handleConfirmOrder = () => {
        if (id)
            mutate(id, {
                onSuccess: (message) => {
                    console.log(message?.succeeded)
                    if (message?.succeeded) {
                        ToastComponent("تایید سفارش با موفقیت انجام شد!")
                    } else {
                        ToastComponent("خطا! دوباره سعی کنید")
                    }
                },
                onError: () => {
                    ToastComponent("خطا! دوباره سعی کنید")
                }
            })
    }



    const renderAction = () => { return <></> }

    return (
        <>
            <div className="tw-flex tw-justify-between">
                <h3 className="tw-text-right tw-font-yekan_bold tw-font-bold tw-text-2xl tw-py-4 tw-text-[#6601FB]">
                    <span>جزئیات سفارش {data?.data?.orderCode}</span>
                </h3>
                {isConfirmed &&
                    <button onClick={handleConfirmOrder} className="tw-bg-success tw-px-16 tw-rounded-lg tw-font-bold">{isLoading ? "در حال پردازش" : "تایید سفارش"}</button>
                }
            </div>
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-text-right tw-gap-4">
                <Card7 image="" title="">
                    <div className=" tw-text-lg tw-text-gray-500">مشتری: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-xl tw-text-black">{data?.data?.customerFirstName + " " + data?.data?.customerLastName}</span></div>
                </Card7>
                <Card7 image="" title="">
                    <div className=" tw-text-lg tw-text-gray-500">نوع فاکتور: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-xl tw-text-black">{data?.data?.invoiceTypeDesc}</span></div>
                </Card7>

                <Card7 image="" title="">
                    <div className=" tw-text-lg tw-text-gray-500">نوع خروج: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-xl tw-text-black">{data?.data?.exitType === 1 ? "عادی" : "بعد از تسویه"}</span></div>
                </Card7>
                <Card7 image="" title="">
                    <div className=" tw-text-lg tw-text-gray-500">نوع ارسال: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-xl tw-text-black">{data?.data?.orderSendTypeDesc}</span></div>
                </Card7>
                <Card7 image="" title="">
                    <div className=" tw-text-lg tw-text-gray-500">پرداخت کرایه: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-xl tw-text-black">{data?.data?.paymentTypeDesc}</span></div>
                </Card7>
                <Card7 image="" title="">
                    <div className=" tw-text-lg tw-text-gray-500">تاریخ تسویه: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-xl tw-text-black">{data?.data?.settlementDate}</span></div>
                </Card7>
            </div>
            <div>
                <h3 className="tw-text-right tw-font-yekan_bold tw-font-bold tw-text-2xl tw-py-4 tw-text-[#6601FB]">کالاها</h3>
                <DataGrid columns={columns(renderAction)} rowData={data?.data?.details} />
            </div>

        </>
    )
}

export default Detail