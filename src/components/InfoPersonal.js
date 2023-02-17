import React from "react";
import './style/Info_personal.css'
import mifoto from '../source/image/mi foto.jfif'
import CV from '../source/Cv.pdf'

// Componente donde estara mi informacion personal y de presentacion

export default function InformacionPersonal (){
    return(
        <>
            <div className="container-description">
                <div className="info-description">
                    <h1>Hola, soy Jesús Gonzalez</h1>
                    <p>Desarrollador Front end</p>
                    <div className="container-btn-info">
                        <a href="https://wa.me/3043925018" target='blank'>Contactar</a>
                        <a href={CV} target='blank' download='CV.pdf'>Descarga mi CV</a>
                    </div>
                </div>
                <div className="img-description">
                    <img src={mifoto} alt='imagen-personal'/>
                </div>
            </div>
        </>
    )
}