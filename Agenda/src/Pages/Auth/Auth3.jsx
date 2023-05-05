
import {Navigate} from "react-router-dom"

const Auth3 = ({children}) => {

const id = localStorage.getItem ("id")

return  id ? children :  <Navigate to="/login"/>

}

export default Auth3