import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import LoadingScreen from 'sections/LoadingScreen';
import './global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.pathname) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    };
    const handleComplete = () => {
      setTimeout(() => setLoading(false), 2000);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return loading ? <LoadingScreen /> : <Component {...pageProps} />;
}
