import React, { useEffect, useState } from "react";
import axios from "axios";
import Lazyload from "lazyload";
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";

const Sliders = () => {
  const [img, setImg] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos", {
        headers: { "Content-Type": "aplication/json" }
      })
      .then(res => {
        setImg(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const dataImg = img != null ? [...img] : null;
  return <div>test</div>;
};

export default Sliders;
