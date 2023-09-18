import { useState } from 'react'
import { Card7 } from '../../../_cloner/partials/content/cards/Card7'
import { Form, Formik } from 'formik'
import FormikInput from '../../../_cloner/helpers/components/FormikInput'
import FileUpload from './components/FileUpload'
import moment from 'moment-jalaali'
import { usePostRecievePayment } from './core/_hooks'
import SubmitButton from '../../../_cloner/helpers/components/SubmitButton'
import Swal from 'sweetalert2'
import Backdrop from '../../../_cloner/helpers/components/Backdrop'
import FormikSelect from '../../../_cloner/helpers/components/FormikSelect'
import { useGetReceivePaymentSources } from '../../../_cloner/helpers/_hooks'
import { dropdownReceivePaymentResource } from './helpers/dropdownConvert'

const initialValues = {
    ReceivedFrom: "",
    PayTo: "",
    AccountOwner: "",
    Amount: "",
    TrachingCode: "",
    CompanyName: "",
    ContractCode: "",
    Description: "",
}

const RecievePayment = () => {

    const { mutate, isLoading } = usePostRecievePayment()
    const { data: paymentResource } = useGetReceivePaymentSources()

    const [files, setFiles] = useState<File[]>([]);


    return (
        <>
            {isLoading && <Backdrop loading={isLoading} />}
            <Card7 image='' title=''>
                <div className='tw-flex tw-justify-between tw-items-center'>
                    <div className='tw-font-bold tw-text-xl tw-bg-slate-200 tw-py-4 tw-px-16 tw-text-black tw-rounded-lg'>شماره: <span className='tw-text-2xl tw-px-4'></span></div>
                    <div className='tw-font-bold tw-text-xl tw-bg-gray-200 tw-text-black tw-py-4 tw-px-16 tw-rounded-lg'>تاریخ ثبت: <span className='tw-text-2xl tw-pr-4'>{moment(Date.now()).format('jYYYY/jMM/jDD').toString()}</span></div>
                </div>
                <div className='tw-mt-8'>
                    <Formik initialValues={initialValues} onSubmit={
                        async (values) => {
                            const formData = new FormData()
                            formData.append("ReceivedFrom", values.ReceivedFrom)
                            formData.append("PayTo", values.PayTo)
                            formData.append("AccountOwner", values.AccountOwner)
                            formData.append("TrachingCode", values.TrachingCode)
                            formData.append("CompanyName", values.CompanyName)
                            formData.append("ContractCode", values.ContractCode)
                            formData.append("Description", values.Description)
                            files.forEach((file) => {
                                formData.append('Attachments', file);
                            });
                            mutate(formData, {
                                onSuccess: () => {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "اطلاعات با موفقیت ذخیره شد",
                                        showConfirmButton: false,
                                        timer: 8500,
                                    })
                                }
                            })
                        }
                    }>
                        {({ handleSubmit }) => {
                            return <Form onSubmit={handleSubmit}>
                                <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4 tw-my-4'>
                                    <FormikSelect name='ReceivedFrom' placeholder='دریافت از' options={dropdownReceivePaymentResource(paymentResource)} />
                                    <FormikSelect name='PayTo' placeholder='پرداخت به' options={dropdownReceivePaymentResource(paymentResource)} />
                                    {/* <FormikInput name='ReceivedFrom' placeholder='دریافت از' type='text' /> */}
                                    {/* <FormikInput name='PayTo' placeholder='پرداخت به' type='text' /> */}
                                    <FormikInput name='AccountOwner' placeholder='صاحب حساب' type='text' />
                                </div>
                                <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-4 tw-my-4'>
                                    <FormikInput name='Amount' placeholder='مبلغ' type='text' />
                                    <FormikInput name='TrachingCode' placeholder='کد پیگیری' type='text' />
                                    <FormikInput name='CompanyName' placeholder='نام شرکت' type='text' />
                                    <FormikInput name='ContractCode' placeholder='کد قرارداد' type='text' />
                                </div>
                                <div className='tw-grid tw-grid-cols-1 tw-my-4'>
                                    <FormikInput name='Description' placeholder='توضیحات' type='text' />
                                </div>

                                <div>
                                    <FileUpload files={files} setFiles={setFiles} />
                                </div>
                                <SubmitButton title='ثبت' isLoading={isLoading} />
                            </Form>
                        }}
                    </Formik>
                </div>

            </Card7>
        </>
    )
}

export default RecievePayment