import { Form, Formik } from "formik";
import { useRetrieveBrands, useUpdateProduct } from "../core/_hooks";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import { IProducts } from "../core/_models";
import EditText from "../../../../_cloner/helpers/components/EditText";
import { dropdownBrand } from "../helpers/dropdownConvert";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import FormikInput from "../../../../_cloner/helpers/components/FormikInput";
import FormikSelect from "../../../../_cloner/helpers/components/FormikSelect";
import SubmitButton from "../../../../_cloner/helpers/components/SubmitButton";

const EditProduct = (props: {
    item: IProducts | undefined,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>

}) => {
    const { data: brands } = useRetrieveBrands();
    const { mutate, data, isLoading } = useUpdateProduct();

    console.log(props.item)

    const initialValues = {
        id: props.item?.id,
        productName: props.item?.productName,
        warehouseId: props.item?.warehouseId,
        productBrandId: props.item?.productBrandId,
        productSize: props.item?.productSize,
        approximateWeight: props.item?.approximateWeight,
        numberInPackage: props.item?.numberInPackage,
        size: props.item?.productDetail?.size,
        standard: props.item?.productDetail?.standard,
        productState: props.item?.productDetail?.productState,
        productIntegratedName: props.item?.productDetail?.productIntegratedName,
        description: props.item?.description,
    };

    return (
        <>
            {data?.succeeded && (
                <EditText text={"ویرایش با موفقیت انجام شد"} />
            )}
            {data?.data?.status === 400 && (
                <ErrorText text={data?.data?.title} />
            )}
              <Formik initialValues={initialValues} onSubmit={
                async(values, { setStatus, setSubmitting }) => {
                    try {
                        mutate(values, {
                            onSuccess: () => {
                                props.refetch()
                            }
                        });
                    } catch (error) {
                        setStatus("ویرایش ثبت محصول نادرست می باشد");
                        setSubmitting(false);
                    }
                }
            }>
                {({ handleSubmit }) => {
                    return <Form onSubmit={handleSubmit} className="container">
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
                            <FormikInput name="productName" placeholder="نام کالا" type="text" />
                            <FormikSelect name="productBrandId" placeholder="برند" options={dropdownBrand(brands)} />
                        </div>
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mt-8">
                            <FormikInput name="productSize" placeholder="سایز" type="text" />
                            <FormikInput name="approximateWeight" placeholder="وزن تقریبی" type="number" />
                            <FormikInput name="numberInPackage" placeholder="تعداد در بسته" type="number" />
                            <FormikInput name="size" placeholder="اندازه" type="text" />
                            <FormikInput name="standard" placeholder="استاندارد" type="text" />
                            <FormikInput name="productState" placeholder="حالت" type="text" />
                            <div className="tw-w-full tw-my-2 md:tw-col-span-3">
                                <FormikInput name="description" placeholder="توضیحات" type="text" />
                            </div>
                        </div>
                        <SubmitButton isLoading={isLoading} title="ویرایش کالا" isUpdate />
                    </Form>
                }}
            </Formik>
        </>
    );
};

export default EditProduct;