const ErrorText = (props: {text: any}) => {
    return (
        <div className="tw-w-[50%] tw-bg-red-500 tw-p-4 tw-mx-20 tw-text-right">
            <p className="tw-text-white">
                {props.text}
            </p>
        </div>
    );
};

export default ErrorText;
