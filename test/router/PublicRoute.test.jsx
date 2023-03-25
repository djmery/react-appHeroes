import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";



describe('Pruebas en <PublicRoute />', () => {

    test('debe de mostrar el children sino está auttenticado', () => {
        const contextValue = {
            logged: false,
            user: {
                id: 'ABC',
                name: 'bat'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Privada</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        //screen.debug();
        expect(screen.getByText('Ruta Privada')).toBeTruthy();
    });

    test('debe de navegar si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'strider'
            }
        }

        render(
            < AuthContext.Provider value={contextValue} >
                {/* con el memoryRouter indico la ruta en la que me encuentro */}
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={<h1>Página Marvel</h1>} />

                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Página Marvel')).toBeTruthy();
    });
});