const SuccessText = (props: {text: any}) => {
    return (
        <div className="tw-w-full tw-bg-green-500 tw-p-4 tw-text-right">
            <p className="tw-text-white">
                {props.text}
            </p>
        </div>
    );
};

export default SuccessText;
