import Footer from "../components/Footer";
import Navbarprivado from "../components/Navbarprivado";
import modificar from "../components/modificar.css"

function Modificar(){
    return(
        <div>
            <Navbarprivado/>
            <div className="inputs mt-5 pt-5">
            <h1 className="text-center h1-gal">EDITAR DATOS</h1>
            <hr/>    
            <div>
            <input className="form-control form-mod mt-5" type="text" placeholder="Modificar Nombre"/>
            <input className="form-control form-mod" type="email" placeholder="Modificar Correo"/>
            <input className="form-control form-mod" type="password" placeholder="Modificar Contraseña"/>
            <input className="form-control form-mod" type="password" placeholder="Repite Contraseña"/>
            <a className="btn-color btn mb-5 btn-mod">GUARDAR DATOS</a>
            </div>
            </div>
        </div>
    )
}

export default Modificar;