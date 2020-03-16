import React, { Component } from 'react';
import logo from '../../assets/image/logo.png';
class Header extends Component {

    backHome(){
        window.location.replace("https://kiero.co");
    }

    render() {
        return (
        
                <div className="headerContainerEmpty">
                    <div className="headerWr">
                        <header>
                            <img className="logo" src={logo} alt="logo" onClick={this.backHome}/>
                            <div className="navegationHelp">
                               <a style={{color: 'white'}} className='hiperVi'href="https://www.kiero.co/help"> Ayuda / PQR </a>
                            </div>
                        </header>
                    </div>
                </div>

        )
    }
}

export default Header;