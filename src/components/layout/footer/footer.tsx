import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs"

export default function Footer() {
    return (
        <div className="bg-skin-secondary">
            <div className="flex justify-between w-5/6 mx-auto py-12">
                <div className="font-manrope text-xl font-bold">
                    <h2>INOVASYON</h2>
                    <p className="text-lg">Yenilik peşinde koşan kulüp</p>
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://twitter.com/iguinovasyon" target="_blank">
                        <BsTwitter className="text-3xl" />
                    </a>
                    <a href="https://www.linkedin.com/company/iguinovasyon/" target="_blank">
                        <BsLinkedin className="text-3xl" />
                    </a>
                    <a href="https://www.instagram.com/iguinovasyon/" target="_blank">
                        <BsInstagram className="text-3xl" />
                    </a>
                </div>
            </div>

        </div>
    )
}