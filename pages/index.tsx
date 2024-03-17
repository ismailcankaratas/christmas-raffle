import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Layout from "../src/components/layout"
import Hero from "../src/components/layout/hero/hero";
import { API_ENDPOINTS } from "../src/components/utils/api-endpoints";
import Work from "../src/components/work";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.key) {
      verifyMail(router.query.key)
    }
    async function verifyMail(key: any) {
      try {
        const { data } = await axios.post(API_ENDPOINTS.MAIL_VERIFY, { key });
        router.push(router.pathname);
        if (!data.status) {
          return toast.error(data.message);
        }
        return toast.success(`Tekbrikler ${data.user.name}, çekilise katıldınız.`)
      } catch (error: any) {
        return toast.error(error.message);
      }
    }
  }, [router.query]);
  return (
    <>
      <Hero />
      <Work />
    </>
  )
}

Home.Layout = Layout;
