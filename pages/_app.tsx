import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>hulu</title>
        <link rel="icon" href="/hulu.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
