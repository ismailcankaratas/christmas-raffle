import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { Fragment, useState } from 'react'

export default function JoinModal({ isOpen, closeModal }: any) {
    const [schoolPart, setSchoolPart] = useState("");
    const [name, setName] = useState("");
    const [schoolNumber, setSchoolNumber] = useState("");
    const [errors, setErrors] = useState([]);

    async function handler() {
        const newErrors: any = [];
        if (!schoolPart || !name || !schoolNumber || schoolNumber.length < 9) {
            newErrors.push("Lütfen tüm alanları doldurun!")
        }
        setErrors(newErrors);

        if (newErrors.length > 0) { return; }

        const data = await axios.post(`/api/participants`, { schoolPart, name, schoolNumber });
        console.log(data);
    }

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
                                    Yılbası Çekilisine Katıl!
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-slate-300">
                                        Merhaba!
                                        Senin için dogru hediyeyi seçip verebilmesi için asagıdaki bilgileri hediye arkadasına iletecegiz.
                                        Lütfen tüm alanları doldur!
                                    </p>
                                </div>
                                <div className='mt-4 text-red-500'>
                                    {errors.length > 0 && errors.map((error: any) => error)}
                                </div>
                                <div>
                                    <form className='my-4'>
                                        <div className='w-full'>
                                            <label htmlFor="adsoyad" className='block mb-3 text-slate-200 text-md leading-none cursor-pointer'>
                                                Adınız Soyadınız
                                            </label>
                                            <input
                                                id={"adsoyad"}
                                                name={"adsoyad"}
                                                type={"text"}
                                                autoComplete="off"
                                                spellCheck="false"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>

                                        <div className='w-full mt-4'>
                                            <label htmlFor="schoolPart" className='block mb-3 text-slate-200 text-md leading-none cursor-pointer'>
                                                Okudugunuz Bölüm
                                            </label>
                                            <input
                                                id={"schoolPart"}
                                                name={"schoolPart"}
                                                type={"text"}
                                                autoComplete="off"
                                                spellCheck="false"
                                                value={schoolPart}
                                                onChange={(e) => setSchoolPart(e.target.value)}
                                            />
                                        </div>
                                        <div className='w-fulll mt-4 relative'>
                                            <label htmlFor="schoolnumber" className='block mb-3 text-slate-200 text-md leading-none cursor-pointer'>
                                                Okul Numaranız
                                            </label>
                                            <input
                                                id={"schoolnumber"}
                                                name={"schoolnumber"}
                                                type={"text"}
                                                autoComplete="off"
                                                spellCheck="false"
                                                value={schoolNumber}
                                                maxLength={9}
                                                placeholder="123456789"
                                                onChange={(e) => setSchoolNumber(e.target.value)}
                                            />
                                            <span className='absolute text-skin-primary right-1 top-9'>@stu.gedik.edu.tr</span>
                                        </div>
                                    </form>
                                </div>

                                <div className="flex justify-between mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
                                    >
                                        Kapat
                                    </button>
                                    <button
                                        className="inline-flex justify-center rounded-md border border-transparent bg-skin-primary px-4 py-2 text-sm font-medium text-white hover:bg-skin-secondary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={() => handler()}
                                    >
                                        Gönder
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}