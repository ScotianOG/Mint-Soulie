// pages/_app.js
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SOLspace | Founders Collection</title>
        <meta
          name="description"
          content="SOLspace Founders Collection - Your gateway to advanced trading and AI-powered analytics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
