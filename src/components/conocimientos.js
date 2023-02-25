import React from "react";
import './style/conocimientos.css'
import html from '../source/image/logo-html.png'
import css from '../source/image/logo-css.png'
import js from '../source/image/logo-js.jpg'
import react from '../source/image/logo-react.png'
import Sass from '../source/image/Sass.png'
/* import nodeJs from '../source/image/logo-node-js.png' */
import Typescript from '../source/image/typescript.png'
/* import Python from '../source/image/python.png'
import Mongodb from '../source/image/MongoDB.png' */
import Next from '../source/image/nextjs.png'
import Tailwind from '../source/image/Tailwind.png'
import Angular from '../source/image/Angular.png'
import Node from '../source/image/Nodejs.png'

export default function Conocimientos (){
    return(
        <>
            <div id="conocimiento" className="lista-conocimientos" >
                <h2>Conocimientos</h2>
                {/* <div className="container_conocimientos"> */}
                    <div className="container_frontend">
                        {/* <p>Front-end</p> */}
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
                                <img src={react} alt='React js'/>
                                <p>React</p>
                            </div>
                            <div className="conocimiento">
                                <img src={Angular} alt='Angular'/>
                                <p>Angular</p>
                            </div>
                            <div className="conocimiento">
                                <img src={Typescript} alt='Typescript'/>
                                <p>Typescript</p>
                            </div>
                            <div className="conocimiento">
                                <img src={Next} alt='Next js'/>
                                <p>Next js</p>
                            </div>
                            <div className="conocimiento">
                                <img src={Node} alt='Node js'/>
                                <p>Node js</p>
                            </div>
                            <div className="conocimiento">
                                <img src={Tailwind} alt='Tailwind'/>
                                <p>Tailwind</p>
                            </div>
                            <div className="conocimiento">
                                <img src={Sass} alt='Tailwind'/>
                                <p>Sass</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container_backend">
                        <p>BD y Backend</p>
                        <div className="grid_backend">
                            <div className="conocimiento">
                                <img src={Python} alt="python"/>
                                <p>Python</p>
                            </div>
                            <div className="conocimiento">
                                <img src={nodeJs} alt='Node js'/>
                                <p>Node js</p>
                            </div>
                            <div className="conocimiento">
                                <img src={Mongodb} alt='Mongo db'/>
                                <p>Mongo DB</p>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </>
    )
}