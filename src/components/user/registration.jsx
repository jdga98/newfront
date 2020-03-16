import React, { Component } from "react";
import { render } from "react-dom";
import Header from "../Header";
import Footer from "../Footer";
import $ from "jquery";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./registration.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import cookie from "react-cookies";
import { Redirect } from 'react-router-dom'
import { isMobile } from "react-device-detect";
import axios from "axios";
import imgRegisGoogl from '../../assets/image/imgRegisterGoogl.png'
import imgRegisFb from '../../assets/image/imgRegisterFace.png';
import emailValidator from "email-validator";

class App extends Component {
  render() {
    return <div />;
  }
}

export default class registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      lastName: null,
      email: null,
      password: null,
      errors: {
        fullName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    
   
    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 2 ? "¡Los nombres deben tener 2 caracteres!" : "";
        break;
      case "email":
        errors.email = emailValidator.validate(value)
          ? ""
          : "¡El correo no es válido!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "¡La contraseña debe tener 8 caracteres de longitud!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit(event) {
    this.user = this.state;
    
    event.preventDefault();
    $("#fullform").hide();
    if (this.state.name !== "") {
      $("#name").css("border-color", "green");
      $("#fullform").show();
    } else {
      $("#name").css("border-color", "red");
      $("#fullform").hide();
    }
    if (this.state.password !== "") {
      $("#password").css("border-color", "green");
      $("#fullform").show();
    } else {
      $("#password").css("border-color", "red");
      $("#fullform").hide();
    }
    if (this.state.lastname !== "") {
      $("#lastname").css("border-color", "green");
      $("#fullform").show();
    } else {
      $("#lastname").css("border-color", "red");
      $("#fullform").hide();
    }
    if (emailValidator.validate(this.state.email)) {
      $("#email").css("border-color", "green");
      $("#fullform").show();
    } else {
      $("#email").css("border-color", "red");
      $("#fullform").hide();
    }

    $("#fullform").show();
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });  
  }
  createUser(event) {
    

    const MySwal = withReactContent(Swal);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        confirmButtonText: "Listo",
        cancelButton: "btn btn-danger",
        concelButtonText: "Listo"
      },
      buttonsStyling: false
    });

    if (
      this.state.name !== "" &&
      this.state.password !== "" &&
      this.state.lastname !== "" &&
      this.state.lastname !== "" &&
      emailValidator.validate(this.state.email)
    ) {
      MySwal.fire({
        title: "Estas serguro?",
        type: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "No",
        confirmButtonText: "Si",
        customClass: {
          icon: "swal2-arabic-question-mark"
        }
      }).then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire("Completar", "", "success");
          try{
             axios.post(`https://kieroapi.net/register/user`,{name:this.state.fullName, lastname:this.state.lastName, nickName:"xxNickxx", email:this.state.email, password:this.state.password}).then(function(result){
              
              if(result.data.message === "Usuario ok"){
                window.location.href = "https://kiero.co/login"                
              }else{
                Swal.fire(
                  'Correo!',
                  'Este correo ya existe',
                  'error'
                )
              }
            })
          }catch(err){
            console.log("Error")
          }          
          $("#name").val("");
          $("#lastname").val("");
          $("#password").val("");
          $("#email").val("");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelar", "", "error", "fasd");
          $("#password").val("");
        }
      });
    } else {
      MySwal.fire({
        title: "Completa los campos",
        type: "error",
        confirmButtonColor: "#d33",

        confirmButtonText: "Listo"
      });
      $("#password").val("");
    }
  }

  render() {
    const responseFacebook = response => {
      axios.post(`https://kieroapi.net/register/user`,
        {
          type_register: "f03",
          id_facebook: response.userID,
          name: response.first_name,
          lastname: response.last_name,
          email: response.email
        }).then(res => {
          if(res.status){
           var data = res.data.data.recordset[0];
        
            let d = new Date();
            d.setTime(d.getTime() + (20 * 60 * 1000));

            cookie.save("usuario", data, {
              path: "/",
              expires: d,
              domain: '.kiero.co'
            })
            cookie.save("sessionUsuario", res.data.data.recordset[0].name, {
              path: "/",
              expires: d,
              domain: '.kiero.co'
            })
            
            if (cookie.load("product_url") !== undefined) {
              const URI = cookie.load("product_url");
              const amount = cookie.load("product_amount");
              window.location.href = `https://pagos.kiero.co/#/way-to-pay/${URI}/${amount}/${cookie.load("usuario").id}`;
            }else{
              window.location.href = `https://kiero.co/`;
            }
            
          }
        })      
    };
    const responseGoogle = response => {
      if(response.profileObj === undefined){        
        return <Redirect to='/login'/>;
      }else{        
        axios.post(`https://kieroapi.net/register/user/`,
          {
            type_register: "g02",
            id_google: response.profileObj.googleId,
            name: response.profileObj.givenName,
            lastname: response.profileObj.familyName,
            email: response.profileObj.email
          },
          {
            method: "post",
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => {          
          let d = new Date();
            d.setTime(d.getTime() + (20 * 60 * 1000));
            let data = res.data.data[0];
            cookie.save("usuario", data, {
              path: "/",
              expires: d,
              domain: '.kiero.co'
            })
            cookie.save("sessionUsuario", res.data.data[0].name, {
              path: "/",
              expires: d,
              domain: '.kiero.co'
            })
            if (cookie.load("product_url") !== undefined) {
              const URI = cookie.load("product_url");
              const amount = cookie.load("product_amount");
              window.location.href = `https://pagos.kiero.co/#/way-to-pay/${URI}/${amount}/${cookie.load("usuario").id}`;
              
            }else{
              window.location.href = `https://kiero.co/`;
            }
        });
      }
    };
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
    const { errors } = this.state;

    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div className="main-login">
            <h1>Crear Cuenta</h1>

            <div className="auth_social">
                <GoogleLogin
                  clientId="763461590581-8ue04ge6g925ctljvqdgfjtflmq0ndu9.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  render={renderProps => (
                    <button
                      className="btn-google"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <img className='imgpro' src={imgRegisGoogl} alt='google Registrarse'></img>
                    </button>
                  )}
                />
              </div> 

              <div className="auth_social">
              <FacebookLogin
                  appId="2461759324059796"
                  fields="first_name,email,last_name"
                  callback={responseFacebook}

                  render={renderProps => (
                    <button
                      className="btn-facebook"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}                    
                    >
                      <img className='imgpro' src={imgRegisFb} alt='registrar facebook'></img>
                    </button>
                  )}
                />
                </div>
                <div className="auth_social"><h2><span>o</span></h2></div>
            <div className="auth_social">
             
            </div>

            <div className="fullName lg-name">
              <label htmlFor="fullName" className='label-login'>Nombres</label>
              <input
                type="text"
                name="fullName"
                size="50px"
                onChange={this.handleChange}
                noValidate
              />
              {errors.fullName.length > 0 && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>
            <div className="fullName">
              <label htmlFor="lastName" className='label-login'>Apellidos</label>
              <input
                type="text"
                name="lastName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.fullName.length > 0 && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>

            <div className="email">
              <label htmlFor="email" className='label-login'>Correo</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password" className='label-login'>Contraseña</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="info">
              <small></small>
            </div>
            <div className="text-center">
              Creando una cuenta, usted ha aceptado los{" "}
              <a
                href="https://www.kiero.co/terms"
                onClick={this.terms}
              >
                Términos y condiciones
              </a>{" "}
              y las{" "}
              <a
                href="https://www.kiero.co/privacity"
                onClick={this.privacid}
              >
                Políticas de privacidad
              </a>{" "}
              de Kiero.
            </div>
            <div style={{ marginTop: "40px", paddingBottom: "30px"}}>
              <div className="container_fpu container ">
                <button onClick={this.createUser} className="btn btn-register ">
                  {" "}
                  Crear tu cuenta en Kiero{" "}
                  <span className="fa fa-thumbs-up"></span>
                </button>
              </div>
              <div className="btn_login-user">
            </div>
            </div>
          </div>
        </form>
        {footer}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
