import * as Yup from "yup";

const createProductValidations = Yup.object().shape({
    productName: Yup.string()
        .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
        .required("نام محصول الزامی است"),
});

export {
    createProductValidations
}