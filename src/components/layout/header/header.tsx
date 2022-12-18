import Image from "next/image";
export default function Header() {
    return (
        <div className="flex items-center justify-between w-5/6 mx-auto mt-12 mb-4">
            <div className="flex items-center">
                <Image src="/assets/images/inovasyon.png" alt=""
                    width="75"
                    height="75"
                />
                <div className="hidden md:flex flex-col text-center">
                    <h1 className="text-2xl">Gedik Yeni Yıl</h1>

                    <a href="https://www.gedik.edu.tr/hakkimizda/idari-birimler/saglik-kultur-ve-spor-daire-baskanligi/inovasyon-kulubu"
                        className="font-manrope font-bold text-xs text-[#74a4fd]"
                        target="_blank">
                        İnovasynon Kulübü
                    </a>

                </div>
            </div>
            <div>
                <ul className="hidden md:flex gap-4">
                    <li>
                        <a href="">Nasıl Çalışır</a>
                    </li>
                    <li>
                        <a href="">Kurallar</a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="" className="bg-skin-secondary py-4 px-8 rounded-lg">Çekilişe Katıl</a>
            </div>
        </div>
    )
}