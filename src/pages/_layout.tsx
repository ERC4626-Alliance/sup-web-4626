import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CssBaseline } from "@nextui-org/react";
import Head from "next/head";
import { PropsWithChildren } from "react";

export default function RootLayout(props: PropsWithChildren) {
  return (<html lang="en">
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
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
    {CssBaseline.flush()}
  </Head>
  <body>
  <Header />
  {props.children}
  <Footer />
  </body>
  </html>);
}
