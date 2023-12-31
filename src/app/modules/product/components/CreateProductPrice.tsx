import { Form, Formik } from "formik"
import FormikSelect from "../../../../_cloner/helpers/components/FormikSelect"
import FormikInput from "../../../../_cloner/helpers/components/FormikInput"
import SubmitButton from "../../../../_cloner/helpers/components/SubmitButton"
import { useCreateProductPrice, useRetrieveBrands, useRetrieveProducts } from "../core/_hooks"
import { dropdownBrand, dropdownProduct } from "../helpers/dropdownConvert"
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query"
import { ToastComponent } from "../../../../_cloner/helpers/components/Toast"

const initialValues = {
    price: "",
    productId: "",
    productBrandId: 0
}

type Props = {
    refetch: (options?: (RefetchOptions & RefetchQueryFilters<unknown>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}

const CreateProductPrice = (props: Props) => {
    const { data: products } = useRetrieveProducts();
    const { data: brands } = useRetrieveBrands();
    const { mutate, isLoading } = useCreateProductPrice()

  return (
    <Formik initialValues={initialValues} onSubmit={
        async (values, { setStatus, setSubmitting }) => {
            try {
                const formData = {
                    price: Number(values.price),
                    productId: values.productId,
                    productBrandId: values.productBrandId
                }
                mutate(formData, {
                    onSuccess: (message) => {
                        ToastComponent(message?.message)
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
                    <FormikSelect title="کالا" name="productId" label="productId" options={dropdownProduct(products?.data)} placeholder="کالا" />
                    <FormikSelect title="برند" name="productBrandId" label="productBrandId" options={dropdownBrand(brands)} placeholder="برند" />
                    <FormikInput title="قیمت" name="price" type="text" placeholder="قیمت" />
                </div>
                <div className="tw-flex tw-justify-end tw-mt-4">
                    <SubmitButton title="ثبت قیمت کالا" isLoading={isLoading} />
                </div>
            </Form>
        }}
    </Formik>
  )
}

export default CreateProductPrice