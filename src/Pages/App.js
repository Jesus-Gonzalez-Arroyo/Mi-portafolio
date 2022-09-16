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
                <Header/>
                <InformacionPersonal/>
                <Conocimientos/>
                <Proyectos/>
                <Contacto/>
            </>
        )
    }
}

export default App