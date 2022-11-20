import Navbarprivado from "../components/Navbarprivado"
import tienda from "../components/tienda.css"
import cake2 from "../assets/img/cake2.jpg"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Form from "react-bootstrap/Form"

import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react";
import Context from "../Context";

function Tienda(){

   
  /*Estados*/ 
const [producto, setProducto] = useState([]);
const [busqueda, setBusqueda]= useState("");

/*Llamado a la API*/
const jsonprod = '/productos.json'
const showData = async ()=>{
  const response = await fetch(jsonprod) 
  const data = await response.json()
  console.log(data)
  setProducto(data);
}

/*Capturador del evento */
const buscador=(e)=>{
  setBusqueda(e.target.value);
}

/*Mostrar los datos de la API */
useEffect(()=>{
  showData();
  },[])

/*Función para el orden de productos*/

const filtroObjs = (e) => {
  let sortProducts = e.target.value;
  if (sortProducts === "nombreAscendente") {
    producto.sort((a, b) => a.name.localeCompare(b.name));
    setProducto([...producto]);
  } else if (sortProducts === "nombreDescendente") {
    producto.sort((a, b) => b.name.localeCompare(a.name));
    setProducto([...producto]);
  }
  
  if (sortProducts === "precioAscendente") {
    producto.sort((a, b) => a.precio - b.precio);
    setProducto([...producto]);
  } else if (sortProducts === "precioDescendente") {
    producto.sort((a, b) => b.precio - a.precio);
    setProducto([...producto]);
    }
  };


    return(
      <>
      <div><Navbarprivado/>
        <div className="container container-tienda mt-5 pt-5">
            

            <div className="col-md-12 pt-5">
                        <h1 className="h1-tienda text-center">TIENDA</h1>
                        <hr />
                    </div>
            <div className="row">
            <div className="col-md-5 row-busqueda mt-5 pt-5">
                
                <input className="form-control buscar mt-2" value={busqueda}
                onChange={buscador}  type="search" placeholder="Buscar productos"/>
                <button className="btn btn-color btn-tienda" >Buscar</button>

            </div>
            <Form.Select value={busqueda} onChange={filtroObjs} className="select mb-5" >
                  <option value="">Categorías</option>
                  <option value="nombreAscendente">Nombre A-Z</option>
                  <option value="nombreDescendente">Nombre Z-A</option>
                  <option value="precioAscendente">Menor precio</option>
                  <option value="precioDescendente">Mayor precio</option>
                </Form.Select>
            </div>



           <div className="row">
      
              
               <div className="col-md-4 tortas">
                <a href="">Todas</a>
                <a href="">Tortas Express</a>
                <a href="">Tortas Especiales</a>
                <a href="">Tortas Base Bizcocho</a>
                <a href="">Tortas Base Panqueque</a>
                <a href="">Tortas Base Hojarasca</a>
                <a href="">Tortas Base Milhojas</a>

            </div>

            {producto.filter((dato)=>{
            if( busqueda === ""){
              return dato;
            }
            else if(dato.name.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())){
              return dato;
            }
            }).map((prod)=>(
            <div className="cards col-md-4"key={prod.id}>
                          <Card style={{ width: '18rem' }} >
                          <Card.Img style={{ height: '15rem' }} variant="top" src={prod.img} />
                          <Card.Body>
                            <Card.Title><a href="/detalle" className="a-galeria">{prod.name}</a></Card.Title>
                            <Card.Text>
                                {prod.desc}
                            </Card.Text>
                            <Card.Title>{prod.precio}</Card.Title>
                            <Button variant="btn btn-color">COMPRAR</Button>
                        
                          </Card.Body>
                        </Card> 
                        </div>
              ))}

   

        </div>



</div>
</div>
          
     </>     

    )
}

export default Tienda;