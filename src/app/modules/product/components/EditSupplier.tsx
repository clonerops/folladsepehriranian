import { useFormik } from "formik";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import CustomTextarea from "../../../../_cloner/helpers/components/CustomTextarea";
import ProfessionalSelect from "../../../../_cloner/helpers/components/ProfessionalSelect";
import { useState } from "react";
import SuccessText from "../../../../_cloner/helpers/components/SuccessText";
import { useCreateProduct, useRetrieveBrands, useRetrieveProducts, useUpdateProduct, useUpdateSupplier } from "../core/_hooks";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import { IProducts, ISuppliers } from "../core/_models";
import EditText from "../../../../_cloner/helpers/components/EditText";
import { dropdownBrand, dropdownProduct } from "../helpers/dropdownConvert";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { useGetCustomers } from "../../customer/core/_hooks";
import { dropdownCustomer } from "../../order/helpers/dropdowns";
import CustomDatepicker from "../../../../_cloner/helpers/components/CustomDatepicker";

const EditSupplier = (props: {
    item: ISuppliers | undefined,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>

}) => {
    // Fetching Data
    const { mutate, data, isError, isLoading } = useUpdateSupplier();
    const { data: customers } = useGetCustomers()
    const { data: products } = useRetrieveProducts()
    // States
    const [customerSelected, setCustomerSelected] = useState<any>()
    const [productSelected, setProductSelected] = useState<any>()
    const [priceDate, setPriceDate] = useState(props.item?.priceDate)

    const handleCustomerSelected = (selectedOption: any) => setCustomerSelected(selectedOption)
    const handleProductSelected = (selectedOption: any) => setProductSelected(selectedOption)


    const initialValues = {
        id: props.item?.id,
        customerId: props.item?.customerId,
        productId: props.item?.productId,
        price: props.item?.price,
        rentAmount: props.item?.rentAmount,
        overPrice: props.item?.overPrice,
        priceDate: priceDate,
        rate: props.item?.rate
    };

    const formik = useFormik({
        initialValues,
        // validationSchema: createProductValidations,
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
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-x-4 tw-my-8 tw-mx-auto">
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            مشتری
                        </label>
                        <ProfessionalSelect
                            options={dropdownCustomer(customers?.data)}
                            value={customerSelected}
                            onChange={handleCustomerSelected}
                            placeholder=""
                        />

                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">محصول</label>
                        <ProfessionalSelect
                            options={dropdownProduct(products?.data)}
                            value={productSelected}
                            onChange={handleProductSelected}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            قیمت
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.price}
                            errors={formik.errors.price}
                            type="number"
                            name={"price"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            مبلغ اجاره
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.rentAmount}
                            errors={formik.errors.rentAmount}
                            type="number"
                            name={"rentAmount"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            بیش از قیمت
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.overPrice}
                            errors={formik.errors.overPrice}
                            type="number"
                            name={"overPrice"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            تاریخ قیمت
                        </label>
                        <CustomDatepicker
                            onChange={(d: any) => setPriceDate(d.value)}
                            placeholder="" />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right tw-text-gray-500">
                            نرخ
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.rate}
                            errors={formik.errors.rate}
                            name={"rate"}
                            type="string"
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
                    >
                        {!isLoading && (
                            <span className="indicator-label">ویرایش</span>
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

export default EditSupplier;