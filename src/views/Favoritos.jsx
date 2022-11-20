import Navbarprivado from "../components/Navbarprivado";
import galeria from "../components/galeria.css"
import favoritos from "../components/favoritos.css"

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cake1 from "../assets/img/cake1.jpg"

function Favoritos (){


    return(
        <div>
    <Navbarprivado/>
        <div className="container">
            
            
            <h1 className="mt-5 pt-5 text-center h1-gal">FAVORITOS</h1>
            <hr />
            <div className="card-gal">
 


        <div className=" col-md-4 col-xs-1">
            <Card style={{ width: '18rem' }} className="mb-5 mx-5" >
            <Card.Img style={{ height: '15rem' }} variant="top" src={cake1}/>
            <Card.Body>
              <Card.Title><a href="/detalle" className="a-galeria">Torta de Rosas</a></Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Card.Title>$20.000</Card.Title>
              <Button variant="btn btn-color">COMPRAR</Button>
            </Card.Body>
          </Card>
           </div>
          
           <div className=" col-md-4 col-xs-1">
            <Card style={{ width: '18rem' }} className="mb-5 mx-5" >
            <Card.Img style={{ height: '15rem' }} variant="top" src={cake1}/>
            <Card.Body>
              <Card.Title><a href="/detalle" className="a-galeria">Torta de Rosas</a></Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Card.Title>$20.000</Card.Title>
              <Button variant="btn btn-color">COMPRAR</Button>
            </Card.Body>
          </Card>
           </div>

           <div className=" col-md-4 col-xs-1">
            <Card style={{ width: '18rem' }} className="mb-5 mx-5" >
            <Card.Img style={{ height: '15rem' }} variant="top" src={cake1}/>
            <Card.Body>
              <Card.Title><a href="/detalle" className="a-galeria">Torta de Rosas</a></Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Card.Title>$20.000</Card.Title>
              <Button variant="btn btn-color">COMPRAR</Button>
            </Card.Body>
          </Card>
           </div>


            </div>
</div></div>
    )
}

export default Favoritos;