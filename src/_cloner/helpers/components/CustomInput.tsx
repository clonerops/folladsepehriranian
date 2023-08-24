const CustomInput = (props: {
    placeholder: string
}) => {
    return (
        <input type="text" className="tw-p-2 tw-w-full tw-rounded-md tw-border tw-border-gray-500" value={""} onChange={() => { }} placeholder={props.placeholder} />
    )
}

export default CustomInput