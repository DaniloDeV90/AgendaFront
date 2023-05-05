import React, { useEffect, useState } from 'react'
import { useHooks } from '../../Hooks/useContext,'
import API from '../../Functions/API'
import { useNavigate, useParams } from 'react-router-dom'
import { verificar } from '../Auth/APIAUTH.JS'

const Editar = () => {

  
    const navigate = useNavigate ()
    const id = localStorage.getItem ("id")
    const {token} = useParams ()
    const [Conteudo,setConteudo] = useState ()
    const [Titulo,setTitulo] = useState ()
    const {idEdit} = useHooks ()
    useEffect (() => {
      const VerAgendas = async ()  => {
     
   const verify = await verificar (token,id)
     if (!verify.msg) {
  
      navigate ("/Erro")
}
    
      }
  VerAgendas ()
  },[])
  

    const editar  = async  (e) => {
        e.preventDefault ()

        const date = {
            idTable: idEdit,
            Conteudo,
            Titulo
        }
       await API (`editTable/${id}`,"PUT", date)
       
       navigate (`/${token}/Agendas`)

    }
  return (
        
    <main>
  <form action="" onSubmit={editar}>
  <label htmlFor="" id='anotacao'>
    Titulo: 
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