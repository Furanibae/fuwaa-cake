import logo from "../assets/img/fuwacake-logo.png"
import footer from "../components/footer.css"

function Footer (){
    return(
        <div className="container-fluid">
        <div className="footer pt-5">
            <div className="footer1 col-md-2 col-xs-1">
            <img src={logo} alt="logofooter" width="200"/>
            <a href="#" className="mt-5">Inicio</a>
            <a href="nosotros">Nosotros</a>
            <a href="best">Best Sellers</a>
            <a href="registro">Registro</a>
            <a href="registro">Iniciar sesión</a>
            </div>
           <div className="linea mx-5"></div>
 
        <div className="footer2 col-md-2 col-xs-1">
        <h1 className="mb-5">CONTACTO</h1>
        <p className="pfooter"><i class="fa-solid fa-location-dot"></i> Avenida Siempre Viva #1234</p>
        <p className="pfooter"><i class="fa-solid fa-phone"></i> +22272484</p>
        <p className="pfooter"><i class="fa-solid fa-envelope"></i> fuwacake@gmail.com</p>
        </div> 
   
        <div className="linea2 mx-5"></div>

        <div className="footer3 col-md-1 col-xs-1">
        <a href="https://facebook.com/"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://instagram.com/"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
        </div>
   </div>
   </div>   
    )
}

export default Footer;