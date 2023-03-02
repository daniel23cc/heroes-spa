import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context"


export const LoginPage = () => {

    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/'
        login('Daniel Carrasco')
        navigate(lastPath, {
            replace: true,
        })
    }

    return (
        <div className="login-page-container">
            <h1>Buscador de heroes</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    )
}
