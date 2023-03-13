import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:widgets:csp" content="on" />
        <meta name="twitter:dnt" content="on" />
        <meta name="twitter:widgets:theme" content="dark" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1.1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1.1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1.1" />
        <link rel="manifest" href="/site.webmanifest?v=1.1" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1.1" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico?v=1.1" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/**
         * Notice the use of %PUBLIC_URL% in the tags above.
         * It will be replaced with the URL of the `public` folder during the build.
         * Only files inside the `public` folder can be referenced from the HTML.
         *
         * Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
         * work correctly both with client-side routing and a non-root public URL.
         * Learn how to configure a non-root public URL by running `npm run build`.
         **/}
      </Head>
      <Header />
      <main id="main-container" className="mx-auto mt-[106px] min-h-screen max-w-[100vw] md:max-w-none">
        {children}
      </main>
      <Footer />
    </>
  );
}