import { useFormik } from "formik";
import Inputs from "./components/Inputs";
import * as Yup from "yup";
import { useState } from "react";
import { registerUser } from "./core/_requests";
import { useRegisterUser } from "./core/_hooks";
import { KTSVG, toAbsoluteUrl } from "../../../_cloner/helpers";

const Register = () => {
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
                        if (fetchData.status === 400) {
                            setIsError(true);
                        } else {
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

    return (
        <>
            {/* <div>
                {data?.status === 400 && isError && (
                    <div className="w-50 h-auto bg-gray-200 border-r-2 border-r-red-600">
                        <div
                            onClick={() => setIsError(false)}
                            className="float-left"
                        >
                            <KTSVG
                                className=""
                                path={toAbsoluteUrl(
                                    "/media/icons/duotune/art/art001.svg"
                                )}
                            />
                        </div>
                        <ul>
                            {data?.data?.errors?.map((item: any) => {
                                console.log("item", item)
                                return (
                                    <li className="p-4">
                                        ConfirmPassword' and 'Password' do not
                                        match
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div> */}
            <form
                onSubmit={formik.handleSubmit}
                className="flex justify-center items-center flex-col"
            >
                <div className="flex flex-wrap px-4">
                    <div className="w-50 px-2">
                        <Inputs
                            type="text"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.firstName}
                            errors={formik.errors.firstName}
                            name={"firstName"}
                            title="نام"
                        ></Inputs>
                        {isError && data?.data?.errors.FirstName && (
                            <span>{data?.data?.errors.FirstName[0]}</span>
                        )}
                    </div>
                    <div className="w-50 px-2">
                        <Inputs
                            type="text"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.lastName}
                            errors={formik.errors.lastName}
                            name={"lastName"}
                            title="نام خانوادگی"
                        ></Inputs>
                        {isError && data?.data?.errors.LastName && (
                            <span>{data?.data?.errors.LastName[0]}</span>
                        )}
                    </div>
                    <div className="w-50 px-2">
                        <Inputs
                            type="text"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.email}
                            errors={formik.errors.email}
                            name={"email"}
                            title="ایمیل"
                        ></Inputs>
                        {isError && data?.data?.errors.Email && (
                            <span>{data?.data?.errors.Email[0]}</span>
                        )}
                    </div>
                    <div className="w-50 px-2">
                        <Inputs
                            type="text"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.userName}
                            errors={formik.errors.userName}
                            name={"userName"}
                            title="نام کاربری"
                        ></Inputs>
                        {isError && data?.data?.errors.UserName && (
                            <span>{data?.data?.errors.UserName[0]}</span>
                        )}
                    </div>
                    <div className="w-50 px-2">
                        <Inputs
                            type="password"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.password}
                            errors={formik.errors.password}
                            name={"password"}
                            title="کلمه عبور"
                        ></Inputs>
                        {isError && data?.data?.errors.Password && (
                            <span>{data?.data?.errors.Password[0]}</span>
                        )}
                    </div>
                    <div className="w-50 px-2">
                        <Inputs
                            type="password"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.confirmPassword}
                            errors={formik.errors.confirmPassword}
                            name={"confirmPassword"}
                            title="تکرار کلمه عبور"
                        ></Inputs>
                        {isError && data?.data?.errors.ConfirmPassword && (
                            <span>{data?.data?.errors.ConfirmPassword[0]}</span>
                        )}
                    </div>
                </div>
                <div className="w-full px-6 flex justify-between items-center">
                    <div />
                    <button
                        type="submit"
                        id="kt_sign_in_submit"
                        className="btn btn-primary"
                        disabled={formik.isSubmitting || !formik.isValid}
                    >
                        {!loading && (
                            <span className="indicator-label">ادامه</span>
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
        </>
    );
};

export default Register;
