import Navbarprivado from "../components/Navbarprivado"
import crear from "../components/crear.css"

function Crear (){
    return(
        <div>
            <Navbarprivado/>
            <h1 className="mt-5 pt-5 h1-crear text-center">CREAR PUBLICACIÓN</h1>
            <hr />
            <input className="form-control input-crear" placeholder="Título producto" type="text" />
            <textarea className="form-control" type="text" placeholder="Descripción producto" id="exampleFormControlTextarea1" rows="3"/>
            <input type="number" className="form-control input-crear-0" placeholder="Precio"/>
            <input type="file" className="form-control-file input-crear-1 pb-5 mb-5" id="exampleFormControlFile1"></input>
            <a href="" className="btn btn-color">Publicar</a>
        </div>
        
    )
}

export default Crear;