import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import emailValidator from "email-validator";
import  { Redirect } from 'react-router-dom'

class Forget extends Component {
  //password_conf
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      id2: "",
      redirect: true
    };
  }
 
  renderRedirect = () => {
      return <Redirect to='/target' />   
  }

  btnSend = send => {
    send.preventDefault();
  
    try {
      const userMail = this.state.mail;
      let showMessage = document.querySelector(".lg-name-hidden");
      if (userMail !== "") {
        if (emailValidator.validate(userMail)) {
          showMessage.style["display"] = "none";
           axios
            .post(
              "https://kieroapi.net/send/emailToken",
              { email: userMail },
              { headers: { "Content-Type": "application/json" } }
            )
            .then(r => {
              if (r.data.message === "ok") {
                const MySwal = withReactContent(Swal);
               
                MySwal.fire({
                  title: "Se envío un correo con el link de recuperación",
                  type: "question",
                  showCancelButton: false,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",                 
                  confirmButtonText: "Ok",
                  customClass: {
                    icon: "swal2-arabic-question-mark"
                  }
                }).then((response)=>{
                    if(response.value){                       
                      window.location.href = "https://www.kiero.co/"                       
                    }                    
                });
              } else {
                alert(
                  "No se pudo enviar el correo de recuperación contacte con el administrador"
                );
              }
            });
        } else {
          showMessage.style["display"] = "block";
          showMessage.textContent = "* Por favor escriba un correo valido";
        }
      } else {
        showMessage.style["display"] = "block";
        showMessage.textContent = "* El campo del correo no puede estar vacio";
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleEmailChange = event => {
    this.setState({
      mail: event.target.value
    });
  };

  render() {
    var footer = '';  
    if (isMobile){
      footer = <div className="footer-mb">
      <Footer />
    </div>;
    }
    else{
      footer = <div className="footer">
      <Footer />
    </div>;
    }

    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div className="main-login">
            <h1>Recuperar contraseña</h1>
            <div className="lg-name">
              <label className="label-login">
                Ingrese el correo electronico asociado a su cuenta
              </label>
            </div>
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <input
                  id="name"
                  type="mail"
                  className="inp-Email"
                  placeholder="✉Correo electronico"
                  aria-label="mail"
                  aria-describedby="addon-wrapping"
                  autoComplete="off"
                  name="email"
                  onChange={this.handleEmailChange}
                ></input>
              </div>
            </div>

            <div className="lg-name-hidden">
              {" "}
              <label className="lab-hidden">
                * El campo del correo no puede estar vacio
              </label>
            </div>

            <div className="container_fpu-login">
              <button
                type="submit"
                className="btn btn-login"
                onClick={this.btnSend}
              >
                Enviar
              </button>
            </div>

            <div className="auth_social"></div>
          </div>
        </form>
        {footer}
      </div>
    );
  }
}

export default Forget;
