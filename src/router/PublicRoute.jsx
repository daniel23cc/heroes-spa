import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"


export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)
    //const location = useLocation()

    return (!logged)
        ? children
        : <Navigate to="/marvel" />
}
