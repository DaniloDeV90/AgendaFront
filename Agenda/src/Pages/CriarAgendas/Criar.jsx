import React, { useState } from 'react'
import API from '../../Functions/API'
import { useNavigate } from 'react-router-dom'
const Criar = () => {
    const navigate = useNavigate ()
    const id = localStorage.getItem ("id")
const [Conteudo, setConteudo] = useState ()
const [Titulo, setTitulo] = useState ()
const [loading, setLoading] =  useState (false)

    const add =  async (e) => {
        e.preventDefault ()
const cont = {
    Conteudo, 
    Titulo
}
setLoading (true)
         await API (`AddAgenda/${id}`,"POST", cont)
  
        setLoading (false)
        navigate ("/Auth")
    }
  return (
    
  <main>

    <div className="forms">
        <form action="" onSubmit={add}>

        <label htmlFor="" id='anotacao'>
                Titulo: 
                <input type="text" onChange={e => setTitulo(e.target.value)} />
            </label>

            <label htmlFor="" id='anotacao'>
                Anotação: 
                <input type="text" onChange={e => setConteudo (e.target.value)} />
            </label>
           {!loading && <button id='btnadd' >Adicionar</button> }
        
        </form>
    </div>
  </main>
  )
}

export default Criar