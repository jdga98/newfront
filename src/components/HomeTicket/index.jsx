import React, { Component } from 'react';
import '../../desktop.css';
import LazyLoad from 'react-lazyload';

class HomeTicket extends Component {

    render() {
        var t = ["https://listado.kiero.co/listcategory/?id-26757/#Computadoras-y-tabletas~_~https://images.kiero.co/res/ticket1.webp~_~Computadoras", "https://listado.kiero.co/listcategory/?id-23897/#Juegos~_~https://images.kiero.co/res/ticket2.webp~_~Juegos", "https://listado.kiero.co/listcategory/?id-29395/#Bicicletas~_~https://images.kiero.co/res/ticket3.webp~_~Bicicletas", "https://listado.kiero.co/listcategory/?id-28653/#Juguetes-de-construcci%C3%B3n~_~https://images.kiero.co/res/ticket4.webp~_~juguetes de construccion"],
        r = t[Math.floor(Math.random() * t.length)].split("~_~");
        
        return (   
            <section className="home-ticket">  
                <LazyLoad height={200}>      
                    <div className="row container">                         
                        <a href={r[0]}>
                        <LazyLoad>
                            <img src={r[1]} alt={r[2]} />
                        </LazyLoad>
                        </a>                         
                    </div>
                </LazyLoad>    
            </section>     
        )
    }
}

export default HomeTicket;
