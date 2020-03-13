import React from "react";
import app from "../../assets/image/app.png";
import siclogoPng from "../../assets/image/sicLogo.png";
import logo from "../../assets/image/logo.png";
import pareCompaPng from "../../assets/image/logo-pare-y-compare.png";
import { Modal } from "semantic-ui-react";
import "../Footer/style.scss";
import { isMobile } from "react-device-detect";

const Footer = () => {
  const modalTextBanks = (
    <div>
      <p className="nav-footer__modal">Lunes a Viernes: 7:00AM - 5:30PM</p>
      <p className="nav-footer__modal">Sábados: 8:00AM - 4:00PM</p>
    </div>
  );

  const textBankTransf = (
    <div className="nav-footer__modal">
      {" "}
      <p>(4) 604 6458</p>
      <p>01 8000 186464</p>
      <p>(Línea gratuita)</p>
      <p> +57 (1) 5800817 WhatsApp</p>
      <p>Dirección: Carrera 54 #1A-54 Oficina 201, Medellín - Colombia.</p>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <div className="nav-footer_mobile">
          <div className="nav-footer_mobile_info">
            <div className="nav-footer_mobile_info_logo">
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
            <a href="https://www.kiero.co/privacity">Política de privacidad</a>
            <a href="https://www.kiero.co/category">Categorias</a>
            <a href="https://www.sic.gov.co/">www.sic.gov.co</a>
            <a href="https://www.kiero.co/help">Ayuda / PQR</a>
            <Modal trigger={<button>contáctenos</button>} actions={["close"]}>
              <Modal.Content>
                {modalTextBanks}
                {textBankTransf}
              </Modal.Content>
            </Modal>
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
      </>
    );
  }

  return (
    <>
      <div className="nav-footer">
        <div className="nav-footer__info">
          <div className="nav-footer__info-wrapper">
            <nav className="nav-footer__info-wrapper-info">
              <p>© 2019 Kiero. Todos los derechos reservados.</p>
              <a href="https://www.sic.gov.co/">www.sic.gov.co</a>
              <a href="https://www.kiero.co/terms">Términos y condiciones</a>
              <a href="https://www.kiero.co/privacity">
                Política de privacidad
              </a>
              <Modal trigger={<button>contáctenos</button>} actions={["close"]}>
                <Modal.Header>
                  <p className="nav-footer__modal-title">Contáctenos</p>
                </Modal.Header>
                <Modal.Content>
                  {modalTextBanks}
                  {textBankTransf}
                </Modal.Content>
              </Modal>

              <a href="https://www.kiero.co/help">Ayuda / PQR</a>
            </nav>
          </div>
          <div className="nav-footer__info-wrapper-app">
            <a className="hiperVi" href="https://www.kiero.co/apps">
              <img src={app} alt="app kiero" />
            </a>
          </div>
        </div>
        <div className="nav-footer__sic">
          <div className="nav-footer__info">
            <a href="https://www.sic.gov.co/">
              <img className="nav-footer__info_hiperVi" src={siclogoPng} />
            </a>
            <a href="https://www.sic.gov.co/">
              <img className="nav-footer__info_hiperVid" src={pareCompaPng} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
