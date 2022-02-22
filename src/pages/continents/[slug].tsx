import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";

import { BsInfoCircle } from "react-icons/bs";

import { ContinentProps } from "../../types";
import { getContinent } from "../../utils/request";

export default function ContinentPreview({ slug }: any) {
  const [continent, setContinent] = useState({} as ContinentProps);

  useEffect(() => {
    async function fetch() {
      let response = await getContinent(slug);
      setContinent(response);
    }

    fetch();
  }, [slug]);

  return (
    <>
      <Head>
        <title>{continent.name} | Worldtrip</title>
      </Head>

      <Header isButtonBack />

      {continent.details && (
        <main>
          <Box position="relative">
            <Image
              src={continent.details.image}
              alt={continent.name}
              objectFit={"cover"}
              minHeight={"150px"}
              maxHeight={"298px"}
              width={"100%"}
            />
            <Text
              left={"50%"}
              color={"gray.50"}
              maxWidth={"1192px"}
              position={"absolute"}
              fontWeight={"semibold"}
              mx={["0px", "0px", "16px"]}
              width={["auto", "auto", "calc(100% - 32px)"]}
              fontSize={["28px", "28px", "48px"]}
              lineHeight={["42px", "42px", "72px"]}
              bottom={["50%", "50%", "12.5%", "12.5%"]}
              transform={[
                "translateX(-50%) translateY(50%)",
                "translateX(-50%) translateY(50%)",
                "translateX(-50%) translateY(0)",
              ]}
            >
              {continent.name}
            </Text>
          </Box>

          <Flex
            mx={"auto"}
            mt={["24px", "24px", "24px", "80px"]}
            mb={["32px", "32px", "32px", "80px"]}
            maxWidth={"1192px"}
            alignItems={["center"]}
            justifyContent={"space-between"}
            flexDirection={["column", "column", "row", "row"]}
          >
            <Box
              mx={"16px"}
              mb={["16px", "16px", "0", "0"]}
              maxW={["max-content", "max-content", "500px", "600px"]}
            >
              <Text
                fontSize={["14px", "14px", "14px", "24px"]}
                lineHeight={["21px", "21px", "21px", "36px"]}
                textAlign={"justify"}
              >
                {continent.details.description}
              </Text>
            </Box>
            <Flex mr={["0px", "0px", "16px", "0px"]}>
              <Box textAlign={["left", "left", "left", "center"]} mr="42px">
                <Text
                  color="yellow.600"
                  fontWeight={"semibold"}
                  fontSize={["24px", "24px", "24px", "48px"]}
                  lineHeight={["36px", "36px", "36px", "72px"]}
                >
                  {continent.details.countries}
                </Text>
                <Text
                  fontSize={["18px", "18px", "18px", "24px"]}
                  lineHeight={["27px", "27px", "27px", "36px"]}
                  fontWeight={["normal", "normal", "normal", "semibold"]}
                >
                  países
                </Text>
              </Box>
              <Box textAlign={["left", "left", "left", "center"]} mr="42px">
                <Text
                  color="yellow.600"
                  fontWeight={"semibold"}
                  fontSize={["24px", "24px", "24px", "48px"]}
                  lineHeight={["36px", "36px", "36px", "72px"]}
                >
                  {continent.details.languages}
                </Text>
                <Text
                  fontSize={["18px", "18px", "18px", "24px"]}
                  lineHeight={["27px", "27px", "27px", "36px"]}
                  fontWeight={["normal", "normal", "normal", "semibold"]}
                >
                  línguas
                </Text>
              </Box>
              <Box textAlign={["left", "left", "left", "center"]}>
                <Text
                  color="yellow.600"
                  fontWeight={"semibold"}
                  fontSize={["24px", "24px", "24px", "48px"]}
                  lineHeight={["36px", "36px", "36px", "72px"]}
                >
                  {continent.details.cities}
                </Text>
                <Flex
                  alignItems={"center"}
                  fontSize={["18px", "18px", "18px", "24px"]}
                  lineHeight={["27px", "27px", "27px", "36px"]}
                  fontWeight={["normal", "normal", "normal", "semibold"]}
                >
                  <Text mr={"5px"} whiteSpace={"nowrap"}>
                    cidades +100
                  </Text>
                  <Text as={"span"} lineHeight={"14px"} cursor={"pointer"}>
                    <Icon
                      width={"14px"}
                      height={"14px"}
                      as={BsInfoCircle}
                      color={"#99999980"}
                    />
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Flex>

          <Box mx={"auto"} maxWidth={"1192px"} pb={"35px"}>
            <Text
              mx={"16px"}
              mb={["20px", "20px", "20px", "40px"]}
              fontSize={["24px", "24px", "24px", "36px"]}
              lineHeight={["36px", "36px", "36px", "54px"]}
            >
              Cidades +100
            </Text>
            <Grid
              px={"16px"}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              width={"fit-content"}
              mx={["auto", "auto", "auto", "0"]}
              gap={["20px", "30px", "45px", "45px"]}
            >
              {continent.countries.map((value, index) => (
                <GridItem
                  key={index}
                  maxWidth={"256px"}
                  border={"1px solid"}
                  borderColor={"yellow.600"}
                  borderRadius={"4px"}
                >
                  <Box margin={"-1px"}>
                    <Image
                      borderRadius={"4px 4px 0 0"}
                      objectFit={"cover"}
                      src={value.image}
                      height={"173px"}
                      width={"100%"}
                      alt="Londres"
                    />
                  </Box>
                  <Flex
                    px={"24px"}
                    pt={"18px"}
                    pb={"25px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Text
                        mb={"12px"}
                        fontSize={"18px"}
                        fontWeight={"semibold"}
                        lineHeight={"25px"}
                      >
                        {value.city}
                      </Text>
                      <Text
                        fontSize={"15px"}
                        fontWeight={"medium"}
                        lineHeight={"26px"}
                        color={"gray.600"}
                      >
                        {value.country}
                      </Text>
                    </Box>
                    <Image
                      src={value.flag}
                      alt={value.country}
                      objectFit={"cover"}
                      borderRadius={"100%"}
                      height={"30px"}
                      width={"30px"}
                    />
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </main>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  return {
    props: {
      slug,
    },
  };
};
