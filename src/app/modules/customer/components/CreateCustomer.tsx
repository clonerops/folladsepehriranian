import { useFormik } from "formik";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import CustomTextarea from "../../../../_cloner/helpers/components/CustomTextarea";
import { useState } from "react";
import SuccessText from "../../../../_cloner/helpers/components/SuccessText";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { useCreateCustomer } from "../core/_hooks";
import CusromRadioGroupButton from "../../../../_cloner/helpers/components/CusromRadioGroupButton";
import { customerTypeData } from "../helpers/fakeData";
import { useGetCustomerValidities } from "../../../../_cloner/helpers/_hooks";

const CreateCustomer = (props: {
    setIsCreateOpen: React.Dispatch<React.SetStateAction<boolean>>,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}) => {
    const { mutate, data, isError, isLoading } = useCreateCustomer();
    const { data: customerValidityData } = useGetCustomerValidities()
    // States
    const [isSupplier, setIsSupplier] = useState(false)
    const [customerType, setCustomerType] = useState<number>(0);
    const [customerValidity, setCustomerValidity] = useState<number>(0);

    const handleCustomerRadio = (e: React.ChangeEvent<HTMLInputElement>) => setCustomerType(Number(e.target.value));
    const handleCustomerValidityRadio = (e: React.ChangeEvent<HTMLInputElement>) => setCustomerValidity(Number(e.target.value));


    const initialValues = {
        firstName: "",
        lastName: "",
        fatherName: "",
        nationalId: "",
        nationalId2: "",
        mobile: "",
        address1: "",
        officialName: "",
        customerType: 1,
        customerValidityId: 1,
        tel: "",
        tel2: "",
        address2: "",
        representative: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                const formData = {
                    ...values,
                    customerType: customerType,
                    customerValidityId: customerValidity,
                    isSupplier: isSupplier
                }
                mutate(formData, {
                    onSuccess: () => {
                        props.refetch()
                        props.setIsCreateOpen(false)
                    }
                });
            } catch (error) {
                setStatus("اطلاعات ثبت محصول نادرست می باشد");
                setSubmitting(false);
            }
        },
    });

    return (
        <>
            {data?.succeeded && (
                <SuccessText text={data?.message} />
            )}
            {data?.data?.status === 400 && (
                <ErrorText text={data?.data?.title} />
            )}
            <form onSubmit={formik.handleSubmit} className="container">
                <div className="tw-grid tw-grid-cols-3 tw-gap-x-4">
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            نام
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.firstName}
                            errors={formik.errors.firstName}
                            name={"firstName"}
                            type="string"
                            formikInput={true}
                            placeholder="نام"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            نام خانوادگی
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.lastName}
                            errors={formik.errors.lastName}
                            type="string"
                            name={"lastName"}
                            formikInput={true}
                            placeholder="نام خانوادگی"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            نام خانوادگی
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.fatherName}
                            errors={formik.errors.fatherName}
                            type="string"
                            name={"fatherName"}
                            formikInput={true}
                            placeholder="نام پدر"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            نام خانوادگی
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.officialName}
                            errors={formik.errors.officialName}
                            type="string"
                            name={"officialName"}
                            formikInput={true}
                            placeholder="اسم رسمی مشتری"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            کدملی
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.nationalId2}
                            errors={formik.errors.nationalId2}
                            type="text"
                            name={"nationalId2"}
                            formikInput={true}
                            placeholder="شناسه ملی"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            کدملی
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.nationalId}
                            errors={formik.errors.nationalId}
                            type="text"
                            name={"nationalId"}
                            formikInput={true}
                            placeholder="کدملی"
                        />
                    </div>
                </div>
                <div className="tw-grid tw-grid-cols-2 tw-gap-x-4">
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            نماینده شرکت
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.representative}
                            errors={formik.errors.representative}
                            name={"representative"}
                            type="string"
                            formikInput={true}
                            placeholder="معرف"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            موبایل
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.mobile}
                            errors={formik.errors.mobile}
                            type="text"
                            name={"mobile"}
                            formikInput={true}
                            placeholder="موبایل"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            تلفن
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.tel}
                            errors={formik.errors.tel}
                            type="text"
                            name={"tel"}
                            formikInput={true}
                            placeholder="تلفن 1"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            تلفن
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.tel2}
                            errors={formik.errors.tel2}
                            type="text"
                            name={"tel2"}
                            formikInput={true}
                            placeholder="تلفن 2"
                        />
                    </div>
                </div>
                <div className="tw-grid tw-grid-cols-3 tw-gap-x-4">
                    <div className="tw-w-full tw-my-2 tw-text-right">
                        <label>
                            <input onChange={(e) => setIsSupplier(e.target.checked)} type="checkbox" className="tw-accent-slate-800 tw-w-[14px] tw-h-[14px]" />
                            <span className="tw-px-4 tw-font-bold tw-text-lg">آیا تامین کننده می باشد؟</span>
                        </label>
                    </div>
                    <div className="tw-w-full tw-my-2 tw-text-right">
                        <label className="tw-font-yekan_bold tw-text-lg">نوع مشتری</label>
                        <div className="tw-flex tw-justify-start tw-items-center">
                            <CusromRadioGroupButton className="tw-my-4" selected={customerType} handleRadio={handleCustomerRadio} items={customerTypeData} name="customerType" />
                        </div>
                    </div>
                    <div className="tw-w-full tw-my-2 tw-text-right">
                        <label className="tw-font-yekan_bold tw-text-lg">نوع اعتبار</label>
                        <div className="tw-flex tw-justify-start tw-items-center">
                            <CusromRadioGroupButton className="tw-my-4" selected={customerValidity} handleRadio={handleCustomerValidityRadio} items={customerValidityData} name="customerValidity" />
                        </div>
                    </div>
                    <div className="tw-w-full tw-my-2 tw-col-span-3">
                        <CustomTextarea
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.address1}
                            errors={formik.errors.address1}
                            name={"address1"}
                            formikInput={true}
                            placeholder="ادرس 1"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2 tw-col-span-3">
                        <CustomTextarea
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.address2}
                            errors={formik.errors.address2}
                            name={"address2"}
                            formikInput={true}
                            placeholder="آدرس 2"
                        />
                    </div>
                </div>
                <div className="tw-flex">
                    <button
                        type="submit"
                        id="kt_sign_in_submit"
                        className="tw-btn-success tw-mb-2"
                        disabled={formik.isSubmitting || !formik.isValid}
                    >
                        {!isLoading && (
                            <span className="indicator-label">ثبت مشتری</span>
                        )}
                        {isLoading && (
                            <span
                                className="indicator-progress"
                                style={{ display: "block" }}
                            >
                                درحال پردازش...
                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                        )}
                    </button>
                </div>
            </form >
        </>
    );
};

export default CreateCustomer;