import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import LoadingScreen from 'sections/LoadingScreen';
import './global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.onreadystatechange = () => {
      setTimeout(() => {
        setLoading(document.readyState !== 'complete');
      }, 1000);
    };
  }, []);

  return (
    <>
      <Head>
        <title>T.E.A.M DAO</title>
      </Head>
      {loading && <LoadingScreen />}
      {!loading && <Component {...pageProps} />}
    </>
  );
}
