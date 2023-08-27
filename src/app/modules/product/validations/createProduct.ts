import * as Yup from "yup";

const createProductValidations = Yup.object().shape({
    productName: Yup.string()
        .required("نام محصول الزامی است"),
    productSize: Yup.string()
        .required("سایز محصول الزامی است"),
    approximateWeight: Yup.string()
        .required("افزودن وزن تقریبی الزامی است"),
    numberInPackage: Yup.string()
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