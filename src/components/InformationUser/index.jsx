import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { isMobile } from 'react-device-detect';

var params;
class Information extends Component {

    slider = () => {
        params = {
            spaceBetween: 5,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        }
    }

    render() {

        if (isMobile) {

            return (
                <section className="information">
                    <div className="information-user">
                        <Swiper {...params}>
                            <div className="information-user-flex">
                                <i className="fas fa-phone-square ico"></i>
                                <h2>Contacto</h2>
                                <p>Sobre dudas, quejas y reclamos</p> <h2> +57 (1) 5800817</h2> <h2> (4) 604 6458 EXT 1103</h2>
                            </div>

                            <div className="information-user-flex">

                                <i className="fas fa-shipping-fast ico "></i>
                                <h2>Envíos</h2>
                                <p>Envio gratis en todos nuestros productos con un tiempo de envio de 3 a 7 días hábiles.</p>

                            </div>

                            <div className="information-user-flex">
                                <i className="fas fa-shield-alt ico"></i>
                                <h2>Seguridad</h2>
                                <p>No te gusta? ¡Devuélvelo! En Kiero, velamos por tu seguridad, compra con confianza estamos contigo en cada momento.</p>
                            </div>
                        </Swiper>
                    </div>
                </section>
            )
        } else {

        }

        return (
            <section className="information">
                <div className="information-user">
                    <div className="information-user-flex">
                        <i className="fas fa-phone-square ico"></i>
                        <h2>Contacto</h2>
                        <p>Sobre dudas, quejas y reclamos +57 (1) 5800817 (4) 604 6458 EXT 1103</p>
                    </div>
                    <div className="information-user-flex">

                        <i className="fas fa-shipping-fast ico "></i>
                        <h2>Envíos</h2>
                        <p>Envio gratis en todos nuestros productos con un tiempo de envio de 3 a 7 días hábiles.</p>

                    </div>
                    <div className="information-user-flex">
                        <i className="fas fa-shield-alt ico"></i>
                        <h2>Seguridad</h2>
                        <p>No te gusta? ¡Devuélvelo! En Kiero, velamos por tu seguridad, compra con confianza estamos contigo en cada momento.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Information;