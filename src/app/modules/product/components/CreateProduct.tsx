import { Form, Formik } from "formik";
import { createProductValidations } from "../validations/createProduct";
import SuccessText from "../../../../_cloner/helpers/components/SuccessText";
import { useCreateProduct } from "../core/_hooks";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
} from "@tanstack/react-query";
import FormikInput from "../../../../_cloner/helpers/components/FormikInput";
import SubmitButton from "../../../../_cloner/helpers/components/SubmitButton";
import { ToastComponent } from "../../../../_cloner/helpers/components/Toast";

const CreateProduct = (props: {
    setIsCreateOpen: React.Dispatch<React.SetStateAction<boolean>>;
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<any, unknown>>;
}) => {
    // Fetchig
    const { mutate, data, isLoading } = useCreateProduct();
    // States
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

    return (
        <>
            {data?.succeeded && <SuccessText text={data?.message} />}
            {data?.data?.status === 400 && (
                <ErrorText text={data?.data?.title} />
            )}
            <Formik
                initialValues={initialValues}
                validationSchema={createProductValidations}
                onSubmit={async (values, { setStatus, setSubmitting }) => {
                    try {
                        mutate(values, {
                            onSuccess: (message) => {
                                ToastComponent(message?.message)
                                props.refetch();
                                props.setIsCreateOpen(false);
                            },
                        });
                    } catch (error) {
                        setStatus("اطلاعات ثبت کالا نادرست می باشد");
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
                                {/* <FormikSelect name="productBrandId" placeholder="برند" options={dropdownBrand(brands)} /> */}
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
                            <div className="tw-mt-8">
                                <SubmitButton
                                    isLoading={isLoading}
                                    title="ثبت کالا جدبد"
                                />
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default CreateProduct;
