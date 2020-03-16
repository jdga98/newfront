import React from "react";
import { isMobile } from "react-device-detect";
import axios from "axios";

class DataPerson extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    //here we do the call from the api
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {                
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

  render() {         
    const { posts } = this.state;    
   
    if (isMobile) {
      return (
        <div className="quest-public-mb">
           <h2>Mis datos</h2>
           <h3 style={{ marginTop: "40px" }}>Datos de cuenta</h3>
        </div>
      );
    } else {
      return (
        <div style={{marginLeft: '50px'}} className='main-container'>
        <div className="data-person">
          <div>
            <h2 style={{color:'#666666' }}>Mis datos</h2>
            <h3 style={{ marginTop: "40px", color:'#666666'  }}>Datos de cuenta</h3>
            <div className='data-person_container'>
                <div className='data-person_field'>
                    <div className='data-person_data' role="button">
                        Usuario
                    </div>
                    <div className='data-person_description'>{posts.map((infoUser)=> <p key={infoUser.name}>{infoUser.name}</p>)}</div>
                    <div><i className="fas fa-greater-than"></i></div>
                </div>
                <div className='data-person_field'>
                    <div className='data-person_data'>
                        Email
                    </div>  
                    <div className='data-person_description'>emailspace</div> 
                    <div><i className="fas fa-greater-than"></i></div>
                </div>
               
                           
            </div>
            <h3 style={{ marginTop: "40px",color:'#666666' }}>Datos personales</h3>
            <div className='data-person_container'>
                <div className='data-person_field'>
                    <div className='data-person_data'>
                        Nombre y apellido
                    </div>
                    <div className='data-person_description'>
                        prueb123
                    </div>
                    <div><i className="fas fa-greater-than"></i></div>
                </div>
                <div className='data-person_field'>
                    <div className='data-person_data'>
                        Documento
                    </div>  
                    <div className='data-person_description'>doc123</div>
                    <div><i className="fas fa-greater-than"></i></div>  
                </div>
                <div className='data-person_field'>
                    <div className='data-person_data'>
                        Teléfono
                    </div> 
                    <div className='data-person_description'>tel123</div>
                    <div><i className="fas fa-greater-than"></i></div>
                </div>
                <div className='data-person_field'>
                    <div className='data-person_data'>
                        Teléfono alternativo
                    </div> 
                    <div className='data-person_description'>telalt123</div>
                    <div><i className="fas fa-greater-than"></i></div>
                </div> 
                <div className='data-person_field'>
                    <div className='data-person_data'>
                        Contraseña
                    </div> 
                    <div className='data-person_description'>telalt123</div>
                    <div><i className="fas fa-greater-than"></i></div>
                </div>               
            </div>
          </div>
        </div>
        </div>
      );
    }
  }
}

export default DataPerson;
