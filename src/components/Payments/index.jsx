import React, { Component } from "react";
import "../../desktop.css";
import { Modal } from 'semantic-ui-react';
import ImgPayOnline from "../../assets/image/pay2.png";
import ImgModal from "../../assets/image/payModal.png";
import ImgEfectBaloto from "../../assets/image/payBaloEfe.png";
import { isMobile } from 'react-device-detect';

class Payments extends Component {

  whatsapp(){
    window.location.href="https://api.whatsapp.com/send?phone=+57 (1) 5800817&text=&source=&data="
  }
  
  messenger(){
    window.location.href="https://www.messenger.com/t/KieroGroup"
  }


  render() {
    const modalText = <h2 class="c-modal__subtitle">Tarjetas de credito</h2>;
    const modalTextPayEfective = <h2 class="c-modal__subtitle">Efecty</h2>;
    const modalTextBanks = (
      <h2 class="c-modal__subtitle">Consignación Bancaria</h2>
    );
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

    const textTransOnline = <h6 class="c-modal__subtitle">Traspaso Online</h6>;
    const textFinishBuy = (
      <h6 class="c-modal__h6Mod">
        cuando termines tu compra, te daremos las instrucciones para que sepas
        cómo y dónde pagarla
      </h6>
    );

    const textBankTransf = (
      <div className="c-modal__txt-banktransf">
        {" "}
        <p>
          Acércate a cualquier oficina Bancolombia a nivel nacional para
          realizar tu consignación
        </p>
        <p> Banco: Bancolombia</p>
        <p>Tipo de cuenta: Corriente</p>
        <p>Titular de la cuenta: Kiero International Group</p>
        <p>
          {" "}
          Debes tener presente que cuentas con 3 días para realizar la
          consignación y confirmar el pedido, de lo contrario será cancelado.
        </p>
      </div>
    );

    var iconMessWhatsp;

    if(isMobile){
         iconMessWhatsp =  <div className='mess-fixed-mb'> <button className='whatsapp' onClick={this.whatsapp}> <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 39 39"> <path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path> <path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path> </svg> </button></div>            
    }
    else{
         iconMessWhatsp = <div className='mess-fixed'> <button className='messenger' onClick={this.messenger}><img className='img-messenger-fix' src="data:image/png;base64,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" alt='messenger'></img></button></div>
    }


    const payEfective = <div class="c-modal__pay-efective"> <p>Acércate a cualquier punto Efecty del país, tienes un plazo de 2 días Si pasados 2 días de realizar el pedido en <strong>www.kiero.co</strong> no se realiza el pago por Efecty, el pedido se cancelará. En el punto Efecty es indispensable informar que va dirigido a KIERO Cuando te soliciten la referencia, suministra el número de pedido.</p></div>;
    
    return (
      <section className="payment-info">
        <div className="payment-info-container">
          <div className="payment-info-box1">
            <div className="clearfix">
              <em className="fa fa-plus-circle plus" aria-hidden="true"></em>

              
                <Modal>
                  <Modal.Content
                    title="Metodos de pago"
                  >
                    {modalText}
                    {imgCreditCard}
                    {bankMessage}
                    {txtTransfBank}
                    {imgPay2}
                    {textTransOnline}
                    {imgEfecty}
                    {textFinishBuy}
                  </Modal.Content>
                </Modal>

             
                <Modal>
                  <Modal.Content
                    title="Transferencia desde tu banco"
                  >
                    {modalTextBanks}
                    {textBankTransf}
                  </Modal.Content>
                </Modal>

              
                <Modal>
                  <Modal.Content
                    modalTitle="Paga en efectivo"
                  >
                    {modalTextPayEfective}
                    {payEfective}
                  </Modal.Content>
                </Modal>

              <h1>Más Metodos de pagos</h1>

              <button
                className="c-modal__modalpay"
                onClick={() => this.setState({ showModal: "modal-one" })}
              >
                Ver más
              </button>
            </div>
          </div>

          <div className="payment-info-box1">
            <div className="clearfix">
              <em className="fa fa-university tranfer" aria-hidden="true"></em>

              <h1>Transferencia bancaria</h1>

              <button
                className="c-modal__modalpay"
                onClick={() => this.setState({ showModal: "modal-two" })}
              >
                Ver más
              </button>
            </div>
          </div>

          <div className="payment-info-box1">
            <div className="clearfix">
              <em
                className="fas fa-money-bill-alt Efect"
                aria-hidden="true"
              ></em>

              <h1>Paga en efectivo</h1>

              <button className="c-modal__modalpay"
                onClick={() => this.setState({ showModal: "modal-three" })}>Ver más</button>
            </div>
          </div>
        </div>
        {iconMessWhatsp}
      </section>
    );
  }
}

export default Payments;
