import React from "react";
import NavBar from "./../../components/Statics/navBar";
import Sliders from "./../../components/Slider";
import Payments from "./../../components/Payments";
import testSlide from "./../../assets/image/banner4.webp";
import "./style.css";

const Home = () => {
  const images = [
    {url:testSlide}
  ];
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
