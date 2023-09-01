import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function MyModal(props: {
    title: string,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
}) {

    function closeModal() {
        props.setIsOpen(false)
    }


    return (
        <>
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog as="div" className="tw-relative tw-z-[9999] tw-w-[500px]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="tw-ease-out tw-duration-300"
                        enterFrom="tw-opacity-0"
                        enterTo="tw-opacity-100"
                        leave="tw-ease-in tw-duration-200"
                        leaveFrom="tw-opacity-100"
                        leaveTo="tw-opacity-0"
                    >
                        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-25" />
                    </Transition.Child>

                    <div className="tw-fixed tw-inset-0 tw-overflow-y-auto">
                        <div className="tw-flex tw-min-h-full tw-items-center tw-justify-center tw-p-4 tw-text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="tw-ease-out tw-duration-300"
                                enterFrom="tw-opacity-0 tw-scale-95"
                                enterTo="tw-opacity-100 tw-scale-100"
                                leave="tw-ease-in tw-duration-200"
                                leaveFrom="tw-opacity-100 tw-scale-100"
                                leaveTo="tw-opacity-0 tw-scale-95"
                            >
                                {/* <Dialog.Panel className="tw-max-w-6xl tw-transform tw-overflow-hidden tw-rounded-2xl tw-bg-white tw-p-6 tw-text-left tw-align-middle tw-shadow-xl tw-transition-all"> */}
                                <Dialog.Panel className="tw-bg-white tw-shadow-xl tw-transition-all tw-rounded-2xl tw-p-6">
                                    <Dialog.Title
                                        as="h3"
                                        className="tw-text-lg tw-font-bold tw-text-right tw-mb-8 tw-leading-6 tw-text-gray-900"
                                    >
                                        {props.title}
                                    </Dialog.Title>
                                    <div className="tw-mt-2">
                                        {props.children}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}