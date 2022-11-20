import Slider from "../components/Slider"
import Nosotros from "../views/Nosotros"
import Best from "../views/Best";
import Navbar from "../components/Navbar"
import React from "react"


function Home(){

    return(
        <div>
            
            <Navbar/>
            <Slider/>
            <Nosotros />
            <Best/>
        </div>
    )
}

export default Home;