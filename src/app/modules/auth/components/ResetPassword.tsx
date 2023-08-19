import React from "react";
import Modal from "../../../../_cloner/helpers/components/Modal";
import Inputs from "./Inputs";
import { useFormik } from "formik";
import * as Yup from "yup";

const ResetPassword = (props: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const resetPasswordSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("نام کاربری الزامی است"),
        password: Yup.string()
            .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("رمز عبور الزامی است"),
        confirmPassword: Yup.string()
            .min(3, "تعداد کاراکتر کمتر از 3 مجاز نمی باشد")
            .max(50, "تعداد کاراکتر بیشتر از 50 مجاز نمی باشد")
            .required("رمز عبور الزامی است"),
    });

    const initialValues = {
        username: "",
        password: "",
        confirmPassword: "",
    };
    const formik = useFormik({
        initialValues,
        validationSchema: resetPasswordSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                window.location.reload();
            } catch (error) {
                setStatus("اطلاعات ورود نادرست می باشد");
                setSubmitting(false);
            }
        },
    });

    return (
        <Modal
            isOpen={props.isOpen}
            onClose={() => props.setIsOpen(false)}
            reqular
        >
            <form className="flex justify-center items-center flex-col mx-16 my-8">
                <div className="w-full">
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
                <div className="w-full">
                    <Inputs
                        type="text"
                        login={true}
                        getFieldProps={formik.getFieldProps}
                        touched={formik.touched.password}
                        errors={formik.errors.password}
                        name={"password"}
                        title="کلمه عبور جدید"
                    ></Inputs>
                </div>
                <div className="w-full">
                    <Inputs
                        type="text"
                        login={true}
                        getFieldProps={formik.getFieldProps}
                        touched={formik.touched.confirmPassword}
                        errors={formik.errors.confirmPassword}
                        name={"confirmPassword"}
                        title="تکرار کلمه عبور جدید"
                    ></Inputs>
                </div>
                <div className="d-grid mb-10 w-50">
                    <button
                        type="submit"
                        id="kt_sign_in_submit"
                        className="btn btn-primary"
                        disabled={formik.isSubmitting || !formik.isValid}
                    >
                        {/* {!loading && ( */}
                        <span className="indicator-label">تغییر کلمه عبور</span>
                        {/* )} */}
                        {/* {loading && (
                            <span
                                className="indicator-progress"
                                style={{ display: "block" }}
                            >
                                درحال پردازش...
                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                        )} */}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default ResetPassword;
