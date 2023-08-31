import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import AuthInputs from "../../../_cloner/helpers/components/AuthInputs";
import { Card6 } from "../../../_cloner/partials/content/cards/Card6";
import { useRegisterUser } from "./core/_hooks";
import SuccessText from "../../../_cloner/helpers/components/SuccessText";

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
                        if (fetchData.status !== 200) {
                            setIsError(true);
                            setLoading(false);
                        } else {
                            setIsSuccess(true);
                            setIsError(false);
                            setLoading(false);
                        }
                    },
                });
            } catch (error) {
                setStatus("اطلاعات ورود نادرست می باشد");
                alert();
                setSubmitting(false);
                setLoading(false);
            }
        },
    });

    console.log(isSuccess);

    return (
        <Card6 image="" title="">
            {data?.data?.Message ||
                (data?.message && (
                    <SuccessText text={data?.data?.Message || data?.message} />
                ))}
            <form
                onSubmit={formik.handleSubmit}
                className="tw-w-full tw-mx-auto"
            >
                <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-px-4">
                    <div className="tw-flex tw-w-[50%]">
                        <div className="tw-px-2 tw-w-[50%]">
                            <AuthInputs
                                type="text"
                                login={true}
                                getFieldProps={formik.getFieldProps}
                                touched={formik.touched.firstName}
                                errors={formik.errors.firstName}
                                name={"firstName"}
                                placeholder="نام"
                            // title="نام"
                            ></AuthInputs>
                            {isError && data?.data?.errors?.FirstName && (
                                <span className="tw-text-red-500">
                                    {data?.data?.errors?.FirstName[0]}
                                </span>
                            )}
                        </div>
                        <div className="tw-px-2 tw-w-[50%]">
                            <AuthInputs
                                type="text"
                                login={true}
                                getFieldProps={formik.getFieldProps}
                                touched={formik.touched.lastName}
                                errors={formik.errors.lastName}
                                name={"lastName"}
                                placeholder="نام خانوادگی"
                            ></AuthInputs>
                            {isError && data?.data?.errors?.LastName && (
                                <span className="tw-text-red-500">
                                    {data?.data?.errors?.LastName[0]}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="tw-px-2 tw-w-[50%]">
                        <AuthInputs
                            type="text"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.email}
                            errors={formik.errors.email}
                            isError={data?.data?.errors?.Email}
                            name={"email"}
                            placeholder="آدرس ایمیل"
                        // title="ایمیل"
                        ></AuthInputs>
                        {isError && data?.data?.errors?.Email && (
                            <span className="tw-text-red-500">
                                {data?.data?.errors?.Email[0]}
                            </span>
                        )}
                    </div>
                    <div className="tw-px-2 tw-w-[50%]">
                        <AuthInputs
                            type="text"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.userName}
                            errors={formik.errors.userName}
                            isError={data?.data?.errors?.UserName}
                            name={"userName"}
                            placeholder="نام کاربری"
                        // title="نام کاربری"
                        ></AuthInputs>
                        {isError && data?.data?.errors?.UserName && (
                            <span className="tw-text-red-500">
                                {data?.data?.errors?.UserName[0]}
                            </span>
                        )}
                    </div>
                    <div className="tw-flex tw-w-[50%]">
                        <div className="tw-px-2 tw-w-[50%]">
                            <AuthInputs
                                type="password"
                                login={true}
                                getFieldProps={formik.getFieldProps}
                                touched={formik.touched.password}
                                errors={formik.errors.password}
                                isError={data?.data?.errors?.Password}
                                name={"password"}
                                placeholder="کلمه عبور"
                            ></AuthInputs>
                            {isError && data?.data?.errors?.Password && (
                                <span className="tw-text-red-500">
                                    {data?.data?.errors?.Password[0]}
                                </span>
                            )}
                        </div>
                        <div className="tw-px-2 tw-w-[50%]">
                            <AuthInputs
                                type="password"
                                login={true}
                                getFieldProps={formik.getFieldProps}
                                touched={formik.touched.confirmPassword}
                                errors={formik.errors.confirmPassword}
                                isError={data?.data?.errors?.ConfirmPassword}
                                name={"confirmPassword"}
                                placeholder="تکرار کلمه عبور"
                            ></AuthInputs>
                            {isError && data?.data?.errors?.ConfirmPassword && (
                                <span className="tw-text-red-500">
                                    {data?.data?.errors?.ConfirmPassword[0]}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="tw-w-[50%] tw-px-2 tw-flex tw-justify-start tw-items-center">
                        <div />
                        <button
                            type="submit"
                            id="kt_sign_in_submit"
                            className="tw-bg-green-500 tw-py-4 tw-px-16 tw-rounded-lg tw-hover:bg-green-700 tw-transition"
                            disabled={formik.isSubmitting || !formik.isValid}
                        >
                            {!loading && (
                                <span className="indicator-label tw-text-white">
                                    ثبت کاربر
                                </span>
                            )}
                            {loading && (
                                <span
                                    className="indicator-progress tw-text-white"
                                    style={{ display: "block" }}
                                >
                                    درحال پردازش...
                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </Card6>
    );
};

export default CreateUser;
