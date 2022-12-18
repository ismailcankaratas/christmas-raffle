import Snowfall from "react-snowfall";
import Footer from "./footer/footer";
import Header from "./header/header";
export default function Layout({ children }: any) {
    return (
        <>
            <Snowfall
                color="#ffffffb7"
                snowflakeCount={40}
            />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}