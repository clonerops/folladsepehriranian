import { Form, Formik } from "formik"
import FormikSelect from "../../../../_cloner/helpers/components/FormikSelect"
import FormikInput from "../../../../_cloner/helpers/components/FormikInput"
import SubmitButton from "../../../../_cloner/helpers/components/SubmitButton"
import { useRetrieveBrands, useRetrieveProducts, useUpdateProductPrice } from "../core/_hooks"
import { dropdownBrand, dropdownProduct } from "../helpers/dropdownConvert"
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query"
import { IProductPrice } from "../core/_models"
import { ToastComponent } from "../../../../_cloner/helpers/components/Toast"

type Props = {
    refetch: (options?: (RefetchOptions & RefetchQueryFilters<unknown>) | undefined) => Promise<QueryObserverResult<any, unknown>>
    item: IProductPrice | undefined
}

const EditProductPrice = (props: Props) => {
    const { data: products } = useRetrieveProducts();
    const { data: brands } = useRetrieveBrands();
    const { mutate, data, isLoading } = useUpdateProductPrice()

    const initialValues = {
        price: props.item?.price,
        productId: props.item?.productId,
        productBrandId: props.item?.productBrandId
    }

    return (
        <>
            {data?.data?.status === 400 && (
                ToastComponent("خطا در ویرایش کالا")
            )}

            <Formik initialValues={initialValues} onSubmit={
                async (values, { setStatus, setSubmitting }) => {
                    try {
                        const formData = {
                            id: props.item?.id,
                            price: Number(values.price),
                            productId: values.productId,
                            productBrandId: values.productBrandId
                        }
                        mutate(formData, {
                            onSuccess: () => {
                                ToastComponent("ویرایش با موفقیت انجام شد")
                                props.refetch()
                            }
                        })
                    } catch (error) {
                        setStatus("اطلاعات ثبت نادرست می باشد");
                        setSubmitting(false);
                    }
                }
            }>
                {({ handleSubmit }) => {
                    return <Form onSubmit={handleSubmit}>
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-4">
                            <FormikSelect defaultValue={{ value: props.item?.product?.id, label: props.item?.product?.productName }} name="productId" label="productId" options={dropdownProduct(products?.data)} placeholder="کالا" />
                            <FormikSelect defaultValue={{ value: props.item?.productBrandId, label: props.item?.brandName }} name="productBrandId" label="productBrandId" options={dropdownBrand(brands)} placeholder="برند" />
                            <FormikInput name="price" type="text" placeholder="قیمت" />
                        </div>
                        <div className="tw-flex tw-justify-end tw-mt-4">
                            <SubmitButton title="ویرایش" isLoading={isLoading} isUpdate />
                        </div>
                    </Form>
                }}
            </Formik>
        </>
    )
}

export default EditProductPrice