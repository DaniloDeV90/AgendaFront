import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import { useHooks } from '../Hooks/useContext,'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate ()
  const {Valor,setValor} = useHooks ()

const po = localStorage.getItem ("id")
setValor (po)
  

const logout = () => {
  localStorage.clear ()
  navigate ("/Login")
setValor (false)

}


return (
<nav>



    <div className="titulo">
<span>REACT AGENDA</span>

    </div>
  
  {!Valor && <div className="links"> 
  <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/Login"} >Login</NavLink>
    <NavLink to={"/Cadastro"}>Cadastro</NavLink>
   
    </div>}
    {Valor && <div className="links"> 
  <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/Auth"} >Agendas</NavLink>
    <button onClick={logout} id='botudo'> Logout</button>
    </div>}
    
   
</nav>
  )
}

export default Navbar