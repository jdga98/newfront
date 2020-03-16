import React, { Component } from "react";
import app from "../../assets/image/app.png";
import { isMobile, isIOS } from "react-device-detect";
import logo from "../../assets/image/logo.png";
import siclogoPng from "../../assets/image/sicLogo.png";
import pareCompaPng from "../../assets/image/logo-pare-y-compare.png";
import { Modal } from "semantic-ui-react";

class Footer extends Component {
  state = {
    showModal: null
  };

  render() {
    const isModal = this.state.showModal;
    const modalTextBanks = (
      <div>
        <h2 className="c-modal__subtitle">Lunes a Viernes: 7:00AM - 5:30PM</h2>
        <h2 className="c-modal__subtitle">Sábados: 8:00AM - 4:00PM</h2>
      </div>
    );
    const textBankTransf = (
      <div className="c-modal__subtitle">
        {" "}
        <p>Contáctenos</p>
        <p>(4) 604 6458</p>
        <p>01 8000 186464</p>
        <p>(Línea gratuita)</p>
        <p> +57 (1) 5800817 WhatsApp</p>
        <br />
        <p>Dirección: Carrera 54 #1A-54 Oficina 201, Medellín - Colombia.</p>
      </div>
    );

    if (isMobile) {
      return (
        <div className="wp-footer">
          <div className="nav-footer-mobile">
            <div className="nav-footer-info-mobile">
              <div className="logo-footer">
                <img src={logo} alt="logo footer" />
              </div>
              <a href="https://www.kiero.co/apps">
                <div className="dw-footer">
                  <p>Descarga nuestra app para comprar!</p>
                </div>
              </a>
            </div>
          </div>
          <div className="nav-links-footer-mobile">
            <div className="nav-link-footer">
              <a href="https://www.kiero.co/login">Ingresa</a>
              <a href="https://www.kiero.co/terms">Términos y condiciones</a>
              <a href="https://www.kiero.co/registration">Crea tu cuenta</a>
              <a href="https://www.kiero.co/privacity">
                Política de privacidad
              </a>
              <a href="https://www.kiero.co/category">Categorias</a>
              <a href='https://www.sic.gov.co/'>www.sic.gov.co</a>
              <a href="https://www.kiero.co/help">Ayuda / PQR</a>
              <Modal trigger={<button>contáctenos</button>} actions={["close"]}>
              <Modal.Content>
                {modalTextBanks}
                {textBankTransf}
              </Modal.Content>
            </Modal>
              <button onClick={() => this.setState({ showModal: "modal-one" })}>
                Contáctenos
              </button>
            </div>
            <div>
            <a href="https://www.sic.gov.co/">
              <img
                style={{
                  width: "141px",
                  marginTop: "13px",
                  height: "30px"
                }}
                src={siclogoPng}
              />
            </a>
            </div>
            <div>
            <a href="https://www.sic.gov.co/">
              <img
                style={{
                  width: "170px",
                  marginTop: "13px",
                  height: "37px"
                }}
                src={pareCompaPng}
              />
            </a>
          </div>
          </div>
         
        </div>
        
      );
    }

    return (
      <>
      <div className="nav-footer">
        <div className="nav-footer-info">
          <div className="wrapper-info">
            <nav className="nav-info">
              <p>© 2019 Kiero. Todos los derechos reservados.</p>
              <a href='https://www.sic.gov.co/'>www.sic.gov.co</a>
              <a href="https://www.kiero.co/terms">Términos y condiciones</a>
              <a href="https://www.kiero.co/privacity">
                Política de privacidad
              </a>
              <Modal trigger={<button>contáctenos</button>} actions={["close"]}>
              <Modal.Content>
                {modalTextBanks}
                {textBankTransf}
              </Modal.Content>
            </Modal>
              <a href="https://www.kiero.co/help">Ayuda / PQR</a>
            </nav>
          </div>
          <div className="wrapper-app">
            <a className="hiperVi" href="https://www.kiero.co/apps">
              <img src={app} alt="app kiero" />
            </a>
          </div>
        </div>
      </div>
      <div className="nav-footer-sic">   
        <div className='nav-footer-info'>      
            <a href="https://www.sic.gov.co/">
              <img className="hiperVi" src={siclogoPng} />
            </a>
            <a href="https://www.sic.gov.co/">
              <img className="hiperVid" src={pareCompaPng} />
            </a>
        </div>       
      </div>
      </>
    );
  }
}

export default Footer;
