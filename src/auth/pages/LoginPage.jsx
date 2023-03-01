import { useNavigate } from "react-router-dom"


export const LoginPage = () => {

    const navigate=useNavigate()

    const onLogin = () => {
        navigate('/',{
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
