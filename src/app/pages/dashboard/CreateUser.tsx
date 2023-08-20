import * as Yup from "yup";
import { useState } from "react";
import { useRegisterUser } from "../../modules/auth/core/_hooks";
import { useFormik } from "formik";
import AuthInputs from "../../../_cloner/helpers/components/AuthInputs";
import { Card6 } from "../../../_cloner/partials/content/cards/Card6";

const CreateUser = () => {
    const loginSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(6, "تعداد کاراکتر کمتر از 6 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("نام الزامی است"),
        lastName: Yup.string()
            .min(6, "تعداد کاراکتر کمتر از 6 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("نام خانوادگی الزامی است"),
        email: Yup.string()
            .min(6, "تعداد کاراکتر کمتر از 6 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("ایمیل الزامی است"),
        userName: Yup.string()
            .min(6, "تعداد کاراکتر کمتر از 6 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("نام کاربری الزامی است"),
        password: Yup.string()
            .min(6, "تعداد کاراکتر کمتر از 6 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("کلمه عبور الزامی است"),
        confirmPassword: Yup.string()
            .min(6, "تعداد کاراکتر کمتر از 6 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("تکرار کلمه عبور الزامی است"),
    });

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
    };

    const [loading, setLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { mutate, data } = useRegisterUser();

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, { setStatus, setSubmitting, resetForm }) => {
            setLoading(true);
            const userData = {
                userName: values.userName,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                confirmPassword: values.confirmPassword,
            };
            try {
                mutate(userData, {
                    onSuccess: (fetchData) => {
                        console.log("fetchData", fetchData)
                        if (!fetchData.Succeeded) {
                            setIsError(true);
                            setIsSuccess(false)
                        } else {
                            setIsSuccess(true)
                            setIsError(false);
                        }
                    },
                });
                setLoading(false);
            } catch (error) {
                setStatus("اطلاعات ورود نادرست می باشد");
                alert();
                setSubmitting(false);
                setLoading(false);
            }
        },
    });

    console.log("data", data)

    return (
        <Card6 image="" title="">
            {isSuccess &&
                <div className="w-full bg-green-500 p-4 rounded-md">
                    <p className="text-white">{data?.data?.Message}</p>
                </div>
            }
            <form
                onSubmit={formik.handleSubmit}
                className="flex justify-center items-center flex-col container py-16"
            >
                <div className="flex flex-wrap px-4">
                    <div className="w-50 px-2">
                        <AuthInputs
                            type="text"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.firstName}
                            errors={formik.errors.firstName}
                            name={"firstName"}
                            title="نام"
                        ></AuthInputs>
                        {isError && data?.data?.errors?.FirstName && (
                            <span className="text-red-500">{data?.data?.errors?.FirstName[0]}</span>
                        )}
                    </div>
                    <div className="w-50 px-2">
                        <AuthInputs
                            type="text"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.lastName}
                            errors={formik.errors.lastName}
                            name={"lastName"}
                            title="نام خانوادگی"
                        ></AuthInputs>
                        {isError && data?.data?.errors?.LastName && (
                            <span className="text-red-500">{data?.data?.errors?.LastName[0]}</span>
                        )}
                    </div>
                    <div className="w-50 px-2">
                        <AuthInputs
                            type="text"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.email}
                            errors={formik.errors.email}
                            name={"email"}
                            title="ایمیل"
                        ></AuthInputs>
                        {isError && data?.data?.errors?.Email && (
                            <span className="text-red-500">{data?.data?.errors?.Email[0]}</span>
                        )}
                    </div>
                    <div className="w-50 px-2">
                        <AuthInputs
                            type="text"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.userName}
                            errors={formik.errors.userName}
                            name={"userName"}
                            title="نام کاربری"
                        ></AuthInputs>
                        {isError && data?.data?.errors?.UserName && (
                            <span className="text-red-500">{data?.data?.errors?.UserName[0]}</span>
                        )}
                    </div>
                    <div className="w-50 px-2">
                        <AuthInputs
                            type="password"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.password}
                            errors={formik.errors.password}
                            name={"password"}
                            title="کلمه عبور"
                        ></AuthInputs>
                        {isError && data?.data?.errors?.Password && (
                            <span className="text-red-500">{data?.data?.errors?.Password[0]}</span>
                        )}
                    </div>
                    <div className="w-50 px-2">
                        <AuthInputs
                            type="password"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.confirmPassword}
                            errors={formik.errors.confirmPassword}
                            name={"confirmPassword"}
                            title="تکرار کلمه عبور"
                        ></AuthInputs>
                        {isError && data?.data?.errors?.ConfirmPassword && (
                            <span className="text-red-500">{data?.data?.errors?.ConfirmPassword[0]}</span>
                        )}
                    </div>
                </div>
                <div className="w-full px-6 flex justify-between items-center">
                    <div />
                    <button
                        type="submit"
                        id="kt_sign_in_submit"
                        className="bg-green-500 py-4 px-16 rounded-lg hover:bg-green-700 transition"
                        disabled={formik.isSubmitting || !formik.isValid}
                    >
                        {!loading && (
                            <span className="indicator-label text-white">ثبت</span>
                        )}
                        {loading && (
                            <span
                                className="indicator-progress"
                                style={{ display: "block" }}
                            >
                                درحال پردازش...
                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                        )}
                    </button>
                </div>
            </form>

        </Card6>
    )
}

export default CreateUser