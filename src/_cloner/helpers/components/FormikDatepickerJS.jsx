import { useFormikContext } from "formik";
import DatePicker from '@amir04lm26/react-modern-calendar-date-picker';
import { LegacyRef, RefObject, useRef } from "react";

const FormikDatepickerJS = (props) => {

    const { type, name } = props;

    const formik = useFormikContext();
    const field = formik.getFieldProps(name);
    const renderCustomInput = ({ ref }) => (
        <input
            // type={type}
            ref={ref}
            className="customInput tw-p-[8px] tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
        />
    )
    return (
        <>
            <DatePicker
                locale="fa"
                value={field.value}
                onChange={(value) => formik.setFieldValue(name, value)}
                // inputClassName="customInput tw-p-[8px] tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
                renderInput={renderCustomInput}
            />

        </>
    )
}

export default FormikDatepickerJS