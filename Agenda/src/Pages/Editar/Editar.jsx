import React, { useState } from 'react'
import { useHooks } from '../../Hooks/useContext,'
import API from '../../Functions/API'
import { useNavigate } from 'react-router-dom'

const Editar = () => {
    const navigate = useNavigate ()
    const id = localStorage.getItem ("id")
    const [Conteudo,setConteudo] = useState ()
    const [Titulo,setTitulo] = useState ()
    const {idEdit} = useHooks ()


    const editar  = async  (e) => {
        e.preventDefault ()

        const date = {
            idTable: idEdit,
            Conteudo,
            Titulo
        }
       await API (`editTable/${id}`,"PUT", date)
       
       navigate ("/Auth")

    }
  return (
        
    <main>
  <form action="" onSubmit={editar}>
  <label htmlFor="" id='anotacao'>
    Titulp: 
    <input type="text" onChange={(e => setTitulo (e.target.value))} />
</label>

    
<label htmlFor="" id='anotacao'>
    Conteudo: 
    <input type="text" onChange={(e => setConteudo (e.target.value))} />
</label>
<button>Editar</button>
  </form>
        
        </main>
  )
}

export default Editar