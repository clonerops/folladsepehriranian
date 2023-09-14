import { forwardRef, ForwardedRef } from "react";
import {  useField, useFormikContext } from "formik";
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { getFormikFieldValidationProps } from "../GetFormikFieldValidationProp";
// import fa from "date-fns/locale/fa-IR"; // the locale you want
// registerLocale("fa-IR", fa); // register it with the name you want
type Props = {
    boxClassName?: string;
    name: string;
    label?: string;
    placeholder: string;
    value?: string;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
};

const FormikDatepicker = forwardRef(
    (props: Props, ref: ForwardedRef<any>) => {
        const { boxClassName, name, label, placeholder, setFieldValue, value, ...rest } =
            props;


        const [field] = useField({ name, value });
        const formikProps = useFormikContext();
        const validationProps = getFormikFieldValidationProps(
            formikProps,
            name
        );

        return (
            <>
                <div className={boxClassName}>
                    <DatePicker
                        {...field}
                        {...rest}
                        {...validationProps}
                        value={field.value}
                        onChange={(value) => setFieldValue(name, value)}
                        locale={persian_fa}
                        calendar={persian}
                        render={
                            <input
                                id={name}
                                placeholder={placeholder}
                                className="customInput tw-p-[8px] tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
                            />
                        }
                    />
                    {validationProps.error && (
                        <span className="tw-text-red-500 tw-pl-4">
                            {validationProps.helperText}
                        </span>
                    )}
                </div>
            </>
        );
    }
);

export default FormikDatepicker;
