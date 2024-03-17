import JoinButton from "../joinbutton";

export default function Header() {
    return (
        <div className="flex items-center justify-between w-5/6 mx-auto mt-12 mb-4">
            <div className="flex items-center">
                <a href="https://ismailcankaratas.com.tr/"
                    target="_blank"
                    className="">
                    <h1 className="text-2xl">
                        Yeni Yıl Çekilis
                        {" "}
                        <span
                            className="font-manrope font-bold text-xs"
                        >
                            {new Date().getFullYear()}
                        </span>
                    </h1>
                </a>
            </div>
            <div>
                <ul className="hidden md:flex gap-4">
                    <li>
                        <a href="#nasil-calisir">Nasıl Çalısır?</a>
                    </li>
                    <li>
                        <a href="">Kurallar</a>
                    </li>
                </ul>
            </div>
            <div className="hidden md:flex">
                <JoinButton />
            </div>
        </div>
    )
}