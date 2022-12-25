import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Modal({ isOpen, closeModal, title, description, children, errors, success, submit }: any) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className=" relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex w-full min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-skin-green p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl font-medium leading-6 text-slate-200"
                                >
                                    {title}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-slate-300">
                                        {description}
                                    </p>
                                </div>
                                {(errors.length > 0) ? (
                                    <div className='mt-4 text-red-500'>
                                        {errors.map((error: any) => error)}
                                    </div>
                                ) : (success) && (
                                    <div className='mt-4 text-skin-primary'>
                                        {success}
                                    </div>
                                )}

                                <div>
                                    {children}
                                </div>

                                <div className="flex justify-between mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
                                    >
                                        Kapat
                                    </button>
                                    {submit && (
                                        <button
                                            className="inline-flex justify-center rounded-md border border-transparent bg-skin-primary px-4 py-2 text-sm font-medium text-white hover:bg-skin-secondary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={submit}
                                        >
                                            Gönder
                                        </button>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}