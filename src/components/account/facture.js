import React, {Component} from 'react';
import {isMobile} from 'react-device-detect'

class Facture extends Component {
    render(){
      if(isMobile){
        return (
          <div className="quest-public-mb">
              <h2>Facturación</h2>
              <div className="quest-public_questions">
                  <p>
                  <i className="fas fa-comments"></i> Preguntas
                  </p>
              </div>
              <div style={{ marginTop: '10px' }}>                
              </div>                 
          </div> 
        )
      }
      else{
        return (
          <div className="quest-public">
              <h2>Facturación</h2>
              <div className="quest-public_questions">
                  <p>
                  <i className="fas fa-comments"></i> Preguntas
                  </p>
              </div>
              <div style={{ marginTop: '10px' }}>                
              </div>                 
          </div> 
        )
      }      
    }
}
  export default Facture