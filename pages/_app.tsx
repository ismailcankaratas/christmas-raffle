import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultSeo from '../src/components/layout/seo/default-seo';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successNotify = (message: any) => toast.success(message);
export const errorNotify = (message: any) => toast.error(message);

export default function App({ Component, pageProps }: AppProps) {
  const Noop = ({ children }: any) => <>{children}</>;
  const Layout = (Component as any).Layout || Noop;
  const router = useRouter();

  return (
    <Layout pageProps={pageProps}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />      <DefaultSeo />
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}
