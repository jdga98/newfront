import React, {Component} from 'react';
import {isMobile} from 'react-device-detect';

class Buys extends Component {
    render(){ 
        
        if(isMobile){
            return (
                <div className='quest-public-mb'>
                    {
                       <h2>Compras</h2>
                    } 
                    <div className='buy-container'>
                        <div className='buy-container_deliveredbuyed'>                      
                           <button className='buy-container_buybtn'>Comprar de nuevo</button>
                           <h3>Compra de prueba</h3>
                           <p>llegó el xx de diciembr</p>
                        </div>
                        <div className='buy-container_descripvendor'>
                           <div style={{width:'40%'}}>
                               <img alt='buy'/>img 
                           </div>
                           <div style={{width:'30%'}}>
                               <h3>Vendedor</h3>
                           </div>
                           <div style={{width:'30%'}}>
                               <h3>detalle</h3>
                           </div>
                            
                        </div>
                    </div>          
                </div>
            )
        }
        else{
            return (
                <div className='quest-public'>
                    {
                       <h2>Compras</h2>
                    } 
                    <div className='buy-container'>
                        <div className='buy-container_deliveredbuyed'>                      
                           <button className='buy-container_buybtn'>Comprar de nuevo</button>
                           <h3>Compra de prueba</h3>
                           <p>llegó el xx de diciembr</p>
                        </div>
                        <div className='buy-container_descripvendor'>
                           <div style={{width:'40%'}}>
                               <img alt='buy'/>img 
                           </div>
                           <div style={{width:'30%'}}>
                               <h3>Vendedor</h3>
                           </div>
                           <div style={{width:'30%'}}>
                               <h3>detalle</h3>
                           </div>
                            
                        </div>
                    </div>          
                </div>
            )
        }
    }
}
export default Buys