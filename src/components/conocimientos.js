import React from "react";
import './style/conocimientos.css'
import html from '../source/image/logo-html.png'
import css from '../source/image/logo-css.png'
import js from '../source/image/logo-js.jpg'
import react from '../source/image/logo-react.png'
import git from '../source/image/logo-git.png'
import bootstrap from '../source/image/logo-bootstrap.png'
import typescript from '../source/image/logo-typescript.webp'
import nodeJs from '../source/image/logo-node-js.png'
import tailwind from '../source/image/logo-tailwind.png'
import angular from '../source/image/logo-angular.png'

export default function Conocimientos (){
    return(
        <>
            <div id="conocimiento" className="lista-conocimientos" >
                <h2>Conocimientos</h2>
                <div className="container-grid">
                    <div className="conocimiento">
                        <img src={html}/>
                        <p>HTML</p>
                    </div>
                    <div className="conocimiento">
                        <img src={css}/>
                        <p>Css</p>
                    </div>
                    <div className="conocimiento">
                        <img src={js}/>
                        <p>Javascript</p>
                    </div>
                    <div className="conocimiento">
                        <img src={bootstrap}/>
                        <p>Bootstrap</p>
                    </div>
                    <div className="conocimiento">
                        <img src={react}/>
                        <p>React</p>
                    </div>
                    <div className="conocimiento">
                        <img src={git}/>
                        <p>Git</p>
                    </div>
                    <div className="conocimiento">
                        <img src={typescript}/>
                        <p>Typescript</p>
                    </div>
                    <div className="conocimiento">
                        <img src={nodeJs}/>
                        <p>Node js</p>
                    </div>
                    <div className="conocimiento">
                        <img src={tailwind}/>
                        <p>Tailwind</p>
                    </div>
                    <div className="conocimiento">
                        <img src={angular}/>
                        <p>Angular</p>
                    </div>
                </div>
            </div>
        </>
    )
}