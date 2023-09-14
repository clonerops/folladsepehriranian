import { FC } from "react"

interface IProps {
    setState: (value: React.SetStateAction<boolean>) => void
}

const CreateButton:FC<IProps> = ({setState}) => {
    return (
        <button
            onClick={() => setState(true)}
            className="tw-bg-green-500 tw-px-8 tw-py-4 tw-rounded-md tw-flex tw-gap-x-2"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-6 tw-h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

        </button>
    )
}

export default CreateButton