import { Form, Formik } from "formik";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { useCreateCustomer } from "../core/_hooks";
import { useGetCustomerValidities } from "../../../../_cloner/helpers/_hooks";
import FormikInput from "../../../../_cloner/helpers/components/FormikInput";
import { customerType } from "../helpers/customerType";
import SubmitButton from "../../../../_cloner/helpers/components/SubmitButton";
import { convertValueLabelCustomerValidaty } from "../helpers/convertValueLabel";
import { createValiadtion } from "../validation/createValidation";
import FormikSelect from "../../../../_cloner/helpers/components/FormikSelect";
import { ToastComponent } from "../../../../_cloner/helpers/components/Toast";

const CreateCustomer = (props: {
    setIsCreateOpen: React.Dispatch<React.SetStateAction<boolean>>,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}) => {
    const { mutate, data, isLoading } = useCreateCustomer();
    const { data: customerValidityData } = useGetCustomerValidities()
    const initialValues = {
        firstName: "",
        lastName: "",
        fatherName: "",
        nationalId: "",
        nationalId2: "",
        mobile: "",
        address1: "",
        officialName: "",
        customerType: 0,
        customerValidityId: 1,
        tel1: "",
        isSupplier: false,
        tel2: "",
        address2: "",
        representative: "",
    };
    return (
        <>

            {data?.data?.status === 400 && (
                <ErrorText text={data?.data?.title} />
            )}
            <Formik initialValues={initialValues} validationSchema={createValiadtion} onSubmit={
                async (values, { setStatus, setSubmitting }) => {
                    try {
                        mutate(values, {
                            onSuccess: (message) => {
                                ToastComponent(message?.message || message?.data?.Message || message?.data?.message)
                                props.refetch()
                                props.setIsCreateOpen(false)
                            }
                        });
                    } catch (error) {
                        setStatus("اطلاعات ثبت مشتری نادرست می باشد");
                        setSubmitting(false);
                    }
                }
            }>
                {({ handleSubmit }) => {
                    return <Form onSubmit={handleSubmit} className="container">
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-x-4">
                            <FormikInput title="نام" divClassName="tw-w-full tw-my-2" name="firstName" placeholder="نام" type="text" />
                            <FormikInput title="نام خانوادگی" divClassName="tw-w-full tw-my-2" name="lastName" placeholder="نام خانوادگی" type="text" />
                            <FormikInput title="نام پدر" divClassName="tw-w-full tw-my-2" name="fatherName" placeholder="نام پدر" type="text" />
                            <FormikInput title="اسم رسمی مشتری" divClassName="tw-w-full tw-my-2" name="officialName" placeholder="اسم رسمی مشتری" type="text" />
                            <FormikInput title="شناسه ملی" divClassName="tw-w-full tw-my-2" name="nationalId2" placeholder="شناسه ملی" type="text" />
                            <FormikInput title="کدملی" divClassName="tw-w-full tw-my-2" name="nationalId" placeholder="کدملی" type="text" />
                        </div>
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-x-4">
                            <FormikInput title="معرف" divClassName="tw-w-full tw-my-2" name="representative" placeholder="معرف" type="text" />
                            <FormikInput title="موبایل" divClassName="tw-w-full tw-my-2" name="mobile" placeholder="موبایل" type="text" />
                            <FormikInput title="تلفن 1" divClassName="tw-w-full tw-my-2" name="tel1" placeholder="تلفن 1" type="text" />
                            <FormikInput title="تلفن 2" divClassName="tw-w-full tw-my-2" name="tel2" placeholder="تلفن 2" type="text" />
                        </div>
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-x-4">
                            <div className="tw-w-full tw-my-2 tw-text-right">
                                <label className="tw-flex">
                                    <FormikInput divClassName="tw-my-2" name="isSupplier" placeholder="" type="checkbox" />
                                    <span className="tw-px-4 tw-font-bold tw-text-lg">آیا تامین کننده می باشد؟</span>
                                </label>
                            </div>
                            <FormikSelect options={customerType} name="customerType" placeholder="نوع مشتری" />
                            <FormikSelect options={convertValueLabelCustomerValidaty(customerValidityData)} name="customerValidityId" placeholder="نوع اعتبار" />
                        </div>
                        <div className="tw-w-full tw-my-2 md:tw-col-span-3">
                            <FormikInput title="آدرس 1" divClassName="tw-w-full tw-my-2" name="address1" placeholder="آدرس 1" type="text" />
                            <FormikInput title="آدرس 2" divClassName="tw-w-full tw-my-2" name="address2" placeholder="آدرس 2" type="text" />
                        </div>
                        <SubmitButton isLoading={isLoading} title="ثبت مشتری" />
                    </Form>
                }}
            </Formik>
        </>
    );
};

export default CreateCustomer;