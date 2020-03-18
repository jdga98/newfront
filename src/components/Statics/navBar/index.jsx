import React, { useState } from "react";
import { Input, Popup, Button, Responsive } from "semantic-ui-react";
import logo from "./../../../assets/image/logo.png";
import mesengerIcon from "./../../../assets/image/messenger_icon.png";
import whatsappIcon from "./../../../assets/image/whatsapp_icon.png";
import "./style.css";
import { Link } from "react-router-dom";
import CategoryBar from "./../categoryBar";
import ResponsiveNav from "./../responsiveNav";

const NavBarComponent = () => {
  const [state, setState] = useState(false);
  const toggleMenu = () => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };
  return (
    <nav className="navBar">
      <div className="wrapNav">
        <div className="wrapLogo">
          <Link to="/Home">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <form className="wrapForm">
          <Input type="text" action className="sizeInput" placeholder="Buscar">
            <input />
            <Button>
              <i className="fas fa-search"></i>
            </Button>
          </Input>
        </form>
        <div className="wrapIconsNavBar">
          <Popup
            content={
              <div>
                <h3>Contáctanos</h3>
                <p>(4) 604 6458</p>
                <p>01 8000 186464 (Línea gratuita)</p>
                <p>
                  <i className="fab fa-whatsapp-square"></i> +57 (1) 5800817
                  WhatsApp
                </p>
              </div>
            }
            trigger={
              <div className="navPulse">
                <i className="fas fa-phone"></i>
              </div>
            }
          />
          <a
            href="https://api.whatsapp.com/send?phone=+57(1)5800817&text=&source=&data="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsappIcon} alt="messenger" className="imgIcon" />
          </a>
          <a
            href="https://www.messenger.com/t/KieroGroup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mesengerIcon} alt="messenger" className="imgIcon" />
          </a>
          <Button className="btnNavBar">Iniciar sesion</Button>
          <Button className="btnNavBar">Registrarse</Button>
        </div>
        <Responsive as="div" maxWidth={768}>
          <div>
            <span
              className="responsiveBarsMenu"
              onClick={() => {
                toggleMenu();
              }}
            >
              <i className="fas fa-bars"></i>
            </span>
          </div>
          <ResponsiveNav visible={state} close={toggleMenu} />
        </Responsive>
      </div>
      <CategoryBar />
    </nav>
  );
};

export default NavBarComponent;
