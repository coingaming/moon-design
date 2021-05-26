import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Moon Design System</title>
        <meta name="description" content="Moon Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-32 py-20">
        <h1 className="text-3xl">Moon Design System</h1>
      </main>
    </>
  );
}
