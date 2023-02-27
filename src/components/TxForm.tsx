import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

// import { DevTool } from "@hookform/devtools";
// import { useFormContext } from "react-hook-form";
// import { TxFormType } from "../lib/schema";
import { Run } from "./Run";
import Examples from "./Examples";
import Explorer from "./Explorer";
import GetModules from "./GetModules";
import AccountInput from "./AccountInput";
import SelectNetwork from "./SelectNetwork";
import ToggleWallet from "./ToggleWallet";

export default function TxForm() {
  // const { control } = useFormContext<TxFormType>();
  return (
    <HStack h="100%" alignItems="start">
      <Flex
        w="320px"
        borderRight="1px"
        borderColor="gray.700"
        padding="20px"
        h="100%"
        flexDirection="column"
      >
        <Heading size="lg">thala.run</Heading>
        <Examples />
        <GetModules />
      </Flex>
      <Flex flex={1} direction="column">
        <Flex padding={"20px"} gap="20px">
          <SelectNetwork />
          <AccountInput />
          <Explorer />
          <ToggleWallet />
        </Flex>
        <SimpleGrid columns={2} spacing={10} flex={1} padding="20px">
          <Run />
          {/* TODO: render smth else */}
          <Box></Box>
        </SimpleGrid>
      </Flex>
    </HStack>
  );
}
