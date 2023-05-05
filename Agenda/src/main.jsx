import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
  import {NavbarCProvider} from "./Context/NavbarContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarCProvider>
    <App />
    </NavbarCProvider>

  </React.StrictMode>,
)
