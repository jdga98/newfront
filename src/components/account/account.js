import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./account.scss";
import "./account-mb.scss";
import Header from "../Nav";
import Footer from "../Footer";
import Buys from "./buys";
import Resume from "./resume";
import Facture from "./facture";
import Configure from "./configuration";
import DataPerson from "./dataPerson";
import Questions from "./Questions";
import { isMobile } from "react-device-detect";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      render: "dataPerson",
      showMenu: false,
      bold: false,
      showConfig: false,
      isActive: true
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.showConfig = this.showConfig.bind(this);
    this.closeConfig = this.closeConfig.bind(this);
  }
  showSettings(event) {
    event.preventDefault();
  }

  handleClick(compName, e) {
    this.setState({ render: compName });
  }

  _renderSubComp() {
    switch (this.state.render) {
      case "buy":
        return <Buys />;
      case "resume":
        return <Resume />;
      case "facture":
        return <Facture />;
      case "configure":
        return <Configure />;
      case "dataPerson":
        return <DataPerson />;
      case "question":
        return <Questions ActiveItem={true} />;
      default:
        return;
    }
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  showConfig(event) {
    event.preventDefault();

    this.setState({ showConfig: true }, () => {
      document.addEventListener("click", this.closeConfig);
    });
  }

  closeConfig(event) {
    if (!this.dropdownConfig.contains(event.target)) {
      this.setState({ showConfig: false }, () => {
        document.removeEventListener("click", this.closeConfig);
      });
    }
  }

  render() {
    if (isMobile) {
      return (
        <div>
          <Header />
          <div className="contain-acc">
            <div className="contain-acc_wrapper">
              <Menu>
                <a id="home" className="menu-item" href="/infoaccount">
                  Mi cuenta
                </a>
                <button
                  id="about"
                  className="menu-item"
                  onClick={this.handleClick.bind(this, "resume")}
                >
                  <i className="fa fa-file-text" aria-hidden="true"></i> Resumen
                </button>
                <button
                  id="contact"
                  className="menu-item"
                  onClick={this.handleClick.bind(this, "buy")}
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                  Compras
                </button>
                <button
                  onClick={this.handleClick.bind(this, "facture")}
                  className="menu-item--small"
                >
                  <i className="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                  Facturación
                </button>
                <button onClick={this.handleClick.bind(this, "configure")}>
                  <i className="fas fa-cog"></i> Configuración
                </button>
              </Menu>
              <div className="leftside-infomb">
                <button
                  onClick={this.handleClick.bind(this, "resume")}
                  className="contain-acc_menu-item-mb"
                >
                  <i className="fa fa-file-text" aria-hidden="true"></i>{" "}
                </button>
                <button
                  onClick={this.handleClick.bind(this, "buy")}
                  className="contain-acc_menu-item-mb"
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                </button>
                <button
                  onClick={this.handleClick.bind(this, "facture")}
                  className="contain-acc_menu-item-mb"
                >
                  <i className="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                </button>
                <button
                  onClick={this.handleClick.bind(this, "configure")}
                  className="contain-acc_menu-item-mb"
                >
                  <i className="fas fa-cog"></i>
                </button>
              </div>
            </div>
            <div style={{ marginLeft: "40px", height: "800px" }}>
              {this._renderSubComp()}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <div className="contain-acc">
            <div className="contain-acc_wrapper">
              <Menu>
                <a id="home" className="menu-item" href="/infoaccount">
                  Mi cuenta
                </a>
                <button
                  id="about"
                  className="menu-item"
                  onClick={this.handleClick.bind(this, "resume")}
                >
                  <i className="fa fa-file-text" aria-hidden="true"></i> Resumen
                </button>
                <button
                  id="contact"
                  className="menu-item"
                  onClick={this.handleClick.bind(this, "buy")}
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                  Compras
                </button>
                <button
                  onClick={this.handleClick.bind(this, "facture")}
                  className="menu-item--small"
                >
                  <i className="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                  Facturación
                </button>
                <button onClick={this.handleClick.bind(this, "configure")}>
                  <i className="fas fa-cog"></i> Configuración
                </button>
              </Menu>
            </div>
            <div className="contain-acc_right-panel">
              <div className="contain-acc_left-panel">
                <div style={{ height: "700px" }}>
                  <nav className="account-info">
                    <button
                      id="home"
                      className="contain-acc_menu-item"
                      href="/"
                    >
                      Mi cuenta
                    </button>
                    <button
                      onClick={this.handleClick.bind(this, "resume")}
                      className="contain-acc_menu-item"
                    >
                      <i className="fa fa-file-text" aria-hidden="true"></i>{" "}
                      Resumen
                    </button>

                    <button
                      onClick={this.showMenu}
                      className="contain-acc_menu-item"
                    >
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                      Compras{" "}
                      <i className="fas fa-angle-down contain-acc_menu-item_customized-fa"></i>
                    </button>
                    {this.state.showMenu ? (
                      <div
                        className="menu"
                        ref={element => {
                          this.dropdownMenu = element;
                        }}
                      >
                        <button
                          className="quest-public_dropBtn"
                          onClick={this.handleClick.bind(this, "question")}
                        >
                          {" "}
                          preguntas{" "}
                        </button>
                        <button
                          className="quest-public_dropBtn"
                          onClick={this.handleClick.bind(this, "buy")}
                        >
                          {" "}
                          compras{" "}
                        </button>
                      </div>
                    ) : null}

                    <button
                      onClick={this.handleClick.bind(this, "facture")}
                      className="contain-acc_menu-item"
                    >
                      <i className="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                      Facturación
                    </button>
                    <button
                      onClick={this.showConfig}
                      className="contain-acc_menu-item"
                    >
                      <i className="fas fa-cog"></i> Configuración{" "}
                      <i className="fas fa-angle-down contain-acc_menu-item_customized-fa"></i>
                    </button>

                    {this.state.showConfig ? (
                      <div
                        className="menu"
                        ref={element => {
                          this.dropdownConfig = element;
                        }}
                      >
                        <button
                          onClick={this.handleClick.bind(this, "dataPerson")}
                          className="quest-public_dropBtn"
                        >
                          Mis datos
                        </button>
                      </div>
                    ) : null}
                  </nav>
                </div>
              </div>
              <div style={{ marginLeft: "40px", height: "800px" }}>
                {this._renderSubComp()}
              </div>
            </div>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default Account;
