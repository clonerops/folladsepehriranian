// import { useField, useFormikContext } from "formik";
// import { getFormikFieldValidationProps } from "../GetFormikFieldValidationProp";

// type Props = {
//     type: string;
//     placeholder: string;
//     name: string;
//     value?: string;
//     divClassName?: string;
//     ref?: any,
//     defaultChecked?: boolean
// }

// const FormikInput = (props: Props) => {

//     const { type, placeholder, name, ref, divClassName, value, defaultChecked, ...rest } = props;

//     const [field] = useField({ name, value })

//     const formikProps = useFormikContext()
//     const { error, helperText } = getFormikFieldValidationProps(formikProps, name);
//     return (
//         <>
//             <div className={divClassName}>
//                 <input
//                     type={type}
//                     className="customInput tw-p-[8px] tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
//                     placeholder={placeholder}
//                     id={name}
//                     ref={ref}
//                     defaultChecked={defaultChecked}
//                     {...getFormikFieldValidationProps(formikProps, name)}
//                     {...field}
//                     {...rest}
//                 />
//                 {error && <div className="tw-text-red-500 tw-text-right tw-text-sm">{helperText}</div>}
//             </div>
//         </>
//     )
// }

// export default FormikInput
import React, { forwardRef } from "react";
import { useField, useFormikContext } from "formik";
import { getFormikFieldValidationProps } from "../GetFormikFieldValidationProp";

type Props = {
    type: string;
    placeholder: string;
    name: string;
    value?: string;
    title?: string;
    divClassName?: string;
    defaultChecked?: boolean;
}

const FormikInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { type, placeholder, name, divClassName, title, defaultChecked, ...rest } = props;

    const [field] = useField({ name });

    const formikProps = useFormikContext();
    const { error, helperText } = getFormikFieldValidationProps(formikProps, name);

    return (
        <>
            <div className={divClassName}>
                <div className="tw-text-right tw-font-bold tw-text-md">{title}</div>
                <input
                    type={type}
                    className="customInput tw-p-[8px] tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
                    placeholder={placeholder}
                    id={name}
                    ref={ref}
                    defaultChecked={defaultChecked}
                    {...getFormikFieldValidationProps(formikProps, name)}
                    {...field}
                    {...rest}
                />
                {error && <div className="tw-text-red-500 tw-text-right tw-text-sm">{helperText}</div>}
            </div>
        </>
    );
});

export default FormikInput;
