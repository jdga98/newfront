import React from "react";
import '../../desktop.css';
import ThumbnailGallery from "../../components/thumbnail-gallery/thumbnail-gallery";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import NavCategory from "../NavCategory/NavCategory";
import BuyProduct from "../BuyDetails/BuyDetails";
import ServerRequest from "../ServerRequest/ServerRequest";
import Breadcrum from "../Breadcrum/Breadcrum";
import ProductDetail from "../product-detail/product-detail";
import { isMobile } from "react-device-detect";
import Explore from "../Explore/Explore";
import Slider2 from "../Slider/Slider2";
import Slider3 from "../Slider/Slider3";
import PausedProduct from "../Breadcrum/PausedProduct";
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
  