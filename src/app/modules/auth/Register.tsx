import { useFormik } from "formik";
import { toAbsoluteUrl } from "../../../_cloner/helpers";
import Inputs from "./components/Inputs";
import * as Yup from "yup";
// import Captcha from "./components/Captcha";
// import { useGetCaptcha } from "./core/_hooks";
import { useState } from "react";
import { loginUser } from "./core/_requests";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Register = () => {
    const loginSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("نام الزامی است"),
        lastName: Yup.string()
            .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("نام خانوادگی الزامی است"),
        email: Yup.string()
            .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("ایمیل الزامی است"),
        username: Yup.string()
            .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("نام کاربری الزامی است"),
        password: Yup.string()
            .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("کلمه عبور الزامی است"),
        confirmPassword: Yup.string()
            .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("تکرار کلمه عبور الزامی است"),
        // captcha: Yup.string().required("کدامنیتی الزامی است"),
    });

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confrimPassword: "",
    };

    const [loading, setLoading] = useState<boolean>(false);

    // const { data: captcha, refetch } = useGetCaptcha();

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true);
            const userData = {
                username: values.username,
                password: values.password,
                // captchaToken: captcha.tokenString,
                // captchaCode: values.captcha,
            };
            try {
                const auth = await loginUser(userData);
                localStorage.setItem("auth", JSON.stringify(auth));
                Cookies.set("token", `${auth?.jwtToken}`);
                setLoading(false);
                window.location.reload();
            } catch (error) {
                setStatus("اطلاعات ورود نادرست می باشد");
                setSubmitting(false);
                setLoading(false);
                // refetch();
            }
        },
    });

    return (
        <>
            <div className="grid grid-cols-2 h-screen">
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex justify-center items-center flex-col"
                >
                    <div>
                        <label className="text-blue-600 pb-16 text-3xl font-yekan_bold">
                            ثبت نام
                        </label>
                    </div>
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
                        </div>
                        <div className="w-50 px-2">
                            <Inputs
                                type="text"
                                login={true}
                                getFieldProps={formik.getFieldProps}
                                touched={formik.touched.username}
                                errors={formik.errors.username}
                                name={"username"}
                                title="نام کاربری"
                            ></Inputs>
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
                        </div>
                        <div className="w-50 px-2">
                            <Inputs
                                type="password"
                                login={true}
                                getFieldProps={formik.getFieldProps}
                                touched={formik.touched.confrimPassword}
                                errors={formik.errors.confrimPassword}
                                name={"confrimPassword"}
                                title="تکرار کلمه عبور"
                            ></Inputs>
                        </div>
                    </div>
                    <div className="w-full px-6 flex justify-between items-center">
                        <div>
                            <span>قبلا در سامانه ثبت نام کرده ام! <Link to="/auth">
                            <span className="text-blue-600">ورود</span></Link></span>
                        </div>
                        <button
                            type="submit"
                            id="kt_sign_in_submit"
                            className="btn btn-primary"
                            disabled={formik.isSubmitting || !formik.isValid}
                        >
                            {!loading && (
                                <span className="indicator-label">ثبت نام</span>
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
                <div>
                    <div
                        className="h-full w-full flex flex-col"
                        style={{
                            backgroundImage: `url(${toAbsoluteUrl(
                                "/media/logos/auth-bg.png"
                            )})`,
                        }}
                    >
                        <div className="text-center mb-auto">
                            {/* <label className="text-white font-yekan_bold text-2xl my-8">
                                بازرگانی سپهر ایرانیان
                            </label> */}
                        </div>
                        <div className="flex justify-center items-center">
                            {/* <img
                                src={`${toAbsoluteUrl(
                                    "/media/logos/bazarganilogo.png"
                                )}`}
                                width={300}
                                height={300}
                                alt="Sepehr Logo"
                                className="mx-auto"
                            /> */}
                        </div>
                        <div className="mt-auto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
