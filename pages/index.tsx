import Image from "next/image";
import Layout from "../src/components/layout"

export default function Home() {
  function countDown() {
    const date = new Date();
    return 31 - date.getDate();
  }
  return (
    <>
      <div className="w-full flex-col md:flex-row flex items-center px-4 lg:px-12">
        <div className="flex-[1]">
          <Image
            src="/assets/images/noelbaba.png"
            alt="Noel Baba"
            width="700"
            height="700"
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="flex text-center flex-col gap-4 flex-[1] h-2/3">
          <h2 className="text-4xl lg:text-7xl">Yılbası cekilisi icin son
            <div className="inline-flex bg-skin-secondary p-4 my-4 mx-2 rounded-full">{countDown()}</div>
            gün</h2>
          <p className="my-4 lg:text-xl">
            Yeni yılın ilk hediyesi bir <span className="text-skin-text">gedikliden</span> gelsin,
            yeni yıl güzel bir arkadaşlıkla başlasın ister misin?
            O halde Hemen Katıl’a tıkla,
            bilgilerini doldur ve 31 Aralık’ta algoritmamız seni yeni yıl arkadaşınla eşlesin!
          </p>
        </div>
      </div>
    </>
  )
}

Home.Layout = Layout;
