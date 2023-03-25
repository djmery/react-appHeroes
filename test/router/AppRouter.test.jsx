import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en el <AppRouter />', () => {

    // test('debe de mostrar el login si no está autenticado', () => {
    //     const contextValue = {
    //         logged: false,

    //     };
    //     render(
    //         <AuthContext.Provider value={contextValue}>
    //             <AppRouter />
    //         </AuthContext.Provider>

    //     );
    //     screen.debug();
    //     expect(screen.getAllByText("Login").length).toBe(2);

    // });

    test('debe de mostrar el componente de Marvel si está autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                id: "ABC",
                name: "Julia"
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        //screen.debug();
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    })

})