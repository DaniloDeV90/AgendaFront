import {BrowserRouter, Route,Routes} from "react-router-dom"
import './App.css'
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Cadastro from "./Pages/Cadastro/Cadastro"
import Error from "./Pages/Error/Error"

import Navbar from "./Components/Navbar"

import Agendas from "./Pages/Agendas/Agendas"
import Criar from "./Pages/CriarAgendas/Criar"

import Editar from "./Pages/Editar/Editar"
function App() {


  return (
    <div className="container">
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/cadastro" element={<Cadastro/>}></Route>
   
   <Route path="/:token/Agendas" element={ <Agendas/>}> </Route>
   <Route path="/:token/Editar" element={ <Editar/>}> </Route>
   <Route path="/:token/Criar" element={ <Criar/>}> </Route>
   
<Route path="/Erro" element= {<Error/>}/>

    </Routes>
<footer>Agenda react </footer>
    </BrowserRouter>
    </div>
  )
}

export default App
