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
                            <a href="https://wa.me/3043925018" target='blank'><FaWhatsapp className="icon whatsapp"/></a>
                        </div>
                        <div>
                            <a href="https://linkedin.com/in/jesus-david-gonzalez-arroyo-8430a1242" target='blank'><FaLinkedin className="icon linkedin"/></a>
                        </div>
                        <div>
                            <a href="https://github.com/Jisus1102" target='blank'><FaGithub className="icon github"/></a>
                        </div>
                        <div>
                            <a href="mailto:jesusdavidgonzales1102@gmail.com?subject=Oferta%20laboral"><FaGoogle className="icon gmail"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}