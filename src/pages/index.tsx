import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";

import { Container } from "../components/Container";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";

const Index = () => (
  <Container
    minHeight="100vh"
    display="flex"
    flexDir="column"
    justifyContent="center"
    py="3rem"
  >
    <Hero title="thala.dev" />
    <Main>
      <Text color="gray.500">
        One of our core principles is to build, publish, and maintain
        open-source software. With OSS, we aim to advance the Move
        language&apos;s development to foster greater developer adoption and
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
        . Here&apos;s what we&apos;ve built:
      </Text>

      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={ExternalLinkIcon} color="green.500" />
          <ChakraLink isExternal href="/run" flexGrow={1} mr={2}>
            Thala Run: Etherscan&apos;s Write Contract, but for Aptos
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={ExternalLinkIcon} color="green.500" />
          <ChakraLink isExternal href="/faucet" flexGrow={1} mr={2}>
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
  </Container>
);

export default Index;
