import React from "react";
import { isMobile } from "react-device-detect";

const PausedProduct= ({ proDesc }) => {
  
    window.onload = function() {
      //here we verify the status of the product, if it is true or false we show paused product or not.
      if (proDesc.nombre_Estado === false) { 
        var priceTitl = this.document.querySelector(".price-title-container__price");    
        var stickBuy2 = this.document.querySelector(".btn-paymentsMb");  
        if(isMobile){
          stickBuy2.style["display"] = "none";
          priceTitl.style["display"] = "none";
          stickBuy2.disabled = true;
        }
        else{
           var price = this.document.querySelector(".price-title");
        price.style["display"] = "none";
        var stickBuy = this.document.querySelector(".btn-payments");
        stickBuy.style["display"] = "none";
        stickBuy.disabled = true;
        }
      }
    };
    
    if (proDesc.nombre_Estado === false) {
      return (
        <div className="ui__pause-products">
          <h2 style={{ marginTop: 10 }}>
            Este producto se encuentra pausado prueba con un producto diferente o pregunta en el chat por disponibilidad.
          </h2>
        </div>
      );
    } else {
      return null;
    }
}

export default PausedProduct;
