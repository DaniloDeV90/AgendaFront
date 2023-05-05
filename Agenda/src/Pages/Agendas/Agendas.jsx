import React, { useEffect, useState } from 'react'
import { verificar } from '../Auth/APIAUTH.JS'
import { useNavigate } from 'react-router-dom'
import API from '../../Functions/API'
import "./Agendas.css"
import { useHooks } from '../../Hooks/useContext,'

const Agendas = () => {
const {setIDedit} = useHooks ()
const navigate = useNavigate ()
    const toki = localStorage.getItem ("token")
   const id =  localStorage.getItem ("id")
const [tabel, setTabel ]  = useState ()

        const  btn = async   () => {
            const req =  await verificar (toki)
          
           if (!req.msg) {

             navigate ("/")
           }
        }

useEffect (() => {
    const VerAgendas = async ()  => {

        const req =  await API (`searchUser/${id}`, "GET")
        setTabel (req)
        console.log (req.agendas)
    }
VerAgendas ()
},[])


const Delete = async  (idColuna) => {
  await API (`DeleteTable/${id}/${idColuna}`,"DELETE")
  
  location.reload ()
  navigate ("/Auth")
}

const Criarr = () => {

navigate ("/Auth2")
}

const Editar=  (id) => {
setIDedit (id)
navigate ("/Auth3")
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