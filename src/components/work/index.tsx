import Image from "next/image";

export default function Work() {
    return (
        <div id="#nasil-calisir" className="flex flex-col md:flex-row items-center w-5/6 mx-auto mt-12 mb-4 gap-4">
            <div className="flex-[1]">
                <h3 className="text-3xl mb-12">Nasıl Çalısır</h3>
                <p className="mb-4">
                    Sistem, çekilişe katılanları gelistirdiğimiz bir algoritma ile eslestirilmesi ve birbirlerine alacakları sürpriz hediyelerle tanısmasına dayanıyor.
                </p>
                <p className="mb-4">
                    Çekilise katılmak isteyenler yukarıdaki Çekilise Katıl'a tıklayıp bilgilerini dolduruyor ve okul maillerine gelen linke tıklayıp doğrulama yapıyor. Hepsi bu kadar.
                </p>
                <p className="mb-4">
                    Eslesen katılımcıların okul mailleri her iki tarafla da paylasılacak.
                </p>
                <p className="mb-4">
                    Hak verirsiniz ki hediyelerden bizler sorumlu değiliz ve katılımcılar hakkında herhangi bir yaptırım, afise etme gibi bir durum söz konusu olmayacak.
                </p>
                <p className="mb-4">
                    Hazırsanız yukarıdaki Çekilise Katıl butonuna tıklayın ve daha ilk gününden yeni yılı birlikte güzellestirelim!
                </p>
            </div>
            <div className="flex-[.5]">
                <Image
                    src="/assets/images/noelagaci.png"
                    alt="Noel Baba"
                    width="350"
                    height="350"
                    quality={100}
                    className="object-cover ml-auto"
                />
            </div>
        </div>
    )
}