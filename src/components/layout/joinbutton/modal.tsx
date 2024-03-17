import axios from 'axios';
import { useState } from 'react'
import Modal from '../modal/modal';

export default function JoinModal({ isOpen, closeModal }: any) {
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");

    async function handler() {
        const newErrors: any = [];
        let newSuccess: string = "";

        if (!name || !email || email.length < 9) {
            newErrors.push("Lütfen tüm alanları doldurun!")
            setErrors(newErrors);
        }
        if (newErrors.length > 0) { return; }

        const { data } = await axios.post(`/api/participants`, { name, email });
        if (data.status == false) {
            newErrors.push(data.message)
        }
        setErrors(newErrors);
        if (newErrors.length > 0) { return; }
        newSuccess = `${email} email adresinize gelen linke tıklayarak çekilise katılmak için son adımı tamamlayabilirsiniz`
        setSuccess(newSuccess);
    }
    return (
        <Modal
            title="Yılbası Çekilisine Katıl!"
            description={`Merhaba!
            Senin için dogru hediyeyi seçip verebilmesi için asagıdaki bilgileri hediye arkadasına iletecegiz.
            Lütfen tüm alanları doldur!`}
            isOpen={isOpen} closeModal={closeModal} errors={errors} success={success} submit={handler}>
            <form className='my-4'>
                <div className='w-full'>
                    <label htmlFor="adsoyad" className='block mb-3 text-slate-200 text-md leading-none cursor-pointer'>
                        Adınız Soyadınız
                    </label>
                    <input
                        id="adsoyad"
                        name="adsoyad"
                        type="text"
                        autoComplete="off"
                        spellCheck="false"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='w-fulll mt-4'>
                    <label htmlFor="email" className='block mb-3 text-slate-200 text-md leading-none cursor-pointer'>
                        Mail Adresiniz
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="off"
                        spellCheck="false"
                        value={email}
                        onChange={(e) => setMail(e.target.value)}
                    />
                </div>
            </form>
        </Modal>

    )
}