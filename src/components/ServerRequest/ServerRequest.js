
import React from "react";
import Sticky from "react-sticky-el";
import { isMobile } from "react-device-detect";

const ServerRequest = ({ posts }) => {

    //this calculate the currentscroll from button buy and show or hide depends of scrolldown or up
    if (isMobile) {
    } else {
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        var stickPrice = this.document.querySelector(".fixedpricemove");
        var stickBuy = this.document.querySelector(".btnbuy");
        try {
          if (currentScrollPos > 1900) {
            stickPrice.style["display"] = "none";
            stickBuy.style["display"] = "none";
          } else if (currentScrollPos < 1900 && currentScrollPos > 1000) {
            stickPrice.style["display"] = "block";
            stickBuy.style["display"] = "block";
          }
        } catch (error) {
          
        }
      };
    }

    
    const titulo = String(posts.titulo).substring(0, 59);
    const precio = number_format_details(String(posts.precio));
    function number_format_details(price_sale) {
      const pric = price_sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return pric;
    }

    if (isMobile) {
      try {
        return (
          <div className="price-title-container">
            <div className="price-title-container__title">{titulo}...</div>
            <div className="price-title-container__price">$ {precio}</div>
          </div>
        );
      } catch (error) {}
    } else {
      try {
        return (
          <div className="buy-right">
            <Sticky
              stickyClassName={"fixedpricemove"}
            >
              <div className="fixed-price">
                <div className="item-title-products">
                  <h1>{titulo}...</h1>
                </div>
                <div className="price-title">
                  <h1 className="price-font">$ {precio}</h1>
                </div>
              </div>
            </Sticky>
          </div>
        );
      } catch (error) {
        console.log(Error);
      }
    }
}

export default ServerRequest;
