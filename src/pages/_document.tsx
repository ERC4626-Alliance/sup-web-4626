import { CssBaseline } from "@nextui-org/react";
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
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
