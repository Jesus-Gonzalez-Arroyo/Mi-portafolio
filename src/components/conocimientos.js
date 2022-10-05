import React from "react";
import './style/conocimientos.css'
import html from '../source/image/logo-html.png'
import css from '../source/image/logo-css.png'
import js from '../source/image/logo-js.jpg'
import react from '../source/image/logo-react.png'
import git from '../source/image/logo-git.png'
import bootstrap from '../source/image/logo-bootstrap.png'
import Sass from '../source/image/Sass.png'
import nodeJs from '../source/image/logo-node-js.png'
import angular from '../source/image/logo-angular.png'
import Typescript from '../source/image/typescript.png'
import Vue from '../source/image/Vue.png'

export default function Conocimientos (){
    return(
        <>
            <div id="conocimiento" className="lista-conocimientos" >
                <h2>Conocimientos</h2>
                <div className="container-grid">
                    <div className="conocimiento">
                        <img src={html} alt='html'/>
                        <p>HTML</p>
                    </div>
                    <div className="conocimiento">
                        <img src={css} alt='Css'/>
                        <p>Css</p>
                    </div>
                    <div className="conocimiento">
                        <img src={js} alt='Javascript'/>
                        <p>Javascript</p>
                    </div>
                    <div className="conocimiento">
                        <img src={bootstrap} alt='bootstrp'/>
                        <p>Bootstrap</p>
                    </div>
                    <div className="conocimiento">
                        <img src={react} alt='React js'/>
                        <p>React</p>
                    </div>
                    <div className="conocimiento">
                        <img src={git} alt='Git'/>
                        <p>Git</p>
                    </div>
                    <div className="conocimiento">
                        <img src={nodeJs} alt='Node js'/>
                        <p>Node js</p>
                    </div>
                    <div className="conocimiento">
                        <img src={Sass} alt='Tailwind'/>
                        <p>Sass</p>
                    </div>
                    <div className="conocimiento">
                        <img src={angular} alt='Angular'/>
                        <p>Angular</p>
                    </div>
                    <div className="conocimiento">
                        <img src={Typescript} alt='Angular'/>
                        <p>Typescript</p>
                    </div>
                    <div className="conocimiento">
                        <img src={Vue} alt='Angular'/>
                        <p>Vue</p>
                    </div>
                </div>
            </div>
        </>
    )
}