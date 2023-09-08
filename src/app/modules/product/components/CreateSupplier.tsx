import { useFormik } from "formik";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import ProfessionalSelect from "../../../../_cloner/helpers/components/ProfessionalSelect";
import { useState } from "react";
import SuccessText from "../../../../_cloner/helpers/components/SuccessText";
import { useCreateSupplier, useRetrieveProducts } from "../core/_hooks";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { dropdownProduct } from "../helpers/dropdownConvert";
import { dropdownCustomer } from "../../order/helpers/dropdowns";
import { useGetCustomers } from "../../customer/core/_hooks";
import CustomDatepicker from "../../../../_cloner/helpers/components/CustomDatepicker";

const CreateSupplier = (props: {
    setIsCreateOpen: React.Dispatch<React.SetStateAction<boolean>>,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}) => {
    // fetching Data
    const { mutate, data, isLoading } = useCreateSupplier();
    const { data: customers } = useGetCustomers()
    const { data: products } = useRetrieveProducts()

    // States and handleState
    const [customerSelected, setCustomerSelected] = useState<any>()
    const [productSelected, setProductSelected] = useState<any>()
    const [priceDate, setPriceDate] = useState()

    const handleCustomerSelected = (selectedOption: any) => setCustomerSelected(selectedOption)
    const handleProductSelected = (selectedOption: any) => setProductSelected(selectedOption)


    const initialValues = {
        price: "",
        rentAmount: "",
        overPrice: "",
        rate: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                const formData = {
                    ...values,
                    price: Number(values.price),
                    rentAmount: Number(values.rentAmount),
                    overPrice: Number(values.overPrice),
                    rate: Number(values.rate),
                    customerId: customerSelected.value,
                    productId: productSelected.value,
                    priceDate: priceDate
                }
                mutate(formData, {
                    onSuccess: () => {
                        props.refetch()
                        props.setIsCreateOpen(false)
                    }
                });
            } catch (error) {
                setStatus("اطلاعات ثبت تامین کنندگان نادرست می باشد");
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
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-x-4">
                    <div className="tw-w-full tw-my-2">
                        <ProfessionalSelect
                            options={dropdownCustomer(customers?.data)}
                            value={customerSelected}
                            onChange={handleCustomerSelected}
                            placeholder="مشتری"
                        />

                    </div>
                    <div className="tw-w-full tw-my-2">
                        <ProfessionalSelect
                            options={dropdownProduct(products?.data)}
                            value={productSelected}
                            onChange={handleProductSelected}
                            placeholder="کالا"
                        />
                    </div>
                </div>
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-x-4">
                    <div className="tw-w-full tw-my-2">
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.price}
                            errors={formik.errors.price}
                            type="text"
                            name={"price"}
                            formikInput={true}
                            placeholder="قیمت"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <CustomDatepicker
                            onChange={(d: any) => setPriceDate(d.value)}
                            placeholder="تاریخ قیمت" />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.overPrice}
                            errors={formik.errors.overPrice}
                            type="text"
                            name={"overPrice"}
                            formikInput={true}
                            placeholder="قیمت تمام شده"
                        />
                    </div>
                </div>
                <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-2 tw-gap-x-4">
                    <div className="tw-w-full tw-my-2">
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.rentAmount}
                            errors={formik.errors.rentAmount}
                            type="text"
                            name={"rentAmount"}
                            formikInput={true}
                            placeholder="کرایه"
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.rate}
                            errors={formik.errors.rate}
                            name={"rate"}
                            type="text"
                            formikInput={true}
                            placeholder="امتیاز"
                        />
                    </div>
                </div>
                <div className="w-w-full tw-my-6">
                    <button
                        type="submit"
                        id="kt_sign_in_submit"
                        className="tw-btn-success tw-mb-2 tw-py-4"
                        disabled={formik.isSubmitting || !formik.isValid}
                    >
                        {!isLoading && (
                            <span className="indicator-label">ثبت تامبن کننده</span>
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

export default CreateSupplier;