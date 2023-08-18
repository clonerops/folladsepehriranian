import React, { FC } from "react";
import { DatePicker } from "zaman";

interface IProps {
    title?: string;
    placeholder?: string;
    onChange?: any;
    defaultValue?: any
}

const CustomDatepicker: FC<IProps> = ({ title, placeholder, onChange, defaultValue }) => {
    return (
        <DatePicker
            round="x4"
            className="datepickerzaman"
            inputClass=" border w-full border-gray-500 rounded-md py-2"
            onChange={onChange}
            defaultValue={defaultValue}
            inputAttributes={{
                placeholder: placeholder,
                style:{paddingLeft: 20, paddingRight:20}
            }}
        />
        );
};

export default CustomDatepicker;
