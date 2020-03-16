import React, { Component } from 'react';
import '../../desktop.css';
import axios from 'axios';
import { isMobile } from 'react-device-detect';
import LazyLoad from 'react-lazyload';

var list;
var listMb;

class Payments extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            collection_data: []
        }
    }

    componentDidMount() {

        axios.get('https://kieroapi.net/Products/explora/slider')
            .then(response => {
                this.setState({                    
                    posts: response.data.data.Producto,
                    collection_data: response.data.data.path[0],
                    
                })

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { posts } = this.state;
        const { collection_data } = this.state;
        
        list = posts.length ? (
            posts.map(post => {
                return (
                    <a  key={post.id} href={"https://articulo.kiero.co/product-details/?id-" + post.id + "-" + post.Titulo}>
                    <div className="box-item-explore" key={post.id}>
                        <LazyLoad height={200}>
                            <img src={post.Imagen} alt={post.Titulo} />
                        </LazyLoad>
                    </div>
                    </a>
                )
            })
        ) : (
                <div></div>
            )

            listMb = posts.length ? (
                posts.slice(0,4).map(post => {
                    return (
                        <div className="box-item-explore-mb" key={post.id}>
                            <a href={"https://articulo.kiero.co/product-details/?id-" + post.id + "-" + post.Titulo}>
                            <LazyLoad height={200}>
                                <img src={post.Imagen} alt={post.Titulo} />
                            </LazyLoad>
                            </a>
                        </div>
                    )
                })
            ) : (
                    <div></div>
                )

        if (isMobile) {
            
            return (
                <section className="explore-mobile">
                    <LazyLoad height={200} > 
                    <div className="row container">
                        <div className="explore-collection-mobile">
                            <div className="main-explore-mobile">
                                   <a href={collection_data.url}>
                                   <LazyLoad height={200} > 
                                       <img src={collection_data.imagen} alt={collection_data.nombre_Coleccion} />
                                    </LazyLoad>
                                   </a>
                            </div>
                            <div className="items-products-mb">{listMb}</div>  
                        </div>
                    </div>
                    </LazyLoad>
                </section>
            )

        } else {
            
            return (
                <section className="explore">
                    <div className="row container">
                        <div className="explore-collection">
                        
                            <div className="main-explore">                                
                               
                                    <a href={collection_data.url}>
                                    <LazyLoad height={200}>
                                        <img src={collection_data.imagen} alt={collection_data.nombre_Coleccion}/>  
                                    </LazyLoad>                                
                                    </a>
                               
                            </div>   
                              
                             <div className="items-products">
                                {list}
                             </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default Payments;
