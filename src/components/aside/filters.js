import React, { Component } from 'react';
import axios from 'axios';
import '../aside/aside.css';
import Send from '../../assets/image/ship.svg';
import { Modal } from 'semantic-ui-react';

var minPric = null;
var maxPric = null;

class Aside extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: null,
            titl: null,
            tree: [],
            value: '',
            value2: ''
        };
        this.onTodoChange = this.onTodoChange.bind(this)
        this.minPricChang =this.minPricChang.bind(this)
    }

    

    componentDidMount() {

        const btn_list = document.querySelector("#filters__list");
        const btn_grid = document.querySelector("#filters__grid");
        const idParent = urlShow();
        const list = document.querySelector("#list");
        const grid = document.querySelector("#main_products");
        
        //this is for replace some special characters and put the correct number of the category
        const idproduct = window.location.href;
        const countid = idproduct.lastIndexOf('#')
        const titleCate = idproduct.substring((countid + 1), (countid + 200));
        var SampleText = titleCate.toString();
        var NewText = SampleText.replace(/-/g, " ");       
         NewText = NewText.replace(/%/g, " "); 
         NewText = NewText.replace(/20/g, " "); 
         NewText = NewText.replace(/ C3 A1/g, "á");
         NewText = NewText.replace(/ C3 A9/g, "é");
         NewText = NewText.replace(/ C3 AD/g, "í");
         NewText = NewText.replace(/ C3 B3/g, "ó");
         NewText = NewText.replace(/ C3 BA/g, "ú");
         NewText = NewText.replace(/ C3 B1/g, "ñ");         

         //set the state for the title to show on aside
        this.setState({ titl : NewText});
       
        //here we get the categories from parent and save it into tree state
        axios.get(`https://kieroapi.net/child/category/`)
            .then(Response => {
                this.setState({
                    tree: Response.data.Resultados.filter(parent_id => parent_id.parent_id === parseInt(idParent)) 
                })
            })
            .catch(error => {
                console.log(error)
            })

        btn_grid.addEventListener("click", () => {

            if (grid.style.display === "none") {
                list.style.display = "none";
                grid.style.display = "block";
            } else {
                grid.style.display = "none";
                grid.style.display = "block";
            }
        })

        btn_list.addEventListener("click", () => {
            if (list.style.display === "none") {
                list.style.display = "block";
                grid.style.display = "none";
            } else {
                grid.style.display = "none";
            }
        })

        //this extracts the id from the url
            function urlShow() {
                var id2 = "";
                const idproduct = window.location.href;
                const countid = idproduct.indexOf("?id-");
                const id = idproduct.substring(countid + 4, countid + 4 + 10);
                if (id.includes("/")) {
                  var countid2 = id.indexOf("/");
                  id2 = id.substring(0, countid2);
                }
                return id2.toString();
              }
           
    }
    
    onTodoChange(value){
        const re = /^[0-9\b]+$/;
        if (value === '' || re.test(value)) {
           this.setState({value: value})
        }
        minPric = value;
    }
    //this gets the min price
    minPricChang(value){
        const re = /^[0-9\b]+$/;
        if (value === '' || re.test(value)) {
           this.setState({value2: value})
        }
        maxPric = value;
    }
    //this is for get the min and max price entered on the inputs.
    handleClick() {
        try {  
            if(minPric !== null && maxPric !== null){
            console.log('cli '+ minPric, 'max ' + maxPric)
            }
        } catch (error) {
            console.log('need a pric ' + error)
        }
    }

    render() {

        const { tree } = this.state;
        const {titl} = this.state;     
        const treeFilter = tree;
        const items = [];
        const categories = <div className="row categories-additional">{items}</div>
        //here we record the categories and put into items
        for (var i = 0; i < treeFilter.length; i++) {

            if (treeFilter.length > 10) {
                treeFilter.length = 10;
            }
             
            items.push(
                <li key={i}>
                    <a href={'https://listado.kiero.co/listcategory/?id-'+treeFilter[i]["id"]+'/#'+treeFilter[i]["name"]}>{treeFilter[i]["name"]}</a>
                </li>
            )
        }

        return (
      
            <div className="filters">

                <div className="breadcrumb_filters">
            <h2 className="title_breadcrumb">{titl}</h2>
                </div>
                <div className="quantity">+500 resultados</div>
                <div className="order-products">
                    <h2 className="title_orders">Ordenar publicaciones</h2>
                    <button id="filters__list" className="btn__filters--orders"><i className="fas fa-th-list"></i>Lista</button>
                    <button id="filters__grid" className="btn__filters--orders"><i className="fas fa-th"></i>Grilla</button>
                </div>

                <div className="filter--price">
                    <h2 className="title_price">Precio</h2>
                    <div className="filters__value">
                        <input type="text" value={this.state.value} onChange={e => this.onTodoChange(e.target.value)} className="price__filters" placeholder="Mínimo" />
                        <input type="text" value={this.state.value2} onChange={e => this.minPricChang(e.target.value)} className="price__filters" placeholder="Máximo" />
                        <button onClick={this.handleClick} className="btn__filters--button">Establecer</button>
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
                    <ul>
                        {items}
                    </ul>
                </div>

                    <Modal>
                        <Modal.Content
                           
                            modalTitle="Categorias"
                        >
                            {categories}

                        </Modal.Content>
                    </Modal>
                <div className="button-wrap">
                    <button onClick={() => this.setState({ showModal: "modal-one" })}>Ver todos</button>
                </div>
            </div>
        )
    }
}

export default Aside;