import { NavLink } from "react-router-dom";
import logo from "../assets/img/fuwacake-logo.png"
import navbarprivado from "../components/navbarprivado.css"

function Navbarprivado(){
    return(
        <div className="container-fluid fixed-top">
            <div className="col-md-12">
            <div className="navbar pt-3 pb-3">
            <img src={logo} alt="logo" width="250" className="mx-5"/>
            <div className=" col-md-6">
            <NavLink to="/homeprivado"> Inicio</NavLink>
            <NavLink to="/nosotrosprivado" >Nosotros</NavLink>
            <NavLink to="/bestprivado" >Best Sellers</NavLink>
            <NavLink to="/tienda" >Tienda</NavLink>
            <NavLink to="/perfil" >Perfil</NavLink>
            <NavLink to="/crear" >Publicar</NavLink>
            <NavLink to="/favoritos" >Favoritos</NavLink>
            <a href="#"><i className="fa-solid fa-cart-shopping carrito"></i></a>
            <a href="/"><i class="fa-solid fa-right-from-bracket"></i></a>
            </div> 
            </div>
        </div>
        </div>
    )
} 

export default Navbarprivado;