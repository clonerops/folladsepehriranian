import React, { FC } from "react";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    reqular?: boolean;
    title?: string;
    children: React.ReactNode;
}

const Modal: FC<IProps> = ({
    isOpen,
    onClose,
    className,
    reqular,
    title,
    children,
}) => {
    if (!isOpen) return null;

    return (
        <div className="tw-fixed tw-inset-0 tw-z-[150]">
            <div className="tw-flex tw-min-h-screen tw-items-center tw-justify-center tw-px-4 tw-pt-4 tw-pb-20 tw-text-center tw-sm:p-0">
                <div
                    className="tw-fixed tw-inset-0 tw-transition-opacity"
                    aria-hidden="true"
                    onClick={onClose}
                >
                    <div className="tw-absolute tw-inset-0 tw-bg-gray-500 tw-opacity-75"></div>
                </div>
                <span
                    className="tw-hidden tw-sm:inline-block tw-sm:h-screen tw-sm:align-middle"
                    aria-hidden="true"
                ></span>
                {reqular ? (
                    <div
                        className={`tw-inline-block tw-transform tw-overflow-auto tw-rounded-lg tw-bg-white tw-text-left tw-align-bottom tw-shadow-xl tw-transition-all sm:my-8 sm:tw-my-8 sm:tw-w-[50%] tw-sm:align-middle ${className}`}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div
                            onClick={onClose}
                            className="tw-flex tw-justify-between tw-cursor-pointer tw-p-4"
                        >
                            <div className="tw-font-bold tw-text-xl">
                                {title}
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="tw-w-6 tw-h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>

                        {children}
                    </div>
                ) : (
                    <div
                        className={`tw-inline-block tw-z-[200] tw-h-[40rem] tw-transform tw-overflow-auto tw-rounded-lg tw-bg-white tw-text-left tw-align-bottom tw-shadow-xl tw-transition-all sm:tw-my-8 sm:tw-w-[80%] sm:tw-align-middle ${className}`}
                        // className={`inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle ${className}`}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div
                            onClick={onClose}
                            className="tw-flex tw-justify-between tw-cursor-pointer tw-p-4"
                        >
                            <div className="tw-font-bold tw-text-xl">
                                {title}
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="tw-w-6 tw-h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>

                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
