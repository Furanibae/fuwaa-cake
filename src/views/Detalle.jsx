import img1 from "../assets/img/cake2.jpg"
import detalles from "../components/detalle.css"
import Navbarprivado from "../components/Navbarprivado"
function Detalle (){
    return(
        <div className="detalle container col-xs-1 mt-5 pt-5">
           <Navbarprivado/>
            <div className="row">
            <div className="col-md-6 display-det mb-5 pb-5 pt-5">
            <img className="cake2" src={img1} alt="cake2" />

            </div>
        <div className="col-md-4 display-det-2">  
        <h3>Torta de Rosas</h3>  
            <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Descripción
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Torta con diseño de Rosas.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Ingredientes
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><ul>
        <li>Frutos Rojos</li>
        <li>Selva Negra</li>
        <li>Bizcocho</li>
        <li>Deliciosa crema</li>
        </ul></div>
    </div>
  </div>
  </div>
        <h2 className="mt-5">$15.000</h2>
        <button className="btn btn-color btn-size">COMPRAR</button>
        
</div>
</div>
        </div>
    )
}

export default Detalle;