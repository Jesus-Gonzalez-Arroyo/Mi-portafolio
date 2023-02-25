import React from "react";
import Header from "../components/header";
import InformacionPersonal from "../components/InfoPersonal";
import Conocimientos from "../components/conocimientos";
import Proyectos from "../components/proyectos";
import Contacto from "../components/contacto";
import Menudespegable from "../components/menu_despegable";
import Burbujas from "../components/burbujas";
import Aboutme from '../components/Aboutme';

class App extends React.Component{
    render(){
        return(
            <>
                <Menudespegable/>
                <header>
                    <Header/>
                </header>
                <main>
                    <InformacionPersonal/>
                    <Aboutme/>
                    <Conocimientos/>
                    <Proyectos/>
                </main>
                <footer>
                    <Contacto/>
                </footer>
                <Burbujas/>  
            </>
        )
    }
}

export default App