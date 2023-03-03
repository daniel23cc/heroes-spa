import { render, screen } from "@testing-library/react"
import { MemoryRouter} from "react-router-dom"
import { AuthContext } from "../../src"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en AppRouter', () => {
    test('Debe de mostrar login si no autenicado', () => {

        const contextValue = {
            logged: false,
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login').length).toBe(1)
    })

    test('Debe de mostrar el componente de marvel si esta autemticado', () => {
        const userContext = {
            logged: true,
            user: {
                name: 'pepe',
                id: 'ABCDE',
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={userContext}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
    })
})

