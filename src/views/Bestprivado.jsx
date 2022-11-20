import best from "../components/best.css"
import cake1 from "../assets/img/cake1.jpg"
import Navbarprivado from "../components/Navbarprivado"
function Bestprivado() {
    return (
    <div>
    <Navbarprivado/>
        <div className="best mt-5 pt-5 mb-5 pt-5">
            
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-center h1best">BEST SELLERS</h1>
                    <hr />
                    <p className="colorp mb-5">Los favoritos del público</p>
                </div>
            </div>
            <div className="container bestcont">
                <div className="row">

                    <div className="col-md-4">
                        <div class="center">
                            <div class="property-card">
                            <a href="/detalle">
                                <div class="property-image">
                                    <div class="property-image-title">

                                    </div>
                                </div></a>
                                <div class="property-description">
                                    <h5> Torta Rosas </h5>
                                    <p>Torta con merengue y decoración de rosas.</p>
                                    <h4>$15.000</h4>
                                </div>

                                <div class="property-social-icons">
                                    <button className="btn btn-color mx-5">COMPRAR</button>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className="col-md-4">
                        <div class="center">
                            <div class="property-card">
                            <a href="/detalle">
                                    <div class="property-image">
                                        <div class="property-image-title">

                                        </div>
                                    </div></a>
                                <div class="property-description">
                                    <h5> Torta Rosas </h5>
                                    <p>Torta con merengue y decoración de rosas.</p>
                                    <h4>$15.000</h4>
                                </div>

                                <div class="property-social-icons">
                                    <button className="btn btn-color mx-5">COMPRAR</button>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className="col-md-4">
                        <div class="center">
                            <div class="property-card">
                                <a href="/detalle">
                                    <div class="property-image">
                                        <div class="property-image-title">

                                        </div>
                                    </div></a>
                                <div class="property-description">
                                    <h5> Torta Rosas </h5>
                                    <p>Torta con merengue y decoración de rosas.</p>
                                    <h4>$15.000</h4>
                                </div>

                                <div class="property-social-icons">
                                    <button className="btn btn-color mx-5">COMPRAR</button>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div></div>
    )
}

export default Bestprivado;