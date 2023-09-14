import { useField, useFormikContext } from "formik";
import { getFormikFieldValidationProps } from "../GetFormikFieldValidationProp";

type Props = {
    type: string;
    placeholder: string;
    name: string;
    value?: string;
    divClassName?: string
}

const FormikInput = (props: Props) => {

    const { type, placeholder, name, divClassName, value, ...rest } = props;

    const [field] = useField({ name, value })

    const formikProps = useFormikContext()
    const { error, helperText, ...otherProps } = getFormikFieldValidationProps(formikProps, name);
    return (
        <>
            <div className={divClassName}>
                <input
                    type={type}
                    className="customInput tw-p-[8px] tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
                    placeholder={placeholder}
                    id={name}
                    {...getFormikFieldValidationProps(formikProps, name)}
                    {...field}
                    {...rest}
                />
                {error && <div className="tw-text-red-500 tw-text-right tw-text-sm">{helperText}</div>}
            </div>
        </>
    )
}

export default FormikInput