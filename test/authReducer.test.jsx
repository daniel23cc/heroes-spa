import { render, screen } from "@testing-library/react"
import { authReducer, types, LoginPage } from "../src"

describe('authReducer', () => {
    const initialState = {
        user: {
            id: 'ABC',
            name: 'fernando'
        },
        logged: false
    }
    test('Debe de retornar estado por defecto', () => {
        const newState = authReducer(initialState, {})
        console.log({ newState })
        expect(newState).toBe(initialState)
    })

    test('Debe de (login) llamar el login autenicar y establecer la autentificacion en true', () => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'fernando'
            }
        }

        const { logged } = authReducer(initialState, action)

        expect(logged).toBe(true)

    })

    test('Debe de (login) llamar el login autenicar y establecer la autentificacion en true (B)', () => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'fernando'
            }
        }

        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload,
        })

    })

    test('Debe de (login) llamar el login autenicar y establecer la autentificacion en true pero con boton', () => {
        //render(<LoginPage />)
        //screen.debug()
    })
    test('Debe de (logout) llamar el logout, borrar name y logged en false', () => {

        const state = {
            logged: true,
            user: {
                id: '1256D',
                name: 'Alberto'
            }
        }

        const action = {
            type: types.logout,
        }

        const { logged } = authReducer(state, action)
        //console.log({ state })
        expect(logged).toBe(false)
    })
})


/* test('Debe de agregar un toDo', () => {
    const action = {
        type: '[TODO] Add Todo',
        payload: {
            id: 2,
            description: 'Nuevo todo #2',
            done: false
        }
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)

})

test('Debe de eliminar un ToDo', () => {
    const action = {
        type: '[TODO] Remove Todo',
        payload: 1,
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(0)
})

test('Debe de realizar el Toggle del todo', () => {
    const action = {
        type: '[TODO] Toggle Todo',
        payload: 1
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(1)
    expect(newState[0].done).toBe(true)
}) */






/* 
test('Debe de mostrar comp por defecto', () => {

    useFetch.mockReturnValue({
        data: null,
        isLoading: true,
        hasError: null,
    })

    render(<MultipleCustomHooks />)
    expect(screen.getByText("Loading..."))
    expect(screen.getByText("Rick and Morty Notes"))

    const nextButton = screen.getByRole('button', { name: '+ id' })
    console.log(nextButton.disabled)

    expect(nextButton.disabled).toBeTruthy()
    screen.debug()
})

test('Debe de mostrar un quote', () => {
    useFetch.mockReturnValue({
        data: { name: "ricardito", gender: "Male" },
        isLoading: false,
        hasError: null,
    })

    render(<MultipleCustomHooks />)
    expect(screen)
    screen.debug();


})

test('Debe de llamar funcion de incrementar ', () => {
    useFetch.mockReturnValue({
        data: { name: "ricardio", gender: "Male" },
        isLoading: false,
        hasError: null,
    })



    render(<MultipleCustomHooks />)
    const nextButton = screen.getByRole('button', { name: '+ id' })
    fireEvent.click(nextButton)

    expect(mockIncrement).toHaveBeenCalled()

    
}) */