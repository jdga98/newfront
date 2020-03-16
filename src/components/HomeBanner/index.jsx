import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Swiper from 'react-id-swiper';
import { isMobile , isIOS } from 'react-device-detect';

var params;
class Banner extends Component {
  

    slider = () => {
        params = {
            spaceBetween: 5,
            pagination: {
                el: '.swiper-pagination',
                clickable: false,
            }
        }
    }

    render() {
       
        let rndItem = a=> a[rnd()*a.length|0];
        let rnd = ()=> crypto.getRandomValues(new Uint32Array(1))[0]/2**32;
        
        let rndItem2 = a=> a[rndS()*a.length|0];
        let rndS = ()=> crypto.getRandomValues(new Uint32Array(1))[0]/2**32;
        const videoju = <div><a href='https://listado.kiero.co/listcategory/?id-23877/#Consolas%20y%20Videojuegos'><LazyLoad><img src={isIOS ? 'https://images.kiero.co/images/CAROUSEL/videojuegos.jpg':'https://images.kiero.co/images/CAROUSEL/videojuegos.webp'} alt="Videojuegos" /></LazyLoad></a></div>
                        
        const deport = <div><a href="https://listado.kiero.co/listcategory/?id-30014/#Ftbol"><LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/deportes.jpg':'https://images.kiero.co/images/CAROUSEL/deportes.webp'} alt="deportes" /></LazyLoad></a></div>
                        
        const hog = <div><a href='https://listado.kiero.co/listcategory/?id-27427//#Artefactos-del-Hogar'><LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/hogar.jpg':'https://images.kiero.co/images/CAROUSEL/hogar.webp'} alt="hogar" /></LazyLoad></a></div>
                        
        const cam = <div><a href='https://listado.kiero.co/listcategory/?id-28543/#Camaras'><LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/bebes.jpg':'https://images.kiero.co/images/CAROUSEL/bebes.webp'} alt="camaras" /></LazyLoad></a></div>
                        
        const beb = <div><a href='https://listado.kiero.co/listcategory/?id-26071/#Beb%C3%A9s'><LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/bebes.jpg':'https://images.kiero.co/images/CAROUSEL/bebes.webp'} alt="bebes" /></LazyLoad></a></div>
                        
        const comp = <div><a href='https://listado.kiero.co/listcategory/?id-25598/#Computaci%C3%B3n'><LazyLoad><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/computacion.jpg':'https://images.kiero.co/images/CAROUSEL/computacion.webp'} alt="computacion" /></LazyLoad></a></div>
                     
        const ofic = <div><a href='https://listado.kiero.co/listcategory/?id-26276/#Industrias%20y%20Oficinas'> <LazyLoad height="200px"><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/oficina.jpg':'https://images.kiero.co/images/CAROUSEL/oficina.webp'} alt="oficina" /> </LazyLoad></a></div>
        const todo = [videoju,deport,hog]
        const todo1 = [cam,beb]
        const todo2 = [comp,ofic]
        
        if (isMobile) {
            this.slider();
            
            return (
                <section className="banner-mobile">

                    <Swiper {...params}>
                       
                        <div className="sw-mobile-banner">
                            <a href='https://listado.kiero.co/listcategory/?id-23877/#Consolas%20y%20Videojuegos'><LazyLoad height="200px"><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/videojuegos.jpg':'https://images.kiero.co/images/CAROUSEL/videojuegos.webp'} alt="Videojuegos" /></LazyLoad></a>
                        </div>
                        <div className="sw-mobile-banner">
                        <a href="https://listado.kiero.co/listcategory/?id-30014/#F%C3%BAtbol"><LazyLoad height="200px"><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/deportes.jpg':'https://images.kiero.co/images/CAROUSEL/deportes.webp'} alt="deportes" /></LazyLoad> </a>
                        </div>
                        
                        <div className="sw-mobile-banner">
                           <a href='https://listado.kiero.co/listcategory/?id-27427//#Artefactos-del-Hogar'><LazyLoad height="200px"><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/hogar.jpg':'https://images.kiero.co/images/CAROUSEL/hogar.webp'} alt="hogar" /></LazyLoad></a>
                        </div>
                        
                        <div className="sw-mobile-banner">
                           <a href='https://listado.kiero.co/listcategory/?id-28543/#Camaras'><LazyLoad height="200px"><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/camaras.jpg':'https://images.kiero.co/images/CAROUSEL/camaras.webp'} alt="camaras" /></LazyLoad></a>
                        </div>
                        <div className="sw-mobile-banner">
                           <a href='https://listado.kiero.co/listcategory/?id-26071/#Beb%C3%A9s'><LazyLoad height="200px"><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/bebes.jpg':'https://images.kiero.co/images/CAROUSEL/bebes.webp'} alt="bebes" /></LazyLoad></a>
                        </div>
                        
                        <div className="sw-mobile-banner">
                           <a href='https://listado.kiero.co/listcategory/?id-25598/#Computaci%C3%B3n'><LazyLoad height="200px"><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/computacion.jpg':'https://images.kiero.co/images/CAROUSEL/computacion.webp'} alt="computacion" /></LazyLoad></a>
                        </div>
                        <div className="sw-mobile-banner">
                           <a href='https://listado.kiero.co/listcategory/?id-26276/#Industrias%20y%20Oficinas'><LazyLoad height="200px"><img src={isIOS ?'https://images.kiero.co/images/CAROUSEL/oficina.jpg':'https://images.kiero.co/images/CAROUSEL/oficina.webp'} alt="oficina" /></LazyLoad></a>
                        </div>
                    </Swiper>
                </section>
            )
        }
        else {
            return (

                <div className="container-random-banners">                
                        <LazyLoad height="200px">
                            {rndItem(todo)}
                            {rndItem2(todo1)}
                            {rndItem(todo2)}
                        </LazyLoad>
                    </div> 

            )
        }

    }

}

export default Banner;
