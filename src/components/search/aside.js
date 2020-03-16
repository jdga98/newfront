import React, { Component } from "react";
import "./aside.css";
import Send from '../../assets/image/ship.svg';
import { Modal } from "semantic-ui-react";

var minPric = null;
var maxPric = null;

class Aside extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titl: null,
      tree: [],
      value: "",
      value2: ""
    };
    this.onTodoChange = this.onTodoChange.bind(this);
    this.minPricChang = this.minPricChang.bind(this);
  }

  componentDidMount() {
    const btn_list = document.querySelector("#filters__list");
    const btn_grid = document.querySelector("#filters__grid");
    const list = document.querySelector("#list");
    const grid = document.querySelector("#main_products");

    //this is for replace some special characters and put the correct number of the category
    var idproduct = window.location.href;
    let w;
    var countid = idproduct.indexOf("?result=");
    w = idproduct.substring(countid + 8, 100);

    w = w.replace("/", "");
    w = w.replace(/20/g, " ");
    w = decodeURIComponent(unescape(w));
    w = this.tildes(w);
    w = w.replace("­Â", "");

    w = w.replace(/[.*+?^${}()|[\]\\]/g, " ");

    //set the state for the title to show on aside
    this.setState({ titl: w });

    //here we get the categories from parent and save it into tree state
    // axios.get(`https://kieroapi.net/child/category/`)
    //     .then(Response => {
    //         this.setState({
    //             tree: Response.data.Resultados.filter(parent_id => parent_id.parent_id === parseInt(idParent))
    //         })
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })

    btn_grid.addEventListener("click", () => {
      if (grid.style.display === "none") {
        list.style.display = "none";
        grid.style.display = "block";
      } else {
        grid.style.display = "none";
        grid.style.display = "block";
      }
    });

    btn_list.addEventListener("click", () => {
      if (list.style.display === "none") {
        list.style.display = "block";
        grid.style.display = "none";
      } else {
        grid.style.display = "none";
      }
    });
  }

  tildes(str) {
    str = str.replace("Ã¡", "\u00e1"); //á
    str = str.replace("Ã©", "\u00e9"); //é
    str = str.replace("Ã", "\u00ed"); //í
    str = str.replace("Â", ""); //í
    str = str.replace("í³", "\u00f3"); //ó
    str = str.replace("Ã³", "\u00f3"); //ó
    str = str.replace("Ãº", "\u00fa"); //ú
    str = str.replace("íº", "\u00fa"); //ú
    str = str.replace("Ã±", "\u00f1"); //ñ
    str = str.replace("í±", "\u00f1"); //ñ
    str = str.replace("í¡", "\u00e1"); //à
    return str;
  }

  onTodoChange(value) {
    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      this.setState({ value: value });
    }
    minPric = value;
  }
  //this gets the min price
  minPricChang(value) {
    const re = /^[0-9\b]+$/;
    if (value === "" || re.test(value)) {
      this.setState({ value2: value });
    }
    maxPric = value;
  }
  //this is for get the min and max price entered on the inputs.
  handleClick() {
    try {
      if (minPric !== null && maxPric !== null) {
        console.log("cli " + minPric, "max " + maxPric);
      }
    } catch (error) {
      console.log("need a pric " + error);
    }
  }

  render() {
    const { tree } = this.state;
    const { titl } = this.state;
    const treeFilter = tree;
    const items = [];
    const isModal = this.state.showModal;
    const categories = <div className="row categories-additional">{items}</div>;
    //here we record the categories and put into items
    for (var i = 0; i < treeFilter.length; i++) {
      if (treeFilter.length > 10) {
        treeFilter.length = 10;
      }

      items.push(
        <li key={i}>
          <a
            href={
              "https://listado.kiero.co/listcategory/?id-" +
              treeFilter[i]["id"] +
              "/#" +
              treeFilter[i]["name"]
            }
          >
            {treeFilter[i]["name"]}
          </a>
        </li>
      );
    }

    return (
      <div className="filters">
        <div className="breadcrumb_filters">
          <h2 className="title_breadcrumb">{titl}</h2>
        </div>
        <div className="quantity">+500 resultados</div>
        <div className="order-products">
          <h2 className="title_orders">Ordenar publicaciones</h2>
          <button id="filters__list" className="btn__filters--orders">
            <i className="fas fa-th-list"></i>Lista
          </button>
          <button id="filters__grid" className="btn__filters--orders">
            <i className="fas fa-th"></i>Grilla
          </button>
        </div>

        <div className="filter--price">
          <h2 className="title_price">Precio</h2>
          <div className="filters__value">
            <input
              type="text"
              value={this.state.value}
              onChange={e => this.onTodoChange(e.target.value)}
              className="price__filters"
              placeholder="Mínimo"
            />
            <input
              type="text"
              value={this.state.value2}
              onChange={e => this.minPricChang(e.target.value)}
              className="price__filters"
              placeholder="Máximo"
            />
            <button onClick={this.handleClick} className="btn__filters--button">
              Establecer
            </button>
          </div>
        </div>

        <div className="send">
          <h2 className="title_send">Envío</h2>
          <div className="filters_ship">
            <h2>Envío gratis</h2>
            <div className="icon-ship">
              <img src={Send} alt="envío" />
            </div>
          </div>
        </div>

        <div className="tree_category">
          <h2>Categorías</h2>
          <ul>{items}</ul>
        </div>

        
          <Modal>
            <Modal.Content
              
              modalTitle="Categorias"
            >
              {categories}
            </Modal.Content>
          </Modal>
        <div className="button-wrap">
          <button onClick={() => this.setState({ showModal: "modal-one" })}>
            Ver todos
          </button>
        </div>
      </div>
    );
  }
}

export default Aside;
