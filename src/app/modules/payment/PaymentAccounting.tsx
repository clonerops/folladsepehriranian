import { useState, useEffect } from "react"
import ProfessionalSelect from "../../../_cloner/helpers/components/ProfessionalSelect"
import ReusableTable from "../../../_cloner/helpers/components/Table"
import { Card7 } from "../../../_cloner/partials/content/cards/Card7"
import { useGetRecievePaymentByApproved } from "./core/_hooks"
import { columns } from "./helpers/paymentAccountingColumns"
import Backdrop from "../../../_cloner/helpers/components/Backdrop"
import { IPayment } from "./core/_models"
import Modal from "../../../_cloner/helpers/components/Modal"
import { DownloadFile } from "../../../_cloner/helpers/DownloadFiles"
import { saveAs } from 'file-saver';

const approvied = [
    { value: "0", label: "تایید نشده" },
    { value: "1", label: "تایید شده" },
    { value: "2", label: "تکمیل شده" }
]

const PaymentAccounting = () => {
    const { mutate, data, isError, isLoading } = useGetRecievePaymentByApproved()
    const [loadingDownloadFile, setLoadingDownloadFile] = useState<boolean>(false);

    useEffect(() => {
        mutate("0")
    }, [])

    const handleFetch = (selectedOption: any) => {
        mutate(selectedOption.value)
    }


    const handleEdit = (item: IPayment) => {
        console.log(item)
        console.log()
        setLoadingDownloadFile(true)
        const outputFilename = `filesattachments${Date.now()}`;
        item?.attachments?.forEach(element => {
            console.log(typeof(element.fileData))
            DownloadFile(element.fileData, outputFilename)
            setLoadingDownloadFile(false)
        });    
    };

    const renderActions = (item: any) => {
        return <div className="tw-flex tw-gap-4">
            <div onClick={() => handleEdit(item)} className="tw-bg-yellow-500 tw-px-4 tw-py-2 tw-cursor-pointer tw-rounded-md">
                <div
                    className="tw-cursor-pointer tw-text-white"
                >
                    فایل های ضمیمه
                </div>
            </div>
        </div>

    }
    return (
        <>
            {isLoading && <Backdrop loading={isLoading} />}
            {loadingDownloadFile && <Backdrop loading={loadingDownloadFile} />}

            <Card7 image="" title="">
                <div className="tw-my-4 tw-w-[50%]">
                    <ProfessionalSelect options={approvied} onChange={handleFetch} placeholder="انتخاب کنید ..." />
                </div>
                <ReusableTable columns={columns} data={data?.data} renderActions={renderActions} isError={isError} isLoading={isLoading} />
            </Card7>

        </>
    )
}

export default PaymentAccounting