import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes"

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en SearchPage', () => {
    beforeEach(() => jest.clearAllMocks())

    test('debe de mosrarse con valores defecto', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar a batman y el input con el valor de queryString', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        //screen.debug()
        //expect(container).toMatchSnapshot()

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')
        expect(img.src).toContain('/heroes/dc-batman.jpg')

        const alertDanger = screen.getByLabelText('alert-danger')
        expect(alertDanger.style.display).toBe('none')
        //screen.debug()

    })

    test('Debe de mostrar error si no encuentra hero (batman123)', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        //screen.debug()

        const alertDanger = screen.getByLabelText('alert-danger')
        expect(alertDanger.style).not.toBe('none')

    })

    test('navigate a pantalla nueva', () => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )
        screen.debug()
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { name: 'searchText', value: 'superman' } })

        const input2 = screen.getByRole('form')
        fireEvent.submit(input2)

        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman')

    })


})