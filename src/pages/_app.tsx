import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { ChakraProvider } from "@chakra-ui/react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { RiseWallet } from "@rise-wallet/wallet-adapter";
import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
import { SpikaWallet } from "@spika/aptos-plugin";
import { Analytics } from "@vercel/analytics/react";
import { MSafeWalletAdapter } from "msafe-plugin-wallet-adapter";

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
        <Component {...pageProps} />
      </AptosWalletAdapterProvider>
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
