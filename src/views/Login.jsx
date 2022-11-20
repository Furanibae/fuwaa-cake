import React from 'react'
import Navbar from "../components/Navbar"
import { auth } from '../firebasesetup'
import { useState } from "react"


const Login = () => {
    const [email, setEmail] = useState('')
    const [pass,setPass] = useState('')

    const registrarUsuario = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,pass)
        .then((res) => alert('usuario registrado'))
    }

    return(
        <div>
        <Navbar/>
        <div className="container">
        <div className="col-xs-1 col-md-4 pt-5 containerreg">
    
        <form>

        <h1 className="h1reg pb-2 pt-5">REGISTRO</h1>
        <input type="email" 
        placeholder="Ingresa tu e-mail" 
        className="form-control my-2" 
        required
        onChange={(e)=>{setEmail(e.target.value)}}
        />
        <input 
         type="password" 
         placeholder="Contraseña" 
         className="form-control" 
         required
         onChange={(e)=>{setPass(e.target.value)}}
         />
        <button onSubmit={registrarUsuario} type="submit" className="btn btn-color btn-reg mt-2 mx-5">Registrarse</button>
        </form>
        </div>
    </div>
        </div>
    )
}
export default Login;