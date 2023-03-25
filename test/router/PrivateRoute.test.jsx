import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el <PrivateRoute />', () => {

    test('debe de mostrar el children si está auttenticado', () => {

        Storage.prototype.setItem = jest.fn();
        const contextValue = {
            logged: true
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']} >
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>

            </AuthContext.Provider >
        );
        //screen.debug();
        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenLastCalledWith('lastPath', '/search?q=batman');
    });

})