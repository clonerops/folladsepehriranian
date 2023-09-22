import { useParams } from "react-router-dom"
import { useRetrieveOrder } from "../../order/core/_hooks"
import { Form, Formik } from "formik"
import FormikInput from "../../../../_cloner/helpers/components/FormikInput"
import FormikDatepicker from "../../../../_cloner/helpers/components/FormikDatepicker"
import { confirmValidation } from "../validations/confirm"
import FormikSelect from "../../../../_cloner/helpers/components/FormikSelect"
    // import ReusableTable from "../../../../_cloner/helpers/components/Table"
    // import { columns } from "../helpers/orderColumns"
import SubmitButton from "../../../../_cloner/helpers/components/SubmitButton"
import { useCreateCargo } from "../core/_hooks"
import moment from "moment-jalaali"
import Swal from "sweetalert2";
import Backdrop from "../../../../_cloner/helpers/components/Backdrop"
import { Card7 } from "../../../../_cloner/partials/content/cards/Card7"
import Detail from "../../order/components/Detail"

const initialValues = {
    driverName: "",
    approvedUserName: "",
    carPlaque: "",
    driverMobile: "",
    approvedDate: new Date(),
    rentAmount: 1
}

const Confirm = () => {
    const { id } = useParams()
    const { data, isLoading: orderLoading, isError: orderError } = useRetrieveOrder(id)
    const { mutate, isLoading } = useCreateCargo()

    const paymentInfo = [
        { value: 1, label: "نقدی" },
        { value: 2, label: "ماهیانه باربری" }
    ]

    return (
        <>
            {isLoading && <Backdrop loading={isLoading} />}
            {orderLoading && <Backdrop loading={orderLoading} />}
            <Card7 image="" title="">
                <Detail data={data} isError={orderError} isLoading={orderLoading} />
                <Formik initialValues={initialValues} validationSchema={confirmValidation} onSubmit={
                    async (values, { setStatus, setSubmitting }) => {
                        try {
                            const formData = {
                                orderId: id,
                                unloadingPlaceAddress: "",
                                driverName: values.driverName,
                                carPlaque: values.carPlaque,
                                driverMobile: values.driverMobile,
                                approvedUserName: values.approvedUserName,
                                approvedDate: moment(values.approvedDate).format("jYYYY/jMM/jDD"),
                                rentAmount: values.rentAmount
                            }
                            mutate(formData, {
                                onSuccess: () => {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "اعلام بار با موفقیت ثبت گردید.",
                                        showConfirmButton: false,
                                        timer: 8500,
                                    })
                                }
                            })
                        } catch (error) {
                            setStatus("اطلاعات ثبت اعلام بار نادرست می باشد");
                            setSubmitting(false);

                        }
                    }
                }>
                    {({ handleSubmit, setFieldValue }) => {
                        return <Form onSubmit={handleSubmit}>
                            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4 mt-8">
                                <FormikInput name="driverName" placeholder="راننده" type="text" />
                                <FormikInput name="approvedUserName" placeholder="باربری" type="text" />
                                <FormikInput name="carPlaque" placeholder="پلاک خودرو" type="text" />
                                <FormikInput name="driverMobile " placeholder="شماره همراه راننده" type="text" />
                                <FormikDatepicker name="approvedDate " placeholder="تاریخ حمل" setFieldValue={setFieldValue} boxClassName="tw-w-full" />
                                <FormikSelect name="rentAmount" label="rentAmount" placeholder="نوع تسویه باربری" options={paymentInfo} />
                            </div>
                            <div className="tw-flex tw-justify-end tw-my-8">
                                <SubmitButton title="ثبت اعلام بار" isLoading={isLoading} />
                            </div>
                        </Form>
                    }}
                </Formik>
            </Card7>
        </>
    )
}

export default Confirm