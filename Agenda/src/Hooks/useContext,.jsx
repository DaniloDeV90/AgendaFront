import { useContext } from "react";
import { NavbarC } from "../Context/NavbarContext";

export const useHooks = () => {
    const context = useContext (NavbarC)
if (!context) {
    console.log ("context nao definido")
}

    return context
} 