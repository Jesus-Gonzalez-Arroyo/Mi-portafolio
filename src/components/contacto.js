import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa"
import './style/contacto.css'

// componente donde estara mis medios de contacto

export default function Contacto(){
    return(
        <>
            <div className="container-contacto" id="contacto">
                <h2>Contacto</h2>
                <div className="info-contact">
                    <p>Estos son mis metodos de contacto donde te podras comunicar conmigo</p>
                    <div className="container-flex-contact">
                        <div>
                            <a href="Aqui va el link del whatsapp" target='blank'><FaWhatsapp className="icon"/></a>
                        </div>
                        <div>
                            <a href="Aqui va el link del peefil de linkedin" target='blank'><FaLinkedin className="icon"/></a>
                        </div>
                        <div>
                            <a href="Aqui va el link del Github" target='blank'><FaGithub className="icon"/></a>
                        </div>
                        <div>
                            <a href="h" target='blank'><FaGoogle className="icon"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}