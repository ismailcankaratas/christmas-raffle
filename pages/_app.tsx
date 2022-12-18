import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultSeo from '../src/components/layout/seo/default-seo';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const Noop = ({ children }: any) => <>{children}</>;
  const Layout = (Component as any).Layout || Noop;
  const router = useRouter();
  return (
    <Layout pageProps={pageProps}>
      <DefaultSeo />
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}
