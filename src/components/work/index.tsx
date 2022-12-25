import Image from "next/image";

export default function Work() {
    return (
        <div id="#nasil-calisir" className="flex flex-col md:flex-row items-center w-5/6 mx-auto mt-12 mb-4">
            <div className="flex-[1]">
                <h3 className="text-3xl mb-12">Nasıl Çalısır</h3>
                <p className="mb-4">
                    Sistem, yılbaşı çekilişine katılan gediklilerin geliştirdiğimiz bir algoritma ile eşleştirilmesi ve birbirlerine alacakları sürpriz hediyelerle tanışmasına dayanıyor.
                </p>
                <p className="mb-4">
                    Çekilişe katılmak isteyenler yukarıdaki Çekilişe Katıl'a tıklayıp bilgilerini dolduruyor ve okul maillerine gelen linke tıklayıp doğrulama yapıyor. Hepsi bu kadar.
                </p>
                <p className="mb-4">
                    Eşleşen katılımcıların okul mailleri her iki tarafla da paylaşılacak.
                </p>
                <p className="mb-4">
                    Hak verirsiniz ki hediyelerden İnovasyon Kulübü sorumlu değildir ve katılımcılar hakkında herhangi bir yaptırım, afişe etme gibi bir durum söz konusu olmayacak.
                    Ancak bu kişiler İnovasyon Kulübü hafızasında sonsuza dek "mızıkçı" olarak kalacak.
                </p>
                <p className="mb-4">
                    Hazırsanız yukarıdaki Çekilişe Katıl butonuna tıklayın ve daha ilk gününden yeni yılı birlikte güzelleştirelim!
                </p>
            </div>
            <div className="flex-[.5]">
                <Image
                    src="/assets/images/noelagaci.png"
                    alt="Noel Baba"
                    width="700"
                    height="700"
                    quality={100}
                    className="object-cover"
                />
            </div>
        </div>
    )
}