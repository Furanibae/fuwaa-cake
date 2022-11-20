import Navbarprivado from "../components/Navbarprivado";
import galeria from "../components/galeria.css"
import Card from 'react-bootstrap/Card';
import cake1 from "../assets/img/cake1.jpg"

function Galeria (){
    return(
        <div>
            <Navbarprivado/>
            
            <h1 className="mt-5 pt-5 text-center h1-gal">GALERÍA DE PUBLICACIONES</h1>
            <hr />
            <div className="card-gal">
                
            <div className="mx-5">
                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cake1} />
                    <Card.Body className="colorcard">
                        <Card.Title><a href="/detalle" className="a-galeria"> Torta de Rosas</a></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Title>$15.000</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <div className="mx-5">
                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cake1} />
                    <Card.Body className="colorcard">
                        <Card.Title><a href="/detalle" className="a-galeria">Torta de Rosas</a></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Title>$15.000</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <div className="mx-5 mb-5">
                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cake1} />
                    <Card.Body className="colorcard">
                        <Card.Title><a href="/detalle" className="a-galeria">Torta de Rosas</a></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Title>$15.000</Card.Title>
                    </Card.Body>
                </Card>
            </div>
 
            </div>
</div>
    )
}

export default Galeria;