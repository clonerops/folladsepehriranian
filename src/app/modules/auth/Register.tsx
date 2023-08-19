import { useFormik } from "formik";
import Inputs from "./components/Inputs";
import * as Yup from "yup";
import { useState } from "react";
import { loginUser } from "./core/_requests";
import Cookies from "js-cookie";

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

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true);
            const userData = {
                username: values.username,
                password: values.password,
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
            }
        },
    });

    return (
        <>
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
