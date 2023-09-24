import { Form, Formik } from "formik";
import { useUpdateProduct } from "../core/_hooks";
import { IProducts } from "../core/_models";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
} from "@tanstack/react-query";
import FormikInput from "../../../../_cloner/helpers/components/FormikInput";
import SubmitButton from "../../../../_cloner/helpers/components/SubmitButton";
import { ToastComponent } from "../../../../_cloner/helpers/components/Toast";

const EditProduct = (props: {
    item: IProducts | undefined;
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<any, unknown>>;
}) => {
    const { mutate, data, isLoading } = useUpdateProduct();

    const initialValues = {
        id: props.item?.id,
        productName: props.item?.productName,
        warehouseId: props.item?.warehouseId,
        productSize: props.item?.productSize,
        approximateWeight: props.item?.approximateWeight,
        numberInPackage: props.item?.numberInPackage,
        size: props.item?.size,
        standard: props.item?.standard,
        productState: props.item?.productState,
        productIntegratedName: props.item?.productIntegratedName,
        description: props.item?.description,
    };

    return (
        <>
            {data?.data?.status === 400 && (
                ToastComponent("خطا در ویرایش کالا")
            )}
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, { setStatus, setSubmitting }) => {
                    try {
                        mutate(values, {
                            onSuccess: (message) => {
                                ToastComponent("ویرایش با موفقیت انجام شد")
                                props.refetch();
                            },
                        });
                    } catch (error) {
                        setStatus("ویرایش ثبت کالا نادرست می باشد");
                        setSubmitting(false);
                    }
                }}
            >
                {({ handleSubmit }) => {
                    return (
                        <Form onSubmit={handleSubmit} className="container">
                            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
                                <FormikInput
                                    name="productName"
                                    placeholder="نام کالا"
                                    title="نام کالا"
                                    type="text"
                                />
                                <FormikInput
                                    name="productSize"
                                    placeholder="سایز"
                                    title="سایز"
                                    type="text"
                                />
                                <FormikInput
                                    name="approximateWeight"
                                    placeholder="وزن تقریبی"
                                    title="وزن تقریبی"
                                    type="text"
                                />
                                <FormikInput
                                    name="numberInPackage"
                                    placeholder="تعداد در بسته"
                                    title="تعداد در بسته"
                                    type="text"
                                />
                                <FormikInput
                                    name="size"
                                    placeholder="اندازه"
                                    title="اندازه"
                                    type="text"
                                />
                                <FormikInput
                                    name="standard"
                                    placeholder="استاندارد"
                                    title="استاندارد"
                                    type="text"
                                />
                                <FormikInput
                                    name="productState"
                                    placeholder="حالت"
                                    title="حالت"
                                    type="text"
                                />
                                <FormikInput
                                    name="description"
                                    placeholder="توضیحات"
                                    title="توضیحات"
                                    type="text"
                                />
                            </div>
                            <div className="tw-mt-4">
                                <SubmitButton
                                    isLoading={isLoading}
                                    title="ویرایش کالا"
                                    isUpdate
                                />
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default EditProduct;
