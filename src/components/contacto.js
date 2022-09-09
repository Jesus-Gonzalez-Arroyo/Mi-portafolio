import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa"
import './style/contacto.css'

// componente donde estara mis medios de contacto

export default function Contacto(){
    return(
        <>
            <div className="container-contacto">
                <h2>Contacto</h2>
                <div className="info-contact">
                    <p>Estos son mis metodos de contacto donde te podras comunicar conmigo</p>
                    <FaWhatsapp className="icon"/><FaGithub className="icon"/><FaLinkedin className="icon"/>
                </div>
            </div>
        </>
    )
}