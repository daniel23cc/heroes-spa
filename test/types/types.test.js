import { types } from "../../src"


describe('Pruebas en types.js', () => {
    test('Debe de regresar estos types', () => {
        console.log(types)
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})