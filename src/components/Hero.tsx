import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

import blackLogo from "../assets/logos/fullBlackLogo.svg";
import whiteLogo from "../assets/logos/fullWhiteLogo.svg";

export const Hero = ({ title }: { title: string }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <Heading>
        <Image src={isDark ? whiteLogo : blackLogo} width={320} height={50} alt="thala-logo" />
      </Heading>
    </Flex>
  );
};
