import React from "react";
import Header from "../components/header";
import InformacionPersonal from "../components/InfoPersonal";
import Conocimientos from "../components/conocimientos";
import Proyectos from "../components/proyectos";
import Contacto from "../components/contacto";

class App extends React.Component{
    render(){
        return(
            <>
                <header>
                    <Header/>
                </header>
                <main>
                    <InformacionPersonal/>
                    <Conocimientos/>
                    <Proyectos/>
                </main>
                <footer>
                    <Contacto/>
                </footer>
            </>
        )
    }
}

export default App