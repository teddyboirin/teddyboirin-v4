import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { AppProvider } from '@hooks/useApp';
import { ThemeProvider } from 'next-themes';

import Contact from '@components/Contact';
import Container from '@components/Container';
import Head from 'next/head';
import Header from '@components/Header';
import Menu from '@components/Menu';

import '../styles/globals.scss';

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
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Container>
          <AppProvider>
            <>
              <Contact />
              <Header />
              <Menu />
              <Component {...pageProps} />
            </>
          </AppProvider>
        </Container>

      </ThemeProvider>
    </>
  );
}
