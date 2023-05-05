import React, { useEffect, useState } from 'react'
import { verificar } from '../Auth/APIAUTH.JS'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../../Functions/API'
import "./Agendas.css"
import { useHooks } from '../../Hooks/useContext,'

const Agendas = () => {
 
const {token} = useParams ()



const {setIDedit} = useHooks ()
const navigate = useNavigate ()
   
   const id =  localStorage.getItem ("id")
const [tabel, setTabel ]  = useState ()


useEffect (() => {
    const VerAgendas = async ()  => {
   
 const verify = await verificar (token,id)
   if (!verify.msg) {

    navigate ("/Erro")
   }
   
        const req =  await API (`searchUser/${id}`, "GET")
        setTabel (req)
      
    }
VerAgendas ()
},[])


const Delete = async  (idColuna) => {
  await API (`DeleteTable/${id}/${idColuna}`,"DELETE")
  
  location.reload ()
  navigate (`/${token}/Agendas`)
}

const Criarr = () => {

navigate (`/${token}/Criar`)
}

const Editar=  (id) => {
setIDedit (id)
navigate (`/${token}/Editar`)
}
  return (
    


    <main className='MainAgendas'>

   {tabel && <h1 id='titleAgenda'>Olá {tabel.Nome}</h1>}
    
  <button  id="btnAgendas" onClick={Criarr}>Criar</button>

<div className="cards">

{tabel && tabel.agendas.length === 0 &&  <p>Sem agendas</p>  }  
{tabel && tabel.agendas.map ((elements, index) => (
    <div className="card" key={index}>
        <h2>{elements.Titulo}</h2>
    <br />
    <div id='display'>
  <p> {elements.Conteudo} </p>
  </div>
  
<br />

    <button id='btnAgendas' onClick={ () =>  Delete (elements.id)}>apagar</button>
    <button id='btnAgendas' onClick={ () => Editar (elements.id)}>editar</button>
</div>
   
))}



</div>
    </main>
  )
}

export default Agendas