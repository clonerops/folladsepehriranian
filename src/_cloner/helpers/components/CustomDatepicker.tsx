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
            className="datepickerzaman tw-z-[9999]"
            inputClass="customInput tw-border tw-w-full tw-border-gray-300 tw-rounded-md tw-py-2 tw-outline-none tw-z-[999]"
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
