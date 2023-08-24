import { useFormik } from "formik";
import CustomInput from "../../../../_cloner/helpers/components/CustomInput";
import CustomTextarea from "../../../../_cloner/helpers/components/CustomTextarea";
import ProfessionalSelect from "../../../../_cloner/helpers/components/ProfessionalSelect";
import { useState } from "react";

const CreateProduct = () => {
    // States
    const [brandSelected, setBrandSelected] = useState();

    const brands = [
        { value: 1, label: "سپهر" },
        { value: 2, label: "فولاد مبارکه" },
        { value: 3, label: "ذوب آهن" },
    ];

    const handleBrandChange = (selectedOption: any) => {
        setBrandSelected(selectedOption);
    };

    const initialValues = {
        productName: "",
        productBrandId: 0,
        productSize: "",
        approximateWeight: 0,
        numberInPackage: 0,
        size: "",
        standard: "",
        productState: "",
        description: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            console.log(values);
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="container">
                <div className="tw-grid md:tw-grid-cols-2 tw-gap-x-4 tw-my-8 tw-mx-auto">
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right">
                            نام محصول
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.productName}
                            errors={formik.errors.productName}
                            name={"productName"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right">برند</label>
                        <ProfessionalSelect
                            options={brands}
                            value={brandSelected}
                            onChange={handleBrandChange}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right">
                            سایز محصول
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.productSize}
                            errors={formik.errors.productSize}
                            name={"productSize"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right">
                            وزن تقریبی
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.approximateWeight}
                            errors={formik.errors.approximateWeight}
                            name={"approximateWeight"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right">
                            تعداد بسته
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.numberInPackage}
                            errors={formik.errors.numberInPackage}
                            name={"numberInPackage"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right">
                            اندازه
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.size}
                            errors={formik.errors.size}
                            name={"size"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right">
                            استاندارد
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.standard}
                            errors={formik.errors.standard}
                            name={"standard"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2">
                        <label className="tw-w-full tw-text-right">
                            حالت محصول
                        </label>
                        <CustomInput
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.productState}
                            errors={formik.errors.productState}
                            name={"productState"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                    <div className="tw-w-full tw-my-2 tw-col-span-2">
                        <label className="tw-w-full tw-text-right">
                            توضیحات
                        </label>
                        <CustomTextarea
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.description}
                            errors={formik.errors.description}
                            name={"description"}
                            formikInput={true}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="tw-btn-success tw-mb-2">
                        <span>ایجاد محصول</span>
                    </button>
                </div>
            </form>
        </>
    );
};

export default CreateProduct;
