import * as Yup from "yup";

export const confirmValidation = Yup.object({
    approvedDate: Yup.string().required("فیلد اجباری می باشد"),
});
