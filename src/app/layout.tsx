"use client";

import { ColorModeScript } from "@chakra-ui/react";

import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { RiseWallet } from "@rise-wallet/wallet-adapter";
import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
import { SpikaWallet } from "@spika/aptos-plugin";
import { Analytics } from "@vercel/analytics/react";
import { MSafeWalletAdapter } from "msafe-plugin-wallet-adapter";

import { Footer } from "../components/Footer";
import theme from "../theme";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta property="og:title" content="Thala OSS" />
        <meta
          property="og:description"
          content="One of our core principles is to build, publish, and maintain open-source software"
        />
        <meta property="og:image" content="https://www.thala.dev/thala.png" />
      </head>
      <body>
        {/* Make Color mode to persists when you refresh the page. */}
        <ColorModeScript />
        <ChakraProvider theme={theme}>
          <AptosWalletAdapterProvider
            plugins={[
              new PetraWallet(),
              new PontemWallet(),
              new MartianWallet(),
              new RiseWallet(),
              new TrustWallet(),
              new SpikaWallet(),
              new MSafeWalletAdapter(),
            ]}
            autoConnect={true}
          >
            <Flex h="100vh">
              <Flex h="100%" w="100%" flexDirection="column" overflow="auto">
                <Flex
                  flexDirection="column"
                  h="calc(100% - 200px)"
                  flexGrow="1"
                >
                  {children}
                </Flex>
                <Footer />
              </Flex>
            </Flex>
          </AptosWalletAdapterProvider>
          <Analytics />
        </ChakraProvider>
      </body>
    </html>
  );
}
