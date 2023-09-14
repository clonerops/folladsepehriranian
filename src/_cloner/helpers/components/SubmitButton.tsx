import { FC } from "react"

interface IProps {
    title: string
    isLoading: boolean,
    isUpdate?: boolean
}

const SubmitButton:FC<IProps> = ({title, isLoading, isUpdate}) => {
    return (
        <div className="tw-flex">
            <button
                type="submit"
                id="kt_sign_in_submit"
                className= {isUpdate ? "tw-btn-warning tw-mb-2" : "tw-btn-success tw-mb-2"}
            >
                {!isLoading && (
                    <span className="indicator-label">{title}</span>
                )}
                {isLoading && (
                    <span
                        className="indicator-progress"
                        style={{ display: "block" }}
                    >
                        درحال پردازش...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                )}
            </button>
        </div>
    )
}

export default SubmitButton