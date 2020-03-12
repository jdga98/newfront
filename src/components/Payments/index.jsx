import React, { useState } from "react";
import "./style.css";
import { Modal, Button } from "semantic-ui-react";
import logoCredit from "./../../assets/image/payCredit.png";
import logoTransfer from "./../../assets/image/payTransfer.png";
import logoOnline from "./../../assets/image/payOnline.png";

const Payments = () => {
  const [state, setState] = useState({
    modal1: false,
    modal2: false,
    modal3: false
  });
  const openModals = num => {
    const newState = { ...state };
    newState[`modal${num}`] = true;
    setState(newState);
  };
  const closeModals = num => {
    const newState = { ...state };
    newState[`modal${num}`] = false;
    setState(newState);
  };
  return (
    <div className="payments">
      <div className="wrapPayments">
        <Modal
          open={state.modal1}
          trigger={
            <div
              className="itemPayment"
              onClick={() => {
                openModals(1);
              }}
            >
              <p className="pStyle">
                <i className="fas fa-plus-circle"></i>
              </p>
              <p className="pStyle">Más Metodos de pagos</p>
              <p className="pStyle">Ver más</p>
            </div>
          }
        >
          <Modal.Header>
            <h3>Más Metodos de pagos</h3>
          </Modal.Header>
          <Modal.Content className="textCenter">
            <h4>Tarjetas de credito</h4>
            <img src={logoCredit} alt="tarjetas credito" className="sizeImg" />
            <p>
              El banco incluirá los intereses de las cuotas en el resumen de tu
              tarjeta
            </p>
            <h4>Transferencia desde tu banco</h4>
            <img
              src={logoTransfer}
              alt="tarjetas credito"
              className="sizeImg"
            />
            <h4>Traspaso Online</h4>
            <img src={logoOnline} alt="tarjetas credito" className="sizeImg" />
            <p>
              cuando termines tu compra, te daremos las instrucciones para que
              sepas cómo y dónde pagarla
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={() => {
                closeModals(1);
              }}
            >
              Aceptar
            </Button>
          </Modal.Actions>
        </Modal>
        <Modal
          open={state.modal2}
          trigger={
            <div
              className="itemPayment"
              onClick={() => {
                openModals(2);
              }}
            >
              <p className="pStyle">
                <i className="fas fa-university"></i>
              </p>
              <p className="pStyle">Transferencia bancaria</p>
              <p className="pStyle">Ver más</p>
            </div>
          }
        >
          <Modal.Header>
            <h3>Transferencia bancaria</h3>
          </Modal.Header>
          <Modal.Content>
            <p>
              Acércate a cualquier oficina Bancolombia a nivel nacional para
              realizar tu consignación
            </p>
            <p>Banco: Bancolombia</p>
            <p>Tipo de cuenta: Corriente</p>
            <p>Titular de la cuenta: Kiero International Group</p>
            <p>
              Debes tener presente que cuentas con 3 días para realizar la
              consignación y confirmar el pedido, de lo contrario será
              cancelado.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={() => {
                closeModals(2);
              }}
            >
              Aceptar
            </Button>
          </Modal.Actions>
        </Modal>
        <Modal
          open={state.modal3}
          trigger={
            <div
              className="itemPayment"
              onClick={() => {
                openModals(3);
              }}
            >
              <p className="pStyle">
                <i className="fas fa-money-bill-alt"></i>
              </p>
              <p className="pStyle">Paga en efectivo</p>
              <p className="pStyle">Ver más</p>
            </div>
          }
        >
          <Modal.Header>
            <h3>Paga en efectivo</h3>
          </Modal.Header>
          <Modal.Content>
            <h4>Efecty</h4>
            <p>
              Acércate a cualquier punto Efecty del país, tienes un plazo de 2
              días Si pasados 2 días de realizar el pedido en www.kiero.co no se
              realiza el pago por Efecty, el pedido se cancelará. En el punto
              Efecty es indispensable informar que va dirigido a KIERO Cuando te
              soliciten la referencia, suministra el número de pedido.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={() => {
                closeModals(3);
              }}
            >
              Aceptar
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
};

export default Payments;
