import React, { useState } from 'react'
import {validate} from "email-validator"


import "./Cadastro.css"
import API from '../../Functions/API'
const Cadastro = () => {

  const [userExits, setUsersExits] = useState ()
const [error,setError] = useState ()
const [Nome, setNome] = useState ()
const [Email, setEmail] = useState ()
const [Senha, setSenha] = useState ()
const [ConfirmSenha, setConfirmSenha] = useState ()
const [sucess,SetSucess] = useState ()

const ConfirmCadastro = async (e) => {
e.preventDefault ()
SetSucess ("")
let erro = []

if (!Email || !Nome || !Senha || !ConfirmSenha) {
  erro.push ("Campos em branco!!")
  setError (erro)
  return 
}

if (!validate(Email)) {
  console.log (Email)
erro.push ("Email invalido")
  
}

const verify = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
if (!verify.test (Senha)) {
erro.push (`A senha deverá ter no mínimo 8 caracteres \n
 e uma letra`)

}

if (ConfirmSenha !== Senha) {
erro.push ("Senhas nao conferem!!")
}



setError (erro)

if (!erro.length == 0) {return}

const users = {
  Nome,
  Email,
  Senha
}
const req = await API ("createdUser","POST", users)

if (req.error) {
  SetSucess (false)
  setUsersExits ("Este usuario ja existe!")
  
  return
}
setUsersExits (false)
SetSucess ("Conta criada!!")

setEmail ("")
setNome ("")
setSenha ("")
setConfirmSenha ("")
}




  return (
    <main className='mainCadastro'>

  

      <div className="form">

        <form action="" className='formCadastro' onSubmit={ConfirmCadastro}>

          <div>
          <label htmlFor="">

            Nome: 
            <input type="text"value={Nome}  onChange={e => setNome (e.target.value)} />
          </label>
          </div>
          <div>
           <label htmlFor="">
         
            Email: 
            <input type="text" value={Email}  onChange={e => setEmail(e.target.value)} />
          </label>
          </div>

          <div>
           <label htmlFor="">

            Senha: 
            <input type="text" value={Senha}  onChange={e => setSenha (e.target.value)}/>
            </label>
            </div>
            <div>
           <label htmlFor="" id='ConfirmSenha'>


            Confirmar senha: <br />
            <input type="text" value={ConfirmSenha} onChange={e => setConfirmSenha (e.target.value)}/>
          </label>
          </div>
          {error && error.map ((el,index) => (
            <p  key={index} id='msgerror'> {el}</p>
          ))}
          {userExits &&  <p>{userExits}</p>  }
          {sucess && <p id='msgsucess'>Conta criada!!</p>   }
          <button title='Cadastrar' id="btnLog"> Cadastrar
</button>
        </form>
      </div>
    </main>
  )
}

export default Cadastro