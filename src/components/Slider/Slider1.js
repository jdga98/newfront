
import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import axios from "axios";
import { isMobile } from "react-device-detect";


var params;
var slidesView = 4.4555;
var space = 5;
var slidesGroup = 4.4555;
var free = true;
var slidesUpdate = true;
var allowTouchMove = true;


const Slider1 = ({ categoryId }) => {
  const [posts, setPosts] = useState([]);

   //get the data using categoryId from product-detail.js
  useEffect(() => {
    if(categoryId !== undefined)
    {
    axios
        .get("https://kieroapi.net/related/product/any/?id=" + categoryId)
        .then((response) => {
          setPosts(response.data.Resultados);
        })
        .catch(e => {
          //handle the error
          console.log("Error slider one:" + e);
        }); 
      }
  },[categoryId]);
  
   //set params for slider
  const slider = () => {

      params = {
          slidesPerView: slidesView,
          spaceBetween: space,
          slidesPerGroup: slidesGroup,
          freeMode: free,
          // loop: slideLoop,
          allowTouchMove: allowTouchMove,
          loopFillGroupWithBlank: true,
          shouldSwiperUpdate: slidesUpdate,

          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
          },

          breakpoints: {
              1024: {
                  slidesPerView: 4.04,
                  slidesPerGroup: 4,
                  spaceBetween: 5,
              },
              768: {
                  slidesPerView: 4.3555,
                  slidesPerGroup: 4.3555,
                  spaceBetween: 5,
              },
              640: {
                  slidesPerView: 4.3555,
                  slidesPerGroup: 4.3555,
                  spaceBetween: 5,
              },

              414: {
                  slidesPerView: 2.3666,
                  slidesPerGroup: 4.4666,
                  spaceBetween: 5,
              },

              375: {
                  slidesPerView: 2.1555,
                  slidesPerGroup: 1.3555,
                  spaceBetween: 5,
              },

              320: {
                  slidesPerView: 1.814,
                  slidesPerGroup: 2.2444,
                  spaceBetween: 5,
              }
          }
      }
  }
  //this function put the point to price
  function number_format_details(price_sale) {
    const pric = price_sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return pric;
  }

  //replace the blank space and put the -
  function title_format(title_format) {
    const title = title_format.toString().replace(/ /g, "-");
    return title;
  }
  //this config the slides if its mobile or no
  if (isMobile) {
    slider(slidesView);
  } else {
    slidesView = 4;
    space = 10;
    slidesGroup = 4;
    free = true;
    slidesUpdate = true;
    allowTouchMove = false;
    slider();
  }

  //here we travel the posts using map and the get the product id, the title, images and precio cop
  //*if you need to put a new api, you have to put the same values in the json */
  const list = posts.length ? (
    posts.map(post => {
      return (
        <div className="item-slide-products" key={post.Producto_Id}>
          <div className="item-image-container">
            <a
              href={
                "/product-details/?id-" + post.Producto_Id + "-" + title_format(post.Titulo)
              }
            >
              <img src={post.Imagenes_1} alt={post.Titulo} />
            </a>
          </div>
          <div className="content">
            <div className="item-price">
              <span className="item-symbol">$</span>
              <span className="price">
                {number_format_details(post.Precio_cop)}
              </span>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div className="products"></div>
  );
    
  //this changes
  if (isMobile) {
    return (
      <section className="slide-item-mb">
        <Swiper {...params}>{list}</Swiper>
      </section>
    );
  } else {
    return (
      <section className="slide-item">
        <Swiper {...params}>{list}</Swiper>
      </section>
    );
  }

};
export default Slider1;
