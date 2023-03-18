import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';
import { useEffect, useState } from 'react';
import Header from '@components/Header';
import Container from '@components/Container';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Container>
          <>
            <Header />
            <Component {...pageProps} />
          </>
        </Container>
      </ThemeProvider>
    </>
  );
}
