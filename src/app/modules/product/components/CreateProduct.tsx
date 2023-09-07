import { useFormik } from "formik";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import CustomTextarea from "../../../../_cloner/helpers/components/CustomTextarea";
import ProfessionalSelect from "../../../../_cloner/helpers/components/ProfessionalSelect";
import { useState } from "react";
import { createProductValidations } from "../validations/createProduct";
import SuccessText from "../../../../_cloner/helpers/components/SuccessText";
import { useCreateProduct, useRetrieveBrands } from "../core/_hooks";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { dropdownBrand } from "../helpers/dropdownConvert";

const CreateProduct = (props: {
    setIsCreateOpen: React.Dispatch<React.SetStateAction<boolean>>,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}) => {
    // Fetchig 
    const { mutate, data, isLoading } = useCreateProduct();
    const { data: brands } = useRetrieveBrands();

    // States
    const [brandSelected, setBrandSelected] = useState<{ value: number, label: string } | null>(null);

    const handleBrandChange = (selectedOption: any) => {
        setBrandSelected(selectedOption);
    };


    const initialValues = {
        productName: "",
        warehouseId: 1,
        productSize: "",
        approximateWeight: "",
        numberInPackage: "",
        size: "",
        standard: "",
        productState: "",
        description: "",
    };

    const formik = useFormik({
        initialValues,
        validationSchema: createProductValidations,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                const formData = {
                    ...values,
                    productBrandId: brandSelected?.value
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
                <div className="tw-grid tw-grid-cols-2 tw-gap-x-4">
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            نام محصول
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.productName}
                            errors={formik.errors.productName}
                            name={"productName"}
                            type="string"
                            formikInput={true}
                            placeholder="نام کالا"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">برند</label> */}
                        <ProfessionalSelect
                            options={dropdownBrand(brands)}
                            value={brandSelected}
                            onChange={handleBrandChange}
                            placeholder="برند"
                        />
                    </div>
                </div>
                <div className="tw-grid tw-grid-cols-3 tw-gap-x-4">
                    <div className="tw-w-full tw-my-2">
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.productSize}
                            errors={formik.errors.productSize}
                            type="string"
                            name={"productSize"}
                            formikInput={true}
                            placeholder="سایز"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.approximateWeight}
                            errors={formik.errors.approximateWeight}
                            type="number"
                            name={"approximateWeight"}
                            formikInput={true}
                            placeholder="وزن تقریبی"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.numberInPackage}
                            errors={formik.errors.numberInPackage}
                            type="number"
                            name={"numberInPackage"}
                            formikInput={true}
                            placeholder="تعداد در بسته"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            اندازه
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.size}
                            errors={formik.errors.size}
                            name={"size"}
                            type="string"
                            formikInput={true}
                            placeholder="اندازه"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            استاندارد
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.standard}
                            errors={formik.errors.standard}
                            name={"standard"}
                            type="string"
                            formikInput={true}
                            placeholder="استاندارد"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            حالت محصول
                        </label> */}
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.productState}
                            errors={formik.errors.productState}
                            name={"productState"}
                            type="string"
                            formikInput={true}
                            placeholder="حالت"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2 tw-col-span-3">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            توضیحات
                        </label> */}
                        <CustomTextarea
                            // value={formik.values.productName + " " + brandSelected?.label}
                            value={
                                formik.values.productName + " " +
                                formik.values.productSize + " " +
                                formik.values.standard + " " +
                                formik.values.productState
                            }
                            placeholder="شرح کامل کالا"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2 tw-col-span-3">
                        {/* <label className="tw-w-full tw-text-right tw-text-gray-500">
                            توضیحات
                        </label> */}
                        <CustomTextarea
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.description}
                            errors={formik.errors.description}
                            name={"description"}
                            formikInput={true}
                            placeholder="توضیحات"
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
                            <span className="indicator-label">ثبت محصول</span>
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

export default CreateProduct;