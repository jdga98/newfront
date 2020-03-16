import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { isIOS } from 'react-device-detect';

class Finding extends Component {

 
  render() {
    const data = [
      {
          "key": 1,          
          "image": "https://images.kiero.co/images/CAROUSEL/computer.jpg",
          "imagewp": "https://images.kiero.co/images/CAROUSEL/computer.webp",
          "title": 'COMPUTACIÓN',
          "info": 'Diseño',
          "info2": 'y Tecnología',
          "url":'https://listado.kiero.co/listcategory/?id-26761/#Computadoras'     
      },
      {
          "key": 2,
          "image": "https://images.kiero.co/images/CAROUSEL/bebé.jpg",
          "imagewp": "https://images.kiero.co/images/CAROUSEL/bebé.webp",          
          "title": 'Bebés',
          "info": 'Innovador',
          "info2": 'y Divertido',
          "url":'https://listado.kiero.co/listcategory/?id-26071/#Beb%C3%A9s'     
      },
      {
        "key": 3,
        "image": "https://images.kiero.co/images/CAROUSEL/audio.jpg",
        "imagewp": "https://images.kiero.co/images/CAROUSEL/audio.webp",          
        "title": 'ELECTRÓNICA',
        "info": 'Audio',
        "info2": 'Para El Hogar',
        "url":'https://listado.kiero.co/listcategory/?id-50059//#Audio-para-el-hogar'             
      },
      {
        "key": 4,
        "image": "https://images.kiero.co/images/CAROUSEL/belleza.jpg",
        "imagewp": "https://images.kiero.co/images/CAROUSEL/belleza.webp",          
        "title": 'BELLEZA',
        "info": 'Dispositivos',
        "info2": 'De Belleza',
        "url":'https://listado.kiero.co/listcategory/?id-14617/#Belleza%20y%20Cuidado%20Personal'        
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

export default Finding;
