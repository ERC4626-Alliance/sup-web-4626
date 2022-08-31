import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { Question, Answer } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import { Children } from "react";

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            {...jsonLdScriptProps<Question>({
              "@context": "https://schema.org",
              "@type": "Question",
              name: process.env.NEXT_SEO_JLD_QUESTION
                ? process.env.NEXT_SEO_JLD_QUESTION
                : "What is ERC-4626?",
              answerCount: 1,
              acceptedAnswer: {
                "@type": "Answer",
                text: process.env.NEXT_SEO_JLD_ANSWER
                  ? process.env.NEXT_SEO_JLD_ANSWER
                  : "ERC-4626 is a tokenized vault standard. Vaults are smart contracts that take in" +
                    " token deposits and do something with" +
                    " those tokens to provide token rewards to the depositor",
              } as Answer,
            })}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
