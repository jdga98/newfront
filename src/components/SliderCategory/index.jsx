import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { isMobile } from 'react-device-detect'

var params;
var slidesView = 8;
var space = -1;
var slidesGroup = 8;
var free = true;
var slideLoop = false;
var slidesUpdate = true;


class SliderCategory extends Component {

    category = () => {
        params = {

            slidesPerView: slidesView,
            spaceBetween: space,
            slidesPerGroup: slidesGroup,
            loop: slideLoop,
            freeMode: free,
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
                    slidesPerView: 5.3555,
                    slidesPerGroup: 5.3555,
                    spaceBetween: 5,
                },
                640: {
                    slidesPerView: 4.3555,
                    slidesPerGroup: 4.3555,
                    spaceBetween: 5,
                },

                425: {
                    slidesPerView: 3.3555,
                    slidesPerGroup: 3.3555,
                    spaceBetween: -1,
                },

                375: {
                    slidesPerView: 2.3142,
                    slidesPerGroup: 3.3555,
                    spaceBetween: -1,
                },

                360: {
                    slidesPerView: 2.2142,
                    slidesPerGroup: 3.3555,
                    spaceBetween: -1,
                },

                320: {
                    slidesPerView: 3.1111,
                    slidesPerGroup: 3.1111,
                    spaceBetween: -1,
                }
            }
        }
    }

    render() {

        if (isMobile) {

            slidesView = 3.1;
            space = -1;
            slidesGroup = 3.1;
            free = true;
            slideLoop = false;
            slidesUpdate = true;

            this.category();
            return (
                <div className="row container">
                    <div className="slide-itemx">

                        <Swiper {...params}>

                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-24814-#Animales-y-Mascotas"> <div className="item_category-box"><i className="fas fa-dog icon-category"></i><h2 className="title-category-box">Animales y Mascotas</h2></div></a>
                                <a className='hiperVi' href='https://www.kiero.co/complete-category/?id-49955-#Electronica,-Audio-y-Video'><div className="item_category-box"><i className="fas fa-headphones icon-category"></i><h2 className="title-category-box">Electrónica</h2></div></a>
                            </div>

                            <div className="item-slide-category">
                               <a className='hiperVi' href="https://www.kiero.co/complete-category?id-26071-#Bebes"><div className="item_category-box"><i className="fas fa-baby-carriage icon-category"></i><h2 className="title-category-box">Bebés</h2></div></a>
                               <a className='hiperVi' href='https://www.kiero.co/complete-category?id-29062-#Deportes-y-Fitness'><div className="item_category-box"><i className="fas fa-futbol icon-category"></i><h2 className="title-category-box">Deportes y fitness</h2></div></a>
                            </div>

                            <div className="item-slide-category">
                                <a className='hiperVi' href='https://www.kiero.co/complete-category?id-28576-#Camaras-y-Accesorios'><div className="item_category-box"><i className="fas fa-camera-retro icon-category"></i><h2 className="title-category-box">Cámaras y Accesorios</h2></div></a>
                                <a className='hiperVi' href='https://www.kiero.co/complete-category?id-23877-#Consolas-y-Videojuegos'><div className="item_category-box"><i className="fas fa-gamepad icon-category"></i><h2 className="title-category-box">Consolas y videojuegos</h2></div></a>
                            </div>
                            <div className="item-slide-category">
                                <a className='hiperVi' href='https://www.kiero.co/complete-category?id-26914-#Hogar-y-Muebles'><div className="item_category-box"><i className="fas fa-chair icon-category"></i><h2 className="title-category-box">Hogar y muebles</h2></div></a>
                                <a className='hiperVi' href='https://www.kiero.co/complete-category?id-28581-#Juegos-y-Juguetes'><div className="item_category-box"> <i className="fas fa-dice icon-category"></i><h2 className="title-category-box">Juegos y juguetes</h2></div></a>
                            </div>

                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-29113-#Musica"><div className="item_category-box"> <i className="fas fa-music icon-category"></i><h2 className="title-category-box">Musica y pelicula</h2></div></a> 
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-25598-#Computaciogit n"><div className="item_category-box"> <i className="fas fa-desktop icon-category"></i><h2 className="title-category-box">Computación</h2></div></a> 
                            </div>

                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-26276-#Industrias-y-Oficinas"><div className="item_category-box"><i className="fas fa-briefcase icon-category"></i><h2 className="title-category-box">Industrias y oficinas</h2></div></a>
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-25319-#Instrumentos-Musicales"><div className="item_category-box"> <i className="fas fa-drum icon-category"></i><h2 className="title-category-box">Instrumentos musicales</h2></div></a>
                            </div>

                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-24240-#Celulares-y-Telefonos"><div className="item_category-box"> <i className="fas fa-mobile-alt icon-category"></i><h2 className="title-category-box">Celulares y Teléfonos</h2> </div></a>
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-24371-#Accesorios-para-Vehículos"><div className="item_category-box"> <i className="fas fa-car icon-category"></i><h2 className="title-category-box">Accesorios para Vehículos</h2></div></a>
                            </div>

                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-27426-#Electrodomesticos"><div className="item_category-box"> <i className="fas fa-blender icon-category"></i><h2 className="title-category-box">Electrodomésticos</h2></div></a>
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-25624-#Herramientas-y-Construccion"><div className="item_category-box"> <i className="fas fa-tools icon-category"></i><h2 className="title-category-box">Herramientas</h2> </div></a>
                            </div>
                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-26550-#Libros,-Revistas-y-Comics"><div className="item_category-box"> <i className="fas fa-book icon-category"></i><h2 className="title-category-box">Libros</h2> </div></a>
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-29262-#Coleccionables-y-Hobbies"><div className="item_category-box"> <i className="fas fa-chess-queen icon-category"></i><h2 className="title-category-box">Coleccionables y Hobbies</h2></div></a>
                            </div>
                            <div className="item-slide-category">
                                <a className='hiperVi' href='https://www.kiero.co/complete-category/?id-49835-#Salud-y-Equipamiento-Medico' ><div className="item_category-box"> <i className="fas fa-female icon-category"></i><h2 className="title-category-box">Salud</h2></div></a>
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-25027-#Relojes-y-Joyas"><div className="item_category-box"> <i className="fas fa-clock icon-category"></i><h2 className="title-category-box">Relojes y Joyas</h2></div> </a>
                            </div>

                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-29707-#Ropa,-Zapatos-y-Accesorios"><div className="item_category-box"> <i className="fas fa-tshirt icon-category"></i><h2 className="title-category-box">Ropa, zapatos y joyas</h2></div></a>
                                <a className='hiperVi' href="https://www.kiero.co/category/"><div className="item_category-box"><i className="far fa-circle icon-category"></i><h2 className="title-category-box">Otras categorías</h2></div></a>
                           </div>

                        </Swiper>
                    </div>
                </div>
            )



        } else {

            slidesView = 7;
            space = -1;
            slidesGroup = 7;
            free = true;
            slideLoop = false;
            slidesUpdate = true;

            this.category();

            return (
                <div className="row container">
                    <div className="slide-item">

                        <Swiper {...params}>

                            <div className="item-slide-category">
                                <a className='hiperVi'  href="https://www.kiero.co/complete-category/?id-24814-#Animales-y-Mascotas"><div className="item_category-box"><i className="fas fa-dog icon-category"></i><h2 className="title-category-box">Animales y Mascotas</h2></div></a>
                                <a className='hiperVi' href='https://www.kiero.co/complete-category/?id-49955-#Electronica,-Audio-y-Video'><div className="item_category-box"><i className="fas fa-headphones icon-category"></i><h2 className="title-category-box">Electrónica</h2></div></a>
                            </div>
                            <div className="item-slide-category">
                                <a className='hiperVi'  href="https://www.kiero.co/complete-category/?id-26071-#Bebes"><div className="item_category-box"><i className="fas fa-baby-carriage icon-category"></i><h2 className="title-category-box">Bebés</h2></div></a>
                                <a className='hiperVi'  href='https://www.kiero.co/complete-category/?id-29062-#Deportes-y-Fitness'><div className="item_category-box"><i className="fas fa-futbol icon-category"></i><h2 className="title-category-box">Deportes y fitness</h2></div></a>
                            </div>
                            <div className="item-slide-category">
                                <a className='hiperVi' href='https://www.kiero.co/complete-category/?id-28576-#Camaras-y-Accesorios'><div className="item_category-box"> <i className="fas fa-camera-retro icon-category"></i><h2 className="title-category-box">Cámaras y Accesorios</h2></div></a>
                                <a className='hiperVi' href='https://www.kiero.co/complete-category/?id-23877-#Consolas-y-Videojuegos'><div className="item_category-box"><i className="fas fa-gamepad icon-category"></i><h2 className="title-category-box">Consolas y videojuegos</h2></div></a>
                            </div>
                            <div className="item-slide-category">
                                <a className='hiperVi' href='https://www.kiero.co/complete-category/?id-26914-#Hogar-y-Muebles'><div className="item_category-box"><i className="fas fa-chair icon-category"></i><h2 className="title-category-box">Hogar y muebles</h2></div></a>
                                <a className='hiperVi' href='https://www.kiero.co/complete-category/?id-25598-#Computacion'><div className="item_category-box"><i className="fas fa-desktop icon-category"></i><h2 className="title-category-box">Computación</h2></div></a>
                            </div>
                            <div className="item-slide-category">
                                <a className='hiperVi' href='https://www.kiero.co/complete-category/?id-49835-#Salud-y-Equipamiento-Medico' ><div className="item_category-box"> <i className="fas fa-female icon-category"></i><h2 className="title-category-box">Salud</h2></div></a>
                                <a className='hiperVi' href='https://www.kiero.co/complete-category/?id-28581-#Juegos-y-Juguetes'><div className="item_category-box"> <i className="fas fa-dice icon-category"></i><h2 className="title-category-box">Juegos y juguetes</h2></div></a>
                            </div>
                                        
                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-26276-#Industrias-y-Oficinas"><div className="item_category-box"><i className="fas fa-briefcase icon-category"></i><h2 className="title-category-box">Industrias y oficinas</h2></div></a>
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-25319-#Instrumentos-Musicales"><div className="item_category-box"> <i className="fas fa-drum icon-category"></i><h2 className="title-category-box">Instrumentos musicales</h2></div></a>
                            </div>

                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-24240-#Celulares-y-Telefonos"><div className="item_category-box"> <i className="fas fa-mobile-alt icon-category"></i><h2 className="title-category-box">Celulares y Teléfonos</h2> </div></a>
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-24371-#Accesorios-para-Vehiculos"><div className="item_category-box"> <i className="fas fa-car icon-category"></i><h2 className="title-category-box">Accesorios para Vehículos</h2></div></a>
                            </div>

                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-27426-#Electrodomesticos"><div className="item_category-box"> <i className="fas fa-blender icon-category"></i><h2 className="title-category-box">Electrodomésticos</h2></div></a>
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-25624-#Herramientas-y-Construcci%C3%B3n"><div className="item_category-box"> <i className="fas fa-tools icon-category"></i><h2 className="title-category-box">Herramientas</h2> </div></a>
                            </div>

                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-29707-#Ropa,-Zapatos-y-Accesorios"><div className="item_category-box"> <i className="fas fa-tshirt icon-category"></i><h2 className="title-category-box">Ropa, zapatos y joyas</h2></div></a>
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-29262-#Coleccionables-y-Hobbies"><div className="item_category-box"> <i className="fas fa-chess-queen icon-category"></i><h2 className="title-category-box">Coleccionables y Hobbies</h2></div></a>
                            </div>

                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-29113-#Musica"><div className="item_category-box"> <i className="fas fa-music icon-category"></i><h2 className="title-category-box">Musica y pelicula</h2></div></a> 
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-25027-#Relojes-y-Joyas"><div className="item_category-box"> <i className="fas fa-clock icon-category"></i><h2 className="title-category-box">Relojes y Joyas</h2></div> </a>
                            </div>
                            <div className="item-slide-category">
                                <a className='hiperVi' href="https://www.kiero.co/complete-category/?id-26550-#Libros,-Revistas-y-Comics"><div className="item_category-box"> <i className="fas fa-book icon-category"></i><h2 className="title-category-box">Libros</h2> </div></a>
                                <a className='hiperVi' href="https://www.kiero.co/category"><div className="item_category-box"><i className="far fa-circle icon-category"></i><h2 className="title-category-box">Otras categorías</h2></div></a>
                           </div>
                        </Swiper>
                    </div>
                </div>
            )

        }


    }
}

export default SliderCategory;