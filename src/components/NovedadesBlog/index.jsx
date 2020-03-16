import React, { Component } from "react";
import novedades from "../../assets/image/novedades.png";
import facebook from "../../assets/image/fac.png";
import instagram from "../../assets/image/ins.png";
import linkedin from "../../assets/image/in.png";
import whatsapp from "../../assets/image/wha.png";
import twitter from "../../assets/image/tw.png";
import youtube from "../../assets/image/you.png";
import pinterest from "../../assets/image/pin.png";
import LazyLoad from "react-lazyload";

class Novedades extends Component {
  
  render() {
    return (
      <section className="blog-info-social">
        <div className="blog-info">
          <div className="icon_social-news">
            <a href="https://www.novedades.kiero.co/" alt="Blog kiero.co">
              {" "}
              <img src={novedades} alt="Novedades"></img>
            </a>
          </div>
          <div className="icon_social-news-rl">
            <LazyLoad>
              <a href="https://www.facebook.com/KieroGroup/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/kierogroup/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://www.linkedin.com/company/kiero-international-group/">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=+57 (1) 5800817&text=&source=&data=">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="https://twitter.com/KIEROGROUP1">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.youtube.com/user/KieroGroup">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="https://co.pinterest.com/developer0634/">
                <img src={pinterest} alt="pinterest" />
              </a>
            </LazyLoad>
          </div>
        </div>
      </section>
    );
  }
}

export default Novedades;
