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
                className='tw-p-2 tw-w-full tw-rounded-md tw-border tw-border-gray-500'
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
