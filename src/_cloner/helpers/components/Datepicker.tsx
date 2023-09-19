import { forwardRef, ForwardedRef } from "react";
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import type{Value} from "react-multi-date-picker"

type Props = {
    boxClassName?: string;
    name: string;
    value?: any,
    onChange?: any;
    reff: any;
    placeholder: string;
};

const DatePickerComponent = forwardRef(
    (props: Props, ref: ForwardedRef<any>) => {
        const { boxClassName, name, placeholder, value, onChange, reff,  ...rest } = props;
 
        return (
            <>
                <div className={boxClassName}>
                    <DatePicker
                        {...rest}
                        locale={persian_fa}
                        calendar={persian}
                        value={value}
                        onChange={onChange}
                        ref={reff}
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
    }
);

export default DatePickerComponent;
