import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src"
import { Navbar } from "../../../src"

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en NavBar', () => {
    const user = {
        logged: true,
        user: {
            name: 'pepe',
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())

    test('Debe de mostrar el nombre del usuario', () => {
        render(
            <AuthContext.Provider value={user}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider >
        )

        expect(screen.getByText('pepe')).toBeTruthy()
    })

    test('Debe de mostrar el logout y navigate al preionarlo', () => {
        render(
            <AuthContext.Provider value={user}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider >
        )

        const logOutBtn = screen.getByRole('button')
        fireEvent.click(logOutBtn)

        expect(user.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login',{"replace":true})
    })
})
/* 
const preTag = screen.getByLabelText('pre')
        //console.log(preTag.innerHTML)
        expect(preTag.innerHTML).toContain(user.name) */