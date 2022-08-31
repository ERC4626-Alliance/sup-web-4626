import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { Children } from "react";

const structuredData = `{
  "@context": "https://schema.org/",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": ${process.env.NEXT_SEO_JLD_QUESTION || "What is ERC-4626?"},
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ${
          process.env.NEXT_SEO_JLD_ANSWER ||
          "ERC-4626 is a tokenized vault standard. Vaults are smart contracts that take in token deposits and do something with those tokens to provide token rewards to the depositor"
        }
      }
    },
    {
      "@type": "Question",
      "name": "WHY ERC-4626?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tokenized Vaults have a lack of standardization leading to diverse implementation details. A standard for tokenized Vaults will lower the integration effort" +
          " for yield - bearing vaults, while creating more consistent and robust implementation patterns."
      }
    }
  ]
}`;

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return <Html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}

export default CustomDocument;
