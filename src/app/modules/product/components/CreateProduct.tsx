import { Form, Formik, useFormik } from "formik";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import CustomTextarea from "../../../../_cloner/helpers/components/CustomTextarea";
import ProfessionalSelect from "../../../../_cloner/helpers/components/ProfessionalSelect";
import { useState } from "react";
import { createProductValidations } from "../validations/createProduct";
import SuccessText from "../../../../_cloner/helpers/components/SuccessText";
import { useCreateProduct, useRetrieveBrands } from "../core/_hooks";
import ErrorText from "../../../../_cloner/helpers/components/ErrorText";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "@tanstack/react-query";
import { dropdownBrand } from "../helpers/dropdownConvert";
import FormikInput from "../../../../_cloner/helpers/components/FormikInput";
import FormikSelect from "../../../../_cloner/helpers/components/FormikSelect";
import SubmitButton from "../../../../_cloner/helpers/components/SubmitButton";

const CreateProduct = (props: {
    setIsCreateOpen: React.Dispatch<React.SetStateAction<boolean>>,
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}) => {
    // Fetchig 
    const { mutate, data, isLoading } = useCreateProduct();
    const { data: brands } = useRetrieveBrands();

    // States
    // const [brandSelected, setBrandSelected] = useState<{ value: number, label: string } | null>(null);

    // const handleBrandChange = (selectedOption: any) => {
    //     setBrandSelected(selectedOption);
    // };

    const initialValues = {
        productName: "",
        warehouseId: 1,
        // productBrandId: 1,
        productSize: "",
        approximateWeight: "",
        numberInPackage: "",
        size: "",
        standard: "",
        productState: "",
        description: "",
    };

    // const formik = useFormik({
    //     initialValues,
    //     validationSchema: createProductValidations,
    //     onSubmit: async (values, { setStatus, setSubmitting }) => {
    //         try {
    //             const formData = {
    //                 ...values,
    //                 // productBrandId: brandSelected?.value
    //             }
    //             mutate(formData, {
    //                 onSuccess: () => {
    //                     props.refetch()
    //                     props.setIsCreateOpen(false)
    //                 }
    //             });
    //         } catch (error) {
    //             setStatus("اطلاعات ثبت محصول نادرست می باشد");
    //             setSubmitting(false);
    //         }
    //     },
    // });

    return (
        <>
            {data?.succeeded && (
                <SuccessText text={data?.message} />
            )}
            {data?.data?.status === 400 && (
                <ErrorText text={data?.data?.title} />
            )}
            <Formik initialValues={initialValues} validationSchema={createProductValidations} onSubmit={
                async (values, { setStatus, setSubmitting }) => {
                    try {
                        mutate(values, {
                            onSuccess: () => {
                                props.refetch()
                                props.setIsCreateOpen(false)
                            }
                        });
                    } catch (error) {
                        setStatus("اطلاعات ثبت محصول نادرست می باشد");
                        setSubmitting(false);
                    }
                }
            }>
                {({ handleSubmit }) => {
                    return <Form onSubmit={handleSubmit} className="container">
                        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
                            <FormikInput name="productName" placeholder="نام کالا" type="text" />
                            {/* <FormikSelect name="productBrandId" placeholder="برند" options={dropdownBrand(brands)} /> */}
                            <FormikInput name="productSize" placeholder="سایز" type="text" />
                            <FormikInput name="approximateWeight" placeholder="وزن تقریبی" type="number" />
                            <FormikInput name="numberInPackage" placeholder="تعداد در بسته" type="number" />
                            <FormikInput name="size" placeholder="اندازه" type="text" />
                            <FormikInput name="standard" placeholder="استاندارد" type="text" />
                            <FormikInput name="productState" placeholder="حالت" type="text" />
                            <FormikInput name="description" placeholder="توضیحات" type="text" />
                        </div>
                        <div className="tw-mt-8">
                            <SubmitButton isLoading={isLoading} title="ثبت کالا جدبد" />
                        </div>
                    </Form>
                }}
            </Formik>
        </>
    );
};

export default CreateProduct;