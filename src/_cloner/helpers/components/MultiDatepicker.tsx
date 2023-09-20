import { forwardRef, ForwardedRef } from "react";
import MultiDatepicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
type Props = {
    boxClassName?: string;
    name?: string;
    placeholder: string;
    value?: any;
    onChange: any
};

const MultiDatepickerCustom = forwardRef((props: Props, ref: ForwardedRef<any>) => {
    const {
        boxClassName,
        name,
        onChange,
        placeholder,
        value,
    } = props;


    return (
        <>
            <div className={boxClassName}>
                <MultiDatepicker
                    value={value}
                    onChange={onChange}
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
            </div>
        </>
    );
});

export default MultiDatepickerCustom;
