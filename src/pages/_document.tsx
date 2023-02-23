import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Thala OSS" />
          <meta
            property="og:description"
            content="One of our core principles is to build, publish, and maintain open-source software."
          />
          <meta property="og:image" content="https://www.thala.dev/thala.png" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
