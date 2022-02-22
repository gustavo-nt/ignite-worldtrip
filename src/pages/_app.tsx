import { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChakraProvider>
  );
}

export default MyApp;
