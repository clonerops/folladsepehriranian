import DataGrid from "../../../../_cloner/helpers/components/DataGrid";
import { Card7 } from "../../../../_cloner/partials/content/cards/Card7"
import { columns } from "../../cargo/helpers/orderColumns"

type Props = {
    data: any | undefined;
    isError: boolean;
    isLoading: boolean;
}

const Detail = (props: Props) => {
    const { data } = props;

    const renderAction = () => { return <></> }

    return (
        <>
            <h3 className="tw-text-right tw-font-yekan_bold tw-font-bold tw-text-2xl tw-py-4 tw-text-[#009ef7]">جزئیات سفارش {data?.data?.orderCode}</h3>
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-text-right tw-gap-4 p-4">
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
                    <div className=" tw-text-lg tw-text-gray-500">مشتری: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-xl tw-text-black">{data?.data?.customerFirstName + " " + data?.data?.customerLastName}</span></div>
                </Card7>
                <Card7 image="" title="">
                    <div className=" tw-text-lg tw-text-gray-500">تاریخ تسویه: <span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-xl tw-text-black">{data?.data?.settlementDate}</span></div>
                </Card7>
            </div>
            <div>
                <h3 className="tw-text-right tw-font-yekan_bold tw-font-bold tw-text-2xl tw-py-4 tw-text-[#009ef7]">کالاها</h3>
                <DataGrid columns={columns(renderAction)} rowData={data?.data?.details} />
            </div>

        </>
    )
}

export default Detail