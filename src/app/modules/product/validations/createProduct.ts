import * as Yup from "yup";

const createProductValidations = Yup.object().shape({
    productName: Yup.string()
        .required("نام کالا الزامی است"),
    productSize: Yup.number().typeError("مقدار باید عددی باشد")
        .required("سایز کالا الزامی است"),
    approximateWeight: Yup.number().typeError("مقدار باید عددی باشد")
        .required("افزودن وزن تقریبی الزامی است"),
    numberInPackage: Yup.number().typeError("مقدار باید عددی باشد")
        .required("افزودن تعداد بسته الزامی است"),
    size: Yup.string()
        .required("فیلد اندازه الزامی است"),
    standard: Yup.string()
        .required("فیلد استاندارد الزامی است"),
    productState: Yup.string()
        .required("فیلد حالت الزامی است"),
});

export {
    createProductValidations
}