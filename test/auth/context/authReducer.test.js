
import { authReducer } from "../../../src/auth";
import { types } from "../../../src/auth/types/types";


describe('Pruebas en el AuthReducer', () => {

    const initialState = {
        logged: false,
    }

    test('debe de retornar el estado por defecto', () => {
        const newState = authReducer(initialState, {});
        expect(newState).toBe(initialState);

    });

    test('debe (login) llamar el login autenticar y estblecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'silviarc'
            }
        }

        const { logged, user } = authReducer(initialState, action);
        expect(logged).toBe(true);
        expect(user.name).toBe('silviarc');

    });

    test('debe (logout) borrar el name del usuario y logged en false', () => {
        const state = {
            logged: true,
            user: { id: 'abc', name: 'davidsm' }
        }

        const action = {
            type: types.logout,

        }

        const { logged } = authReducer(state, action);
        expect(logged).toBe(false);


    });


});