import React from "react";
import foto from '../source/image/foto-prueba.webp'
import './style/proyectos.css'

// componente donde voy a exponer los conocimientos que tengo 

export default function Proyectos (){
    return(
        <>
            <div id="proyectos" className="container-proyectos">
                <h2>Proyectos</h2>
                <div className="lista-proyectos">
                    <div className="proyecto">
                        <div>
                            <img src={foto}/>
                            <p>Este proyecto esta creado con React js y bootstrap</p>
                            <a className="link-proyecto" target='blank' href="f">Ver proyecto</a>
                        </div> 
                    </div>
                    <div className="proyecto">
                        <div>
                            <img src={foto}/>
                            <p>Este proyecto fue creado con HTML, Css y Javascript</p>
                            <a className="link-proyecto" href="f">Ver proyecto</a>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div>
                            <img src={foto}/>
                            <p>Este proyecto fue creado con HTML, Css y Javascript</p>
                            <a className="link-proyecto" href="f">Ver proyecto</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}