import Head from "next/head";
import Link from "next/link";

import { Header } from "../components/Header";
import { Navigation as NavigationComponent } from "../components/Navigation";

import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

export default function Home() {
  const countries = [
    {
      slug: "europe",
      title: "Europa",
      info: "O continente mais antigo",
      img: "/assets/carrousel/europe.png",
    },
    {
      slug: "asia",
      title: "Ásia",
      info: "O continente tecnológico",
      img: "/assets/carrousel/asia.png",
    },
  ];

  SwiperCore.use([Autoplay, Navigation, Pagination]);

  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Header />

      <Box
        w={"100%"}
        marginX={"auto"}
        paddingTop={["28px", "28px", "80px"]}
        paddingBottom={["28px", "28px", "70px"]}
        backgroundImage={"/assets/banner/backdrop-banner.png"}
        backgroundSize={"cover"}
      >
        <Flex
          justifyContent={"space-between"}
          position={"relative"}
          maxWidth={"1160px"}
          px={"16px"}
          mx={"auto"}
          w={"100%"}
        >
          <Box>
            <Text
              color={"gray.50"}
              fontWeight={"medium"}
              fontSize={["20px", "20px", "36px"]}
              marginBottom={["8px", "8px", "20px"]}
              lineHeight={["30px", "30px", "54px"]}
            >
              5 Continentes,
              <Text as={"span"} display={"block"}>
                infinitas possibilidades.
              </Text>
            </Text>
            <Text
              maxWidth={"524px"}
              color={"gray.150"}
              fontWeight={"normal"}
              fontSize={["14px", "14px", "20px"]}
              lineHeight={["21px", "21px", "30px"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Box
            position={"absolute"}
            right={"16px"}
            bottom={"-100px"}
            display={["none", "", "", "block"]}
          >
            <Image src="/assets/banner/airplane.png" alt="Airplane" />
          </Box>
        </Flex>
      </Box>

      <NavigationComponent />

      <Box mx={"auto"} maxWidth={"1160px"}>
        <Box
          textAlign={"center"}
          justifyContent={"center"}
          mt={["24px", "24px", "52px"]}
          mb={["20px", "20px", "52px"]}
        >
          <Text
            fontWeight={"medium"}
            fontSize={["20px", "20px", "36px"]}
            lineHeight={["30px", "30px", "54px"]}
          >
            Vamos nessa?
            <Text as={"span"} display={"block"}>
              Então escolha seu continente
            </Text>
          </Text>
        </Box>

        <Box
          position={"relative"}
          px={["0", "0", "16px", "0"]}
          mb={["24px", "24px", "40px"]}
        >
          <Box
            cursor={"pointer"}
            position={"absolute"}
            id="pagination-prevEl"
            left={["10px", "10px", "32px"]}
            transform={"translateY(-50%)"}
            height={"30px"}
            zIndex={"2"}
            top={"50%"}
          >
            <Icon
              width="30px"
              height="30px"
              color="yellow.600"
              as={BsChevronLeft}
            />
          </Box>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: "#pagination-nextEl",
              prevEl: "#pagination-prevEl",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            {countries.map((item) => (
              <SwiperSlide key={item.slug}>
                <Link href={`/continents/${item.slug}`} passHref>
                  <Box cursor="pointer">
                    <Image
                      width={"100%"}
                      src={item.img}
                      alt={item.title}
                      minHeight={"240px"}
                      maxHeight={"299px"}
                      borderRadius={["0", "0", "8px"]}
                      height={["240px", "auto", "auto", "450px"]}
                    />
                    <Box
                      top={"50%"}
                      left={"50%"}
                      textAlign={"center"}
                      position={"absolute"}
                      transform={"translateX(-50%) translateY(-50%)"}
                    >
                      <Text
                        color={"gray.50"}
                        fontWeight={"bold"}
                        fontSize={["24px", "24px", "48px"]}
                        lineHeight={["36px", "36px", "72px"]}
                      >
                        {item.title}
                      </Text>
                      <Text
                        color={"gray.150"}
                        fontWeight={"normal"}
                        whiteSpace={"nowrap"}
                        fontSize={["14px", "14px", "24px"]}
                        lineHeight={["21px", "21px", "36px"]}
                      >
                        {item.info}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <Box
            cursor={"pointer"}
            position={"absolute"}
            id="pagination-nextEl"
            right={["10px", "10px", "32px"]}
            transform={"translateY(-50%)"}
            height={"30px"}
            zIndex={"2"}
            top={"50%"}
          >
            <Icon
              width={"30px"}
              height={"30px"}
              as={BsChevronRight}
              color={"yellow.600"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
