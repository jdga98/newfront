import React from "react";
import Nav from "../components/Nav";
import NavCategory from "../components/NavCategory";
import Footer from "../components/Footer";
import ImgAndroid from "../assets/image/googleplay.png";
import ImgIos from "../assets/image/appstore.png";

const Apps = () => {
  return (
    <>
      <Nav />
      <NavCategory />
      <div className="app_container">
        <div class="app_information">
          <h2 class="app_information_title">Descarga gratis la app</h2>
          <div className="app_information_description">
            <p>Compra, vende y busca lo que quieras sin importar dónde estés</p>
          </div>
          <div>
            <h2 className="app_information_title_download">
              Descargala ahora:
            </h2>
          </div>
          <div className='app_information_image'>
            <div className='app_information_image_devices'>
                <a href="https://play.google.com/store/apps/details?id=com.companyname.prueba23">
                    <img src={ImgIos} alt='app ios'/>
                </a>
            </div>
            <div className='app_information_image_devices'>
                <a href="https://play.google.com/store/apps/details?id=com.companyname.prueba23">
                    <img src={ImgAndroid} alt='app android'/>
                </a>
            </div>
          </div>
        </div>
      </div>

      <div className='foot'>
        <Footer />
      </div>
    </>
  );
};

export default Apps;
