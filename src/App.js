import Footer from "./components/Footer"


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home"
import Homeprivado from "./views/Homeprivado"
import Nosotros from "./views/Nosotros"
import Nosotrosprivado from "./views/Nosotrosprivado"
import Best from "./views/Best"
import Bestprivado from "./views/Bestprivado"
import Tienda from "./views/Tienda"
import Sesion from "./views/Sesion"
import Perfil from "./views/Perfil"
import Detalle from "./views/Detalle"
import Favoritos from "./views/Favoritos"
import Galeria from "./views/Galeria"
import Crear from "./views/Crear"
import Modificar from "./views/Modificar"
import Login from "./views/Login"


import Context from "./Context";

import React from "react";

function App() {


  return (
    
    
    <div className="App"> 

      <Context.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/homeprivado" element={<Homeprivado />}/>
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/nosotrosprivado" element={<Nosotrosprivado />}/>
            <Route path="/best" element={<Best />} />
            <Route path="/bestprivado" element={<Bestprivado />}/>
            <Route path="/modificar" element={<Modificar />}/>
            <Route path="/tienda" element={<Tienda />}/>
            <Route path="/sesion" element={<Sesion />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/detalle" element={<Detalle />}/>
            <Route path="/favoritos" element={<Favoritos />}/>
            <Route path="/galeria" element={<Galeria />}/>
            <Route path="/crear" element={<Crear />}/>

          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>



  ) 
    
}

export default App;
