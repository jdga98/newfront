import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { isMobile } from "react-device-detect";
import axios from "axios";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import cookie from "react-cookies";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Redirect } from 'react-router-dom'
import $ from "jquery";
import "./login.css";
import imgLoginGoogl from '../../assets/image/imgLoginGoog.png'
import imgLoginFb from '../../assets/image/imgLoginFb.png'
 


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmitUs = event => {
    event.preventDefault();
    
    const MySwal = withReactContent(Swal);
    

    if (this.state.password !== "" && this.state.email !== "") {
      withReactContent(Swal);
      

      try {                   
          axios.post(`https://kieroapi.net/login/getUser/`,
          { email: this.state.email, password: this.state.password },
          {
            method: 'post', headers: { 'Content-Type': 'application/json' }
          }

        ).then(function (result) {
          if (result.data.message === "Usuario incorrecta" || result.data.message === "Contrasenna incorrecta") {
            Swal.fire(
              'Error!',
              'Usuario o Contraseña incorrecta',
              'error'
            )
          } else {
            if (cookie.load("product_url") !== undefined) {
              const URI = cookie.load("product_url");
              const amount = cookie.load("product_amount");
              
              let d = new Date();
              cookie.remove("product_url",{
                path: "/",
                expires: d,
                domain: '.kiero.co'
              })
              cookie.remove("product_amount",{
                path: "/",
                expires: d,
                domain: '.kiero.co'
              })
              
              d.setTime(d.getTime() + (20*60*1000));
              cookie.save("usuario", result.data.data[0], {
                path: "/",
                expires: d,
                domain: '.kiero.co'
              })
              cookie.save("sessionUsuario", result.data.data[0].name, {
                path: "/",
                expires: d,
                domain: '.kiero.co'
              })
              window.location.href = `https://pagos.kiero.co/#/way-to-pay/${URI}/${amount}/${result.data.data[0].id}`;
            } else {
              sessionStorage.setItem("usuario", JSON.stringify(result.data.data))
              let d = new Date();
              d.setTime(d.getTime() + (20 * 60 * 1000));

              cookie.save("usuario", result.data.data[0], {
                path: "/",
                expires: d,
                domain: '.kiero.co'
              })
              cookie.save("sessionUsuario", result.data.data[0].name, {
                path: "/",
                expires: d,
                domain: '.kiero.co'
              })
              Swal.fire(
                'Exito!',
                'Inicio de sesión Exitoso',
                'succes'
              )
              window.location.href = "https://kiero.co/";
            }
          }
        });
      } catch (err) {
        console.log("Error: ", err)
        Swal.fire(
          '502!',
          'Error interno en el Servidor',
          'error'
        )
       
      }
    } else if(this.state.email === "" || this.state.password === "") {
      MySwal.fire({
        title: "Completa los campos",
        type: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Listo"
      });
      $("#password").val("");
    }
  };

  onLoginGoogleCookie(name, value) {
    cookie.save(name, value);
  }
 
  render() {
    const responseFacebook = response => {
       var x = response.accessToken;
       if (x !== undefined ){
        axios.post(`https://kieroapi.net/register/user`,
        { 
          type_register: "f03",
          id_facebook: response.userID,
          name: response.first_name,
          lastname: response.last_name,
          email: response.email
        }).then(res => {
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
              Swal.fire(
                'Exito!',
                'Inicio de sesión Exitoso',
                'succes'
              )
              window.location.href = `https://kiero.co/`;
            }   
        })   

       }
       else{
         console.log('no se logro conectar ' + x);
       }
    
    };
    const responseGoogle = response => {
      if(response.profileObj === undefined){        
        return <Redirect to='/login'/>;
      }else{        
        axios.post(`https://kieroapi.net/register/user`,
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
              Swal.fire(
                'Exito!',
                'Inicio de sesión Exitoso',
                'succes'
              )
              window.location.href = `https://kiero.co/`;
              //return <Redirect to={'https://www.kiero.co/'}/>
            }
        });
      }
    };

    

    var footer = '';
    if (isMobile) {
      footer = <div className="footer-mb">
        <Footer />
      </div>;
    }
    else {
      footer = <div className="footer">
        <Footer />
      </div>;
    }

    return (
      <div>
        <Header />
        
          <div className="main-login">
            <h1>Iniciar sesión</h1>
            <div className="ui_not-register">
              ¿Eres nuevo en este sitio?<a className='txt-password' href="https://kiero.co/registration">  Regístrate</a>
            </div>
            <div className="btn_login-user">
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
                     <img className='imgpro' src={imgLoginGoogl} alt='login googl'></img>
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
                      <img className='imgpro' src={imgLoginFb} alt='login faceb'></img>
                    </button>
                  )}
                />
            </div>
            <div className="auth_social"><h2><span>o</span></h2></div>
            <div className="auth_social">
             
            </div>
            
              
             
            <div className='lg-name'>
              <label className="label-login">Email</label>
            </div>
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <input
                  id="name"
                  type="text"
                  className="inp-Email"
                  placeholder="Correo electrónico"
                  aria-label="Correo electrónico"
                  aria-describedby="addon-wrapping"
                  autoComplete="off"
                  name="email"
                  onChange={this.handleEmailChange}
                ></input>
              </div>

            </div>
            <div className='lg-name'>
              {" "}
              <label className="label-login">Contraseña</label>
            </div>
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <input
                  id="passw"
                  type="password"
                  className="inp-Email"
                  placeholder="Contraseña"
                  aria-label="Contraseña"
                  aria-describedby="addon-wrapping"
                  autoComplete="off"
                  name="password"
                  onChange={this.handlePasswordChange}
                ></input>
              </div>
            </div>
            <div className="inp-forgetpassw">
              <a href="https://kiero.co/renovatePassword" className="txt-password">¿Olvidaste tu contraseña?</a>
            </div>

            <div className="container_fpu-login">
              <button onClick={this.handleSubmitUs} className="btn btn-login">
                Ingresar
              </button>
            </div>
            </div>
          </div>
        {footer}
      </div>
    );
  }
}

export default Login;
