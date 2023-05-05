import { useState } from "react"
import API from "../../Functions/API"
import campoEmBranco from "./tratamentoDerros/campoEmBranco"
import { useHooks } from "../../Hooks/useContext,"
import { useNavigate } from "react-router-dom"
const BtnLogin =  ({email,senha}) => {
  const navigate = useNavigate ()
    const {setValor} = useHooks () 
const [True, setTrue] = useState (false)
const [MsgTrue, setMsgTrue] = useState ("")

const [loading,setLoading] = useState (true)
 const [erro, setErro] = useState (false)
 const [msgErro, setMsgErro] = useState ("")



const btn  =  async () => {
const EmbRANCO = campoEmBranco (email,senha)

if (EmbRANCO) {
setErro (true)
setMsgErro ("CAMPOS EM BRANCO,CORRIJA")

return}

    const usuario = {Email:email,Senha:senha}


  setLoading (false)  
const resultado = await API ("Login","POST", usuario)
setLoading (true)

if (resultado.erro) {
    setErro (true)
    setMsgErro (resultado.erro)
    return}

    if (resultado.token) {
        setErro (false)
        setTrue (true)
setMsgTrue ("Logado com sucesso!!")
localStorage.setItem ("token", resultado.token)
 localStorage.setItem ("id", resultado.id)
setValor (resultado.id)
navigate ("/Auth")
    }
   
 
}



  return (
<>
{erro &&  <p id="msgerro">{msgErro}</p> }
{True &&  <p id="msgsucess">{MsgTrue}</p> }
{loading &&<button title='Entrar' onClick={btn} id="btnLog"> entrar
</button>}
{!loading && <div className="spinner">
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div>
<div className="dot"></div></div>}

</>
  )
}

export default BtnLogin

// asdasd
// 213