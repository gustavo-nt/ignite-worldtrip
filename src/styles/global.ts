import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  .swiper-pagination .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    background-color: #999999;
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background-color: #ffba08;
  }

  @media screen and (max-width: 768px) {
    .swiper-pagination .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
    }
  }
`;
