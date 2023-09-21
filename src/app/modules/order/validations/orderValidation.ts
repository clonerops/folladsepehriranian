import * as Yup from "yup";

const orderValidation = Yup.object().shape({
    customerId: Yup.string().required("نام مشتری الزامی است"),
    settlementDate: Yup.string().required("تاریخ تسویه الزامی است"),
    exitType: Yup.string().required("نوع خروج الزامی است"),
    orderSendTypeId: Yup.string().required("نوع ارسال الزامی است"),
    paymentTypeId: Yup.string().required("نوع پرداخت الزامی است"),
    invoiceTypeId: Yup.string().required("نوع فاکتور الزامی است"),

});

export { orderValidation };
