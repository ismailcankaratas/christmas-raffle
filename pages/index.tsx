import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../src/components/layout"
import Hero from "../src/components/layout/hero/hero";
import { API_ENDPOINTS } from "../src/components/utils/api-endpoints";
import { errorNotify, successNotify } from "./_app";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.key) {
      verifyMail(router.query.key)
    }
    async function verifyMail(key: any) {
      const { data } = await axios.post(API_ENDPOINTS.MAIL_VERIFY, { key });
      if (!data.status) {
        return errorNotify(data.message);
      }
      successNotify(`Tekbrikler ${data.user.nameSurname}, çekilişe katıldınız.`)
    }
  }, [router.query]);
  return (
    <>
      <Hero />
    </>
  )
}

Home.Layout = Layout;
