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
    <Hero />
    <Main>
      <Text color="gray.500">
        Because Open Source plays a major part in how we build our products, we
        at Thala Labs see it as a matter of course to give the same effort back
        to our community by creating valuable, free and easy-to-use software.
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
            thala.run: Think Etherscan's Write Contract, but for Aptos
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
            thala.tap: Claim MANY testnet BTC, ETH, USDC, etc on Aptos
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
