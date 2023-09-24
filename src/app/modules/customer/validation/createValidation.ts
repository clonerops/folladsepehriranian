import * as Yup from "yup";

export const createValiadtion = Yup.object({
    firstName: Yup.string().required("فیلد اجباری می باشد"),
    lastName: Yup.string().required("فیلد اجباری می باشد"),
    nationalId: Yup.string().required("فیلد اجباری می باشد"),
    mobile: Yup.string().required("فیلد اجباری می باشد"),
    tel1: Yup.string().required("فیلد اجباری می باشد"),
    representative: Yup.string().required("فیلد اجباری می باشد"),
});

