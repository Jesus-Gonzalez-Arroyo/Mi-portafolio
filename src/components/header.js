import React from "react";
import './style/header.css'
import Nubes from '../source/image/CloudsProjects.png'

export default function Header(){
    return(
        <div className="container-header">
            <img src={Nubes} className='Nubes'/>
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
