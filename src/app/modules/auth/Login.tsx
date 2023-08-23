import { useFormik } from "formik";
import Inputs from "./components/Inputs";
import * as Yup from "yup";
import { useState } from "react";
import Cookies from "js-cookie";
import ResetPassword from "./components/ResetPassword";
import { toAbsoluteUrl } from "../../../_cloner/helpers";
import { useLoginUser } from "./core/_hooks";

const Login = () => {
    const loginSchema = Yup.object().shape({
        userName: Yup.string()
            .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("نام کاربری الزامی است"),
        password: Yup.string()
            .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("رمز عبور الزامی است"),
    });

    const initialValues = {
        userName: "clonerops",
        password: "aBo217767345@",
    };

    const [loading, setLoading] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false)

    const { mutate, data } = useLoginUser()

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true);
            const userData = {
                userName: values.userName,
                password: values.password,
            };
            try {
                mutate(userData, {
                    onSuccess: (loginData) => {
                        if (loginData.succeeded) {
                            localStorage.setItem("auth", JSON.stringify(loginData?.data));
                            Cookies.set("token", `${loginData?.data?.jwToken}`);
                            setLoading(false);
                            window.location.reload();
                        } else {
                            setIsError(true)
                            setLoading(false);
                        }
                    }
                });
            } catch (error) {
                setStatus("اطلاعات ورود نادرست می باشد");
                setSubmitting(false);
                setLoading(false);
            }
        },
    });
    return (
        <>
            <div className="tw-grid tw-grid-cols-2 tw-h-screen">
                <form
                    onSubmit={formik.handleSubmit}
                    className="tw-flex tw-justify-center tw-items-center tw-flex-col"
                >
                    {isError &&
                        <div>
                            <p className="tw-text-red-500">{data?.data?.Message}</p>
                        </div>
                    }
                    <div className="tw-w-50">
                        <Inputs
                            type="text"
                            login={true}
                            getFieldProps={formik.getFieldProps}
                            touched={formik.touched.userName}
                            errors={formik.errors.userName}
                            name={"userName"}
                            title="نام کاربری"
                        ></Inputs>
                    </div>
                    <div className="tw-w-50">
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
                    <div
                        onClick={() => setIsOpen(true)}
                        className="tw-w-50 tw-mb-8 tw-cursor-pointer"
                    >
                        <span>کلمه عبور خود را فراموش کرده ام!</span>
                    </div>
                    <div className="tw-d-grid tw-mb-10 tw-w-50">
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
                <ResetPassword isOpen={isOpen} setIsOpen={setIsOpen} />
                <div>
                    <div
                        className="tw-h-full tw-w-full tw-flex tw-flex-col"
                        style={{
                            backgroundImage: `url(${toAbsoluteUrl(
                                "/media/logos/auth-bg.png"
                            )})`,
                        }}
                    >
                        <div className="tw-text-center tw-mb-auto">
                            {/* <label className="text-white font-yekan_bold text-2xl my-8">
                                بازرگانی سپهر ایرانیان
                            </label> */}
                        </div>
                        <div className="tw-flex tw-justify-center tw-items-center">
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
                        <div className="tw-mt-auto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
