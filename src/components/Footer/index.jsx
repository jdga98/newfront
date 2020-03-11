import React from "react";
import { app } from "../../assets/image/app.png";
import { siclogoPng } from "../../assets/image/app.png";
import { pareCompaPng } from "../../assets/image/app.png";
import { Modal } from "semantic-ui-react";
import "../Footer/style.scss";

const Footer = () => {
  return (
    <>
      <div className="nav-footer">
        <div className="nav-footer__info">
          <div className="wrapper-info">
            <nav className="nav-info">
              <p>© 2019 Kiero. Todos los derechos reservados.</p>
              <a href="https://www.sic.gov.co/">www.sic.gov.co</a>
              <a href="https://www.kiero.co/terms">Términos y condiciones</a>
              <a href="https://www.kiero.co/privacity">
                Política de privacidad
              </a>
              <Modal
                trigger={<button>open</button>}
                header="Contáctenos"
                content="lo que sea x2"
                actions={["close"]}
              />
              <a href="https://www.kiero.co/help">Ayuda / PQR</a>
            </nav>
          </div>
          <div className="wrapper-app">
            <a className="hiperVi" href="https://www.kiero.co/apps">
              <img src={app} alt="app kiero" />
            </a>
          </div>
        </div>
        <div className="nav-footer__sic">
          <div className="nav-footer-info">
            <a href="https://www.sic.gov.co/">
              <img className="hiperVi" src={siclogoPng} />
            </a>
            <a href="https://www.sic.gov.co/">
              <img className="hiperVid" src={pareCompaPng} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
