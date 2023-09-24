import { Form, Formik } from "formik";
import { useRetrieveProducts, useUpdateSupplier } from "../core/_hooks";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import { ISuppliers } from "../core/_models";
import EditText from "../../../../_cloner/helpers/components/EditText";
import { dropdownProduct } from "../helpers/dropdownConvert";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { useGetCustomers } from "../../customer/core/_hooks";
import { dropdownCustomer } from "../../order/helpers/dropdowns";
import FormikSelect from "../../../../_cloner/helpers/components/FormikSelect";
import FormikInput from "../../../../_cloner/helpers/components/FormikInput";
import FormikDatepicker from "../../../../_cloner/helpers/components/FormikDatepicker";
import SubmitButton from "../../../../_cloner/helpers/components/SubmitButton";
import { ToastComponent } from "../../../../_cloner/helpers/components/Toast";

const EditSupplier = (props: {
    item: ISuppliers | undefined,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}) => {
    // Fetching Data
    const { mutate, data, isLoading } = useUpdateSupplier();
    const { data: customers } = useGetCustomers()
    const { data: products } = useRetrieveProducts()
    // States
    const initialValues = {
        id: props.item?.id,
        customerId: props.item?.customerId,
        productId: props.item?.productId,
        price: props.item?.price,
        rentAmount: props.item?.rentAmount,
        overPrice: props.item?.overPrice,
        priceDate: props.item?.priceDate,
        rate: props.item?.rate
    };
    return (
        <>
            {data?.data?.status === 400 && (
                <ErrorText text={data?.data?.title} />
            )}
            <Formik initialValues={initialValues} onSubmit={
                async (values, { setStatus, setSubmitting }) => {
                    try {
                        mutate(values, {
                            onSuccess: () => {
                                ToastComponent("ویرایش با موفقیت انجام شد")
                                props.refetch()
                            }
                        });
                    } catch (error) {
                        setStatus("اطلاعات ویرایش کالا نادرست می باشد");
                        setSubmitting(false);
                    }
                }
            }>
                {({ handleSubmit, setFieldValue }) => {
                    return <Form onSubmit={handleSubmit} className="container">
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-my-4">
                            <FormikSelect title="مشتری" defaultValue={{ value: props.item?.customerId, label: `${props.item?.customerFirstName + " " + props.item?.customerLastName}` }} name={"customerId"} placeholder="مشتری" options={dropdownCustomer(customers?.data)} />
                            <FormikSelect title="کالا" defaultValue={{value: props.item?.productId, label: props.item?.productName}} name={"productId"} placeholder="کالا" options={dropdownProduct(products?.data)} />
                        </div>
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-my-4">
                            <FormikInput title="قیمت" name="price" placeholder="قیمت" type="text" />
                            <FormikDatepicker title="تاریخ قیمت" name="priceDate" placeholder="تاریخ قیمت" setFieldValue={setFieldValue} />
                            <FormikInput title="قیمت تمام شده" name="overPrice" placeholder="قیمت تمام شده" type="text" />
                        </div>
                        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-2 tw-gap-8 tw-my-4">
                            <FormikInput title="کرایه" name="rentAmount" placeholder="کرایه" type="text" />
                            <FormikInput title="امتیاز" name="rate" placeholder="امتیاز" type="text" />
                        </div>
                        <SubmitButton title="ویرایش تامین کننده" isLoading={isLoading} isUpdate />
                    </Form>
                }}
            </Formik>
        </>
    );
};

export default EditSupplier;