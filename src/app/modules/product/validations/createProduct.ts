import * as Yup from "yup";

const createProductValidations = Yup.object().shape({
    productName: Yup.string()
        .required("نام کالا الزامی است"),
    productSize: Yup.number().typeError("مقدار باید عددی باشد")
        .required("سایز کالا الزامی است"),
    approximateWeight: Yup.number().typeError("مقدار باید عددی باشد")
        .required("افزودن وزن تقریبی الزامی است"),
});

export {
    createProductValidations
}