import React, { Component } from "react";
import "./_pdDetail.css";
import logoPay from "../../resource/pay.jpg";
import Button from "../Button/Button";
import ImgPayOnline from "../../resource/pay2.png";
import ImgModal from "../../resource/payModal.png";
import ImgEfectBaloto from "../../resource/payBaloEfe.png";
import imgEnvio from "../../resource/envio-01.jpg";
import imgPayAll from "../../resource/payAll.png";
import { Modal, ModalContent } from "../Modal/Modal";
import Select from "react-select";
import Sticky from "react-sticky-el";
import { isMobile } from "react-device-detect";

import cookie from "react-cookies";

class BuyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: null,
      selectedOption: null,
      sesionUser: "Iniciar sesión",
      sesionOut: "Registrarse"      
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.BuyProductBTN = this.BuyProductBTN.bind(this);
  } 
  componentDidMount(){
    this.setState({ selectedOption:1 });
  }
  
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  //====================== BTN going to buy ============================ \\
  BuyProductBTN(){
    try {
    let pausedPro = localStorage.getItem('gato');
    if(pausedPro === "false"){
     
    }
    else{
      let URI = urlShow();
      var amout = this.state.selectedOption.value ? this.state.selectedOption.value : 1;
      let d = new Date();
      d.setTime(d.getTime() + (20*60*1000));
      cookie.save("product_url",URI,{
        path: "/", 
        expires: d,
        domain: '.kiero.co'              
      })
      cookie.save("product_amount",amout,{
        path: "/", 
        expires: d,
        domain: '.kiero.co'              
      })
      if(cookie.load("usuario") === undefined || cookie.load("usuario") === null){
        window.location.href = `https://kiero.co/login`;      
      }else{      
        window.location.href= `https://pagos.kiero.co/#/way-to-pay/${URI}/${amout}/${cookie.load("usuario").id}`;
      }
      
      //this function extract the id from the url
      function urlShow() {
        var id2 = "";
        const idproduct = window.location.href;
        const countid = idproduct.indexOf("?id-");
        const id = idproduct.substring(countid + 4, countid + 4 + 10);
        if (id.includes("-")) {
          var countid2 = id.indexOf("-");
          id2 = id.substring(0, countid2);          
        }
        return id2;
      }
    }
    } catch (error) {
      console.log('error to buy: ' + error)
    }
    
  }

  render() {
    
    //variables for more info modal
    const isModal = this.state.showModal;
    const modalText = <h2 class="c-modal__subtitle">Tarjetas de credito</h2>;
    const imgCreditCard = (
      <img class="c-modal__imgModal" src={ImgModal} alt="logo pay"></img>
    );
    const imgPay2 = (
      <img class="c-modal__imgModal" src={ImgPayOnline} alt="logo pay2"></img>
    );
    const imgEfecty = (
      <img
        class="c-modal__imgModal"
        src={ImgEfectBaloto}
        alt="logo efecty baloto"
      ></img>
    );
    const txtTransfBank = (
      <h2 class="c-modal__subtitle">Transferencia desde tu banco</h2>
    );
    const bankMessage = (
      <h6 class="c-modal__h6Mod">
        El banco incluirá los intereses de las cuotas en el resumen de tu
        tarjeta
      </h6>
    );
    const modalImgEnvio = (
      <img class="c-modal__imgModal2" src={imgEnvio} alt="logo pay2"></img>
    );
    const textTransOnline = <h6 class="c-modal__subtitle">Traspaso Online</h6>;
    const textFinishBuy = (
      <h6 class="c-modal__h6Mod">
        cuando termines tu compra, te daremos las instrucciones para que sepas
        cómo y dónde pagarla
      </h6>
    );

    const textWarranty = (
      <div className="m-warranty">
        <p>
          {" "}
          <strong>Compra Protegida</strong>{" "}
        </p>
        <p></p>En caso de que surja algún problema o no recibas el producto tal
        como lo compraste, te devolveremos el dinero que pagaste.<p></p>
        <p>
          {" "}
          <strong>Siempre contarás con nuestra ayuda</strong>{" "}
        </p>
        <p></p>Te acompañaremos hasta que recibas lo que compraste y nos avises
        que estás conforme. Si tienes algún problema, solo tienes que avisarnos.{" "}
        <p></p>
        <p>
          {" "}
          <strong>Garantía del vendedor</strong>{" "}
        </p>
        <p></p>Garantia por defecto de fabrica de (1) un mes.<p></p>
      </div>
    );
      
    const UnityAvaibles = [
      { label: "1 Unidad", value: 1 },
      { label: "2 Unidades", value: 2 },
      { label: "3 Unidades", value: 3 },
      { label: "4 Unidades", value: 4 },
      { label: "5 Unidades", value: 5 }
    ];

    
    if (isMobile) {
      return (
        <div>
          <div className="pdetail-mobil">
            <div className="k-shipping">
              {isModal === "modal-one" && (
                <Modal>
                  <ModalContent
                    show={this.state.showModal}
                    handleClose={() => this.setState({ showModal: null })}
                    modalTitle="Metodos de pago"
                  >
                    {modalText}
                    {imgCreditCard}
                    {bankMessage}
                    {txtTransfBank}
                    {imgPay2}
                    {textTransOnline}
                    {imgEfecty}
                    {textFinishBuy}
                  </ModalContent>
                </Modal>
              )}

              {isModal === "modal-two" && (
                <Modal>
                  <ModalContent
                    show={this.state.showModal}
                    handleClose={() => this.setState({ showModal: null })}
                    modalTitle="Envios"
                  >
                    {modalImgEnvio}
                  </ModalContent>
                </Modal>
              )}

              {isModal === "modal-three" && (
                <Modal>
                  <ModalContent
                    show={this.state.showModal}
                    handleClose={() => this.setState({ showModal: null })}
                    modalTitle="Garantía"
                  >
                    {textWarranty}
                  </ModalContent>
                </Modal>
              )}
              <div className="icon-shipMb">
                <i className="fas fa-truck-moving"></i>
              </div>
              <div className="info-ship">
                <h2 className="send-kmb">Envíos gratis a nivel nacional</h2>
                <button
                  className="c-button2__mb"
                  onClick={() => this.setState({ showModal: "modal-two" })}
                >
                  Conoce los tiempos de envío
                </button>
              </div>
            </div>
          </div>
          <div className="quantityMb">
            <Select
              className="drpUnitiesMb"
              options={UnityAvaibles}
              onChange={this.handleChange}
              defaultValue={UnityAvaibles[0]}
              isSearchable={false}
            >
              {" "}
            </Select>
          </div>
          <div className='btnPaymentsMb'>
              <button className="btn-paymentsMb" onClick={this.BuyProductBTN}> Comprar</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="buy-details buy-right" ref="Progress1">
          <img className="imgPay" src={logoPay} alt="logo pay"></img>
          {isModal === "modal-one" && (
            <Modal>
              <ModalContent
                show={this.state.showModal}
                handleClose={() => this.setState({ showModal: null })}
                modalTitle="Metodos de pago"
              >
                {modalText}
                {imgCreditCard}
                {bankMessage}
                {txtTransfBank}
                {imgPay2}
                {textTransOnline}
                {imgEfecty}
                {textFinishBuy}
              </ModalContent>
            </Modal>
          )}

          {isModal === "modal-two" && (
            <Modal>
              <ModalContent
                show={this.state.showModal}
                handleClose={() => this.setState({ showModal: null })}
                modalTitle="Envios"
              >
                {modalImgEnvio}
              </ModalContent>
            </Modal>
          )}

          {isModal === "modal-three" && (
            <Modal>
              <ModalContent
                show={this.state.showModal}
                handleClose={() => this.setState({ showModal: null })}
                modalTitle="Garantía"
              >
                {textWarranty}
              </ModalContent>
            </Modal>
          )}
          <div className="button-wrap">
            <Button onClick={() => this.setState({ showModal: "modal-one" })}>
              Más información
            </Button>
          </div>
          <div className="k-shipping">
            <div className="icon-ship">
              <i className="fas fa-truck-moving"></i>
            </div>
            <div className="info-ship">
              <h2 className="send-k">Kiero envios</h2>
            </div>
          </div>

          <div className="pdImported">
            <p>Nuestros productos son importados.</p>
          </div>
          <button
            className="c-button2"
            onClick={() => this.setState({ showModal: "modal-two" })}
          >
            Conoce más
          </button>

          <div className="quantity">
            <Select
              className="drpUnities"
              options={UnityAvaibles}
              onChange={this.handleChange}
              defaultValue={UnityAvaibles[0]}
              isSearchable={false}
            >
              {" "}
            </Select>
          </div>

          <Sticky           
            stickyClassName={'btnbuy'}
          >
            <div>
              <button className="btn-payments" onClick={this.BuyProductBTN}> Comprar</button>
            </div>
          </Sticky>

          <div className="avaible-product">
            <h2>Disponibles: 5</h2>
          </div>
          <div className="pay-all">
            <h2 className="title-payment_ui">Medios de Pago</h2>
            <img src={imgPayAll} alt="img all payments methods"></img>
            <Button onClick={() => this.setState({ showModal: "modal-one" })}>
              Más información
            </Button>
          </div>

          <div className="medi-warranty">
            <h2 className="title-warranty">Garantía</h2>
            <h2 className="title-warranty-buy">Compra protegida</h2>
            <p className="info-warranty">
              En caso de que surja algún problema o no recibas el producto tal
              como lo compraste, te devolveremos el dinero que pagaste.
            </p>
            <h2 className="title-warranty-buy">Garantía del vendedor</h2>
            <p className="info-warranty">
              Garantia por defecto de fabrica de (1) un mes.
            </p>
            <Button onClick={() => this.setState({ showModal: "modal-three" })}>
              Más información
            </Button>
          </div>
        </div>
      );
    }
  }
}

export default BuyProduct;
