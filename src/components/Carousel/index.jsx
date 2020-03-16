import React from "react";
import Swiper from "react-id-swiper";
import { isMobile, isIOS } from "react-device-detect";
import LazyLoad from 'react-lazyload';

const Autoplay = () => {
  const params = {
    spaceBetween: 1,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
     lazy: {
    loadPrevNext: true,
  },
  };

  if (isMobile) {   
    
    return (
      <div>
        <div className="carousel">
          <Swiper {...params}>
            <div>
              {" "}
              <a href="https://listado.kiero.co/listcategory/?id-25599/#Componentes-de-computadora">
                <img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banners-apk.jpg':'https://images.kiero.co/images/CAROUSEL/banners-apk.webp'} 
                alt="componentes de computadora"  className="swiper-lazy"/>
              </a>              
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
            <div>
              <a href="https://listado.kiero.co/listcategory/?id-26249/#Seguridad-para-Beb%C3%A9s">
                <img 
                  src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banners-apk2.jpg':'https://images.kiero.co/images/CAROUSEL/banners-apk2.webp'} 
                  alt="seguridad par abebes"  
                  className="swiper-lazy"/>
              </a>              
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
            <div>
              <a href="https://listado.kiero.co/listcategory/?id-50142/#Drones-y-accesorios">
                <img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banners-apk3.jpg':'https://images.kiero.co/images/CAROUSEL/banners-apk3.webp'}
                 alt="drones y accesorios" 
                 className="swiper-lazy"/>
              </a>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
            <div>
              <a href="https://listado.kiero.co/listcategory/?id-23878/#Accesorios">
                <img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banners-apk4.jpg':'https://images.kiero.co/images/CAROUSEL/banners-apk4.webp'} 
                alt="accesorios" 
                className="swiper-lazy"/>
              </a>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
            <div>
              <a href="https://listado.kiero.co/listcategory/?id-14675/#Electrodomesticos-de-Belleza">
               <img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banners-apk5.jpg':'https://images.kiero.co/images/CAROUSEL/banners-apk5.webp'}
               alt="electrodomesticos-belleza"
               className="swiper-lazy"/>
              </a>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
            <div>
              <a href="https://listado.kiero.co/listcategory/?id-28543/#Camaras">
               <img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banners-apk6.jpg':'https://images.kiero.co/images/CAROUSEL/banners-apk6.webp'} 
               alt="camaras" 
               className="swiper-lazy" />
              </a>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
            <div>
              <a href="https://listado.kiero.co/listcategory/?id-27427//#Artefactos-del-Hogar">
              <img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banners-apk7.jpg':'https://images.kiero.co/images/CAROUSEL/banners-apk7.webp'}
              alt="Artefactos-del-Hogar" 
              className="swiper-lazy" />
              </a>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
            <div>
              <a href="https://listado.kiero.co/listcategory/?id-26914/#Hogar%20y%20Muebles">
               <img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banners-apk8.jpg':'https://images.kiero.co/images/CAROUSEL/banners-apk8.webp'}
               alt="hogar y muebles"
               className="swiper-lazy"/>
              </a>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
          </Swiper>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="header-user-mobile-content">
          <div id="header-user-mobile" className="header-user-mobile">
            <ul className="nav-links-mobile">
              <li className="nav-active">
                <a href="https://www.kiero.co">
                  <i className="fas fa-home ui__home-icon"></i>Inicio
                </a>
              </li>
              <li>
                <a href="https://www.kiero.co/category">
                  <i className="fas fa-list ui_category-icon"></i>Categorias
                </a>
              </li>
              <li>
                <a href="https://www.kiero.co/apps">
                  <i className="fas fa-arrow-circle-down ui_down-icon"></i>
                  Descarga la App
                </a>
              </li>
            </ul>
            <ul className="nav-links-mobile">
              <li className="nav-active">
                <a href="https://www.kiero.co/help">
                  <i className="fas fa-question-circle ui__home-help"></i>Ayuda
                  / PQR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="carousel">
          <Swiper {...params}>
            <div>
              <a href="https://listado.kiero.co/listcategory/?id-50142/#Drones-y-accesorios">
              <LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banner1.jpg':'https://images.kiero.co/images/CAROUSEL/banner1.webp'} alt="carousel1"  className="swiper-lazy"/></LazyLoad>
              </a>
            </div>
            <div>
              <a href="https://listado.kiero.co/listcategory/?id-14675/#Electrodomesticos-de-Belleza">
                <LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banner2.jpg':'https://images.kiero.co/images/CAROUSEL/banner2.webp'} alt="carousel1" className="swiper-lazy"/></LazyLoad>
              </a>
            </div>
            <div>
              <a href="https://listado.kiero.co/listcategory/?id-25385/#Instrumentos-de-Cuerda">
                <LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banner3.jpg':'https://images.kiero.co/images/CAROUSEL/banner3.webp'} alt="carousel1" className="swiper-lazy"/></LazyLoad>
              </a>
            </div>
            <div>
              <a href="https://listado.kiero.co/listcategory/?id-28543/#Camaras">
                <LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banner4.jpg':'https://images.kiero.co/images/CAROUSEL/banner4.webp'} alt="carousel1" className="swiper-lazy"/></LazyLoad>
              </a>
            </div>
            <div>
              {" "}
              <a href="https://listado.kiero.co/listcategory/?id-28689/#Figuras%20Avengers">
                <LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banner5.jpg':'https://images.kiero.co/images/CAROUSEL/banner5.webp'} alt="carousel3" className="swiper-lazy"/></LazyLoad>
              </a>
            </div>
            <div>
              {" "}
              <a href="https://listado.kiero.co/listcategory/?id-26249/#Seguridad-para-Beb%C3%A9s">
                <LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banner6.jpg':'https://images.kiero.co/images/CAROUSEL/banner6.webp'} alt="carousel3" className="swiper-lazy"/></LazyLoad>
              </a>
            </div>
            <div>
              {" "}
              <a href="https://listado.kiero.co/listcategory/?id-27427//#Artefactos-del-Hogar">
                <LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banner7.jpg':'https://images.kiero.co/images/CAROUSEL/banner7.webp'} alt="carousel3" className="swiper-lazy"/></LazyLoad>
              </a>
            </div>
            <div>
              {" "}
              <a href="https://listado.kiero.co/listcategory/?id-25599/#Componentes-de-computadora">
                <LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/banner8.jpg':'https://images.kiero.co/images/CAROUSEL/banner8.webp'} alt="carousel3" className="swiper-lazy"/></LazyLoad>
              </a>
            </div>
          </Swiper>
        </div>
      </div>
    );
  }
};
export default Autoplay;
