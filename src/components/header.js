import React from "react";
import './style/header.css'

class Header extends React.Component{
    render(){
        return(
            <div className="container-header">
                <div className="container-menu">
                    <ul className="ul">
                        <li className="li"><a href="#conocimiento">Conocimientos</a></li>
                        <li className="li"><a href="#proyectos">Proyectos</a></li>
                        <li className="li"><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header