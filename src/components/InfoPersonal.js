import React from "react";
import './style/Info_personal.css'
import rick from '../source/image/Rick.webp'

// Componente donde estara mi informacion personal y de presentacion

export default function InformacionPersonal (){
    return(
        <>
            <div className="container-description">
                <div className="info-description">
                    <h1>Hola, soy Jesús Gonzalez</h1>
                    <p>Desarollador Frontend</p>
                    <a href="https://wa.me/3043925018" target='blank'>Contactar</a>
                </div>
                <div className="img-description">
                    <img src={rick}/>
                </div>
            </div>
        </>
    )
}