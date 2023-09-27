import { useParams } from "react-router-dom"
import { Card7 } from "../../../../_cloner/partials/content/cards/Card7"
import { useGetRecievePaymentById, useUpdatePaymentApproved } from "../core/_hooks"
import { ToastComponent } from "../../../../_cloner/helpers/components/Toast"
import Backdrop from "../../../../_cloner/helpers/components/Backdrop"
import { DownloadFileJPEG, DownloadFileJPG, DownloadFilePNG } from "../../../../_cloner/helpers/DownloadFiles"

const Detail = () => {
    const { id }: any = useParams()
    const { data, isLoading: fetchingLaoding, refetch } = useGetRecievePaymentById(id)
    const { mutate, isLoading } = useUpdatePaymentApproved()

    const fieldsValue = [
        { title: "دریافت از", value: data?.data?.receivePaymentSourceFromDesc + " " + (data?.data?.receiveFromCustomerName === null ? "" : data?.data?.receiveFromCustomerName) },
        { title: "پرداخت به", value: data?.data?.receivePaymentSourceToDesc + " " + (data?.data?.payToCustomerName === null ? "" : data?.data?.payToCustomerName) },
        { title: "صاحب حساب", value: data?.data?.accountOwner },
        { title: "کد پیگیری", value: data?.data?.trachingCode },
        { title: "صاحب شرکت", value: data?.data?.companyName },
        { title: "شماره قرارداد", value: data?.data?.contractCode },
        { title: "تایید حسابداری؟", value: data?.data?.isAccountingApproval === true ? "تایید شده" : "تایید نشده" },
        { title: "توضیحات", value: data?.data?.description }
    ]

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

    const hadelDownload = () => {
        if (data?.data.attachments?.length === 0) {
            ToastComponent("فایلی برای دانلود وجود ندارد")
        } else {
            data?.data?.attachments?.forEach((element: any) => {
                switch (detectMimeType(element.fileData)) {
                    case "image/png":
                        const outputFilenamePng = `filesattachments${Date.now()}.png`;
                        DownloadFilePNG(element.fileData, outputFilenamePng)
                        break;
                    case "image/jpg":
                        const outputFilenameJpg = `filesattachments${Date.now()}.jpg`;
                        DownloadFileJPG(element.fileData, outputFilenameJpg)
                        break;
                    case "image/jpeg":
                        const outputFilenameJpeg = `filesattachments${Date.now()}.jpeg`;
                        DownloadFileJPEG(element.fileData, outputFilenameJpeg)
                        break;

                    default:
                        break;
                }
            });
        }
    };


    const handleConfirm = () => {
        if (id)
            mutate(id, {
                onSuccess: (message) => {
                    if (message?.succeeded) {
                        ToastComponent("تایید حسابداری با موفقیت انجام شد!")
                        refetch()
                    } else {
                        ToastComponent("خطا! دوباره سعی کنید")
                    }
                },
                onError: () => {
                    ToastComponent("خطا! دوباره سعی کنید")
                }
            })

    }

    return (
        <>
        {fetchingLaoding && <Backdrop loading={fetchingLaoding} />}
            <Card7 title="" image="">
                <div className="tw-flex tw-justify-end tw-items-end tw-gap-x-8">
                    <button onClick={hadelDownload} className="tw-bg-yellow-600 tw-text-white tw-px-16 tw-py-4 tw-mb-4 tw-rounded-lg tw-font-bold">{"دانلود ضمیمه ها"}</button>
                    <button onClick={handleConfirm} className="tw-bg-success tw-px-16 tw-py-4 tw-mb-4 tw-rounded-lg tw-font-bold">{isLoading ? "در حال پردازش" : "ثبت تایید حسابداری"}</button>
                </div>
                
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-text-right tw-gap-4">
                    {fieldsValue.map((item: any) =>
                        <Card7 image="" title="">
                            <div className=" tw-text-lg tw-text-gray-500">{item.title}<span className="tw-px-4 tw-font-yekan_bold tw-font-bold tw-text-xl tw-text-black">{item.value}</span></div>
                        </Card7>
                    )}
                </div>

            </Card7>
        </>
    )
}

export default Detail