import React, { Component } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";
import Aside from "./aside";
import { isMobile } from "react-device-detect";
import Pagination from "react-js-pagination";
import cookie from "react-cookies";
import Nav from '../Nav';
import NavCategory from '../NavCategory';
import Footer from '../Footer';

var flag = "Mosaico";
var minimPrice = 0;
var max = 49;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      activePage: 1,
      tree: []
    };
  }

  componentDidMount() {
    // const idParent = urlShow();
    var idproduct = window.location.href;
    var countid = idproduct.indexOf("?result=");
    let w;
    w = idproduct.substring(countid + 8, 100);
  
    w = w.replace("/", "");
    w = w.replace(/%20/g, " ");
    w = decodeURIComponent(unescape(w));
    w = this.tildes(w);
    w = w.replace('­Â', '')
  
    w = w.replace(/[.*+?^${}()|[\]\\]/g, " ");
    document.getElementById("inp-search").value = w;

    let midato = JSON.stringify({query:w, category_id:0});
    axios
      .post(
        `https://search.kiero.co/products/search`,
        midato
      )
      .then(res => {
        this.setState({
          products: res.data.result
        });
      },
      (error) => {
        console.log('este es el ' + error)
      }
    );

      //************* here we filter the child categories passing the idparent ***********//
      // axios.get(`https://kieroapi.net/child/category/`)
      // .then(Response => {
      //     this.setState({
      //         tree: Response.data.Resultados.filter(parent_id => parent_id.parent_id === parseInt(idParent)) 
      //     })
      // })
      // .catch(error => {
      //     console.log(error)
      // })

  }

   tildes(str) {
    str = str.replace("Ã¡", "\u00e1"); //á
    str = str.replace("Ã©", "\u00e9"); //é
    str = str.replace("Ã", "\u00ed"); //í
    str = str.replace("Â",''); //í
    str = str.replace("í³", "\u00f3"); //ó
    str = str.replace("Ã³", "\u00f3"); //ó
    str = str.replace("Ãº", "\u00fa"); //ú
    str = str.replace("íº", "\u00fa"); //ú
    str = str.replace("Ã±", "\u00f1"); //ñ
    str = str.replace("í±", "\u00f1"); //ñ
    str = str.replace("í¡", "\u00e1"); //á
    return str;
  }

  //this is for the change of the page when is clicket ***This is the paginator***
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    const { products } = this.state;
    minimPrice = (products.length * pageNumber * 50) / products.length - 50;
    max = (products.length * pageNumber * 50) / products.length - 1;
    window.scrollTo(0, 0);
  }

  //====================== BTN going to buy ============================ \\
  //used when user press click on buy
  BuyProductBTN(idProduct) {
    try {
      let pausedPro = localStorage.getItem("gato");  // verifies if the product is paused or not in the database
      if (pausedPro === "false") {
      } else {
        let URI = idProduct; //need to put here the id when user press buybtn
        var amout = 1;
        let d = new Date();
        d.setTime(d.getTime() + 20 * 60 * 1000);
        cookie.save("product_url", URI, {
          path: "/",
          expires: d,
          domain: ".kiero.co"
        });
        cookie.save("product_amount", amout, {
          path: "/",
          expires: d,
          domain: ".kiero.co"
        });
        if (
          cookie.load("usuario") === undefined ||
          cookie.load("usuario") === null
        ) {
          window.location.href = `https://kiero.co/login`;
        } else {
          window.location.href = `https://pagos.kiero.co/#/way-to-pay/${URI}/${amout}/${
            cookie.load("usuario").id
          }`;
        }
      
      }
    } catch (error) {
      console.log("error to buy: " + error);
    }
  }

  //show the categories when clicked
  showCategories() {
    const showCat = document.querySelector(".showhide-cate");

    if (showCat.style.display === "none") {
      showCat.style.display = "block";
    } else {
      showCat.style.display = "none";
    }
  }

  //show the filters when clicked
  showFilters() {
    const showFilters = document.querySelector(".showhide-filters");

    if (showFilters.style.display === "none") {
      showFilters.style.display = "block";
    } else {
      showFilters.style.display = "none";
    }
  }

  render() {
    const { products } = this.state;
    const { tree } = this.state;  
    const PER_PAGE = 50;
    const TOTAL_COUNT = products.length;
    const treeCategory = tree;
    const items = [];
    //estructura mobile
    if (isMobile) {
      //this is for slice the products between min pric and max price
      const elementsMobile = products.slice(minimPrice, max);
      const grid_productsMobile = [];
      const list_productsMobile = [];
      
      //this push into the array the items to show
      for (var i = 0; i < treeCategory.length; i++) {

        if (treeCategory.length > 10) {
            treeCategory.length = 10;
        }

        items.push(
            <li key={i}>
                <a href={'https://listado.kiero.co/listcategory/?id-'+treeCategory[i]["id"]+'/#'+treeCategory[i]["name"]}>{treeCategory[i]["name"]}</a>
            </li>
        )
    }

    //this get the products when the grid is mobile
      for (const [i, value] of elementsMobile.entries()) {
        grid_productsMobile.push(
          <div className="item-column-mb" key={i}>
            <a
              className="inner"
              href={
                "https://articulo.kiero.co/product-details/?id-" +
                value.Producto_Id +
                "-" +
                value.Titulo
              }
              key={i}
            >
              <div className="item-image-mb">
              <LazyLoad>
                <img
                  src={value.Imagenes_1}
                  alt={value.Titulo.substring(0, 60)}
                />
                </LazyLoad>
              </div>
            </a>

            <div className="item-info-mb">
              <h2 className="item_title--products-mb">
                <span className="main__title__products-mb">
                  {value.Titulo.substring(0, 60)}
                </span>
              </h2>
              <span className="send-products-mb">Envío gratis</span>
              <button className="btn-buy" onClick={() => this.BuyProductBTN(value.Producto_Id)}>
                Comprar
              </button>
              <div className="item-price-products-mb">
                <span className="item-symbol-products-mb">$</span>
                <span className="price-products-mb">
                  {number_format_category(value.Precio_cop)}
                </span>
              </div>
            </div>
          </div>
        );
        //this get the products when the grid is mobile
        list_productsMobile.push(
          <div className="item-list-mb" key={i}>
            <div className="item-list-image-mb">
              <a
                className="inner"
                href={
                  "https://articulo.kiero.co/product-details/?id-" +
                  value.Producto_Id +
                  "-" +
                  value.Titulo
                }
                key={i}
              >
                <LazyLoad>
                <img
                  src={value.Imagenes_1}
                  alt={value.Titulo.substring(0, 60)}
                />
                </LazyLoad>
              </a>
            </div>

            <div className="item-list-info-mb">
              <h2 className="item_title--list--products-mb">
                <span className="main__title__list-products-mb">
                  {value.Titulo.substring(0, 55)}...
                </span>
              </h2>
              <span className="send-list-products-mb">Envío gratis</span>
              <button className="btn-buy" onClick={() => this.BuyProductBTN(value.Producto_Id)}>
                Comprar
              </button>
              <div className="item-price-list-products-mb">
                <span className="item-symbol-list-products-mb">$</span>
                <span className="price-products-list-mb">
                  {number_format_category(value.Precio_cop)}
                </span>
              </div>
            </div>
          </div>
        );
      }

      return (
        <>
        <Nav/>
        <NavCategory/>
        <div className="mb-main">
          <div className="toolbar">
            <div className="operations">
              <div className="toolbar__content">
                <button className="toolbar__categories-launch">
                  <label className="lb__toolbar" onClick={this.showCategories}>
                    Categorías
                  </label>
                </button>
              </div>
              <div className="toolbar__content">
                <button className="toolbar__categories-launch" onClick={changeGrid}>
                  <label className="lb__toolbar change">
                    <i className="fas fa-th"></i> {flag}
                  </label>
                </button>
              </div>
              <div className="toolbar__content">
                <label className="lb__toolbar" onClick={this.showFilters}>
                  Filtrar
                </label>
              </div>
            </div>
          </div>

          <div className="showhide-cate" style={{ display: "none" }}>
          <div className="tree_category">
                    <ul>
                        {items}
                    </ul>
                </div>
          </div>
          <div className="showhide-filters" style={{ display: "none" }}>
            <div className="filter--price-mb">
              <h2 className="title_price">Precio</h2>
              <div className="filters__value">
                <input
                  type="text"
                  value={this.state.value}
                  onChange={e => this.onTodoChange(e.target.value)}
                  className="price__filters-mb"
                  placeholder="Mínimo"
                />
                <input
                  type="text"
                  value={this.state.value2}
                  onChange={e => this.minPricChang(e.target.value)}
                  className="price__filters-mb"
                  placeholder="Máximo"
                />
                <button
                  onClick={this.handleClick}
                  className="btn__filters--button"
                >
                  Establecer
                </button>
              </div>
            </div>
          </div>
          <div className="toolbar-change" style={{ display: "none" }}>
            hola2
          </div>
          <div className="inner__mobile mosaic item-list">
            {grid_productsMobile}
          </div>
          <div
            className="inner__mobile-list item-list-long"
            style={{ display: "none" }}
          >
            {list_productsMobile}
          </div>
          <div className="paginator-mb">
          <Pagination
            hideFirstLastPages
            pageRangeDisplayed={1}
            activePage={this.state.activePage}
            itemsCountPerPage={PER_PAGE}
            totalItemsCount={TOTAL_COUNT}
            onChange={this.handlePageChange.bind(this)}
          />
        </div>
        </div>
        </>
      );
    }
    
    const elements = products.slice(minimPrice,max); 
    const grid_products = [];
    const list_products = [];
    //sets the item if is grid to show
    for (const [i, value] of elements.entries()) {
      grid_products.push(
        <div className="rowitem--grid inner" key={i}>
          <a
            className="inner"
            href={
              "https://articulo.kiero.co/product-details/?id-" +
              value.Producto_Id +
              "-" +
              value.Titulo
            }
            key={i}
          >
            <div className="item_image--products">
              <LazyLoad>
                <img
                  src={value.Imagenes_1}
                  alt={value.Titulo.substring(0, 100)}
                />
              </LazyLoad>
            </div>
          </a>
          <div className="item-info-products">
            <h2 className="item_title--products">
              <span className="main__title__products">
                {value.Titulo.substring(0, 53)}...
              </span>
            </h2>
            <span className="send-products">Envío gratis</span>
            <div className="item-price-products">
              <span className="item-symbol-products">$</span>
              <span className="price-products">
                {number_format_category(value.Precio_cop)}
              </span>
              <div className="buy__products">
                <button className="btn-buy" onClick={()=> this.BuyProductBTN(value.Producto_Id)}>
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      );
      //sets the item if is list to show
      list_products.push(
        <div className="rowitem--list" key={i}>
          <a
            className="inner"
            href={
              "https://articulo.kiero.co/product-details/?id-" +
              value.Producto_Id +
              "-" +
              value.Titulo
            }
            key={i}
          >
            <div className="item_image--products-list">
            <LazyLoad>
              <img
                src={value.Imagenes_1}
                alt={value.Titulo.substring(0, 100)}
              />
             </LazyLoad>
            </div>
          </a>
          <div className="item__info-products-list">
            <h2 className="item_title--products-list">
              <span className="main__title__products-list">
                {value.Titulo.substring(0, 60)}
              </span>
            </h2>
            <span className="send-products-list">Envío gratis</span>

            <div className="item-price-products-list">
              <span className="item-symbol-products-list">$</span>
              <span className="price-products-list">
                {number_format_category(value.Precio_cop)}
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Nav/>
        <NavCategory/>
        <div className="main">
          <aside className="filters_products">
            <Aside />
          </aside>
          <section className="main_products" id="main_products">
            <li className="products-item grid" id="grid">
              {grid_products}
            </li>
          </section>

          <section
            className="main_products--list"
            id="list"
            style={{ display: "none" }}
          >
            <li className="products-item list" id="list">
              {list_products}
            </li>
          </section>
        </div>
        <div className="paginator">
          <Pagination
            hideFirstLastPages
            pageRangeDisplayed={10}
            activePage={this.state.activePage}
            itemsCountPerPage={PER_PAGE}
            totalItemsCount={TOTAL_COUNT}
            onChange={this.handlePageChange.bind(this)}
          />
        </div>
        <div className='footer'>
        <Footer/>
        </div>
      </div>
    );
    //this function put the point
    function number_format_category(price_sale) {
      const price = price_sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return price;
    }
  }
}

//this function change between grid and list when user clicked
function changeGrid() {
  const list = document.querySelector(".item-list");

  const grid = document.querySelector(".item-list-long");

  const change = document.querySelector(".change");

  if (list.style.display === "none") {
    change.innerHTML = "<i class='fas fa-th'></i> Mosaico";
    list.style.display = "block";
    grid.style.display = "none";
  } else {
    change.innerHTML = "Lista";
    list.style.display = "none";
    grid.style.display = "block";
  }
}
export default Search;
