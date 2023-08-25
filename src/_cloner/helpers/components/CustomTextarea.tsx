const CustomTextarea = (props: {
    title?: string;
    name?: string;
    key?: string;
    value?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
    formikInput?: boolean;
    getFieldProps?: any;
    touched?: any;
    errors?: any;
}) => {
    return (
        <>
            {props.formikInput ? (
                <>
                    <div
                        style={{
                            minWidth: "10vw",
                            gap: 8,
                        }}
                    >
                        <textarea
                            {...props.getFieldProps(props.name)}
                            className="customInput tw-p-2 tw-w-full tw-rounded-md tw-border tw-border-gray-500 tw-outline-none"
                            name={props.name}
                            key={props.key}
                            placeholder={props.placeholder}
                        />
                        {props.touched && props.errors && (
                            <div className="fv-plugins-message-container tw-w-full text-right">
                                <span role="alert">{props.errors}</span>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <div
                        style={{
                            minWidth: "10vw",
                            gap: 8,
                        }}
                    >
                        <textarea
                            className="customInput tw-p-2 tw-w-full tw-rounded-md tw-border tw-border-gray-500 tw-outline-none"
                            name={props.name}
                            key={props.key}
                            value={props.value}
                            placeholder={props.placeholder}
                            onChange={props.onChange}
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default CustomTextarea;
