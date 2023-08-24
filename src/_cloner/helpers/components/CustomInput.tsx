const CustomInput = (props: {
    placeholder: string;
    value?: string | number;
    onChange?: () => void;
    formikInput?: boolean;
    getFieldProps?: any;
    name?: string;
    touched?: any;
    errors?: any;
}) => {
    return (
        <>
            {props.formikInput ? (
                <>
                    <input
                        {...props.getFieldProps(props.name)}
                        type="text"
                        className="customInput tw-p-2 tw-w-full tw-rounded-md tw-border tw-border-gray-500 tw-outline-none"
                        placeholder={props.placeholder}
                        name={props.name}
                    />
                    {props.touched && props.errors && (
                        <div className="fv-plugins-message-container tw-w-full text-right">
                            <span role="alert">{props.errors}</span>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <input
                        type="text"
                        className="customInput tw-p-2 tw-w-full tw-rounded-md tw-border tw-border-gray-500 tw-outline-none"
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
