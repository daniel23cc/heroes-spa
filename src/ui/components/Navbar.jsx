import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = (props) => {

    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)
    //console.log(user)

    const onLogout = () => {
        navigate('/login', {
            replace: true,
        })

        logout()
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 animate__animated animate__backInLeft my-nav">
            <img
                src="/logos/logo.png"
                alt="Logo"
                width="60"
                height="40"
                className="logo"
            />
            <Link
                className="navbar-brand"
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {
                            user?.name
                        }
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                    >
                        Cerrar sesión
                    </button>
                </ul>
            </div>

        </nav>
    )
}