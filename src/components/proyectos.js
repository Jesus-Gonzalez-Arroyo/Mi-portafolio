import React from "react";
import RickAndMorty from '../source/image/proyecto-1.png'
import Calculadora from '../source/image/proyecto-2.png'
import NoblesDentLab from '../source/image/nobleDentLab.png'
import juego from '../source/image/juego.png'
import './style/proyectos.css'

// componente donde voy a exponer los conocimientos que tengo 

export default function Proyectos(){
    return(
        <>
            <div id="proyectos" className="container-proyectos">
                <h2>Proyectos</h2>
                <div className="lista-proyectos">
                    <div className="proyecto">
                        <div>
                            <img src={RickAndMorty} alt='imagen-proyecto'/>
                            <p>Este proyecto esta creado con React js y bootstrap consumiendo una api de una serie de television llamada Rick and Morty, esta pagina esta destinada a exponer la informacion de cada uno de los personajes de la serie.</p>
                            <a className="link-proyecto" target='blank' href="https://rickandmorty-87c10.web.app/">Ver proyecto</a>
                        </div> 
                    </div>
                    <div className="proyecto">
                        <div>
                            <img src={Calculadora} alt='imagen-proyecto'/>
                            <p>Este proyecto esta creado con HTML, Css y Javascript, simulando una calculadora tiene todas sus funciones basicas para operaciones matematicas.</p>
                            <a className="link-proyecto" target='blank' href="https://calculadora-be9bd.web.app/">Ver proyecto</a>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div>
                            <img src={NoblesDentLab} alt='imagen-proyecto'/>
                            <p>Este proyecto esta creado con HTML, Css y Javascript, fue creado para exponer al publico los servicios de una clinica dental.</p>
                            <a className="link-proyecto" href="f">Ver proyecto</a>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div>
                            <img src={juego} alt='imagen-proyecto' />
                            <p>Este proyecto esta creado con HTML, Css y Javascript simulando el juego de piedra papel o tijeras en este caso compitiendo con la maquina, señanlando el estado por medio de imagenes.</p>
                            <a className="link-proyecto" target='blank' href="https://noblesdentlab-6cff9.web.app/">Ver proyecto</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}