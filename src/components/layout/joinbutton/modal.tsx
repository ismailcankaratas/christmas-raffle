import axios from 'axios';
import { useState } from 'react'
import Modal from '../modal/modal';

export default function JoinModal({ isOpen, closeModal }: any) {
    const [name, setName] = useState("");
    const [schoolNumber, setSchoolNumber] = useState("");
    const [schoolPart, setSchoolPart] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");

    async function handler() {
        const newErrors: any = [];
        let newSuccess: string = "";

        if (!schoolPart || !name || !schoolNumber || schoolNumber.length < 9) {
            newErrors.push("Lütfen tüm alanları doldurun!")
            setErrors(newErrors);
        }
        if (newErrors.length > 0) { return; }

        const { data } = await axios.post(`/api/participants`, { schoolPart, name, schoolNumber });
        if (data.status == false) {
            newErrors.push(data.message)
        }
        setErrors(newErrors);
        if (newErrors.length > 0) { return; }
        newSuccess = `${schoolNumber}@stu.gedik.edu.tr mail adresinize gelen linke tıklayarak çekilişe katılmak için son adımı tamamlayabilirsiniz`
        setSuccess(newSuccess);
    }
    const description = `Merhaba!
 Senin için dogru hediyeyi seçip verebilmesi için asagıdaki bilgileri hediye arkadasına iletecegiz.
 Lütfen tüm alanları doldur!`
    return (
        <Modal
            title={"Yılbası Çekilisine Katıl!"}
            description={description}
            isOpen={isOpen} closeModal={closeModal} errors={errors} success={success} submit={handler}>
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
        </Modal>

    )
}