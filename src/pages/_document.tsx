import { CssBaseline } from "@nextui-org/react";
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { Children } from "react";

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps, styles: Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (<Html lang="en">
      <Head>
        <Script async={true} src="://platform.twitter.com/widgets.js" />
        {CssBaseline.flush()}
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>);
  }
}

export default CustomDocument;
