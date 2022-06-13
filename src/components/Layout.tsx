import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:widgets:csp" content="on" />
        <meta name="twitter:dnt" content="on" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#EC4899" />
        {/**
         * Notice the use of %PUBLIC_URL% in the tags above.
         * It will be replaced with the URL of the `public` folder during the build.
         * Only files inside the `public` folder can be referenced from the HTML.
         *
         * Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
         * work correctly both with client-side routing and a non-root public URL.
         * Learn how to configure a non-root public URL by running `npm run build`.
         **/}
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <Header />
      <main className="min-h-screen max-w-[100vw] overflow-x-hidden bg-white md:max-w-none md:overflow-auto">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
