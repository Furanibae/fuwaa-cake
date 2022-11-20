import registro from "../components/registro.css"
import Navbar from "../components/Navbar"
import {app, auth} from "../firebasesetup"
import { useAccordionButton } from "react-bootstrap";
import React, {useState} from "react"


function Sesion(){    




    return(
    <div>
    <Navbar/>
        <div className="col-md-4 pt-5 containerreg">
            
            <h1 className="h1reg">INICIAR SESION</h1>
            <form>
            <input id="email" type="email" placeholder="Ingresa tu e-mail" className="form-control" />
            <input  id="pass" type="password"  placeholder="Contraseña" className="form-control"/>
            <a href="/tienda" type="submit" className="btn btn-color btn-reg">Iniciar Sesión</a>
            </form>
        </div>
        </div>

    )
}

export default Sesion;