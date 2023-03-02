import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"


export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)
    const { pathname, search } = useLocation()
    const lastPath = pathname + search;
    console.log(lastPath)
    localStorage.setItem('lastPath', lastPath)
    console.log('rerendered')
    return (logged)
        ? children
        : <Navigate to="/login" />
}
