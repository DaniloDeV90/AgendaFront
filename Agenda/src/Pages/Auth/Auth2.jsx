
import {Navigate} from "react-router-dom"

const Auth2 = ({children}) => {

const id = localStorage.getItem ("id")

return  id ? children :  <Navigate to="/Login"/>

}

export default Auth2