import { useFormik } from "formik";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import CustomTextarea from "../../../../_cloner/helpers/components/CustomTextarea";
import ProfessionalSelect from "../../../../_cloner/helpers/components/ProfessionalSelect";
import { useState } from "react";
import { createProductValidations } from "../validations/createProduct";
import SuccessText from "../../../../_cloner/helpers/components/SuccessText";
import { useCreateProduct, useUpdateProduct } from "../core/_hooks";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import { IProducts } from "../core/_models";
import EditText from "../../../../_cloner/helpers/components/EditText";

const EditProduct = (props: {item: IProducts | undefined}) => {
    // States
    const [brandSelected, setBrandSelected] = useState();

    const brands = [
        { value: 1, label: "سپهر" },
        { value: 2, label: "فولاد مبارکه" },
        { value: 3, label: "ذوب آهن" },
    ];

    const handleBrandChange = (selectedOption: any) => {
        setBrandSelected(selectedOption);
    };

    const { mutate, data, isError, isLoading } = useUpdateProduct();

    const initialValues = {
        id: props.item?.id,
        productName: props.item?.productName,
        warehouseId: props.item?.warehouseId,
        productBrandId: props.item?.productBrandId,
        productSize: props.item?.productSize,
        approximateWeight: props.item?.approximateWeight,
        numberInPackage: props.item?.numberInPackage,
        size: props.item?.size,
        standard: props.item?.standard,
        productState: props.item?.productState,
        description: props.item?.description,
    };

    const formik = useFormik({
        initialValues,
        // validationSchema: createProductValidations,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                mutate(values);
            } catch (error) {
                setStatus("اطلاعات ویرایش محصول نادرست می باشد");
                setSubmitting(false);
            }
        },
    });

    return (
        <>
            {data?.succeeded && (
                <EditText text={data?.message} />
            )}
            {data?.data?.status === 400 && (
                <ErrorText text={data?.data?.title} />
            )}
            <form onSubmit={formik.handleSubmit} className="container">
                <div className="tw-grid md:tw-grid-cols-3 tw-gap-x-4 tw-my-8 tw-mx-auto">
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            نام محصول
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.productName}
                            errors={formik.errors.productName}
                            name={"productName"}
                            type="string"
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">برند</label>
                        <ProfessionalSelect
                            options={brands}
                            value={brandSelected}
                            onChange={handleBrandChange}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            سایز محصول
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.productSize}
                            errors={formik.errors.productSize}
                            type="string"
                            name={"productSize"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            وزن تقریبی
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.approximateWeight}
                            errors={formik.errors.approximateWeight}
                            type="number"
                            name={"approximateWeight"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            تعداد بسته
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.numberInPackage}
                            errors={formik.errors.numberInPackage}
                            type="number"
                            name={"numberInPackage"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            اندازه
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.size}
                            errors={formik.errors.size}
                            name={"size"}
                            type="string"
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            استاندارد
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.standard}
                            errors={formik.errors.standard}
                            name={"standard"}
                            type="string"
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            حالت محصول
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.productState}
                            errors={formik.errors.productState}
                            name={"productState"}
                            type="string"
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2 tw-col-span-3">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            توضیحات
                        </label>
                        <CustomTextarea
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.description}
                            errors={formik.errors.description}
                            name={"description"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="">
                    <button
                        type="submit"
                        id="kt_sign_in_submit"
                        className="tw-btn-warning tw-mb-2"
                        disabled={formik.isSubmitting || !formik.isValid}
                        onClick={() => formik.handleSubmit()}
                    >
                        {!isLoading && (
                            <span className="indicator-label">ویرایش محصول</span>
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

export default EditProduct;