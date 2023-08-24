import * as Yup from "yup";

const createProductValidations = Yup.object().shape({
    productName: Yup.string()
        .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
        .required("نام محصول الزامی است"),
    productSize: Yup.string()
        .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
        .required("سایز محصول الزامی است"),
    approximateWeight: Yup.string()
        .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
        .required("افزودن وزن تقریبی الزامی است"),
    numberInPackage: Yup.string()
        .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
        .required("افزودن تعداد بسته الزامی است"),
    size: Yup.string()
        .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
        .required("فیلد اندازه الزامی است"),
    standard: Yup.string()
        .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
        .required("فیلد استاندارد الزامی است"),
    productState: Yup.string()
        .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
        .required("فیلد حالت الزامی است"),
});

export {
    createProductValidations
}