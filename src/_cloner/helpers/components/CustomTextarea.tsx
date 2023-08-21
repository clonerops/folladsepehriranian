import { FC } from 'react'

interface IProps {
    title?: string
    name?: string
    key?: string
    value?: string
    placeholder?: string
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined
}

const CustomTextarea: FC<IProps> = ({title, value, name, key,placeholder, onChange}) => {
    return (
        <div
            style={{
                minWidth: "10vw",
                gap: 8,
            }}
        >
            {/* <label className="dropdown__label">{title}</label> */}
            <textarea 
                className='p-2 w-full rounded-md border border-gray-500'
                name={name}
                key={key}
                value={value}
                placeholder={placeholder}
                onChange={onChange}

            />
        </div>
    );
};

export default CustomTextarea;
