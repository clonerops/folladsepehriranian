import clsx from "clsx";

const Inputs = (props: any) => {
    return (
        <div className="fv-row mb-8">
            <label className="form-label fs-6 fw-bolder text-dark w-full text-right">
                {props.title}
            </label>
            <input
                placeholder={props.placeholder}
                {...props.getFieldProps(props.name)}
                className={clsx(
                    "form-control bg-transparent",
                    {
                        "is-invalid": props.touched && props.errors,
                    },
                    {
                        "is-valid": props.touched && !props.errors,
                    }
                )}
                type={props.type}
                ref={props.ref}
                name={props.name}
                autoComplete="off"
            />
            {props.touched && props.errors && (
                <div className="fv-plugins-message-container w-full text-right">
                    <span role="alert">{props.errors}</span>
                </div>
            )}
        </div>
    );
};

export default Inputs;
