import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import axios from 'axios';
import { isMobile } from 'react-device-detect';
import LazyLoad from 'react-lazyload';


var params;
var slidesView = 4.4555;
var space = 5;
var slidesGroup = 4.4555;
var free = true;
var slideLoop = false;
var slidesUpdate = true;
var allowTouchMove = true;

class Slider1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // axios.get('https://kieroapi.net/Products/kiero-products/v2/rp')
        axios.get('https://kieroapi.net/randon/products/')
            .then(response => {                
                this.setState({
                    //posts: response.data.result.random_products
                    posts: response.data.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    slider = () => {

        params = {

            slidesPerView: slidesView,
            spaceBetween: space,
            slidesPerGroup: slidesGroup,
            freeMode: free,
            loop: slideLoop,
            allowTouchMove: allowTouchMove,
            loopFillGroupWithBlank: true,
            shouldSwiperUpdate: slidesUpdate,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 3.3555,
                    slidesPerGroup: 3.3555,
                    spaceBetween: 5,
                },
                640: {
                    slidesPerView: 4.3555,
                    slidesPerGroup: 4.3555,
                    spaceBetween: 5,
                },

                425: {
                    slidesPerView: 4.4666,
                    slidesPerGroup: 4.4666,
                    spaceBetween: 5,
                },

                375: {
                    slidesPerView: 2.2742,
                    slidesPerGroup: 3.3555,
                    spaceBetween: 5,
                },

                320: {
                    slidesPerView: 2.2444,
                    slidesPerGroup: 2.2444,
                    spaceBetween: 5,
                }
            }
        }
    }

    render() {
        function number_format_details(price_sale) {
            const pric = price_sale
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return pric;
          }
          
        if (isMobile) {

            this.slider(slidesView);

        } else {

            slidesView = 4
            space = 10
            slidesGroup = 4
            free = true;
            slideLoop = false;
            slidesUpdate = true;
            allowTouchMove =false;
            this.slider();

        }
        
        const { posts } = this.state;
        
        const list = posts.length ? (
            posts.map(post => {
                
                return (

                    <div className="item-slide-products" key={post.Titulo}>
                        
                        <div className="item-image-container">
                        <a href={"https://articulo.kiero.co/product-details/?id-" + post.id + "-" + post.Titulo}>
                            <LazyLoad height={200}>
                                {/*<img src={isIOS ? post.Imagen : post.Imagenes_1} alt={post.Titulo} />*/}
                                <img src={post.Imagenes_1} alt={post.Titulo} className="swiper-lazy"/>
                            </LazyLoad>
                        </a>
                        </div>
                        <div className="content">
                            <p className="item-title">{post.Titulo.substring(0, 55)}</p>

                            <div className="item-send">Envío gratis</div>
                            <div className="item-price">
                                <span className="item-symbol">$</span>
                                <span className="price">{number_format_details(post.Precio_cop)}</span>
                            </div>
                        </div>
                        
                    </div>

                )
            })
        ) : (
                <div className="products"></div>
            )

            if(isMobile){
                return (
                    <section className="slide-item-mb">
        
                        <Swiper {...params}>
                            {list}
                        </Swiper>
                    </section>
                )
            }
            else{
                return (
                    <section className="slide-item">        
                        <Swiper {...params}>
                            {list}
                        </Swiper>
                    </section>
                )
            }
      
    }
};
export default Slider1;