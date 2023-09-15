import { Form, Formik } from "formik";
import SuccessText from "../../../../_cloner/helpers/components/SuccessText";
import { useCreateSupplier, useRetrieveProducts } from "../core/_hooks";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { dropdownProduct } from "../helpers/dropdownConvert";
import { dropdownCustomer } from "../../order/helpers/dropdowns";
import { useGetCustomers } from "../../customer/core/_hooks";
import FormikSelect from "../../../../_cloner/helpers/components/FormikSelect";
import FormikInput from "../../../../_cloner/helpers/components/FormikInput";
import FormikDatepicker from "../../../../_cloner/helpers/components/FormikDatepicker";
import SubmitButton from "../../../../_cloner/helpers/components/SubmitButton";
import moment from "moment-jalaali";

const CreateSupplier = (props: {
    setIsCreateOpen: React.Dispatch<React.SetStateAction<boolean>>,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}) => {
    // fetching Data
    const { mutate, data, isLoading } = useCreateSupplier();
    const { data: customers } = useGetCustomers()
    const { data: products } = useRetrieveProducts()

    const initialValues = {
        price: "",
        rentAmount: "",
        overPrice: "",
        rate: "",
        customerId: "",
        productId: "",
        priceDate: ""
    };
    return (
        <>
            {data?.succeeded && (
                <SuccessText text={data?.message} />
            )}
            {data?.data?.status === 400 && (
                <ErrorText text={data?.data?.title} />
            )}
            <Formik initialValues={initialValues} onSubmit={
                async (values, { setStatus, setSubmitting }) => {
                    try {
                        const formData = {
                            price: Number(values.price),
                            rentAmount: Number(values.rentAmount),
                            overPrice: Number(values.overPrice),
                            rate: Number(values.rate),
                            customerId: values.customerId,
                            productId: values.productId,
                            priceDate: moment(values.priceDate).format("jYYYY/jMM/jDD")
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
                }
            }>
                {({ handleSubmit, setFieldValue }) => {
                    return <Form onSubmit={handleSubmit} className="container">
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-my-4">
                            <FormikSelect name={"customerId"} placeholder="مشتری" options={dropdownCustomer(customers?.data)} />
                            <FormikSelect name={"productId"} placeholder="کالا" options={dropdownProduct(products?.data)} />
                        </div>
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-my-4">
                            <FormikInput name="price" placeholder="قیمت" type="text" />
                            <FormikDatepicker name="priceDate" placeholder="تاریخ قیمت" setFieldValue={setFieldValue} />
                            <FormikInput name="overPrice" placeholder="قیمت تمام شده" type="text" />
                        </div>
                        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-2 tw-gap-8 tw-my-4">
                            <FormikInput name="rentAmount" placeholder="کرایه" type="text" />
                            <FormikInput name="rate" placeholder="امتیاز" type="text" />
                        </div>
                        <SubmitButton title="ثبت تامبن کننده" isLoading={isLoading} />
                    </Form>
                }}
            </Formik>
        </>
    );
};

export default CreateSupplier;