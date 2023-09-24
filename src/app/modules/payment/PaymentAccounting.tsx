import { useState, useEffect } from "react"
import ProfessionalSelect from "../../../_cloner/helpers/components/ProfessionalSelect"
import { Card7 } from "../../../_cloner/partials/content/cards/Card7"
import { useGetRecievePaymentByApproved } from "./core/_hooks"
import { columns } from "./helpers/paymentAccountingColumns"
import Backdrop from "../../../_cloner/helpers/components/Backdrop"
import { IPayment } from "./core/_models"
import { DownloadFilePDF, DownloadFilePNG } from "../../../_cloner/helpers/DownloadFiles"
import DataGrid from "../../../_cloner/helpers/components/DataGrid"

const approvied = [
    { value: "0", label: "تایید نشده" },
    { value: "1", label: "تایید شده" },
    // { value: "2", label: "تکمیل شده" }
]

const PaymentAccounting = () => {
    const { mutate, data, isError, isLoading } = useGetRecievePaymentByApproved()
    const [loadingDownloadFile, setLoadingDownloadFile] = useState<boolean>(false);

    useEffect(() => {
        mutate("0")
        // eslint-disable-next-line
    }, [])

    const handleFetch = (selectedOption: any) => {
        mutate(selectedOption.value)
    }


    var signatures: any = {
        JVBERi0: "application/pdf",
        R0lGODdh: "image/gif",
        R0lGODlh: "image/gif",
        iVBORw0KGgo: "image/png",
        "/9j/": "image/jpg"
    };

    function detectMimeType(b64: any) {
        for (var s in signatures) {
            if (b64.indexOf(s) === 0) {
                return signatures[s];
            }
        }
    }
    const hadelDownload = (item: IPayment) => {
        setLoadingDownloadFile(true)
        item?.attachments?.forEach(element => {
            switch (detectMimeType(element.fileData)) {
                case "application/pdf":
                    const outputFilenamePdf = `filesattachments${Date.now()}.pdf`;
                    DownloadFilePDF(element.fileData, outputFilenamePdf)
                    break;
                case "image/png":
                    const outputFilenamePng = `filesattachments${Date.now()}.png`;
                    DownloadFilePNG(element.fileData, outputFilenamePng)        
                    break;
            
                default:
                    break;
            }
            setLoadingDownloadFile(false)        
        });
    };

    const renderActions = (item: any) => {
        return <div className="tw-flex tw-gap-4">
            <div onClick={() => hadelDownload(item?.data)} className="tw-bg-yellow-500 tw-px-4 tw-py-2 tw-cursor-pointer tw-rounded-md">
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
                <DataGrid columns={columns(renderActions)} rowData={data?.data} />
            </Card7>

        </>
    )
}

export default PaymentAccounting