
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import JoinButton from "../joinbutton";

export default function Hero() {
    const [countDown, setCountDown] = useState(0);

    useEffect(() => {
        const currentDate: Date = new Date();
        const newYearDate: Date = new Date(currentDate.getFullYear(), 0, 1);

        if (currentDate > newYearDate) {
            newYearDate.setFullYear(currentDate.getFullYear() + 1);
        }

        const daysLeft: number = Math.ceil((newYearDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
        setCountDown(daysLeft);
    }, [])
    return (
        <>
            <div className="w-full flex-col md:flex-row flex items-center px-4 mb-12 lg:px-12 gap-4">
                <div className="flex-[1]">
                    <Image
                        src="/assets/images/noelbaba.png"
                        alt="Noel Baba"
                        width="450"
                        height="450"
                        quality={100}
                        className="object-cover mx-auto"
                    />
                </div>
                <div className="flex text-center flex-col gap-4 flex-[1] h-2/3">
                    <h2 className="text-4xl lg:text-7xl">Yılbası cekilisi icin son
                        <div className="inline-flex bg-skin-secondary p-2 px-6 my-4 mx-2 rounded-full">{countDown}</div>
                        gün</h2>
                    <p className="my-4 lg:text-xl">
                        Yeni yıl güzel bir arkadaslıkla baslasın ister misin?
                        O halde Hemen Katıl’a tıkla,
                        bilgilerini doldur ve 31 Aralık’ta algoritmamız seni yeni yıl arkadasınla eslesin!
                    </p>
                    <div className="flex gap-4 items-center justify-center">
                        <JoinButton />
                        <a href="">Nasıl Çalısır?</a>
                    </div>
                </div>
            </div>
        </>
    )
}