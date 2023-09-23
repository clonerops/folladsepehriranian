import * as Yup from "yup";

const createSupplierValidations = Yup.object().shape({
    price: Yup.number()
        .typeError("قیمت باید مقدار عددی باشد")
        .required("نام کالا الزامی است"),
});

export {
    createSupplierValidations
}