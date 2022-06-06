import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://platform.twitter.com/widgets.js"/>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
}
