import { useState, createContext } from "react";

export const NavbarC = createContext ()

export const NavbarCProvider = (({children}) => {
const [Valor,setValor] = useState ()
const [idEdit,setIDedit] = useState ()
return (
    <NavbarC.Provider value={{Valor, setValor,idEdit,setIDedit}}>
        {children}
    </NavbarC.Provider>
)
}) 