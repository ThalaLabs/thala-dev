import {
  Link as ChakraLink,
  Text,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";

const Index = () => (
  <Container height="100vh">
    <Hero title="thala.dev" />
    <Main>
      <Text color="gray.500">
        At Thala Labs, one of our core principles is to build, publish, and
        maintain open-source software. With OSS, we aim to advance the Move
        language's development to foster greater developer adoption and
        applications built on top of{" "}
        <ChakraLink
          href="https://docs.thala.fi/thala-protocol-design/move-dollar-mod/stablecoin"
          color="purple.500"
          isExternal
        >
          Move Dollar
        </ChakraLink>{" "}
        and{" "}
        <ChakraLink
          href="https://docs.thala.fi/thala-protocol-design/thala-swap/pool-types"
          color="purple.500"
          isExternal
        >
          ThalaSwap
        </ChakraLink>
        . Here are what we build:
      </Text>

      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={ExternalLinkIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://run.thala.dev"
            flexGrow={1}
            mr={2}
          >
            Thala Run: Etherscan's Write Contract, but for Aptos
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={ExternalLinkIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://faucet.thala.dev"
            flexGrow={1}
            mr={2}
          >
            Thala Faucet: Claim extraordinary sums of testnet BTC, ETH, USDC,
            etc on Aptos
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={ExternalLinkIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://github.com/ThalaLabs/fixed_point64"
            flexGrow={1}
            mr={2}
          >
            Thala FixedPoint64: Precise FixedPoint64 Math Library
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <ChakraLink isExternal href="https://thala.fi">
        By Thala Labs <ExternalLinkIcon />
      </ChakraLink>
    </Footer>
  </Container>
);

export default Index;
