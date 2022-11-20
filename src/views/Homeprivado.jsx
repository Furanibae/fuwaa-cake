import Slider from "../components/Slider"
import Nosotrosprivado from "../views/Nosotrosprivado"
import Bestprivado from "../views/Bestprivado";
import Navbarprivado from "../components/Navbarprivado"

function Homeprivado(){
    return(
        <div>
            <Navbarprivado/>
            <Slider/>
            <Nosotrosprivado />
            <Bestprivado/>
        </div>
    )
}

export default Homeprivado;