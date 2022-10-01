import React from "react";
import './style/header.css'
import {FaBars} from 'react-icons/fa'

export default function Header(){

    function menu(){
        
    }

    return(
        <div className="container-header">
            <div className="container-icon-menu">
                <FaBars className="icon-menu" onClick={()=> menu()}/>
            </div>
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
