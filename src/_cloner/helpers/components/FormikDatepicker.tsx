import { useFormikContext } from "formik";
import DatePicker from '@amir04lm26/react-modern-calendar-date-picker';
import { LegacyRef, RefObject, useRef } from "react";

type Props = {
    type: string;
    placeholder: string;
    name: string
}

const FormikDatepicker = (props: Props) => {

    const { type, name } = props;

    const formik = useFormikContext();
    const field = formik.getFieldProps(name);
    // const renderCustomInput = ({ ref }: { ref: any }) => (
    //     <input
    //         // type={type}
    //         ref={ref}
    //         className="customInput tw-p-[8px] tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
    //     />
    // )
    return (
        <>
            <DatePicker
                locale="fa"
                value={field.value}
                onChange={(value) => formik.setFieldValue(name, value)}
                inputClassName="customInput !tw-text-right tw-p-[28px] tw-h-12 tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
                inputPlaceholder={name}
                
            />

        </>
    )
}

export default FormikDatepicker