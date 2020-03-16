import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { isIOS } from 'react-device-detect';

class Finding2 extends Component {

 
  render() {
    const data = [     
      {
        "key": 5,
        "image": "https://images.kiero.co/images/CAROUSEL/bicicletas.jpg",
        "imagewp": "https://images.kiero.co/images/CAROUSEL/bicicletas.webp",          
        "title": 'DEPORTES Y FITNESS',
        "info": 'Bicicletas',
        "info2": 'y Ciclismo',
        "url":'https://listado.kiero.co/listcategory/?id-29395/#Bicicletas'         
      },
      {
        "key": 6,
        "image": "https://images.kiero.co/images/CAROUSEL/cocina.jpg",
        "imagewp": "https://images.kiero.co/images/CAROUSEL/cocina.webp",          
        "title": 'ELECTRODOMÉSTICOS',
        "info": 'Cocción',
        "info2": '',
        "url":'https://listado.kiero.co/listcategory/?id-27594//#Electrodom%C3%A9sticos-de-cocina'         
      },
      {
        "key": 7,
        "image": "https://images.kiero.co/images/CAROUSEL/instrumentos.jpg",
        "imagewp": "https://images.kiero.co/images/CAROUSEL/instrumentos.webp",          
        "title": 'INSTRUMENTOS',
        "info": 'Encuentra',
        "info2": 'Tu favorito',
        "url":'https://listado.kiero.co/listcategory/?id-25319/#Instrumentos%20Musicales'        
      },
      {
        "key": 8,
        "image": "https://images.kiero.co/images/CAROUSEL/entretenimiento.jpg",
        "imagewp": "https://images.kiero.co/images/CAROUSEL/entretenimiento.webp",          
        "title": 'Videojuegos',
        "info": 'Encuentra',
        "info2": 'Lo que buscas',
        "url":'https://listado.kiero.co/listcategory/?id-23877/#Consolas%20y%20Videojuegos'        
      }
  ]

  const list = data.length ? (
    data.map(post => {
        return (           
          <div className="ui__info-finding">
            <div className="promotion__image">
              <LazyLoad>
              <a href={post.url}> <img src={isIOS?post.image:post.imagewp} alt="computer"></img></a>
              </LazyLoad>
            </div>
            <div className="promotion__info">
              <span className="ui_promotion-title">{post.title}</span>
              <span className="ui_promotion-info">{post.info} </span>
              <span className="ui_promotion-info">{post.info2}</span>
              <a href={post.url}><button className="btn-promotion">Ver más</button></a>
            </div>
        </div>
        )
    })
) : (
        <div className="products"></div>
    )

    const findOne = list.slice(0,2);
    const findTwo = list.slice(3,5)
    let rndItem = a=> a[rnd()*a.length|0] ;
    let rnd = ()=> crypto.getRandomValues(new Uint32Array(1))[0]/2**32;
   
    return (
      <section className="finding" type="finding">
        <div className="row container">
          <div className="finding-body">
           {rndItem(findOne)}
           {rndItem(findTwo)}
          </div>
        </div>
      </section>
    )
  }
}

export default Finding2;
