import nosotros from "../components/nosotros.css"
import imgnos1 from "../assets/img/cake1.jpg"
import Navbar from "../components/Navbar"
function Nosotros(){
    return(
        
        <div className="nosotros">
            <Navbar/>
                <div className="row">
                <div className="col-md-6 col-xs-1 mt-5 pt-5 containernos">
            <h1 className="nos">NOSOTROS</h1>
            <p className="textonosotros">Somos un equipo que se especializa en la entrega de servicios de repostería.<br></br> 
            Nuestra misión es entregar servicios de calidad en torno a la repostería, por eso este portal ha sido creado para que otros puedan vender su talento.
            </p>
            </div>
            <div className="col-md-6 col-xs-1 mt-5 pt-5">
            
            <img src={imgnos1} width="200" className="imgnos1 mt-5" alt="img1" />
            
            </div>
            </div>
            </div>
    )
}

export default Nosotros;