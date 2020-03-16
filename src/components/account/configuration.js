import React, {Component} from 'react'
import {isMobile} from 'react-device-detect'

class Configuration extends Component{

    render(){
        if(isMobile){
            return(
                <div className="quest-public-mb">
                    <h2>Configuracion</h2>
                </div>
            )
        }
        else{
        return(
            <div className="quest-public">
                <h2>Configuracion</h2>
            </div>
        )
        }
    }
}

export default Configuration