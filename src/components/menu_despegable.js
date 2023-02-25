import React, {useState} from "react";
import {Nav, Ul, Li, A, Containermenu} from './componentes_menu'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons'

export default function Menudespegable(){

    const [MenuMobile, setMenuMobile] = useState(false)

    return(
        /*Utilizamos usestate para abrir y cerrae el menu con el styled-components*/
        <IconContext.Provider value={{style: {fontSize: '30px'}}}>
            <Containermenu>
                <FaBars onClick={() => setMenuMobile(!MenuMobile)}/>
            </Containermenu>
            <Nav open={MenuMobile}>
                <Ul>
                    <Li><A href="#conocimiento" onClick={() => setMenuMobile(!MenuMobile)} >Conocimientos</A></Li>
                    <Li><A href="#proyectos" onClick={() => setMenuMobile(!MenuMobile)}>Proyectos</A></Li>
                    <Li><A href="#contacto" onClick={() => setMenuMobile(!MenuMobile)}>Contacto</A></Li>
                </Ul>
            </Nav>
        </IconContext.Provider>
    )
}







