const CustomInput = (props: {
    placeholder: string;
    value?: string | number;
    onChange?: any;
    formikInput?: boolean;
    getFieldProps?: any;
    name?: string;
    touched?: any;
    errors?: any;
    type?: string
}) => {
    return (
        <>
            {props.formikInput ? (
                <>
                    <input
                        {...props.getFieldProps(props.name)}
                        type={props.type}
                        className="customInput tw-p-[8px] tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
                        placeholder={props.placeholder}
                        name={props.name}
                    />
                    {props.touched && props.errors && (
                        <div className="fv-plugins-message-container tw-w-full tw-text-right tw-text-red-500 tw-text-sm">
                            <span role="alert">{props.errors}</span>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <input
                        type="text"
                        className="customInput tw-p-[8px] tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
                        value={props.value}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                    />
                </>
            )}
        </>
    );
};

export default CustomInput;
