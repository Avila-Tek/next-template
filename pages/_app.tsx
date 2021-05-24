import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { init } from '../lib/sentry';
import '../styles.css';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  init();
}

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function MyApp({ Component, pageProps, err }: AppProps) {
  return (
    <>
      <Head>
        <title>Plantilla Next.js | Avila Tek</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;1,400&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} err={err} />
    </>
  );
}

export default MyApp;
