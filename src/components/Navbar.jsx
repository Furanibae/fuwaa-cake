import logo from "../assets/img/fuwacake-logo.png"
import navbarcss from "../components/navbar.css" 
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        
        <div className="container-fluid fixed-top">
        <div className="navbar pt-3 pb-3 ">
            <img src={logo} alt="logo" width="250" className="mx-5"/>
            <div className=" col-md-5">
            <NavLink to="/"> Inicio</NavLink>
            <NavLink to="/nosotros" >Nosotros</NavLink>
            <NavLink to="/best" >Best Sellers</NavLink>
            <NavLink to="/login" >Registro</NavLink>
            <NavLink to="/sesion" >Iniciar Sesion</NavLink>
            </div>
        </div>
        </div>
    )
}

export default Navbar;  