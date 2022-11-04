import React from "react";
import RickAndMorty from '../source/image/proyecto-1.png'
import Calculadora from '../source/image/proyecto-2.png'
import NoblesDentLab from '../source/image/nobleDentLab.png'
import Notas from '../source/image/proyecto-nota.png'
import GeneradorPassword from '../source/image/generador de contraseñas.png'
import Crud from '../source/image/Crud angular.png'
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
                            <a className="link-proyecto" target='blank' href="https://funny-cucurucho-ec7210.netlify.app/">Ver proyecto</a>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div>
                            <img src={Notas} alt='imagen-proyecto' />
                            <p>Este proyecto esta creado con HTML, Css y Javascript con el fin de desarrollar un creador de tareas o de notas.</p>
                            <a className="link-proyecto" target='blank' href="https://splendorous-pastelito-b1309b.netlify.app/">Ver proyecto</a>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div>
                            <img src={Crud} alt='imagen-proyecto'/>
                            <p>Este proyecto esta creado con Angular y css, con esta app se puede agregar, modificar y eliminar usuarios de una lista.</p>
                            <a className="link-proyecto" target='blank' href="https://ubiquitous-donut-c289af.netlify.app/">Ver proyecto</a>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div>
                            <img src={GeneradorPassword} alt='imagen-proyecto'/>
                            <p>Este proyecto esta creado con React js simulando un generador de contraseñas con la opcion de que el usuario pueda escojer la cantidad de caracteres que tendra la contraseña.</p>
                            <a className="link-proyecto" target='blank' href="https://dancing-brioche-83b7b2.netlify.app/">Ver proyecto</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}