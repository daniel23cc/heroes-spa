import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('Pruebas en PubliCRoute', () => {
    test('Si no auenicado, debe mostrar children', () => {

        const contextvalue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextvalue}>
                <PublicRoute >
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta publica')).toBeTruthy()
    })

    test('Debe de navegar si esta autenticado', () => {
        const contextvalue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={contextvalue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Pagina Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Pagina Marvel')).toBeTruthy()
    })
})