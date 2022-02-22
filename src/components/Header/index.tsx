import Link from "next/link";
import { Box, Flex, Icon, Image } from "@chakra-ui/react";

import { BsChevronLeft } from "react-icons/bs";

interface HeaderProps {
  isButtonBack?: boolean;
}

export function Header({ isButtonBack = false }: HeaderProps) {
  return (
    <Flex
      w={"100%"}
      as={"header"}
      marginX={"auto"}
      maxWidth={"1160px"}
      alignItems={"center"}
      py={["15px", "15px", "27px"]}
      px={["22px", "22px", "16px", "0"]}
    >
      <Flex flexBasis="calc(100% / 3)" alignItems="center">
        {isButtonBack && (
          <Link href="/" passHref>
            <Icon
              cursor={"pointer"}
              color={"gray.700"}
              as={BsChevronLeft}
              width={["12px", "16px", "20px"]}
              height={["12px", "16px", "20px"]}
            />
          </Link>
        )}
      </Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexBasis={"calc(100% / 3)"}
      >
        <Box maxWidth={["81px", "130px", "fit-content"]}>
          <picture>
            <source
              media="(max-width: 478px)"
              srcSet="/assets/logo/logo-mobile.png"
            />
            <Image src="/assets/logo/logo-desktop.png" alt="Logo WorldTrip" />
          </picture>
        </Box>
      </Flex>
    </Flex>
  );
}
