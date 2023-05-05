import {BrowserRouter, Route,Routes} from "react-router-dom"
import './App.css'
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Cadastro from "./Pages/Cadastro/Cadastro"

import Error from "./Pages/Error/Error"
import Navbar from "./components/Navbar"
import Auth from "./Pages/Auth/Auth"
import Agendas from "./Pages/Agendas/Agendas"
import Criar from "./Pages/CriarAgendas/Criar"
import Auth2 from "./Pages/Auth/Auth2"
import Auth3 from "./Pages/Auth/Auth3"
import Editar from "./Pages/Editar/Editar"
function App() {


  return (
    <div className="container">
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cadastro" element={<Cadastro/>}></Route>
   
    <Route path="/Auth" element={ <Auth> <Agendas/> </Auth>} />
    <Route path="/Auth2" element={ <Auth2>  <Criar/> </Auth2>} />
    <Route path="/Auth3" element={ <Auth3>  <Editar/> </Auth3>} />


    </Routes>
<footer>Agenda react </footer>
    </BrowserRouter>
    </div>
  )
}

export default App
