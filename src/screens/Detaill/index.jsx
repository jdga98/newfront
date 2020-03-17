import React from "react";
import '../../desktop.css';
import ThumbnailGallery from "../../components/thumbnail-gallery/thumbnail-gallery";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import NavCategory from "../../components/NavCategory";
import BuyProduct from "../../components/BuyDetails/BuyDetails";
import ServerRequest from "../../components/ServerRequest/ServerRequest";
import Breadcrum from "../../components/Breadcrum/Breadcrum";
import ProductDetail from "../../components/product-detail/product-detail";
import { isMobile } from "react-device-detect";
import Explore from "../../components/Explore/Explore";
import Slider2 from "../../components/Slider/Slider2";
import Slider3 from "../../components/Slider/Slider3";
import PausedProduct from "../../components/Breadcrum/PausedProduct";
import axios from "axios";


class Detail extends React.Component {
    state = {
      proDesc: [],
      urlSendBuy: null,
      posts: [],
      imagesMeta: [],
      puts: [],
      thumbnails: []
    };
  
    componentDidMount() {
      axios.get(urlShow()).then(res => {
        this.setState({
          proDesc: res.data.Resultados.breadcrum,
          posts: res.data.Resultados,
          imagesMeta: res.data.Resultados.imagenes_Producto,
          puts: res.data.Resultados.Category
        });
      });
  
      //this function extract the id from the url
      function urlShow() {
        var id2 = "";
        const idproduct = window.location.href;
        const countid = idproduct.indexOf("?id-");
        const id = idproduct.substring(countid + 4, countid + 4 + 10);
        if (id.includes("-")) {
          var countid2 = id.indexOf("-");
          id2 = id.substring(0, countid2);
          // id2 = "http://10.4.28.196:5045/product/detail/" + id2; //nodejs 
          //id2 = "http://10.4.28.196:4446/Producto/info?id=" + id2; //seviper SSs
          id2 = "https://kieroapi.net/product/detail/" + id2; //production seviperss
        }
        return id2;
      }
    }
  
    render() {
      const { proDesc, posts, imagesMeta } = this.state;
      if (isMobile) {
        return (
          <div className="App">
            <Nav />
            <Breadcrum items={proDesc}/>
            <div className="contain-mobil">
              <PausedProduct proDesc={posts}/>
              <ThumbnailGallery  thumbnails={imagesMeta} />
              <ServerRequest 
              posts={posts}            
              />
              <BuyProduct />
              <ProductDetail proDesc={posts}/>
            </div>
            <Explore />
            <Slider2 />
            <Slider3 />
            <Footer />
          </div>
        );
      } else {
        return (
          <div className="App">
            <Nav />
            <NavCategory />
            <PausedProduct proDesc={posts}/>
            <Breadcrum items={proDesc} />
            <div className="containbackgr">
              <ThumbnailGallery thumbnails={imagesMeta} />
              <ServerRequest
                posts={posts}
              />
              <BuyProduct />
              <ProductDetail proDesc={posts} />
              <Explore />
              <Slider2 />
              <Slider3 />
            </div>
            <Footer />
          </div>
        );
      }
    }
  }
  
  export default Detail;
  