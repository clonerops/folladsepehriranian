import * as Yup from "yup";

export const confirmValidation = Yup.object({
    driverName: Yup.string().required("فیلد اجباری می باشد"),
    // approvedUserName: Yup.string().required("فیلد اجباری می باشد"),
    // carPlaque: Yup.string().required("فیلد اجباری می باشد"),
    // driverMobile: Yup.string().required("فیلد اجباری می باشد"),
    // approvedDate: Yup.string().required("فیلد اجباری می باشد"),
    // rentAmount: Yup.string().required("فیلد اجباری می باشد"),
});
