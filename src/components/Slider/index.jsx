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

const Sliders = ({ data, size }) => {
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
    <StyledWrapSwiper data={data} size={size}>
      <Swiper {...params}>
        {data.map((item, index) => {
          return (
            <div key={index} className="itemSlider">
              <img src={item.url} className="imgSlide" />
            </div>
          );
        })}
      </Swiper>
    </StyledWrapSwiper>
  );
};

export default Sliders;
