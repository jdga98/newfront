import React, { Component } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import axios from 'axios'
import { isMobile } from 'react-device-detect';

class Forget extends Component {
//password_conf
constructor(props) {
    super(props);
    this.state = {
      password1: "",
      password2: "",
      id2: ""      
    };
  }

    componentDidMount() {
        var id3 = "";
        const idproduct = window.location.href;
        const countid = idproduct.indexOf("?-");
        const id = idproduct.substring(countid + 74, countid  + 2);
        if (id.includes("-")) {
          var countid2 = id.indexOf("-");
          id3 = id.substring(0, countid2);          
        }
        this.setState({
            id2: id3
          });
    }

    componentWillUnmount(){
        this.setState({id2:''})
    }
 
    btnSend = send => {
       
        send.preventDefault();
        try {
        const pass1 = this.state.password1;
        const pass2 = this.state.password2;
        const token = this.state.id2;
        let showMessage = document.querySelector('.lg-name-hidden');  
        
            if(pass1 === pass2 && pass1 !== undefined){

            showMessage.style['display'] = 'none';
            axios.post('https://kieroapi.net/restore/user',
            { token: token, password: pass2},
            { headers: { 'Content-Type': 'application/json' } }
            ).then((r)=>{
          if(r.data.message === "ok"){
               alert('Actualizado correctamente')
               window.location.href = "https://kiero.co/login";         
          }
           else{
           alert('No se pudo actualizar la contraseña contacte con el administrador');
          }
            })
            }
            else{
               
                showMessage.style['display'] = 'block';
            }
        } catch (error) {
            console.log(error);
        }          
       
     
    } 
    
      handleEmailChange = event => {
        this.setState({
          password1: event.target.value
        });
      };
    
      handlePasswordChange = event => {
        this.setState({
          password2: event.target.value
        });
      };

    render(){

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

        return(
            <div>
            <Header />
            <form onSubmit={this.handleSubmit}>
              <div className="main-login">
                <h1>Restaurar Contraseña</h1>
                    <div className='lg-name'>
                        <label className="label-login">Nueva contraseña</label>
                    </div>
                  <div className="input-group flex-nowrap">
                    <div className="input-group-prepend">
                      <input
                        id="name"
                        type="password"
                        className="inp-Email"
                        placeholder="🔑Contraseña"
                        aria-label="Contraseña"
                        aria-describedby="addon-wrapping"
                        autoComplete="off"
                        name="email"
                        onChange={this.handleEmailChange}
                      ></input>
                    </div>
                 
                </div>
                  <div  className='lg-name'>
                    {" "}
                    <label className="label-login">Confirmar contraseña</label>
                  </div>
                  <div className="input-group flex-nowrap">
                    <div className="input-group-prepend">
                      <input
                        id="passw"
                        type="password"
                        className="inp-Email"
                        placeholder="🔑Contraseña"
                        aria-label="Contraseña"
                        aria-describedby="addon-wrapping"
                        autoComplete="off"
                        name="password"
                        onChange={this.handlePasswordChange}
                      ></input>
                    </div>
                  </div>
                 
                  <div  className='lg-name-hidden'>
                    {" "}
                    <label className="lab-hidden">* Las contraseñas no coinciden</label>
                  </div>

                <div className="container_fpu-login">
                  <button type="submit" className="btn btn-login" onClick={this.btnSend}>
                    Enviar
                  </button>
                </div>

                <div className="auth_social">
              
                </div>
              </div>
            </form>
            {footer}
          </div>
        )
    }
}

export default Forget