import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
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

  return loading ? <LoadingScreen /> : <Component {...pageProps} />;
}
