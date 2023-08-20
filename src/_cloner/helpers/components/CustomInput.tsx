const CustomInput = (props: {
    placeholder: string
}) => {
    return (
        <input type="text" className="p-2 w-full rounded-md border border-gray-500" value={""} onChange={() => { }} placeholder={props.placeholder} />
    )
}

export default CustomInput