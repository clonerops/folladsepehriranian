const EditText = (props: {text: any}) => {
    return (
        <div className="tw-w-full tw-bg-yellow-500 tw-p-4 tw-text-right">
            <p className="tw-text-white">
                {props.text}
            </p>
        </div>
    );
};

export default EditText;
