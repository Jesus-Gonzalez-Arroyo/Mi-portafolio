import React from "react";
import Header from "../components/header";
import InformacionPersonal from "../components/InfoPersonal";
import Conocimientos from "../components/conocimientos";
import Proyectos from "../components/proyectos";
import Contacto from "../components/contacto";
import Menudespegable from "../components/menu_despegable";

class App extends React.Component{
    render(){
        return(
            <>
                <header>
                    <Header/>
                    <Menudespegable/>
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