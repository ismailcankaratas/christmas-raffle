import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs"

export default function Footer() {
    return (
        <div className="bg-skin-secondary">
            <div className="flex justify-between w-5/6 mx-auto py-12">
                <div className="font-manrope text-xl font-bold">
                    <h2>
                        Yeni Yıl Çekilis
                        {" "}
                        <span
                            className="font-manrope font-bold text-xs"
                        >
                            {new Date().getFullYear()}
                        </span>
                    </h2>
                    <a href="https://ismailcankaratas.com.tr/" className="text-lg underline">
                        İsmail Can Karataş
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://twitter.com/ismailcankarats" target="_blank">
                        <BsTwitter className="text-3xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/ismailcankaratas/" target="_blank">
                        <BsLinkedin className="text-3xl" />
                    </a>
                    <a href="https://github.com/ismailcankaratas" target="_blank">
                        <BsGithub className="text-3xl" />
                    </a>
                </div>
            </div>

        </div>
    )
}