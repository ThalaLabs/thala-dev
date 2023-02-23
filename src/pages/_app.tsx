import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import {
  ChakraProvider,
  Flex,
  HStack,
  Box,
  Link,
  VStack,
} from "@chakra-ui/react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { RiseWallet } from "@rise-wallet/wallet-adapter";
import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
import { SpikaWallet } from "@spika/aptos-plugin";
import { Analytics } from "@vercel/analytics/react";
import { MSafeWalletAdapter } from "msafe-plugin-wallet-adapter";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import theme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
            <Flex flexDirection="column" h="calc(100% - 200px)" flexGrow="1">
              <Component {...pageProps} />
            </Flex>
            <HStack
              borderTop="1px"
              borderColor="gray.700"
              spacing="20px"
              padding="20px"
              justifyContent={"center"}
            >
              <Link href="https://github.com/ThalaLabs/thala-run" isExternal>
                GitHub <ExternalLinkIcon mx="2px" />
              </Link>
              <Box>|</Box>
              <Link href="https://thala.fi" isExternal>
                Built by Thala Labs <ExternalLinkIcon mx="2px" />
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </AptosWalletAdapterProvider>
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
