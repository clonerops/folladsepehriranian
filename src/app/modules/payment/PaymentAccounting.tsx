import { useState, useEffect } from "react"
import ProfessionalSelect from "../../../_cloner/helpers/components/ProfessionalSelect"
import { Card7 } from "../../../_cloner/partials/content/cards/Card7"
import { useGetRecievePaymentByApproved } from "./core/_hooks"
import { columns } from "./helpers/paymentAccountingColumns"
import Backdrop from "../../../_cloner/helpers/components/Backdrop"
import DataGrid from "../../../_cloner/helpers/components/DataGrid"
import { Link } from "react-router-dom"

const approvied = [
    { value: "0", label: "تایید نشده" },
    { value: "1", label: "تایید شده" },
    // { value: "2", label: "تکمیل شده" }
]

const PaymentAccounting = () => {
    const { mutate, data, isLoading } = useGetRecievePaymentByApproved()
    const [loadingDownloadFile, setLoadingDownloadFile] = useState<boolean>(false);

    useEffect(() => {
        mutate("0")
        // eslint-disable-next-line
    }, [])

    const handleFetch = (selectedOption: any) => {
        mutate(selectedOption.value)
    }

    const renderActions = (item: any) => {
        return <Link to={`/dashboard/payment/accounting/${item?.data?.id}`} className="tw-flex tw-gap-4">
            <div className="tw-bg-cyan-950 tw-px-4 tw-py-2 tw-cursor-pointer tw-rounded-md">
                <div
                    className="tw-cursor-pointer tw-text-white"
                >
                    جزئیات و تایید حسابداری
                </div>
            </div>
        </Link>

    }
    return (
        <>
            {isLoading && <Backdrop loading={isLoading} />}
            {loadingDownloadFile && <Backdrop loading={loadingDownloadFile} />}

            <Card7 image="" title="">
                <div className="tw-my-4 tw-w-[50%]">
                    <ProfessionalSelect options={approvied} onChange={handleFetch} placeholder="انتخاب کنید ..." />
                </div>
                <DataGrid columns={columns(renderActions)} rowData={data?.data} />
            </Card7>

        </>
    )
}

export default PaymentAccounting