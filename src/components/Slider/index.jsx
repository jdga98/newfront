import React from "react";
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";
import "./style.css";
import Styled from "styled-components";

const StyledWrapSwiper = Styled.div`
  width:${({ size }) => (size ? `${size.w}${size.u}` : "auto")};
  height:${({ size }) => (size ? `${size.h}${size.u}` : "auto")};
  margin:auto;
`;
const StyledWrapImg = Styled.div`
width:${({ cantImg }) => (cantImg ? cantImg : "auto")};
height:${({ cantImg }) => (cantImg ? cantImg : "auto")};
`;
const Sliders = ({ data, size, cantImg }) => {
  const params = {
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullet"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    lazy: {
      loadPrevNext: true
    }
  };
  return (
    <StyledWrapSwiper
      data={data}
      size={size}
      cantImg={cantImg}
      className="slider"
    >
      <Swiper {...params}>
        {data.map((item, index) => {
          return (
            <StyledWrapImg key={index} className="itemSlider">
              <img src={item.url} className="imgSlide" alt={`img-${index}`} />
            </StyledWrapImg>
          );
        })}
      </Swiper>
    </StyledWrapSwiper>
  );
};

export default Sliders;
