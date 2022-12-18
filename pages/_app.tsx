import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const Noop = ({ children }: any) => <>{children}</>;
  const Layout = (Component as any).Layout || Noop;
  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}
