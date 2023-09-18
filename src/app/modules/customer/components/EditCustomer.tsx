import { Form, Formik, useFormik } from "formik";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import CustomTextarea from "../../../../_cloner/helpers/components/CustomTextarea";
import { useState } from "react";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import EditText from "../../../../_cloner/helpers/components/EditText";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { ICustomer } from "../core/_models";
import { useUpdateCustomer } from "../core/_hooks";
import CusromRadioGroupButton from "../../../../_cloner/helpers/components/CusromRadioGroupButton";
import { customerTypeData } from "../helpers/fakeData";
import { useGetCustomerValidities } from "../../../../_cloner/helpers/_hooks";
import FormikInput from "../../../../_cloner/helpers/components/FormikInput";
import FormikRadioGroup from "../../../../_cloner/helpers/components/ForminkRadioGroup";
import SubmitButton from "../../../../_cloner/helpers/components/SubmitButton";
import { convertValueLabelCustomerValidaty } from "../helpers/convertValueLabel";
import { customerType } from "../helpers/customerType";
import FormikSelect from "../../../../_cloner/helpers/components/FormikSelect";

const EditCustomer = (props: {
    item: ICustomer | undefined,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>

}) => {
    const { mutate, data, isLoading } = useUpdateCustomer();
    const { data: customerValidityData } = useGetCustomerValidities()

    const initialValues = {
        id: props.item?.id,
        firstName: props.item?.firstName,
        lastName: props.item?.lastName,
        fatherName: props.item?.fatherName,
        officialName: props.item?.officialName,
        nationalId: props.item?.nationalId,
        nationalId2: props.item?.nationalId2,
        mobile: props.item?.mobile,
        isSupplier: props.item?.isSupplier,
        tel1: props.item?.tel1,
        tel2: props.item?.tel2,
        customerType: props.item?.customerType,
        customerValidityId: props.item?.customerValidityId,
        representative: props.item?.representative,
        address1: props.item?.address1,
        address2: props.item?.address2,
    };
console.log({value: props.item?.customerType, label: props.item?.customerType == 0 ? "حقیقی": "حقوقی"})
    return (
        <>
            {data?.succeeded && (
                <EditText text={"ویرایش با موفقیت انجام شد"} />
            )}
            {data?.data?.status === 400 && (
                <ErrorText text={data?.data?.title} />
            )}

            <Formik initialValues={initialValues} onSubmit={
                async (values, { setStatus, setSubmitting }) => {
                    try {
                        mutate(values, {
                            onSuccess: () => {
                                props.refetch()
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
                            <FormikInput divClassName="tw-w-full tw-my-2" name="firstName" placeholder="نام" type="text" />
                            <FormikInput divClassName="tw-w-full tw-my-2" name="lastName" placeholder="نام خانوادگی" type="text" />
                            <FormikInput divClassName="tw-w-full tw-my-2" name="fatherName" placeholder="نام پدر" type="text" />
                            <FormikInput divClassName="tw-w-full tw-my-2" name="officialName" placeholder="اسم رسمی مشتری" type="text" />
                            <FormikInput divClassName="tw-w-full tw-my-2" name="nationalId2" placeholder="شناسه ملی" type="text" />
                            <FormikInput divClassName="tw-w-full tw-my-2" name="nationalId" placeholder="کدملی" type="text" />
                        </div>
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-x-4">
                            <FormikInput divClassName="tw-w-full tw-my-2" name="representative" placeholder="معرف" type="text" />
                            <FormikInput divClassName="tw-w-full tw-my-2" name="mobile" placeholder="موبایل" type="text" />
                            <FormikInput divClassName="tw-w-full tw-my-2" name="tel1" placeholder="تلفن 1" type="text" />
                            <FormikInput divClassName="tw-w-full tw-my-2" name="tel2" placeholder="تلفن 2" type="text" />
                        </div>
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-x-4">
                            <div className="tw-w-full tw-my-2 tw-text-right">
                                <label className="tw-flex">
                                    <FormikInput divClassName="tw-my-2" name="isSupplier" placeholder="" type="checkbox" />
                                    <span className="tw-px-4 tw-font-bold tw-text-lg">آیا تامین کننده می باشد؟</span>
                                </label>
                            </div>
                            <FormikSelect defaultValue={{value: props.item?.customerType, label: props.item?.customerType == 0 ? "حقیقی": "حقوقی"}} options={customerType} name="customerType" placeholder="نوع مشتری" />
                            <FormikSelect defaultValue={{value: props.item?.customerValidityId, label: props.item?.customerValidityId == 1 ? "عادی" : props.item?.customerValidityId == 2 ? "VIP" : "سیاه"}}  options={convertValueLabelCustomerValidaty(customerValidityData)} name="customerValidityId" placeholder="نوع اعتبار" />
                        </div>
                        <div className="tw-w-full tw-my-2 md:tw-col-span-3">
                            <FormikInput divClassName="tw-w-full tw-my-2" name="address1" placeholder="آدرس 1" type="text" />
                            <FormikInput divClassName="tw-w-full tw-my-2" name="address2" placeholder="آدرس 2" type="text" />
                        </div>
                        <SubmitButton isLoading={isLoading} title="ویرایش مشتری" isUpdate />
                    </Form>
                }}
            </Formik>
        </>
    );
};

export default EditCustomer;