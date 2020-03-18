import React, { Component } from 'react';

class Toolbars extends Component {

    //this add the event listener when clicked the toolbar
    componentDidMount() {

        const categories = document.querySelector('.toolbar__categories-launch');
        const toolbarContent = document.querySelector('.toolbar-info-categories')

        categories.addEventListener("click", () => {
            toolbarContent.classList.toggle("launch")
        });
    }

    render() {

        return (
            <div>
                <div className="toolbar">
                    <div className="operations">
                        <div className="toolbar__content">
                            <a href="#" className="toolbar__categories-launch">
                                <label className="lb__toolbar">Categorias</label>
                            </a>
                        </div>
                        <div className="toolbar__content">
                            <a className="hola" onClick={hola}>
                                <label className="lb__toolbar">Listado</label>
                            </a>
                        </div>
                        <div className="toolbar__content">
                            <label className="lb__toolbar">Filtrar</label>
                        </div>
                    </div>
                </div>
                {/* <div className="toolbar-info-categories">hola</div>
                <div className="toolbar-change" style={{display:'none'}}>hola2</div> */}
            </div>
        )
    }
}

function hola() {
    
    const list = document.querySelector('.toolbar-change');

    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}

export default Toolbars;