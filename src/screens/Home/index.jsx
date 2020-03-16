import React from "react";
import NavBar from "./../../components/Statics/navBar";
import Sliders from "./../../components/Slider";
import Payments from "./../../components/Payments";
import testSlide from "./../../assets/image/baner_1.webp";
import testSlideResponsive from "./../../assets/image/movil_baner_1.webp";
import "./style.css";
import { isMobile } from "react-device-detect";

const Home = () => {
  const url = isMobile ? testSlideResponsive : testSlide;
  const images = [{ url: url }, { url: url }];
  const size = { w: 70, u: "%" };
  return (
    <section className="home">
      <NavBar />
      <Sliders data={images} size={size} />
      <Payments />
      <Sliders data={images} size={size} />
    </section>
  );
};

export default Home;