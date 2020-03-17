import React, { Component } from "react";
import "../styles/desktop.css";
import axios from "axios";
import { isMobile } from "react-device-detect";
import LazyLoad from "react-lazyload";

var list;
var listMb;

class Payments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      items: [],
      collection_data: []
    };
  }

  componentDidMount() {
    //here we get the response from the api and set the states.
    axios
      .get("https://kieroapi.net/Products/explora/slider")
      .then(response => {
        this.setState({
          posts: response.data.data.Producto,
          collection_data: response.data.data.path[0],
          items: response.data.data.path[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    const { collection_data } = this.state;
    //this function replace blank space with -
    function title_format(title_format) {
      const title = title_format.toString().replace(/ /g, "-");
      return title;
    }

    //here we record the posts for get the id, titulo and image and set to list.
    list = posts.length ? (
      posts.map((post, i) => {
        return (
          <div className="box-item-explore" key={i}>
            <a href={"/product-details/?id-" + post.id + "-" + title_format(post.Titulo)}>
              <LazyLoad>
                <img src={post.Imagen} alt={post.Titulo} />
              </LazyLoad>
            </a>
          </div>
        );
      })
    ) : (
      <div></div>
    );

    //here we record the posts for get the id, titulo and image and set to list.
    listMb = posts.length ? (
      posts.slice(0, 4).map(post => {
        return (
          <div className="box-item-explore" key={post.id}>
            <a href={"/?id-" + post.id + "-" + post.Titulo}>
              <LazyLoad>
                <img src={post.Imagen} alt={post.Titulo} />
              </LazyLoad>
            </a>
          </div>
        );
      })
    ) : (
      <div></div>
    );

    if (isMobile) {
      return (
        <section className="exploremb">
          <div className="explore-collection-mb">
            <div className="main-explore-mobile">
              <LazyLoad>
                <img
                  src={collection_data.imagen}
                  alt={collection_data.nombre_Coleccion}
                  className="img-explore"
                />
              </LazyLoad>
            </div>
            <div className="items-products-mb">{listMb}</div>
          </div>
        </section>
      );
    } else {
      return (
        <>
          <section className="explore">
            <div style={{ display:'flex', minWidth:'1146px' }}></div>
          </section>
          <div className="row container">
              <div className="explore-collection">
                <div className="main-explore">
                  <a href={collection_data.url}>
                    <LazyLoad>
                      <img
                        src={collection_data.imagen}
                        alt={collection_data.nombre_Coleccion}
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="items-products">{list}</div>
              </div>
            </div>
        </>
      );
    }
  }
}

export default Payments;
