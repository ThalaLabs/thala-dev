import { HStack, Box, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Footer = () => {
  return (
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
  );
};
