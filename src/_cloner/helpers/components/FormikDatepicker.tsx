import { forwardRef, ForwardedRef, useState } from "react";
import { useField, useFormikContext } from "formik";
import MultiDatepicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { getFormikFieldValidationProps } from "../GetFormikFieldValidationProp";
import moment from "moment-jalaali";
type Props = {
    boxClassName?: string;
    name: string;
    label?: string;
    placeholder: string;
    value?: string;
    setFieldValue?: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
    ) => void;
};

const FormikDatepicker = forwardRef((props: Props, ref: ForwardedRef<any>) => {
    const {
        boxClassName,
        name,
        label,
        placeholder,
        setFieldValue,
        value,
        ...rest
    } = props;

    const [field, meta, helpers] = useField({ name });
    const formikProps = useFormikContext();
    const validationProps = getFormikFieldValidationProps(formikProps, name);

    const handleChange = (date: any) => {
        const formattedDate = moment(new Date(date)).format("jYYYY/jMM/jDD");
        helpers.setValue(formattedDate);
    };
    return (
        <>
            <div className={boxClassName}>
                <MultiDatepicker
                    {...field}
                    {...rest}
                    {...validationProps}
                    value={field.value}
                    onChange={handleChange}
                    locale={persian_fa}
                    calendar={persian}
                    id={name}
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
});

export default FormikDatepicker;
