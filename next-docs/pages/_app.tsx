import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* TODO Add favicon.ico*/}
      <Head>
        <title>Moon Design System</title>
        <meta name="description" content="Moon Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
