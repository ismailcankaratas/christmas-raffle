import Image from "next/image";
import JoinButton from "../joinbutton";
export default function Header() {
    return (
        <div className="flex items-center justify-between w-5/6 mx-auto mt-12 mb-4">
            <div className="flex items-center">
                <Image src="/assets/images/inovasyon.png" alt=""
                    width="75"
                    height="75"
                />
                <a href="https://www.gedik.edu.tr/hakkimizda/idari-birimler/saglik-kultur-ve-spor-daire-baskanligi/inovasyon-kulubu"
                    target="_blank"
                    className="hidden md:flex flex-col text-center">
                    <h1 className="text-2xl">Gedik Yeni Yıl</h1>

                    <span
                        className="font-manrope font-bold text-xs"
                    >
                        İnovasyon Kulübü
                    </span>

                </a>
            </div>
            <div>
                <ul className="hidden md:flex gap-4">
                    <li>
                        <a href="">Nasıl Çalışır?</a>
                    </li>
                    <li>
                        <a href="">Kurallar</a>
                    </li>
                </ul>
            </div>
            <div>
                <JoinButton />
            </div>
        </div>
    )
}