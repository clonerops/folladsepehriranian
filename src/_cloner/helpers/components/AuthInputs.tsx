import clsx from "clsx";

const AuthInputs = (props: any) => {
    return (
        <div className="fv-row mb-2 tw-w-full">
            <label className="form-label fs-6 fw-bolder tw-text-dark tw-w-full tw-text-right">
                {props.title}
            </label>
            <input
                placeholder={props.placeholder}
                {...props.getFieldProps(props.name)}
                className={clsx(
                    "form-control bg-transparent tw-border tw-border-gray-400 hover:tw-border-blue-500",
                    {
                        "is-invalid": (props.touched && props.errors) || (props.isError),
                    },
                    {
                        "is-valid": (props.touched && !props.errors) || (props.isError),
                    }
                )}
                type={props.type}
                ref={props.ref}
                name={props.name}
                autoComplete="off"
            />
            {(props.touched && props.errors) && (
                <div className="fv-plugins-message-container tw-w-full tw-text-right">
                    <span role="alert">{props.errors}</span>
                </div>
            )}
        </div>
    );
};

export default AuthInputs;
