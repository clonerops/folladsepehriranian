import { useFormik } from "formik";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import CustomTextarea from "../../../../_cloner/helpers/components/CustomTextarea";
import ProfessionalSelect from "../../../../_cloner/helpers/components/ProfessionalSelect";
import { useState } from "react";
import SuccessText from "../../../../_cloner/helpers/components/SuccessText";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import EditText from "../../../../_cloner/helpers/components/EditText";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { ICustomer } from "../core/_models";
import { useUpdateCustomer } from "../core/_hooks";

const EditCustomer = (props: {
    item: ICustomer | undefined,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>

}) => {
    // States
    const [isSupplier, setIsSupplier] = useState(false)

    const { mutate, data, isError, isLoading } = useUpdateCustomer();

    const initialValues = {
        id: props.item?.id,
        firstName: props.item?.firstName,
        lastName: props.item?.lastName,
        nationalId: props.item?.nationalId,
        mobile: props.item?.mobile,
        tel: props.item?.tel,
        representative: props.item?.representative,
        address1: props.item?.address1,
        address2: props.item?.address2,
        customerType: props.item?.customerType,
        customerValidityId: props.item?.customerValidityId,
        isSupplier: props.item?.isSupplier ? props.item?.isSupplier : isSupplier
    };

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                mutate(values);
                props.refetch()
            } catch (error) {
                setStatus("اطلاعات ویرایش محصول نادرست می باشد");
                setSubmitting(false);
            }
        },
    });
    
    return (
        <>
            {data?.succeeded && (
                <EditText text={"ویرایش با موفقیت انجام شد"} />
            )}
            {data?.data?.status === 400 && (
                <ErrorText text={data?.data?.title} />
            )}
            <form onSubmit={formik.handleSubmit} className="container">
                <div className="tw-grid tw-grid-cols-2 tw-gap-x-4">
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
                            placeholder=""
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
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2 tw-col-span-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            کدملی
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.nationalId}
                            errors={formik.errors.nationalId}
                            type="number"
                            name={"nationalId"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2 tw-col-span-2">
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
                            placeholder=""
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
                            type="number"
                            name={"mobile"}
                            formikInput={true}
                            placeholder=""
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
                            name={"tel"}
                            type="string"
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div>
                        <label>
                            <input checked={isSupplier} onChange={(e) => setIsSupplier(e.target.checked)} type="checkbox" className="tw-accent-slate-800 tw-w-[14px] tw-h-[14px]" />
                            <span className="tw-px-4">آیا تامین کننده می باشد؟</span>
                        </label>
                    </div>

                    <div className="tw-w-full tw-my-2 tw-col-span-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            آدرس
                        </label> */}
                        <CustomTextarea
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.address1}
                            errors={formik.errors.address1}
                            name={"address1"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2 tw-col-span-2">
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
                        className="tw-btn-warning tw-mb-2"
                        disabled={formik.isSubmitting || !formik.isValid}
                        onClick={() => formik.handleSubmit()}
                    >
                        {!isLoading && (
                            <span className="indicator-label">ویرایش مشتری</span>
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
            </form>
        </>
    );
};

export default EditCustomer;