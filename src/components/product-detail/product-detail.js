import React, { useState } from "react";
import "./p-detail.scss";
import "../Button/Button";
import Slider from "../Slider/Slider1";
import { Modal } from "semantic-ui-react";
import ImgPayOnline from "../../assets/image/pay2.png";
import ImgModal from "../../assets/image/payModal.png";
import ImgEfectBaloto from "../../assets/image/payBaloEfe.png";
import imgEnvio from "../../assets/image/envio-01.jpg";
import { isMobile } from "react-device-detect";
import imgPayAll from "../../assets/image/payAll.png";
import Button from "../Button/Button";

const ProductDetails = ({ proDesc }) => {
  const [ showModal, setShowModal] = useState('c-modal');
  
   
    //variables for more info modal
    const isModal = showModal;
    const modalText = (
      <h2 className="c-modal__subtitle">Tarjetas de credito</h2>
    );
    const imgCreditCard = (
      <img className="c-modal__imgModal" src={ImgModal} alt="logo pay"></img>
    );
    const imgPay2 = (
      <img
        className="c-modal__imgModal"
        src={ImgPayOnline}
        alt="logo pay2"
      ></img>
    );
    const imgEfecty = (
      <img
        className="c-modal__imgModal"
        src={ImgEfectBaloto}
        alt="logo efecty baloto"
      ></img>
    );
    const txtTransfBank = (
      <h2 className="c-modal__subtitle">Transferencia desde tu banco</h2>
    );
    const bankMessage = (
      <h6 className="c-modal__h6Mod">
        El banco incluirá los intereses de las cuotas en el resumen de tu
        tarjeta
      </h6>
    );
    const modalImgEnvio = (
      <img className="c-modal__imgModal2" src={imgEnvio} alt="logo pay2"></img>
    );
    const textTransOnline = <h6 class="c-modal__subtitle">Traspaso Online</h6>;
    const textFinishBuy = (
      <h6 className="c-modal__h6Mod">
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

    if (isMobile) {
      return (
        <section className="item-descriptions">
          <h2 className="item-descriptions__title-description">
            PRODUCTOS RECOMENDADOS
          </h2>
          <Slider categoryId={proDesc.Category} />
          <h2 className="item-descriptions__title-description">
            DETALLE DEL PRODUCTO
          </h2>
          <h2 className="item-descriptions__title-product">Titulo</h2>
          <h2 className="item-descriptions__title-product-info">
            {proDesc.titulo}
          </h2>
          <h2 className="item-descriptions__des-product">Descripción</h2>
          <h2 className="item-descriptions__des-product-info">
            {proDesc.descripcion}
          </h2>
          <h2 className="item-descriptions__info-product">Información</h2>
          <h2 className="item-descriptions__i-product-info">
            {proDesc.Informacion}
          </h2>
          <h2 className="item-descriptions__carac-product">Característica</h2>{" "}
          <ul className="item-descriptions__car-product-info">
            {" "}
            <li>
              Largo: <span id="item-L">{proDesc.largo}</span>
            </li>
            <li>
              Ancho: <span id="item-A">{proDesc.ancho}</span>
            </li>
            <li>
              Alto: <span id="item-H">{proDesc.alto}</span>
            </li>
            <strong>Peso: </strong>
            <span id="item-P">{proDesc.peso}</span>
          </ul>
          <h2 className="item-descriptions__title-store">SPICEIMPORTS</h2>{" "}
          <h2 className="item-descriptions__information-store">
            *Este producto viene desde Estados Unidos
          </h2>
          <h2 className="item-descriptions__information-store">
            *(Entrega de 3 a 7 hábiles)
          </h2>
          <h2 className="item-descriptions__information-store">
            *Envío gratis
          </h2>
          <section className="buy-retrac_uiMb">
            {" "}
            <h2>me retracté de mi compra!</h2>{" "}
            <p>
              {" "}
              En caso de ya que no quieras el producto que recibiste puedes
              realizar la devolución de esté, en un periodo no mayor a 5 días
              calendario desde su fecha de entrega, por ende el cliente deberá
              asumir el valor del retorno a una de las direcciones que se le
              indicára, el valor del envío varía según el peso y el tamaño del
              paquete.{" "}
            </p>
          </section>
          <section className="Questions">
            <h5 className="Questions__desTitle">PREGUNTAS Y RESPUESTAS</h5>
            <div className="Questions__infowarranty">
              {isModal === "modal-one" && (
                <Modal>
                  <Modal.Content
                    show={this.state.showModal}
                    handleClose={() => setShowModal({ showModal: null })}
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
                  </Modal.Content>
                </Modal>
              )}

              {isModal === "modal-two" && (
                <Modal>
                  <Modal.Content
                    show={this.state.showModal}
                    handleClose={() => setShowModal({ showModal: null })}
                    modalTitle="Envios"
                  >
                    {modalImgEnvio}
                  </Modal.Content>
                </Modal>
              )}

              {isModal === "modal-three" && (
                <Modal>
                  <Modal.Content
                    show={this.state.showModal}
                    handleClose={() => setShowModal({ showModal: null })}
                    modalTitle="Garantía"
                  >
                    {textWarranty}
                  </Modal.Content>
                </Modal>
              )}
              <button
                className="c-buttonPaymentMediums__mobile"
                onClick={() => setShowModal({ showModal: "modal-two" })}
              >
                ENVIOS
              </button>

              <button
                className="c-buttonPaymentMediums__mobile"
                onClick={() => setShowModal({ showModal: "modal-one" })}
              >
                MEDIOS DE PAGO
              </button>

              <button
                className="c-buttonPaymentMediums__mobile"
                onClick={() => setShowModal({ showModal: "modal-three" })}
              >
                GARANTIA
              </button>
            </div>

            <div className="Questions__divBtnModal"></div>
            <div className="QuestionsAndAnswers__input-group-form">
              <div className="QuestionsAndAnswers__input-group-appendMb">
                <input
                  type="text"
                  // value='{this.state.value}'
                  // onChange='{this.handleChange}'
                  className="form-control-question"
                  placeholder="Escribe una pregunta..."
                ></input>

                <button
                  className="btnquestion"
                  type="button"
                >
                  Preguntar
                </button>
              </div>
            </div>
            <section className="QuestionsAndAnswers">
              <h5 className="Questions__desTitle">ULTIMAS PREGUNTAS</h5>
              <ul
                className="QuestionsAndAnswers__description-content-details"
                id="questions1"
              >
                <div className="o__questions-data">
                  Se el primero en preguntar...
                </div>
              </ul>
            </section>
            <div className="pay-all-mb">
              <h2 className="title-payment_ui">Medios de Pago</h2>
              <img src={imgPayAll} alt="img all payments methods"></img>
              <Button onClick={() => setShowModal({ showModal: "modal-one" })}>
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
              <Button
                onClick={() => setShowModal({ showModal: "modal-three" })}
              >
                Más información
              </Button>
            </div>
          </section>
        </section>
      );
    } else {
      return (
        <div className="left-container1 ">
          <section className="item-descriptions">
            <h2 className="item-descriptions__title-description">
              PRODUCTOS RECOMENDADOS
            </h2>
            <Slider categoryId={proDesc.Category} />
            <h2 className="item-descriptions__title-description">
              DETALLE DEL PRODUCTO
            </h2>
            <h2 className="item-descriptions__title-product">Titulo</h2>
            <h2 className="item-descriptions__title-product-info">
              {proDesc.titulo}
            </h2>
            <h2 className="item-descriptions__des-product">Descripción</h2>
            <h2 className="item-descriptions__des-product-info">
              {proDesc.descripcion}
            </h2>
            <h2 className="item-descriptions__info-product">Información</h2>
            <h2 className="item-descriptions__i-product-info">
              {proDesc.Informacion}
            </h2>
            <h2 className="item-descriptions__carac-product">Característica</h2>{" "}
            <ul className="item-descriptions__car-product-info">
              {" "}
              <li>
                Largo: <span id="item-L">{proDesc.largo}</span>
              </li>
              <li>
                Ancho: <span id="item-A">{proDesc.ancho}</span>
              </li>
              <li>
                Alto: <span id="item-H">{proDesc.alto}</span>
              </li>
              <strong>Peso: </strong>
              <span id="item-P">{proDesc.peso}</span>
            </ul>
            <h2 className="item-descriptions__title-store">SPICEIMPORTS</h2>{" "}
            <h2 className="item-descriptions__information-store">
              *Este producto viene desde Estados Unidos
            </h2>
            <h2 className="item-descriptions__information-store">
              *(Entrega de 3 a 7 hábiles)
            </h2>
            <h2 className="item-descriptions__information-store">
              *Envío gratis
            </h2>
          </section>
          <section className="buy-retrac_ui">
            {" "}
            <h2>me retracté de mi compra!</h2>{" "}
            <p>
              {" "}
              En caso de ya que no quieras el producto que recibiste puedes
              realizar la devolución de esté, en un periodo no mayor a 5 días
              calendario desde su fecha de entrega, por ende el cliente deberá
              asumir el valor del retorno a una de las direcciones que se le
              indicára, el valor del envío varía según el peso y el tamaño del
              paquete.{" "}
            </p>
          </section>
          <section className="Questions">
            {isModal === "modal-one" && (
              <Modal>
                <Modal.Content
                  show={this.state.showModal}
                  handleClose={() => setShowModal({ showModal: null })}
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
                </Modal.Content>
              </Modal>
            )}

            {isModal === "modal-two" && (
              <Modal>
                <Modal.Content
                  show={this.state.showModal}
                  handleClose={() => setShowModal({ showModal: null })}
                  modalTitle="Envios"
                >
                  {modalImgEnvio}
                </Modal.Content>
              </Modal>
            )}

            {isModal === "modal-three" && (
              <Modal>
                <Modal.Content
                  show={this.state.showModal}
                  handleClose={() => setShowModal({ showModal: null })}
                  modalTitle="Garantía"
                >
                  {textWarranty}
                </Modal.Content>
              </Modal>
            )}

            <h5 className="Questions__desTitle">PREGUNTAS Y RESPUESTAS</h5>
            <div className="Questions__infowarranty">
              <button
                className="c-buttonPaymentMediums"
                onClick={() => setShowModal({ showModal: "modal-two" })}
              >
                ENVIOS
              </button>

              <button
                className="c-buttonSend"
                onClick={() => setShowModal({ showModal: "modal-one" })}
              >
                MEDIOS DE PAGO
              </button>

              <button
                className="c-buttonSend"
                onClick={() => setShowModal({ showModal: "modal-three" })}
              >
                GARANTIA
              </button>
            </div>

            <div className="Questions__divBtnModal"></div>
            <div className="QuestionsAndAnswers__input-group-form">
              <div className="QuestionsAndAnswers__input-group-append">
                <input
                  type="text"
                  // value='{this.state.value}'
                  // onChange='{this.handleChange}'
                  className="form-control-question"
                  placeholder="Escribe una pregunta..."
                ></input>

                <button
                  className="btnquestion"
                  type="button"
                >
                  Preguntar
                </button>
              </div>
            </div>
            <section className="QuestionsAndAnswers">
              <h5 className="Questions__desTitle">ULTIMAS PREGUNTAS</h5>
              <ul
                className="QuestionsAndAnswers__description-content-details"
                id="questions1"
              >
                <div className="o__questions-data">
                  Se el primero en preguntar...
                </div>
              </ul>
            </section>
          </section>
        </div>
      );
    }
}

export default ProductDetails;
