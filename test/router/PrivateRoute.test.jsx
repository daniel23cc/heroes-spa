import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src"
import { PrivateRoute } from "../../src/router/PrivateRoute"

describe('Prueba en <PrivateRoute>', () => {
    test('debe de mosrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                name: 'juan carlos',
                id: 'ABCDE',
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta privada')).toBeTruthy()
        expect(localStorage.setItem).toBeCalledWith('lastPath','/search?q=batman')
    })
})