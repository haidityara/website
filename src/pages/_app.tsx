import type { AppProps } from 'next/app';
import Head from 'next/head';
import './global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>T.E.A.M DAO</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
