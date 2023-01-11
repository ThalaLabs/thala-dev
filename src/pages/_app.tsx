import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";

import theme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
