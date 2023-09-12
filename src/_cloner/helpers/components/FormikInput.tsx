import { useField, useFormikContext } from "formik";
import { getFormikFieldValidationProps } from "../GetFormikFieldValidationProp";

type Props = {
    type: string;
    placeholder: string;
    name: string
}

const FormikInput = (props: Props) => {

    const { type, placeholder, name, ...rest } = props;

    const [field] = useField({name})

    const formikProps = useFormikContext()

    return (
        <>
            <input
                type={type}
                className="customInput tw-p-[8px] tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
                placeholder={placeholder}
                id={name}
                {...getFormikFieldValidationProps(formikProps, name)}
                {...field}
                {...rest}
            />
        </>
    )
}

export default FormikInput