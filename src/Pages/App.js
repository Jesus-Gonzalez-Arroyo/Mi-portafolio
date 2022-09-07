import React from "react";
import Header from "../components/header";
import InformacionPersonal from "../components/InfoPersonal";
import Conocimientos from "../components/conocimientos";
import Proyectos from "../components/proyectos";

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
            </>
        )
    }
}

export default App