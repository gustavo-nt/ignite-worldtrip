import { Box, Flex, Icon, Text } from "@chakra-ui/react";

import Surf from "../../../public/assets/icons/surf.svg";
import Earth from "../../../public/assets/icons/earth.svg";
import Museum from "../../../public/assets/icons/museum.svg";
import Cocktail from "../../../public/assets/icons/cocktail.svg";
import Building from "../../../public/assets/icons/building.svg";

export function Navigation() {
  const arr = [
    { icon: Cocktail, text: "vida noturna" },
    { icon: Surf, text: "praia" },
    { icon: Building, text: "moderno" },
    { icon: Museum, text: "clássico" },
    { icon: Earth, text: "e mais..." },
  ];

  return (
    <Box
      w={"100%"}
      mx={"auto"}
      maxWidth={"1160px"}
      position={"relative"}
      px={["50px", "50px", ""]}
      display={["", "", "flex"]}
      pt={["9px", "9px", "114px"]}
      pb={["36px", "36px", "80px"]}
      alignItems={["", "", "center"]}
      justifyContent={["", "", "center"]}
      _after={{
        content: `""`,
        height: "2px",
        width: "90px",
        bg: "gray.700",
        position: "absolute",
        transform: "translateX(-50%)",
        bottom: "0",
        left: "50%",
      }}
    >
      <Box
        w={"100%"}
        px={["0", "0", "16px"]}
        display={["", "", "flex"]}
        textAlign={["center", "center", "left"]}
        justifyContent={["", "", "space-between"]}
      >
        {arr.map((item, index) => (
          <Box
            key={index}
            width={["50%", "50%", ""]}
            display={["inline-flex", "inline-flex", "flex"]}
            _even={{ justifyContent: ["flex-end", "flex-end", "flex-start"] }}
            _last={{ justifyContent: ["center", "center", "flex-start"] }}
            flexDirection={["row", "row", "column"]}
            alignItems={["", "", "center"]}
          >
            <Icon
              as={item.icon}
              width={"85px"}
              height={"85px"}
              display={["none", "none", "block"]}
            />
            <Flex mt={"24px"} alignItems={"center"}>
              <Box
                mt={"2px"}
                mr={"8px"}
                width={"8px"}
                height={"8px"}
                borderRadius={"100%"}
                background={"yellow.600"}
                display={["block", "block", "none"]}
              />
              <Text
                lineHeight={"36px"}
                fontWeight={"semibold"}
                fontSize={["18px", "18px", "24px"]}
              >
                {item.text}
              </Text>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
