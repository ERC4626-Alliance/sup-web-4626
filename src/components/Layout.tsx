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
        {[57, 60, 72, 76, 114, 120, 144, 152, 180].map((size) => (
          <link
            key={`icon-apple-${size}`}
            rel="apple-touch-icon"
            sizes={`${size}x${size}`}
            href={`/apple-icon-${size}x${size}.png`}
          />
        ))}
        {[16, 32, 96].map((size) => (
          <link
            rel="icon"
            key={`favicon-${size}`}
            type="image/png"
            sizes={`${size}x${size}`}
            href={`/favicon-${size}x${size}.png`}
          />
        ))}
        <link
          key="icon-android"
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
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
      <main className="mx-auto min-h-screen max-w-[100vw] bg-white md:max-w-none">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
