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
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <Heading>
        {isDark ? (
          <Image src={whiteLogo} width={320} height={50} alt="full-black-logo" />
        ) : (
          <Image src={blackLogo} width={320} height={50} alt="full-white-logo" />
        )}
      </Heading>
    </Flex>
  );
};
